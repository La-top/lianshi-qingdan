// server/index.mjs — 本地 AI 营养师后端(零依赖,Node 20+)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

/* ---------- .env ---------- */
function loadEnv() {
  const p = path.join(ROOT, '.env');
  const out = {};
  if (fs.existsSync(p)) {
    fs.readFileSync(p, 'utf8').split(/\r?\n/).forEach(function (line) {
      const s = line.trim();
      if (!s || s.startsWith('#')) return;
      const i = s.indexOf('=');
      if (i < 0) return;
      out[s.slice(0, i).trim()] = s.slice(i + 1).trim();
    });
  }
  return out;
}
const ENV = loadEnv();
const PORT = Number(process.env.PORT || ENV.PORT || 8787);
const MODEL = process.env.MODEL || ENV.MODEL || 'deepseek-chat';
const API_KEY = process.env.DEEPSEEK_API_KEY || ENV.DEEPSEEK_API_KEY || '';
const BASE_URL = process.env.DEEPSEEK_BASE_URL || ENV.DEEPSEEK_BASE_URL || 'https://api.deepseek.com';
const MOCK = String(process.env.MOCK || ENV.MOCK || (API_KEY ? '0' : '1')) === '1';
const PRICE_IN = Number(process.env.PRICE_IN || ENV.PRICE_IN || 2);
const PRICE_OUT = Number(process.env.PRICE_OUT || ENV.PRICE_OUT || 8);
const LOG_FILE = path.join(__dirname, 'usage.log');

/* ---------- 食物库 ---------- */
function loadFoods() {
  const src = fs.readFileSync(path.join(ROOT, 'data', 'foods.js'), 'utf8');
  const re = /const FOODS_[A-Z]+ = (\[[\s\S]*?\]);/g;
  const all = [];
  let m;
  while ((m = re.exec(src))) {
    try { all.push.apply(all, JSON.parse(m[1])); } catch (e) {}
  }
  return all;
}
const FOODS = loadFoods();
const FOOD_INDEX = FOODS.map(function (f) {
  const serve = f.serving ? (f.serving.n + f.serving.unit) : '';
  return [f.id, f.name, f.cat, f.kcal, f.p, f.c, f.f, f.fiber, serve, (f.scenes || []).join('/')].join('|');
}).join('\n');

/* ---------- 规则 ---------- */
const RULES = [
  '你是「练食清单」的 AI 运动营养师,目前只服务一位用户。风格:专业教练式——直接、给数字、讲依据、不啰嗦、不恭维。',
  '严格边界:不做疾病诊断,不替代医生或注册营养师,不给出补剂的具体剂量(可以说是否需要、能否用食物替代、风险与反兴奋剂提示)。',
  '遇到疾病、正在用药、孕产哺乳、进食障碍史、体重骤降、女性月经异常或疑似 RED-S:先建议就医或咨询注册营养师,只给一般性安全信息,不给具体热量与餐单。',
  '热量目标不得低于 1200 千卡/天;用户要求极端节食时拒绝并给出更安全的替代方案。',
  '给出的餐单必须使用食物库中的 foodId,克数按每100g营养计算;不确定的信息要明确说明。',
  '输出用简体中文,结构清晰、可执行。'
].join('\n');

function profileText(profile) {
  if (!profile) return '(用户未填写档案)';
  const p = profile;
  const flags = (p.safetyFlags && p.safetyFlags.length) ? p.safetyFlags.join('、') : '无';
  return [
    '性别:' + (p.sex || '-') + ';年龄:' + (p.age || '-') + ';身高:' + (p.height || '-') + 'cm;体重:' + (p.weight || '-') + 'kg',
    '训练目标:' + (p.goal || '-') + ';训练年限:' + (p.years || '-') + '年;每周训练:' + (p.freq || '-') + '次;项目:' + (p.sport || '-') + ';强度:' + (p.intensity || '-'),
    '饮食偏好与忌口:' + ((p.diet && p.diet.length) ? p.diet.join('、') : '无'),
    '伤病与限制:' + (p.injury || '无'),
    '安全筛查标记:' + flags
  ].join('\n');
}

/* ---------- 输出后置安全检查 ---------- */
const SUPP_WORDS = ['肌酸', '咖啡因', 'β-丙氨酸', 'beta-丙氨酸', '维生素D', '维生素 D', '鱼油', '氮泵'];
function guardOutput(text) {
  let warn = '';
  const doseRe = /(每天|每日|一天)?\s*\d+(\.\d+)?\s*(mg|毫克|g|克|iu|IU)/;
  if (SUPP_WORDS.some(function (w) { return text.indexOf(w) >= 0; }) && doseRe.test(text)) {
    warn += '\n\n(安全提醒:补剂的具体剂量请咨询医生或注册营养师;这里只做科普与必要性判断。)';
  }
  if ((text.indexOf('糖尿病') >= 0 || text.indexOf('肾病') >= 0 || text.indexOf('怀孕') >= 0) &&
      text.indexOf('就医') < 0 && text.indexOf('医生') < 0) {
    warn += '\n\n(安全提醒:涉及疾病或特殊生理状态,请先咨询医生或注册营养师。)';
  }
  return warn;
}

/* ---------- 用量日志 ---------- */
function logUsage(row) {
  try { fs.appendFileSync(LOG_FILE, JSON.stringify(row) + '\n', 'utf8'); } catch (e) {}
}
function estimateTokens(text) { return Math.ceil((text || '').length / 2); }
function costOf(pin, pout) { return Number(((pin / 1e6) * PRICE_IN + (pout / 1e6) * PRICE_OUT).toFixed(4)); }

/* ---------- DeepSeek ---------- */
async function deepseekStream(messages, onDelta) {
  const res = await fetch(BASE_URL + '/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + API_KEY },
    body: JSON.stringify({ model: MODEL, messages: messages, stream: true, temperature: 0.6 })
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error('DeepSeek ' + res.status + ': ' + t.slice(0, 300));
  }
  const reader = res.body.getReader();
  const dec = new TextDecoder();
  let buf = '';
  while (true) {
    const r = await reader.read();
    if (r.done) break;
    buf += dec.decode(r.value, { stream: true });
    const lines = buf.split('\n');
    buf = lines.pop();
    for (const line of lines) {
      const s = line.trim();
      if (!s.startsWith('data:')) continue;
      const payload = s.slice(5).trim();
      if (payload === '[DONE]') continue;
      try {
        const j = JSON.parse(payload);
        const d = j.choices && j.choices[0] && j.choices[0].delta && j.choices[0].delta.content;
        if (d) onDelta(d);
      } catch (e) {}
    }
  }
}
async function deepseekJSON(messages) {
  const res = await fetch(BASE_URL + '/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + API_KEY },
    body: JSON.stringify({ model: MODEL, messages: messages, temperature: 0.3, response_format: { type: 'json_object' } })
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error('DeepSeek ' + res.status + ': ' + t.slice(0, 300));
  }
  const j = await res.json();
  const text = (j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content) || '';
  return { text: text, usage: j.usage || {} };
}

/* ---------- 演示计划(未填 Key 时) ---------- */
const MOCK_PLAN = {
  summary: '演示计划(未接入模型):增肌期,训练日碳水略高、休息日略低。',
  targets: { kcal: 2700, p: 150, c: 320, f: 75, fiber: 30, water: 3000 },
  trainingDay: {
    meals: [
      { name: '早餐', timing: '训练前2~3小时', items: [ { foodId: 'oats', name: '燕麦片', grams: 60 }, { foodId: 'milk', name: '牛奶(全脂)', grams: 250 }, { foodId: 'egg', name: '鸡蛋', grams: 100 }, { foodId: 'blueberry', name: '蓝莓', grams: 100 } ] },
      { name: '午餐', timing: '训练后正餐', items: [ { foodId: 'chicken-breast', name: '鸡胸肉', grams: 200 }, { foodId: 'white-rice', name: '白米饭(熟)', grams: 250 }, { foodId: 'broccoli', name: '西兰花', grams: 200 } ] },
      { name: '晚餐', timing: '睡前3小时', items: [ { foodId: 'salmon', name: '三文鱼', grams: 150 }, { foodId: 'sweet-potato', name: '红薯', grams: 200 }, { foodId: 'spinach', name: '菠菜', grams: 150 } ] },
      { name: '加餐', timing: '练后30分钟内', items: [ { foodId: 'banana', name: '香蕉', grams: 120 }, { foodId: 'yogurt', name: '希腊酸奶(无糖)', grams: 150 } ] }
    ]
  },
  restDay: {
    meals: [
      { name: '早餐', timing: '起床后1小时内', items: [ { foodId: 'oats', name: '燕麦片', grams: 50 }, { foodId: 'milk', name: '牛奶(全脂)', grams: 250 }, { foodId: 'egg', name: '鸡蛋', grams: 100 } ] },
      { name: '午餐', timing: '正常午餐', items: [ { foodId: 'beef-lean', name: '瘦牛肉(牛里脊)', grams: 150 }, { foodId: 'brown-rice', name: '糙米', grams: 60 }, { foodId: 'cabbage', name: '大白菜', grams: 200 } ] },
      { name: '晚餐', timing: '睡前3小时', items: [ { foodId: 'shrimp', name: '虾仁', grams: 150 }, { foodId: 'potato', name: '土豆', grams: 200 }, { foodId: 'tomato', name: '番茄', grams: 200 } ] }
    ]
  },
  swaps: [
    { from: '鸡胸肉', to: '鳕鱼 / 虾仁 / 瘦牛肉', note: '等蛋白替换,克数按蛋白含量折算' },
    { from: '白米饭', to: '糙米 / 红薯 / 土豆', note: '同碳水替换,注意生熟重差异' }
  ],
  notes: ['训练日碳水集中在练前与练后', '每天蔬菜 400~500g、水果 200~300g', '饮水 3L 左右,大量出汗时补充电解质'],
  safetyWarnings: []
};

/* ---------- 工具 ---------- */
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.json': 'application/json; charset=utf-8', '.md': 'text/markdown; charset=utf-8', '.svg': 'image/svg+xml', '.bat': 'text/plain; charset=utf-8' };
function sendJSON(res, code, obj) { res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8' }); res.end(JSON.stringify(obj)); }
function readBody(req) {
  return new Promise(function (resolve, reject) {
    let b = '';
    req.on('data', function (c) { b += c; if (b.length > 2e6) req.destroy(); });
    req.on('end', function () { try { resolve(b ? JSON.parse(b) : {}); } catch (e) { reject(e); } });
    req.on('error', reject);
  });
}
function serveStatic(req, res) {
  let rel = decodeURIComponent((req.url || '/').split('?')[0]);
  if (rel === '/') rel = '/index.html';
  const file = path.normalize(path.join(ROOT, rel));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end('forbidden'); }
  fs.readFile(file, function (err, data) {
    if (err) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); return res.end('404'); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
}

/* ---------- 路由 ---------- */
const server = http.createServer(async function (req, res) {
  const url = (req.url || '').split('?')[0];
  try {
    if (url === '/api/health') {
      return sendJSON(res, 200, { ok: true, model: MODEL, mock: MOCK, foods: FOODS.length });
    }

    if (url === '/api/chat' && req.method === 'POST') {
      const body = await readBody(req);
      const messages = Array.isArray(body.messages) ? body.messages.slice(-10) : [];
      const sys = RULES +
        '\n\n[用户档案]\n' + profileText(body.profile) +
        '\n\n[食物库(格式: id|名称|类别|热量|蛋白|碳水|脂肪|纤维|每份量|场景)]\n' + FOOD_INDEX;
      const payload = [{ role: 'system', content: sys }].concat(messages);
      res.writeHead(200, { 'Content-Type': 'text/event-stream; charset=utf-8', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
      if (MOCK) {
        const lastUser = (messages.filter(function (m) { return m.role === 'user'; }).pop() || {}).content || '';
        let demo;
        if (/糖尿病|肾病|甲状腺|高血压|怀孕|哺乳|进食障碍|月经|暴食|厌食/.test(lastUser)) {
          demo = '这类问题涉及疾病或特殊生理状态,我不能给你诊断,也不能替代医生或注册营养师。\n\n建议:先就医或咨询注册营养师,拿到允许的饮食范围后,我再帮你把它翻译成一日三餐的具体安排。\n\n在此之前,我能做的是:讲清楚一般性的营养原则(比如蛋白质与蔬菜的基本搭配),但不给针对疾病的调整方案。';
        } else if (/剂量|多少克|多少毫克|每天吃多少|肌酸|咖啡因|氮泵/.test(lastUser) && /补剂|粉|片|胶囊|肌酸|咖啡因/.test(lastUser)) {
          demo = '关于补剂,我这边只做科普与必要性判断,不给具体剂量。\n\n判断顺序建议:先看总热量与蛋白质是否吃够 → 再看训练时机与恢复 → 最后才考虑补剂。大多数情况下,食物能覆盖的部分优先用食物解决。\n\n具体剂量请咨询医生或注册营养师;参赛运动员还要注意产品污染与反兴奋剂风险。';
        } else {
          demo = '这是演示模式回复(还没接入 DeepSeek Key)。\n\n当前档案:\n' + profileText(body.profile) + '\n\n把 .env 里的 DEEPSEEK_API_KEY 填好、MOCK 改成 0,重启服务后就是真实模型回答。';
        }
        const warn = guardOutput(demo);
        if (warn) demo += warn;
        const chunks = demo.match(/[\s\S]{1,8}/g) || [];
        for (const ch of chunks) { res.write('data: ' + JSON.stringify({ delta: ch }) + '\n\n'); await new Promise(function (r) { setTimeout(r, 10); }); }
        res.write('data: ' + JSON.stringify({ done: true, usage: { mock: true } }) + '\n\n');
        return res.end();
      }
      let full = '';
      await deepseekStream(payload, function (d) { full += d; res.write('data: ' + JSON.stringify({ delta: d }) + '\n\n'); });
      const warn = guardOutput(full);
      if (warn) res.write('data: ' + JSON.stringify({ delta: warn }) + '\n\n');
      const pin = estimateTokens(sys) + estimateTokens(JSON.stringify(messages));
      const pout = estimateTokens(full);
      const cost = costOf(pin, pout);
      logUsage({ at: new Date().toISOString(), api: 'chat', prompt_tokens: pin, completion_tokens: pout, costCNY: cost, estimated: true });
      res.write('data: ' + JSON.stringify({ done: true, usage: { prompt_tokens: pin, completion_tokens: pout }, costCNY: cost }) + '\n\n');
      return res.end();
    }

    if (url === '/api/plan' && req.method === 'POST') {
      const body = await readBody(req);
      if (MOCK) return sendJSON(res, 200, { ok: true, mock: true, plan: MOCK_PLAN });
      const schema = [
        '请只输出 JSON,不要多余文字,字段如下:',
        '{"summary":"一句话概述",',
        '"targets":{"kcal":数字,"p":数字,"c":数字,"f":数字,"fiber":数字,"water":数字},',
        '"trainingDay":{"meals":[{"name":"早餐/午餐/晚餐/加餐","timing":"时机","items":[{"foodId":"来自食物库的id","name":"名称","grams":数字}]}]},',
        '"restDay":{"meals":[同上]},',
        '"swaps":[{"from":"食物","to":"替换方案","note":"说明"}],',
        '"notes":["建议1"],"safetyWarnings":["如需就医提示"]}',
        '要求:训练日与休息日都必须包含早/午/晚,训练日可加一次加餐;克数合理;全天热量与 targets 误差不超过10%;蛋白质优先满足;foodId 必须来自给定食物库。'
      ].join('\n');
      const sys = RULES +
        '\n\n[用户档案]\n' + profileText(body.profile) +
        '\n\n[食物库(格式: id|名称|类别|热量|蛋白|碳水|脂肪|纤维|每份量|场景)]\n' + FOOD_INDEX +
        '\n\n' + schema;
      const out = await deepseekJSON([{ role: 'system', content: sys }, { role: 'user', content: '请根据我的档案生成长期饮食计划(训练日/休息日两套模板)。' }]);
      let plan = null;
      try {
        plan = JSON.parse(out.text);
      } catch (e) {
        return sendJSON(res, 502, { ok: false, error: '模型返回的不是合法 JSON,请重试' });
      }
      if (!plan || !plan.targets || !plan.trainingDay || !plan.restDay) {
        return sendJSON(res, 502, { ok: false, error: '计划结构不完整,请重试' });
      }
      const pin = out.usage.prompt_tokens || estimateTokens(sys);
      const pout = out.usage.completion_tokens || estimateTokens(out.text);
      const cost = costOf(pin, pout);
      logUsage({ at: new Date().toISOString(), api: 'plan', prompt_tokens: pin, completion_tokens: pout, costCNY: cost });
      return sendJSON(res, 200, { ok: true, plan: plan, costCNY: cost, usage: { prompt_tokens: pin, completion_tokens: pout } });
    }

    if (url.startsWith('/api/')) return sendJSON(res, 404, { ok: false, error: 'unknown api' });
    return serveStatic(req, res);
  } catch (e) {
    return sendJSON(res, 500, { ok: false, error: String((e && e.message) || e) });
  }
});

function lanIPs() {
  const out = [];
  const nets = os.networkInterfaces();
  Object.keys(nets).forEach(function (k) {
    (nets[k] || []).forEach(function (n) { if (n.family === 'IPv4' && !n.internal) out.push(n.address); });
  });
  return out;
}
server.listen(PORT, '0.0.0.0', function () {
  console.log('===========================================');
  console.log(' AI 营养师本地服务已启动');
  console.log(' 本机访问:   http://localhost:' + PORT + '/coach.html');
  lanIPs().forEach(function (ip) { console.log(' 手机访问:   http://' + ip + ':' + PORT + '/coach.html'); });
  console.log(' 模型: ' + MODEL + (MOCK ? '  (演示模式:未填 API Key)' : '  (真实模型)'));
  console.log(' 食物库: ' + FOODS.length + ' 种');
  console.log(' 按 Ctrl+C 停止');
  console.log('===========================================');
});

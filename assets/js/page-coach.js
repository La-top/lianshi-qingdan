'use strict';
/* AI 营养师(试用版)页面逻辑 */
var coach = {
  profile: storeGet('coachProfile', null),
  plan: storeGet('coachPlan', null),
  chat: storeGet('coachChat', []),
  targetMode: storeGet('coachTargetMode', 'auto'),
  manualTargets: storeGet('coachTargets', null),
  adherence: storeGet('coachAdherence', null),
  busy: false
};

/* ---------- 顶部模式提示 ---------- */
function renderMode() {
  fetch('/api/health').then(function (r) { return r.json(); }).then(function (j) {
    var box = $('#modeCard');
    if (!j.ok) { box.innerHTML = "<span class='tag orange'>后端未就绪</span>"; return; }
    box.innerHTML = j.mock
      ? "<div class='row' style='justify-content:space-between;flex-wrap:wrap;gap:8px'><span class='tag orange'>演示模式</span><span class='small muted'>还没有接入 DeepSeek Key:现在可以完整体验界面,回答是演示内容。把项目里 .env 的 DEEPSEEK_API_KEY 填好、MOCK 改成 0,重启服务即可使用真实模型。</span></div>"
      : "<div class='row' style='justify-content:space-between;flex-wrap:wrap;gap:8px'><span class='tag green'>已连接 DeepSeek</span><span class='small muted'>模型:" + esc(j.model) + " · 食物库 " + j.foods + " 种</span></div>";
  }).catch(function () {
    $('#modeCard').innerHTML = "<span class='tag orange'>未检测到本地服务</span><span class='small muted' style='margin-left:8px'>请先双击「启动AI营养师.bat」启动本地后端,再从 http://localhost:8787/coach.html 打开本页。</span>";
  });
}

/* ---------- 档案 ---------- */
function fillForm() {
  var p = coach.profile;
  if (!p) return;
  $('#f-sex').value = p.sex || '男';
  $('#f-age').value = p.age || '';
  $('#f-height').value = p.height || '';
  $('#f-weight').value = p.weight || '';
  $('#f-goal').value = p.goal || '增肌';
  $('#f-years').value = p.years || 0;
  $('#f-freq').value = p.freq || '';
  $('#f-sport').value = p.sport || '';
  if (p.intensity) { $('#f-intensity').value = p.intensity; }
  $('#f-injury').value = p.injury || '';
  $$('.diet').forEach(function (c) { c.checked = (p.diet || []).indexOf(c.value) >= 0; });
  $$('.flag').forEach(function (c) { c.checked = (p.safetyFlags || []).indexOf(c.value) >= 0; });
  if (p.consent) $('#f-consent').checked = true;
}
function collectForm() {
  return {
    sex: $('#f-sex').value,
    age: Number($('#f-age').value) || '',
    height: Number($('#f-height').value) || '',
    weight: Number($('#f-weight').value) || '',
    goal: $('#f-goal').value,
    years: Number($('#f-years').value) || 0,
    freq: Number($('#f-freq').value) || '',
    sport: $('#f-sport').value.trim(),
    intensity: $('#f-intensity').value,
    injury: $('#f-injury').value.trim(),
    diet: $$('.diet').filter(function (c) { return c.checked; }).map(function (c) { return c.value; }),
    safetyFlags: $$('.flag').filter(function (c) { return c.checked; }).map(function (c) { return c.value; }),
    consent: $('#f-consent').checked
  };
}
function saveProfile() {
  var p = collectForm();
  if (!p.age || !p.height || !p.weight) { toast('请先填写年龄、身高、体重'); return false; }
  if (!p.consent) { toast('请先阅读并勾选免责声明与数据说明'); return false; }
  coach.profile = p;
  storeSet('coachProfile', p);
  $('#saveHint').textContent = '已保存 ' + new Date().toLocaleTimeString();
  toast('档案已保存');
  if (p.safetyFlags.length) {
    $('#planHint').innerHTML = "<span class='tag orange'>已勾选安全筛查项:计划会以一般性建议为主,并建议你咨询医生/注册营养师</span>";
  }
  return true;
}

/* ---------- 营养计算 ---------- */
function totalsOfItems(items) {
  var t = { kcal: 0, p: 0, c: 0, f: 0, fiber: 0 };
  (items || []).forEach(function (it) {
    var f = foodById(it.foodId);
    if (!f) return;
    var k = (Number(it.grams) || 0) / 100;
    t.kcal += f.kcal * k; t.p += f.p * k; t.c += f.c * k; t.f += f.f * k; t.fiber += (f.fiber || 0) * k;
  });
  t.kcal = Math.round(t.kcal);
  t.p = Math.round(t.p * 10) / 10; t.c = Math.round(t.c * 10) / 10;
  t.f = Math.round(t.f * 10) / 10; t.fiber = Math.round(t.fiber * 10) / 10;
  return t;
}
function dayTotals(day) {
  var t = { kcal: 0, p: 0, c: 0, f: 0, fiber: 0 };
  ((day && day.meals) || []).forEach(function (m) {
    var mt = totalsOfItems(m.items);
    t.kcal += mt.kcal; t.p += mt.p; t.c += mt.c; t.f += mt.f; t.fiber += mt.fiber;
  });
  t.kcal = Math.round(t.kcal);
  t.p = Math.round(t.p * 10) / 10; t.c = Math.round(t.c * 10) / 10;
  t.f = Math.round(t.f * 10) / 10; t.fiber = Math.round(t.fiber * 10) / 10;
  return t;
}

/* ---------- 饮食多样性 ---------- */
var CAT_LABEL2 = { protein: '蛋白质来源', staple: '主食', veg: '蔬菜', fruit: '水果', fat: '优质脂肪' };
function computeDiversity(plan) {
  var sets = { protein: [], staple: [], veg: [], fruit: [], fat: [] };
  var issues = [];
  [['训练日', plan.trainingDay], ['休息日', plan.restDay]].forEach(function (pair) {
    var day = pair[1] || {}; var dayCats = {};
    ((day.meals) || []).forEach(function (m) {
      (m.items || []).forEach(function (it) {
        var f = foodById(it.foodId); if (!f) return;
        if (sets[f.cat] && sets[f.cat].indexOf(f.id) < 0) sets[f.cat].push(f.id);
        dayCats[f.cat] = true;
      });
    });
    ['protein', 'staple', 'veg'].forEach(function (c) { if (!dayCats[c]) issues.push(pair[0] + '缺少' + CAT_LABEL2[c]); });
  });
  var count = {};
  Object.keys(sets).forEach(function (k) { count[k] = sets[k].length; });
  if (count.protein < 3) issues.push('蛋白质来源只有 ' + count.protein + ' 种,建议至少 3 种轮换');
  if (count.staple < 3) issues.push('主食只有 ' + count.staple + ' 种,建议米面与薯类/杂粮轮换');
  if (count.veg < 4) issues.push('蔬菜只有 ' + count.veg + ' 种,建议兼顾深色叶菜与瓜茄菌菇');
  if (count.fruit < 1) issues.push('计划里没有水果');
  if (count.fat < 1) issues.push('缺少明确的优质脂肪来源(坚果/种子/橄榄油/牛油果)');
  return { count: count, items: sets, issues: issues, passed: issues.length === 0 };
}
function diversityHTML(plan) {
  var d = computeDiversity(plan);
  var html = "<div class='card' style='margin-top:12px;background:#fbfdfb'><div class='row' style='justify-content:space-between;flex-wrap:wrap;gap:8px'><b>🥗 饮食多样性</b>" +
    (d.passed ? "<span class='tag green'>结构达标</span>" : "<span class='tag orange'>需要调整</span>") + "</div>";
  html += "<div class='row' style='gap:6px;margin-top:8px'>";
  Object.keys(CAT_LABEL2).forEach(function (k) {
    var names = (d.items[k] || []).map(function (id) { var f = foodById(id); return f ? f.name : id; });
    html += "<span class='tag'>" + CAT_LABEL2[k] + " " + d.count[k] + " 种" + (names.length ? ":" + names.join('/') : '') + "</span>";
  });
  html += "</div>";
  if (!d.passed) {
    html += "<div class='tipbox' style='margin-top:10px'><b>建议调整</b><ul class='list-plain'>";
    d.issues.forEach(function (x) { html += "<li>" + esc(x) + "</li>"; });
    html += "</ul><div class='small'>可以在下面直接说「帮我换掉重复的蛋白质/主食」,它会重新调整。</div></div>";
  }
  if (plan.rotation && plan.rotation.length) {
    html += "<div style='margin-top:10px'><b>本轮换建议</b><ul class='list-plain'>";
    plan.rotation.forEach(function (r) {
      html += "<li>" + esc(r.slot || '') + ":" + esc((r.options || []).join(' / ')) + "</li>";
    });
    html += "</ul></div>";
  }
  html += "</div>";
  return html;
}

/* ---------- 计划渲染 ---------- */
function mealsHTML(day, dayKey, dayLabel) {
  var html = "<div class='meal-block' style='margin-top:10px'><div class='meal-head'><span>" + dayLabel + "</span><span class='m-kcal'>" + dayTotals(day).kcal + " 千卡 · 蛋白 " + dayTotals(day).p + "g</span></div><div class='meal-body'>";
  ((day && day.meals) || []).forEach(function (m) {
    var mt = totalsOfItems(m.items);
    html += "<div style='padding:8px 0;border-bottom:1px dashed #edf1ed'><div class='row' style='justify-content:space-between'><b>" + esc(m.name) + "</b><span class='small muted'>" + esc(m.timing || '') + " · " + mt.kcal + " 千卡 · 蛋白 " + mt.p + "g</span></div>";
    (m.items || []).forEach(function (it) {
      var f = foodById(it.foodId);
      var unit = (f && f.basis && f.basis.indexOf('每100ml') >= 0) ? '毫升' : '克';
      html += "<div class='item-row' style='border-bottom:0;padding:3px 0'><span>" + (f ? foodPic(f, 20) : '') + "</span><span class='i-name'>" + esc(it.name || (f && f.name) || it.foodId) + "</span><span class='i-num'>× " + it.grams + " " + unit + "</span></div>";
    });
    html += "</div>";
  });
  html += "<div class='row' style='margin-top:10px;gap:8px'><button class='btn btn-soft btn-sm' data-act='log' data-day='" + dayKey + "'>📝 按这份记入今日记录</button><button class='btn btn-ghost btn-sm' data-act='planpage' data-day='" + dayKey + "'>🧮 带到餐单页</button></div>";
  html += "</div></div>";
  return html;
}
function renderPlan() {
  var p = coach.plan;
  if (!p) { $('#planBox').innerHTML = ''; return; }
  var T = p.targets || {};
  var html = "";
  if (p.summary) html += "<p style='font-weight:600'>" + esc(p.summary) + "</p>";
  html += "<div class='nut-grid'>";
  html += "<div class='nut-box kcal'><div class='n-v'>" + (T.kcal || '-') + "</div><div class='n-l'>千卡/天</div></div>";
  html += "<div class='nut-box'><div class='n-v'>" + (T.p || '-') + "g</div><div class='n-l'>蛋白质</div></div>";
  html += "<div class='nut-box'><div class='n-v'>" + (T.c || '-') + "g</div><div class='n-l'>碳水</div></div>";
  html += "<div class='nut-box'><div class='n-v'>" + (T.f || '-') + "g</div><div class='n-l'>脂肪</div></div>";
  html += "<div class='nut-box'><div class='n-v'>" + (T.fiber || '-') + "g</div><div class='n-l'>纤维</div></div>";
  html += "<div class='nut-box'><div class='n-v'>" + (T.water || '-') + "</div><div class='n-l'>水(ml)</div></div>";
  html += "</div>";
  html += diversityHTML(p);
  html += adherenceHTML();
  html += mealsHTML(p.trainingDay, 'trainingDay', '🏋️ 训练日');
  html += mealsHTML(p.restDay, 'restDay', '🛌 休息日');
  if (p.swaps && p.swaps.length) {
    html += "<div class='card' style='margin-top:12px;background:#fbfdfb'><b>替换建议</b><ul class='list-plain'>";
    p.swaps.forEach(function (s) { html += "<li>" + esc(s.from) + " → " + esc(s.to) + (s.note ? "(" + esc(s.note) + ")" : "") + "</li>"; });
    html += "</ul></div>";
  }
  if (p.notes && p.notes.length) {
    html += "<div class='card' style='margin-top:12px;background:#fbfdfb'><b>要点</b><ul class='list-plain'>";
    p.notes.forEach(function (n) { html += "<li>" + esc(n) + "</li>"; });
    html += "</ul></div>";
  }
  if (p.safetyWarnings && p.safetyWarnings.length) {
    html += "<div class='tipbox' style='margin-top:12px'><b>安全提示</b><ul class='list-plain'>";
    p.safetyWarnings.forEach(function (w) { html += "<li>" + esc(w) + "</li>"; });
    html += "</ul></div>";
  }
  $('#planBox').innerHTML = html;
}

/* ---------- 记入记录 / 带到餐单页 ---------- */
function applyToLog(dayKey) {
  var p = coach.plan; if (!p) return;
  var day = p[dayKey]; if (!day) return;
  var d = todayStr(); var n = 0;
  (day.meals || []).forEach(function (m) {
    var meal = (['早餐', '午餐', '晚餐', '加餐'].indexOf(m.name) >= 0) ? m.name : '午餐';
    (m.items || []).forEach(function (it) {
      if (!foodById(it.foodId)) return;
      addLogItem(it.foodId, Number(it.grams) || 0, meal, d); n++;
    });
  });
  toast('已记入今天 ' + n + ' 条,正在跳转记录页…');
  setTimeout(function () { location.href = 'log.html'; }, 900);
}
function applyToPlanPage(dayKey) {
  var p = coach.plan; if (!p) return;
  var T = p.targets || {};
  storeSet('planTargets', { kcal: T.kcal, p: T.p, c: T.c, f: T.f });
  var ids = [];
  ((p[dayKey] && p[dayKey].meals) || []).forEach(function (m) {
    (m.items || []).forEach(function (it) { if (foodById(it.foodId) && ids.indexOf(it.foodId) < 0) ids.push(it.foodId); });
  });
  storeSet('planPool', ids);
  toast('已带入餐单页,正在跳转…');
  setTimeout(function () { location.href = 'plan.html'; }, 700);
}

/* ---------- 对话 ---------- */
function chatHTML() {
  if (!coach.chat.length) return "<div class='small muted'>可以问:今天练腿吃什么?这餐怎么换?外食怎么点?</div>";
  return coach.chat.map(function (m) {
    var mine = m.role === 'user';
    return "<div style='margin:8px 0;text-align:" + (mine ? 'right' : 'left') + "'><div style='display:inline-block;max-width:86%;padding:8px 12px;border-radius:12px;background:" + (mine ? '#e4f6ec' : '#fff') + ";border:1px solid var(--line);white-space:pre-wrap'>" + esc(m.content) + "</div></div>";
  }).join('');
}
function renderChat() {
  var box = $('#chatBox');
  box.innerHTML = chatHTML();
  box.scrollTop = box.scrollHeight;
}
function sendChat() {
  if (coach.busy) return;
  var v = $('#chatInput').value.trim();
  if (!v) return;
  if (!coach.profile) { toast('先在上方保存档案'); return; }
  coach.chat.push({ role: 'user', content: v });
  coach.chat.push({ role: 'assistant', content: '' });
  $('#chatInput').value = '';
  renderChat();
  coach.busy = true;
  var last = coach.chat[coach.chat.length - 1];
  fetch('/api/chat', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ profile: coach.profile, messages: coach.chat.slice(0, -1).slice(-10) })
  }).then(function (res) {
    if (!res.ok) { return res.text().then(function (t) { throw new Error(t); }); }
    var reader = res.body.getReader();
    var dec = new TextDecoder();
    var buf = '';
    function pump() {
      return reader.read().then(function (r) {
        if (r.done) {
          coach.busy = false;
          storeSet('coachChat', coach.chat);
          renderChat();
          return;
        }
        buf += dec.decode(r.value, { stream: true });
        var parts = buf.split('\n');
        buf = parts.pop();
        parts.forEach(function (line) {
          var s = line.trim();
          if (s.indexOf('data:') !== 0) return;
          try {
            var j = JSON.parse(s.slice(5).trim());
            if (j.delta) { last.content += j.delta; renderChat(); }
            if (j.done && j.costCNY) { $('#costHint').textContent = '本次约 $' + j.costCNY + ' 元 · 输入 ' + (j.usage && j.usage.prompt_tokens || '-') + ' tokens'; }
          } catch (e) {}
        });
        return pump();
      });
    }
    return pump();
  }).catch(function (e) {
    last.content = '出错了:' + String(e.message || e) + '(检查本地服务是否启动、API Key 是否已填)';
    coach.busy = false;
    renderChat();
  });
}

/* ---------- 目标来源(自动/自己填) ---------- */
function setTargetMode(mode) {
  coach.targetMode = mode;
  storeSet('coachTargetMode', mode);
  $('#manualBox').style.display = (mode === 'manual') ? 'block' : 'none';
  $('#modeAuto').className = 'btn btn-sm ' + (mode === 'manual' ? 'btn-ghost' : 'btn-soft');
  $('#modeManual').className = 'btn btn-sm ' + (mode === 'manual' ? 'btn-soft' : 'btn-ghost');
  $('#planDesc').textContent = (mode === 'manual')
    ? '按你填写的每日目标生成:训练日/休息日两套菜单都要卡在同一组目标上。'
    : '由 AI 根据档案估算每日营养目标,再生成训练日 / 休息日两套模板。';
}
function fillManual() {
  var t = coach.manualTargets; if (!t) return;
  if (t.kcal) $('#tg-kcal').value = t.kcal;
  if (t.p) $('#tg-p').value = t.p;
  if (t.c) $('#tg-c').value = t.c;
  if (t.f) $('#tg-f').value = t.f;
  if (t.fiber) $('#tg-fiber').value = t.fiber;
  if (t.water) $('#tg-water').value = t.water;
}
function readManual() {
  return {
    kcal: Number($('#tg-kcal').value) || 0,
    p: Number($('#tg-p').value) || 0,
    c: Number($('#tg-c').value) || 0,
    f: Number($('#tg-f').value) || 0,
    fiber: Number($('#tg-fiber').value) || 0,
    water: Number($('#tg-water').value) || 0
  };
}
function parsePaste() {
  var s = $('#tg-paste').value.replace(/\s+/g, ' ').trim();
  if (!s) { toast('先粘贴一段目标文字'); return; }
  function pick(re) { var m = s.match(re); return m ? Number(m[1]) : null; }
  var kcal = pick(/(?:热量|能量|卡路里|千卡|kcal)\D{0,8}(\d+(?:\.\d+)?)/i);
  var p = pick(/(?:蛋白质|蛋白|protein)\D{0,8}(\d+(?:\.\d+)?)/i);
  var c = pick(/(?:碳水化合物|碳水|carbs?)\D{0,8}(\d+(?:\.\d+)?)/i);
  var f = pick(/(?:脂肪|fat)\D{0,8}(\d+(?:\.\d+)?)/i);
  var fiber = pick(/(?:膳食纤维|纤维|fiber)\D{0,8}(\d+(?:\.\d+)?)/i);
  var water = pick(/(?:饮水|饮水量|water)\D{0,8}(\d+(?:\.\d+)?)/i);
  if (kcal) $('#tg-kcal').value = kcal;
  if (p) $('#tg-p').value = p;
  if (c) $('#tg-c').value = c;
  if (f) $('#tg-f').value = f;
  if (fiber) $('#tg-fiber').value = fiber;
  if (water) $('#tg-water').value = water;
  toast(kcal || p || c || f ? '已解析填入,请核对后再生成' : '没识别到数字,试着写成:热量2200 蛋白150 碳水250 脂肪60');
}
function adherenceHTML() {
  var a = coach.adherence; if (!a || !a.rows) return '';
  var html = "<div class='card' style='margin-top:12px;background:#fbfdfb'><div class='row' style='justify-content:space-between;flex-wrap:wrap;gap:8px'><b>🎯 达标度(对照你填的目标)</b>" + (a.passed ? "<span class='tag green'>两套都达标</span>" : "<span class='tag orange'>有偏差</span>") + "</div>";
  a.rows.forEach(function (r) {
    html += "<div style='margin-top:8px'><b>" + esc(r.day) + "</b> <span class='small muted'>实际 " + r.actual.kcal + " 千卡 · 蛋白 " + r.actual.p + "g · 碳水 " + r.actual.c + "g · 脂肪 " + r.actual.f + "g</span><div class='row' style='gap:6px;margin-top:4px'>";
    [['kcal', '热量', 10], ['p', '蛋白', 10], ['c', '碳水', 15], ['f', '脂肪', 15], ['fiber', '纤维', 30]].forEach(function (x) {
      var d = r.deltas[x[0]];
      if (d === undefined) return;
      var ok = Math.abs(d) <= x[2];
      html += "<span class='tag " + (ok ? 'green' : 'orange') + "'>" + x[1] + " " + (d > 0 ? '+' : '') + d + "%</span>";
    });
    html += "</div></div>";
  });
  if (!a.passed) {
    html += "<div class='tipbox' style='margin-top:8px'><b>偏差说明</b><ul class='list-plain'>" + a.issues.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + "</ul><div class='small'>可以直接在对话里说「把热量调准到 X / 蛋白再补 Yg」让它重算。</div></div>";
  }
  html += "</div>";
  return html;
}

/* ---------- 生成计划 ---------- */
function genPlan() {
  if (!coach.profile) { toast('请先保存档案'); return; }
  $('#planHint').textContent = '正在生成,请稍候…(约 10~40 秒)';
  var reqBody = { profile: coach.profile };
  if (coach.targetMode === 'manual') {
    var mt = readManual();
    if (!(mt.kcal >= 800 && mt.kcal <= 6000)) { toast('热量请填 800~6000 千卡'); return; }
    if (!(mt.p >= 0 && mt.c >= 0 && mt.f >= 0)) { toast('蛋白/碳水/脂肪请填有效数字'); return; }
    reqBody.targets = mt;
    coach.manualTargets = mt; storeSet('coachTargets', mt);
  }
  fetch('/api/plan', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(reqBody) })
    .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
    .then(function (o) {
      if (!o.ok || !o.j.ok) { $('#planHint').textContent = ''; toast('生成失败:' + (o.j.error || '未知错误')); return; }
      coach.plan = o.j.plan;
      coach.adherence = o.j.adherence || null;
      storeSet('coachPlan', coach.plan);
      storeSet('coachAdherence', coach.adherence);
      renderPlan();
      $('#planHint').innerHTML = o.j.mock ? ("<span class='tag orange'>演示计划(未接模型)</span><span class='small muted' style='margin-left:6px'>达标度为按目标缩放的示意,接入 DeepSeek 后会真正优化到达标</span>") : ("<span class='tag green'>已生成</span>" + (o.j.costCNY ? " · 本次约 ¥" + o.j.costCNY : ""));
    })
    .catch(function (e) { $('#planHint').textContent = ''; toast('请求失败:' + String(e.message || e)); });
}

/* ---------- 事件绑定 ---------- */
$('#saveProfile').onclick = saveProfile;
$('#genPlanBtn').onclick = genPlan;
$('#modeAuto').onclick = function () { setTargetMode('auto'); };
$('#modeManual').onclick = function () { setTargetMode('manual'); };
$('#tg-parse').onclick = parsePaste;
$('#sendBtn').onclick = sendChat;
$('#chatInput').addEventListener('keydown', function (e) { if (e.key === 'Enter') sendChat(); });
$('#clearChat').onclick = function () { coach.chat = []; storeSet('coachChat', []); renderChat(); };
$('#planBox').addEventListener('click', function (e) {
  var b = e.target.closest('[data-act]');
  if (!b) return;
  var act = b.getAttribute('data-act'), day = b.getAttribute('data-day');
  if (act === 'log') applyToLog(day);
  if (act === 'planpage') applyToPlanPage(day);
});

/* ---------- 初始化 ---------- */
fillForm();
setTargetMode(coach.targetMode || 'auto');
fillManual();
renderPlan();
renderChat();
renderMode();
initHeader('coach');

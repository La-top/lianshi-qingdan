'use strict';
/* 一天餐单计划:目标均分三餐 + 食物池自动分餐配量 */
var MEAL_NAMES=['早餐','午餐','晚餐'];
var state={targets:storeGet('planTargets',{kcal:2000,p:120,c:250,f:60}),pool:storeGet('planPool',[]),q:'',cat:'',result:null};
function unitOf(f){ return (f.basis&&f.basis.indexOf('每100ml')>=0)?'毫升':'克'; }
function capOf(f){
  if(!f) return 100;
  if(f.basis&&f.basis.indexOf('每100ml')>=0) return 250;
  if(f.id==='egg') return 150;
  if(f.cat==='staple') return (f.basis&&f.basis.indexOf('干')>=0)?100:250;
  if(f.cat==='veg') return 250;
  if(f.cat==='fruit') return 200;
  if(f.cat==='fat') return f.id==='avocado'?100:20;
  return 250;
}
function round1(x){ return Math.round(x*10)/10; }
function totalsOf(assign,g){
  var t={kcal:0,p:0,c:0,f:0,fiber:0};
  assign.protein.concat(assign.staple,assign.veg,assign.fruit,assign.fat).forEach(function(f){
    var gr=g[f.id]; if(!gr) return; var k=gr/100;
    t.kcal+=f.kcal*k; t.p+=f.p*k; t.c+=f.c*k; t.f+=f.f*k; t.fiber+=(f.fiber||0)*k;
  });
  t.kcal=Math.round(t.kcal);
  ['p','c','f','fiber'].forEach(function(x){ t[x]=round1(t[x]); });
  return t;
}
function spreadCat(ids, kind){
  var fs=ids.map(foodById).filter(Boolean), res=[[],[],[]];
  if(!fs.length) return res;
  if(kind==='main'){
    for(var m=0;m<3;m++){ res[m].push(fs[m%fs.length]); }
    for(var i=3;i<fs.length;i++){ res[i%3].push(fs[i]); }
  } else if(kind==='veg'){
    if(fs.length===1){ res[1]=[fs[0]]; res[2]=[fs[0]]; }
    else if(fs.length===2){ res[1]=[fs[0]]; res[2]=[fs[1]]; }
    else { var order=[1,2,0]; for(var v=0;v<fs.length;v++){ res[order[v%3]].push(fs[v]); } }
  } else if(kind==='fruit'){ var o2=[0,2,1]; for(var a=0;a<fs.length;a++){ res[o2[a%3]].push(fs[a]); } }
  else { for(var b=0;b<fs.length;b++){ res[b%3].push(fs[b]); } }
  return res;
}
function allocMeal(assign, mt){
  var g={};
  function put(f, gr){ if(gr>0) g[f.id]=(g[f.id]||0)+gr; }
  function allocGroup(list, key, demand){
    if(!list.length || !(demand>0)) return;
    var caps=list.map(capOf);
    var capSum=0;
    list.forEach(function(f,i){ capSum+= f[key]/100*caps[i]; });
    if(capSum<=0) return;
    var scale= demand<capSum ? demand/capSum : 1;
    list.forEach(function(f,i){ put(f, caps[i]*scale); });
  }
  allocGroup(assign.protein,'p', mt.p);
  var cur=totalsOf(assign,g);
  allocGroup(assign.staple,'c', Math.max(0, mt.c-cur.c));
  cur=totalsOf(assign,g);
  allocGroup(assign.fat,'f', Math.max(0, mt.f-cur.f));
  cur=totalsOf(assign,g);
  var budget=mt.kcal-cur.kcal;
  var fillers=assign.veg.concat(assign.fruit);
  var hasVeg=assign.veg.length>0;
  if(fillers.length){
    var defs=fillers.map(function(f){ return f.cat==='veg'?200:150; });
    var want=0;
    fillers.forEach(function(f,i){ want+= f.kcal/100*defs[i]; });
    var scale= budget>0 ? Math.min(1, budget/want) : 0;
    fillers.forEach(function(f,i){
      var gr;
      if(f.cat==='veg'){ gr= hasVeg ? Math.max(80, defs[i]*scale) : defs[i]*scale; }
      else { gr= defs[i]*scale; }
      put(f, gr);
    });
  }
  Object.keys(g).forEach(function(id){ g[id]=Math.max(0, Math.round(g[id])); });
  var items=[];
  assign.protein.concat(assign.staple,assign.veg,assign.fruit,assign.fat).forEach(function(f){
    if(g[f.id]>0) items.push({fid:f.id, g:g[f.id]});
  });
  return {items:items, tot:totalsOf(assign,g)};
}

function buildPlan(){
  var T=state.targets;
  var per={kcal:T.kcal/3, p:T.p/3, c:T.c/3, f:T.f/3};
  var byCat={protein:[],staple:[],veg:[],fruit:[],fat:[]};
  state.pool.forEach(function(id){ var f=foodById(id); if(f) byCat[f.cat].push(id); });
  var spread={};
  spread.protein=spreadCat(byCat.protein,'main');
  spread.staple=spreadCat(byCat.staple,'main');
  spread.veg=spreadCat(byCat.veg,'veg');
  spread.fruit=spreadCat(byCat.fruit,'fruit');
  spread.fat=spreadCat(byCat.fat,'fat');
  var meals=[];
  for(var mi=0;mi<3;mi++){
    var assign={protein:[],staple:[],veg:[],fruit:[],fat:[]};
    ['protein','staple','veg','fruit','fat'].forEach(function(k){ assign[k]=spread[k][mi]; });
    meals.push(allocMeal(assign, per));
  }
  var day={kcal:0,p:0,c:0,f:0,fiber:0}, foodDay={};
  meals.forEach(function(m){
    day.kcal+=m.tot.kcal; day.p+=m.tot.p; day.c+=m.tot.c; day.f+=m.tot.f; day.fiber+=m.tot.fiber;
    m.items.forEach(function(it){ foodDay[it.fid]=(foodDay[it.fid]||0)+it.g; });
  });
  day.kcal=Math.round(day.kcal);
  ['p','c','f','fiber'].forEach(function(x){ day[x]=round1(day[x]); });
  return {date:todayStr(), targets:T, meals:meals, day:day, foodDay:foodDay};
}
function pctDiff(actual,target){ return target? Math.round((actual-target)/target*100):0; }
function macroKeyOf(cat){ return cat==='protein'?'p':(cat==='staple'?'c':(cat==='fat'?'f':'kcal')); }
function catCands(cat, maxN){
  var list=[];
  FOODS.forEach(function(f){ if(f.cat===cat && state.pool.indexOf(f.id)<0) list.push(f); });
  list.sort(function(a,b){
    var k=macroKeyOf(cat);
    if(k==='kcal') return b.kcal-a.kcal;
    return b[k]-a[k];
  });
  return list.slice(0,maxN);
}
function estGrams(f, needMacro){
  var k=macroKeyOf(f.cat);
  var per=(k==='kcal')? f.kcal : f[k];
  if(!(per>0)) return 0;
  var g=Math.ceil(needMacro/per*100/5)*5;
  return Math.min(capOf(f), Math.max(5,g));
}
function buildAdvice(){
  var out=[];
  var T=state.targets, day=state.result.day;
  var macroKcal=Math.round(4*T.p+4*T.c+9*T.f);
  if(Math.abs(macroKcal-T.kcal)/T.kcal>0.15){
    out.push({t:'warn', h:'你填的目标之间不太匹配', b:'按蛋白质/碳水×4、脂肪×9换算,目标热量约 '+macroKcal+' 千卡,和你填的 '+T.kcal+' 千卡差 '+Math.abs(macroKcal-T.kcal)+' 千卡。以下按宏量营养优先配餐,热量结果会跟随它们。'});
  }
  var rows=[{k:'p',label:'蛋白质',cat:'protein'},{k:'c',label:'碳水',cat:'staple'},{k:'f',label:'脂肪',cat:'fat'},{k:'kcal',label:'热量',cat:'kcal'}];
  rows.forEach(function(r){
    var need=Math.round((T[r.k]-day[r.k])*10)/10;
    var pct=pctDiff(day[r.k], T[r.k]);
    if(Math.abs(pct)<=10) return;
    if(need>0){
      var cands=catCands(r.cat,3).map(function(f){
        return {fid:f.id, label:f.name+' 约'+estGrams(f, need)+' '+unitOf(f)};
      });
      out.push({t:'fix', h:r.label+'还差约 '+need+(r.k==='kcal'?' 千卡':'g')+'('+pct+'%)', b:'目标暂时够不到:可点下面的食物加进清单后重新生成,或适当降低目标。', cands:cands});
    } else {
      out.push({t:'warn', h:r.label+'超出目标约 '+Math.abs(need)+(r.k==='kcal'?' 千卡':'g')+'('+pct+'%)', b:'总量偏高:吃的时候可把对应食物减量,或把目标调高一点。'});
    }
  });
  var vegIn=state.pool.some(function(id){ var f=foodById(id); return f&&f.cat==='veg'; });
  var protIn=state.pool.some(function(id){ var f=foodById(id); return f&&f.cat==='protein'; });
  var stapIn=state.pool.some(function(id){ var f=foodById(id); return f&&f.cat==='staple'; });
  if(!protIn){
    out.push({t:'fix', h:'全天没有高蛋白食物', b:'蛋白质很难达标。建议加入:鸡胸肉、鸡蛋、瘦牛肉、虾仁、豆腐等。', cands:catCands('protein',3).map(function(f){ return {fid:f.id, label:f.name+' 约'+capOf(f)+' '+unitOf(f)}; })});
  }
  if(!stapIn){
    out.push({t:'fix', h:'全天没有主食(碳水来源)', b:'建议加一份主食,如糙米、燕麦、红薯、全麦面包等。', cands:catCands('staple',3).map(function(f){ return {fid:f.id, label:f.name+' 约'+capOf(f)+' '+unitOf(f)}; })});
  }
  if(!vegIn){
    out.push({t:'fix', h:'没选蔬菜', b:'每餐最好都有蔬菜(补纤维和维生素)。建议加:西兰花、菠菜、番茄、黄瓜等。', cands:catCands('veg',3).map(function(f){ return {fid:f.id, label:f.name+' 约200 '+unitOf(f)}; })});
  } else {
    state.result.meals.forEach(function(m,mi){
      if(mi===0) return;
      var hasVeg=m.items.some(function(it){ var f=foodById(it.fid); return f&&f.cat==='veg'; });
      if(!hasVeg){
        out.push({t:'fix', h:MEAL_NAMES[mi]+'没有蔬菜', b:'建议这一餐加一份蔬菜。', cands:catCands('veg',2).map(function(f){ return {fid:f.id, label:f.name+' 约200 '+unitOf(f)}; })});
      }
    });
  }
  if(day.kcal>0){
    var pp=Math.round(day.p*4/day.kcal*100), cp=Math.round(day.c*4/day.kcal*100), fp=Math.round(day.f*9/day.kcal*100);
    var notes=[];
    if(pp<12) notes.push('蛋白质供能占比 '+pp+'%(偏低,建议多吃蛋白)');
    if(pp>35) notes.push('蛋白质供能占比 '+pp+'%(偏高,可能挤占碳水)');
    if(cp<40) notes.push('碳水供能占比 '+cp+'%(偏低,训练容易没劲)');
    if(cp>60) notes.push('碳水供能占比 '+cp+'%(偏高,注意控制主食)');
    if(fp<20) notes.push('脂肪供能占比 '+fp+'%(偏低,可加坚果/橄榄油)');
    if(fp>35) notes.push('脂肪供能占比 '+fp+'%(偏高,少油少肥肉)');
    if(notes.length) out.push({t:'warn', h:'供能比提醒', b:notes.join('; ')});
  }
  if(day.fiber<15 && day.fiber>0){
    out.push({t:'warn', h:'膳食纤维约 '+day.fiber+'g(偏低)', b:'可多吃蔬菜水果(建议每天 25g 左右)。'});
  }
  return out;
}

/* ---------- 界面 ---------- */
var CAT_TABS=[{k:'',t:'全部'},{k:'protein',t:'高蛋白'},{k:'staple',t:'主食碳水'},{k:'veg',t:'蔬菜'},{k:'fruit',t:'水果'},{k:'fat',t:'优质脂肪'}];
function saveTargets(){ storeSet('planTargets', state.targets); }
function savePool(){ storeSet('planPool', state.pool); $('#selCount').textContent=state.pool.length; }
function renderPicker(){
  $('#pCat').innerHTML=CAT_TABS.map(function(c){ return '<button class="tag-chip'+(state.cat===c.k?' selected':'')+'" data-c="'+c.k+'">'+c.t+'</button>'; }).join('');
  var q=state.q.trim().toLowerCase();
  var list=FOODS.filter(function(f){
    if(CORE_CATS.indexOf(f.cat)<0) return false;
    if(state.cat && f.cat!==state.cat) return false;
    if(q){ var hay=(f.name+' '+(f.alias||'')).toLowerCase(); if(hay.indexOf(q)<0) return false; }
    return true;
  });
  var html='';
  list.forEach(function(f){
    var inPool=state.pool.indexOf(f.id)>=0;
    html+="<div class='item-row' style='padding:8px 12px'>"+foodPic(f,24)+"<span class='i-name'>"+esc(f.name)+"</span><span class='i-num'>"+f.kcal+" 千卡/100g · 蛋白 "+f.p+"g</span><span class='i-acts'>"+(inPool?"<button class='btn btn-soft btn-sm' disabled>已选</button>":"<button class='btn btn-soft btn-sm' data-add='"+f.id+"'>＋ 加入</button>")+"</span></div>";
  });
  if(!list.length) html="<div class='small muted' style='padding:14px 12px'>没有匹配的食物</div>";
  $('#pListWrap').innerHTML=html;
  $('#selCount').textContent=state.pool.length;
}
function renderSelChips(){
  var html='';
  state.pool.forEach(function(id){
    var f=foodById(id); if(!f) return;
    html+="<span class='tag' style='padding:4px 6px 4px 10px;font-size:13px'>"+foodPic(f,18)+" "+esc(f.name)+" <button class='icon-btn' style='margin-left:2px;width:20px;height:20px;line-height:1' data-rm='"+id+"' title='移除'>✕</button></span>";
  });
  if(!state.pool.length) html='<span class="muted small">还没选,去上面点「加入」</span>';
  $('#selChips').innerHTML=html;
}
$('#pCat').onclick=function(e){ var b=e.target.closest('[data-c]'); if(!b) return; state.cat=b.getAttribute('data-c'); renderPicker(); };
$('#pListWrap').onclick=function(e){ var b=e.target.closest('[data-add]'); if(!b) return; var id=b.getAttribute('data-add'); if(state.pool.indexOf(id)<0) state.pool.push(id); savePool(); renderPicker(); renderSelChips(); };
$('#selChips').onclick=function(e){ var b=e.target.closest('[data-rm]'); if(!b) return; var id=b.getAttribute('data-rm'); state.pool=state.pool.filter(function(x){ return x!==id; }); savePool(); renderPicker(); renderSelChips(); };
$('#pq').addEventListener('input',function(){ state.q=$('#pq').value; renderPicker(); });
$('#pqClear').onclick=function(){ state.q=''; $('#pq').value=''; renderPicker(); };

function readTargets(){
  return {kcal:Number($('#t-kcal').value), p:Number($('#t-p').value), c:Number($('#t-c').value), f:Number($('#t-f').value)};
}
function validTarget(t){
  if(!(t.kcal>=800&&t.kcal<=6000)) return '热量请填 800~6000 千卡';
  if(!(t.p>=30&&t.p<=300)) return '蛋白质请填 30~300 克';
  if(!(t.c>=30&&t.c<=600)) return '碳水请填 30~600 克';
  if(!(t.f>=20&&t.f<=200)) return '脂肪请填 20~200 克';
  return '';
}
function setInputs(){ $('#t-kcal').value=state.targets.kcal; $('#t-p').value=state.targets.p; $('#t-c').value=state.targets.c; $('#t-f').value=state.targets.f; }
['t-kcal','t-p','t-c','t-f'].forEach(function(id){
  document.getElementById(id).addEventListener('change',function(){
    var t=readTargets();
    state.targets={kcal:(t.kcal>0?t.kcal:state.targets.kcal), p:(t.p>0?t.p:state.targets.p), c:(t.c>0?t.c:state.targets.c), f:(t.f>0?t.f:state.targets.f)};
    saveTargets();
  });
});

function renderResult(){
  var r=state.result; if(!r) return;
  var html='';
  r.meals.forEach(function(m,mi){
    var per={kcal:Math.round(r.targets.kcal/3), p:round1(r.targets.p/3), c:round1(r.targets.c/3), f:round1(r.targets.f/3)};
    html+="<div class='meal-block' style='margin-top:14px'><div class='meal-head'><span>"+MEAL_NAMES[mi]+"</span><span class='m-kcal'>"+m.tot.kcal+" 千卡 · 蛋白 "+m.tot.p+"g</span></div><div class='meal-body'>";
    m.items.forEach(function(it){
      var f=foodById(it.fid); if(!f) return;
      var k=it.g/100;
      var kcal=Math.round(f.kcal*k);
      var extra=(f.id==='egg')?'(约'+(Math.round(it.g/44*10)/10)+'个)':'';
      html+="<div class='item-row'><span style='font-size:20px'>"+foodPic(f,20)+"</span><span class='i-name'>"+esc(f.name)+"</span><span class='i-num'>× "+it.g+" "+unitOf(f)+extra+" · ≈"+kcal+" 千卡</span></div>";
    });
    html+="<div class='small muted' style='padding-top:4px'>本餐参考目标:热量 "+per.kcal+" 千卡 · 蛋白 "+per.p+"g</div></div></div>";
  });
  var T=r.targets;
  function line(label,actual,unit,target){
    var pct=pctDiff(actual,target);
    var ok=Math.abs(pct)<=10;
    var col=ok?'var(--green-d)':'var(--orange-d)';
    var mark=ok?'✓':'Δ';
    return "<div class='row' style='justify-content:space-between'><span>"+mark+" "+label+"</span><b style='color:"+col+"'>"+actual+" "+unit+" <span class='small muted'>目标 "+target+"("+(pct>0?'+':'')+pct+"%)</span></b></div>";
  }
  html+="<div class='card' style='margin-top:14px'><h3 style='margin-bottom:6px'>全天合计(对照目标)</h3>";
  html+=line('热量', r.day.kcal, '千卡', T.kcal);
  html+=line('蛋白质', r.day.p, 'g', T.p);
  html+=line('碳水', r.day.c, 'g', T.c);
  html+=line('脂肪', r.day.f, 'g', T.f);
  html+="<p class='small muted' style='margin-top:6px'>膳食纤维约 "+r.day.fiber+"g(参考)。各食物全天合计:</p><div class='row' style='gap:6px'>";
  Object.keys(r.foodDay).forEach(function(id){
    var f=foodById(id); if(!f) return;
    html+="<span class='tag'>"+foodPic(f,16)+" "+esc(f.name)+" × "+r.foodDay[id]+" "+unitOf(f)+"</span>";
  });
  html+="</div></div>";
  var advice=buildAdvice();
  if(advice.length){
    html+="<div class='card' style='margin-top:14px'><h3 style='margin-bottom:8px'>🩺 结构与调整建议</h3>";
    advice.forEach(function(a){
      var bg=(a.t==='fix')?'#fff1e6':(a.t==='warn'?'#eef6ff':'#e4f6ec');
      var bd=(a.t==='fix')?'#ffdcc0':(a.t==='warn'?'#cfe5ff':'#bcddcb');
      html+="<div style='background:"+bg+";border:1px solid "+bd+";border-radius:12px;padding:10px 12px;margin-bottom:8px'><b>"+esc(a.h)+"</b><div class='small' style='margin-top:2px'>"+esc(a.b)+"</div>";
      if(a.cands&&a.cands.length){
        html+="<div class='row' style='gap:6px;margin-top:8px'>";
        a.cands.forEach(function(cd){ html+="<button class='btn btn-soft btn-sm' data-cand='"+cd.fid+"'>＋ "+esc(cd.label)+"</button>"; });
        html+="</div>";
      }
      html+="</div>";
    });
    html+="</div>";
  }
  html+="<div class='card' style='margin-top:14px;text-align:center'><p class='small muted'>点「记入当天」会把上面餐单追加到今天记录(不清空已有内容)。</p><div class='row' style='justify-content:center;gap:8px'><button class='btn btn-primary' id='recBtn'>📝 按餐单记入当天</button><button class='btn btn-ghost' id='clearPlan'>清空重做</button></div></div>";
  $('#result').innerHTML=html;
  $('#result').scrollIntoView({behavior:'smooth',block:'start'});
}
$('#result').addEventListener('click',function(e){
  var cand=e.target.closest('[data-cand]');
  if(cand){
    var id=cand.getAttribute('data-cand');
    if(state.pool.indexOf(id)<0){ state.pool.push(id); savePool(); renderPicker(); renderSelChips(); }
    state.result=buildPlan();
    storeResult(); renderResult();
    return;
  }
  if(e.target.closest('#recBtn')){ recordPlan(); return; }
  if(e.target.closest('#clearPlan')){
    if(confirm('清空食物池和当前结果?')){
      state.pool=[]; savePool(); state.result=null; storeSet('planResult',null);
      $('#result').innerHTML=''; renderPicker(); renderSelChips();
    }
  }
});
function storeResult(){
  storeSet('planResult',{date:state.result.date, targets:state.targets, pool:state.pool.slice(), meals:state.result.meals, day:state.result.day, foodDay:state.result.foodDay});
}
function generateNow(){
  if(!state.pool.length){ toast('先在食物池里加入几个食物'); return; }
  state.result=buildPlan();
  storeResult(); renderResult();
}
function recordPlan(){
  if(!state.result) return;
  if(!confirm('把这份餐单追加到今天('+fmtDate(todayStr())+')的记录?已有记录不会被清空,可能产生重复。')) return;
  var d=todayStr();
  state.result.meals.forEach(function(m,mi){
    m.items.forEach(function(it){ addLogItem(it.fid, it.g, MEAL_NAMES[mi], d); });
  });
  toast('已按餐单记入今天,正在跳转记录页…');
  setTimeout(function(){ location.href='log.html'; }, 900);
}
$('#genBtn').onclick=function(){
  var t=readTargets();
  var err=validTarget(t);
  if(err){ toast(err); return; }
  state.targets=t; saveTargets();
  generateNow();
};
function init(){
  setInputs();
  renderPicker();
  renderSelChips();
  var saved=storeGet('planResult',null);
  if(saved && saved.date===todayStr() && saved.targets && Array.isArray(saved.pool)){
    state.targets=saved.targets; state.pool=saved.pool;
    setInputs(); renderPicker(); renderSelChips();
    state.result=buildPlan();
    renderResult();
  }
  initHeader('plan');
}
init();

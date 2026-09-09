'use strict';
var goals=['cut','gain','maintain'];
var scenes=[{k:'meal',t:'🍽️ 正餐'},{k:'snack',t:'🍌 加餐'},{k:'post',t:'🏋️ 练后'}];
var prefs=[{k:'veg',t:'素食(不吃肉和海产)'},{k:'noDairy',t:'不吃乳制品'},{k:'noSeafood',t:'不吃海鲜'},{k:'noNut',t:'不吃坚果'}];
var st={goal:(new URLSearchParams(location.search).get('goal')||''),scene:'',prefs:{}};
var goalEl=$('#goalGroup'), sceneEl=$('#sceneGroup'), prefEl=$('#prefGroup');
function paintChips(){
  goalEl.innerHTML=goals.map(function(g){var m=GOAL_META[g];return '<button class="goal-chip'+(st.goal===g?' selected':'')+'" data-g="'+g+'"><span class="g-ico">'+m.ico+'</span>'+m.label+'</button>';}).join('');
  sceneEl.innerHTML=scenes.map(function(s){return '<button class="step-chip'+(st.scene===s.k?' selected':'')+'" data-s="'+s.k+'">'+s.t+'</button>';}).join('');
  prefEl.innerHTML=prefs.map(function(p){return '<button class="tag-chip'+(st.prefs[p.k]?' selected':'')+'" data-p="'+p.k+'">'+p.t+'</button>';}).join('')+'<button class="tag-chip" data-p="none">↺ 清空忌口</button>';
}
goalEl.onclick=function(e){var b=e.target.closest('[data-g]');if(!b)return;st.goal=b.getAttribute('data-g');paintChips();syncBtn();};
sceneEl.onclick=function(e){var b=e.target.closest('[data-s]');if(!b)return;st.scene=b.getAttribute('data-s');paintChips();syncBtn();};
prefEl.onclick=function(e){var b=e.target.closest('[data-p]');if(!b)return;var k=b.getAttribute('data-p');if(k==='none'){st.prefs={};}else{st.prefs[k]=!st.prefs[k];}paintChips();syncBtn();};
function syncBtn(){ var ok=!!(st.goal&&st.scene); $('#goBtn').disabled=!ok; $('#hint').textContent=ok?'可以点按钮了':'先选好目标和场景'; }
function sceneWhy(f){
  if(st.scene==='meal'){
    if(f.cat==='protein')return ['提供蛋白质,做主菜']; if(f.cat==='staple')return ['补充主食碳水']; if(f.cat==='veg')return ['低热量蔬菜,配餐刚好'];
  }
  if(st.scene==='snack'){ if(f.snack)return ['适合加餐,方便随手吃']; }
  if(st.scene==='post'){ if(f.quick)return ['练后能快速吸收']; if(f.cat==='protein')return ['补充蛋白质帮助恢复']; }
  return [];
}
function goalWhy(f){
  var r=[];
  if(f.goals.indexOf(st.goal)>=0)r.push(GOAL_META[st.goal].label+'友好');
  if(st.goal==='cut'){ if(f.fiber>=3)r.push('膳食纤维高'); if(f.p>=15)r.push('高蛋白'); if(f.kcal<=60)r.push('热量很低'); }
  if(st.goal==='gain'){ if(f.p>=15)r.push('高蛋白'); if(f.cat==='staple')r.push('提供碳水'); }
  return r;
}
function compute(){
  var out=[];
  FOODS.forEach(function(f){
    if(CORE_CATS.indexOf(f.cat)<0)return;
    if(st.prefs.veg&&(f.tags.meat||f.tags.seafood))return;
    if(st.prefs.noDairy&&f.tags.dairy)return;
    if(st.prefs.noSeafood&&f.tags.seafood)return;
    if(st.prefs.noNut&&f.tags.nut)return;
    var s=f.goals.indexOf(st.goal)>=0?3:0;
    if(st.scene==='meal'){ if(f.cat==='protein')s+=3; if(f.cat==='veg')s+=2; if(f.cat==='staple')s+=1; }
    else if(st.scene==='snack'){ if(f.snack)s+=3; else if(f.cat==='fruit'||f.cat==='fat')s+=1; }
    else if(st.scene==='post'){ if(f.quick)s+=3; if(f.cat==='protein')s+=1; }
    if(st.goal==='cut'){ if(f.fiber>=3)s+=1; if(f.p>=15)s+=1; if(f.kcal>450)s-=1; if(f.kcal<=60&&f.cat!=='staple')s+=1; }
    if(st.goal==='gain'){ if(f.p>=15)s+=1; if(f.cat==='staple')s+=1; }
    if(st.goal==='maintain'){ if(f.cat==='staple'||f.cat==='veg'||f.cat==='fruit')s+=1; }
    if(s>0)out.push({f:f,s:s});
  });
  out.sort(function(a,b){return b.s-a.s;});
  return out.slice(0,15);
}
function renderResults(){
  var res=compute();
  var scene=scenes.filter(function(x){return x.k===st.scene;})[0];
  var prefTxt=Object.keys(st.prefs).length?(' · 忌口:'+prefs.filter(function(p){return st.prefs[p.k];}).map(function(p){return p.t;}).join('、')):'';
  var html="<div class='section-title' style='margin-top:4px'><span class='ico'>✨</span>推荐 "+res.length+" 种(按推荐度排序)</div>";
  html+="<p class='muted small' style='margin-bottom:12px'>目标:"+GOAL_META[st.goal].label+" · 场景:"+scene.t+prefTxt+"</p><div class='grid grid-cards'>";
  res.forEach(function(o){
    var f=o.f; var why=goalWhy(f).concat(sceneWhy(f));
    html+="<div class='card' style='display:flex;flex-direction:column;gap:8px'><div style='display:flex;align-items:center;gap:8px'><span style='font-size:28px'>"+foodPic(f,28)+"</span><div><div style='font-weight:800'>"+esc(f.name)+"</div><div class='small muted'>"+f.kcal+" 千卡 · 蛋白 "+f.p+"g /100g</div></div></div><div>"+why.map(function(w){return '<span class="reason">'+esc(w)+'</span>';}).join('')+"</div><div style='margin-top:auto;display:flex;gap:6px'><button class='btn btn-soft btn-sm' data-add='"+f.id+"'>＋ 记录</button><button class='btn btn-ghost btn-sm' data-fav='"+f.id+"'>"+(isFav(f.id)?'★':'☆')+"</button><a class='btn btn-ghost btn-sm' href='food.html?id="+f.id+"'>详情</a></div></div>";
  });
  html+="</div>";
  $('#result').innerHTML=html;
  var defMeal=(st.scene==='snack'||st.scene==='post')?'加餐':'午餐';
  $$('#result [data-add]').forEach(function(b){b.onclick=function(){openQuickAdd(b.getAttribute('data-add'),defMeal);};});
  $$('#result [data-fav]').forEach(function(b){b.onclick=function(){var fid=b.getAttribute('data-fav');var on=toggleFav(fid);b.textContent=on?'★':'☆';toast(on?'已收藏':'已取消收藏');};});
}
$('#goBtn').onclick=function(){ if(!st.goal||!st.scene){toast('先选好目标和场景');return;} renderResults(); };
paintChips();
syncBtn();
initHeader('select');

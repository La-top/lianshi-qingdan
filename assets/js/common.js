'use strict';
/* 共用工具:存储、记录、收藏、弹窗等(纯前端,数据保存在浏览器本地) */
function $(sel, root){return (root||document).querySelector(sel);}
function $$(sel, root){return Array.from((root||document).querySelectorAll(sel));}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function storeGet(key, def){try{var v=localStorage.getItem(key);return v?JSON.parse(v):def;}catch(e){return def;}}
function storeSet(key, val){try{localStorage.setItem(key, JSON.stringify(val));}catch(e){console.warn('save fail',e);}}
function pad2(n){return (n<10?'0':'')+n;}
function todayStr(){var d=new Date();return d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate());}
function fmtDate(s){if(!s)return '';var p=s.split('-');return p[1]+'月'+p[2]+'日';}
var GOAL_META={cut:{label:'减脂',ico:'🔥'},gain:{label:'增肌',ico:'💪'},maintain:{label:'维持体重',ico:'⚖️'}};
var MEALS=['早餐','午餐','晚餐','加餐'];
var CAT_META={protein:{label:'高蛋白',ico:'🥩'},staple:{label:'主食碳水',ico:'🍚'},veg:{label:'蔬菜',ico:'🥦'},fruit:{label:'水果',ico:'🍎'},fat:{label:'优质脂肪',ico:'🥑'},drink:{label:'饮品',ico:'🥤'},sport:{label:'运动营养品',ico:'💊'}};
var SCENE_META={pre:{label:'练前',ico:'⚡'},post:{label:'练后',ico:'🏋️'},comp:{label:'比赛日',ico:'🏁'},rec:{label:'恢复日',ico:'💤'},daily:{label:'日常',ico:'☀️'}};
var CORE_CATS=['protein','staple','veg','fruit','fat'];

/* ---------- 食物库 ---------- */
function foodById(id){if(!id)return null;for(var i=0;i<FOODS.length;i++){if(FOODS[i].id===id)return FOODS[i];}return null;}
function foodMacroLine(f){return '热量 '+f.kcal+' 千卡 · 蛋白 '+f.p+'g · 碳水 '+f.c+'g · 脂肪 '+f.f+'g';}
function foodGoals(f){return (f.goals||[]).map(function(g){return GOAL_META[g]?GOAL_META[g].label:g;});}
function foodCat(f){return CAT_META[f.cat]?CAT_META[f.cat].label:f.cat;}
function foodScenes(f){return (f.scenes||[]).map(function(s){return SCENE_META[s]?SCENE_META[s].label:s;});}
var SUPP_WARN='运动营养品提醒:补剂不是必需品,优先从天然食物满足营养;购买选第三方检测(如 Informed Sport / NSF)以降低污染风险,参赛运动员请遵守反兴奋剂规则;本文仅为知识参考,不构成服用建议,疾病或用药请先咨询医生。';
function foodPic(f,px){ if(!f)return ''; if(f.pic){return '<img class="foodpic" src="'+f.pic+'" alt="'+esc(f.name)+'" style="width:'+px+'px;height:'+px+'px">';} return f.emoji||''; }

/* ---------- 饮食记录 ---------- */
function getLog(date){var logs=storeGet('foodLog',{});return (date&&logs[date])?logs[date]:[];}
function saveLogFor(date,items){var logs=storeGet('foodLog',{});logs[date]=items;storeSet('foodLog',logs);}
function addLogItem(foodId,grams,meal,date){var items=getLog(date);items.push({id:foodId,g:Math.max(0,Number(grams)||0),meal:meal,t:Date.now()});saveLogFor(date,items);}
function mealTotals(items,meal){var t={kcal:0,p:0,c:0,f:0,fiber:0,count:0};items.forEach(function(it){if(meal&&it.meal!==meal)return;var fd=foodById(it.id);if(!fd)return;var k=it.g/100;t.kcal+=fd.kcal*k;t.p+=fd.p*k;t.c+=fd.c*k;t.f+=fd.f*k;t.fiber+=(fd.fiber||0)*k;t.count++;});t.kcal=Math.round(t.kcal);['p','c','f','fiber'].forEach(function(x){t[x]=Math.round(t[x]*10)/10;});return t;}
function dayTotals(date){var all=mealTotals(getLog(date),null);var by={};MEALS.forEach(function(m){var t=mealTotals(getLog(date),m);if(t.count>0)by[m]=t;});return {all:all,by:by};}
function gramsHint(cat){var m={protein:120,staple:150,veg:200,fruit:150,fat:15};return m[cat]||100;}
function defaultGramsFor(f){
  if(f.basis&&f.basis.indexOf('每100ml')>=0)return 250;
  if(f.basis&&f.basis.indexOf('干')>=0)return 60;
  return gramsHint(f.cat);
}

/* ---------- 收藏 ---------- */
function getFavs(){return storeGet('favs',[]);}
function isFav(id){return getFavs().indexOf(id)>-1;}
function setFav(id,on){var f=getFavs();var i=f.indexOf(id);var has=i>-1;if(on&&!has)f.push(id);if(!on&&has)f.splice(i,1);storeSet('favs',f);}
function toggleFav(id){var on=!isFav(id);setFav(id,on);return on;}

/* ---------- 通用 UI ---------- */
function toast(msg){var w=$('.toast-wrap');if(!w){w=document.createElement('div');w.className='toast-wrap';document.body.appendChild(w);}var t=document.createElement('div');t.className='toast';t.textContent=msg;w.appendChild(t);setTimeout(function(){t.style.opacity='0';t.style.transition='opacity .3s';setTimeout(function(){if(t.parentNode)t.parentNode.removeChild(t);},320);},1700);}
function openQuickAdd(foodId,presetMeal,presetDate){
  var f=foodById(foodId);if(!f)return;
  var date=presetDate||todayStr();
  var meal=presetMeal||defaultMeal();
  var defG=defaultGramsFor(f);
  var mask=document.createElement('div');mask.className='modal-mask';
  mask.innerHTML='<div class="modal"><h3>'+foodPic(f,24)+' '+esc(f.name)+' · 加入记录</h3>'
    +'<p class="small muted">'+esc(foodMacroLine(f))+'（按'+esc(f.basis||'可食部')+'）</p>'
    +'<label class="small muted">克数（可食部重量）</label>'
    +'<input type="number" id="qa-grams" min="0" step="5" value="'+defG+'" style="width:100%;margin:6px 0 4px">'
    +'<p class="small muted">参考：蛋白质类 100~150g · 主食约 150g · 蔬菜 200g · 水果 150g · 坚果/脂肪 15g</p>'
    +'<label class="small muted">餐次</label><div class="row" style="margin:6px 0 12px" id="qa-meals">'
      +MEALS.map(function(m){return '<button type="button" class="meal-chip'+(m===meal?' selected':'')+'" data-m="'+m+'">'+m+'</button>';}).join('')
    +'</div>'
    +'<div class="row" style="justify-content:flex-end"><button class="btn btn-ghost btn-sm" id="qa-cancel">取消</button>'
    +'<button class="btn btn-primary btn-sm" id="qa-ok">加入记录</button></div></div>';
  document.body.appendChild(mask);
  function pickMeal(m){$$('.meal-chip',mask).forEach(function(b){b.classList.toggle('selected',b.getAttribute('data-m')===m);});meal=m;}
  $$('.meal-chip',mask).forEach(function(b){b.onclick=function(){pickMeal(b.getAttribute('data-m'));};});
  $('#qa-cancel',mask).onclick=function(){mask.remove();};
  $('#qa-ok',mask).onclick=function(){var g=Number($('#qa-grams',mask).value);if(!(g>0)){toast('请填写克数');return;}addLogItem(foodId,g,meal,date);toast('已记入 '+fmtDate(date)+' '+meal);mask.remove();if(typeof onLogChanged==='function')onLogChanged();};
  mask.onclick=function(e){if(e.target===mask)mask.remove();};
}
function defaultMeal(){var h=new Date().getHours();if(h<10)return '早餐';if(h<15)return '午餐';if(h<21)return '晚餐';return '加餐';}
function quickAddButton(foodId,label){var b=document.createElement('button');b.type='button';b.className='btn btn-soft btn-sm';b.textContent=label||'加入记录';b.onclick=function(){openQuickAdd(foodId);};return b;}
function favButton(foodId){var b=document.createElement('button');b.type='button';b.className='btn btn-ghost btn-sm';b.innerHTML=(isFav(foodId)?'★ 已收藏':'☆ 收藏');b.onclick=function(){var on=toggleFav(foodId);b.innerHTML=on?'★ 已收藏':'☆ 收藏';toast(on?'已收藏':'已取消收藏');};return b;}
function bindFavStars(){$$('.fav-star').forEach(function(s){var id=s.getAttribute('data-id');s.textContent=isFav(id)?'★':'☆';if(isFav(id))s.classList.add('on');s.onclick=function(e){e.stopPropagation();e.preventDefault();var now=toggleFav(id);s.classList.toggle('on',now);s.textContent=now?'★':'☆';toast(now?'已收藏':'已取消收藏');};});}
function initHeader(active){$$('nav a').forEach(function(a){if(a.getAttribute('data-page')===active)a.classList.add('active');});}

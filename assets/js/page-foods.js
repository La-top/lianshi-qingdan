'use strict';
var qParam=(new URLSearchParams(location.search).get('q')||'').trim();
var catAll=[{k:'',t:'全部'},{k:'protein',t:'高蛋白'},{k:'staple',t:'主食碳水'},{k:'veg',t:'蔬菜'},{k:'fruit',t:'水果'},{k:'fat',t:'优质脂肪'}];
var goalKeys=[{k:'',t:'全部目标'},{k:'gain',t:'增肌'},{k:'cut',t:'减脂'},{k:'maintain',t:'维持'}];
var state={cat:'',goal:'',q:qParam};
var catEl=$('#catChips'), goalEl=$('#goalChips');
function paintChips(){
  catEl.innerHTML=catAll.map(function(c){return '<button class="tag-chip'+(state.cat===c.k?' selected':'')+'" data-k="'+c.k+'">'+c.t+'</button>';}).join('');
  goalEl.innerHTML=goalKeys.map(function(c){return '<button class="tag-chip'+(state.goal===c.k?' selected':'')+'" data-g="'+c.k+'">'+c.t+'</button>';}).join('');
}
catEl.onclick=function(e){var b=e.target.closest('[data-k]');if(!b)return;state.cat=b.getAttribute('data-k');paintChips();render();};
goalEl.onclick=function(e){var b=e.target.closest('[data-g]');if(!b)return;state.goal=b.getAttribute('data-g');paintChips();render();};
var qInput=$('#q'); qInput.value=state.q;
qInput.addEventListener('input',function(){state.q=qInput.value;render();});
$('#clearQ').onclick=function(){state.q='';qInput.value='';render();};
function cardHtml(f){
  return "<div class='food-card' data-link='food.html?id="+f.id+"'><button class='fav-star' data-id='"+f.id+"' title='收藏'>☆</button><div class='f-emoji'>"+foodPic(f,34)+"</div><div class='f-name'>"+esc(f.name)+"</div><div class='f-line'>"+esc(foodCat(f))+"</div><div class='f-macros'><span>🔥 <b>"+f.kcal+"</b> 千卡</span><span>蛋白 <b>"+f.p+"g</b></span><span>碳水 <b>"+f.c+"g</b></span></div><div class='f-goals'>"+foodGoals(f).map(function(g){return '<span class="tag goal">'+g+'</span>';}).join('')+"</div></div>";
}
function render(){
  var q=state.q.toLowerCase();
  var list=FOODS.filter(function(f){
    if(state.cat&&f.cat!==state.cat)return false;
    if(state.goal&&f.goals.indexOf(state.goal)<0)return false;
    if(q){var hay=(f.name+' '+(f.alias||'')+' '+f.emoji).toLowerCase();if(hay.indexOf(q)<0)return false;}
    return true;
  });
  $('#count').textContent=FOODS.length;
  $('#list').innerHTML=list.map(cardHtml).join('');
  $('#empty').style.display=list.length?'none':'block';
  bindFavStars();
}
$('#list').addEventListener('click',function(e){ var c=e.target.closest('[data-link]'); if(c&&!e.target.closest('.fav-star'))location.href=c.getAttribute('data-link'); });
paintChips();
render();
initHeader('foods');

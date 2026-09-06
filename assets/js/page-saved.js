'use strict';
var tries=['quinoa','cod','asparagus','edamame','kiwi','chickpea','pumpkin','tuna','sweet-potato','yogurt'];
$('#tryRow').innerHTML=tries.map(function(id){var f=foodById(id);if(!f)return '';return '<a class="btn btn-ghost btn-sm" href="food.html?id='+f.id+'">'+foodPic(f,18)+' '+esc(f.name)+'</a>';}).join('');
function favCard(f){
  return "<div class='food-card' data-link='food.html?id="+f.id+"'><button class='fav-star on' data-id='"+f.id+"' title='取消收藏'>★</button><div class='f-emoji'>"+foodPic(f,34)+"</div><div class='f-name'>"+esc(f.name)+"</div><div class='f-line'>"+esc(foodCat(f))+" · "+f.kcal+" 千卡/100g</div><div class='row' style='margin-top:auto'><button class='btn btn-soft btn-sm' data-add='"+f.id+"'>＋ 加入记录</button></div></div>";
}
function render(){
  var favs=getFavs();
  var list=favs.map(foodById).filter(Boolean);
  if(!list.length){
    $('#favList').innerHTML="<div class='card empty'><div class='e-ico'>⭐</div><div>还没有收藏。去<a href='foods.html'>食物库</a>或<a href='select.html'>选食物</a>时,点卡片右上角的星标即可收藏。</div></div>";
  } else {
    $('#favList').innerHTML="<div class='grid grid-cards'>"+list.map(favCard).join('')+"</div>";
    $$('#favList [data-add]').forEach(function(b){b.onclick=function(){var id=b.getAttribute('data-add');var f=foodById(id);openQuickAdd(id);};});
    bindFavStars();
  }
}
$('#favList').addEventListener('click',function(e){var c=e.target.closest('[data-link]');if(c&&!e.target.closest('.fav-star')&&!e.target.closest('[data-add]'))location.href=c.getAttribute('data-link');});
window.onLogChanged=function(){};
render();
initHeader('saved');

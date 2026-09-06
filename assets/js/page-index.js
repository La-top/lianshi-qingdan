'use strict';
/* 首页逻辑 */
function renderToday(){
  var d=todayStr(); var t=dayTotals(d).all; var el=$('#todayCard');
  if(t.count===0){
    el.innerHTML="<div class='row' style='justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px'><div><div class='muted'>"+fmtDate(d)+" 还没记录</div><div style='font-size:19px;font-weight:800;margin-top:4px'>今天吃了吗?记一笔就知道营养够不够。</div></div><a class='btn btn-orange btn-sm' href='log.html'>去记录 →</a></div>";
  } else {
    el.innerHTML="<div class='row' style='justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px'><div><div class='muted small'>"+fmtDate(d)+" 合计</div><div class='stat-row' style='margin-top:6px'><div><div class='s-v'>"+t.kcal+"</div><div class='s-l'>千卡</div></div><div><div class='s-v'>"+t.p+"g</div><div class='s-l'>蛋白质</div></div><div><div class='s-v'>"+t.c+"g</div><div class='s-l'>碳水</div></div><div><div class='s-v'>"+t.f+"g</div><div class='s-l'>脂肪</div></div></div></div><a class='btn btn-ghost btn-sm' href='log.html'>查看明细 →</a></div>";
  }
}
var hot=['chicken-breast','egg','salmon','oats','brown-rice','broccoli','banana','avocado','edamame','blueberry'];
function renderPopular(){
  var html='';
  hot.forEach(function(id){ var f=foodById(id); if(!f)return; html+="<div class='food-card' data-link='food.html?id="+f.id+"'><button class='fav-star' data-id='"+f.id+"' title='收藏'>☆</button><div class='f-emoji'>"+foodPic(f,34)+"</div><div class='f-name'>"+esc(f.name)+"</div><div class='f-line'>"+esc(foodCat(f))+" · "+f.kcal+" 千卡/100g</div></div>"; });
  $('#popular').innerHTML=html;
  bindFavStars();
}
$('#popular').addEventListener('click',function(e){ var c=e.target.closest('[data-link]'); if(c&&!e.target.closest('.fav-star'))location.href=c.getAttribute('data-link'); });
function goSearch(){ var v=$('#q').value.trim(); location.href='foods.html'+(v?'?q='+encodeURIComponent(v):''); }
$('#qBtn').onclick=goSearch;
$('#q').addEventListener('keydown',function(e){ if(e.key==='Enter')goSearch(); });
renderToday();
renderPopular();
initHeader('home');

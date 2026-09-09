'use strict';
var f=foodById(new URLSearchParams(location.search).get('id'));
var root=$('#root');
function byName(n){for(var i=0;i<FOODS.length;i++){if(FOODS[i].name===n)return FOODS[i];}return null;}
function unitLabel(f){
  if(f.basis==='每100ml')return '每 100 毫升('+f.basis+')';
  return '每 100 克('+esc(f.basis)+')';
}
if(!f){
  root.innerHTML="<div class='card empty'><div class='e-ico'>🤷</div><div>没有找到这个食物,可能链接失效了。</div><div style='margin-top:10px'><a class='btn btn-primary btn-sm' href='foods.html'>去食物库逛逛</a></div></div>";
} else {
  var i=FOODS.indexOf(f), prev=FOODS[(i-1+FOODS.length)%FOODS.length], next=FOODS[(i+1)%FOODS.length];
  var h='';
  h+="<div class='card'><div class='row' style='justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px'>";
  h+="<div class='row' style='gap:14px;align-items:center'><div style='font-size:54px;line-height:1'>"+foodPic(f,54)+"</div><div><h1 style='margin:0'>"+esc(f.name)+"</h1><div class='muted small'>"+esc(f.alias||'')+"</div><div class='row' style='margin-top:6px;gap:6px'><span class='tag green'>"+esc(foodCat(f))+"</span>"+foodGoals(f).map(function(g){return '<span class="tag goal">'+g+'</span>';}).join('')+"</div></div></div>";
  h+="<div class='row'><button class='btn btn-ghost btn-sm' id='favBtn'></button><button class='btn btn-primary btn-sm' id='addBtn'>＋ 加入今日记录</button></div></div>";
  h+="<p class='small muted' style='margin-top:10px'>营养口径:"+unitLabel(f)+" · 参考值,来源与说明见<a href='about.html'>关于页</a></p></div>";
  h+="<div class='card'><h2>营养速览</h2><div class='nut-grid'>";
  h+="<div class='nut-box kcal'><div class='n-v'>"+f.kcal+"</div><div class='n-l'>千卡</div></div>";
  h+="<div class='nut-box'><div class='n-v'>"+f.p+"g</div><div class='n-l'>蛋白质</div></div>";
  h+="<div class='nut-box'><div class='n-v'>"+f.c+"g</div><div class='n-l'>碳水化合物</div></div>";
  h+="<div class='nut-box'><div class='n-v'>"+f.f+"g</div><div class='n-l'>脂肪</div></div>";
  h+="<div class='nut-box'><div class='n-v'>"+(f.fiber||0)+"g</div><div class='n-l'>膳食纤维</div></div></div>";
  h+="<div class='muted small' style='margin-top:10px'>微量·电解质参考(mg/100g,约值):</div><div class='nut-grid' style='margin-top:4px'>";
  h+="<div class='nut-box'><div class='n-v'>"+(f.na||0)+"</div><div class='n-l'>钠</div></div>";
  h+="<div class='nut-box'><div class='n-v'>"+(f.k||0)+"</div><div class='n-l'>钾</div></div>";
  h+="<div class='nut-box'><div class='n-v'>"+(f.ca||0)+"</div><div class='n-l'>钙</div></div>";
  h+="<div class='nut-box'><div class='n-v'>"+(f.mg||0)+"</div><div class='n-l'>镁</div></div>";
  h+="<div class='nut-box'><div class='n-v'>"+(f.fe||0)+"</div><div class='n-l'>铁</div></div>";
  h+="<div class='nut-box'><div class='n-v'>"+(f.zn||0)+"</div><div class='n-l'>锌</div></div>";
  h+="<div class='nut-box'><div class='n-v'>"+(f.vc||0)+"</div><div class='n-l'>维C</div></div></div>";
  if(f.serving){ h+="<p class='small muted' style='margin-top:10px'>每份参考:约 "+esc(f.serving.n)+' '+esc(f.serving.unit)+(f.serving.note?('('+esc(f.serving.note)+')'):'')+"</p>"; }
  if(f.scenes&&f.scenes.length){ h+="<div class='row' style='gap:6px;margin-top:8px'><span class='small muted'>适合:</span>"+f.scenes.map(function(s){return '<span class="tag goal">'+(SCENE_META[s]?SCENE_META[s].ico+' '+SCENE_META[s].label:s)+'</span>';}).join('')+"</div>"; }
  if(f.cat==='sport'){ h+="<div class='tipbox' style='margin-top:12px'>"+esc(SUPP_WARN)+"</div>"; }
  h+="</div>";
  h+="<div class='card'><h2>💡 健身价值</h2><ul class='list-plain'>"+f.highlight.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+"</ul></div>";
  h+="<div class='card'><h2>🤝 搭配建议</h2><div class='grid grid-2'>";
  f.pair.forEach(function(p){
    var pf=byName(p.name);
    h+="<div class='card' style='box-shadow:none;background:#fbfdfb'><b>"+(pf?('<a href="food.html?id='+pf.id+'">'+esc(p.name)+'</a>'):esc(p.name))+"</b><div class='small muted' style='margin-top:2px'>"+esc(p.why)+"</div></div>";
  });
  h+="</div></div>";
  if(f.recipe){
    h+="<div class='card'><h2>🍳 简单做法</h2><div class='recipe'><div class='r-name'>"+esc(f.recipe.name)+"</div><div class='r-time'>⏱ "+esc(f.recipe.time)+"</div><ol class='list-plain'>"+f.recipe.steps.map(function(s){return '<li>'+esc(s)+'</li>';}).join('')+"</ol></div></div>";
  } else {
    h+="<div class='card'><h2>🍽️ 怎么吃</h2><p class='muted'>"+esc(f.name)+"直接吃 / 按下方小贴士食用即可。</p></div>";
  }
  h+="<div class='card'><h2>✏️ 小贴士</h2><div class='tipbox'>"+esc(f.tips)+"</div></div>";
  h+="<div class='card'><div class='row' style='justify-content:space-between'><a class='btn btn-ghost btn-sm' href='food.html?id="+prev.id+"'>← "+esc(prev.name)+"</a><a class='btn btn-ghost btn-sm' href='food.html?id="+next.id+"'>"+esc(next.name)+" →</a></div></div>";
  root.innerHTML=h;
  function paintFav(){ var on=isFav(f.id); $('#favBtn').innerHTML=on?'★ 已收藏':'☆ 收藏'; }
  paintFav();
  $('#favBtn').onclick=function(){ toggleFav(f.id); paintFav(); toast(isFav(f.id)?'已收藏':'已取消收藏'); };
  $('#addBtn').onclick=function(){ openQuickAdd(f.id); };
}
initHeader('foods');

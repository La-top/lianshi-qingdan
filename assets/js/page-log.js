'use strict';
var date=todayStr();
var editing=-1;
function addDays(ds,n){var p=ds.split('-');var d=new Date(+p[0],+p[1]-1,+p[2]+n);return d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate());}
function renderAll(){
  $('#dateInput').value=date;
  renderSummary();
  renderMeals();
}
function renderSummary(){
  var t=dayTotals(date).all;
  var el=$('#summary');
  var html="<div class='row' style='justify-content:space-between;flex-wrap:wrap;gap:8px'><b>"+fmtDate(date)+" 合计</b><span class='muted small'>"+(t.count?('共 '+t.count+' 条'):'还没有记录')+"</span></div>";
  html+="<div class='stat-row' style='margin-top:8px'><div><div class='s-v' style='color:var(--orange-d)'>"+t.kcal+"</div><div class='s-l'>千卡</div></div><div><div class='s-v'>"+t.p+"g</div><div class='s-l'>蛋白质</div></div><div><div class='s-v'>"+t.c+"g</div><div class='s-l'>碳水</div></div><div><div class='s-v'>"+t.f+"g</div><div class='s-l'>脂肪</div></div><div><div class='s-v'>"+t.fiber+"g</div><div class='s-l'>膳食纤维</div></div></div>";
  html+="<p class='small muted' style='margin-top:6px'>注:还没设置个人每日目标,先看实际数字;想要「目标+达成进度」之后可以加上。</p>";
  el.innerHTML=html;
}
function itemMacros(it){var fd=foodById(it.id);if(!fd)return null;var k=it.g/100;return {kcal:Math.round(fd.kcal*k),p:Math.round(fd.p*k*10)/10,c:Math.round(fd.c*k*10)/10,f:Math.round(fd.f*k*10)/10};}
function renderMeals(){
  var items=getLog(date);
  var wrap=$('#meals');
  var html='';
  MEALS.forEach(function(m,mi){
    var list=items.filter(function(it){return it.meal===m;});
    var mt=mealTotals(items,m);
    html+="<div class='meal-block' style='margin-top:12px'><div class='meal-head'><span>"+m+"</span><span class='m-kcal'>"+(mt.count?(mt.kcal+' 千卡 · 蛋白 '+mt.p+'g'):'')+"</span><button class='btn btn-soft btn-sm' data-mealadd='"+mi+"' style='padding:3px 10px'>＋</button></div><div class='meal-body'>";
    list.forEach(function(it,idx){
      var fd=foodById(it.id);
      if(!fd){
        html+="<div class='item-row'><span class='i-name'>未知食物</span><span class='i-num'>(数据可能已更新)</span><span class='i-acts'><button class='icon-btn' data-del='"+idx+"' title='删除'>🗑</button></span></div>";
        return;
      }
      var mac=itemMacros(it);
      html+="<div class='item-row'><span style='font-size:20px'>"+foodPic(fd,20)+"</span><span class='i-name'>"+esc(fd.name)+"</span>";
      if(editing===idx){
        html+="<span class='i-acts'><input type='number' id='editG' value='"+it.g+"' min='0' step='5' style='width:92px'><button class='btn btn-primary btn-sm' id='saveG'>保存</button><button class='icon-btn' id='cancelG' title='取消'>✕</button></span>";
      } else {
        html+="<span class='i-num'>× "+it.g+"g · ≈ "+mac.kcal+" 千卡(蛋白 "+mac.p+"g)</span><span class='i-acts'><button class='icon-btn' data-edit='"+idx+"' title='改克数'>✎</button><button class='icon-btn' data-del='"+idx+"' title='删除'>🗑</button></span>";
      }
      html+="</div>";
    });
    if(!list.length)html+="<div class='small muted' style='padding:8px 2px'>这一餐还没记</div>";
    html+="</div></div>";
  });
  wrap.innerHTML=html;
  $$('[data-mealadd]',wrap).forEach(function(b){b.onclick=function(){logPick(MEALS[+b.getAttribute('data-mealadd')]);};});
  $$('[data-edit]',wrap).forEach(function(b){b.onclick=function(){editing=+b.getAttribute('data-edit');renderMeals();var g=$('#editG');if(g){g.focus();g.select();}};});
  $$('[data-del]',wrap).forEach(function(b){b.onclick=function(){var items=getLog(date);items.splice(+b.getAttribute('data-del'),1);saveLogFor(date,items);if(editing>=0)editing=-1;renderAll();toast('已删除');};});
  var sg=$('#saveG');
  if(sg){sg.onclick=function(){var items=getLog(date);var v=Number($('#editG').value);if(!(v>0)){toast('克数要大于 0');return;}items[editing].g=v;saveLogFor(date,items);editing=-1;renderAll();toast('已更新');};}
  var cg=$('#cancelG'); if(cg){cg.onclick=function(){editing=-1;renderMeals();};}
}
/* 从「添加」入口:先选食物,再弹克数/餐次面板 */
function logPick(defMeal){
  var mask=document.createElement('div');mask.className='modal-mask';
  mask.innerHTML="<div class='modal'><h3>先选个食物</h3><input type='text' id='pf-q' placeholder='搜索食物…' style='width:100%'><div id='pf-list' style='max-height:46vh;overflow:auto;margin-top:10px'></div><div class='row' style='justify-content:flex-end;margin-top:10px'><button class='btn btn-ghost btn-sm' id='pf-close'>关闭</button></div></div>";
  document.body.appendChild(mask);
  var meal=defMeal||defaultMeal();
  function draw(q){
    var list=FOODS.filter(function(f){if(q){var hay=(f.name+' '+(f.alias||'')).toLowerCase();if(hay.indexOf(q)<0)return false;}return true;}).slice(0,80);
    $('#pf-list',mask).innerHTML=list.map(function(f){return "<div class='item-row' data-pick='"+f.id+"'><span style='font-size:20px'>"+foodPic(f,20)+"</span><span class='i-name'>"+esc(f.name)+"</span><span class='i-num'>"+f.kcal+" 千卡/100g · 蛋白 "+f.p+"g</span></div>";}).join('');
    $$('#pf-list [data-pick]',mask).forEach(function(row){row.onclick=function(){var fid=row.getAttribute('data-pick');mask.remove();openQuickAdd(fid,meal,date);};});
  }
  var qi=$('#pf-q',mask);
  qi.addEventListener('input',function(){draw(qi.value.trim().toLowerCase());});
  $('#pf-close',mask).onclick=function(){mask.remove();};
  mask.onclick=function(e){if(e.target===mask)mask.remove();};
  draw('');
  qi.focus();
}
$('#prevDay').onclick=function(){date=addDays(date,-1);renderAll();};
$('#nextDay').onclick=function(){date=addDays(date,1);renderAll();};
$('#goToday').onclick=function(){date=todayStr();renderAll();};
$('#dateInput').addEventListener('change',function(){date=$('#dateInput').value||todayStr();renderAll();});
$('#addBtn').onclick=function(){logPick();};
$('#exportBtn').onclick=function(){
  var blob=new Blob([JSON.stringify({app:'练食清单',version:1,exported:todayStr(),data:storeGet('foodLog',{})},null,1)],{type:'application/json'});
  var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='练食清单备份-'+todayStr()+'.json';document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},500);toast('备份已导出');
};
$('#importBtn').onclick=function(){$('#importFile').click();};
$('#importFile').addEventListener('change',function(){
  var file=this.files[0];if(!file)return;
  var reader=new FileReader();
  reader.onload=function(){
    try{
      var obj=JSON.parse(reader.result);
      var data=(obj&&obj.data)?obj.data:obj;
      if(typeof data!=='object'||Array.isArray(data))throw new Error('bad');
      storeSet('foodLog',data);
      renderAll();
      toast('导入成功');
    }catch(e){toast('文件格式不对,导入失败');}
  };
  reader.readAsText(file);
  this.value='';
});
$('#clearDay').onclick=function(){if(!getLog(date).length){toast('这一天本来就没记录');return;}if(confirm('确定清空 '+fmtDate(date)+' 的全部记录吗?建议先导出备份。')){saveLogFor(date,[]);renderAll();toast('已清空');}};
window.onLogChanged=function(){renderAll();};
renderAll();
initHeader('log');

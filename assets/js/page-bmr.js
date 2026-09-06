'use strict';
/* 基础代谢计算(Mifflin-St Jeor 公式) */
function calcBMR(sex,age,height,weight){
  var b=10*weight+6.25*height-5*age;
  return sex==='female'?Math.round(b-161):Math.round(b+5);
}
var sex='male';
function paintSex(){
  $$('#sexGroup .goal-chip').forEach(function(b){b.classList.toggle('selected',b.getAttribute('data-sex')===sex);});
}
$('#sexGroup').onclick=function(e){var b=e.target.closest('[data-sex]');if(!b)return;sex=b.getAttribute('data-sex');paintSex();};
paintSex();
function num(id){return Number($('#'+id).value);}
function validRange(v,min,max,label){if(!(v>=min&&v<=max)){toast(label+'要在 '+min+'~'+max+' 之间');return false;}return true;}
$('#calcBtn').onclick=function(){
  var age=num('age'),height=num('height'),weight=num('weight'),years=num('years');
  if(!validRange(age,10,100,'年龄'))return;
  if(!validRange(height,120,230,'身高'))return;
  if(!validRange(weight,30,250,'体重'))return;
  if(!(years>=0&&years<=50)){toast('训练年限填 0~50');return;}
  var bmr=calcBMR(sex,age,height,weight);
  var html='';
  html+="<div class='card' style='background:linear-gradient(135deg,#e9f7ef,#f3fbf6);border-color:#cfe9da'><div class='row' style='justify-content:space-between;flex-wrap:wrap;gap:10px'><div><div class='muted small'>你的基础代谢(BMR)约</div><div style='font-size:40px;font-weight:800;color:var(--green-d);line-height:1.2'>"+bmr+"<span style='font-size:16px;color:var(--mut);font-weight:600'> 千卡 / 天</span></div></div><div class='muted small' style='text-align:right'><div>性别:"+((sex==='male')?'男':'女')+" · "+age+"岁 · "+height+"cm · "+weight+"kg</div><div>训练 "+years+" 年</div></div></div></div>";
  html+="<div class='card'><h3>这个数字怎么来的</h3><p>采用 <b>Mifflin-St Jeor 公式</b>(目前最常用的基础代谢估算公式):</p>";
  html+="<p class='small muted' style='background:#f7faf7;border:1px solid var(--line);border-radius:10px;padding:10px 12px'>"+((sex==='male')?'男:基础代谢 = 10×体重 + 6.25×身高 − 5×年龄 + 5':'女:基础代谢 = 10×体重 + 6.25×身高 − 5×年龄 − 161')+"</p></div>";
  html+="<div class='card'><h3>关于「训练年限」</h3>";
  if(years>=3){html+="<p>你有 "+years+" 年的训练基础,肌肉量通常高于普通人。<b>基础代谢公式不含训练年限</b>,但肌肉多的人实际基础代谢会比公式略高——经验上长期训练者可能高 <b>约 3~8%</b>(即 "+Math.round(bmr*1.03)+" ~ "+Math.round(bmr*1.08)+" 千卡/天),可以把上方数字看作下限。</p>";}
  else if(years>0){html+="<p>你有 "+years+" 年的训练基础。基础代谢公式不含训练年限,但规律训练带来的肌肉增长会让实际消耗略高于公式,先把上方数字当作基准即可,不必纠结那几十千卡。</p>";}
  else{html+="<p>刚开始训练不用急着上调热量。<b>基础代谢公式不含训练年限</b>,先以上方数字为基准,练一段时间有肌肉量后自然会更高。</p>";}
  html+="</div>";
  html+="<div class='card'><h3>怎么用它</h3><ul class='list-plain'><li>基础代谢是<b>每天最低消耗</b>,还没算日常活动;你实际一天的总消耗会比它高不少;</li><li>想控制体重时,把它当成「底线」:配合运动和饮食,逐步调整(一般一天别低于它太多);</li><li>之后可以加「每日总消耗 + 增肌/减脂热量目标」,需要的话告诉我。</li></ul><div class='row' style='margin-top:10px'><a class='btn btn-soft btn-sm' href='select.html'>去选今天吃什么</a><a class='btn btn-ghost btn-sm' href='log.html'>去记今天吃了什么</a></div></div>";
  $('#result').innerHTML=html;
  $('#result').style.display='block';
  $('#result').scrollIntoView({behavior:'smooth',block:'start'});
};
initHeader('bmr');

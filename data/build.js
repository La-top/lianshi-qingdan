// 重新生成 data/foods.js: node data/build.js
const fs=require('fs');const path=require('path');
const dir=__dirname;
const PARTS=['protein','staple','veg','fruit','fat','drink','sport'];
function read(p){return fs.readFileSync(path.join(dir,p),'utf8');}
function arr(src){const i=src.indexOf('['),e=src.lastIndexOf(']');return JSON.parse(src.slice(i,e+1));}
const A={};PARTS.forEach(function(k){A[k]=arr(read('part_'+k+'.js'));});
const head='/* 练食清单 · 食物库(120种,每100g可食部参考值;含宏量+微量;来源见「关于」页) */\n';
const body=PARTS.map(function(k){return 'const FOODS_'+k.toUpperCase()+' = '+JSON.stringify(A[k],null,1)+';';}).join('\n\n')+'\n\nconst FOODS = FOODS_PROTEIN.concat(FOODS_STAPLE, FOODS_VEG, FOODS_FRUIT, FOODS_FAT, FOODS_DRINK, FOODS_SPORT);\n';
fs.writeFileSync(path.join(dir,'foods.js'),head+body,'utf8');
console.log('foods.js rebuilt');

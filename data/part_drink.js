/* 食物库 · drink */
const FOODS_DRINK = [
 {
  "id": "black-coffee",
  "name": "黑咖啡(无糖)",
  "alias": "美式 · 纯咖啡",
  "emoji": "☕",
  "cat": "drink",
  "basis": "每100ml(冲泡/美式参考)",
  "goals": [
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 1,
  "p": 0.2,
  "c": 0,
  "f": 0,
  "fiber": 0,
  "na": 2,
  "k": 49,
  "ca": 2,
  "mg": 3,
  "fe": 0,
  "zn": 0,
  "vc": 0,
  "serving": {
   "n": 240,
   "unit": "毫升",
   "note": "约1杯"
  },
  "scenes": [
   "pre",
   "daily",
   "comp"
  ],
  "highlight": [
   "咖啡因能提升警觉和耐力表现(循证充分)",
   "不加糖奶时热量几乎为零"
  ],
  "pair": [
   {
    "name": "练前30~60分钟",
    "why": "适量咖啡因(约3~6mg/kg体重)常作为练前提升"
   }
  ],
  "recipe": {
   "name": "怎么喝更聪明",
   "time": "1分钟",
   "steps": [
    "练前30~60分钟喝1杯(约100~200mg咖啡因)",
    "敏感者减半,别空腹猛灌",
    "下午后避免影响睡眠"
   ]
  },
  "tips": "咖啡因会随咖啡豆/浓度差异很大,注意总量;睡前6~8小时尽量不喝。"
 },
 {
  "id": "green-tea",
  "name": "绿茶(无糖)",
  "alias": "绿茶 · 龙井/毛峰",
  "emoji": "🍵",
  "cat": "drink",
  "basis": "每100ml(冲泡参考)",
  "goals": [
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 1,
  "p": 0,
  "c": 0.2,
  "f": 0,
  "fiber": 0,
  "na": 4,
  "k": 8,
  "ca": 3,
  "mg": 2,
  "fe": 0.3,
  "zn": 0.03,
  "vc": 0,
  "serving": {
   "n": 300,
   "unit": "毫升",
   "note": "约1大杯"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "茶多酚与少量咖啡因,温和提神",
   "零热量,全天补水好选择"
  ],
  "tips": "别加糖和奶精;茶垢多不代表浓,泡浓了咖啡因也高。",
  "pair": [
   {
    "name": "白开水",
    "why": "饮品是补水的补充,日常基础还是白开水"
   }
  ]
 },
 {
  "id": "coconut-water",
  "name": "椰子水",
  "alias": "天然椰子水",
  "emoji": "🥥",
  "cat": "drink",
  "basis": "每100ml",
  "goals": [
   "maintain",
   "cut"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 19,
  "p": 0.7,
  "c": 3.7,
  "f": 0.2,
  "fiber": 0,
  "na": 105,
  "k": 250,
  "ca": 24,
  "mg": 25,
  "fe": 0.3,
  "zn": 0.1,
  "vc": 2.4,
  "serving": {
   "n": 250,
   "unit": "毫升",
   "note": "约1杯"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "天然含钾的补水饮品",
   "比运动饮料热量低、更“天然”"
  ],
  "tips": "含天然糖和钾,肾脏病患者请遵医嘱;别把它当白水一天喝几升。",
  "pair": [
   {
    "name": "白开水",
    "why": "饮品是补水的补充,日常基础还是白开水"
   }
  ]
 },
 {
  "id": "sports-drink",
  "name": "运动饮料(市售电解质型)",
  "alias": "电解质饮料 · 运动饮料",
  "emoji": "🥤",
  "cat": "drink",
  "basis": "每100ml(市售参考)",
  "goals": [
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": true,
  "snack": false,
  "kcal": 25,
  "p": 0,
  "c": 6.2,
  "f": 0,
  "fiber": 0,
  "na": 45,
  "k": 13,
  "ca": 0,
  "mg": 0,
  "fe": 0,
  "zn": 0,
  "vc": 0,
  "serving": {
   "n": 250,
   "unit": "毫升",
   "note": "约半瓶(看包装)"
  },
  "scenes": [
   "pre",
   "comp"
  ],
  "highlight": [
   "同时补糖和钠钾,适合长时间/大量出汗训练",
   "短于60分钟的轻训练一般用不上"
  ],
  "tips": "市售品牌含糖含钠差异大,认准包装营养表;减脂期选无糖款但注意电解质含量是否够。",
  "pair": [
   {
    "name": "白开水",
    "why": "饮品是补水的补充,日常基础还是白开水"
   }
  ]
 },
 {
  "id": "orange-juice",
  "name": "100%橙汁(市售)",
  "alias": "纯橙汁 · NFC橙汁",
  "emoji": "🧃",
  "cat": "drink",
  "basis": "每100ml(市售参考)",
  "goals": [
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": true,
  "snack": false,
  "kcal": 45,
  "p": 0.7,
  "c": 10.4,
  "f": 0.2,
  "fiber": 0.2,
  "na": 1,
  "k": 200,
  "ca": 11,
  "mg": 11,
  "fe": 0.2,
  "zn": 0.1,
  "vc": 30,
  "serving": {
   "n": 200,
   "unit": "毫升",
   "note": "约1杯"
  },
  "scenes": [
   "post",
   "rec"
  ],
  "highlight": [
   "维C不错,练后想快速补糖可选",
   "但榨汁丢纤维,不如直接吃橙子"
  ],
  "tips": "一杯≈1.5~2个橙子的糖;减脂期优先吃果肉,果汁限量。",
  "pair": [
   {
    "name": "白开水",
    "why": "饮品是补水的补充,日常基础还是白开水"
   }
  ]
 },
 {
  "id": "cola",
  "name": "可乐(含糖型)",
  "alias": "可乐 · 汽水",
  "emoji": "🥤",
  "cat": "drink",
  "basis": "每100ml",
  "goals": [],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": true,
  "snack": false,
  "kcal": 43,
  "p": 0,
  "c": 10.6,
  "f": 0,
  "fiber": 0,
  "na": 8,
  "k": 1,
  "ca": 0,
  "mg": 0,
  "fe": 0,
  "zn": 0,
  "vc": 0,
  "serving": {
   "n": 330,
   "unit": "毫升",
   "note": "约1罐"
  },
  "scenes": [],
  "highlight": [
   "警示条目:一罐约含35g糖",
   "除了快糖几乎无营养"
  ],
  "tips": "偶尔解馋可以,健身/减脂期优先无糖款或直接喝水;别把它当补糖工具。",
  "pair": [
   {
    "name": "白开水",
    "why": "饮品是补水的补充,日常基础还是白开水"
   }
  ]
 },
 {
  "id": "lowfat-milk",
  "name": "低脂牛奶",
  "alias": "低脂奶 · 脱脂奶(接近)",
  "emoji": "🥛",
  "cat": "drink",
  "basis": "每100ml",
  "goals": [
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": false,
   "dairy": true,
   "nut": false
  },
  "quick": true,
  "snack": true,
  "kcal": 46,
  "p": 3.4,
  "c": 4.9,
  "f": 1.5,
  "fiber": 0,
  "na": 44,
  "k": 160,
  "ca": 123,
  "mg": 12,
  "fe": 0.03,
  "zn": 0.5,
  "vc": 0,
  "serving": {
   "n": 250,
   "unit": "毫升",
   "note": "约1杯"
  },
  "scenes": [
   "daily",
   "post",
   "rec"
  ],
  "highlight": [
   "蛋白质和钙和全脂差不多,脂肪减半",
   "热量比全脂低,减脂期友好"
  ],
  "tips": "脱脂更低脂但饱腹感略差;按自己热量预算选全脂/低脂/脱脂都行。",
  "pair": [
   {
    "name": "白开水",
    "why": "饮品是补水的补充,日常基础还是白开水"
   }
  ]
 },
 {
  "id": "sparkling-water",
  "name": "无糖气泡水",
  "alias": "气泡水 · 苏打水(无糖)",
  "emoji": "💧",
  "cat": "drink",
  "basis": "每100ml",
  "goals": [
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 0,
  "p": 0,
  "c": 0,
  "f": 0,
  "fiber": 0,
  "na": 12,
  "k": 1,
  "ca": 0,
  "mg": 0,
  "fe": 0,
  "zn": 0,
  "vc": 0,
  "serving": {
   "n": 330,
   "unit": "毫升",
   "note": "约1瓶"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "零热量,想喝汽水时的替代",
   "加两片柠檬更愿意多喝水"
  ],
  "tips": "“零糖”不等于“健康水”,它只是补水选项;日常解渴白水最稳。",
  "pair": [
   {
    "name": "白开水",
    "why": "饮品是补水的补充,日常基础还是白开水"
   }
  ]
 }
];

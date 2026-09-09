/* 食物库 · fat */
const FOODS_FAT = [
 {
  "id": "avocado",
  "name": "牛油果",
  "alias": "鳄梨",
  "emoji": "🥑",
  "cat": "fat",
  "basis": "可食部",
  "goals": [
   "gain",
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
  "kcal": 160,
  "p": 2,
  "c": 8.5,
  "f": 14.7,
  "fiber": 6.7,
  "na": 7,
  "k": 485,
  "ca": 12,
  "mg": 29,
  "fe": 0.6,
  "zn": 0.6,
  "vc": 10,
  "serving": {
   "n": 75,
   "unit": "克",
   "note": "约半个"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "单不饱和脂肪酸为主,是「好脂肪」",
   "纤维高,自带奶油感很饱腹",
   "能当黄油/沙拉酱的替代品"
  ],
  "pair": [
   {
    "name": "全麦面包",
    "why": "牛油果吐司+水煮蛋,轻食早餐"
   },
   {
    "name": "藜麦",
    "why": "藜麦牛油果沙拉,轻食店配方"
   }
  ],
  "recipe": {
   "name": "牛油果吐司",
   "time": "约 8 分钟",
   "steps": [
    "牛油果压泥,加黑胡椒盐和柠檬汁",
    "抹在全麦吐司上",
    "可加一个水煮蛋或煎蛋"
   ]
  },
  "tips": "热量不低,一次吃 1/4~1/2 个就够,别把它当水果炫。"
 },
 {
  "id": "almond",
  "name": "杏仁(原味)",
  "alias": "巴旦木",
  "emoji": "🌰",
  "cat": "fat",
  "basis": "可食部(约15粒/20g一把)",
  "goals": [
   "gain",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": true
  },
  "quick": false,
  "snack": true,
  "kcal": 579,
  "p": 21.2,
  "c": 21.6,
  "f": 49.9,
  "fiber": 12.5,
  "na": 1,
  "k": 733,
  "ca": 264,
  "mg": 268,
  "fe": 3.7,
  "zn": 3.1,
  "vc": 0,
  "serving": {
   "n": 20,
   "unit": "克",
   "note": "约1小把"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "蛋白质+维E+镁,坚果里的全能选手",
   "无盐原味最健康",
   "小小一把就很有满足感"
  ],
  "pair": [
   {
    "name": "希腊酸奶",
    "why": "酸奶+坚果碎,口感瞬间升级"
   },
   {
    "name": "苹果",
    "why": "苹果+一小把杏仁,办公室加餐"
   }
  ],
  "recipe": {
   "name": "直接当加餐",
   "time": "1 分钟",
   "steps": [
    "取一小把(约 20g/15 粒)",
    "直接吃",
    "别边追剧边吃,容易超量"
   ]
  },
  "tips": "买「原味无盐」,避开盐焗、糖裹、蜂蜜款;一天一小把就够,热量很高。"
 },
 {
  "id": "walnut",
  "name": "核桃",
  "alias": "胡桃",
  "emoji": "🌰",
  "cat": "fat",
  "basis": "可食部(约2~3个/日)",
  "goals": [
   "gain",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": true
  },
  "quick": false,
  "snack": true,
  "kcal": 654,
  "p": 15.2,
  "c": 13.7,
  "f": 65.2,
  "fiber": 6.7,
  "na": 2,
  "k": 441,
  "ca": 98,
  "mg": 158,
  "fe": 2.9,
  "zn": 3.1,
  "vc": 1.3,
  "serving": {
   "n": 20,
   "unit": "克",
   "note": "约2~3个"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "含植物性 Omega-3(ALA)的坚果",
   "对脑和心血管友好",
   "脂肪比例高,每天 2~3 个就够"
  ],
  "pair": [
   {
    "name": "燕麦片",
    "why": "早餐麦片撒点核桃碎,口感香脆"
   },
   {
    "name": "希腊酸奶",
    "why": "酸奶+核桃,补脑加餐"
   }
  ],
  "recipe": {
   "name": "直接吃(限量)",
   "time": "1 分钟",
   "steps": [
    "每天 2~3 个核桃",
    "当加餐或拌酸奶燕麦",
    "别买糖衣琥珀核桃"
   ]
  },
  "tips": "核桃脂肪含量高,按「个」计数最不容易吃多;买带壳的自己剥更新鲜。"
 },
 {
  "id": "peanut-butter",
  "name": "花生酱(无糖)",
  "alias": "纯花生酱",
  "emoji": "🥜",
  "cat": "fat",
  "basis": "即食(1勺约15g)",
  "goals": [
   "gain",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": true
  },
  "quick": true,
  "snack": true,
  "kcal": 588,
  "p": 25,
  "c": 20,
  "f": 50,
  "fiber": 6,
  "na": 430,
  "k": 649,
  "ca": 54,
  "mg": 168,
  "fe": 1.9,
  "zn": 2.5,
  "vc": 0,
  "serving": {
   "n": 15,
   "unit": "克",
   "note": "约1勺"
  },
  "scenes": [
   "daily",
   "post",
   "rec",
   "comp"
  ],
  "highlight": [
   "抹面包、蘸苹果都好吃的「蛋白酱」",
   "选 100% 花生、无添加糖油的",
   "增肌期快速加餐神器"
  ],
  "pair": [
   {
    "name": "全麦面包",
    "why": "花生酱全麦吐司,增肌快手早餐"
   },
   {
    "name": "苹果",
    "why": "苹果蘸花生酱,咸甜搭配意外好吃"
   }
  ],
  "recipe": {
   "name": "花生酱香蕉吐司",
   "time": "约 5 分钟",
   "steps": [
    "全麦吐司烤脆",
    "抹一勺无糖花生酱",
    "铺香蕉片,对半切"
   ]
  },
  "tips": "看配料表,只有「花生」两个字的最理想;一次一勺(约 15g)就够,别整瓶挖。"
 },
 {
  "id": "olive-oil",
  "name": "橄榄油",
  "alias": "初榨橄榄油",
  "emoji": "🛢️",
  "cat": "fat",
  "basis": "液态油(1勺约10g)",
  "goals": [
   "gain",
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
  "kcal": 899,
  "p": 0,
  "c": 0,
  "f": 99.9,
  "fiber": 0,
  "na": 1,
  "k": 0,
  "ca": 0,
  "mg": 0,
  "fe": 0,
  "zn": 0,
  "vc": 0,
  "serving": {
   "n": 10,
   "unit": "克",
   "note": "约1勺"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "单不饱和脂肪酸为主,厨房里的「好油」",
   "凉拌、低温煎炒都很合适",
   "烟点内使用没问题,别高温冒烟"
  ],
  "pair": [
   {
    "name": "蔬菜沙拉",
    "why": "橄榄油+柠檬汁+黑胡椒=万能油醋汁"
   },
   {
    "name": "鱼和鸡",
    "why": "煎鱼煎鸡用少量橄榄油,健康增香"
   }
  ],
  "recipe": {
   "name": "油醋汁",
   "time": "约 2 分钟",
   "steps": [
    "橄榄油 1 勺+柠檬汁/醋 1 勺",
    "加黑胡椒和一点点盐",
    "摇匀,淋在沙拉上"
   ]
  },
  "tips": "再健康的油也是油,一人一餐 5~10g 足够;初榨橄榄油适合凉拌,高温油炸交给烟点高的油。",
  "pic": "assets/img/food/olive-oil.png"
 },
 {
  "id": "cashew",
  "name": "腰果",
  "alias": "腰果",
  "emoji": "🥜",
  "cat": "fat",
  "basis": "可食部(原味)",
  "goals": [
   "gain",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": true
  },
  "quick": false,
  "snack": true,
  "kcal": 553,
  "p": 18.2,
  "c": 30.2,
  "f": 43.9,
  "fiber": 3.3,
  "na": 12,
  "k": 660,
  "ca": 37,
  "mg": 292,
  "fe": 6.7,
  "zn": 5.8,
  "vc": 0.5,
  "serving": {
   "n": 20,
   "unit": "克",
   "note": "约15粒"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "镁和锌都不错,口感香脆",
   "选原味无盐款"
  ],
  "tips": "减脂期一天一小把(约15~20粒)就够,别当瓜子磕。",
  "pair": [
   {
    "name": "酸奶/燕麦",
    "why": "一小份撒在酸奶或燕麦里,提香增饱腹"
   }
  ]
 },
 {
  "id": "pistachio",
  "name": "开心果",
  "alias": "开心果",
  "emoji": "🥜",
  "cat": "fat",
  "basis": "可食部(去壳原味)",
  "goals": [
   "gain",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": true
  },
  "quick": false,
  "snack": true,
  "kcal": 562,
  "p": 20.6,
  "c": 28,
  "f": 45.3,
  "fiber": 10,
  "na": 1,
  "k": 1025,
  "ca": 105,
  "mg": 121,
  "fe": 3.9,
  "zn": 2.2,
  "vc": 5,
  "serving": {
   "n": 20,
   "unit": "克",
   "note": "去壳约1把"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "蛋白质和钾在坚果里偏高",
   "带壳吃更慢,不容易吃过量"
  ],
  "tips": "优先原味带壳;盐焗款钠高,注意看配料。",
  "pair": [
   {
    "name": "酸奶/燕麦",
    "why": "一小份撒在酸奶或燕麦里,提香增饱腹"
   }
  ]
 },
 {
  "id": "macadamia",
  "name": "夏威夷果",
  "alias": "澳洲坚果 · 夏威夷果",
  "emoji": "🌰",
  "cat": "fat",
  "basis": "可食部(原味)",
  "goals": [
   "gain"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": true
  },
  "quick": false,
  "snack": true,
  "kcal": 718,
  "p": 7.9,
  "c": 13.8,
  "f": 75.8,
  "fiber": 8.6,
  "na": 5,
  "k": 368,
  "ca": 85,
  "mg": 130,
  "fe": 3.7,
  "zn": 1.3,
  "vc": 1.2,
  "serving": {
   "n": 15,
   "unit": "克",
   "note": "约8~10颗"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "单不饱和脂肪高,增肌期补能量好",
   "热量很高,严格限量"
  ],
  "tips": "每天8~10颗足够;买原味,别买奶油/盐焗调味款。",
  "pair": [
   {
    "name": "酸奶/燕麦",
    "why": "一小份撒在酸奶或燕麦里,提香增饱腹"
   }
  ]
 },
 {
  "id": "chia",
  "name": "奇亚籽",
  "alias": "奇亚籽",
  "emoji": "🌱",
  "cat": "fat",
  "basis": "干重",
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
  "kcal": 486,
  "p": 16.5,
  "c": 42.1,
  "f": 30.7,
  "fiber": 34,
  "na": 16,
  "k": 407,
  "ca": 631,
  "mg": 335,
  "fe": 7.7,
  "zn": 4.6,
  "vc": 1.6,
  "serving": {
   "n": 15,
   "unit": "克",
   "note": "约1勺"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "纤维和钙镁非常高,吸水力强",
   "泡发后拌酸奶燕麦,饱腹"
  ],
  "tips": "遇水膨胀很多,记得泡发再吃,别干吞;每天10~15g即可。",
  "pair": [
   {
    "name": "酸奶/燕麦",
    "why": "一小份撒在酸奶或燕麦里,提香增饱腹"
   }
  ]
 },
 {
  "id": "flax",
  "name": "亚麻籽(熟)",
  "alias": "亚麻籽 · 胡麻籽",
  "emoji": "🌰",
  "cat": "fat",
  "basis": "熟籽(干)",
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
  "quick": false,
  "snack": false,
  "kcal": 534,
  "p": 18.3,
  "c": 28.9,
  "f": 42.2,
  "fiber": 27,
  "na": 30,
  "k": 813,
  "ca": 255,
  "mg": 392,
  "fe": 5.7,
  "zn": 4.3,
  "vc": 0.6,
  "serving": {
   "n": 15,
   "unit": "克",
   "note": "约1勺"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "植物性Omega-3(ALA)来源",
   "磨碎后更好吸收"
  ],
  "tips": "要买熟制或自己炒熟、磨粉食用,生籽有微量风险且难消化。",
  "pair": [
   {
    "name": "酸奶/燕麦",
    "why": "一小份撒在酸奶或燕麦里,提香增饱腹"
   }
  ]
 }
];

/* 食物库 · veg */
const FOODS_VEG = [
 {
  "id": "broccoli",
  "name": "西兰花",
  "alias": "绿花菜 · 青花菜",
  "emoji": "🥦",
  "cat": "veg",
  "basis": "生重",
  "goals": [
   "cut",
   "maintain",
   "gain"
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
  "kcal": 34,
  "p": 2.8,
  "c": 6.6,
  "f": 0.4,
  "fiber": 2.6,
  "na": 33,
  "k": 316,
  "ca": 47,
  "mg": 21,
  "fe": 0.7,
  "zn": 0.4,
  "vc": 89,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心/1份"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "蔬菜里的「蛋白质含量担当」",
   "维C+膳食纤维都拿得出手",
   "和几乎所有蛋白类食材都搭"
  ],
  "pair": [
   {
    "name": "鸡胸肉",
    "why": "鸡胸+西兰花,健身餐的黄金组合"
   },
   {
    "name": "虾仁",
    "why": "虾仁炒西兰花,10 分钟快手菜"
   }
  ],
  "recipe": {
   "name": "白灼西兰花",
   "time": "约 8 分钟",
   "steps": [
    "西兰花掰小朵,盐水泡 5 分钟",
    "沸水加几滴油,焯 1~2 分钟捞出",
    "拌蒜末和少量生抽"
   ]
  },
  "tips": "别久煮,软烂口感差营养也流失;颜色越深绿通常营养越好。"
 },
 {
  "id": "spinach",
  "name": "菠菜",
  "alias": "菠薐菜",
  "emoji": "🥬",
  "cat": "veg",
  "basis": "生重",
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
  "kcal": 23,
  "p": 2.9,
  "c": 3.6,
  "f": 0.4,
  "fiber": 2.2,
  "na": 79,
  "k": 558,
  "ca": 99,
  "mg": 79,
  "fe": 2.7,
  "zn": 0.5,
  "vc": 28,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心/1份"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "铁+叶酸+膳食纤维",
   "焯水后草酸大减,更好吸收",
   "便宜,一把就能炒一大盘"
  ],
  "pair": [
   {
    "name": "鸡蛋",
    "why": "菠菜摊蛋/蛋花汤,补铁补蛋白"
   },
   {
    "name": "豆腐",
    "why": "菠菜豆腐汤,记得菠菜先焯水"
   }
  ],
  "recipe": {
   "name": "蒜蓉菠菜",
   "time": "约 5 分钟",
   "steps": [
    "菠菜洗净,沸水焯 30 秒捞出",
    "热锅少油爆香蒜末",
    "下菠菜大火快炒 1 分钟,盐调味"
   ]
  },
  "tips": "草酸高,生拌或煮汤前一定先焯水,口感也不涩。"
 },
 {
  "id": "cabbage",
  "name": "大白菜",
  "alias": "白菜 · 黄芽白",
  "emoji": "🥬",
  "cat": "veg",
  "basis": "生重",
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
  "kcal": 17,
  "p": 1.5,
  "c": 3.2,
  "f": 0.1,
  "fiber": 0.9,
  "na": 18,
  "k": 170,
  "ca": 40,
  "mg": 15,
  "fe": 0.5,
  "zn": 0.2,
  "vc": 25,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心/1份"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "便宜大碗,热量极低,吃到饱也不怕",
   "维C含量其实不低",
   "炖汤、清炒、煮面都百搭"
  ],
  "pair": [
   {
    "name": "豆腐",
    "why": "白菜豆腐汤,清淡高蛋白的一锅"
   },
   {
    "name": "鸡蛋",
    "why": "白菜炒蛋,一人食快手菜"
   }
  ],
  "recipe": {
   "name": "白菜豆腐汤",
   "time": "约 15 分钟",
   "steps": [
    "少油炒香姜片,加水烧开",
    "下豆腐块煮 3 分钟",
    "下白菜煮 3 分钟,盐和白胡椒调味"
   ]
  },
  "tips": "外层老叶别全扔,纤维和营养更多;整颗放冰箱能存挺久。"
 },
 {
  "id": "tomato",
  "name": "番茄",
  "alias": "西红柿",
  "emoji": "🍅",
  "cat": "veg",
  "basis": "生重",
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
  "kcal": 18,
  "p": 0.9,
  "c": 3.9,
  "f": 0.2,
  "fiber": 1.2,
  "na": 5,
  "k": 237,
  "ca": 10,
  "mg": 11,
  "fe": 0.3,
  "zn": 0.2,
  "vc": 14,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心/1份"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "含水量高,热量几乎可以忽略",
   "熟吃番茄红素更好吸收",
   "酸甜开胃,帮你少放盐和糖"
  ],
  "pair": [
   {
    "name": "鸡蛋",
    "why": "番茄炒蛋,国民家常菜(少油版)"
   },
   {
    "name": "瘦牛肉",
    "why": "番茄牛肉,酸甜浓汁很下饭"
   }
  ],
  "recipe": {
   "name": "少油番茄炒蛋",
   "time": "约 10 分钟",
   "steps": [
    "番茄切块,鸡蛋加一点盐打散",
    "热锅少油,蛋液炒至凝固盛出",
    "原锅下番茄炒软出汁",
    "倒回鸡蛋,加少量盐翻匀"
   ]
  },
  "tips": "别为了调味加大量糖;想要汁多可以加一点点水焖一下。"
 },
 {
  "id": "cucumber",
  "name": "黄瓜",
  "alias": "青瓜",
  "emoji": "🥒",
  "cat": "veg",
  "basis": "生重",
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
  "snack": true,
  "kcal": 15,
  "p": 0.7,
  "c": 3.6,
  "f": 0.1,
  "fiber": 0.5,
  "na": 2,
  "k": 147,
  "ca": 16,
  "mg": 13,
  "fe": 0.3,
  "zn": 0.2,
  "vc": 2.8,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心/1份"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "热量低到可以忽略",
   "含水量高,夏天解渴",
   "当加餐、当配菜都行"
  ],
  "pair": [
   {
    "name": "鸡胸肉",
    "why": "凉拌鸡丝黄瓜,夏天减脂凉菜"
   },
   {
    "name": "虾仁",
    "why": "虾仁拌黄瓜,清爽高蛋白"
   }
  ],
  "recipe": {
   "name": "拍黄瓜",
   "time": "约 8 分钟",
   "steps": [
    "黄瓜拍裂切段",
    "加蒜末、生抽、醋、几滴香油",
    "拌匀,冷藏 10 分钟更入味"
   ]
  },
  "tips": "饿的时候先啃一根黄瓜垫垫,是减脂期很实用的小技巧。"
 },
 {
  "id": "carrot",
  "name": "胡萝卜",
  "alias": "红萝卜",
  "emoji": "🥕",
  "cat": "veg",
  "basis": "生重",
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
  "kcal": 41,
  "p": 0.9,
  "c": 9.6,
  "f": 0.2,
  "fiber": 2.8,
  "na": 69,
  "k": 320,
  "ca": 33,
  "mg": 12,
  "fe": 0.3,
  "zn": 0.2,
  "vc": 5.9,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心/1份"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "β-胡萝卜素(维A前体)丰富",
   "甜甜的,能替代部分水果",
   "炒或炖后营养更好吸收"
  ],
  "pair": [
   {
    "name": "瘦牛肉",
    "why": "牛肉炒胡萝卜,甜味来自食材本身"
   },
   {
    "name": "鸡蛋",
    "why": "胡萝卜炒蛋,快手又便宜"
   }
  ],
  "recipe": {
   "name": "清炒胡萝卜丝",
   "time": "约 10 分钟",
   "steps": [
    "胡萝卜切细丝",
    "少油中火炒 3~4 分钟",
    "加两勺水盖盖焖软,盐调味"
   ]
  },
  "tips": "脂溶性维生素,配一点油炒着吃吸收更好;生啃当加餐也可以。"
 },
 {
  "id": "bell-pepper",
  "name": "彩椒",
  "alias": "甜椒 · 灯笼椒",
  "emoji": "🌶️",
  "cat": "veg",
  "basis": "生重",
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
  "kcal": 31,
  "p": 1,
  "c": 6,
  "f": 0.3,
  "fiber": 2.1,
  "na": 4,
  "k": 211,
  "ca": 7,
  "mg": 12,
  "fe": 0.4,
  "zn": 0.3,
  "vc": 128,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心/1份"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "维C含量很高(比橙子还高)",
   "颜色鲜艳,看着就有食欲",
   "生吃脆甜,适合带饭"
  ],
  "pair": [
   {
    "name": "瘦牛肉",
    "why": "彩椒牛肉粒,颜色好看又补铁"
   },
   {
    "name": "鸡胸肉",
    "why": "彩椒鸡丁,低脂又快"
   }
  ],
  "recipe": {
   "name": "彩椒炒鸡丁",
   "time": "约 15 分钟",
   "steps": [
    "鸡胸切丁,盐黑胡椒腌 10 分钟",
    "先炒鸡丁至变色盛出",
    "下彩椒块快炒 2 分钟",
    "倒回鸡丁,调味翻匀"
   ]
  },
  "tips": "红椒黄椒比青椒甜、维C也更高;彩椒别炒太软,脆一点更好吃。",
  "pic": "assets/img/food/bell-pepper.png"
 },
 {
  "id": "asparagus",
  "name": "芦笋",
  "alias": "龙须菜",
  "emoji": "🌱",
  "cat": "veg",
  "basis": "生重",
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
  "kcal": 20,
  "p": 2.2,
  "c": 3.9,
  "f": 0.1,
  "fiber": 2.1,
  "na": 2,
  "k": 202,
  "ca": 24,
  "mg": 14,
  "fe": 2.1,
  "zn": 0.5,
  "vc": 5.6,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心/1份"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "低热量+叶酸,营养密度不错",
   "口感脆嫩,自带「轻食高级感」",
   "配牛排、三文鱼都很搭"
  ],
  "pair": [
   {
    "name": "三文鱼",
    "why": "香煎芦笋配三文鱼,轻食店同款"
   },
   {
    "name": "瘦牛肉",
    "why": "芦笋炒牛肉,快手精致菜"
   }
  ],
  "recipe": {
   "name": "香煎芦笋",
   "time": "约 8 分钟",
   "steps": [
    "芦笋去老根(底部削皮)",
    "少油中火煎 2~3 分钟",
    "撒黑胡椒盐,可挤柠檬汁"
   ]
  },
  "tips": "底部老的部分削掉或切去,整根煎比切段更有口感。"
 },
 {
  "id": "mushroom",
  "name": "口蘑(白蘑菇)",
  "alias": "双孢蘑菇",
  "emoji": "🍄",
  "cat": "veg",
  "basis": "生重",
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
  "kcal": 22,
  "p": 3.1,
  "c": 3.3,
  "f": 0.3,
  "fiber": 1,
  "na": 3,
  "k": 318,
  "ca": 3,
  "mg": 9,
  "fe": 0.5,
  "zn": 0.5,
  "vc": 2.1,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心/1份"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "菌菇里蛋白质相对较高",
   "自带鲜味(谷氨酸),少盐也好吃",
   "低热量,怎么炒都行"
  ],
  "pair": [
   {
    "name": "鸡腿肉",
    "why": "口蘑和鸡肉是「鲜上加鲜」组合"
   },
   {
    "name": "菠菜",
    "why": "口蘑菠菜,清淡的一锅素菜"
   }
  ],
  "recipe": {
   "name": "蒜香口蘑",
   "time": "约 10 分钟",
   "steps": [
    "口蘑洗净切片(别泡水)",
    "少油中火炒软出汁",
    "下蒜末炒香,黑胡椒盐调味"
   ]
  },
  "tips": "口蘑别长时间泡水,流水冲一下就好,鲜味在汤汁里,炒出来的汁别倒掉。"
 },
 {
  "id": "edamame",
  "name": "毛豆",
  "alias": "青豆 · 枝豆",
  "emoji": "🥦",
  "cat": "veg",
  "basis": "可食部(煮后去荚)",
  "goals": [
   "cut",
   "maintain",
   "gain"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": true,
  "kcal": 130,
  "p": 13,
  "c": 11,
  "f": 5,
  "fiber": 4,
  "na": 6,
  "k": 436,
  "ca": 63,
  "mg": 64,
  "fe": 3.5,
  "zn": 1.4,
  "vc": 6.1,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心/1份"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "「零食型蔬菜」:植物蛋白+纤维都不错",
   "水煮撒点盐,追剧时替代薯片",
   "属于豆类,比叶菜热量高,控制量"
  ],
  "pair": [
   {
    "name": "玉米",
    "why": "毛豆玉米粒,清甜又好看"
   },
   {
    "name": "虾仁",
    "why": "毛豆虾仁,高蛋白小炒"
   }
  ],
  "recipe": {
   "name": "盐水毛豆",
   "time": "约 25 分钟",
   "steps": [
    "毛豆剪掉两头(更好入味)",
    "盐水煮 8~10 分钟",
    "关火再泡 10 分钟,冷藏更好吃"
   ]
  },
  "tips": "毛豆是豆类,碳水和热量比叶菜高,当加餐一小碗(约带壳 200g)就好。",
  "pic": "assets/img/food/edamame.png"
 },
 {
  "id": "youcai",
  "name": "油菜(上海青)",
  "alias": "上海青 · 青菜",
  "emoji": "🥬",
  "cat": "veg",
  "basis": "生重",
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
  "kcal": 23,
  "p": 1.8,
  "c": 3.8,
  "f": 0.4,
  "fiber": 1.1,
  "na": 55,
  "k": 210,
  "ca": 108,
  "mg": 22,
  "fe": 1.8,
  "zn": 0.4,
  "vc": 36,
  "serving": {
   "n": 200,
   "unit": "克",
   "note": "约1盘"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "钙和维C在叶菜里都不错",
   "便宜大碗,炒煮都方便"
  ],
  "pair": [
   {
    "name": "口蘑",
    "why": "油菜口蘑,清炒鲜甜"
   }
  ],
  "recipe": {
   "name": "白灼油菜",
   "time": "约5分钟",
   "steps": [
    "油菜洗净,沸水加几滴油焯1分钟",
    "捞出淋少量生抽蒜末",
    "或少油快炒1~2分钟"
   ]
  },
  "tips": "茎叶一起快炒,别久煮,维生素保留更多。"
 },
 {
  "id": "kongxincai",
  "name": "空心菜",
  "alias": "空心菜 · 蕹菜",
  "emoji": "🥬",
  "cat": "veg",
  "basis": "生重",
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
  "kcal": 20,
  "p": 2.4,
  "c": 3.1,
  "f": 0.4,
  "fiber": 2.2,
  "na": 95,
  "k": 243,
  "ca": 99,
  "mg": 29,
  "fe": 2.5,
  "zn": 0.4,
  "vc": 25,
  "serving": {
   "n": 200,
   "unit": "克",
   "note": "约1盘"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "铁和钙在叶菜里偏高",
   "焯水快炒,清脆爽口"
  ],
  "pair": [
   {
    "name": "蒜末",
    "why": "蒜蓉空心菜是经典做法"
   }
  ],
  "tips": "草酸不高,但高温快炒最保营养;叶菜洗后再切。"
 },
 {
  "id": "tonghao",
  "name": "茼蒿",
  "alias": "茼蒿",
  "emoji": "🌿",
  "cat": "veg",
  "basis": "生重",
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
  "kcal": 24,
  "p": 1.9,
  "c": 3.9,
  "f": 0.3,
  "fiber": 1.6,
  "na": 161,
  "k": 220,
  "ca": 73,
  "mg": 20,
  "fe": 2.5,
  "zn": 0.6,
  "vc": 18,
  "serving": {
   "n": 200,
   "unit": "克",
   "note": "约1盘"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "自带特殊香气,少调味也香",
   "钠其实不低,别再猛放盐"
  ],
  "pair": [
   {
    "name": "豆腐",
    "why": "茼蒿豆腐汤,清香清淡"
   }
  ],
  "recipe": {
   "name": "清炒茼蒿",
   "time": "约4分钟",
   "steps": [
    "茼蒿切段洗净",
    "大火热油,下蒜片炒香",
    "倒茼蒿快炒1~2分钟,少盐出锅"
   ]
  },
  "tips": "煮汤涮锅都好;注意钠含量,汤菜少加盐。"
 },
 {
  "id": "jiucai",
  "name": "韭菜",
  "alias": "韭菜",
  "emoji": "🌿",
  "cat": "veg",
  "basis": "生重",
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
  "kcal": 26,
  "p": 2.4,
  "c": 4.6,
  "f": 0.4,
  "fiber": 1.6,
  "na": 8,
  "k": 247,
  "ca": 42,
  "mg": 25,
  "fe": 1.6,
  "zn": 0.4,
  "vc": 24,
  "serving": {
   "n": 100,
   "unit": "克",
   "note": "约半盘"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "膳食纤维和胡萝卜素不错",
   "当配菜炒蛋炒豆干都香"
  ],
  "pair": [
   {
    "name": "鸡蛋",
    "why": "韭菜炒蛋,家常快手"
   }
  ],
  "recipe": {
   "name": "韭菜炒蛋",
   "time": "约6分钟",
   "steps": [
    "韭菜切段,鸡蛋打散",
    "先炒蛋盛出",
    "下韭菜快炒20秒,倒回蛋调味"
   ]
  },
  "tips": "韭菜别炒太久会出水变老;晚上吃多易胀气,看个人耐受。"
 },
 {
  "id": "qincai",
  "name": "芹菜",
  "alias": "芹菜(茎)",
  "emoji": "🥬",
  "cat": "veg",
  "basis": "生重",
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
  "kcal": 16,
  "p": 1.2,
  "c": 3.3,
  "f": 0.2,
  "fiber": 1.4,
  "na": 159,
  "k": 260,
  "ca": 80,
  "mg": 18,
  "fe": 0.8,
  "zn": 0.2,
  "vc": 8,
  "serving": {
   "n": 200,
   "unit": "克",
   "note": "约4~5根"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "热量极低,嚼着有饱腹感",
   "自带咸鲜味,少盐也够味"
  ],
  "pair": [
   {
    "name": "香干",
    "why": "芹菜炒香干,高蛋白素菜"
   }
  ],
  "recipe": {
   "name": "凉拌芹菜",
   "time": "约8分钟",
   "steps": [
    "芹菜切段焯水30秒",
    "过凉水,拌蒜末生抽醋香油",
    "冷藏更脆"
   ]
  },
  "tips": "芹菜含钠不低,用它入菜时少放盐。"
 },
 {
  "id": "wosun",
  "name": "莴笋",
  "alias": "莴苣笋 · 青笋",
  "emoji": "🥬",
  "cat": "veg",
  "basis": "生重(去皮茎)",
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
  "kcal": 15,
  "p": 1,
  "c": 2.8,
  "f": 0.1,
  "fiber": 0.6,
  "na": 36,
  "k": 212,
  "ca": 23,
  "mg": 19,
  "fe": 0.9,
  "zn": 0.3,
  "vc": 4,
  "serving": {
   "n": 200,
   "unit": "克",
   "note": "约半根"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "热量低、口感脆",
   "拌菜炒肉都清爽"
  ],
  "pair": [
   {
    "name": "虾仁",
    "why": "莴笋炒虾仁,清甜低脂"
   }
  ],
  "tips": "叶子别扔,营养比茎高,可焯水拌着吃。"
 },
 {
  "id": "qiezi",
  "name": "茄子",
  "alias": "茄子",
  "emoji": "🍆",
  "cat": "veg",
  "basis": "生重(可食部)",
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
  "kcal": 23,
  "p": 1.1,
  "c": 4.9,
  "f": 0.2,
  "fiber": 1.3,
  "na": 5,
  "k": 220,
  "ca": 24,
  "mg": 13,
  "fe": 0.4,
  "zn": 0.2,
  "vc": 5,
  "serving": {
   "n": 200,
   "unit": "克",
   "note": "约1根"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "本身热量低,吸油是唯一问题",
   "做法换成蒸/烤就健康"
  ],
  "pair": [
   {
    "name": "蒜",
    "why": "蒜蓉蒸茄,不用油炸也好吃"
   }
  ],
  "recipe": {
   "name": "蒜蓉蒸茄子",
   "time": "约15分钟",
   "steps": [
    "茄子对半切,蒸10~12分钟",
    "撕条,拌蒜末生抽醋",
    "少油泼或不泼"
   ]
  },
  "tips": "红烧/油炸茄子吸油多,热量翻倍;健身优先蒸、烤、凉拌。"
 },
 {
  "id": "xihulu",
  "name": "西葫芦",
  "alias": "角瓜 · 云南小瓜",
  "emoji": "🥒",
  "cat": "veg",
  "basis": "生重",
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
  "kcal": 19,
  "p": 0.8,
  "c": 3.8,
  "f": 0.2,
  "fiber": 1,
  "na": 5,
  "k": 260,
  "ca": 20,
  "mg": 20,
  "fe": 0.3,
  "zn": 0.3,
  "vc": 9,
  "serving": {
   "n": 200,
   "unit": "克",
   "note": "约半根"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "水分足热量低",
   "切丝煎饼/炒肉都不错"
  ],
  "pair": [
   {
    "name": "虾仁",
    "why": "西葫芦炒虾仁,清爽低脂"
   }
  ],
  "recipe": {
   "name": "清炒西葫芦",
   "time": "约5分钟",
   "steps": [
    "西葫芦切片",
    "少油下锅炒1分钟",
    "加一点水焖软,盐调味"
   ]
  },
  "tips": "籽多时挖掉口感更好;别久炒出水太多。"
 },
 {
  "id": "donggua",
  "name": "冬瓜",
  "alias": "冬瓜",
  "emoji": "🥒",
  "cat": "veg",
  "basis": "生重(去皮瓤)",
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
  "kcal": 11,
  "p": 0.4,
  "c": 2.6,
  "f": 0.2,
  "fiber": 0.7,
  "na": 1,
  "k": 78,
  "ca": 19,
  "mg": 8,
  "fe": 0.2,
  "zn": 0.1,
  "vc": 18,
  "serving": {
   "n": 250,
   "unit": "克",
   "note": "约1大块"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "含水量高,热量几乎可忽略",
   "利尿感强,夏天汤菜首选"
  ],
  "pair": [
   {
    "name": "蛤蜊",
    "why": "蛤蜊冬瓜汤,补电解质又低卡"
   }
  ],
  "recipe": {
   "name": "清炖冬瓜",
   "time": "约15分钟",
   "steps": [
    "冬瓜去皮切块",
    "水开煮10分钟",
    "少盐白胡椒调味,可加虾皮"
   ]
  },
  "tips": "减肥期可以大胆吃,但别配大量油和肥肉同炖。"
 },
 {
  "id": "kugua",
  "name": "苦瓜",
  "alias": "凉瓜",
  "emoji": "🥒",
  "cat": "veg",
  "basis": "生重",
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
  "kcal": 19,
  "p": 1,
  "c": 3.7,
  "f": 0.1,
  "fiber": 1.4,
  "na": 4,
  "k": 260,
  "ca": 14,
  "mg": 18,
  "fe": 0.7,
  "zn": 0.3,
  "vc": 56,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "约1根"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "维C很高",
   "苦味来自葫芦素,自带清热感"
  ],
  "pair": [
   {
    "name": "鸡蛋",
    "why": "苦瓜炒蛋,苦味减半"
   }
  ],
  "recipe": {
   "name": "苦瓜炒蛋",
   "time": "约10分钟",
   "steps": [
    "苦瓜去瓤切薄片,盐腌5分钟挤水",
    "先炒蛋盛出",
    "下苦瓜炒2分钟,倒回蛋调味"
   ]
  },
  "tips": "怕苦就切薄+盐腌挤水或先焯水;孕期请谨慎食用苦瓜。"
 },
 {
  "id": "enoki",
  "name": "金针菇",
  "alias": "金针菇",
  "emoji": "🍄",
  "cat": "veg",
  "basis": "生重",
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
  "kcal": 32,
  "p": 2.4,
  "c": 6,
  "f": 0.4,
  "fiber": 2.7,
  "na": 4,
  "k": 195,
  "ca": 8,
  "mg": 15,
  "fe": 1.2,
  "zn": 0.7,
  "vc": 2,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "约1把"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "低热量高纤维,涮锅煮汤都行",
   "久煮不烂,口感弹牙"
  ],
  "pair": [
   {
    "name": "番茄",
    "why": "番茄金针菇汤,酸爽开胃"
   }
  ],
  "recipe": {
   "name": "烤金针菇",
   "time": "约15分钟",
   "steps": [
    "金针菇洗净铺锡纸",
    "刷薄薄一层生抽蒜末",
    "200℃烤10~12分钟"
   ]
  },
  "tips": "有\"明天见\"梗是因为纤维难消化,细嚼慢咽即可。"
 },
 {
  "id": "king-oyster",
  "name": "杏鲍菇",
  "alias": "杏鲍菇 · 刺芹侧耳",
  "emoji": "🍄",
  "cat": "veg",
  "basis": "生重",
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
  "kcal": 35,
  "p": 1.3,
  "c": 8.3,
  "f": 0.1,
  "fiber": 3.1,
  "na": 3,
  "k": 120,
  "ca": 13,
  "mg": 13,
  "fe": 0.5,
  "zn": 0.6,
  "vc": 0,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "约1根"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "口感像肉的菇类,素食“牛排”",
   "纤维不错,热量低"
  ],
  "pair": [
   {
    "name": "西兰花",
    "why": "手撕双菇拼盘,低脂增香"
   }
  ],
  "tips": "手撕比刀切更易入味;先干煸出水分更香。"
 },
 {
  "id": "wood-ear",
  "name": "木耳(水发)",
  "alias": "黑木耳 · 云耳",
  "emoji": "🍄",
  "cat": "veg",
  "basis": "水发后",
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
  "kcal": 27,
  "p": 1.5,
  "c": 6,
  "f": 0.2,
  "fiber": 2.6,
  "na": 8,
  "k": 52,
  "ca": 34,
  "mg": 57,
  "fe": 5.5,
  "zn": 0.6,
  "vc": 0,
  "serving": {
   "n": 100,
   "unit": "克",
   "note": "水发后约半碗"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "植物性铁和膳食纤维不错",
   "泡发后低热量,凉拌炖汤都好"
  ],
  "pair": [
   {
    "name": "腐竹",
    "why": "凉拌木耳腐竹,高纤高蛋白"
   }
  ],
  "recipe": {
   "name": "凉拌木耳",
   "time": "约15分钟(不含泡发)",
   "steps": [
    "干木耳凉水泡发,去根",
    "沸水焯2分钟,过凉水",
    "拌蒜末、生抽、醋、香油"
   ]
  },
  "tips": "干木耳别久泡过夜(可能产生毒素),泡发后尽快食用,现泡现吃。"
 },
 {
  "id": "kelp",
  "name": "海带(水发)",
  "alias": "海带丝 · 昆布",
  "emoji": "🌊",
  "cat": "veg",
  "basis": "水发后",
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
  "kcal": 16,
  "p": 1.2,
  "c": 2,
  "f": 0.1,
  "fiber": 0.5,
  "na": 90,
  "k": 246,
  "ca": 46,
  "mg": 61,
  "fe": 0.9,
  "zn": 0.2,
  "vc": 0,
  "serving": {
   "n": 100,
   "unit": "克",
   "note": "水发后约半碗"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "碘和镁的天然来源",
   "低热量,凉拌炖汤都好"
  ],
  "pair": [
   {
    "name": "豆腐",
    "why": "海带豆腐汤,补碘又补钙"
   }
  ],
  "recipe": {
   "name": "凉拌海带丝",
   "time": "约10分钟",
   "steps": [
    "水发海带切丝,焯水2分钟",
    "过凉水,拌蒜末生抽醋",
    "少油,冷藏更入味"
   ]
  },
  "tips": "甲状腺疾病患者请遵医嘱控制海带等富碘食物。"
 },
 {
  "id": "bean-sprout",
  "name": "绿豆芽",
  "alias": "豆芽 · 绿豆芽",
  "emoji": "🌱",
  "cat": "veg",
  "basis": "生重",
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
  "kcal": 16,
  "p": 1.8,
  "c": 2.8,
  "f": 0.1,
  "fiber": 0.8,
  "na": 4,
  "k": 68,
  "ca": 9,
  "mg": 18,
  "fe": 0.4,
  "zn": 0.3,
  "vc": 6,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "约1盘"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "热量低水分足,饱腹感好",
   "便宜,配菜百搭"
  ],
  "pair": [
   {
    "name": "韭菜",
    "why": "炒合菜,豆芽韭菜绝配"
   }
  ],
  "tips": "大火快炒保持脆嫩;生豆芽有微生物风险,尽量做熟吃。"
 },
 {
  "id": "onion",
  "name": "洋葱",
  "alias": "洋葱",
  "emoji": "🧅",
  "cat": "veg",
  "basis": "生重",
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
  "kcal": 40,
  "p": 1.1,
  "c": 9.3,
  "f": 0.1,
  "fiber": 1.7,
  "na": 4,
  "k": 146,
  "ca": 23,
  "mg": 10,
  "fe": 0.2,
  "zn": 0.2,
  "vc": 7,
  "serving": {
   "n": 100,
   "unit": "克",
   "note": "约半个"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "自带甜味,帮减脂餐少放糖",
   "槲皮素等抗氧化物丰富"
  ],
  "pair": [
   {
    "name": "瘦牛肉",
    "why": "洋葱炒牛肉,去腥增香"
   }
  ],
  "recipe": {
   "name": "洋葱炒蛋/炒肉",
   "time": "约8分钟",
   "steps": [
    "洋葱切丝",
    "少油炒至微黄出甜味",
    "加蛋液或肉片同炒调味"
   ]
  },
  "tips": "生吃更冲更“辣”,肠胃敏感建议做熟吃。"
 }
];

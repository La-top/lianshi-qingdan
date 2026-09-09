/* 食物库 · fruit */
const FOODS_FRUIT = [
 {
  "id": "blueberry",
  "name": "蓝莓",
  "alias": "越橘",
  "emoji": "🍇",
  "cat": "fruit",
  "basis": "可食部",
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
  "kcal": 57,
  "p": 0.7,
  "c": 14.5,
  "f": 0.3,
  "fiber": 2.4,
  "na": 1,
  "k": 77,
  "ca": 6,
  "mg": 6,
  "fe": 0.3,
  "zn": 0.2,
  "vc": 9.7,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "约1小碗"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "花青素抗氧化,颜色越深越明显",
   "低热量小颗,拌酸奶燕麦很方便",
   "冷冻蓝莓性价比更高"
  ],
  "pair": [
   {
    "name": "希腊酸奶",
    "why": "蓝莓+无糖酸奶,好吃又低负担"
   },
   {
    "name": "燕麦片",
    "why": "早餐麦片碗的灵魂配料"
   }
  ],
  "recipe": {
   "name": "蓝莓酸奶碗",
   "time": "约 3 分钟",
   "steps": [
    "无糖酸奶打底",
    "铺蓝莓、燕麦片",
    "可加少量核桃碎"
   ]
  },
  "tips": "新鲜和冷冻营养差别不大,冷冻的通常便宜不少,做酸奶碗直接用。",
  "pic": "assets/img/food/blueberry.png"
 },
 {
  "id": "strawberry",
  "name": "草莓",
  "alias": "士多啤梨",
  "emoji": "🍓",
  "cat": "fruit",
  "basis": "可食部",
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
  "kcal": 32,
  "p": 1,
  "c": 7.7,
  "f": 0.3,
  "fiber": 2,
  "na": 1,
  "k": 153,
  "ca": 16,
  "mg": 13,
  "fe": 0.4,
  "zn": 0.1,
  "vc": 59,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "约1小碗"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "水果里含糖量偏低的一档",
   "维C丰富,酸甜解馋",
   "颜值高,适合做早餐碗"
  ],
  "pair": [
   {
    "name": "希腊酸奶",
    "why": "草莓酸奶杯,比冰淇淋健康"
   },
   {
    "name": "燕麦片",
    "why": "隔夜燕麦加草莓,第二天有盼头"
   }
  ],
  "recipe": {
   "name": "草莓酸奶杯",
   "time": "约 4 分钟",
   "steps": [
    "草莓洗净去蒂对半切",
    "无糖酸奶打底,铺上草莓",
    "可加燕麦脆片"
   ]
  },
  "tips": "草莓不耐放,买回来尽快吃;表面破损的容易坏,先挑出来。"
 },
 {
  "id": "apple",
  "name": "苹果",
  "alias": "红富士 · 嘎啦",
  "emoji": "🍎",
  "cat": "fruit",
  "basis": "可食部",
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
  "kcal": 53,
  "p": 0.3,
  "c": 13.8,
  "f": 0.2,
  "fiber": 2.4,
  "na": 1,
  "k": 107,
  "ca": 6,
  "mg": 5,
  "fe": 0.1,
  "zn": 0,
  "vc": 4.6,
  "serving": {
   "n": 1,
   "unit": "个",
   "note": "≈200g"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "平价耐放,随身水果首选",
   "纤维主要在皮上,洗净带皮吃",
   "饱腹感好,适合垫肚子"
  ],
  "pair": [
   {
    "name": "无糖花生酱",
    "why": "苹果蘸花生酱,意想不到的好吃加餐"
   },
   {
    "name": "燕麦片",
    "why": "苹果燕麦粥,天然甜味"
   }
  ],
  "recipe": {
   "name": "肉桂烤苹果",
   "time": "约 20 分钟",
   "steps": [
    "苹果去核切瓣",
    "撒肉桂粉(不用加糖)",
    "180℃ 烤 15 分钟",
    "热吃,像甜品但不额外加糖"
   ]
  },
  "tips": "洗干净带皮吃营养最好;血糖反应平缓,减脂期也能当加餐。"
 },
 {
  "id": "orange",
  "name": "橙子",
  "alias": "甜橙",
  "emoji": "🍊",
  "cat": "fruit",
  "basis": "可食部",
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
  "kcal": 47,
  "p": 0.9,
  "c": 11.8,
  "f": 0.1,
  "fiber": 2.4,
  "na": 0,
  "k": 181,
  "ca": 40,
  "mg": 10,
  "fe": 0.1,
  "zn": 0.1,
  "vc": 53,
  "serving": {
   "n": 1,
   "unit": "个",
   "note": "≈180g"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "维C的经典来源",
   "水分足,饭后水果清爽解腻",
   "耐放,一次多买几个"
  ],
  "pair": [
   {
    "name": "希腊酸奶",
    "why": "橙子瓣拌酸奶,酸甜开胃"
   },
   {
    "name": "燕麦片",
    "why": "早餐加几瓣橙子,补充维C"
   }
  ],
  "recipe": {
   "name": "直接吃(加餐)",
   "time": "1 分钟",
   "steps": [
    "橙子切瓣或切片",
    "直接当加餐吃",
    "橙皮留着放冰箱除味(小妙招)"
   ]
  },
  "tips": "榨汁会损失纤维还容易喝多,减脂期更建议直接吃果肉。"
 },
 {
  "id": "kiwi",
  "name": "猕猴桃",
  "alias": "奇异果",
  "emoji": "🥝",
  "cat": "fruit",
  "basis": "可食部",
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
  "kcal": 61,
  "p": 1.1,
  "c": 14.7,
  "f": 0.5,
  "fiber": 3,
  "na": 3,
  "k": 312,
  "ca": 34,
  "mg": 17,
  "fe": 0.3,
  "zn": 0.1,
  "vc": 93,
  "serving": {
   "n": 1,
   "unit": "个",
   "note": "≈70g"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "纤维+维C双高",
   "含猕猴桃蛋白酶,配酸奶/腌肉有嫩化作用",
   "酸酸甜甜,一个就够"
  ],
  "pair": [
   {
    "name": "希腊酸奶",
    "why": "猕猴桃拌酸奶,别提前拌太久会发苦"
   },
   {
    "name": "鸡胸肉",
    "why": "猕猴桃汁可当天然嫩肉腌料(少量)"
   }
  ],
  "recipe": {
   "name": "对半挖着吃",
   "time": "1 分钟",
   "steps": [
    "猕猴桃对半切",
    "用勺子挖着吃",
    "太硬的放两天再吃"
   ]
  },
  "tips": "和酸奶拌太久蛋白酶会让口感发苦,现拌现吃最好。"
 },
 {
  "id": "grape",
  "name": "葡萄",
  "alias": "葡萄 · 提子",
  "emoji": "🍇",
  "cat": "fruit",
  "basis": "可食部",
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
  "snack": true,
  "kcal": 69,
  "p": 0.6,
  "c": 18.1,
  "f": 0.2,
  "fiber": 1,
  "na": 2,
  "k": 191,
  "ca": 10,
  "mg": 7,
  "fe": 0.4,
  "zn": 0.1,
  "vc": 3.2,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "约1小串"
  },
  "scenes": [
   "daily",
   "rec",
   "comp"
  ],
  "highlight": [
   "小颗方便吃,注意别“一颗接一颗”",
   "提子更甜,含糖偏高"
  ],
  "tips": "皮和籽都有营养但难消化,洗干净连皮吃适量即可;血糖高选量少些。",
  "pair": [
   {
    "name": "希腊酸奶",
    "why": "酸甜水果拌无糖酸奶,补蛋白又解馋"
   }
  ]
 },
 {
  "id": "cherry",
  "name": "樱桃",
  "alias": "车厘子",
  "emoji": "🍒",
  "cat": "fruit",
  "basis": "可食部",
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
  "snack": true,
  "kcal": 46,
  "p": 1.1,
  "c": 10.6,
  "f": 0.2,
  "fiber": 1.6,
  "na": 0,
  "k": 222,
  "ca": 13,
  "mg": 11,
  "fe": 0.4,
  "zn": 0.1,
  "vc": 7,
  "serving": {
   "n": 100,
   "unit": "克",
   "note": "约15颗"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "抗氧化物花色苷丰富",
   "含糖不高,酸甜解馋"
  ],
  "tips": "车厘子个头大,10~15颗就一份;别当成整碗零食。",
  "pair": [
   {
    "name": "希腊酸奶",
    "why": "酸甜水果拌无糖酸奶,补蛋白又解馋"
   }
  ]
 },
 {
  "id": "pear",
  "name": "梨",
  "alias": "梨 · 雪梨",
  "emoji": "🍐",
  "cat": "fruit",
  "basis": "可食部",
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
  "kcal": 57,
  "p": 0.4,
  "c": 15.2,
  "f": 0.1,
  "fiber": 2.8,
  "na": 1,
  "k": 119,
  "ca": 9,
  "mg": 8,
  "fe": 0.2,
  "zn": 0.1,
  "vc": 5,
  "serving": {
   "n": 1,
   "unit": "个",
   "note": "≈200g可食部"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "水分和纤维足,饱腹感好",
   "生吃脆,煮水润燥"
  ],
  "tips": "梨皮纤维更多,洗净带皮吃;别削掉再煮糖水加糖。",
  "pair": [
   {
    "name": "希腊酸奶",
    "why": "酸甜水果拌无糖酸奶,补蛋白又解馋"
   }
  ]
 },
 {
  "id": "peach",
  "name": "桃",
  "alias": "桃子 · 水蜜桃",
  "emoji": "🍑",
  "cat": "fruit",
  "basis": "可食部",
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
  "kcal": 42,
  "p": 0.9,
  "c": 10.1,
  "f": 0.1,
  "fiber": 1.5,
  "na": 0,
  "k": 190,
  "ca": 6,
  "mg": 9,
  "fe": 0.3,
  "zn": 0.2,
  "vc": 6.6,
  "serving": {
   "n": 1,
   "unit": "个",
   "note": "≈180g可食部"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "热量低,清甜解渴",
   "毛桃表皮绒毛要洗净或去皮"
  ],
  "tips": "黄桃罐头加了大量糖,优先吃新鲜桃。",
  "pair": [
   {
    "name": "希腊酸奶",
    "why": "酸甜水果拌无糖酸奶,补蛋白又解馋"
   }
  ]
 },
 {
  "id": "mango",
  "name": "芒果",
  "alias": "芒果",
  "emoji": "🥭",
  "cat": "fruit",
  "basis": "可食部",
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
  "snack": true,
  "kcal": 60,
  "p": 0.8,
  "c": 15,
  "f": 0.4,
  "fiber": 1.6,
  "na": 1,
  "k": 168,
  "ca": 11,
  "mg": 10,
  "fe": 0.2,
  "zn": 0.1,
  "vc": 36,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "约半个大果"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "维C和胡萝卜素不错",
   "甜度高,当加餐一次别吃一整个"
  ],
  "tips": "对漆树科(芒果/腰果)过敏者注意;切丁冷藏更好吃。",
  "pair": [
   {
    "name": "希腊酸奶",
    "why": "酸甜水果拌无糖酸奶,补蛋白又解馋"
   }
  ]
 },
 {
  "id": "pineapple",
  "name": "菠萝",
  "alias": "凤梨",
  "emoji": "🍍",
  "cat": "fruit",
  "basis": "可食部",
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
  "kcal": 50,
  "p": 0.5,
  "c": 13.1,
  "f": 0.1,
  "fiber": 1.4,
  "na": 1,
  "k": 109,
  "ca": 13,
  "mg": 12,
  "fe": 0.3,
  "zn": 0.1,
  "vc": 48,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "约1/4个"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "维C高,酸甜开胃",
   "含菠萝蛋白酶,配肉可嫩化"
  ],
  "tips": "盐水泡或加热可减轻麻嘴感;别泡糖水当甜品。",
  "pair": [
   {
    "name": "希腊酸奶",
    "why": "酸甜水果拌无糖酸奶,补蛋白又解馋"
   }
  ]
 },
 {
  "id": "pomelo",
  "name": "柚子",
  "alias": "柚子 · 文旦",
  "emoji": "🍊",
  "cat": "fruit",
  "basis": "可食部",
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
  "kcal": 42,
  "p": 0.8,
  "c": 9.6,
  "f": 0.2,
  "fiber": 1,
  "na": 1,
  "k": 216,
  "ca": 12,
  "mg": 9,
  "fe": 0.1,
  "zn": 0.1,
  "vc": 61,
  "serving": {
   "n": 200,
   "unit": "克",
   "note": "约2~3瓣"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "含糖低、水分足、维C高",
   "果肉纤维多,饱腹"
  ],
  "tips": "服药人群注意柚子/西柚会影响部分药物代谢,遵医嘱。",
  "pair": [
   {
    "name": "希腊酸奶",
    "why": "酸甜水果拌无糖酸奶,补蛋白又解馋"
   }
  ]
 },
 {
  "id": "watermelon",
  "name": "西瓜",
  "alias": "西瓜",
  "emoji": "🍉",
  "cat": "fruit",
  "basis": "可食部",
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
  "quick": true,
  "snack": true,
  "kcal": 31,
  "p": 0.6,
  "c": 7.6,
  "f": 0.2,
  "fiber": 0.4,
  "na": 1,
  "k": 112,
  "ca": 7,
  "mg": 10,
  "fe": 0.2,
  "zn": 0.1,
  "vc": 8.1,
  "serving": {
   "n": 300,
   "unit": "克",
   "note": "约2小块"
  },
  "scenes": [
   "daily",
   "rec",
   "comp"
  ],
  "highlight": [
   "含水量高,夏天补水神器",
   "看着不甜其实含糖不低,别半个半个吃"
  ],
  "tips": "冰镇西瓜一次2~3小块足够,别当水喝。",
  "pair": [
   {
    "name": "希腊酸奶",
    "why": "酸甜水果拌无糖酸奶,补蛋白又解馋"
   }
  ]
 },
 {
  "id": "dragon-fruit",
  "name": "火龙果",
  "alias": "火龙果 · 红心火龙果",
  "emoji": "🍈",
  "cat": "fruit",
  "basis": "可食部",
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
  "kcal": 55,
  "p": 1.1,
  "c": 13.3,
  "f": 0.2,
  "fiber": 2.9,
  "na": 2,
  "k": 290,
  "ca": 13,
  "mg": 30,
  "fe": 0.3,
  "zn": 0.3,
  "vc": 9,
  "serving": {
   "n": 1,
   "unit": "个",
   "note": "≈200g可食部"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "纤维高,红心品种抗氧化物更多",
   "籽助排便,肠胃弱别贪多"
  ],
  "tips": "红心火龙果吃完\"红便\"是花青素正常现象;一次一个即可。",
  "pair": [
   {
    "name": "希腊酸奶",
    "why": "酸甜水果拌无糖酸奶,补蛋白又解馋"
   }
  ]
 },
 {
  "id": "lemon",
  "name": "柠檬",
  "alias": "柠檬",
  "emoji": "🍋",
  "cat": "fruit",
  "basis": "可食部",
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
  "kcal": 37,
  "p": 1.1,
  "c": 9.3,
  "f": 0.3,
  "fiber": 2.8,
  "na": 2,
  "k": 138,
  "ca": 26,
  "mg": 8,
  "fe": 0.6,
  "zn": 0.1,
  "vc": 53,
  "serving": {
   "n": 2,
   "unit": "片",
   "note": "泡水用"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "维C不错,泡水提味少放糖",
   "皮有香气,可做调味"
  ],
  "tips": "主要当调味/泡水,别直接当水果啃;蜂蜜柠檬水注意蜂蜜也是糖。",
  "pair": [
   {
    "name": "希腊酸奶",
    "why": "酸甜水果拌无糖酸奶,补蛋白又解馋"
   }
  ]
 }
];

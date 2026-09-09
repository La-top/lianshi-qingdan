/* 食物库 · staple */
const FOODS_STAPLE = [
 {
  "id": "oats",
  "name": "燕麦片",
  "alias": "生燕麦片 · 快熟燕麦",
  "emoji": "🌾",
  "cat": "staple",
  "basis": "干重",
  "goals": [
   "gain",
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
  "kcal": 377,
  "p": 15,
  "c": 61.6,
  "f": 6.7,
  "fiber": 5.3,
  "na": 4,
  "k": 330,
  "ca": 54,
  "mg": 140,
  "fe": 4.7,
  "zn": 3.6,
  "vc": 0,
  "serving": {
   "n": 50,
   "unit": "克",
   "note": "干重,约半碗"
  },
  "scenes": [
   "daily",
   "pre"
  ],
  "highlight": [
   "缓释碳水+β-葡聚糖,饱腹感强",
   "减脂期主食好选择,早餐 10 分钟搞定",
   "自带一点植物蛋白"
  ],
  "pair": [
   {
    "name": "鸡蛋",
    "why": "水煮蛋+牛奶燕麦:蛋白+碳水都齐了"
   },
   {
    "name": "蓝莓",
    "why": "天然甜味,不用额外加糖"
   }
  ],
  "recipe": {
   "name": "牛奶燕麦粥",
   "time": "约 6 分钟",
   "steps": [
    "燕麦 40g 加牛奶 250ml",
    "小火煮 3~5 分钟,期间搅一搅",
    "关火拌入香蕉片或蓝莓"
   ]
  },
  "tips": "选「生燕麦片/快熟燕麦」,很多即食麦片加了不少糖。营养按干重算,煮熟吸水后同样 100g 热量会低。"
 },
 {
  "id": "brown-rice",
  "name": "糙米",
  "alias": "胚芽米",
  "emoji": "🍚",
  "cat": "staple",
  "basis": "干重(生米)",
  "goals": [
   "gain",
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
  "kcal": 348,
  "p": 7.7,
  "c": 75,
  "f": 2.7,
  "fiber": 3.4,
  "na": 8,
  "k": 220,
  "ca": 10,
  "mg": 110,
  "fe": 1.6,
  "zn": 2,
  "vc": 0,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "熟重"
  },
  "scenes": [
   "daily",
   "pre"
  ],
  "highlight": [
   "保留麸皮和胚芽,纤维和 B 族维生素更多",
   "升糖比白米慢,饱腹更久",
   "和鸡胸、鱼虾是减脂餐标准组合"
  ],
  "pair": [
   {
    "name": "鸡胸肉",
    "why": "糙米鸡胸套餐,健身餐的「祖传搭配」"
   },
   {
    "name": "西兰花",
    "why": "米饭+肉+蔬菜,一餐营养闭环"
   }
  ],
  "recipe": {
   "name": "电饭煲糙米饭",
   "time": "约 50 分钟(含浸泡)",
   "steps": [
    "糙米 1 杯淘洗后泡 1~2 小时",
    "按 1:1.5~1.8 加水(比白米略多)",
    "按煮饭键,跳闸后焖 10 分钟更软"
   ]
  },
  "tips": "第一次吃可以白米:糙米=1:1 过渡;营养按干米算,熟饭按 2 倍左右换算。"
 },
 {
  "id": "white-rice",
  "name": "白米饭(熟)",
  "alias": "米饭",
  "emoji": "🍚",
  "cat": "staple",
  "basis": "熟重",
  "goals": [
   "gain",
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
  "snack": false,
  "kcal": 116,
  "p": 2.6,
  "c": 25.9,
  "f": 0.3,
  "fiber": 0.3,
  "na": 1,
  "k": 29,
  "ca": 5,
  "mg": 13,
  "fe": 0.2,
  "zn": 0.5,
  "vc": 0,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "熟重"
  },
  "scenes": [
   "daily",
   "pre",
   "post",
   "comp"
  ],
  "highlight": [
   "最省事、最好消化的快碳",
   "练后补充糖原很方便",
   "胜在百搭,什么菜都能配"
  ],
  "pair": [
   {
    "name": "鸡蛋",
    "why": "蛋炒饭,剩饭也能变健身餐"
   },
   {
    "name": "瘦牛肉",
    "why": "牛肉盖饭,增肌日主食底子"
   }
  ],
  "recipe": {
   "name": "杂粮饭(升级版)",
   "time": "和煮饭一样",
   "steps": [
    "白米 2 份+燕麦/小米/藜麦 1 份混匀",
    "按平时水量煮",
    "杂粮比例慢慢加,肠胃更适应"
   ]
  },
  "tips": "记录按熟重;一人份约 100~150g(一个拳头多)。减脂期也建议保留主食,只是控制份量。"
 },
 {
  "id": "sweet-potato",
  "name": "红薯",
  "alias": "地瓜 · 甘薯",
  "emoji": "🍠",
  "cat": "staple",
  "basis": "生重",
  "goals": [
   "gain",
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
  "kcal": 86,
  "p": 1.6,
  "c": 20.1,
  "f": 0.1,
  "fiber": 3,
  "na": 55,
  "k": 337,
  "ca": 30,
  "mg": 25,
  "fe": 0.6,
  "zn": 0.3,
  "vc": 2.4,
  "serving": {
   "n": 200,
   "unit": "克",
   "note": "约1个中等"
  },
  "scenes": [
   "daily",
   "pre"
  ],
  "highlight": [
   "天然甜味,满足「想吃甜」的需求",
   "纤维+钾都不错",
   "蒸烤都方便,是减脂期的甜品替身"
  ],
  "pair": [
   {
    "name": "希腊酸奶",
    "why": "蒸红薯+无糖酸奶,比蛋糕健康多了"
   },
   {
    "name": "鸡胸肉",
    "why": "碳水+蛋白一餐齐,适合带饭"
   }
  ],
  "recipe": {
   "name": "蒸红薯",
   "time": "约 25 分钟",
   "steps": [
    "红薯洗净,不去皮",
    "水开后上锅蒸 20~25 分钟",
    "筷子能轻松扎透就是熟了"
   ]
  },
  "tips": "发芽、表皮有黑斑的红薯不要吃。烤红薯更甜但水分流失,同样大小热量略高。"
 },
 {
  "id": "corn",
  "name": "鲜玉米",
  "alias": "甜玉米 · 水果玉米",
  "emoji": "🌽",
  "cat": "staple",
  "basis": "可食部(煮后)",
  "goals": [
   "gain",
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
  "kcal": 112,
  "p": 4,
  "c": 22.8,
  "f": 1.2,
  "fiber": 2.9,
  "na": 1,
  "k": 218,
  "ca": 8,
  "mg": 37,
  "fe": 0.5,
  "zn": 0.6,
  "vc": 6.8,
  "serving": {
   "n": 1,
   "unit": "根",
   "note": "≈200g 可食部"
  },
  "scenes": [
   "daily",
   "pre"
  ],
  "highlight": [
   "粗粮里口感最好的之一,煮着就很好吃",
   "膳食纤维丰富,饱腹感强",
   "甜玉米比糯玉米热量略低"
  ],
  "pair": [
   {
    "name": "虾仁",
    "why": "玉米虾仁丁,颜色好看又下饭"
   },
   {
    "name": "金枪鱼",
    "why": "金枪鱼玉米沙拉,5 分钟轻食"
   }
  ],
  "recipe": {
   "name": "水煮玉米",
   "time": "约 20 分钟",
   "steps": [
    "玉米剥掉外层老皮,留 1~2 层嫩皮",
    "冷水下锅,水开后煮 15~20 分钟",
    "捞出晾一下再剥皮"
   ]
  },
  "tips": "玉米属于主食不是蔬菜,别把它当「随便吃」的零食,一次一根(约 200g 可食部)合适。"
 },
 {
  "id": "wholewheat-bread",
  "name": "全麦面包",
  "alias": "全麦吐司",
  "emoji": "🍞",
  "cat": "staple",
  "basis": "即食(看包装营养表)",
  "goals": [
   "gain",
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
  "snack": false,
  "kcal": 247,
  "p": 13,
  "c": 41,
  "f": 3.4,
  "fiber": 6,
  "na": 380,
  "k": 210,
  "ca": 100,
  "mg": 80,
  "fe": 3,
  "zn": 1.8,
  "vc": 0,
  "serving": {
   "n": 2,
   "unit": "片",
   "note": "约60g"
  },
  "scenes": [
   "daily",
   "pre",
   "post",
   "comp"
  ],
  "highlight": [
   "不用开火就能吃的主食",
   "真全麦膳食纤维高,饱腹感强",
   "和鸡蛋、金枪鱼组队就是快手中餐"
  ],
  "pair": [
   {
    "name": "鸡蛋",
    "why": "全麦吐司+煎蛋,赶时间的早餐"
   },
   {
    "name": "金枪鱼",
    "why": "金枪鱼三明治,减脂期带饭首选"
   }
  ],
  "recipe": {
   "name": "全麦三明治",
   "time": "约 6 分钟",
   "steps": [
    "吐司 2 片,可先干烤一下",
    "夹煎蛋/水煮蛋或金枪鱼",
    "加生菜、番茄片",
    "对半切,保鲜膜包好可带出门"
   ]
  },
  "tips": "很多「全麦面包」其实是全麦粉混白面还加糖。看配料表:全麦粉要排第一位,糖越靠后越好。营养按常见无糖款估算,不同品牌差异大。"
 },
 {
  "id": "pasta",
  "name": "意大利面(干)",
  "alias": "意面 · 通心粉",
  "emoji": "🍝",
  "cat": "staple",
  "basis": "干重",
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
  "kcal": 350,
  "p": 12,
  "c": 71,
  "f": 1.5,
  "fiber": 3,
  "na": 6,
  "k": 120,
  "ca": 25,
  "mg": 50,
  "fe": 3,
  "zn": 1.8,
  "vc": 0,
  "serving": {
   "n": 80,
   "unit": "克",
   "note": "干重"
  },
  "scenes": [
   "daily",
   "pre"
  ],
  "highlight": [
   "慢碳水,饱腹感比白面条强",
   "煮一次能带两顿饭",
   "蛋白质含量在主食里算不错"
  ],
  "pair": [
   {
    "name": "瘦牛肉",
    "why": "番茄牛肉酱意面,经典增肌餐"
   },
   {
    "name": "西兰花",
    "why": "意面+蛋白+西兰花,便当组合"
   }
  ],
  "recipe": {
   "name": "番茄肉酱意面",
   "time": "约 25 分钟",
   "steps": [
    "意面按包装时间煮 8~10 分钟,捞出留半碗面汤",
    "肉末炒散,加番茄丁炒出汁",
    "加一点面汤煮成酱,倒入意面拌匀",
    "黑胡椒、盐调味"
   ]
  },
  "tips": "营养按干重;一人份干面 70~90g,煮完约 2 倍重。"
 },
 {
  "id": "quinoa",
  "name": "藜麦",
  "alias": "藜麦米",
  "emoji": "🌾",
  "cat": "staple",
  "basis": "干重",
  "goals": [
   "gain",
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
  "kcal": 368,
  "p": 14.1,
  "c": 64.2,
  "f": 6.1,
  "fiber": 7,
  "na": 5,
  "k": 560,
  "ca": 47,
  "mg": 197,
  "fe": 4.6,
  "zn": 3.1,
  "vc": 0,
  "serving": {
   "n": 50,
   "unit": "克",
   "note": "干重"
  },
  "scenes": [
   "daily",
   "pre"
  ],
  "highlight": [
   "谷物里少见的「全蛋白」,含全部必需氨基酸",
   "纤维丰富,素食者主食优选",
   "煮熟后有白色小胚芽,很好认"
  ],
  "pair": [
   {
    "name": "虾仁",
    "why": "藜麦虾仁沙拉,清爽高蛋白"
   },
   {
    "name": "牛油果",
    "why": "藜麦+牛油果+柠檬汁,轻食店的配方"
   }
  ],
  "recipe": {
   "name": "藜麦沙拉",
   "time": "约 20 分钟",
   "steps": [
    "藜麦淘洗 2 遍,水煮 12~15 分钟",
    "看到白色小圈(胚芽)即熟,沥干放凉",
    "拌黄瓜丁、番茄丁、虾仁",
    "柠檬汁+橄榄油+黑胡椒调味"
   ]
  },
  "tips": "煮前多冲洗几次能去掉表面的皂苷(会发苦)。营养按干重算。"
 },
 {
  "id": "potato",
  "name": "土豆",
  "alias": "马铃薯",
  "emoji": "🥔",
  "cat": "staple",
  "basis": "生重",
  "goals": [
   "gain",
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
  "kcal": 77,
  "p": 2,
  "c": 17.2,
  "f": 0.2,
  "fiber": 2.2,
  "na": 6,
  "k": 420,
  "ca": 12,
  "mg": 23,
  "fe": 0.8,
  "zn": 0.3,
  "vc": 13,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "约1个中等"
  },
  "scenes": [
   "daily",
   "pre"
  ],
  "highlight": [
   "高饱腹主食,蒸煮热量很低",
   "钾含量高,运动后友好",
   "放凉后抗性淀粉增加(升糖更平缓)"
  ],
  "pair": [
   {
    "name": "瘦牛肉",
    "why": "土豆炖牛肉,但要用瘦肉少油"
   },
   {
    "name": "鸡蛋",
    "why": "土豆泥拌水煮蛋,便宜又顶饱"
   }
  ],
  "recipe": {
   "name": "黑椒土豆泥",
   "time": "约 20 分钟",
   "steps": [
    "土豆切块蒸 15 分钟至软",
    "压成泥,加少量牛奶和黑胡椒盐",
    "可拌一个水煮蛋碎"
   ]
  },
  "tips": "土豆是主食不是蔬菜,别炸薯条或加大量黄油;一餐一个中等土豆(约 150g)合适。"
 },
 {
  "id": "chickpea",
  "name": "鹰嘴豆",
  "alias": "鸡豆",
  "emoji": "🥜",
  "cat": "staple",
  "basis": "干重(需浸泡煮熟)",
  "goals": [
   "gain",
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
  "kcal": 364,
  "p": 19.3,
  "c": 61,
  "f": 6,
  "fiber": 12,
  "na": 24,
  "k": 718,
  "ca": 105,
  "mg": 115,
  "fe": 6.2,
  "zn": 3.4,
  "vc": 0,
  "serving": {
   "n": 40,
   "unit": "克",
   "note": "干重"
  },
  "scenes": [
   "daily",
   "pre",
   "rec"
  ],
  "highlight": [
   "植物蛋白+膳食纤维双高",
   "烤着吃是优秀的高蛋白零食",
   "素食者蛋白质的重要来源"
  ],
  "pair": [
   {
    "name": "藜麦",
    "why": "双豆混煮,植物蛋白互补"
   },
   {
    "name": "黄瓜",
    "why": "鹰嘴豆泥配黄瓜条,健康蘸酱"
   }
  ],
  "recipe": {
   "name": "香烤鹰嘴豆",
   "time": "约 40 分钟(不含浸泡)",
   "steps": [
    "鹰嘴豆泡一夜,煮 30 分钟到软",
    "沥干,拌少量橄榄油、孜然或黑胡椒",
    "铺平烤盘,180℃ 烤 25~30 分钟",
    "放凉后更酥脆"
   ]
  },
  "tips": "干豆密度高,当零食一人份 30~40g 就够;超市也有煮熟罐头,开罐即食更省事。",
  "pic": "assets/img/food/chickpea.png"
 },
 {
  "id": "pumpkin",
  "name": "南瓜",
  "alias": "金瓜",
  "emoji": "🎃",
  "cat": "staple",
  "basis": "生重(去瓤)",
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
  "kcal": 26,
  "p": 1,
  "c": 6.5,
  "f": 0.1,
  "fiber": 1,
  "na": 1,
  "k": 230,
  "ca": 21,
  "mg": 22,
  "fe": 0.8,
  "zn": 0.3,
  "vc": 9,
  "serving": {
   "n": 200,
   "unit": "克",
   "note": "切块"
  },
  "scenes": [
   "daily",
   "pre"
  ],
  "highlight": [
   "大碗低热量,蒸着吃自带甜味",
   "胡萝卜素丰富,对眼睛皮肤好",
   "「蔬菜和主食两用」的灵活食材"
  ],
  "pair": [
   {
    "name": "鸡胸肉",
    "why": "南瓜蒸鸡胸,减脂期一锅蒸搞定"
   },
   {
    "name": "藜麦",
    "why": "南瓜藜麦饭,颜色好看又管饱"
   }
  ],
  "recipe": {
   "name": "蒸南瓜",
   "time": "约 20 分钟",
   "steps": [
    "南瓜去瓤切块(可带皮)",
    "水开后蒸 15~20 分钟",
    "直接吃,或压泥拌无糖酸奶"
   ]
  },
  "tips": "贝贝南瓜、板栗南瓜更粉更甜,热量也明显更高,别把它当普通南瓜无限吃。"
 },
 {
  "id": "banana",
  "name": "香蕉",
  "alias": "大蕉",
  "emoji": "🍌",
  "cat": "staple",
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
  "quick": true,
  "snack": true,
  "kcal": 93,
  "p": 1.4,
  "c": 22,
  "f": 0.2,
  "fiber": 1.2,
  "na": 1,
  "k": 358,
  "ca": 5,
  "mg": 27,
  "fe": 0.3,
  "zn": 0.2,
  "vc": 8.7,
  "serving": {
   "n": 1,
   "unit": "根",
   "note": "≈100g 可食部"
  },
  "scenes": [
   "daily",
   "pre",
   "post",
   "rec",
   "comp"
  ],
  "highlight": [
   "随身快碳,练前 1 根补能量,练后补糖原",
   "含钾,帮助肌肉正常工作",
   "天然甜,替代甜食解馋"
  ],
  "pair": [
   {
    "name": "牛奶",
    "why": "练后奶昔:一根香蕉+250ml 牛奶"
   },
   {
    "name": "燕麦片",
    "why": "香蕉燕麦粥,早餐不用加糖"
   }
  ],
  "recipe": {
   "name": "香蕉燕麦煎饼",
   "time": "约 10 分钟",
   "steps": [
    "香蕉 1 根压成泥",
    "加 1 个鸡蛋、2 勺燕麦片搅匀",
    "平底锅少油,小火两面煎金黄",
    "配无糖酸奶吃"
   ]
  },
  "tips": "熟透的香蕉更甜、升糖略快,适合练前练后;减脂期当加餐一次一根就好。"
 },
 {
  "id": "millet",
  "name": "小米(干)",
  "alias": "粟米",
  "emoji": "🌾",
  "cat": "staple",
  "basis": "干重",
  "goals": [
   "gain",
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
  "kcal": 361,
  "p": 9,
  "c": 75,
  "f": 3.1,
  "fiber": 1.6,
  "na": 4,
  "k": 284,
  "ca": 41,
  "mg": 107,
  "fe": 5.1,
  "zn": 1.9,
  "vc": 0,
  "serving": {
   "n": 50,
   "unit": "克",
   "note": "干重,约半碗"
  },
  "scenes": [
   "daily",
   "pre",
   "rec"
  ],
  "highlight": [
   "养胃好消化的杂粮",
   "B族维生素和铁不错,粥饭皆宜"
  ],
  "pair": [
   {
    "name": "南瓜",
    "why": "小米南瓜粥,温和好吸收"
   }
  ],
  "recipe": {
   "name": "小米粥",
   "time": "约30分钟",
   "steps": [
    "小米淘洗,水开后下锅",
    "小火煮20~25分钟至开花",
    "可加南瓜丁同煮"
   ]
  },
  "tips": "小米是主食,别当菜;血糖管理人群注意份量。"
 },
 {
  "id": "black-rice",
  "name": "黑米(干)",
  "alias": "紫米 · 黑糯米(糙)",
  "emoji": "🍚",
  "cat": "staple",
  "basis": "干重",
  "goals": [
   "gain",
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
  "kcal": 350,
  "p": 9.4,
  "c": 74,
  "f": 3,
  "fiber": 3.9,
  "na": 7,
  "k": 256,
  "ca": 12,
  "mg": 147,
  "fe": 1.8,
  "zn": 2.4,
  "vc": 0,
  "serving": {
   "n": 50,
   "unit": "克",
   "note": "干重"
  },
  "scenes": [
   "daily",
   "pre",
   "rec"
  ],
  "highlight": [
   "花青素与纤维比白米多",
   "煮粥做饭颜色好看有食欲"
  ],
  "pair": [
   {
    "name": "糙米",
    "why": "黑米糙米同煮,粗细搭配"
   }
  ],
  "recipe": {
   "name": "黑米饭",
   "time": "约60分钟(含浸泡)",
   "steps": [
    "黑米泡1~2小时",
    "与白米按1:2混合,按平时水量煮",
    "焖10分钟更软糯"
   ]
  },
  "tips": "黑糯米更黏,血糖反应高一些;健身日常选黑米(非糯米)更好。"
 },
 {
  "id": "buckwheat",
  "name": "荞麦(干)",
  "alias": "荞麦米",
  "emoji": "🌾",
  "cat": "staple",
  "basis": "干重",
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
  "kcal": 337,
  "p": 9.3,
  "c": 73,
  "f": 2.7,
  "fiber": 5.5,
  "na": 4,
  "k": 400,
  "ca": 25,
  "mg": 231,
  "fe": 6.2,
  "zn": 2.4,
  "vc": 0,
  "serving": {
   "n": 50,
   "unit": "克",
   "note": "干重"
  },
  "scenes": [
   "daily",
   "pre"
  ],
  "highlight": [
   "镁和膳食纤维很丰富",
   "升糖比白米平缓,减脂主食友好"
  ],
  "pair": [
   {
    "name": "鸡胸肉",
    "why": "荞麦饭配鸡胸,干净增肌餐"
   }
  ],
  "recipe": {
   "name": "荞麦饭",
   "time": "约40分钟(含浸泡)",
   "steps": [
    "荞麦米泡30分钟",
    "与白米1:1或纯荞麦按1:1.5水煮",
    "煮熟焖软"
   ]
  },
  "tips": "纯荞麦口感松散,可先和白米混合过渡。"
 },
 {
  "id": "coix",
  "name": "薏米(干)",
  "alias": "薏仁 · 薏苡仁",
  "emoji": "🌾",
  "cat": "staple",
  "basis": "干重",
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
  "kcal": 357,
  "p": 12.8,
  "c": 71.1,
  "f": 3.3,
  "fiber": 2,
  "na": 3,
  "k": 235,
  "ca": 42,
  "mg": 88,
  "fe": 3.6,
  "zn": 1.7,
  "vc": 0,
  "serving": {
   "n": 50,
   "unit": "克",
   "note": "干重"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "蛋白质在谷物里偏高",
   "常和杂粮一起煮粥"
  ],
  "pair": [
   {
    "name": "红豆",
    "why": "薏米红豆粥,传统搭配"
   }
  ],
  "recipe": {
   "name": "薏米粥/饭",
   "time": "约50分钟",
   "steps": [
    "薏米泡1~2小时",
    "加水煮粥或与米同煮",
    "煮至软糯"
   ]
  },
  "tips": "薏米偏寒凉,肠胃弱/孕期请谨慎、少量。"
 },
 {
  "id": "yam",
  "name": "山药(鲜)",
  "alias": "淮山 · 铁棍山药",
  "emoji": "🌿",
  "cat": "staple",
  "basis": "生重(去皮)",
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
  "kcal": 57,
  "p": 1.9,
  "c": 12.4,
  "f": 0.2,
  "fiber": 0.8,
  "na": 18,
  "k": 213,
  "ca": 16,
  "mg": 20,
  "fe": 0.3,
  "zn": 0.3,
  "vc": 5,
  "serving": {
   "n": 100,
   "unit": "克",
   "note": "约1段"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "碳水足但热量不高",
   "黏液蛋白好消化,肠胃友好"
  ],
  "pair": [
   {
    "name": "排骨",
    "why": "山药排骨汤是增肌加餐汤品"
   }
  ],
  "recipe": {
   "name": "蒸山药",
   "time": "约20分钟",
   "steps": [
    "山药去皮切段(戴手套防痒)",
    "水开蒸15~20分钟",
    "直接吃或蘸少量蜂蜜"
   ]
  },
  "tips": "去皮黏液会让手痒,可戴手套或蒸熟后再去皮。"
 },
 {
  "id": "taro",
  "name": "芋头(鲜)",
  "alias": "香芋 · 芋艿",
  "emoji": "🍠",
  "cat": "staple",
  "basis": "生重(去皮)",
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
  "kcal": 79,
  "p": 2.2,
  "c": 18.1,
  "f": 0.2,
  "fiber": 1,
  "na": 33,
  "k": 378,
  "ca": 36,
  "mg": 23,
  "fe": 1,
  "zn": 0.5,
  "vc": 6,
  "serving": {
   "n": 100,
   "unit": "克",
   "note": "约2个"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "低热量饱腹主食",
   "钾含量不错"
  ],
  "pair": [
   {
    "name": "牛奶",
    "why": "芋泥牛奶杯,自制低糖甜品"
   }
  ],
  "recipe": {
   "name": "蒸芋头",
   "time": "约25分钟",
   "steps": [
    "芋头去皮切块",
    "水开蒸20~25分钟",
    "筷子扎透即熟"
   ]
  },
  "tips": "别把芋头当零食配糖水;当主食吃才算数。"
 },
 {
  "id": "purple-sweet-potato",
  "name": "紫薯(鲜)",
  "alias": "紫心甘薯",
  "emoji": "🍠",
  "cat": "staple",
  "basis": "生重(可食部)",
  "goals": [
   "gain",
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
  "kcal": 82,
  "p": 1.3,
  "c": 19.1,
  "f": 0.1,
  "fiber": 3,
  "na": 21,
  "k": 270,
  "ca": 18,
  "mg": 16,
  "fe": 0.7,
  "zn": 0.3,
  "vc": 12,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "约1个中等"
  },
  "scenes": [
   "daily",
   "pre",
   "rec"
  ],
  "highlight": [
   "花青素+纤维,颜色越深营养越丰富",
   "自带甜味,替代甜品"
  ],
  "pair": [
   {
    "name": "希腊酸奶",
    "why": "紫薯泥+无糖酸奶,健康下午茶"
   }
  ],
  "recipe": {
   "name": "蒸紫薯",
   "time": "约25分钟",
   "steps": [
    "紫薯洗净",
    "水开蒸20~25分钟",
    "扎透即熟,趁热或放凉吃"
   ]
  },
  "tips": "和红薯一样属主食,一次1个中等大小即可。"
 },
 {
  "id": "wholewheat-mantou",
  "name": "全麦馒头",
  "alias": "全麦馒头",
  "emoji": "🥟",
  "cat": "staple",
  "basis": "即食(市售参考)",
  "goals": [
   "gain",
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
  "kcal": 228,
  "p": 7.8,
  "c": 46,
  "f": 1.5,
  "fiber": 4,
  "na": 180,
  "k": 90,
  "ca": 10,
  "mg": 40,
  "fe": 2.5,
  "zn": 1,
  "vc": 0,
  "serving": {
   "n": 1,
   "unit": "个",
   "note": "约100g"
  },
  "scenes": [
   "daily",
   "pre"
  ],
  "highlight": [
   "不用开火的主食,加热即食",
   "比白馒头多纤维"
  ],
  "pair": [
   {
    "name": "鸡蛋",
    "why": "全麦馒头+蛋+豆浆,中式快手早餐"
   }
  ],
  "tips": "看配料表确认全麦粉为主;不同品牌热量差异大,按包装营养表为准。"
 },
 {
  "id": "mung-bean",
  "name": "绿豆(干)",
  "alias": "绿豆",
  "emoji": "🫘",
  "cat": "staple",
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
  "kcal": 329,
  "p": 21.6,
  "c": 62,
  "f": 0.8,
  "fiber": 6.4,
  "na": 3,
  "k": 787,
  "ca": 81,
  "mg": 125,
  "fe": 6.5,
  "zn": 2.2,
  "vc": 0,
  "serving": {
   "n": 40,
   "unit": "克",
   "note": "干重"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "蛋白纤维都不错的杂豆",
   "夏天绿豆汤补水补钾"
  ],
  "pair": [
   {
    "name": "小米",
    "why": "绿豆小米粥,粗细搭配"
   }
  ],
  "recipe": {
   "name": "绿豆汤",
   "time": "约50分钟",
   "steps": [
    "绿豆泡1小时",
    "加水大火烧开转小火煮30~40分钟",
    "开花即可,可少糖或不加糖"
   ]
  },
  "tips": "煮汤尽量别加大量糖,当主食算热量。"
 },
 {
  "id": "adzuki",
  "name": "赤小豆(干)",
  "alias": "红小豆 · 红豆",
  "emoji": "🫘",
  "cat": "staple",
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
  "kcal": 309,
  "p": 20.2,
  "c": 63.4,
  "f": 0.6,
  "fiber": 7.7,
  "na": 2,
  "k": 860,
  "ca": 74,
  "mg": 138,
  "fe": 7.4,
  "zn": 2.2,
  "vc": 0,
  "serving": {
   "n": 40,
   "unit": "克",
   "note": "干重"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "铁和纤维高,素食者友好",
   "豆香浓,做杂粮饭好"
  ],
  "pair": [
   {
    "name": "薏米",
    "why": "红豆薏米,经典养生粥"
   }
  ],
  "recipe": {
   "name": "红豆杂粮饭",
   "time": "约90分钟(含浸泡)",
   "steps": [
    "赤小豆泡4小时以上或过夜",
    "与米混合按平时水量煮",
    "跳闸后焖15分钟"
   ]
  },
  "tips": "赤小豆偏硬,一定提前泡;市售\"红豆沙\"多为加糖款,注意。"
 },
 {
  "id": "white-kidney-bean",
  "name": "白芸豆(干)",
  "alias": "大白芸豆",
  "emoji": "🫘",
  "cat": "staple",
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
  "kcal": 341,
  "p": 21.4,
  "c": 61.2,
  "f": 1.5,
  "fiber": 7.4,
  "na": 12,
  "k": 1400,
  "ca": 160,
  "mg": 180,
  "fe": 8.2,
  "zn": 2.9,
  "vc": 0,
  "serving": {
   "n": 40,
   "unit": "克",
   "note": "干重"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "钾、镁、纤维都高的大粒豆",
   "煮后绵软,做沙拉炖菜合适"
  ],
  "pair": [
   {
    "name": "番茄",
    "why": "白芸豆番茄炖菜,高纤饱腹"
   }
  ],
  "recipe": {
   "name": "茄汁白芸豆",
   "time": "约90分钟(含浸泡)",
   "steps": [
    "白芸豆泡一夜,煮到软(约40分钟)",
    "番茄炒出汁,下豆子",
    "调味收汁即可"
   ]
  },
  "tips": "务必彻底煮熟(生芸豆含凝集素);每次干豆40g左右就够。"
 },
 {
  "id": "chestnut",
  "name": "板栗(熟)",
  "alias": "栗子 · 熟板栗",
  "emoji": "🌰",
  "cat": "staple",
  "basis": "熟重(去壳)",
  "goals": [
   "gain",
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
  "kcal": 189,
  "p": 4.2,
  "c": 45.4,
  "f": 1.1,
  "fiber": 4.1,
  "na": 3,
  "k": 480,
  "ca": 24,
  "mg": 40,
  "fe": 1.1,
  "zn": 0.7,
  "vc": 16,
  "serving": {
   "n": 6,
   "unit": "个",
   "note": "约60g"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "“坚果里更像主食”,碳水高脂肪低",
   "秋冬烤栗子,是健康小零食"
  ],
  "pair": [
   {
    "name": "牛奶",
    "why": "当主食加餐配牛奶,热量可控"
   }
  ],
  "tips": "栗子是主食不是坚果,7~8颗约等于半碗饭,别当瓜子吃。"
 }
];

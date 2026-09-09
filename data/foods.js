/* 练食清单 · 食物库(120种,每100g可食部参考值;含宏量+微量;来源见「关于」页) */
const FOODS_PROTEIN = [
 {
  "id": "chicken-breast",
  "name": "鸡胸肉",
  "alias": "鸡大胸 · 去皮鸡胸",
  "emoji": "🍗",
  "cat": "protein",
  "basis": "生重",
  "goals": [
   "gain",
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": true,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 118,
  "p": 23,
  "c": 0.5,
  "f": 2.5,
  "fiber": 0,
  "na": 50,
  "k": 256,
  "ca": 5,
  "mg": 23,
  "fe": 0.9,
  "zn": 1,
  "vc": 0,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心/1份"
  },
  "scenes": [
   "daily",
   "post"
  ],
  "highlight": [
   "高蛋白低脂肪的经典健身食材",
   "便宜、好买、做法多",
   "蛋白质密度高,饱腹感强,减脂期友好"
  ],
  "pair": [
   {
    "name": "西兰花",
    "why": "低热量高纤维,和鸡胸组成最经典的减脂餐"
   },
   {
    "name": "糙米",
    "why": "蛋白+缓释碳水,是干净增肌正餐的底子"
   }
  ],
  "recipe": {
   "name": "香煎鸡胸肉",
   "time": "约 20 分钟",
   "steps": [
    "鸡胸用盐、黑胡椒、蒜末、一点点油腌 15 分钟",
    "中火下锅,每面煎 3~4 分钟至金黄",
    "加盖再焖 1~2 分钟,肉更嫩",
    "取出切片,配焯水西兰花一起吃"
   ]
  },
  "tips": "营养按生肉算;煎/烤会失水,熟后同样重量热量会略浓缩。想更嫩可提前用盐水泡 20 分钟。"
 },
 {
  "id": "chicken-thigh",
  "name": "鸡腿肉(去皮)",
  "alias": "鸡大腿 · 去骨鸡腿",
  "emoji": "🍗",
  "cat": "protein",
  "basis": "生重",
  "goals": [
   "gain",
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": true,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 121,
  "p": 20,
  "c": 0,
  "f": 4.4,
  "fiber": 0,
  "na": 70,
  "k": 240,
  "ca": 10,
  "mg": 22,
  "fe": 1.1,
  "zn": 1.5,
  "vc": 0,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心/1份"
  },
  "scenes": [
   "daily",
   "post"
  ],
  "highlight": [
   "比鸡胸多汁不柴,厨房新手不易翻车",
   "脂肪略高一点,但同样是优质蛋白",
   "带皮热量高很多,记得去皮吃"
  ],
  "pair": [
   {
    "name": "口蘑",
    "why": "自带鲜味,少油一炒就很好吃"
   },
   {
    "name": "番茄",
    "why": "酸甜解腻,搭配成番茄鸡腿盖饭"
   }
  ],
  "recipe": {
   "name": "无油煎鸡腿排",
   "time": "约 20 分钟",
   "steps": [
    "鸡腿去骨去皮,用刀背拍松",
    "用盐、黑胡椒、柠檬汁腌 10 分钟",
    "中火两面各煎 4 分钟,皮面朝下先煎",
    "切条装盘,配蔬菜一起吃"
   ]
  },
  "tips": "鸡腿脂肪比鸡胸高,减脂期控制总量即可,不必完全不吃。"
 },
 {
  "id": "beef-lean",
  "name": "瘦牛肉(牛里脊)",
  "alias": "牛里脊 · 牛腱",
  "emoji": "🥩",
  "cat": "protein",
  "basis": "生重",
  "goals": [
   "gain",
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": true,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 107,
  "p": 20,
  "c": 1,
  "f": 2.3,
  "fiber": 0,
  "na": 55,
  "k": 318,
  "ca": 7,
  "mg": 21,
  "fe": 2.6,
  "zn": 4.8,
  "vc": 0,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心/1份"
  },
  "scenes": [
   "daily",
   "post"
  ],
  "highlight": [
   "优质蛋白+铁+锌,增肌人群的经典选择",
   "自带少量肌酸,对力量训练有帮助(含量有限)",
   "选里脊、牛腱等脂肪少的部位"
  ],
  "pair": [
   {
    "name": "彩椒",
    "why": "维C含量高,能促进铁的吸收"
   },
   {
    "name": "洋葱",
    "why": "增香提味,少用酱料也能好吃"
   }
  ],
  "recipe": {
   "name": "黑椒牛肉粒",
   "time": "约 15 分钟",
   "steps": [
    "牛里脊切粒,用盐、黑胡椒、一点点淀粉抓匀腌 10 分钟",
    "大火热锅少油,下牛肉快炒 1~2 分钟盛出",
    "下彩椒、洋葱炒 1 分钟,倒回牛肉",
    "黑胡椒、盐调味,快速翻匀出锅"
   ]
  },
  "tips": "牛里脊最嫩,一定大火快炒,炒久了会老。"
 },
 {
  "id": "pork-tenderloin",
  "name": "猪里脊(瘦)",
  "alias": "猪通脊",
  "emoji": "🥩",
  "cat": "protein",
  "basis": "生重",
  "goals": [
   "gain",
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": true,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 109,
  "p": 20.2,
  "c": 0.7,
  "f": 2.6,
  "fiber": 0,
  "na": 48,
  "k": 400,
  "ca": 6,
  "mg": 32,
  "fe": 1.1,
  "zn": 2.2,
  "vc": 0,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心/1份"
  },
  "scenes": [
   "daily",
   "post"
  ],
  "highlight": [
   "瘦猪肉其实很优秀:高蛋白低脂肪",
   "比牛肉便宜,适合日常轮换",
   "选里脊,别选五花、肥肉"
  ],
  "pair": [
   {
    "name": "芦笋",
    "why": "低热量配菜,一荤一素刚刚好"
   },
   {
    "name": "胡萝卜",
    "why": "颜色好看,营养互补"
   }
  ],
  "recipe": {
   "name": "滑炒猪里脊",
   "time": "约 15 分钟",
   "steps": [
    "里脊切薄片,加盐、白胡椒、少量淀粉抓匀",
    "热锅少油,下肉片快速滑炒至变色",
    "加入芦笋段或胡萝卜片炒 2 分钟",
    "调味出锅"
   ]
  },
  "tips": "用少量淀粉抓一下肉会更嫩,淀粉量很少,不影响整体热量。"
 },
 {
  "id": "salmon",
  "name": "三文鱼",
  "alias": "鲑鱼",
  "emoji": "🍣",
  "cat": "protein",
  "basis": "生重",
  "goals": [
   "gain",
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": true,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 139,
  "p": 17.2,
  "c": 0,
  "f": 7.8,
  "fiber": 0,
  "na": 44,
  "k": 363,
  "ca": 12,
  "mg": 29,
  "fe": 0.8,
  "zn": 0.6,
  "vc": 0,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心/1份"
  },
  "scenes": [
   "daily",
   "post"
  ],
  "highlight": [
   "富含 Omega-3(EPA/DHA),对心血管和恢复友好",
   "脂肪是好脂肪,减脂期也不用怕",
   "肉质嫩,简单煎就很好吃"
  ],
  "pair": [
   {
    "name": "芦笋",
    "why": "清口解腻,和鱼的油脂很配"
   },
   {
    "name": "柠檬",
    "why": "去腥增香,帮你少放盐"
   }
  ],
  "recipe": {
   "name": "香煎三文鱼",
   "time": "约 12 分钟",
   "steps": [
    "鱼块擦干,抹盐、黑胡椒、柠檬汁腌 10 分钟",
    "中火,带皮一面朝下先煎 3 分钟",
    "翻面再煎 2 分钟,侧面也煎一下",
    "出锅前挤一点柠檬汁"
   ]
  },
  "tips": "煎到内部刚熟、轻轻能拨开鱼刺就好,别煎太老。买冷冻的性价比更高。"
 },
 {
  "id": "cod",
  "name": "鳕鱼",
  "alias": "真鳕 · 大西洋鳕",
  "emoji": "🐟",
  "cat": "protein",
  "basis": "生重",
  "goals": [
   "gain",
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": true,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 88,
  "p": 20.4,
  "c": 0.5,
  "f": 0.5,
  "fiber": 0,
  "na": 54,
  "k": 413,
  "ca": 14,
  "mg": 32,
  "fe": 0.4,
  "zn": 0.5,
  "vc": 0,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心/1份"
  },
  "scenes": [
   "daily",
   "post"
  ],
  "highlight": [
   "极低脂肪的高蛋白鱼,减脂期很友好",
   "肉质嫩、几乎无刺,好消化",
   "清蒸 10 分钟内就能上桌"
  ],
  "pair": [
   {
    "name": "番茄",
    "why": "酸甜汁配嫩鱼肉,清淡不寡淡"
   },
   {
    "name": "玉米",
    "why": "鱼+粗粮,适合做轻食便当"
   }
  ],
  "recipe": {
   "name": "清蒸鳕鱼",
   "time": "约 15 分钟",
   "steps": [
    "鳕鱼块铺上姜丝,水开后蒸 8 分钟",
    "倒掉盘里的汤汁,淋一点蒸鱼豉油",
    "撒葱花,可浇一勺热油增香(可选)"
   ]
  },
  "tips": "买的时候认准「真鳕/大西洋鳕」,廉价「油鱼」会让人滑肠,要避开。"
 },
 {
  "id": "shrimp",
  "name": "虾仁",
  "alias": "鲜虾仁 · 基围虾",
  "emoji": "🍤",
  "cat": "protein",
  "basis": "生重",
  "goals": [
   "gain",
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": true,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": true,
  "snack": true,
  "kcal": 93,
  "p": 18.6,
  "c": 2.8,
  "f": 0.8,
  "fiber": 0,
  "na": 111,
  "k": 180,
  "ca": 52,
  "mg": 34,
  "fe": 0.5,
  "zn": 1.6,
  "vc": 0,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心/1份"
  },
  "scenes": [
   "daily",
   "post",
   "rec",
   "comp"
  ],
  "highlight": [
   "高蛋白低脂肪,海鲜里最好处理的之一",
   "几乎没有刺,带饭、快手菜都方便",
   "含碘和硒,营养密度不错"
  ],
  "pair": [
   {
    "name": "西兰花",
    "why": "虾仁炒西兰花,10 分钟快手减脂菜"
   },
   {
    "name": "黄瓜",
    "why": "凉拌虾仁黄瓜,夏天清爽加餐"
   }
  ],
  "recipe": {
   "name": "白灼虾仁",
   "time": "约 8 分钟",
   "steps": [
    "虾仁开背挑去虾线",
    "沸水下锅,变色后再煮 1 分钟捞出",
    "配姜丝、醋、一点点生抽的蘸汁"
   ]
  },
  "tips": "冷冻虾仁解冻后用厨房纸吸干水,炒出来更Q弹。"
 },
 {
  "id": "egg",
  "name": "鸡蛋",
  "alias": "全蛋",
  "emoji": "🥚",
  "cat": "protein",
  "basis": "可食部(约44g/个)",
  "goals": [
   "gain",
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": true,
   "dairy": false,
   "nut": false
  },
  "quick": true,
  "snack": true,
  "kcal": 144,
  "p": 13.3,
  "c": 2.8,
  "f": 8.8,
  "fiber": 0,
  "na": 142,
  "k": 138,
  "ca": 56,
  "mg": 12,
  "fe": 1.8,
  "zn": 1.3,
  "vc": 0,
  "serving": {
   "n": 1,
   "unit": "个",
   "note": "≈50g"
  },
  "scenes": [
   "daily",
   "post",
   "rec",
   "comp"
  ],
  "highlight": [
   "蛋白质吸收率极高的全能选手",
   "便宜、耐放、怎么做都行",
   "蛋黄含卵磷脂等营养,不必扔掉"
  ],
  "pair": [
   {
    "name": "燕麦片",
    "why": "水煮蛋+牛奶燕麦,15 分钟高质量早餐"
   },
   {
    "name": "番茄",
    "why": "番茄炒蛋,家常又下饭"
   }
  ],
  "recipe": {
   "name": "水煮蛋",
   "time": "约 12 分钟",
   "steps": [
    "鸡蛋冷水下锅",
    "水开后转中小火煮 8 分钟(全熟)",
    "捞出过凉水,好剥壳"
   ]
  },
  "tips": "一天吃几个看你的蛋白需求和总热量,不用对蛋黄恐惧;水煮蛋放凉了当加餐也很方便。"
 },
 {
  "id": "tofu",
  "name": "北豆腐",
  "alias": "老豆腐 · 卤水豆腐",
  "emoji": "🍲",
  "cat": "protein",
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
  "kcal": 116,
  "p": 12.2,
  "c": 3.4,
  "f": 6.9,
  "fiber": 0.3,
  "na": 7,
  "k": 125,
  "ca": 138,
  "mg": 60,
  "fe": 1.9,
  "zn": 0.9,
  "vc": 0,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "约1/3盒"
  },
  "scenes": [
   "daily",
   "post"
  ],
  "highlight": [
   "优质植物蛋白,素食者主力",
   "卤水/石膏豆腐含钙可观",
   "吸味百搭,煎、炖、凉拌都行"
  ],
  "pair": [
   {
    "name": "菠菜",
    "why": "菠菜豆腐汤记得菠菜先焯水去草酸"
   },
   {
    "name": "口蘑",
    "why": "菌菇提鲜,素菜也能很香"
   }
  ],
  "recipe": {
   "name": "香煎豆腐",
   "time": "约 12 分钟",
   "steps": [
    "豆腐切块,用厨房纸吸干水",
    "少油中火,两面煎至金黄",
    "淋生抽+少量水,盖盖焖 2 分钟",
    "撒葱花出锅"
   ]
  },
  "tips": "北豆腐蛋白质更高;南豆腐/内酯豆腐更嫩但蛋白质低一些。"
 },
 {
  "id": "soymilk",
  "name": "无糖豆浆",
  "alias": "纯豆浆",
  "emoji": "🥛",
  "cat": "protein",
  "basis": "每100ml",
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
  "kcal": 31,
  "p": 3,
  "c": 1.2,
  "f": 1.6,
  "fiber": 0.4,
  "na": 28,
  "k": 70,
  "ca": 8,
  "mg": 12,
  "fe": 0.5,
  "zn": 0.3,
  "vc": 0,
  "serving": {
   "n": 250,
   "unit": "毫升",
   "note": "1杯"
  },
  "scenes": [
   "daily",
   "post",
   "rec"
  ],
  "highlight": [
   "液体植物蛋白,早餐顺手补蛋白",
   "碳水低,乳糖不耐也能喝",
   "超市买要认准「无糖」"
  ],
  "pair": [
   {
    "name": "燕麦片",
    "why": "豆浆泡燕麦,比牛奶版更清爽"
   },
   {
    "name": "全麦面包",
    "why": "豆浆+鸡蛋+全麦面包,标准快手早餐"
   }
  ],
  "recipe": {
   "name": "微波豆浆燕麦",
   "time": "约 5 分钟",
   "steps": [
    "碗里放燕麦 40g",
    "倒入无糖豆浆没过燕麦",
    "微波 2~3 分钟,拌匀即可"
   ]
  },
  "tips": "很多早餐店的「豆浆」其实是加糖的,自己买认准配料表只有水和黄豆的。"
 },
 {
  "id": "yogurt",
  "name": "希腊酸奶(无糖)",
  "alias": "滤乳清酸奶",
  "emoji": "🥣",
  "cat": "protein",
  "basis": "即食(品牌差异大)",
  "goals": [
   "gain",
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
  "kcal": 97,
  "p": 9,
  "c": 4,
  "f": 5,
  "fiber": 0,
  "na": 35,
  "k": 140,
  "ca": 120,
  "mg": 12,
  "fe": 0.2,
  "zn": 0.9,
  "vc": 0,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "约1杯"
  },
  "scenes": [
   "daily",
   "post",
   "rec",
   "comp"
  ],
  "highlight": [
   "浓缩后的酸奶,蛋白质是同量普通酸奶的约 2~3 倍",
   "自带酸甜,加餐、早餐都方便",
   "质地浓稠,饱腹感强"
  ],
  "pair": [
   {
    "name": "蓝莓",
    "why": "无糖酸奶+蓝莓,好吃又低负担"
   },
   {
    "name": "燕麦片",
    "why": "隔夜燕麦杯的灵魂配料"
   }
  ],
  "recipe": {
   "name": "隔夜燕麦杯",
   "time": "5 分钟准备,冷藏过夜",
   "steps": [
    "瓶底铺燕麦 40g",
    "倒入无糖希腊酸奶和少量牛奶",
    "加蓝莓或香蕉片,冷藏过夜",
    "早上拿出来直接吃"
   ]
  },
  "tips": "数值随品牌和是否脱脂差异很大。买之前看配料表:最好是「生牛乳+菌」,别买加糖加果酱的。"
 },
 {
  "id": "milk",
  "name": "牛奶(全脂)",
  "alias": "纯牛奶",
  "emoji": "🥛",
  "cat": "protein",
  "basis": "每100ml",
  "goals": [
   "gain",
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
  "kcal": 65,
  "p": 3.3,
  "c": 4.9,
  "f": 3.6,
  "fiber": 0,
  "na": 42,
  "k": 150,
  "ca": 120,
  "mg": 12,
  "fe": 0.03,
  "zn": 0.4,
  "vc": 0,
  "serving": {
   "n": 250,
   "unit": "毫升",
   "note": "1杯"
  },
  "scenes": [
   "daily",
   "post",
   "rec",
   "comp"
  ],
  "highlight": [
   "平价蛋白质+钙的来源",
   "全脂和低脂热量差别不大,按预算选",
   "练后和燕麦、香蕉是黄金组合"
  ],
  "pair": [
   {
    "name": "香蕉",
    "why": "练后奶昔:牛奶+香蕉,快速补糖原和蛋白"
   },
   {
    "name": "燕麦片",
    "why": "牛奶燕麦粥,10 分钟搞定早餐"
   }
  ],
  "recipe": {
   "name": "香蕉牛奶饮",
   "time": "约 3 分钟",
   "steps": [
    "香蕉 1 根切段",
    "加牛奶 250ml(可再加一勺燕麦)",
    "搅拌机打 30 秒,练后喝"
   ]
  },
  "tips": "乳糖不耐可选无糖豆浆或舒化奶;全脂口感更好,减脂期换低脂即可。"
 },
 {
  "id": "tuna",
  "name": "金枪鱼(水浸罐头)",
  "alias": "水浸金枪鱼",
  "emoji": "🐟",
  "cat": "protein",
  "basis": "沥水后",
  "goals": [
   "gain",
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": true,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": true,
  "snack": true,
  "kcal": 116,
  "p": 25.5,
  "c": 0,
  "f": 0.8,
  "fiber": 0,
  "na": 250,
  "k": 180,
  "ca": 8,
  "mg": 20,
  "fe": 1,
  "zn": 0.7,
  "vc": 0,
  "serving": {
   "n": 100,
   "unit": "克",
   "note": "约半罐(沥水)"
  },
  "scenes": [
   "daily",
   "post",
   "rec",
   "comp"
  ],
  "highlight": [
   "开罐即食的高蛋白,宿舍党/上班族友好",
   "蛋白质密度很高,脂肪极低",
   "水浸款热量远低于油浸款"
  ],
  "pair": [
   {
    "name": "全麦面包",
    "why": "金枪鱼三明治,5 分钟带饭午餐"
   },
   {
    "name": "玉米粒",
    "why": "金枪鱼玉米沙拉,清爽好吃"
   }
  ],
  "recipe": {
   "name": "金枪鱼全麦三明治",
   "time": "约 6 分钟",
   "steps": [
    "金枪鱼罐头沥干水",
    "拌入黄瓜丁、玉米粒和一点点无糖酸奶",
    "夹进全麦吐司,可加生菜番茄",
    "对半切开"
   ]
  },
  "tips": "一定选「水浸」,别买油浸或自带沙拉酱的款式,热量差很多。"
 },
 {
  "id": "duck-breast",
  "name": "鸭胸肉(去皮)",
  "alias": "鸭胸 · 去皮鸭肉",
  "emoji": "🦆",
  "cat": "protein",
  "basis": "生重",
  "goals": [
   "gain",
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": true,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 125,
  "p": 20,
  "c": 0.5,
  "f": 4.6,
  "fiber": 0,
  "na": 70,
  "k": 340,
  "ca": 9,
  "mg": 26,
  "fe": 1.8,
  "zn": 1.6,
  "vc": 0,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心"
  },
  "scenes": [
   "daily",
   "post",
   "rec"
  ],
  "highlight": [
   "去皮后是低脂高蛋白的好肉",
   "口感比鸡胸嫩,做法多样"
  ],
  "pair": [
   {
    "name": "芦笋",
    "why": "鸭胸配芦笋,香煎一餐很完整"
   }
  ],
  "recipe": {
   "name": "香煎鸭胸",
   "time": "约20分钟",
   "steps": [
    "鸭胸去皮下肥油,两面划刀",
    "中火先煎皮面3~4分钟出油,再翻面煎4分钟",
    "盖盖焖2分钟,切片配蔬菜"
   ]
  },
  "tips": "带皮热量高很多,一定去皮去肥油再吃。"
 },
 {
  "id": "beef-shank",
  "name": "牛腱子(熟)",
  "alias": "牛腱 · 卤牛腱",
  "emoji": "🥩",
  "cat": "protein",
  "basis": "熟重(水煮无盐参考)",
  "goals": [
   "gain",
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": true,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 168,
  "p": 28.5,
  "c": 0.8,
  "f": 5.2,
  "fiber": 0,
  "na": 58,
  "k": 260,
  "ca": 12,
  "mg": 22,
  "fe": 3,
  "zn": 5,
  "vc": 0,
  "serving": {
   "n": 100,
   "unit": "克",
   "note": "约1掌心"
  },
  "scenes": [
   "daily",
   "post",
   "rec"
  ],
  "highlight": [
   "胶质多、脂肪低,健身增肌好选择",
   "一次卤一锅,切片即食很省事"
  ],
  "pair": [
   {
    "name": "彩椒",
    "why": "凉拌牛腱配彩椒丝,清爽补维C"
   }
  ],
  "recipe": {
   "name": "清炖/卤牛腱",
   "time": "约90分钟",
   "steps": [
    "牛腱焯水去沫",
    "加姜片、葱、八角、少量酱油,水开后小火炖60~80分钟",
    "放凉切片,汤汁可留作高汤"
   ]
  },
  "tips": "市售卤牛腱偏咸,钠会高很多;自己煮可少盐少酱油。"
 },
 {
  "id": "lamb-lean",
  "name": "瘦羊肉(生)",
  "alias": "羊里脊 · 瘦羊腿",
  "emoji": "🐑",
  "cat": "protein",
  "basis": "生重",
  "goals": [
   "gain",
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": true,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 118,
  "p": 20.6,
  "c": 0.5,
  "f": 3.9,
  "fiber": 0,
  "na": 75,
  "k": 300,
  "ca": 6,
  "mg": 24,
  "fe": 2,
  "zn": 3.5,
  "vc": 0,
  "serving": {
   "n": 120,
   "unit": "克",
   "note": "约1掌心"
  },
  "scenes": [
   "daily",
   "post",
   "rec"
  ],
  "highlight": [
   "瘦羊肉蛋白高脂肪低",
   "铁和锌都不错,适合冬天训练"
  ],
  "pair": [
   {
    "name": "洋葱",
    "why": "洋葱去膻增香,少酱也下饭"
   }
  ],
  "recipe": {
   "name": "孜然炒羊肉",
   "time": "约15分钟",
   "steps": [
    "瘦羊肉切薄片,少油大火快炒1~2分钟",
    "下洋葱丝、孜然、辣椒面炒香",
    "调味出锅,别久炒"
   ]
  },
  "tips": "选羊里脊/瘦腿肉,肥羊卷脂肪高,减脂期少吃。"
 },
 {
  "id": "pork-liver",
  "name": "猪肝(生)",
  "alias": "猪肝",
  "emoji": "🍖",
  "cat": "protein",
  "basis": "生重",
  "goals": [
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": true,
   "seafood": false,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 129,
  "p": 19.3,
  "c": 5,
  "f": 3.5,
  "fiber": 0,
  "na": 68,
  "k": 235,
  "ca": 6,
  "mg": 18,
  "fe": 23,
  "zn": 5.8,
  "vc": 18,
  "serving": {
   "n": 50,
   "unit": "克",
   "note": "每周1~2次,一次约50g"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "铁含量极高,是缺铁/女运动员补铁食物",
   "蛋白质也高,性价比好"
  ],
  "pair": [
   {
    "name": "菠菜",
    "why": "动物铁+植物铁搭配,再加维C助吸收"
   }
  ],
  "recipe": {
   "name": "爆炒猪肝",
   "time": "约15分钟",
   "steps": [
    "猪肝切片用淡盐水泡后冲洗,沥干",
    "大火热油快炒至变色盛出",
    "下蒜片青椒炒香,倒回猪肝调味翻匀"
   ]
  },
  "tips": "维生素A含量很高,孕期/备孕请遵医嘱限量,一般每周50~100g即可。"
 },
 {
  "id": "egg-white",
  "name": "蛋清(蛋白)",
  "alias": "鸡蛋白",
  "emoji": "🥚",
  "cat": "protein",
  "basis": "可食部",
  "goals": [
   "gain",
   "cut"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": true,
   "dairy": false,
   "nut": false
  },
  "quick": true,
  "snack": true,
  "kcal": 52,
  "p": 10.9,
  "c": 0.7,
  "f": 0.2,
  "fiber": 0,
  "na": 166,
  "k": 163,
  "ca": 7,
  "mg": 11,
  "fe": 0.1,
  "zn": 0.03,
  "vc": 0,
  "serving": {
   "n": 1,
   "unit": "个蛋清",
   "note": "约33g"
  },
  "scenes": [
   "daily",
   "post",
   "rec"
  ],
  "highlight": [
   "几乎零脂肪的纯蛋白",
   "增肌期想多吃蛋白又控脂时很好用"
  ],
  "pair": [
   {
    "name": "全蛋",
    "why": "蛋黄营养也别丢,蛋清+适量蛋黄更均衡"
   }
  ],
  "tips": "一个全蛋蛋白约6g、蛋清约3.5g;别只吃蛋清,蛋黄含卵磷脂等营养。",
  "pic": "assets/img/food/egg-white.png"
 },
 {
  "id": "quail-egg",
  "name": "鹌鹑蛋",
  "alias": "鹌鹑蛋",
  "emoji": "🥚",
  "cat": "protein",
  "basis": "可食部(约10g/个)",
  "goals": [
   "gain",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": true,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": true,
  "kcal": 158,
  "p": 12.8,
  "c": 2.1,
  "f": 11.1,
  "fiber": 0,
  "na": 107,
  "k": 138,
  "ca": 47,
  "mg": 11,
  "fe": 3.2,
  "zn": 1.4,
  "vc": 0,
  "serving": {
   "n": 4,
   "unit": "个",
   "note": "约40g"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "小巧当加餐方便",
   "胆固醇与全蛋相近,适量吃没问题"
  ],
  "pair": [
   {
    "name": "口蘑",
    "why": "小食配菜,便当友好"
   }
  ],
  "tips": "体积小容易吃多,4~6个约等于1个全蛋的蛋白量,按需换算。"
 },
 {
  "id": "tofu-silken",
  "name": "内酯豆腐(嫩豆腐)",
  "alias": "内酯豆腐 · 嫩豆腐",
  "emoji": "🍲",
  "cat": "protein",
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
  "kcal": 50,
  "p": 5,
  "c": 2.9,
  "f": 2.6,
  "fiber": 0.3,
  "na": 6,
  "k": 95,
  "ca": 17,
  "mg": 24,
  "fe": 0.4,
  "zn": 0.5,
  "vc": 0,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "约半盒"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "口感嫩滑,热量低",
   "减脂期做汤、拌菜都合适"
  ],
  "pair": [
   {
    "name": "虾仁",
    "why": "虾仁蒸/烩嫩豆腐,低脂高蛋白"
   }
  ],
  "recipe": {
   "name": "凉拌嫩豆腐",
   "time": "约5分钟",
   "steps": [
    "豆腐整块装盘,蒸3分钟或直接用",
    "淋生抽、香油、葱花",
    "可加虾皮/肉松提味"
   ]
  },
  "tips": "蛋白质比北豆腐低,想多补蛋白优先选北豆腐或豆干。",
  "pic": "assets/img/food/tofu-silken.png"
 },
 {
  "id": "tofu-dried",
  "name": "豆干(香干)",
  "alias": "香干 · 五香豆干",
  "emoji": "🍲",
  "cat": "protein",
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
  "snack": true,
  "kcal": 142,
  "p": 16.5,
  "c": 6,
  "f": 7,
  "fiber": 0.5,
  "na": 200,
  "k": 110,
  "ca": 308,
  "mg": 61,
  "fe": 2.1,
  "zn": 1.1,
  "vc": 0,
  "serving": {
   "n": 60,
   "unit": "克",
   "note": "约1块"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "植物蛋白密度比豆腐高,钙也高",
   "即食/凉拌/炒菜都方便"
  ],
  "pair": [
   {
    "name": "芹菜",
    "why": "芹菜炒香干,经典家常高蛋白素菜"
   }
  ],
  "recipe": {
   "name": "香干炒芹菜",
   "time": "约10分钟",
   "steps": [
    "豆干切条,芹菜切段",
    "少油先炒豆干微黄",
    "下芹菜快炒,调味出锅"
   ]
  },
  "tips": "五香/卤制豆干钠偏高,高血压人群注意看包装钠含量。"
 },
 {
  "id": "yuba",
  "name": "腐竹(干)",
  "alias": "腐竹 · 支竹",
  "emoji": "🍥",
  "cat": "protein",
  "basis": "干重(需泡发)",
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
  "kcal": 461,
  "p": 44.6,
  "c": 22.3,
  "f": 21.7,
  "fiber": 1.5,
  "na": 26,
  "k": 553,
  "ca": 77,
  "mg": 71,
  "fe": 16.5,
  "zn": 3.7,
  "vc": 0,
  "serving": {
   "n": 25,
   "unit": "克",
   "note": "干重,泡发后约70g"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "植物蛋白和铁都很高",
   "泡发后口感筋道,炖煮百搭"
  ],
  "pair": [
   {
    "name": "木耳",
    "why": "腐竹木耳一起凉拌/炖,素食高蛋白"
   }
  ],
  "recipe": {
   "name": "凉拌腐竹",
   "time": "约30分钟(含泡发)",
   "steps": [
    "腐竹温水泡发至软,切段焯水1分钟",
    "加黄瓜丝、蒜末、生抽、醋、香油",
    "拌匀即可"
   ]
  },
  "tips": "干品热量密度高,一次25~40g干重就够;泡发后重量约3倍。"
 },
 {
  "id": "bass",
  "name": "鲈鱼",
  "alias": "鲈鱼",
  "emoji": "🐟",
  "cat": "protein",
  "basis": "生重(整鱼可食部)",
  "goals": [
   "gain",
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": true,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 105,
  "p": 18.6,
  "c": 0,
  "f": 3.4,
  "fiber": 0,
  "na": 144,
  "k": 205,
  "ca": 138,
  "mg": 37,
  "fe": 2,
  "zn": 2.8,
  "vc": 0,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "约小半条"
  },
  "scenes": [
   "daily",
   "post",
   "rec"
  ],
  "highlight": [
   "肉质细嫩、刺少",
   "钙含量在鱼类里较高"
  ],
  "pair": [
   {
    "name": "姜丝蒸鱼",
    "why": "清蒸保留营养,少油少盐"
   }
  ],
  "recipe": {
   "name": "清蒸鲈鱼",
   "time": "约15分钟",
   "steps": [
    "鱼身划刀,铺姜丝葱段",
    "水开蒸8~10分钟,倒掉腥水",
    "淋蒸鱼豉油,可浇少量热油"
   ]
  },
  "tips": "蒸的时间看鱼大小,筷子能轻松插入鱼背最厚处即熟。"
 },
 {
  "id": "yellow-croaker",
  "name": "黄花鱼",
  "alias": "黄鱼 · 大黄鱼",
  "emoji": "🐟",
  "cat": "protein",
  "basis": "生重(可食部)",
  "goals": [
   "gain",
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": true,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 99,
  "p": 17.7,
  "c": 0.8,
  "f": 2.5,
  "fiber": 0,
  "na": 103,
  "k": 228,
  "ca": 53,
  "mg": 39,
  "fe": 1,
  "zn": 0.9,
  "vc": 0,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "约小半条"
  },
  "scenes": [
   "daily",
   "post",
   "rec"
  ],
  "highlight": [
   "脂肪低蛋白足,家常海鱼",
   "肉质嫩,煎/炖都香"
  ],
  "pair": [
   {
    "name": "豆腐",
    "why": "黄鱼炖豆腐,钙蛋白双补"
   }
  ],
  "tips": "腌制咸黄鱼钠极高,健身期优先选新鲜/冰鲜黄鱼。"
 },
 {
  "id": "clam",
  "name": "蛤蜊",
  "alias": "花蛤 · 文蛤",
  "emoji": "🦪",
  "cat": "protein",
  "basis": "可食部(去壳)",
  "goals": [
   "cut",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": true,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 62,
  "p": 10.1,
  "c": 2.8,
  "f": 1.1,
  "fiber": 0,
  "na": 350,
  "k": 280,
  "ca": 60,
  "mg": 15,
  "fe": 2.4,
  "zn": 1.2,
  "vc": 0,
  "serving": {
   "n": 150,
   "unit": "克",
   "note": "去壳约1小碗"
  },
  "scenes": [
   "daily",
   "rec"
  ],
  "highlight": [
   "低热量高蛋白的海鲜",
   "鲜味足,少调味也好吃"
  ],
  "pair": [
   {
    "name": "丝瓜/冬瓜",
    "why": "蛤蜊冬瓜汤,清爽补电解质"
   }
  ],
  "recipe": {
   "name": "蛤蜊冬瓜汤",
   "time": "约20分钟",
   "steps": [
    "蛤蜊吐沙洗净",
    "冬瓜切块煮8分钟",
    "下蛤蜊煮到开口,盐白胡椒调味"
   ]
  },
  "tips": "本身自带咸味,先尝再放盐;痛风/高尿酸人群注意控制贝类海鲜量。"
 },
 {
  "id": "oyster",
  "name": "生蚝(牡蛎)",
  "alias": "牡蛎 · 生蚝",
  "emoji": "🦪",
  "cat": "protein",
  "basis": "可食部(去壳)",
  "goals": [
   "gain",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": true,
   "egg": false,
   "dairy": false,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 73,
  "p": 9,
  "c": 4.6,
  "f": 2,
  "fiber": 0,
  "na": 260,
  "k": 168,
  "ca": 60,
  "mg": 22,
  "fe": 5,
  "zn": 71,
  "vc": 0,
  "serving": {
   "n": 6,
   "unit": "个",
   "note": "约100g可食部"
  },
  "scenes": [
   "rec"
  ],
  "highlight": [
   "锌含量很高的天然食物",
   "对免疫和男性生殖健康有帮助"
  ],
  "pair": [
   {
    "name": "柠檬",
    "why": "挤柠檬去腥,也补维C助铁锌吸收"
   }
  ],
  "recipe": {
   "name": "蒜蓉烤生蚝",
   "time": "约15分钟",
   "steps": [
    "生蚝刷净开壳",
    "蒜末炒香铺在蚝肉上",
    "200℃烤8~10分钟至熟"
   ]
  },
  "tips": "尽量做熟吃(生食有微生物风险);贝类嘌呤较高,痛风者注意。"
 }
];

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
  "tips": "纯荞麦口感松散,可先和白米混合过渡。",
  "pic": "assets/img/food/buckwheat.png"
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
  "tips": "栗子是主食不是坚果,7~8颗约等于半碗饭,别当瓜子吃。",
  "pic": "assets/img/food/chestnut.png"
 }
];

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
  "tips": "咖啡因会随咖啡豆/浓度差异很大,注意总量;睡前6~8小时尽量不喝。",
  "pic": "assets/img/food/black-coffee.png"
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
  ],
  "pic": "assets/img/food/orange-juice.png"
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
  ],
  "pic": "assets/img/food/lowfat-milk.png"
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

const FOODS_SPORT = [
 {
  "id": "whey",
  "name": "乳清蛋白粉",
  "alias": "乳清蛋白 · 蛋白粉",
  "emoji": "🥛",
  "cat": "sport",
  "basis": "每100g粉(市售参考)",
  "goals": [
   "gain",
   "maintain"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": false,
   "dairy": true,
   "nut": false
  },
  "quick": false,
  "snack": true,
  "kcal": 400,
  "p": 75,
  "c": 8,
  "f": 5,
  "fiber": 0,
  "na": 350,
  "k": 500,
  "ca": 500,
  "mg": 80,
  "fe": 0.5,
  "zn": 1,
  "vc": 0,
  "serving": {
   "n": 30,
   "unit": "克",
   "note": "约1勺,蛋白约22g"
  },
  "scenes": [
   "post",
   "rec"
  ],
  "highlight": [
   "吸收快的方便蛋白,练后/加餐省事",
   "营养师观点:优先天然食物,粉只是“补充”"
  ],
  "recipe": {
   "name": "怎么冲",
   "time": "1分钟",
   "steps": [
    "冷水或牛奶摇匀",
    "练后30分钟内可喝",
    "别用滚水(结块且浪费蛋白)"
   ]
  },
  "tips": "不是必须品;乳糖不耐选分离乳清或植物蛋白;参赛运动员务必选第三方检测(如Informed Sport/NSF)产品以防污染。",
  "pair": [
   {
    "name": "天然食物",
    "why": "补剂只是补充,营养优先从天然食物满足"
   }
  ]
 },
 {
  "id": "plant-protein",
  "name": "植物蛋白粉",
  "alias": "豌豆蛋白 · 大豆蛋白粉",
  "emoji": "🌱",
  "cat": "sport",
  "basis": "每100g粉(市售参考)",
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
  "kcal": 380,
  "p": 70,
  "c": 10,
  "f": 5,
  "fiber": 0,
  "na": 400,
  "k": 300,
  "ca": 200,
  "mg": 60,
  "fe": 5,
  "zn": 2,
  "vc": 0,
  "serving": {
   "n": 30,
   "unit": "克",
   "note": "约1勺,蛋白约21g"
  },
  "scenes": [
   "post",
   "rec"
  ],
  "highlight": [
   "素食/乳糖不耐者的蛋白补充",
   "常添加消化酶,口感看品牌"
  ],
  "tips": "优先看蛋白质含量与配料,别被“增肌”营销带偏;蛋白需求仍先靠豆制品+全食物。",
  "pair": [
   {
    "name": "天然食物",
    "why": "补剂只是补充,营养优先从天然食物满足"
   }
  ]
 },
 {
  "id": "casein",
  "name": "酪蛋白粉",
  "alias": "酪蛋白 · 慢速蛋白",
  "emoji": "🥛",
  "cat": "sport",
  "basis": "每100g粉(市售参考)",
  "goals": [
   "gain"
  ],
  "tags": {
   "meat": false,
   "seafood": false,
   "egg": false,
   "dairy": true,
   "nut": false
  },
  "quick": false,
  "snack": false,
  "kcal": 380,
  "p": 75,
  "c": 8,
  "f": 5,
  "fiber": 0,
  "na": 300,
  "k": 400,
  "ca": 600,
  "mg": 60,
  "fe": 0.5,
  "zn": 1,
  "vc": 0,
  "serving": {
   "n": 30,
   "unit": "克",
   "note": "约1勺"
  },
  "scenes": [
   "rec"
  ],
  "highlight": [
   "吸收慢,适合睡前/长时间空腹场景",
   "与乳清互补,但非必需"
  ],
  "tips": "多数人用乳清+睡前吃酸奶/奶酪就能覆盖,不必多买一瓶;注意产品纯度。",
  "pair": [
   {
    "name": "天然食物",
    "why": "补剂只是补充,营养优先从天然食物满足"
   }
  ]
 },
 {
  "id": "creatine",
  "name": "肌酸(一水肌酸)",
  "alias": "肌酸 · 一水肌酸",
  "emoji": "💊",
  "cat": "sport",
  "basis": "每100g粉",
  "goals": [
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
  "kcal": 0,
  "p": 0,
  "c": 0,
  "f": 0,
  "fiber": 0,
  "na": 0,
  "k": 0,
  "ca": 0,
  "mg": 0,
  "fe": 0,
  "zn": 0,
  "vc": 0,
  "serving": {
   "n": 3,
   "unit": "克",
   "note": "每日3~5g"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "运动补剂中证据最扎实的一种(力量/爆发)",
   "一水肌酸性价比最高,别买花哨“复合款”"
  ],
  "tips": "不需“冲击期”,每天3~5g长期吃即可;部分人轻微储水;肾病患者遵医嘱;选有第三方检测的品牌。",
  "pair": [
   {
    "name": "天然食物",
    "why": "补剂只是补充,营养优先从天然食物满足"
   }
  ]
 },
 {
  "id": "beta-alanine",
  "name": "β-丙氨酸",
  "alias": "β-丙氨酸",
  "emoji": "💊",
  "cat": "sport",
  "basis": "每100g粉",
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
  "kcal": 0,
  "p": 0,
  "c": 0,
  "f": 0,
  "fiber": 0,
  "na": 0,
  "k": 0,
  "ca": 0,
  "mg": 0,
  "fe": 0,
  "zn": 0,
  "vc": 0,
  "serving": {
   "n": 3,
   "unit": "克",
   "note": "分次服用"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "帮助缓冲肌肉酸感,提升1~4分钟高强度表现",
   "证据中等,不是人人有效"
  ],
  "tips": "常见副作用是皮肤发麻刺痛(无害但明显),可分小剂量吃;非必需,先练好基本功。",
  "pair": [
   {
    "name": "天然食物",
    "why": "补剂只是补充,营养优先从天然食物满足"
   }
  ]
 },
 {
  "id": "caffeine",
  "name": "咖啡因(补剂型)",
  "alias": "咖啡因片 · 无水咖啡因",
  "emoji": "☕",
  "cat": "sport",
  "basis": "每粒(约100~200mg)",
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
  "kcal": 0,
  "p": 0,
  "c": 0,
  "f": 0,
  "fiber": 0,
  "na": 0,
  "k": 0,
  "ca": 0,
  "mg": 0,
  "fe": 0,
  "zn": 0,
  "vc": 0,
  "serving": {
   "n": 1,
   "unit": "粒",
   "note": "约100~200mg咖啡因"
  },
  "scenes": [
   "pre",
   "comp"
  ],
  "highlight": [
   "循证提升耐力与警觉的补剂",
   "一杯黑咖啡同样是来源,不必上“片剂”"
  ],
  "tips": "按3~6mg/kg体重算单次;敏感者/高血压者谨慎;注意赛事对咖啡因的规则;下午后避免。",
  "pair": [
   {
    "name": "天然食物",
    "why": "补剂只是补充,营养优先从天然食物满足"
   }
  ]
 },
 {
  "id": "electrolyte",
  "name": "电解质冲剂",
  "alias": "电解质粉 · 冲剂",
  "emoji": "💧",
  "cat": "sport",
  "basis": "每份(约5g粉,按包装冲)",
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
  "kcal": 0,
  "p": 0,
  "c": 0,
  "f": 0,
  "fiber": 0,
  "na": 0,
  "k": 0,
  "ca": 0,
  "mg": 0,
  "fe": 0,
  "zn": 0,
  "vc": 0,
  "serving": {
   "n": 1,
   "unit": "条",
   "note": "按包装兑水500ml"
  },
  "scenes": [
   "comp",
   "rec"
  ],
  "highlight": [
   "高温/长时间大量出汗时快速补钠钾",
   "短训或日常饮食正常时用不上"
  ],
  "tips": "不同品牌钠含量差异大,看包装;别过量,肾病/高血压遵医嘱;平时靠饭菜里的盐就能补钠。",
  "pair": [
   {
    "name": "天然食物",
    "why": "补剂只是补充,营养优先从天然食物满足"
   }
  ]
 },
 {
  "id": "energy-gel",
  "name": "能量胶",
  "alias": "能量胶 · 运动凝胶",
  "emoji": "🧃",
  "cat": "sport",
  "basis": "每100g(常见1条约40g)",
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
  "kcal": 240,
  "p": 0,
  "c": 60,
  "f": 0,
  "fiber": 0,
  "na": 150,
  "k": 10,
  "ca": 0,
  "mg": 0,
  "fe": 0,
  "zn": 0,
  "vc": 0,
  "serving": {
   "n": 1,
   "unit": "条",
   "note": "约40g,约含25g碳水"
  },
  "scenes": [
   "comp"
  ],
  "highlight": [
   "比赛/长距离中快速补糖",
   "平时训练用不上,别当零食"
  ],
  "tips": "超过60~75分钟的高强度耐力运动才按需;先少量试肠胃耐受,比赛别试新。",
  "pair": [
   {
    "name": "天然食物",
    "why": "补剂只是补充,营养优先从天然食物满足"
   }
  ]
 },
 {
  "id": "energy-bar",
  "name": "能量棒/蛋白棒",
  "alias": "蛋白棒 · 能量棒",
  "emoji": "🍫",
  "cat": "sport",
  "basis": "每100g(市售参考,1条约50~60g)",
  "goals": [
   "maintain",
   "gain"
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
  "kcal": 380,
  "p": 25,
  "c": 42,
  "f": 12,
  "fiber": 5,
  "na": 250,
  "k": 200,
  "ca": 120,
  "mg": 50,
  "fe": 1.5,
  "zn": 1.5,
  "vc": 0,
  "serving": {
   "n": 1,
   "unit": "根",
   "note": "约60g"
  },
  "scenes": [
   "rec",
   "comp"
  ],
  "highlight": [
   "便携的碳水+蛋白,旅途/比赛方便",
   "很多“蛋白棒”糖分接近糖果,要学会看配料"
  ],
  "tips": "看营养表选蛋白>15g、糖<10g/根的更靠谱;日常还是优先天然食物。",
  "pair": [
   {
    "name": "天然食物",
    "why": "补剂只是补充,营养优先从天然食物满足"
   }
  ]
 },
 {
  "id": "fish-oil",
  "name": "鱼油(Omega-3)",
  "alias": "鱼油 · EPA/DHA",
  "emoji": "💊",
  "cat": "sport",
  "basis": "每粒(约1000mg鱼油)",
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
  "kcal": 9,
  "p": 0,
  "c": 0,
  "f": 1,
  "fiber": 0,
  "na": 0,
  "k": 0,
  "ca": 0,
  "mg": 0,
  "fe": 0,
  "zn": 0,
  "vc": 0,
  "serving": {
   "n": 1,
   "unit": "粒",
   "note": "约1000mg"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "EPA/DHA对心血管/关节/脑可能有益,证据有限",
   "食补优先:每周2~3次三文鱼等肥鱼"
  ],
  "tips": "看标签EPA+DHA总量(非“鱼油含量”);避免氧化腥味;服用抗凝药者遵医嘱。",
  "pair": [
   {
    "name": "天然食物",
    "why": "补剂只是补充,营养优先从天然食物满足"
   }
  ]
 },
 {
  "id": "vitamin-d3",
  "name": "维生素D3",
  "alias": "维D3 · 胆钙化醇",
  "emoji": "💊",
  "cat": "sport",
  "basis": "每粒(常见400~1000IU)",
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
  "kcal": 0,
  "p": 0,
  "c": 0,
  "f": 0,
  "fiber": 0,
  "na": 0,
  "k": 0,
  "ca": 0,
  "mg": 0,
  "fe": 0,
  "zn": 0,
  "vc": 0,
  "serving": {
   "n": 1,
   "unit": "粒",
   "note": "常见400~1000IU"
  },
  "scenes": [
   "daily"
  ],
  "highlight": [
   "日照不足/室内训练人群易缺D,影响骨与免疫",
   "想补先查血(25-OH-D),别盲目大剂量"
  ],
  "tips": "脂溶性维生素过量有风险,请遵医嘱剂量;鱼肝油≠维D,别混着乱吃。",
  "pair": [
   {
    "name": "天然食物",
    "why": "补剂只是补充,营养优先从天然食物满足"
   }
  ]
 }
];

const FOODS = FOODS_PROTEIN.concat(FOODS_STAPLE, FOODS_VEG, FOODS_FRUIT, FOODS_FAT, FOODS_DRINK, FOODS_SPORT);

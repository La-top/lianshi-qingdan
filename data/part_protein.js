/* 食物库 · protein */
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

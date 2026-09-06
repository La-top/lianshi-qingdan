/* 练食清单 · 食物数据(约45种,营养为每100g参考值,来源见「关于」页) */
const FOODS_A = [
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
  "emoji": "🥜", "pic": "assets/img/food/chickpea.png",
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
  "tips": "干豆密度高,当零食一人份 30~40g 就够;超市也有煮熟罐头,开罐即食更省事。"
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
 }
];

const FOODS_B = [
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
  "emoji": "🌶️", "pic": "assets/img/food/bell-pepper.png",
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
  "tips": "红椒黄椒比青椒甜、维C也更高;彩椒别炒太软,脆一点更好吃。"
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
  "emoji": "🥦", "pic": "assets/img/food/edamame.png",
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
  "tips": "毛豆是豆类,碳水和热量比叶菜高,当加餐一小碗(约带壳 200g)就好。"
 },
 {
  "id": "blueberry",
  "name": "蓝莓",
  "alias": "越橘",
  "emoji": "🍇", "pic": "assets/img/food/blueberry.png",
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
  "tips": "新鲜和冷冻营养差别不大,冷冻的通常便宜不少,做酸奶碗直接用。"
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
  "emoji": "🛢️", "pic": "assets/img/food/olive-oil.png",
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
  "tips": "再健康的油也是油,一人一餐 5~10g 足够;初榨橄榄油适合凉拌,高温油炸交给烟点高的油。"
 }
];

const FOODS = FOODS_A.concat(FOODS_B);

/* 食物库 · sport */
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

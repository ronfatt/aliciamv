// 6 位核心主角全新换装视觉效果资产数据 (全面更替新版设计)
// 包含：全新第一套（国潮嘻哈风 5款高定）与 全新第二套（盛典中国风 5款非遗）
// 支持单独各别卡片、原定妆对比、微距工艺特写、AI LoRA 提示词

export const characterWardrobeData = {
  wardrobeSets: [
    {
      id: "set1_streetwear",
      name: "造型一：全新国潮嘻哈街舞风 (Contemporary Chinese Hip-Hop Streetwear)",
      shortName: "第一套：国潮嘻哈风",
      usageBadge: "Intro 街舞开局 · 舞狮互动 · Verse 2 燃舞台 · Outro 뛰 终极跳跃",
      colorTheme: "from-red-600/20 via-orange-600/10 to-amber-600/20",
      accentBorder: "border-red-500/40",
      activeTabColor: "bg-red-600 text-white shadow-lg shadow-red-600/30",
      options: [
        {
          id: "option_a",
          name: "方案 A：《红韵新潮高定舞台版》",
          code: "HIP-HOP 2026-A",
          vibe: "红色扣饰 · 云纹夹克 · 斜织带机能 · 丝绸工装",
          description: "高饱和度正红与暗黑撞色，唐装盘扣与现代嘻哈工装利落廓形，专为齐舞爆发力定制"
        },
        {
          id: "option_b",
          name: "方案 B：《红丝唐装与云纹潮流版》",
          code: "HIP-HOP 2026-B",
          vibe: "真丝光泽 · 棒球领撞色 · 格纹拼边 · 动感舞台",
          description: "丝绸面料与云纹提花剪裁，在摄影机聚光灯下反光细腻奢华，充满现代青春动感"
        }
      ]
    },
    {
      id: "set2_qipao",
      name: "造型二：全新盛典中国风 (Grand Chinese Heritage & Dance Gown)",
      shortName: "第二套：盛典中国风",
      usageBadge: "京腔开门红 · 年夜饭长桌 · 阿公阿嬷温情记忆 · 万盏心灯大合唱",
      colorTheme: "from-amber-600/20 via-red-600/10 to-rose-600/20",
      accentBorder: "border-amber-500/40",
      activeTabColor: "bg-gradient-to-r from-amber-600 to-red-600 text-white shadow-lg shadow-amber-600/30",
      options: [
        {
          id: "option_a",
          name: "方案 A：《中国风盛典华章》",
          code: "HERITAGE 2026-A",
          vibe: "绣金云肩 · 桃枝金绣旗袍 · 朱红马面裙 · 盛典唐装",
          description: "汇聚云肩、马面裙、金绣唐装与桃枝旗袍等多重非遗国风精粹，端庄大气"
        },
        {
          id: "option_b",
          name: "方案 B：《桃韵金枝华裳舞裙》",
          code: "HERITAGE 2026-B",
          vibe: "生机桃枝 · 繁花织锦 · 宽袍大袖 · 礼仪之邦",
          description: "桃枝金绣呼应全新世外桃源仙境，暗夜心灯前呈现电影级质感"
        }
      ]
    }
  ],

  // 6 位主角在不同服装套系下的独立视觉数据 (1位特邀京腔领唱 + 5位主唱)
  characters: [
    {
      id: "char_alicia",
      name: "Alicia (特邀领唱)",
      role: "特邀领唱 · 京腔国粹 · 归家导航",
      tagline: "红灯笼高挂，全城在欢呼！归家的导航，幸福已切入！",
      originalCasting: {
        title: "原始定妆：知性都市西装",
        vibe: "灰色西装 · 复古红框眼镜 · 现代知性融合国风红灯笼",
        image: "/characters/char_01_office.jpg"
      },
      wardrobeLooks: {
        set1_streetwear: {
          option_a: {
            title: "红丝唐装街头工装造型 (特邀领唱专属)",
            costumeDesc: "经典立领红色真丝缎面短外套，黑色翻折袖口，胸前传统手工红黑双色盘扣，搭配高腰深色束脚工装裤与马丁靴，将传统京腔名旦的气度融入当代潮流舞台。",
            detailTitle: "红丝缎面与手工盘扣工艺",
            detailDesc: "真丝微光面料，立领黑边轮廓，手工精编红黑盘扣，利落具有东方威严。",
            image: "/wardrobe/set1_xihua_05_moon_alicia.png",
            detailImage: "/wardrobe/crops/set1_xihua_05_detail.jpg",
            highlightPills: ["特邀领唱", "红丝唐装", "黑边立领", "戏曲跨界"],
            loraPrompt: "Alicia, young Asian female lead singer, glasses, blunt bangs, stylish red Chinese contemporary silk jacket, black cuffs, frog button closures, black street cargo pants, dramatic stage rim lighting --ar 3:4"
          },
          option_b: {
            title: "新中式红色扣饰街舞装 (知性酷飒版)",
            costumeDesc: "高耸立领对襟设计，胸前整齐排列金色纽扣与红色盘扣，修身立裁版型，凸显知性大气的特邀领唱风范。",
            detailTitle: "立领金属扣与红缎细节",
            detailDesc: "红缎微光肌理，前襟金色搭扣在聚光灯下反光夺目。",
            image: "/wardrobe/set1_xihua_02_kitty.png",
            detailImage: "/wardrobe/crops/set1_xihua_02_detail.jpg",
            highlightPills: ["特邀领唱", "红色立领", "金属搭扣", "修身廓形"],
            loraPrompt: "Alicia, young Asian female singer, glasses, blunt bangs, structured red cropped mandarin collar jacket, gold buckle closures, modern stage lighting --ar 3:4"
          }
        },
        set2_qipao: {
          option_a: {
            title: "桃枝金绣红韵舞台旗袍 (京腔国粹专属)",
            costumeDesc: "富丽堂皇的立领斜襟传统旗袍，金线立体打籽绣夭矫桃枝自右肩蔓延至裙摆，手捧发光暖黄心灯，呈现大女主领唱之华美与祥和。",
            detailTitle: "桃枝金绣与斜襟细节",
            detailDesc: "纯金丝手工盘绣桃花枝干，斜襟处温润玉扣，尽显国风非遗匠心。",
            image: "/wardrobe/set2_zhongguo_02_moon_alicia.png",
            detailImage: "/wardrobe/crops/set2_zhongguo_02_detail.jpg",
            highlightPills: ["特邀领唱", "桃枝金绣", "斜襟玉扣", "京腔华彩"],
            loraPrompt: "Alicia, young Asian woman with bangs and glasses, royal red Chinese qipao with gold peach blossom embroidery, holding glowing heart lantern, warm golden bokeh --ar 3:4"
          },
          option_b: {
            title: "朱红马面裙梅云金绣舞台套装 (大国华章版)",
            costumeDesc: "朱红色传统马面裙摆，梯形对褶处绣有金色梅花与吉祥祥云纹样，上身配大红立领长袖短袄，气度非凡。",
            detailTitle: "马面金绣褶裥工艺",
            detailDesc: "马面裙宽大平整裙门，重工刺绣梅枝祥云，步伐稳重威仪。",
            image: "/wardrobe/set2_zhongguo_04_kitty.png",
            detailImage: "/wardrobe/crops/set2_zhongguo_04_detail.jpg",
            highlightPills: ["特邀领唱", "朱红马面", "梅云金绣", "礼仪之邦"],
            loraPrompt: "Alicia, young Asian lead singer, glasses, elegant traditional Chinese Mamian skirt in scarlet red with golden plum blossoms and clouds embroidery, regal ceremonial posture --ar 3:4"
          }
        }
      }
    },
    {
      id: "char_moon",
      name: "Moon",
      role: "主唱 · Intro 启航 · 唯美蓝调之声",
      tagline: "点燃第一盏灯火，引万千繁星共鸣",
      originalCasting: {
        title: "原始定妆：皇家钴蓝风琴褶礼服",
        vibe: "优雅主唱 · 飘带领结 · 钻石耳坠 · 纯净深情",
        image: "/characters/char_06_moon_hd.jpg"
      },
      wardrobeLooks: {
        set1_streetwear: {
          option_a: {
            title: "红丝唐装街头工装造型 (Intro 领航款)",
            costumeDesc: "经典正红微光真丝短外套，手工黑色盘扣点缀门襟，黑色反折袖口呼应下身高腰黑色束脚工装裤与马丁靴，保留标志性波浪长卷发与钻石耳坠，以从容高贵的声乐姿态领唱全曲序章。",
            detailTitle: "丝绸微光与手工黑盘扣",
            detailDesc: "丝绸微光提花面料，立领黑边轮廓，利落且具有东方威严。",
            image: "/wardrobe/set1_xihua_05_moon_alicia.png",
            detailImage: "/wardrobe/crops/set1_xihua_05_detail.jpg",
            highlightPills: ["主唱", "Intro 领航", "红丝唐装", "钻石耳饰"],
            loraPrompt: "Moon, elegant Asian female singer, wavy dark brown hair, red Chinese contemporary streetwear jacket, black cuffs, diamond drop earrings, red cargo dance pants, concert stage lighting --ar 3:4"
          },
          option_b: {
            title: "红色斜织带连帽街舞套装 (动感蓝调版)",
            costumeDesc: "红黑几何回纹织带封边连帽短款外套，配宽松束脚红色工装裤，温婉中不失年轻舞台动感。",
            detailTitle: "连帽斜织带与运动廓形",
            detailDesc: "黑底红回纹连帽斜襟织带包边，兼具保暖与街舞动感。",
            image: "/wardrobe/set1_xihua_01_yinyin.png",
            detailImage: "/wardrobe/crops/set1_xihua_01_detail.jpg",
            highlightPills: ["主唱", "连帽斜织带", "运动工装", "唯美之声"],
            loraPrompt: "Moon, elegant Asian female singer, wavy dark hair, cropped hooded red jacket with geometric border tape, red cargo pants, studio stage --ar 3:4"
          }
        },
        set2_qipao: {
          option_a: {
            title: "桃枝金绣红韵舞台旗袍 (唯美 Intro 华服)",
            costumeDesc: "古典立领斜襟旗袍，素雅金色桃枝与春桃刺绣，手捧发光暖黄心灯，将主唱的温婉深情与春节大爱完美融为一体。",
            detailTitle: "金梅斜襟与温润心灯",
            detailDesc: "精致珠扣与胸前金线枝蔓，心灯透出的光芒柔和照亮脸庞。",
            image: "/wardrobe/set2_zhongguo_02_moon_alicia.png",
            detailImage: "/wardrobe/crops/set2_zhongguo_02_detail.jpg",
            highlightPills: ["主唱", "桃枝金绣", "暖光心灯", "优雅深情"],
            loraPrompt: "Moon, elegant Asian woman with wavy dark hair and diamond earrings, red silk qipao, gold floral embroidery, holding glowing heart lantern, warm golden bokeh --ar 3:4"
          },
          option_b: {
            title: "绣金云肩红舞裙 (仙气飘逸版)",
            costumeDesc: "领口层叠对称绣金祥云如意云肩，下摆大红色轻纱长裙如流云倾泻，伴随声乐高潮舒展如仙子降临。",
            detailTitle: "传统如意云肩刺绣",
            detailDesc: "金丝勾边如意云纹，珠串流苏轻垂，步步生莲。",
            image: "/wardrobe/set2_zhongguo_01_yinyin.png",
            detailImage: "/wardrobe/crops/set2_zhongguo_01_detail.jpg",
            highlightPills: ["主唱", "绣金云肩", "大摆红裙", "仙气天籁"],
            loraPrompt: "Moon, elegant Asian singer, wavy hair, imperial red dress with gold embroidered cloud collar, ethereal flowing chiffon skirt, concert hall backlight --ar 3:4"
          }
        }
      }
    },
    {
      id: "char_coco",
      name: "Coco",
      role: "主唱 · 街舞活力 · 嘻哈 Rap · Swag 担当",
      tagline: "舞狮鼓声传千里，We never lay low / 乘风破浪的先辈，Swag 刻在血脉",
      originalCasting: {
        title: "原始定妆：街头 Oversized 酷黑潮服",
        vibe: "巴黎世家宽松T · 双编发 · 翡翠吊坠 · 马丁靴",
        image: "/characters/char_03_coco_hd.jpg"
      },
      wardrobeLooks: {
        set1_streetwear: {
          option_a: {
            title: "红色云纹短袖唐装棒球夹克 (街舞 Swag 款)",
            costumeDesc: "宽松大廓形正红短袖唐装夹克，肩袖拼接传统金色祥云暗纹，棒球领配黑红罗纹收口，内搭黑色紧身短T，悬垂标志性翡翠玉佩，超宽腿红色工装裤支撑极速街舞动作。",
            detailTitle: "云纹提花与棒球领罗纹",
            detailDesc: "袖臂云纹立体压胶贴布 + 前胸纯手结传统盘扣，黑红撞色极具视觉张力。",
            image: "/wardrobe/set1_xihua_03_coco.png",
            detailImage: "/wardrobe/crops/set1_xihua_03_detail.jpg",
            highlightPills: ["主唱", "云纹棒球夹克", "短袖唐装", "Swag 气场"],
            loraPrompt: "Coco, curvy Asian dancer, double braids, red short-sleeve Chinese streetwear baseball jacket with gold cloud patterns, jade necklace, oversized red cargo pants --ar 3:4"
          },
          option_b: {
            title: "红黑格纹街舞运动造型 (活力嘻哈版)",
            costumeDesc: "红黑交错英伦格纹拼接中式立领运动装，露脐修身剪裁，配搭黑色双侧机能工装大口袋，更显野性与舞台节奏感。",
            detailTitle: "红黑格纹面料与机能口袋",
            detailDesc: "高密织造红黑千鸟格与正红亮绸拼接，双侧拉链机能搭扣。",
            image: "/wardrobe/set1_xihua_04_sam.png",
            detailImage: "/wardrobe/crops/set1_xihua_04_detail.jpg",
            highlightPills: ["主唱", "红黑格纹", "露脐运动", "律动爆棚"],
            loraPrompt: "Coco, curvy Asian hip-hop dancer, double braids, red and black plaid cropped dance top, red track cargo pants, combat boots --ar 3:4"
          }
        },
        set2_qipao: {
          option_a: {
            title: "朱红金绣唐装阔腿裤舞台装 (利落潮酷款)",
            costumeDesc: "传统朱红真丝唐装上衣，前胸盘金绣节节高升竹影与缠枝金莲，下身改良为飘逸垂坠阔腿裤，保留嘻哈舞者的率性利落与传统年味尊贵。",
            detailTitle: "盘金缠枝莲纹与阔腿立裁",
            detailDesc: "高立领金色滚边，腰部自然收拢，下摆阔腿裤利落舒展。",
            image: "/wardrobe/set2_zhongguo_03_coco.png",
            detailImage: "/wardrobe/crops/set2_zhongguo_03_detail.jpg",
            highlightPills: ["主唱", "唐装阔腿裤", "金绣莲纹", "率性干练"],
            loraPrompt: "Coco, curvy Asian female singer, double braids, regal red silk Tang suit top with gold lotus embroidery, wide-leg tailored red trousers, confident modern stance --ar 3:4"
          },
          option_b: {
            title: "桃枝金绣红韵舞台旗袍 (自信大女主款)",
            costumeDesc: "大朵金色桃花沿斜襟盛放，圆领包边点缀金色纽结，展示大码女孩温润柔美又自信的一面。",
            detailTitle: "金桃盛放与侧开衩细节",
            detailDesc: "立体金线刺绣桃花，侧开衩红绒包边，端庄从容。",
            image: "/wardrobe/set2_zhongguo_02_moon_alicia.png",
            detailImage: "/wardrobe/crops/set2_zhongguo_02_detail.jpg",
            highlightPills: ["主唱", "桃枝盛放", "传统圆领", "自信从容"],
            loraPrompt: "Coco, curvy Asian dancer with double braids, full-length red traditional qipao with gold peach blossom embroidery along skirt, gold frog collar --ar 3:4"
          }
        }
      }
    },
    {
      id: "char_kitty",
      name: "Kitty",
      role: "主唱 · 根脉深植 · 敬茶奉献 · 成熟大爱",
      tagline: "外面的风浪再大，根脉依然在心底绕 / 敬上一杯热茶，传承不只是一个 Title",
      originalCasting: {
        title: "原始定妆：干练盘发无袖立领衬衫",
        vibe: "黑色立领 · 优雅发簪 · 手臂纹身 · 稳重大爱",
        image: "/characters/char_04_kitty_hd.jpg"
      },
      wardrobeLooks: {
        set1_streetwear: {
          option_a: {
            title: "新中式红色扣饰街舞装 (干练长姐款)",
            costumeDesc: "利落短款立领红色夹克，正中排布精致传统红色纽结与盘扣，搭配战术腰带与抽绳口袋工装裤，展现成熟女性干练果敢的领导力。",
            detailTitle: "立领纽结与抽绳扣带",
            detailDesc: "工整密实的前襟红色扣饰，利落立体肩线，沉稳有型。",
            image: "/wardrobe/set1_xihua_02_kitty.png",
            detailImage: "/wardrobe/crops/set1_xihua_02_detail.jpg",
            highlightPills: ["主唱", "红色纽结", "立领工装", "干练飒爽"],
            loraPrompt: "Kitty, stylish Asian woman, updo hairstyle, structured red mandarin collar streetwear jacket with traditional red button knots, red tactical cargo pants --ar 3:4"
          },
          option_b: {
            title: "红丝唐装街头工装造型 (内敛深沉版)",
            costumeDesc: "整身采用暗红提花真丝面料，纯黑侧拼条和黑色盘扣突显修长身形，沉稳中蕴含内敛锋芒。",
            detailTitle: "丝绸暗纹提花与黑拼边",
            detailDesc: "微光丝质暗纹质感 + 哑光黑布盘扣，高贵沉着。",
            image: "/wardrobe/set1_xihua_05_moon_alicia.png",
            detailImage: "/wardrobe/crops/set1_xihua_05_detail.jpg",
            highlightPills: ["主唱", "真丝提花", "黑拼边细节", "成熟气场"],
            loraPrompt: "Kitty, elegant Asian woman, dark red silk Tang jacket with black contrast trim, black frog closures, red cargo trousers --ar 3:4"
          }
        },
        set2_qipao: {
          option_a: {
            title: "朱红马面裙梅云金绣舞台套装 (敬茶端庄款)",
            costumeDesc: "高耸立领满绣回纹金线，搭配非遗朱红马面裙，裙门中央以金线盘绣傲雪寒梅与如意青云，象征敬茶传承的周正规矩与源远流长。",
            detailTitle: "马面裙门梅枝金绣",
            detailDesc: "规整传统马面褶裥，行止间金梅若现，大度雍容。",
            image: "/wardrobe/set2_zhongguo_04_kitty.png",
            detailImage: "/wardrobe/crops/set2_zhongguo_04_detail.jpg",
            highlightPills: ["主唱", "朱红马面", "金梅回纹", "敬茶端庄"],
            loraPrompt: "Kitty, elegant high bun hairstyle, regal scarlet red Chinese Mamian skirt with golden plum blossom branches, high collar red jacket, dignified tea ceremony posture --ar 3:4"
          },
          option_b: {
            title: "朱红金绣唐装阔腿裤舞台装 (从容典雅版)",
            costumeDesc: "挺拔修身立领短唐装，袖口和下摆金丝包边，剪裁线条挺拔，宛若名门长姐端坐敬茶，从容典雅。",
            detailTitle: "回纹金绣与立领细节",
            detailDesc: "对称回字锦纹金线，垂坠真丝阔腿裤走动生风。",
            image: "/wardrobe/set2_zhongguo_03_coco.png",
            detailImage: "/wardrobe/crops/set2_zhongguo_03_detail.jpg",
            highlightPills: ["主唱", "立领金绣", "对称包边", "长姐气度"],
            loraPrompt: "Kitty, high standing collar silk jacket with gold embroidery, tailored red wide trousers, royal dignified mature Asian woman --ar 3:4"
          }
        }
      }
    },
    {
      id: "char_yinyin",
      name: "茵茵 (YIN YIN)",
      role: "主唱 · 优雅旋转 · 慈爱温润 · 生命 Idol",
      tagline: "原来最珍贵的福气，不是自己多耀眼，而是别人需要时候，你化身那道光线",
      originalCasting: {
        title: "原始定妆：白色短西装黑长裙芭蕾定妆",
        vibe: "芭蕾手势 · 蝴蝶胸针 · 慈爱温润 · 纯净生命之光",
        image: "/characters/char_02_yinyin_hd.jpg"
      },
      wardrobeLooks: {
        set1_streetwear: {
          option_a: {
            title: "红色斜织带连帽街舞套装 (K-Pop 甜辣款)",
            costumeDesc: "红黑回纹几何织带封边的连帽连身外套，斜向拉链与短款廓形，在街舞中兼具甜美爱心与前卫 K-Pop 偶像舞台感。",
            detailTitle: "连帽斜襟织带与哑光扣",
            detailDesc: "黑底红回纹连帽斜襟织带包边 + 哑光质感纽扣，跳跃动作灵动吸睛。",
            image: "/wardrobe/set1_xihua_01_yinyin.png",
            detailImage: "/wardrobe/crops/set1_xihua_01_detail.jpg",
            highlightPills: ["主唱", "连帽斜襟", "几何织带", "生命 Idol"],
            loraPrompt: "Yin Yin, pretty Asian dancer with highlighted hair, cropped hooded red jacket with geometric border tape, red cargo pants --ar 3:4"
          },
          option_b: {
            title: "新中式红色扣饰街舞装 (偶像酷飒版)",
            costumeDesc: "利落短款立领夹克搭配侧边黑色工装大口袋压折裤，立领扣饰呼应芭蕾修长颈部线条，动静相宜。",
            detailTitle: "立领扣带与侧拼条",
            detailDesc: "精致立领盘扣，短上衣凸显黄金身段比例。",
            image: "/wardrobe/set1_xihua_02_kitty.png",
            detailImage: "/wardrobe/crops/set1_xihua_02_detail.jpg",
            highlightPills: ["主唱", "立领修身", "黑红撞色", "舞台焦点"],
            loraPrompt: "Yin Yin, pretty Asian dancer, tailored red cropped jacket with red frog button details, red cargo trousers with black accent, smiling --ar 3:4"
          }
        },
        set2_qipao: {
          option_a: {
            title: "绣金云肩红舞裙 (生命 Idol 芭蕾旋转款)",
            costumeDesc: "双肩披覆传统重工金绣如意如意云肩，层叠轻盈朱红大摆舞裙，在溪畔与石台上芭蕾大跳和旋转时，红绸如光羽漫天绽放，极具神圣慈爱美感。",
            detailTitle: "金丝如意云肩与珠玉流苏",
            detailDesc: "云肩如意形轮廓，手工盘金线绣连绵春桃与祥云，流光溢彩。",
            image: "/wardrobe/set2_zhongguo_01_yinyin.png",
            detailImage: "/wardrobe/crops/set2_zhongguo_01_detail.jpg",
            highlightPills: ["主唱", "绣金云肩", "大摆舞裙", "芭蕾旋转"],
            loraPrompt: "Yin Yin, radiant smiling dancer, exquisite Chinese red gown with golden embroidered cloud collar, ethereal flowing chiffon skirt spinning, ballet leap pose --ar 3:4"
          },
          option_b: {
            title: "绯红桃枝汉服舞装 (灵动大袖仙子款)",
            costumeDesc: "宽袍大袖汉服改良舞裙，胸前浅金桃枝刺绣，广袖飘带随风翻飞，手捧发光心灯，温婉明媚如冬去春来的第一缕阳光。",
            detailTitle: "汉服广袖与桃枝金绣",
            detailDesc: "轻盈双层雪纺大袖，金线勾勒桃花盛放，飘逸非凡。",
            image: "/wardrobe/set2_zhongguo_05_sam.png",
            detailImage: "/wardrobe/crops/set2_zhongguo_05_detail.jpg",
            highlightPills: ["主唱", "汉服广袖", "桃枝金绣", "慈爱温润"],
            loraPrompt: "Yin Yin, elegant dancer, flowing crimson red Hanfu dance dress with gold peach blossom branch embroidery, long flowing sleeves, holding glowing lantern --ar 3:4"
          }
        }
      }
    },
    {
      id: "char_sam",
      name: "Sam",
      role: "主唱 · 现代舞动 · 南洋深海 · 青春燃力",
      tagline: "穿破天空的鞭炮，那是世代的记号 / 跨越南洋的深海，一路燃到这舞台",
      originalCasting: {
        title: "原始定妆：简约黑T牛仔修身舞服",
        vibe: "挑染公主半编发 · 圆环耳饰 · 现代舞爆发力",
        image: "/characters/char_05_sam_hd.jpg"
      },
      wardrobeLooks: {
        set1_streetwear: {
          option_a: {
            title: "红黑格纹街舞运动造型 (现代舞爆发力款)",
            costumeDesc: "短款露脐运动上衣，经典红黑千鸟格纹拼接，立领拉链，双袖白道运动饰边，尽显现代舞者紧致腹肌与腾空跳跃的强大爆发力。",
            detailTitle: "红黑千鸟格与运动半拉链",
            detailDesc: "高弹速干面料，千鸟格印花与纯红缎面对比，爆发力十足。",
            image: "/wardrobe/set1_xihua_04_sam.png",
            detailImage: "/wardrobe/crops/set1_xihua_04_detail.jpg",
            highlightPills: ["主唱", "红黑格纹", "露脐卫衣", "现代舞爆发力"],
            loraPrompt: "Sam, athletic Asian female dancer, blonde highlighted half-up hair, cropped red and black checkered sports zip pullover, red baggy track pants, energetic dance jump pose --ar 3:4"
          },
          option_b: {
            title: "红色云纹短袖唐装棒球夹克 (街头工装版)",
            costumeDesc: "短袖大版型夹克搭配工装多袋长裤，腰袢悬挂金属链条，伴随舞步碰撞，野性又时尚。",
            detailTitle: "棒球短袖与云纹贴布",
            detailDesc: "肩部立体云纹压花，内搭黑背心，适合大幅度身体扭转。",
            image: "/wardrobe/set1_xihua_03_coco.png",
            detailImage: "/wardrobe/crops/set1_xihua_03_detail.jpg",
            highlightPills: ["主唱", "短袖唐装", "云纹暗扣", "青春燃力"],
            loraPrompt: "Sam, athletic Asian dancer, red short sleeve bomber jacket with Chinese frog buttons, red wide-leg street dance pants, dynamic jump --ar 3:4"
          }
        },
        set2_qipao: {
          option_a: {
            title: "绯红桃枝汉服舞装 (南洋深海跨洋舞动款)",
            costumeDesc: "改良大袖汉式舞裙，绯红真丝面料如跨越南洋的壮阔晚霞，胸前与广袖缘绣金桃枝与浪花纹，现代舞腾空时双袖如翼，美不胜收。",
            detailTitle: "广袖浪纹金绣与飘带",
            detailDesc: "金线勾勒海浪与春桃，高开衩裙摆适应现代舞大跨步动作。",
            image: "/wardrobe/set2_zhongguo_05_sam.png",
            detailImage: "/wardrobe/crops/set2_zhongguo_05_detail.jpg",
            highlightPills: ["主唱", "绯红汉服", "大袖翻飞", "南洋跨洋"],
            loraPrompt: "Sam, athletic graceful Asian dancer, crimson red Hanfu dance gown with golden peach blossoms and wave embroidery, dramatic sweeping sleeves, dynamic leap --ar 3:4"
          },
          option_b: {
            title: "绣金云肩红舞裙 (古典律动华裳版)",
            costumeDesc: "精巧云肩收束于肩颈，下摆红绸长裙兼顾舞动张力，金丝在灯光下划出金色光弧。",
            detailTitle: "立体云肩与金丝压褶",
            detailDesc: "手工密褶腰身，金色祥云如意云肩固定，稳重大气。",
            image: "/wardrobe/set2_zhongguo_01_yinyin.png",
            detailImage: "/wardrobe/crops/set2_zhongguo_01_detail.jpg",
            highlightPills: ["主唱", "精巧云肩", "金丝光弧", "舞台聚光"],
            loraPrompt: "Sam, red couture traditional dance dress with golden cloud collar, sweeping full red skirt, modern energetic dance pose --ar 3:4"
          }
        }
      }
    }
  ]
};

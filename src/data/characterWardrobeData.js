// 5 位核心主角换装视觉效果资产数据
// 包含：第一套（国潮工装 A/B 方案）与 第二套（盛典旗袍 A/B 方案）
// 支持单独各别卡片、原定妆对比、微距工艺特写、AI LoRA 提示词

export const characterWardrobeData = {
  wardrobeSets: [
    {
      id: "set1_streetwear",
      name: "造型一：国潮嘻哈工装 (Dance & Hip-Hop Streetwear)",
      shortName: "第一套：国潮嘻哈工装",
      usageBadge: "Intro 街舞开局 · 舞狮互动 · Verse 2 燃舞台 · Outro 뛰 终极跳跃",
      colorTheme: "from-red-600/20 via-orange-600/10 to-amber-600/20",
      accentBorder: "border-red-500/40",
      activeTabColor: "bg-red-600 text-white shadow-lg shadow-red-600/30",
      options: [
        {
          id: "option_a",
          name: "方案 A：《红韵 (RED RHYTHM)》",
          code: "LOOK 02",
          vibe: "机能活力 · K-Pop 律动 · 抽绳工装",
          description: "抽绳大口袋工装裤与短款夹克，适合大幅度编舞与高空跳跃动作"
        },
        {
          id: "option_b",
          name: "方案 B：《红潮 (RED DYNASTY)》",
          code: "MV WARDROBE",
          vibe: "暗纹提花 · 高定国潮 · 盘扣古币",
          description: "丝绸云纹提花面料与黑红高反差撞色，更显舞台光影的奢华质感"
        }
      ]
    },
    {
      id: "set2_qipao",
      name: "造型二：盛典金红旗袍 (Gala & Heritage Qipao)",
      shortName: "第二套：盛典金红旗袍",
      usageBadge: "京腔开门红 · 年夜饭长桌 · 阿公阿嬷温情记忆 · 万盏心灯大合唱",
      colorTheme: "from-amber-600/20 via-red-600/10 to-rose-600/20",
      accentBorder: "border-amber-500/40",
      activeTabColor: "bg-gradient-to-r from-amber-600 to-red-600 text-white shadow-lg shadow-amber-600/30",
      options: [
        {
          id: "option_a",
          name: "方案 A：《和韵新春 (SCARLET HARMONY)》",
          code: "QIPAO COLLECTION",
          vibe: "四季花卉 · 温润典雅 · 珠联璧合",
          description: "菊花、梅花、银杏自然植物意象，文雅素洁，书香新春氛围"
        },
        {
          id: "option_b",
          name: "方案 B：《金韵华裳 (RED & GOLD)》",
          code: "QIPAO COLLECTION",
          vibe: "璀璨金绣 · 凤羽兰影 · 舞台聚光女王",
          description: "重工真金丝刺绣，在暗夜与心灯前反光极度耀眼，高定电影质感"
        }
      ]
    }
  ],

  // 5 位主角在不同服装套系下的独立视觉数据
  characters: [
    {
      id: "char_alicia",
      name: "Alicia (京腔领唱)",
      role: "京腔国粹 · 归家导航",
      tagline: "红灯笼高挂，全城在欢呼！归家的导航，幸福已切入！",
      originalCasting: {
        title: "原始定妆：知性都市西装",
        vibe: "灰色西装 · 复古红框眼镜 · 现代打工人意象",
        image: "/characters/char_01_office.jpg"
      },
      wardrobeLooks: {
        // 第一套工装（统一舞台战袍设定）
        set1_streetwear: {
          option_a: {
            title: "国潮云纹立领战袍 x 潮酷工装裤",
            costumeDesc: "经典大红立领短外套，金丝云纹盘扣，高腰宽松束脚工装裤配黑色马丁靴，保留标志性复古眼镜，融入京腔唱腔手势。",
            detailTitle: "金丝云纹与盘扣工艺",
            detailDesc: "胸前四道手工编织金色盘扣，双肩与下摆重工金绣云纹。",
            image: "/wardrobe_crops/set1_alicia.jpg",
            detailImage: "/wardrobe_crops/set1_alicia_detail.jpg",
            highlightPills: ["金丝云纹", "中式盘扣", "束脚工装裤", "舞台光效"],
            loraPrompt: "Alicia, young Asian singer, short blunt bangs, round glasses, red Chinese contemporary streetwear jacket, gold cloud embroidery, frog buttons, red cargo dance pants, combat boots, dynamic stage lighting --ar 3:4"
          },
          option_b: {
            title: "黑红撞色提花盘扣战袍 (Red Dynasty)",
            costumeDesc: "暗红提花绸缎拼接黑色反折袖口，胸口黑金双色盘扣，更具现代摇滚与京腔戏曲的跨界气场。",
            detailTitle: "云纹提花与手工黑盘扣",
            detailDesc: "丝绸微光提花面料，立领黑边轮廓，利落且具有东方威严。",
            image: "/wardrobe_crops/set1_alicia.jpg",
            detailImage: "/wardrobe_crops/set1_alicia_detail.jpg",
            highlightPills: ["暗纹提花", "黑边立领", "戏曲跨界", "舞台大主唱"],
            loraPrompt: "Alicia, young Asian female lead singer, glasses, blunt bangs, dark red jacquard frog button jacket, black cuffs, red cargo dance pants, dramatic rim lighting --ar 3:4"
          }
        },
        // 第二套旗袍
        set2_qipao: {
          option_a: {
            title: "四季繁花织锦旗袍 x 手捧心灯 (Scarlet Harmony)",
            costumeDesc: "古典立领斜襟旗袍，素雅金色梅花与金菊刺绣，手捧发光暖黄心灯，将传统京腔的温婉与春节大爱完美融为一体。",
            detailTitle: "金梅斜襟与温润心灯",
            detailDesc: "精致珠扣与胸前金线枝蔓，心灯透出的光芒柔和照亮脸庞。",
            image: "/wardrobe_crops/set2_alicia.jpg",
            detailImage: "/wardrobe_crops/set2_alicia_detail.jpg",
            highlightPills: ["金梅刺绣", "暖光心灯", "珠玉斜襟", "新春祥和"],
            loraPrompt: "Alicia, young Asian woman with bangs and glasses, red silk qipao, gold floral embroidery, holding glowing heart lantern, warm golden bokeh --ar 3:4"
          },
          option_b: {
            title: "凤舞九天重工金绣真丝旗袍 (Red & Gold)",
            costumeDesc: "全红真丝缎面旗袍，胸口金凤展翅腾飞刺绣，下摆金牡丹层叠绽放，手捧心灯，呈现大女主领唱之华美。",
            detailTitle: "金凤腾飞重工盘金绣",
            detailDesc: "金线立体打籽绣金凤，凤尾蔓延至侧边开衩，珠光璀璨。",
            image: "/wardrobe_crops/set2_alicia.jpg",
            detailImage: "/wardrobe_crops/set2_alicia_detail.jpg",
            highlightPills: ["凤舞九天", "重工盘金", "大女主气场", "心灯传递"],
            loraPrompt: "Alicia, young Asian woman with bangs and glasses, exquisite royal red Chinese qipao cheongsam with gold phoenix and floral embroidery, holding warm glowing lantern --ar 3:4"
          }
        }
      }
    },
    {
      id: "char_coco",
      name: "Coco",
      role: "街舞活力 · 嘻哈 Rap · Swag 担当",
      tagline: "舞狮鼓声传千里，We never lay low / 乘风破浪的先辈，Swag 刻在血脉",
      originalCasting: {
        title: "原始定妆：街头 Oversized 酷黑潮服",
        vibe: "巴黎世家宽松T · 双编发 · 翡翠吊坠 · 马丁靴",
        image: "/characters/char_03_coco.jpg"
      },
      wardrobeLooks: {
        set1_streetwear: {
          option_a: {
            title: "云纹贴布与盘扣夹克 (Cloud Applique & Frog Fastener)",
            costumeDesc: "袖部重叠浮雕云纹贴布，传统红白罗纹棒球领夹克剪裁，配搭黑色内搭与翡翠玉坠，超宽腿工装裤方便做街舞地板动作与跳跃。",
            detailTitle: "01 CLOUD APPLIQUE & FROG FASTENER",
            detailDesc: "袖臂云纹立体压胶贴布 + 前胸纯手结传统盘扣",
            image: "/wardrobe_crops/set1_a_coco.jpg",
            detailImage: "/wardrobe_crops/set1_a_coco_detail.jpg",
            highlightPills: ["云纹立体贴布", "棒球领盘扣", "宽松滑板工装", "街舞大动作"],
            loraPrompt: "Coco, curvy Asian dancer, double braids, oversized red bomber jacket with cloud applique and frog buttons, jade pendant, baggy red cargo pants --ar 3:4"
          },
          option_b: {
            title: "纯黑传统盘扣对比夹克 (Frog Closure Detail)",
            costumeDesc: "纯黑传统盘扣在正红云纹提花面料上形成强烈对比，下身配双侧拉链大口袋，极富美式嘻哈与东方血统的结合。",
            detailTitle: "01 FROG CLOSURE DETAIL 盘扣细节",
            detailDesc: "黑绳盘结扣头，黑红撞色，提花暗纹肌理丰富",
            image: "/wardrobe_crops/set1_b_coco.jpg",
            detailImage: "/wardrobe_crops/set1_b_coco_detail.jpg",
            highlightPills: ["纯黑盘扣", "云纹提花面料", "重工黑跑鞋", "Swag 气场"],
            loraPrompt: "Coco, curvy Asian dancer, double braids, red jacquard streetwear jacket with bold black frog buttons, red cargo sweatpants, black chunky sneakers --ar 3:4"
          }
        },
        set2_qipao: {
          option_a: {
            title: "四季金菊金绣旗袍 (Chrysanthemum Embroidery)",
            costumeDesc: "富丽堂皇的大朵金菊沿斜襟与裙摆盛开，圆领包边点缀金色纽结，展示大码女孩温润柔美又自信的一面。",
            detailTitle: "01 CHRYSANTHEMUM EMBROIDERY & YOKE",
            detailDesc: "金菊绣与斜襟细节，金色滚边领口与手结扣",
            image: "/wardrobe_crops/set2_a_coco.jpg",
            detailImage: "/wardrobe_crops/set2_a_coco_detail.jpg",
            highlightPills: ["金菊盛放", "传统圆领", "红绒鞋面", "自信从容"],
            loraPrompt: "Coco, Asian female dancer with double braids, full-length red traditional qipao with gold chrysanthemum embroidery along skirt, gold frog collar --ar 3:4"
          },
          option_b: {
            title: "节节高升竹影金绣旗袍 (Bamboo Gold Embroidery)",
            costumeDesc: "青竹化为金色丝线从下摆向上拔节而生，寓意事业与家族节节高升，端庄中透出不折不挠的坚韧精神。",
            detailTitle: "01 BAMBOO EMBROIDERY & CLOSURE DETAIL",
            detailDesc: "竹影金绣与盘扣细节，竹叶金色反光在暗调中格外生动",
            image: "/wardrobe_crops/set2_b_coco.jpg",
            detailImage: "/wardrobe_crops/set2_b_coco_detail.jpg",
            highlightPills: ["竹影金绣", "节节高升", "侧开衩包边", "高贵端庄"],
            loraPrompt: "Coco, curvy Asian dancer with double braids, red full-length qipao dress, gold bamboo leaves embroidery ascending from hem, red heels --ar 3:4"
          }
        }
      }
    },
    {
      id: "char_kitty",
      name: "Kitty",
      role: "根脉深植 · 敬茶奉献 · 成熟大爱",
      tagline: "外面的风浪再大，根脉依然在心底绕 / 敬上一杯热茶，传承不只是一个 Title",
      originalCasting: {
        title: "原始定妆：干练盘发无袖立领衬衫",
        vibe: "黑色立领 · 优雅发簪 · 手臂纹身 · 稳重大爱",
        image: "/characters/char_04_mature_cool.jpg"
      },
      wardrobeLooks: {
        set1_streetwear: {
          option_a: {
            title: "斜襟金属扣酷飒短装 (Asymmetric Placket Detail)",
            costumeDesc: "立领斜向对襟，三排银色金属机能插扣，搭配军工战术腰带与抽绳口袋裤，展现成熟女性干练果敢的领导力。",
            detailTitle: "02 ASYMMETRIC PLACKET DETAIL 斜襟金属扣",
            detailDesc: "斜向折叠门襟 + 三组银色金属方扣 + 抽绳扣带",
            image: "/wardrobe_crops/set1_a_kitty.jpg",
            detailImage: "/wardrobe_crops/set1_a_kitty_detail.jpg",
            highlightPills: ["斜襟对裁", "金属机能扣", "高位束腰", "干练飒爽"],
            loraPrompt: "Kitty, stylish Asian woman, updo hairstyle, asymmetric red cropped jacket with three silver metal buckles, red tactical cargo pants --ar 3:4"
          },
          option_b: {
            title: "暗红云纹提花黑边短装 (Cloud Jacquard Fabric)",
            costumeDesc: "整身采用暗红云纹丝质提花面料，纯黑侧拼条和黑色盘扣突显修长身形，沉稳中蕴含内敛锋芒。",
            detailTitle: "02 CLOUD JACQUARD FABRIC 云纹提花面料",
            detailDesc: "微光云纹提花质感 + 哑光黑布盘扣，高贵沉着",
            image: "/wardrobe_crops/set1_b_kitty.jpg",
            detailImage: "/wardrobe_crops/set1_b_kitty_detail.jpg",
            highlightPills: ["云纹提花", "黑拼边细节", "内敛锋芒", "成熟气场"],
            loraPrompt: "Kitty, elegant Asian woman, dark red cloud jacquard cropped jacket with black contrast trim, black frog closures, red cargo trousers --ar 3:4"
          }
        },
        set2_qipao: {
          option_a: {
            title: "偏襟盘扣与几何回字纹长裙 (Geometric Embroidery)",
            costumeDesc: "从高领一直延伸至裙脚的金色回纹锦绣，整齐排列的金线盘扣，象征敬茶传承的周正规矩与源远流长。",
            detailTitle: "02 ASYMMETRIC PLACKET & GEOMETRIC EMBROIDERY",
            detailDesc: "偏襟盘扣与几何绣纹，高立领与垂直回字锦纹",
            image: "/wardrobe_crops/set2_a_kitty.jpg",
            detailImage: "/wardrobe_crops/set2_a_kitty_detail.jpg",
            highlightPills: ["几何回纹", "直排盘扣", "敬茶端庄", "文脉深厚"],
            loraPrompt: "Kitty, elegant high bun, tailored red formal qipao, continuous gold geometric lattice trim and frog closures down the side seam --ar 3:4"
          },
          option_b: {
            title: "庄重回纹金绣高立领华裳 (Lattice Gold Collar)",
            costumeDesc: "高耸立领满绣回字纹，袖口和下摆形成对称金丝包边，剪裁线条挺拔，宛若名门长姐端坐敬茶，从容典雅。",
            detailTitle: "02 LATTICE EMBROIDERY & COLLAR DETAIL",
            detailDesc: "回纹金绣与立领细节，规整宫廷金线纹样",
            image: "/wardrobe_crops/set2_b_kitty.jpg",
            detailImage: "/wardrobe_crops/set2_b_kitty_detail.jpg",
            highlightPills: ["高立领金绣", "对称包边", "敬茶奉献", "长姐气度"],
            loraPrompt: "Kitty, high standing collar qipao with gold fret lattice embroidery at collar, wrists and hemline, royal dignified posture --ar 3:4"
          }
        }
      }
    },
    {
      id: "char_sam",
      name: "Sam",
      role: "现代舞动 · 南洋深海 · 青春燃力",
      tagline: "穿破天空的鞭炮，那是世代的记号 / 跨越南洋的深海，一路燃到这舞台",
      originalCasting: {
        title: "原始定妆：简约黑T牛仔修身舞服",
        vibe: "挑染公主半编发 · 圆环耳饰 · 现代舞爆发力",
        image: "/characters/char_05_sam.jpg"
      },
      wardrobeLooks: {
        set1_streetwear: {
          option_a: {
            title: "中式回纹绣花露脐运动卫衣 (Lattice Embroidery Crop Top)",
            costumeDesc: "短款露脐运动卫衣，胸口立体红色中国结回字纹绣，拉链半高领，双袖白道运动饰边，尽显现代舞者的紧实腹肌与跃动感。",
            detailTitle: "03 LATTICE EMBROIDERY DETAIL 中式回纹绣花",
            detailDesc: "高密度红色回字结绣 + 银色半开拉链 + 白条纹运动袖",
            image: "/wardrobe_crops/set1_a_sam.jpg",
            detailImage: "/wardrobe_crops/set1_a_sam_detail.jpg",
            highlightPills: ["露脐卫衣", "中国结回纹", "白边运动袖", "爆发力舞者"],
            loraPrompt: "Sam, athletic Asian female dancer, blonde highlighted half-up hair, cropped red sports zip pullover with Chinese knot embroidery, red baggy track pants --ar 3:4"
          },
          option_b: {
            title: "中式古币铜牌腰链工装 (Waist Construction Chain)",
            costumeDesc: "立领短上衣露出一截纤细腰线，腰袢悬挂青铜古钱币多层金属链，伴随舞步摇曳碰撞，野性又时尚。",
            detailTitle: "03 WAIST CONSTRUCTION 腰部设计",
            detailDesc: "仿古铜币悬垂腰链 + 高腰双带裤襻",
            image: "/wardrobe_crops/set1_b_sam.jpg",
            detailImage: "/wardrobe_crops/set1_b_sam_detail.jpg",
            highlightPills: ["古币腰链", "铜牌挂饰", "金属碰撞", "跨洋青春"],
            loraPrompt: "Sam, crop red mandarin collar top, vintage coin chain belt around waist, red wide-leg street dance pants with jacquard side stripes --ar 3:4"
          }
        },
        set2_qipao: {
          option_a: {
            title: "腊梅绣与灯笼收口长袖 (Plum Blossom & Sleeve Detail)",
            costumeDesc: "一枝傲雪金腊梅自侧腰盘旋而下，复古灯笼收口长袖在现代舞旋转舒展时形成波浪形褶皱，美不胜收。",
            detailTitle: "03 PLUM BLOSSOM EMBROIDERY & SLEEVE DETAIL",
            detailDesc: "梅花绣与灯笼袖细节，金梅枝干灵动攀附",
            image: "/wardrobe_crops/set2_a_sam.jpg",
            detailImage: "/wardrobe_crops/set2_a_sam_detail.jpg",
            highlightPills: ["金梅绽放", "灯笼收口袖", "旋转飘拂", "舞动诗意"],
            loraPrompt: "Sam, graceful dancer, lantern puff sleeve red qipao, golden blooming plum blossom branch embroidered sweeping across skirt --ar 3:4"
          },
          option_b: {
            title: "幽香兰花金绣与立体褶皱 (Orchid Embroidery & Draping)",
            costumeDesc: "胸腰处大师级斜向立体密褶，像琴弦般收紧腰身，兰花金丝刺绣顺着褶裥蔓延，充满雕塑般的身体线条感。",
            detailTitle: "03 ORCHID EMBROIDERY & DRAPING DETAIL",
            detailDesc: "兰花金绣与褶裥细节，斜向放射状手工密褶",
            image: "/wardrobe_crops/set2_b_sam.jpg",
            detailImage: "/wardrobe_crops/set2_b_sam_detail.jpg",
            highlightPills: ["立体斜褶", "幽谷金兰", "雕塑线条", "高定剪裁"],
            loraPrompt: "Sam, red couture qipao gown with sculptural diagonal pleated draping across waist, elegant gold orchid embroidery --ar 3:4"
          }
        }
      }
    },
    {
      id: "char_yinyin",
      name: "茵茵 (YIN YIN)",
      role: "优雅旋转 · 慈爱温润 · 生命 Idol",
      tagline: "原来最珍贵的福气，不是自己多耀眼，而是别人需要时候，你化身那道光线",
      originalCasting: {
        title: "原始定妆：白色短西装黑长裙芭蕾定妆",
        vibe: "芭蕾手势 · 蝴蝶胸针 · 慈爱温润 · 纯净生命之光",
        image: "/characters/char_02_yinyin.jpg"
      },
      wardrobeLooks: {
        set1_streetwear: {
          option_a: {
            title: "连帽斜襟几何织带设计 (Hooded Closure Detail)",
            costumeDesc: "红黑回纹织带封边的连帽连身外套，斜向拉链与短款廓形，在街舞中兼具甜美爱心与前卫K-Pop偶像舞台感。",
            detailTitle: "04 HOODED CLOSURE DETAIL 连帽斜襟织带",
            detailDesc: "黑底红回纹连帽斜襟织带包边 + 哑光质感纽扣",
            image: "/wardrobe_crops/set1_a_yinyin.jpg",
            detailImage: "/wardrobe_crops/set1_a_yinyin_detail.jpg",
            highlightPills: ["连帽斜襟", "几何织带", "甜辣舞台", "偶像气场"],
            loraPrompt: "Yin Yin, pretty Asian dancer with highlighted hair, cropped hooded red jacket with geometric border tape, red cargo pants --ar 3:4"
          },
          option_b: {
            title: "侧边立体压折工装细节 (Cargo Seam Detail)",
            costumeDesc: "利落短款立领夹克搭配侧边黑色工装大口袋压折裤，右腿绣有金色潜龙升腾暗纹，甜酷兼具。",
            detailTitle: "04 CARGO SEAM DETAIL 工装细节",
            detailDesc: "侧边黑色立体贴袋 + 金色隐约盘龙暗绣",
            image: "/wardrobe_crops/set1_b_yinyin.jpg",
            detailImage: "/wardrobe_crops/set1_b_yinyin_detail.jpg",
            highlightPills: ["立体贴袋", "盘龙暗绣", "黑红拼接", "动静相宜"],
            loraPrompt: "Yin Yin, stylish red bolero jacket with frog fasteners, cargo pocket trousers with black side accent stripe --ar 3:4"
          }
        },
        set2_qipao: {
          option_a: {
            title: "银杏金叶绣与斜襟重叠裙摆 (Ginkgo Leaf Embroidery)",
            costumeDesc: "金色银杏叶扇形自斜襟洒向裙摆，双层重叠开衩裙摆，寓意生命与爱心的传递与生生不息，温婉明媚如阳光。",
            detailTitle: "04 GINKGO LEAF EMBROIDERY & FOLDED PANEL",
            detailDesc: "银杏绣与斜襟细节，扇形金叶层叠辉映",
            image: "/wardrobe_crops/set2_a_yinyin.jpg",
            detailImage: "/wardrobe_crops/set2_a_yinyin_detail.jpg",
            highlightPills: ["银杏金叶", "双层重叠", "生命之光", "温婉慈爱"],
            loraPrompt: "Yin Yin, radiant smiling dancer, red evening qipao with golden ginkgo leaves floating embroidery, double-layer skirt slit --ar 3:4"
          },
          option_b: {
            title: "凤舞九天风羽金绣修身长裙 (Phoenix Feather Embroidery)",
            costumeDesc: "真金丝重工刺绣整片华丽凤羽，由右肩盘旋倾泻而下，领口纯手工金盘扣与珍珠扣相缀，鱼尾下摆在旋转时宛若真凤展翅。",
            detailTitle: "04 PHOENIX FEATHER EMBROIDERY 凤羽金绣",
            detailDesc: "风羽金绣与领口细节，珍珠金珠交织盘扣",
            image: "/wardrobe_crops/set2_b_yinyin.jpg",
            detailImage: "/wardrobe_crops/set2_b_yinyin_detail.jpg",
            highlightPills: ["凤羽九天", "珍珠盘扣", "鱼尾长裙", "生命 Idol"],
            loraPrompt: "Yin Yin, high-fashion red qipao, resplendent gold phoenix plumage embroidery flowing from shoulder down to mermaid hemline, pearl frog clasp --ar 3:4"
          }
        }
      }
    }
  ]
};

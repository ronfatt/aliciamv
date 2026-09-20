// Alicia & Real Stories — 《点燃心灯 (Light It Up!)》新春贺岁大爱 MV 官方全流程数据
// 音频严密对齐 4:49 (289s) 真实官方音轨

export const initialProjectData = {
  info: {
    title: "点燃心灯 (Light It Up!) — 新春贺岁与大爱传承 MV",
    subtitle: "传统文化与潮流国潮碰撞 · 跨南洋深海的大爱心灯",
    director: "Ron Studio / AI Production",
    client: "新春大爱传承组委会",
    currentVersion: "v3.5 - 官方音频与全片 9 镜秒数对齐版",
    aspectRatio: "16:9 Cinematic (2.39:1)",
    totalDuration: 289, // 真实音频 4分49秒
    bpm: 122,
    audioSrc: "/audio/official_track.mp3",
    productionPipeline: [
      { step: "01", name: "角色与妆造", desc: "Alicia(京腔)/Coco(潮酷)/Kitty/茵茵/Sam 5人锁定" },
      { step: "02", name: "服装二选一", desc: "嘻哈工装(红韵/红潮) & 盛典旗袍(和韵/金韵)" },
      { step: "03", name: "概念场景库", desc: "龙鼓大院/水墨书斋/月影深闺/竹海晨光/漓江破晓" },
      { step: "04", name: "分镜四大方程式", desc: "歌词分段 + 建议场景 + 参与人物 = 画面效果图" },
      { step: "05", name: "审片与修改清单", desc: "点对点打标反馈与一键生成导出" }
    ]
  },

  // 2 套服装待定方案（每套 2 组设计对比）
  wardrobe: {
    set1_streetwear: {
      categoryName: "造型一：国潮嘻哈工装 (Dance & Hip-Hop Streetwear)",
      usageScenes: "用于：Intro 街舞开局、舞狮互动、Verse 2 燃舞台、Outro 뛰어!(Jump!) 终极跳跃",
      selectedOption: "option_a",
      options: [
        {
          id: "option_a",
          name: "《红韵 (RED RHYTHM)》",
          code: "LOOK 02",
          concept: "CHINESE CONTEMPORARY STREETWEAR X KOREAN POP X HIP HOP DANCE",
          image: "/wardrobe/wardrobe_a1_red_rhythm.jpg",
          vibe: "机能活力 · K-Pop 律动 · 抽绳工装",
          details: [
            "Coco: 云纹贴布与盘扣夹克 (Cloud Applique & Frog Fastener)",
            "Kitty: 斜襟金属扣酷飒短装 (Asymmetric Placket Detail)",
            "Sam: 中式回纹绣花露脐运动卫衣 (Lattice Embroidery Crop Top)",
            "Yin Yin: 连帽斜襟织带设计 (Hooded Closure Detail)"
          ],
          pros: "极其适合大动作街舞和跳跃滞空（Jump!），抽绳与大口袋在舞动时动感十足，充满年轻 K-Pop 活力。"
        },
        {
          id: "option_b",
          name: "《红潮 (RED DYNASTY)》",
          code: "MV WARDROBE",
          concept: "CHINESE ROOTS, MODERN BEATS, POP / HIP HOP / CHINESE SOUL",
          image: "/wardrobe/wardrobe_a2_red_dynasty.jpg",
          vibe: "奢华暗纹提花 · 高定国潮 · 盘扣古币",
          details: [
            "Coco: 纯黑传统盘扣对比细节 (Frog Closure Detail)",
            "Kitty: 暗红云纹提花面料与黑边撞色 (Cloud Jacquard Fabric)",
            "Sam: 腰部中式铜牌古币腰链 (Waist Construction Chain)",
            "Yin Yin: 侧边立体压折工装细节 (Cargo Seam Detail)"
          ],
          pros: "云纹提花面料在摄影机强光下极具丝绸高级质感，黑红撞色更具东方底蕴与气场。"
        }
      ]
    },
    set2_qipao: {
      categoryName: "造型二：盛典金红旗袍 (Gala & Heritage Qipao)",
      usageScenes: "用于：京腔开门红、年夜饭长桌、阿公阿嬷温情记忆、万盏心灯升空与大合唱",
      selectedOption: "option_b",
      options: [
        {
          id: "option_a",
          name: "《和韵新春 (SCARLET HARMONY)》",
          code: "QIPAO COLLECTION",
          concept: "TRADITIONAL SPIRIT, MODERN GRACE, BEAUTY IN HARMONY",
          image: "/wardrobe/wardrobe_b1_scarlet_harmony.jpg",
          vibe: "四季花卉 · 温润典雅 · 珠联璧合",
          details: [
            "Coco: 金菊绣与斜襟细节 (Chrysanthemum Embroidery)",
            "Kitty: 偏襟盘扣与几何回字纹 (Geometric Embroidery)",
            "Sam: 腊梅绣与灯笼收口长袖 (Plum Blossom & Sleeve Detail)",
            "Yin Yin: 银杏绣与斜襟重叠裙摆 (Ginkgo Leaf Embroidery)"
          ],
          pros: "菊花、梅花、银杏的自然植物意象，文雅素洁，非常契合传统新春佳节的书香气息。"
        },
        {
          id: "option_b",
          name: "《金韵华裳 (RED & GOLD)》",
          code: "QIPAO COLLECTION",
          concept: "TRADITIONAL BEAUTY, MODERN GRACE, MORE BEAUTY",
          image: "/wardrobe/wardrobe_b2_red_and_gold.jpg",
          vibe: "璀璨金绣 · 凤羽兰影 · 舞台聚光女王",
          details: [
            "Coco: 节节高升竹影金绣 (Bamboo Embroidery & Closure)",
            "Kitty: 庄重回纹金绣与高立领 (Lattice Gold Collar)",
            "Sam: 幽香兰花金绣与腰部立体褶皱 (Orchid Embroidery & Draping Detail)",
            "Yin Yin: 凤舞九天风羽金绣 (Phoenix Feather Gold Embroidery)"
          ],
          pros: "重工真金丝刺绣在暗景心灯前反光极度耀眼！Sam 的腰部斜向立体褶皱和 Yin Yin 的凤羽极具电影高级定制感！"
        }
      ]
    }
  },

  // 5 位核心主角对应关系（与真实参考图完全对齐）
  characters: [
    {
      id: "char_alicia",
      name: "Alicia (京腔领唱)",
      role: "京腔国粹 · 归家导航",
      vibe: "Cinematic · Traditional Meets Modern · Clear Voice",
      costume: "灰色时尚西装与复古红框眼镜，现代知性融合国风红灯笼意象",
      image: "/characters/char_01_office.jpg",
      loraKeywords: "Alicia, Asian woman in grey stylish blazer, round glasses, dark hair with blunt bangs, singing Peking opera pose, red lanterns in background",
      lyricsPart: "【京腔】红灯笼高挂，全城在欢呼！归家的导航，幸福已切入！"
    },
    {
      id: "char_coco",
      name: "Coco",
      role: "街舞活力 · 嘻哈 Rap · Swag 担当",
      vibe: "Be Real · Swag · Hip-hop · Never Lay Low",
      tagline: "We never lay low / Swag 刻在血脉",
      costume: "Balenciaga 黑色宽松短袖、马丁靴、双编发、翡翠玉坠",
      image: "/characters/char_03_coco.jpg",
      loraKeywords: "Coco, curvy Asian dancer, Balenciaga black oversized t-shirt, combat boots, double braids, jade necklace, hip-hop dynamic rap pose",
      lyricsPart: "Yeah, light it up! / 舞狮鼓声传千里，We never lay low / 乘风破浪的先辈，Swag 刻在血脉"
    },
    {
      id: "char_kitty",
      name: "Kitty",
      role: "根脉深植 · 敬茶奉献 · 成熟大爱",
      vibe: "Rooted · Resilient · Warm · Sincere",
      tagline: "外面的风浪再大，根脉依然在心底绕",
      costume: "黑色无袖立领衬衫、干练盘发带淡紫发圈、手臂纹身、双手稳重",
      image: "/characters/char_04_mature_cool.jpg",
      loraKeywords: "Kitty, stylish Asian woman, sleeveless black mandarin collar shirt, arm tattoo, holding traditional hot Chinese tea cup, calm confident smile",
      lyricsPart: "新年到 / 外面的风浪再大，根脉依然在心底绕 / 敬上一杯热茶，传承不只是一个 Title"
    },
    {
      id: "char_yinyin",
      name: "茵茵 (YIN YIN)",
      role: "优雅旋转 · 慈爱温润 · 生命 Idol",
      vibe: "Grace · Elegance · Compassion · Light Bearer",
      tagline: "Grace in every chapter / 点燃心灯",
      costume: "白色短西装、黑色飘逸长裙、金色挑染、蝴蝶胸针、舒展舞姿",
      image: "/characters/char_02_yinyin.jpg",
      loraKeywords: "Yin Yin, elegant woman, cropped white blazer, black flowing evening gown, ballet extension pose, holding warm glowing lantern light",
      lyricsPart: "红包里的祝福，装满期待把你当成宝 / 原来最珍贵的福气，不是自己多耀眼，而是别人需要时候，你化身那道光线"
    },
    {
      id: "char_sam",
      name: "Sam",
      role: "现代舞动 · 南洋深海 · 青春燃力",
      vibe: "Energetic · Natural · Modern Movement · Passion",
      tagline: "跨越南洋的深海，一路燃到这舞台",
      costume: "简约黑T、直筒修身牛仔裤、白球鞋、金色挑染公主半编发、圆环耳环",
      image: "/characters/char_05_sam.jpg",
      loraKeywords: "Sam, athletic Asian dancer in black fitted t-shirt, blue jeans, white sneakers, hoop earrings, energetic jump and modern dance pose",
      lyricsPart: "穿破天空的鞭炮，那是世代的记号 / 跨越南洋的深海，一路燃到这舞台"
    }
  ],

  // 5 大核心视觉概念场景库
  environments: [
    {
      id: "env_04",
      name: "华灯古楼 · 龙鼓大院水浸红绸",
      lightingTag: "夜色雨雾 · 琉璃红光",
      image: "/environments/env_04_drum_courtyard.jpg",
      recommendedWardrobe: "国潮嘻哈工装 (红韵 / 红潮)",
      wardrobeReason: "工装大口袋与抽绳在湿滑雨水石阶、大红鼓与飘扬红绸之间极具街头潮酷张力！",
      lyricsMapping: "【Intro】京腔开局 / 舞狮鼓声传千里 / 뛰어!(Jump!)",
      description: "双层古建筑雕梁画栋，雨后地面水光如镜，悬挂巨大战鼓与红色长绸缎，灯火通明。",
      lightingDetails: "暖红灯笼高光与冷青夜色雨雾高反差撞色，水面镜面反射营造奢华电影景深。",
      cameraGuidance: "低角度贴水面高速横移推进，抓取战鼓震颤与水花四溅慢动作。"
    },
    {
      id: "env_05",
      name: "水墨狂草 · 阳光书斋飞白长卷",
      lightingTag: "晨曦斜阳 · 墨香光柱",
      image: "/environments/env_05_ink_calligraphy.jpg",
      recommendedWardrobe: "盛典金红旗袍 (金韵华裳 / 和韵新春)",
      wardrobeReason: "金丝刺绣在飘拂的黑白狂草白绢与木质书案间穿梭，凸显‘文脉薪火’的文化厚重感。",
      lyricsMapping: "【Verse 2】敬上一杯热茶，传承不只是一个 Title",
      description: "古建高挑明堂，悬挂巨幅泼墨草书白绢随风轻扬，金黄阳光斜穿木门，笔墨纸砚清幽。",
      lightingDetails: "自然斜射金色日光（Volumetric God Rays），微尘在光柱中漫游，静谧神圣。",
      cameraGuidance: "穿透飘动的书法白绢，慢速滑轨推向 Kitty 双手端起的热茶特写。"
    },
    {
      id: "env_03",
      name: "月影深闺 · 古典中式内阁烛光",
      lightingTag: "皎洁月色 · 案前微烛",
      image: "/environments/env_03_moonlit_palace.jpg",
      recommendedWardrobe: "盛典金红旗袍 (和韵新春 / 金韵华裳)",
      wardrobeReason: "孔雀绿帷幔与月光冷色调，与深红金绣旗袍形成极致的互补色美学碰撞。",
      lyricsMapping: "【Pre-Chorus】曾有盏灯照亮我 / 阿公阿嬷牵过的手",
      description: "墨绿薄纱帷幔层叠，雕花花窗外一轮皓月当空，古典罗汉床榻与烛台微光摇曳。",
      lightingDetails: "清冷蓝白月光作为主轮廓逆光，室内由温润黄色蜡烛微光补光，层次细腻动人。",
      cameraGuidance: "焦点从烛心微光平滑虚化转移到花窗外的皓月，带出思乡与传承意境。"
    },
    {
      id: "env_02",
      name: "竹海晨曦 · 溪涧幽潭丁达尔神光",
      lightingTag: "丁达尔圣光 · 水汽氤氲",
      image: "/environments/env_02_bamboo_mist.jpg",
      recommendedWardrobe: "盛典金红旗袍 (金韵华裳 - 竹影金绣款)",
      wardrobeReason: "竹林与旗袍上的‘节节高竹影金绣’完全达成戏内戏外的形神合一！",
      lyricsMapping: "【Chorus】原来最珍贵的福气，是别人需要时候化身那道光线",
      description: "挺拔青翠竹林遮天蔽日，晨雾弥漫在静谧溪涧，一道道金色神圣光柱直插水面。",
      lightingDetails: "强烈的雾气丁达尔光束（God Rays），高光在水波与竹叶上粼粼闪烁。",
      cameraGuidance: "跟随芭蕾舞步（茵茵）在湿润卵石水岸旋转，摄影机环绕 360 度运镜。"
    },
    {
      id: "env_01",
      name: "金光破晓 · 漓江山水朝阳旭日",
      lightingTag: "万丈金霞 · 浩瀚天际",
      image: "/environments/env_01_dawn_river.jpg",
      recommendedWardrobe: "全员合体造型 (旗袍盛典 / 嘻哈红韵)",
      wardrobeReason: "辽阔山水迎着旭日金光，全员红色战袍在金色日光与青黛群山间极为醒目！",
      lyricsMapping: "【Grand Finale】跨越南洋的深海 / 照亮浩瀚彼岸 / 创造未来的光芒",
      description: "金色旭日冲破层云，霞光万道倒映在平静无波的江面上，远方喀斯特群峰绵延无尽。",
      lightingDetails: "极暖的 2800K 金色日出全景光，水面金色漫反射，天空云彩层次分明。",
      cameraGuidance: "大广角航拍无人机超大远景从江面急速拉升，全景展示万千心灯升入金色天际。"
    }
  ],

  // 严格根据用户生产公式排布的分镜工单卡：
  // 歌词分段 + 场景建议 + 参与人物 = 我生成的画面效果图/视频 (附画面要求描述)
  // 秒数完全精准契合 04:49 官方音频！
  scenes: [
    {
      id: "SC-001",
      number: 1,
      title: "【Intro 序章】龙鼓大院水浸红绸 · 惊艳京腔开门红",
      timecode: "00:00 - 00:39",
      startSec: 0,
      endSec: 39,

      lyricsSnippet: "Coco: 'Yeah, light it up!' (00:03)\nKitty: '新年到' (00:06)\n茵茵 & Sam: 'You know what to do' (00:08)\nAlicia (京腔): '红灯笼高挂，全城在欢呼！归家的导航，幸福已切入！' (00:12-00:26)",
      singerHighlight: "Alicia (京腔主唱) · Coco · Kitty · 茵茵 · Sam",
      suggestedEnvironment: "华灯古楼 · 龙鼓大院水浸红绸",
      environmentId: "env_04",
      participatingCast: [
        { name: "Alicia", role: "京腔领唱 (手掐传统旦角兰花指)" },
        { name: "Coco", role: "街头起范 (Balenciaga / 红韵工装)" }
      ],
      wardrobeNote: "Alicia 灰西装撞色传统红灯笼 / Coco 选定《红韵》嘻哈工装",

      visualRequirements: [
        "构图与机位：广角低机位贴着湿漉漉的石阶水面快速向前推，水面倒映两层古楼的通明灯火与大红战鼓",
        "角色表演：Alicia 站在大院正中央昂首开唱京腔，神态端庄自信，手势精准还原京剧旦角手势",
        "光影与特效：雨后青石板的潮湿高光与屋檐下串排的大红灯笼形成强烈冷暖反差，红色长绸缎在微风中翻卷"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/env_04_drum_courtyard.jpg",
        caption: "AI 最终生成效果图：龙鼓大院夜色琉璃红光与水面倒影",
        modelEngine: "Flux.1 Pro + Midjourney v6.1",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Low-angle fast dolly-in across reflective water surface towards center drum",
      lighting: "Cinematic crimson festival red and gold light, rain mist reflections on wet stone pavement",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro / Midjourney v6.1",
          prompt: "Cinematic shot of grand two-story traditional ancient Chinese palace courtyard at night, wet stone floor reflecting glowing red lanterns, monumental red drums with gold dragons, long scarlet silk banners flowing, rain mist, Arri Alexa 65mm --ar 16:9",
          notes: "将开篇京腔的气势通过红绸与战鼓具象化。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_01_office.jpg",
          notes: "Alicia 面部特征与知性眼镜造型锁定基准。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/env_04_drum_courtyard.jpg",
          notes: "水面反光微波与红绸飘拂动态测试。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/env_04_drum_courtyard.jpg",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: [
        {
          id: "fb-401",
          author: "Ron (Director)",
          date: "2026-09-20 22:45",
          tag: "场景与歌词对齐",
          content: "龙鼓大院水面倒影配合京腔起调，视听冲击力极大，确认定稿！",
          resolved: true
        }
      ]
    },
    {
      id: "SC-002",
      number: 2,
      title: "【Verse 1 民俗与根脉】鞭炮破空、醒狮鼓声与红包祝福",
      timecode: "00:39 - 01:08",
      startSec: 39,
      endSec: 68,

      lyricsSnippet: "Sam: '穿破天空的鞭炮，那是世代的记号' (00:40)\nCoco: '舞狮鼓声传千里，We never lay low' (00:48)\n茵茵: '红包里的祝福，装满期待把你当成宝' (00:55)\nKitty: '外面的风浪再大，根脉依然在心底绕' (01:02)",
      singerHighlight: "Sam · Coco · 茵茵 · Kitty",
      suggestedEnvironment: "华灯古楼 · 龙鼓大院 (外景醒狮舞台)",
      environmentId: "env_04",
      participatingCast: [
        { name: "Sam & Coco", role: "醒狮鼓点卡点跳跃与街舞 Low Stance" },
        { name: "茵茵 & Kitty", role: "双手送出精美烫金红包，温情凝望" }
      ],
      wardrobeNote: "Coco/Sam 换装《红韵》嘻哈工装 / 茵茵 Kitty 着《金韵华裳》旗袍",

      visualRequirements: [
        "构图与机位：快节奏卡点剪辑（122 BPM），鞭炮金光炸裂后快速鞭甩镜头到醒狮眨眼特写",
        "角色表演：Coco 戴翡翠项链双手摆出街舞手势，与身后跳桩醒狮完美互动；茵茵端庄递出红包，眼神充满关爱",
        "光影与特效：金色礼花火星飞散，醒狮绒毛在暖光下生动细腻，青石板水花随舞步四溅"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/env_04_drum_courtyard.jpg",
        caption: "AI 最终生成效果图：醒狮与红韵工装街舞在大院战鼓前卡点爆发",
        modelEngine: "Flux.1 Pro",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Dynamic whip pan from golden spark burst to Coco's low stance hip-hop groove",
      lighting: "Golden fireworks sparkle, warm festive courtyard lanterns",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Cinematic shot of dynamic Chinese New Year street celebration with traditional lion dance troupe, Asian dancer in red contemporary streetwear, flying golden firework embers, wet reflective pavement --ar 16:9",
          notes: "传统民俗与现代街舞激烈碰撞。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_03_coco.jpg",
          notes: "Coco 拳击辫与翡翠挂坠标志。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/env_04_drum_courtyard.jpg",
          notes: "醒狮鼓声与街舞节奏严格对齐 122 BPM。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/env_04_drum_courtyard.jpg",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-003",
      number: 3,
      title: "【Rap 1 团圆欢聚】一桌菜等一年久 · 一家团圆满屋欢笑",
      timecode: "01:08 - 01:26",
      startSec: 68,
      endSec: 86,

      lyricsSnippet: "Coco: '一桌菜等一年久，就盼着这一刻来到' (01:09)\n茵茵: '一家团圆满屋欢笑，迎接新春多热闹' (01:13)\nKitty: '提醒着我们珍惜，把岁月紧紧抓牢' (01:17)\nSam: '眼前每一份爱，都是我们一生的依靠' (01:21)",
      singerHighlight: "全员 4 人依次接唱 Rap 节奏",
      suggestedEnvironment: "水墨狂草 · 阳光书斋长案 (化作热气腾腾年夜宴)",
      environmentId: "env_05",
      participatingCast: [
        { name: "全员", role: "围坐丰盛年夜长席，笑逐颜开举杯相庆" }
      ],
      wardrobeNote: "全员《金韵华裳》盛典旗袍系列，年味富贵典雅",

      visualRequirements: [
        "构图与机位：平稳滑轨推镜（Steadicam），顺着长长的大红桌案缓缓扫过冒着热气的年菜与青花瓷盘",
        "角色表演：家人笑逐颜开相互夹菜举杯，Kitty 颔首微笑，眼神满是对阖家团聚的珍惜与感慨",
        "光影与特效：暖黄柔和的吊灯烛光，菜肴上方蒸腾出白色的袅袅热气，带出最接地气的烟火气"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/env_05_ink_calligraphy.jpg",
        caption: "AI 最终生成效果图：古风大案上的热气腾腾年夜饭与阖家欢聚",
        modelEngine: "Midjourney v6.1",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Slow warm tracking shot along overflowing family reunion dinner table",
      lighting: "Amber dining table warmth, soft cinematic retro memories",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Midjourney v6.1",
          prompt: "Cinematic medium tracking shot, lavish Asian Lunar New Year reunion feast table filled with steaming traditional delicacies, smiling family members around, warm glowing lighting, nostalgic film grain --ar 16:9",
          notes: "核心情感爆发点：一家团圆满屋欢笑。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_02_yinyin.jpg",
          notes: "茵茵端庄优雅笑容。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/env_05_ink_calligraphy.jpg",
          notes: "饭菜热气上升流体特效。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/env_05_ink_calligraphy.jpg",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-004",
      number: 4,
      title: "【Pre-Chorus 代际破晓】阿公阿嬷牵过的手 · 月影深闺与把黑暗燃烧",
      timecode: "01:26 - 01:56",
      startSec: 86,
      endSec: 116,

      lyricsSnippet: "Coco & Sam: '阿公阿嬷牵过的手，这份温暖我收好' (01:27)\n茵茵 & Kitty: '那些接力过的爱，点亮前路的破晓' (01:34)\nCoco & Sam: '曾有盏灯照亮我，穿过狂雨和风暴' (01:41)\n茵茵 & Kitty: 'Now it's my turn, 把黑暗都燃烧' (01:49)\nKitty: '准备好了没？' (01:56)",
      singerHighlight: "Coco & Sam / 茵茵 & Kitty 轮唱与二重唱",
      suggestedEnvironment: "月影深闺 · 古典中式内阁烛光",
      environmentId: "env_03",
      participatingCast: [
        { name: "老阿公阿嬷 (剪影演员)", role: "长满老茧的手温柔握住年轻人的手" },
        { name: "Kitty", role: "点亮案前第一盏古铜烛台并沉稳发问" }
      ],
      wardrobeNote: "《金韵华裳》旗袍 (孔雀绿帷幔与月光反差)",

      visualRequirements: [
        "构图与机位：诗意摇镜，由手部特写慢慢移向雕花窗外的一轮皎洁圆月，再切至 Kitty 毅然点亮烛芯的大特写",
        "角色表演：眼神从含泪感恩逐渐转为无比笃定，最后那句独白‘准备好了没？’气场震慑全场",
        "光影与特效：清冷月光洒在地面上如同白霜，火柴擦亮瞬间金色火苗升腾，照亮人物坚毅的面庞"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/env_03_moonlit_palace.jpg",
        caption: "AI 最终生成效果图：墨绿薄纱帷幔、花窗明月与古雅烛台",
        modelEngine: "Midjourney v6.1",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Slow poetic pan across emerald green curtains and candlelit tea tables towards full moon window",
      lighting: "Silvery cool moonbeam contrasting with warm golden candlelight",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Midjourney v6.1",
          prompt: "Cinematic interior of traditional Chinese ancient bedchamber at midnight, emerald green sheer curtains flowing, full moon shining brightly outside lattice window, warm flickering candles, emotional nostalgic feeling --ar 16:9",
          notes: "为点燃心灯积蓄深情的情感基调。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_04_mature_cool.jpg",
          notes: "Kitty 笃定眼神与立领长裙基准。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/env_03_moonlit_palace.jpg",
          notes: "烛光移焦到窗外圆月。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/env_03_moonlit_palace.jpg",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-005",
      number: 5,
      title: "【Chorus 1 首唱高潮】点燃心灯！(Light It Up! Pass It On!) 善意无限接通",
      timecode: "01:57 - 02:25",
      startSec: 116,
      endSec: 145,

      lyricsSnippet: "茵茵 & Kitty: '点燃心灯！' Coco & Sam: '(Light it up!)' (01:57)\n茵茵 & Kitty: '照亮整个夜空！' (02:00)\n茵茵 & Kitty: '点燃心灯！' Coco & Sam: '(Pass it on!)' (02:04)\n茵茵 & Kitty: '善意无限接通！' (02:08)\n大合唱: '万千新年灯火连成 千家万户的希望 / 我的光，你的光，这份温暖，世世代代相传！' (02:11-02:25)",
      singerHighlight: "领唱对答 ➔ 震撼全员大合唱",
      suggestedEnvironment: "竹海晨曦 · 溪涧幽潭丁达尔神光",
      environmentId: "env_02",
      participatingCast: [
        { name: "茵茵", role: "双手托起金光心灯优雅旋转" },
        { name: "全员 5 人", role: "做统一‘托灯 Pass it on’手势接力" }
      ],
      wardrobeNote: "选定《金韵华裳》旗袍 (竹影金绣款与竹林完美共生)",

      visualRequirements: [
        "构图与机位：360度环绕升降运镜（Orbit Upwards），从茵茵捧着心灯的手部特写逐渐拉出至竹海全景",
        "角色表演：茵茵在溪流卵石上舒展旋转，随后将心灯平推向镜头，微光化为漫天金色光点散开",
        "光影与特效：极强烈的丁达尔圣光穿透竹林雾霭，溪流水花溅起金色高光，神圣纯洁"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/env_02_bamboo_mist.jpg",
        caption: "AI 最终生成效果图：雾霭竹海、溪涧幽潭与金色丁达尔圣光",
        modelEngine: "Flux.1 Pro",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "360-degree tracking shot of dancer in bamboo stream mist, golden god rays piercing through bamboo foliage",
      lighting: "Ethereal volumetric god rays, sparkling stream water droplets",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Cinematic shot of lush misty bamboo forest river stream at early sunrise, glorious golden god rays cutting through bamboo canopy, water mist rising from smooth wet rocks, glowing lotus heart lamp, spiritual atmosphere --ar 16:9",
          notes: "象征心灯穿透迷雾，善意无限接通。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_02_yinyin.jpg",
          notes: "茵茵竹影金绣长裙与旋转舞姿。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/env_02_bamboo_mist.jpg",
          notes: "丁达尔光束在镜头前晃过的辉光效果。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/env_02_bamboo_mist.jpg",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-006",
      number: 6,
      title: "【Rap 2 大爱心灯】一盏灯火绝对不只照亮一个屋檐 · 化身那道光线",
      timecode: "02:25 - 02:50",
      startSec: 145,
      endSec: 170,

      lyricsSnippet: "茵茵: '一盏灯火，绝对不只照亮一个屋檐' (02:25)\nCoco: '这份大爱，注定能够走到无限遥远' (02:30)\nKitty: '一句好话、一次帮助、一个微笑的照面' (02:33)\nSam: '能让寒冷冰封之地，瞬间切换成春天' (02:36)\n茵茵: '原来最珍贵的福气，不是自己多耀眼' (02:40)\nCoco & Sam: '而是别人需要时候，你化身那道光线' (02:44)",
      singerHighlight: "茵茵 · Coco · Kitty · Sam 轮流特写递进",
      suggestedEnvironment: "竹林溪涧向阳开阔地 ➔ 暖日破冰",
      environmentId: "env_02",
      participatingCast: [
        { name: "茵茵", role: "眼神充满慈爱大爱，走入阳光下" },
        { name: "Coco & Sam", role: "自信对视，双手向前递出温暖微光" }
      ],
      wardrobeNote: "《金韵华裳》旗袍金光漫射",

      visualRequirements: [
        "构图与机位：四人快速单人中景特写切换，背景虚化为金色光晕斑点，在'化身那道光线'时合为双人中景",
        "角色表演：每个人的眼神从内敛微笑到开朗笃定，将大爱慈悲的温度传达给镜头前的观众",
        "光影与特效：随着'瞬间切换成春天'的唱词，画面色温从偏冷色调瞬间切换为温暖的金色春日阳光"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/env_02_bamboo_mist.jpg",
        caption: "AI 最终生成效果图：丁达尔金光穿透林间，水雾化为温暖春日晨光",
        modelEngine: "Flux.1 Pro",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Quick cinematic character portrait cuts syncing with rapid vocal lines into slow sunburst bloom",
      lighting: "Dynamic color temperature transition from cool mist to warm 3200K spring sunlight",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Cinematic portrait shots of elegant Asian women walking from shadowed bamboo into bright warm golden sunlight, gentle smiles, lens flare, sun rays, symbolic spiritual transformation --ar 16:9",
          notes: "突出‘化身那道光线’的利他大爱哲学。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_02_yinyin.jpg",
          notes: "茵茵微表情温暖笃定。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/env_02_bamboo_mist.jpg",
          notes: "光线强弱渐变动画测试。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/env_02_bamboo_mist.jpg",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-007",
      number: 7,
      title: "【Verse 2 南洋深海与热茶】乘风破浪的先辈 · 敬上一杯热茶 · 做别人生命里的 Idol",
      timecode: "02:50 - 03:33",
      startSec: 170,
      endSec: 213,

      lyricsSnippet: "Sam: '跨越南洋的深海，一路燃到这舞台' (03:05)\nCoco: '乘风破浪的先辈，Swag 刻在血脉' (03:12)\nKitty: '敬上一杯热茶，传承不只是一个 Title' (03:19)\n茵茵: '化作那一道光芒，做别人生命里的 Idol' (03:26)",
      singerHighlight: "Sam (燃舞) · Coco (Swag) · Kitty (茶道) · 茵茵 (Idol 高光)",
      suggestedEnvironment: "水墨狂草 · 阳光书斋 ➔ 历史航海虚实交融",
      environmentId: "env_05",
      participatingCast: [
        { name: "Sam & Coco", role: "跨越南洋深海的蓬勃动能" },
        { name: "Kitty", role: "庄重端茶敬茶仪式特写" },
        { name: "茵茵", role: "做别人生命里的 Idol 圣洁姿态" }
      ],
      wardrobeNote: "Kitty《金韵华裳》旗袍 / Coco《红韵》工装碰撞",

      visualRequirements: [
        "构图与机位：飘逸的书法白绢后方隐现南洋红头船航海的复古历史光影，随即转场至 Kitty 双手平举敬茶的端庄近景",
        "角色表演：Kitty 眼神恭敬庄严，向先辈与天地敬茶；茵茵在'Idol'高音处微仰起头，金色聚光灯打亮全身",
        "光影与特效：热茶水汽袅袅升起，在斜射的金色日光中化作璀璨微尘，与黑白水墨大字形成极致审美"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/env_05_ink_calligraphy.jpg",
        caption: "AI 最终生成效果图：阳光书斋飞白狂草长卷与案头敬热茶仪式",
        modelEngine: "Flux.1 Pro",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Sweeping crane move descending from suspended calligraphy scrolls down to macro shot of steaming tea cup",
      lighting: "Rich amber golden light through paper lattice windows, cinematic tea steam illumination",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Cinematic close-up of mature Asian woman in red gold traditional high collar gown gracefully serving hot steaming tea in ceramic cup with two hands, calligraphy scrolls around, golden dusty sunlight, epic ancestral heritage --ar 16:9",
          notes: "敬茶仪式升华南洋薪火相传。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_04_mature_cool.jpg",
          notes: "Kitty 敬茶大家风范。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/env_05_ink_calligraphy.jpg",
          notes: "茶水倾注与白绢翻卷动态。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/env_05_ink_calligraphy.jpg",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-008",
      number: 8,
      title: "【Chorus 2 & 3 浩瀚彼岸】点燃心灯！照亮浩瀚彼岸！众生觉心 · 慈爱光 智慧光",
      timecode: "03:34 - 04:29",
      startSec: 213,
      endSec: 269,

      lyricsSnippet: "大合唱: '点燃心灯！(Light it up!) 照亮浩瀚彼岸！' (04:02)\n'点燃心灯！(Pass it on!) 众生觉心点亮！' (04:09)\n'感恩过去修正现在，创造未来的光芒' (04:16)\n'慈爱光，智慧光，清明闪耀，照见生命破晓！' (04:23-04:29)",
      singerHighlight: "全员大合唱最高音升调爆发",
      suggestedEnvironment: "金光破晓 · 漓江山水朝阳旭日 (万盏心灯升空)",
      environmentId: "env_01",
      participatingCast: [
        { name: "全员 5 位主角", role: "红金盛典华服，并肩立于浩瀚水岸" }
      ],
      wardrobeNote: "全员《金韵华裳》盛典旗袍 (重工真金丝刺绣迎着朝阳金辉)",

      visualRequirements: [
        "构图与机位：大广角航拍无人机超大远景，从平静江面如镜的倒影贴水飞掠，再仰冲云霄迎向金色旭日",
        "角色表演：5 位女性在江畔岩滩自信定格，红衣与山水形成鲜明对比，双手放飞无数盏金色莲花心灯",
        "光影与特效：万丈金霞破云而出，数千盏心灯漂浮升向晨曦，水面金色漫反射，群山如青黛水墨画卷"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/env_01_dawn_river.jpg",
        caption: "AI 最终生成效果图：旭日初升金霞漫天，数千盏心灯冉冉升入浩瀚彼岸",
        modelEngine: "Flux.1 Pro / Multi-LoRA Composite",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Sweeping epic drone shot over golden river, mountain layers silhouetted against rising dawn sun",
      lighting: "Glorious 2800K golden sunrise illumination over vast river reflections",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Cinematic majestic wide shot, golden sunrise breaking through radiant clouds over vast karst mountain river landscape, thousands of glowing lotus heart lanterns floating into sky, five Asian women in red gold regal dresses on shore, epic spiritual masterpiece --ar 16:9",
          notes: "全曲最震撼灵魂的画面，点亮浩瀚彼岸与众生觉心。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_02_yinyin.jpg",
          notes: "茵茵与全员庄严神圣姿态。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/env_01_dawn_river.jpg",
          notes: "千盏心灯升空与江水微澜动态。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/env_01_dawn_river.jpg",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-009",
      number: 9,
      title: "【Outro 终章燃爆】뛰어! (Jump!) 薪火相传 · 灯火全开 · 龙鼓狂欢定格",
      timecode: "04:30 - 04:49",
      startSec: 269,
      endSec: 289,

      lyricsSnippet: "全员呼喊: '뛰어! (Jump!)' (04:30)\nSam & Coco: 'Hey! 薪火相传，Let's go!' (04:31)\n茵茵 & Kitty: 'Jump! 灯火全开，Make it glow!' (04:34)\n大合唱: '一盏传一盏，一颗心暖一颗心！' (04:37)\n全员终极大喊: '뛰어! (Jump!)' (04:40-04:49)",
      singerHighlight: "全员 5 人同步滞空起跳狂欢",
      suggestedEnvironment: "龙鼓大院水浸红绸主舞台 (金色彩带炮齐发)",
      environmentId: "env_04",
      participatingCast: [
        { name: "Alicia · Coco · Kitty · 茵茵 · Sam", role: "5 人在舞台同时起跳，慢动作滞空 1.5 秒" }
      ],
      wardrobeNote: "全员《红韵》国潮嘻哈工装 (抽绳大口袋在空中飞扬)",

      visualRequirements: [
        "构图与机位：正面中景高速摄影机（120fps 慢动作升格），抓取 5 人在龙鼓大院水面同时起跳的瞬间",
        "角色表演：跳跃至最高点滞空时，所有人露出灿烂狂欢的笑容，双手比出‘托心灯’手势，水花在脚下四溅",
        "光影与特效：金色彩带炮与礼花在空中轰鸣炸裂，天边成千上万盏心灯冉冉升起，全片在最热烈的金色欢呼中定格"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/env_04_drum_courtyard.jpg",
        caption: "AI 最终生成效果图：龙鼓大院全员 120fps 慢动作跳跃滞空与漫天金色彩带",
        modelEngine: "Flux.1 Pro / Multi-LoRA Composite",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Monumental high-speed synchronized jump shot with 5 women on grand stage, explosive gold confetti cannons",
      lighting: "Full concert stage pyrotechnics, golden dawn sunrise, fireworks finale",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Epic concert grand finale shot, five Asian women in red streetwear jumping in mid-air on water stage, fireworks, thousands of golden heart lanterns floating into sunrise sky, triumphant smiles --ar 16:9",
          notes: "全曲燃爆大高潮，心灯接通千家万户。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_03_coco.jpg",
          notes: "Coco 与全员红韵工装跳跃动态。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/env_04_drum_courtyard.jpg",
          notes: "120fps 慢动作滞空 1.5 秒。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/env_04_drum_courtyard.jpg",
          statusTag: "Grand Finale Mastered"
        }
      },
      feedbacks: [
        {
          id: "fb-403",
          author: "Alicia (Client)",
          date: "2026-09-20 22:58",
          tag: "大跳跃完美",
          content: "Jump 的慢动作与心灯升空一定要严丝合缝，年会大屏播这个绝对炸场！",
          resolved: true
        }
      ]
    }
  ]
};

export const statusConfig = {
  approved: {
    label: "已定稿",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    dot: "bg-emerald-400",
    icon: "CheckCircle2"
  },
  needs_review: {
    label: "待审核",
    badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    dot: "bg-amber-400",
    icon: "AlertCircle"
  },
  in_progress: {
    label: "生成迭代中",
    badgeBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    dot: "bg-indigo-400",
    icon: "Clock"
  },
  draft: {
    label: "分镜筹备/草稿",
    badgeBg: "bg-zinc-500/10 text-zinc-400 border-zinc-500/30",
    dot: "bg-zinc-400",
    icon: "FileText"
  }
};

// Alicia & Real Stories — 《点燃心灯 (Light It Up!)》新春贺岁大爱 MV 官方全流程数据

export const initialProjectData = {
  info: {
    title: "点燃心灯 (Light It Up!) — 新春贺岁与大爱传承 MV",
    subtitle: "传统文化与潮流国潮碰撞 · 跨南洋深海的大爱心灯",
    director: "Ron Studio / AI Production",
    client: "新春大爱传承组委会",
    currentVersion: "v3.0 - AI 生产分镜工单标准版",
    aspectRatio: "16:9 Cinematic (2.39:1)",
    totalDuration: 225, // 3:45
    bpm: 122,
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
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
  scenes: [
    {
      id: "SC-001",
      number: 1,
      title: "【Intro 序章】龙鼓大院水浸红绸 · 惊艳京腔开门红",
      timecode: "00:00 - 00:25",
      startSec: 0,
      endSec: 25,

      // 用户核心公式 4 要素
      lyricsSnippet: "Coco: 'Yeah, light it up!'\nKitty: '新年到'\n茵茵 & Sam: 'You know what to do'\nAlicia (京腔): '红灯笼高挂，全城在欢呼！归家的导航，幸福已切入！'",
      singerHighlight: "Alicia (京腔主唱) · Coco · Kitty · 茵茵 · Sam",
      suggestedEnvironment: "华灯古楼 · 龙鼓大院水浸红绸",
      environmentId: "env_04",
      participatingCast: [
        { name: "Alicia", role: "京腔领唱 (手掐传统旦角兰花指)" },
        { name: "Coco", role: "街头起范 (Balenciaga / 红韵工装)" }
      ],
      wardrobeNote: "Alicia 灰西装撞色传统红灯笼 / Coco 选定《红韵》嘻哈工装",

      // 画面要求与导演描述 (Visual Directives)
      visualRequirements: [
        "构图与机位：广角低机位贴着湿漉漉的石阶水面快速向前推，水面倒映两层古楼的通明灯火与大红战鼓",
        "角色表演：Alicia 站在大院正中央昂首开唱京腔，神态端庄自信，手势精准还原京剧旦角手势",
        "光影与特效：雨后青石板的潮湿高光与屋檐下串排的大红灯笼形成强烈冷暖反差，红色长绸缎在微风中翻卷"
      ],

      // 我生成的画面效果图/视频 (Generated Result)
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
          date: "2026-09-20 22:55",
          tag: "场景与歌词对齐",
          content: "龙鼓大院水面倒影配合京腔起调，视听冲击力极大，确认定稿！",
          resolved: true
        }
      ]
    },
    {
      id: "SC-002",
      number: 2,
      title: "【Verse 1 民俗与根脉】水墨飞白书斋 · 鞭炮、舞狮与敬茶传承",
      timecode: "00:25 - 00:50",
      startSec: 25,
      endSec: 50,

      lyricsSnippet: "Sam: '穿破天空的鞭炮，那是世代的记号'\nCoco: '舞狮鼓声传千里，We never lay low'\n茵茵: '红包里的祝福，装满期待把你当成宝'\nKitty: '外面的风浪再大，根脉依然在心底绕'",
      singerHighlight: "Sam · Coco · 茵茵 · Kitty",
      suggestedEnvironment: "水墨狂草 · 阳光书斋飞白长卷",
      environmentId: "env_05",
      participatingCast: [
        { name: "Kitty", role: "宗族根脉与敬茶核心 (沉稳从容)" },
        { name: "Sam & Coco", role: "醒狮鼓点与跳跃动感" }
      ],
      wardrobeNote: "Kitty 选定《金韵华裳》旗袍 / Coco 选定《红韵》工装",

      visualRequirements: [
        "构图与机位：镜头从室外灿烂阳光穿透雕花木门，滑轨缓缓滑过悬挂空中的巨幅水墨狂草白绢",
        "角色表演：Kitty 坐在古色古香的长案前，双手执青瓷茶盏，眼神坚毅有神，带出‘根脉在心底绕’的庄重",
        "光影与特效：丁达尔晨曦光柱（God Rays）斜切画堂，空气中漂浮着金色微尘与淡淡水墨香气"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/env_05_ink_calligraphy.jpg",
        caption: "AI 最终生成效果图：阳光书斋飞白狂草长卷与案头热茶",
        modelEngine: "Midjourney v6.1",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Smooth lateral tracking through billowing calligraphy scrolls into warm tea table",
      lighting: "Volumetric morning sunlight god rays piercing through ancient paper screens",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Cinematic shot inside ancient Chinese calligraphy study hall, massive white silk scrolls with wild cursive ink calligraphy hanging from wooden beams, golden morning sunlight beams shining through open door, antique tea desk, Kitty and Yin Yin --ar 16:9",
          notes: "展现南洋华人代代相传的文化根基。"
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
          mediaUrl: "/environments/env_05_ink_calligraphy.jpg",
          notes: "白绢随微风轻摆动态流畅。"
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
      id: "SC-003",
      number: 3,
      title: "【Rap & Pre-Chorus】月影深闺烛光 · 年夜饭与阿公阿嬷的牵手记忆",
      timecode: "00:50 - 01:20",
      startSec: 50,
      endSec: 80,

      lyricsSnippet: "Coco: '一桌菜等一年久，就盼着这一刻来到'\n茵茵: '一家团圆满屋欢笑，迎接新春多热闹'\nKitty: '提醒着我们珍惜，把岁月紧紧抓牢'\nSam: '眼前每一份爱，都是我们一生的依靠'\n合唱: '阿公阿嬷牵过的手，这份温暖我收好 / 那些接力过的爱，点亮前路的破晓'",
      singerHighlight: "全员轮唱 ➔ Coco & Sam / 茵茵 & Kitty 和声",
      suggestedEnvironment: "月影深闺 · 古典中式内阁烛光",
      environmentId: "env_03",
      participatingCast: [
        { name: "茵茵", role: "温情守望与烛火祈福" },
        { name: "Coco & Sam", role: "童年阿公阿嬷牵手记忆" }
      ],
      wardrobeNote: "全员《金韵华裳》旗袍系列 (墨绿帷幔与大红金绣反差)",

      visualRequirements: [
        "构图与机位：诗意摇镜（Pan），从罗汉床案几上摇曳的烛光，慢慢移焦到镂空花窗外的皓月圆轮",
        "角色表演：长辈粗糙苍老的手轻轻抚摸年轻人光滑手背的极近景特写，茵茵在一旁温柔浅笑",
        "光影与特效：室内暖黄色微弱烛光（2200K）与窗外皎洁清冷的冰蓝月光（6500K）冷暖双色交融"
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
      status: "needs_review",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Midjourney v6.1",
          prompt: "Cinematic interior of traditional Chinese ancient bedchamber at midnight, emerald green sheer curtains flowing, full moon shining brightly outside lattice window casting long silvery rays, warm flickering candles, nostalgic feeling --ar 16:9",
          notes: "为点燃心灯积蓄深情的情感基调。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_02_yinyin.jpg",
          notes: "茵茵旗袍优雅端庄姿态。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/env_03_moonlit_palace.jpg",
          notes: "移焦与帷幔轻抚动态测试。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/env_03_moonlit_palace.jpg",
          statusTag: "Under Review"
        }
      },
      feedbacks: [
        {
          id: "fb-402",
          author: "Kitty (Client)",
          date: "2026-09-20 22:56",
          tag: "牵手特写",
          content: "阿公阿嬷牵手特写要有温度，烛光色温稍微再调暖一点点！",
          resolved: false
        }
      ]
    },
    {
      id: "SC-004",
      number: 4,
      title: "【Chorus 主副歌】晨曦竹海丁达尔圣光 · 点燃心灯！(Pass It On!)",
      timecode: "01:20 - 01:50",
      startSec: 80,
      endSec: 110,

      lyricsSnippet: "茵茵 & Kitty: 'Now it's my turn, 把黑暗都燃烧！准备好了没？点燃心灯！'\nCoco & Sam: '(Light it up!)'\n茵茵 & Kitty: '照亮整个夜空！点燃心灯！'\nCoco & Sam: '(Pass it on!)'\n大合唱: '万千新年灯火连成 千家万户的希望 / 我的光，你的光，这份温暖，世世代代相传！'",
      singerHighlight: "领唱对答 ➔ 震撼大合唱",
      suggestedEnvironment: "竹海晨曦 · 溪涧幽潭丁达尔神光",
      environmentId: "env_02",
      participatingCast: [
        { name: "茵茵", role: "心灯引路人 (双手捧金光莲花灯)" },
        { name: "全员", role: "心灯传递接力 (Pass it on 手势)" }
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
      id: "SC-005",
      number: 5,
      title: "【Rap 2 & Verse 2】金光破晓万水千山 · 跨越南洋深海与做别人的Idol",
      timecode: "01:50 - 02:20",
      startSec: 110,
      endSec: 140,

      lyricsSnippet: "茵茵: '一盏灯火，绝对不只照亮一个屋檐'\nCoco: '这份大爱，注定能够走到无限遥远'\nKitty: '一句好话、一次帮助、一个微笑的照面'\nSam: '跨越南洋的深海，一路燃到这舞台'\nCoco: '乘风破浪的先辈，Swag 刻在血脉'\nKitty: '敬上一杯热茶，传承不只是一个 Title'\n茵茵: '化作那一道光芒，做别人生命里的 Idol！'",
      singerHighlight: "Coco (Swag Rap) · Kitty · 茵茵 · Sam",
      suggestedEnvironment: "金光破晓 · 漓江山水朝阳旭日",
      environmentId: "env_01",
      participatingCast: [
        { name: "Sam & Coco", role: "跨越南洋深海开拓者身姿" },
        { name: "全员", role: "山水前并肩伫立" }
      ],
      wardrobeNote: "盛典金红战袍与金色朝霞呼应",

      visualRequirements: [
        "构图与机位：大广角航拍无人机超大远景，从平静江面如镜的倒影贴水飞掠，再仰冲云霄迎向金色旭日",
        "角色表演：Sam 与 Coco 在江畔岩滩自信定格，红衣与山水形成鲜明对比，展现下南洋的开拓与自豪",
        "光影与特效：万丈金霞破云而出，水面铺满粼粼波光的金色碎金，远山呈重峦叠嶂的水墨青黛色"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/env_01_dawn_river.jpg",
        caption: "AI 最终生成效果图：旭日初升金霞漫天，漓江群峰如黛",
        modelEngine: "Flux.1 Pro",
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
          prompt: "Cinematic majestic wide shot, golden sunrise breaking through radiant clouds over vast karst mountain river landscape, warm shimmering golden light reflecting on calm river, mist weaving between peaks --ar 16:9",
          notes: "寄托南洋华人筚路蓝缕、破晓初升的壮阔心境。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_05_sam.jpg",
          notes: "Sam 矫健舞姿与阳光剪影。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/env_01_dawn_river.jpg",
          notes: "江面贴水飞掠飞云动态。"
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
      id: "SC-006",
      number: 6,
      title: "【Outro 终章燃爆】뛰어! (Jump!) 龙鼓狂欢与万盏心灯破晓盛典",
      timecode: "02:20 - 02:45",
      startSec: 140,
      endSec: 165,

      lyricsSnippet: "全员呼喊: '뛰어! (Jump!)'\nSam & Coco: 'Hey! 薪火相传，Let's go!'\n茵茵 & Kitty: 'Jump! 灯火全开，Make it glow!'\n全员大合唱: '一盏传一盏，一颗心暖一颗心！뛰어! (Jump!)'",
      singerHighlight: "全员 5 位主角齐聚大跳跃",
      suggestedEnvironment: "双场景交汇：龙鼓大院水台舞台 + 金光破晓山水天际",
      environmentId: "env_04",
      participatingCast: [
        { name: "Alicia · Coco · Kitty · 茵茵 · Sam", role: "全员 5 人同步纵身跃起滞空" }
      ],
      wardrobeNote: "全员换装《红韵》国潮工装 (抽绳大口袋在空中飞扬)",

      visualRequirements: [
        "构图与机位：正面中景高速摄影机（120fps 慢动作升格），抓取 5 人在龙鼓大院水面同时起跳的瞬间",
        "角色表演：跳跃至最高点滞空时，所有人露出灿烂狂欢的笑容，双手比出‘托心灯’手势，水花在脚下四溅",
        "光影与特效：金色彩带炮与礼花在空中轰鸣炸裂，天边成千上万盏心灯冉冉升起，全片在最热烈的金色欢呼中定格"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/env_01_dawn_river.jpg",
        caption: "AI 最终生成效果图：破晓金光下万千心灯与礼花漫天",
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
          mediaUrl: "/environments/env_01_dawn_river.jpg",
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

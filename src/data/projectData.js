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
      { step: "01", name: "角色与妆造", desc: "5位主唱(Moon/Coco/Kitty/茵茵/Sam)+1位特邀领唱Alicia(京腔)" },
      { step: "02", name: "服装二选一", desc: "嘻哈工装(红韵/红潮) & 盛典旗袍(和韵/金韵)" },
      { step: "03", name: "概念场景库", desc: "龙鼓大院/水墨书斋/月影深闺/竹海晨光/漓江破晓" },
      { step: "04", name: "分镜四大方程式", desc: "歌词分段 + 建议场景 + 参与人物 = 画面效果图" },
      { step: "05", name: "审片与修改清单", desc: "点对点打标反馈与一键生成导出" }
    ]
  },

  // 2 套全新高定服装方案（已彻底替换旧设计）
  wardrobe: {
    set1_streetwear: {
      categoryName: "造型一：全新国潮嘻哈街舞风 (New Contemporary Hip-Hop Streetwear)",
      usageScenes: "用于：Intro 街舞开局、舞狮互动、Verse 2 燃舞台、Outro 뛰어!(Jump!) 终极跳跃",
      selectedOption: "option_a",
      options: [
        {
          id: "option_a",
          name: "《红韵新潮高定舞台版》",
          code: "HIP-HOP 2026-A",
          concept: "CHINESE CONTEMPORARY STREETWEAR X HIP-HOP DANCE X STAGE ENERGY",
          image: "/wardrobe/set1_xihua_02_kitty.png",
          vibe: "红色扣饰 · 云纹夹克 · 斜织带机能 · 丝绸工装",
          details: [
            "茵茵: 红色斜织带连帽街舞套装 (Hooded Strapped Dancewear)",
            "Kitty: 新中式红色扣饰街舞装 (Chinese Buckle Cropped Jacket)",
            "Coco: 红色云纹短袖唐装棒球夹克 (Cloud Pattern Baseball Jacket)",
            "Sam: 红黑格纹街舞运动造型 (Checkered Athletic Crop Top)",
            "Moon & Alicia: 红丝唐装街头工装造型 (Silk Tang Jacket Cargo Look)"
          ],
          pros: "高饱和度正红与暗黑撞色，唐装盘扣与现代嘻哈工装利落廓形，专为齐舞爆发力定制。"
        },
        {
          id: "option_b",
          name: "《红丝唐装与云纹潮流版》",
          code: "HIP-HOP 2026-B",
          concept: "RED SILK TANG SUIT X STREET CARGO X MODERN MOVEMENT",
          image: "/wardrobe/set1_xihua_05_moon_alicia.png",
          vibe: "真丝光泽 · 棒球领撞色 · 格纹拼边 · 动感舞台",
          details: [
            "Coco: 宽松大廓形云纹唐装短袖夹克",
            "Moon: 高定立领红丝唐装配黑色束脚马丁靴",
            "Kitty: 经典对称红盘扣修身短外套",
            "Sam: 动感露脐黑红格纹街舞套装",
            "茵茵: 飘逸连帽斜向几何织带战袍"
          ],
          pros: "丝绸面料与云纹提花剪裁，在摄影机聚光灯下反光细腻奢华，充满现代青春动感。"
        }
      ]
    },
    set2_qipao: {
      categoryName: "造型二：全新盛典中国风 (New Grand Chinese Heritage & Dance Gown)",
      usageScenes: "用于：京腔开门红、年夜饭长桌、阿公阿嬷温情记忆、万盏心灯大合唱",
      selectedOption: "option_a",
      options: [
        {
          id: "option_a",
          name: "《中国风盛典华章》",
          code: "HERITAGE 2026-A",
          concept: "TRADITIONAL EMBROIDERY, CLOUD COLLAR, HORSE-FACE SKIRT, CELESTIAL GRACE",
          image: "/wardrobe/set2_zhongguo_01_yinyin.png",
          vibe: "绣金云肩 · 桃枝金绣旗袍 · 朱红马面裙 · 盛典唐装",
          details: [
            "茵茵: 绣金云肩红舞裙 (Embroidered Cloud Collar Flowing Gown)",
            "Moon & Alicia: 桃枝金绣红韵舞台旗袍 (Peach Blossom Branch Gold Qipao)",
            "Coco: 朱红金绣唐装阔腿裤舞台装 (Gold Embroidered Tang Pantsuit)",
            "Kitty: 朱红马面裙梅云金绣舞台套装 (Plum & Cloud Mamian Skirt)",
            "Sam: 绯红桃枝汉服舞装 (Crimson Peach Blossom Hanfu Dance Dress)"
          ],
          pros: "汇聚云肩、马面裙、金绣唐装与桃枝旗袍等多重非遗国风精粹，端庄大气，与新春大爱主题完美呼应！"
        },
        {
          id: "option_b",
          name: "《桃韵金枝华裳舞裙》",
          code: "HERITAGE 2026-B",
          concept: "GOLD EMBROIDERED SILK QIPAO X MAMIAN SKIRT X HEAVENLY DANCE",
          image: "/wardrobe/set2_zhongguo_02_moon_alicia.png",
          vibe: "生机桃枝 · 繁花织锦 · 宽袍大袖 · 礼仪之邦",
          details: [
            "Alicia: 桃枝金绣立领正红戏曲华服",
            "Kitty: 传统梅云金绣朱红马面长裙",
            "Coco: 金线缠枝莲纹唐装配阔腿裤",
            "Sam: 灵动飘逸绯红桃枝大袖汉服舞裙",
            "Moon: 典雅修身桃枝金绣立领旗袍",
            "茵茵: 层叠云肩与大摆红绸舞裙"
          ],
          pros: "桃枝金绣意象呼应‘世外桃源’全新场景，在暗调心灯与金色天光前呈现出极致的电影级质感。"
        }
      ]
    }
  },

  // 6 位核心主角阵容（5位主唱: Moon/Coco/Kitty/茵茵/Sam + 1位特邀京腔领唱: Alicia）
  characters: [
    {
      id: "char_alicia",
      name: "Alicia (特邀领唱)",
      role: "特邀领唱 · 京腔国粹 · 归家导航",
      vibe: "Cinematic · Traditional Meets Modern · Clear Voice",
      costume: "灰色时尚西装与复古红框眼镜，现代知性融合国风红灯笼意象",
      image: "/characters/char_01_office.jpg",
      loraKeywords: "Alicia, Asian woman in grey stylish blazer, round glasses, dark hair with blunt bangs, singing Peking opera pose, red lanterns in background",
      lyricsPart: "【特邀京腔领唱】红灯笼高挂，全城在欢呼！归家的导航，幸福已切入！"
    },
    {
      id: "char_moon",
      name: "Moon",
      role: "主唱 · 世代记号 · 跨越南洋 · 唯美天籁",
      vibe: "Regal · Deep Emotion · Cobalt Blue · Silky Vocal",
      tagline: "穿破天空的鞭炮，那是世代的记号",
      costume: "皇家钴蓝风琴褶长裙、飘带领结、气球袖、闪钻耳坠，端庄大气",
      image: "/characters/char_06_moon_hd.jpg",
      loraKeywords: "Moon, elegant Asian female singer, wavy dark brown hair, cobalt blue pleated silk evening gown, ribbon tie neck, long bishop sleeves, sparkling diamond drop earrings, singing into retro microphone",
      lyricsPart: "【主唱】穿破天空的鞭炮，那是世代的记号 / 阿公阿嬷牵过的手 / 跨越南洋的深海 / 照亮整个夜空"
    },
    {
      id: "char_coco",
      name: "Coco",
      role: "主唱 · 嘻哈开篇 · 舞狮 Swag · 街舞担当",
      vibe: "Be Real · Swag · Hip-hop · Never Lay Low",
      tagline: "We never lay low / 乘风破浪的先辈，Swag刻在血脉",
      costume: "Balenciaga 黑色宽松短袖、马丁靴、双编发、翡翠玉坠",
      image: "/characters/char_03_coco_hd.jpg",
      loraKeywords: "Coco, curvy Asian dancer, Balenciaga black oversized t-shirt, combat boots, double braids, jade necklace, hip-hop dynamic rap pose",
      lyricsPart: "【主唱】Yeah, light it up! / 舞狮鼓声传千里，We never lay low / 一桌菜等一年久 / 乘风破浪的先辈，Swag刻在血脉"
    },
    {
      id: "char_kitty",
      name: "Kitty",
      role: "主唱 · 准备好了没 · 敬茶礼仪 · 根脉深植",
      vibe: "Rooted · Resilient · Warm · Sincere",
      tagline: "准备好了没？ / 外面的风浪再大，根脉依然在心底绕",
      costume: "黑色无袖立领衬衫、干练盘发带淡紫发圈、手臂纹身、双手稳重",
      image: "/characters/char_04_kitty_hd.jpg",
      loraKeywords: "Kitty, stylish Asian woman, sleeveless black mandarin collar shirt, arm tattoo, holding traditional hot Chinese tea cup, calm confident smile",
      lyricsPart: "【主唱】新年到 / 提醒着我们珍惜 / 准备好了没？ / 一句好话、一次帮助、一个微笑的照面 / 敬上一杯热茶"
    },
    {
      id: "char_yinyin",
      name: "茵茵 (YIN YIN)",
      role: "主唱 · 红包祝福 · 优雅旋转 · 生命 Idol",
      vibe: "Grace · Elegance · Compassion · Light Bearer",
      tagline: "红包里的祝福，装满期待把你当成宝 / 做别人生命里的 Idol",
      costume: "白色短西装、黑色飘逸长裙、金色挑染、蝴蝶胸针、舒展舞姿",
      image: "/characters/char_02_yinyin_hd.jpg",
      loraKeywords: "Yin Yin, elegant woman, cropped white blazer, black flowing evening gown, ballet extension pose, holding warm glowing lantern light",
      lyricsPart: "【主唱】红包里的祝福，装满期待把你当成宝 / 点燃心灯！/ 一盏灯火，绝对不只照亮一个屋檐 / 做别人生命里的 Idol"
    },
    {
      id: "char_sam",
      name: "Sam",
      role: "主唱 · 现代舞动 · 每一份爱 · 沉稳依靠",
      vibe: "Energetic · Natural · Modern Movement · Passion",
      tagline: "眼前每一份爱，都是我们一生的依靠",
      costume: "简约黑T、直筒修身牛仔裤、白球鞋、金色挑染公主半编发、圆环耳环",
      image: "/characters/char_05_sam_hd.jpg",
      loraKeywords: "Sam, athletic Asian dancer in black fitted t-shirt, blue jeans, white sneakers, hoop earrings, energetic jump and modern dance pose",
      lyricsPart: "【主唱】You know what to do / 眼前每一份爱，都是我们一生的依靠 / 曾有盏灯照亮我 / 能让寒冷冰封之地 瞬间切换成春天"
    }
  ],

  // 2 大核心国风核心场景库 (龙鼓殿 & 桃花源)
  environments: [
    {
      id: "env_longgu_dian",
      name: "龙鼓殿 · 华灯夜影与翡翠鼓阵主舞台",
      lightingTag: "华灯琥珀 · 翡翠夜影",
      image: "/environments/longgu_dian/日光下的华丽龙鼓殿堂.png",
      shots: [
        { title: "日光下的华丽龙鼓殿堂 (宏伟全景)", url: "/environments/longgu_dian/日光下的华丽龙鼓殿堂.png" },
        { title: "暖灯夜色中的中式鼓堂 (金色暖调)", url: "/environments/longgu_dian/暖灯夜色中的中式鼓堂-3.png" },
        { title: "月夜中国鼓堂主舞台 (主舞定格)", url: "/environments/longgu_dian/月夜中国鼓堂主舞台-4.png" },
        { title: "暖灯冷月下的鼓厅 (冷暖双色)", url: "/environments/longgu_dian/暖灯冷月下的鼓厅-1.png" },
        { title: "夜幕下的翡翠鼓阵 (翡翠青辉)", url: "/environments/longgu_dian/夜幕下的翡翠鼓阵-9.png" },
        { title: "高阁俯瞰的琥珀夜鼓厅 (俯仰视角)", url: "/environments/longgu_dian/高阁俯瞰的琥珀夜鼓厅-8.png" },
        { title: "月光与琥珀灯影中的鼓堂 (深邃景深)", url: "/environments/longgu_dian/月光与琥珀灯影中的鼓堂-7.png" },
        { title: "夜幕鼓厅与暖纸灯笼 (飞檐华灯)", url: "/environments/longgu_dian/夜幕鼓厅与暖纸灯笼-6.png" },
        { title: "夜鼓厅西侧掠影 (侧翼长廊)", url: "/environments/longgu_dian/夜鼓厅西侧掠影-2.png" },
        { title: "琥珀夜色中的鼓殿 (暖金宏阔)", url: "/environments/longgu_dian/琥珀夜色中的鼓殿-10.png" },
        { title: "鼓厅夜影空舞场 (开阔地面)", url: "/environments/longgu_dian/鼓厅夜影空舞场-5.png" },
        { title: "灯影下的龙鼓殿 (殿堂正面)", url: "/environments/longgu_dian/灯影下的龙鼓殿.png" }
      ],
      recommendedWardrobe: "全新国潮嘻哈街舞风 (红韵新潮高定 / 红丝唐装潮流)",
      wardrobeReason: "恢弘中式殿堂、翡翠大鼓阵与飞檐高阁，与红黑撞色嘻哈工装、唐装短外套形成极致张力，是全片最核心的主舞燃爆台！",
      lyricsMapping: "【Intro 序章、Verse 1、Verse 2、Outro】特邀京腔开门红 / 舞狮鼓声传千里 / 뛰어! (Jump!) 终极跳跃",
      description: "宏伟壮阔的双层中式龙鼓大殿，整齐陈列巨型战鼓阵与精雕飞檐，暖金纸灯笼与青翠翡翠灯影交织，通明辉煌。",
      lightingDetails: "琥珀金暖灯与高阁冷月清辉形成电影级冷暖双色光，地面青砖与金漆鼓面反射华美镜面反光。",
      cameraGuidance: "低角度穿梭战鼓阵极速推进，中景升降推拉抓取齐舞爆发力，全景俯瞰万千灯火辉映。"
    },
    {
      id: "env_taohua_yuan",
      name: "桃花源 · 世外仙源与溪桥晨光石庭",
      lightingTag: "晨光初照 · 桃李芬芳",
      image: "/environments/taohua_yuan/桃花溪畔石上舞台-1.png",
      shots: [
        { title: "桃花溪畔石上舞台 (临溪起舞)", url: "/environments/taohua_yuan/桃花溪畔石上舞台-1.png" },
        { title: "桃花溪畔石舞台 (近景机位)", url: "/environments/taohua_yuan/桃花溪畔石舞台-2.png" },
        { title: "桃花源石庭晨光 (回廊漫步)", url: "/environments/taohua_yuan/桃花源石庭晨光-3.png" },
        { title: "桃花溪畔的晨光舞台 (粉樱金晖)", url: "/environments/taohua_yuan/桃花溪畔的晨光舞台-4.png" },
        { title: "桃花亭前的晨光舞台 (飞檐石台)", url: "/environments/taohua_yuan/桃花亭前的晨光舞台-5.png" },
        { title: "桃花源溪桥晨光 (落英缤纷)", url: "/environments/taohua_yuan/桃花源溪桥晨光.png" }
      ],
      recommendedWardrobe: "全新盛典中国风 (中国风盛典华章 / 桃韵金枝舞裙)",
      wardrobeReason: "粉白桃花花瓣纷飞与清澈溪流，与旗袍上的花卉金绣（银杏、梅花、金菊）相映成趣，春意盎然、生机勃发。",
      lyricsMapping: "【Rap 1 团圆、Pre-Chorus、Chorus 1、Chorus 2 & 3】年夜饭长桌 / 阿公阿嬷温情 / 万盏心灯大合唱",
      description: "落英缤纷的世外桃花源，清澈溪流穿石而过，溪畔天然巨石构成开阔舞台，桃花古亭掩映在粉红花海中。",
      lightingDetails: "晨光柔和穿透粉色桃花枝桠，花瓣随微风飘落溪水，水波泛着晶莹粉金暖光，充满温润诗意。",
      cameraGuidance: "浅景深特写飘落的桃花花瓣，随即拉开全景展现主角们在溪畔石舞台上的舒展舞姿与终极腾空飞跃。"
    }
  ],

  // 严格根据用户生产公式排布的分镜工单卡：
  // 歌词分段 + 场景建议 + 参与人物 = 我生成的画面效果图/视频 (附画面要求描述)
  // 秒数完全精准契合 04:49 官方音频！
  scenes: [
    {
      id: "SC-001",
      number: 1,
      title: "【Intro & 京腔】龙鼓殿华灯初照 · 5位主唱启航与Alicia惊艳开门红",
      timecode: "00:00 - 00:39",
      startSec: 0,
      endSec: 39,

      lyricsSnippet: `Coco: 'Yeah, light it up!' (00:03)
Kitty & Moon: '新年到' (00:06)
茵茵 & Sam: 'You know what to do' (00:08)
Alicia (特邀京腔领唱): '红灯笼高挂，全城在欢呼！归家的导航，幸福已切入！' (00:12-00:26)`,
      singerHighlight: "Coco (主唱) · Kitty & Moon (主唱) · 茵茵 & Sam (主唱) · Alicia (特邀京腔领唱)",
      suggestedEnvironment: "龙鼓殿 · 华丽殿堂与翡翠鼓阵主舞台",
      environmentId: "env_longgu_dian",
      participatingCast: [
        { name: "Coco", role: "主唱 (开篇律动起范 / 'Yeah, light it up!')" },
        { name: "Kitty & Moon", role: "主唱 ('新年到' 甜酷双人同框)" },
        { name: "茵茵 & Sam", role: "主唱 ('You know what to do' 默契卡点)" },
        { name: "Alicia", role: "特邀领唱 (京腔国粹 / 旦角身段 / 殿堂中央高光亮相)" }
      ],
      wardrobeNote: "全员首套：全新国潮嘻哈风 (Alicia 红丝唐装工装 / Coco 云纹棒球夹克 / Kitty 红色扣饰夹克 / Moon 红丝唐装 / 茵茵 连帽斜织带 / Sam 红黑格纹)",

      visualRequirements: [
        "构图与机位：大广角由龙鼓殿青砖地面急速前推，双层飞檐大殿华灯初上；前奏接力后，大殿朱红大门缓缓洞开，升降摇臂推向中央至高台 Alicia",
        "角色表演：Coco 率先律动起范；Kitty 与 Moon 相视一笑合唱；茵茵与 Sam 默契同框；Alicia 雍容端庄，起兰花指与旦角身段唱响高亢京腔",
        "光影与特效：暖黄纸笼渐次亮起，与夜空冷月辉映；金漆战鼓反射璀璨光芒，红绸在鼓风机中凌空飘扬，全城红灯笼意象震撼开局"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/longgu_dian/日光下的华丽龙鼓殿堂.png",
        caption: "AI 最终生成效果图：龙鼓殿华丽殿堂与战鼓陈列，5位主唱启航与京腔引爆全片",
        modelEngine: "Flux.1 Pro + Midjourney v6.1",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Ascending crane tracking shot rising through dragon drum hall, framing Alicia amidst golden lit lanterns",
      lighting: "Cinematic amber lantern warmth contrasting with cool night sky through open pavilions",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro / Midjourney v6.1",
          prompt: "Cinematic shot of majestic traditional Chinese dragon drum hall at night, illuminated by golden warm paper lanterns, monumental red war drums, ancient wooden architectural beams, Alicia in stylish red Chinese jacket singing Peking opera pose --ar 16:9",
          notes: "将开篇5位主唱接力与特邀京腔的气势通过华丽龙鼓殿与巨型战鼓具象化。"
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
          mediaUrl: "/environments/longgu_dian/暖灯夜色中的中式鼓堂-3.png",
          notes: "战鼓共鸣震颤与灯影流动测试。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/longgu_dian/日光下的华丽龙鼓殿堂.png",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: [
        {
          id: "fb-401",
          author: "Ron (Director)",
          date: "2026-09-20 22:45",
          tag: "场景与歌词对齐",
          content: "龙鼓殿恢弘大殿配合京腔起调，视听冲击力极大，确认定稿！",
          resolved: true
        }
      ]
    },
    {
      id: "SC-002",
      number: 2,
      title: "【Verse 1 民俗与根脉】龙鼓殿夜幕鼓阵 · 穿破天空的鞭炮与根脉交织",
      timecode: "00:39 - 01:08",
      startSec: 39,
      endSec: 68,

      lyricsSnippet: `Moon: '穿破天空的鞭炮，那是世代的记号' (00:40)
Coco & Sam: '舞狮鼓声传千里， We never lay low' (00:48)
茵茵: '红包里的祝福，装满期待把你当成宝' (00:55)
Kitty & Sam & Moon: '外面的风浪再大，根脉依然在心底绕' (01:02)`,
      singerHighlight: "Moon (独唱) · Coco & Sam (双人) · 茵茵 (独唱) · Kitty & Sam & Moon (三人合唱)",
      suggestedEnvironment: "龙鼓殿 · 翡翠夜影鼓阵与大殿回廊",
      environmentId: "env_longgu_dian",
      participatingCast: [
        { name: "Moon", role: "主唱 (Verse 1 独唱领起 / 战鼓与鞭炮世代记号)" },
        { name: "Coco & Sam", role: "主唱 (醒狮鼓点卡点跳跃与双人 Low Stance 街舞)" },
        { name: "茵茵", role: "主唱 (长廊暖灯双手送出烫金红包，温情凝望)" },
        { name: "Kitty & Sam & Moon", role: "主唱 (主殿台阶前品字形并肩合唱，手按心口)" }
      ],
      wardrobeNote: "全新国潮嘻哈风 (Moon 红丝唐装 / Coco 云纹夹克 / Sam 红黑格纹 / 茵茵 连帽斜织带 / Kitty 扣饰夹克)",

      visualRequirements: [
        "构图与机位：快节奏卡点剪辑（122 BPM），在翡翠青绿与暖金光影的巨型鼓阵间穿梭，Moon 战鼓独唱、舞狮起落、茵茵红包特写流畅连贯",
        "角色表演：Moon 眼神笃定气场全开；Coco 与 Sam 戴翡翠项链低重心卡点街舞；茵茵温情递出烫金红包；三人合唱坚毅手按胸口",
        "光影与特效：金色礼花火星飞散，鼓面红绸在气流中微颤，青砖地面反射华丽光晕"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/longgu_dian/夜幕下的翡翠鼓阵-9.png",
        caption: "AI 最终生成效果图：夜幕下翡翠青辉与暖纸灯笼辉映的宏大鼓阵",
        modelEngine: "Flux.1 Pro",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Dynamic whip pan from golden spark burst to dancers groove between rows of monumental Chinese drums",
      lighting: "Dramatic emerald rim light combined with glowing amber paper lantern radiance",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Cinematic shot of Asian hip-hop dancers performing between monumental traditional Chinese war drums in a grand ancient courtyard, dramatic rim lighting, embers in air --ar 16:9",
          notes: "国风鼓乐与现代街舞激烈碰撞。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_06_moon_hd.jpg",
          notes: "Moon 面部特征与红丝唐装造型锁定基准。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/longgu_dian/暖灯冷月下的鼓厅-1.png",
          notes: "鼓声卡点 122 BPM 与光线跃动测试。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/longgu_dian/夜幕下的翡翠鼓阵-9.png",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-003",
      number: 3,
      title: "【Rap 1 团圆欢聚】桃花源石庭晨光 · 一家团圆满屋欢笑",
      timecode: "01:08 - 01:26",
      startSec: 68,
      endSec: 86,

      lyricsSnippet: `Coco: '一桌菜等一年久，就盼着这一刻来到' (01:09)
茵茵 & Moon: '一家团圆满屋欢笑，迎接新春多热闹' (01:13)
Kitty & Coco: '提醒着我们珍惜，把岁月紧紧抓牢' (01:17)
Sam: '眼前每一份爱，都是我们一生的依靠' (01:21)`,
      singerHighlight: "Coco (独唱) · 茵茵 & Moon (双人) · Kitty & Coco (双人) · Sam (独唱)",
      suggestedEnvironment: "桃花源 · 世外仙源与石庭晨光",
      environmentId: "env_taohua_yuan",
      participatingCast: [
        { name: "Coco", role: "主唱 (石庭长席旁轻快 Rap 律动·盼望团聚)" },
        { name: "茵茵 & Moon", role: "主唱 (并肩而坐添汤夹菜，满屋欢声笑语)" },
        { name: "Kitty & Coco", role: "主唱 (轻抚老相册与长辈之手，动情合唱)" },
        { name: "Sam", role: "主唱 (端坐石案深情凝望全场，沉稳总结)" }
      ],
      wardrobeNote: "切换至第二套：《中国风盛典华章》新中式典雅旗袍与汉服系列 (朱红马面、云肩舞裙、桃枝旗袍)",

      visualRequirements: [
        "构图与机位：平稳滑轨推镜（Steadicam），顺着桃花源石庭长案缓缓扫过冒着热气的年夜饭与青瓷茶具",
        "角色表演：家人笑逐颜开相互夹菜举杯，Coco 爽朗说唱，茵茵与 Moon 亲切相视，Sam 眼神满是对阖家团聚的珍惜与依靠",
        "光影与特效：晨光斜穿桃花粉樱枝桠，菜肴上方蒸腾出白色的袅袅热气，充满人间烟火气"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/taohua_yuan/桃花源石庭晨光-3.png",
        caption: "AI 最终生成效果图：桃花源石庭晨光漫射、热气腾腾年夜饭与阖家欢聚",
        modelEngine: "Midjourney v6.1",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Slow warm tracking shot along overflowing family feast table in open traditional stone pavilion garden",
      lighting: "Soft diffuse morning mist and warm golden sunbeams through pink peach blossom canopy",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Midjourney v6.1",
          prompt: "Cinematic tracking shot of lavish Lunar New Year reunion dinner table placed in an ancient stone courtyard surrounded by blooming pink peach blossoms, morning golden sun rays, steaming dishes --ar 16:9",
          notes: "核心情感爆发点：一家团圆满屋欢笑。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_02_yinyin_hd.jpg",
          notes: "茵茵与 Moon 端庄优雅笑容。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/taohua_yuan/桃花亭前的晨光舞台-5.png",
          notes: "饭菜热气上升流体与落英动态。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/taohua_yuan/桃花源石庭晨光-3.png",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-004",
      number: 4,
      title: "【Pre-Chorus 代际破晓】桃花源溪桥晨光 · 阿公阿嬷牵过的手",
      timecode: "01:26 - 01:56",
      startSec: 86,
      endSec: 116,

      lyricsSnippet: `Coco & Moon: '阿公阿嬷牵过的手，这份温暖我收好' (01:27)
茵茵 & Kitty: '那些接力过的爱，点亮前路的破晓' (01:34)
Coco & Sam: '曾有盏灯照亮我，穿过狂雨和风暴' (01:41)
茵茵 & Kitty & Moon & Sam: 'Now it's my turn，把黑暗都燃烧' (01:49)
Kitty: '准备好了没？' (01:56)`,
      singerHighlight: "Coco & Moon · 茵茵 & Kitty · Coco & Sam · 四人合力爆发 ➔ Kitty 单人定音",
      suggestedEnvironment: "桃花源 · 清澈溪桥与晨雾落英",
      environmentId: "env_taohua_yuan",
      participatingCast: [
        { name: "Coco & Moon", role: "主唱 (桥头抚摸长辈手心，温情二重唱)" },
        { name: "茵茵 & Kitty", role: "主唱 (清溪石径心灯初次交接)" },
        { name: "Coco & Sam", role: "主唱 (风暴穿行记忆回首)" },
        { name: "茵茵 & Kitty & Moon & Sam", role: "主唱 (4人桥头并肩爆发誓言)" },
        { name: "Kitty", role: "主唱 ('准备好了没？' 绝美单人超大特写)" }
      ],
      wardrobeNote: "《中国风盛典华章》 (Kitty 朱红马面裙 / 茵茵 绣金云肩裙 / Moon 桃枝金绣 / Coco & Sam 雅致立领汉服)",

      visualRequirements: [
        "构图与机位：诗意摇镜，由古木溪桥上交握的手部特写慢慢移向桃花溪畔晨光微透的天空，4人合唱汇聚，最后急推至 Kitty 超大特写",
        "角色表演：眼神从含泪感恩逐渐转为无比笃定，最后那句独白‘准备好了没？’气场震慑全场",
        "光影与特效：晨曦穿透晨雾洒在清溪流水与落英上，心灯金光泛起，照亮人物坚毅的面庞"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/taohua_yuan/桃花源溪桥晨光.png",
        caption: "AI 最终生成效果图：桃花源溪桥晨光、落英流水与传递的温情心灯",
        modelEngine: "Midjourney v6.1",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Slow poetic pan across rustic wooden bridge over tranquil creek bordered by blooming peach trees",
      lighting: "Soft diffuse morning mist breaking into gentle warm golden backlit rays",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Midjourney v6.1",
          prompt: "Atmospheric traditional wooden bridge over crystal clear stream bordered by blossoming peach trees in morning mist, emotional warm glowing heart lantern held by singer, cinematic backlight --ar 16:9",
          notes: "为点燃心灯积蓄深情的情感基调。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_04_kitty_hd.jpg",
          notes: "Kitty 笃定眼神与立领长裙基准。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/taohua_yuan/桃花亭前的晨光舞台-5.png",
          notes: "心灯微光亮起并映照面庞测试。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/taohua_yuan/桃花源溪桥晨光.png",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-005",
      number: 5,
      title: "【Chorus 1 首唱高潮】桃花溪畔天然石台 · 点燃心灯！善意无限接通",
      timecode: "01:57 - 02:25",
      startSec: 116,
      endSec: 145,

      lyricsSnippet: `茵茵 & Kitty & Moon: '点燃心灯！' (01:57)
Coco & Sam: 'Light it up!' (01:59)
茵茵 & Kitty & Moon: '照亮整个夜空！' (02:00)
茵茵 & Kitty & Moon: '点燃心灯！' (02:04)
Coco & Sam: 'Pass it on!' (02:06)
茵茵 & Kitty & Moon: '善意无限接通！' (02:08)
大合唱: '万千新年灯火连成 千家万户的希望' (02:11)
茵茵 & Sam / Kitty & Coco & Moon: '我的光 / 你的光' (02:18)
大合唱: '这份温暖，世世代代相传' (02:21-02:25)`,
      singerHighlight: "对唱组 (茵茵&Kitty&Moon 对 Coco&Sam) ➔ 全员大合唱 (我的光/你的光交错)",
      suggestedEnvironment: "桃花源 · 桃花溪畔石上天然舞台",
      environmentId: "env_taohua_yuan",
      participatingCast: [
        { name: "茵茵 & Kitty & Moon", role: "主唱 (三人领唱组·巨石托灯优雅旋转)" },
        { name: "Coco & Sam", role: "主唱 (双人对答组·两岸力量卡点起跃)" },
        { name: "全员 6 人", role: "全员 (大合唱·我的光/你的光光柱汇聚)" }
      ],
      wardrobeNote: "选定《中国风盛典华章》 (绣金云肩红舞裙在桃花溪畔旋转盛放)",

      visualRequirements: [
        "构图与机位：360度环绕升降运镜（Orbit Upwards），从三人捧着心灯的手部特写逐渐拉出至桃花溪畔巨石舞台与两岸卡点对答",
        "角色表演：茵茵、Kitty、Moon在溪流巨石上舒展旋转；Coco 与 Sam 力量感跳跃呼应；全员分屏推光汇聚",
        "光影与特效：晨光穿透花海，溪水泛起粼粼金光，心灯微粒如萤火虫般漫天飞舞，纯洁神圣"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/taohua_yuan/桃花溪畔石上舞台-1.png",
        caption: "AI 最终生成效果图：桃花溪畔天然巨石舞台、落英缤纷与全员心灯接力",
        modelEngine: "Flux.1 Pro",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "360-degree tracking shot around dancer spinning on riverside stone platform, blooming peach flowers drifting",
      lighting: "Glorious golden morning rim lighting, clear stream catching amber sunbeams",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Monumental natural stone stage beside a crystal clear river creek, thousands of blooming pink peach trees, dancers performing chorus dance in regal red dresses, golden morning sunbeams, cinematic epic --ar 16:9",
          notes: "象征心灯穿透迷雾，善意无限接通。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_02_yinyin_hd.jpg",
          notes: "茵茵云肩长裙与旋转舞姿。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/taohua_yuan/桃花溪畔石舞台-2.png",
          notes: "桃花落瓣流体与水流微澜测试。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/taohua_yuan/桃花溪畔石上舞台-1.png",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-006",
      number: 6,
      title: "【Rap 2 大爱心灯】龙鼓殿夜色通明 · 6行大爱金句递进与化身光线",
      timecode: "02:25 - 02:50",
      startSec: 145,
      endSec: 170,

      lyricsSnippet: `茵茵: '一盏灯火，绝对不只照亮一个屋檐' (02:25)
Coco: '这份大爱，注定能够走到无限遥远' (02:30)
Kitty: '一句好话、一次帮助、一个微笑的照面' (02:33)
Sam & Moon: '能让寒冷冰封之地 瞬间切换成春天' (02:36)
茵茵 & Kitty: '原来最珍贵的福气，不是自己多耀眼' (02:40)
Coco & Sam & Moon: '而是别人需要时候，你化身那道光线' (02:44)`,
      singerHighlight: "茵茵 ➔ Coco ➔ Kitty ➔ Sam & Moon ➔ 茵茵 & Kitty ➔ Coco & Sam & Moon",
      suggestedEnvironment: "龙鼓殿 · 暖灯冷月下的鼓厅",
      environmentId: "env_longgu_dian",
      participatingCast: [
        { name: "茵茵", role: "主唱 (长廊漫步虚托微光，慈悲大爱)" },
        { name: "Coco", role: "主唱 (自信步伐极目远眺，无限遥远)" },
        { name: "Kitty", role: "主唱 (侧颜微笑轻抚镜头，如沐春风)" },
        { name: "Sam & Moon", role: "主唱 (双人并肩，冷调瞬间切换漫堂暖金春天)" },
        { name: "茵茵 & Kitty", role: "主唱 (双人依偎步下台阶，明悟真谛)" },
        { name: "Coco & Sam & Moon", role: "主唱 (三人核心平推璀璨金色光束)" }
      ],
      wardrobeNote: "全新国潮嘻哈风 (红丝唐装 / 云纹夹克 / 红黑格纹 / 扣饰夹克 / 斜织带)",

      visualRequirements: [
        "构图与机位：六人层次分明的快速单人/双人/三人特写切换，背景虚化为龙鼓殿高阁的暖红灯笼光斑，最后汇聚为三人平推金光",
        "角色表演：每个人的眼神从内敛微笑到开朗笃定，将大爱慈悲的温度传达给镜头前的观众",
        "光影与特效：随着'瞬间切换成春天'的唱词，冷调夜影瞬间被暖金灯影充盈，鼓殿流光溢彩"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/longgu_dian/暖灯冷月下的鼓厅-1.png",
        caption: "AI 最终生成效果图：暖灯冷月双色映照的鼓厅，主角化身光线照亮人间",
        modelEngine: "Flux.1 Pro",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Quick cinematic character portrait cuts syncing with rapid vocal lines into slow sunburst bloom",
      lighting: "Dynamic illumination transition as warm lanterns flare through grand drum hall interior",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Cinematic portrait shots of Asian dancers in red stylish Chinese streetwear walking through ancient drum hall into warm golden lantern light, radiant smiles, spiritual transformation --ar 16:9",
          notes: "突出‘化身那道光线’的利他大爱哲学。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_05_sam_hd.jpg",
          notes: "Sam 与全员微表情温暖笃定。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/longgu_dian/鼓厅夜影空舞场-5.png",
          notes: "光线强弱渐变动画测试。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/longgu_dian/暖灯冷月下的鼓厅-1.png",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-007",
      number: 7,
      title: "【Verse 2 南洋深海与敬茶】龙鼓殿月影大堂 · 跨越南洋深海与敬茶传承",
      timecode: "02:50 - 03:33",
      startSec: 170,
      endSec: 213,

      lyricsSnippet: `Moon & Sam: '跨越南洋的深海，一路燃到这舞台' (03:05)
Coco & 茵茵: '乘风破浪的先辈，Swag刻在血脉' (03:12)
Kitty & Sam: '敬上一杯热茶，传承不只是一个 Title' (03:19)
茵茵 & Moon: '化作那一道光芒，做别人生命里的 Idol' (03:26)`,
      singerHighlight: "Moon & Sam · Coco & 茵茵 · Kitty & Sam (敬茶) · 茵茵 & Moon (Idol 升华)",
      suggestedEnvironment: "龙鼓殿 · 月光与琥珀灯影中的中式大堂",
      environmentId: "env_longgu_dian",
      participatingCast: [
        { name: "Moon & Sam", role: "主唱 (深海波光倒影中背靠背史诗亮相)" },
        { name: "Coco & 茵茵", role: "主唱 (街头 Swag 与国风身段碰撞)" },
        { name: "Kitty & Sam", role: "主唱 (红木案前双手平举茶盅庄重敬热茶)" },
        { name: "茵茵 & Moon", role: "主唱 (高阁凭栏相视而唱，做生命里的 Idol)" }
      ],
      wardrobeNote: "《中国风盛典华章》新中式典雅礼服 (Kitty 朱红马面裙敬茶 / 茵茵 绣金云肩 / Moon 雅致立领)",

      visualRequirements: [
        "构图与机位：大堂飞檐雕花长廊深处，镜头由宏阔鼓厅缓缓推向红木大案，特写 Kitty 双手平举敬茶的端庄神情",
        "角色表演：Kitty 眼神恭敬庄严，向先辈与天地敬茶；茵茵与 Moon 在'Idol'高音处凭栏仰首，琥珀灯影映亮全身",
        "光影与特效：热茶水汽袅袅升起，在青铜战鼓与金色灯影中化作璀璨微尘，呈现最高规格东方传承意境"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/longgu_dian/月光与琥珀灯影中的鼓堂-7.png",
        caption: "AI 最终生成效果图：月光与琥珀灯影中的宏阔鼓堂，案头敬热茶仪式",
        modelEngine: "Flux.1 Pro",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Sweeping crane move descending between wooden pillars down to macro shot of steaming tea cup",
      lighting: "Rich amber golden light through paper lattice windows, cinematic tea steam illumination",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Cinematic close-up of mature Asian woman in red gold traditional high collar gown gracefully serving hot steaming tea in ceramic cup with two hands, ancient Chinese drum hall background, golden dusty light --ar 16:9",
          notes: "敬茶仪式升华南洋薪火相传。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_04_kitty_hd.jpg",
          notes: "Kitty 敬茶大家风范。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/longgu_dian/夜鼓厅西侧掠影-2.png",
          notes: "大堂长廊景深与水汽动态。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/longgu_dian/月光与琥珀灯影中的鼓堂-7.png",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-008",
      number: 8,
      title: "【Chorus 2 & 扩展 浩瀚盛典】桃花源落英晨光 · 众生觉心与照亮浩瀚彼岸",
      timecode: "03:34 - 04:29",
      startSec: 213,
      endSec: 269,

      lyricsSnippet: `大合唱: '点燃心灯！(Light it up!) 照亮整个夜空！' (03:35)
大合唱: '点燃心灯！(Pass it on!) 善意无限接通！' (03:42)
大合唱: '万千新年灯火连成 千家万户的希望 / 我的光，你的光 / 这份温暖，世世代代相传' (03:49)
【扩展高潮】大合唱: '点燃心灯！(Light it up!) 照亮浩瀚彼岸！' (04:02)
【扩展高潮】大合唱: '点燃心灯！(Pass it on!) 众生觉心点亮！' (04:09)
【扩展高潮】大合唱: '感恩过去修正现在，创造未来的光芒' (04:16)
【扩展高潮】大合唱: '慈爱光 智慧光 / 清明闪耀 照见生命破晓' (04:23-04:29)`,
      singerHighlight: "全员 6 位主角 (Alicia 特邀领唱 + 5位主唱) 终极升调大合唱",
      suggestedEnvironment: "桃花源 · 桃花溪畔晨光大舞台",
      environmentId: "env_taohua_yuan",
      participatingCast: [
        { name: "Alicia", role: "特邀领唱 (居中引领全员庄严启航)" },
        { name: "Moon · Coco · Kitty · 茵茵 · Sam", role: "5位主唱 (全员盛典华服·双手托灯·点亮浩瀚彼岸)" }
      ],
      wardrobeNote: "全员《中国风盛典华章》顶级高定 (重工金线在晨曦中熠熠生辉)",

      visualRequirements: [
        "构图与机位：大广角航拍无人机超大远景，自桃花源清溪上空掠过，仰冲向满天红霞与万千升腾的心灯",
        "角色表演：Alicia 居中，5 位主唱在桃花盛放的溪岸并肩定格，红衣与粉桃绿水形成鲜明对比，双手放飞无数盏金色心灯",
        "光影与特效：晨光万丈穿透薄雾，数千盏心灯漂浮升向苍穹，溪水泛金，漫天落英飞舞"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/taohua_yuan/桃花溪畔的晨光舞台-4.png",
        caption: "AI 最终生成效果图：桃花源晨光旭日，数千盏心灯升入浩瀚彼岸",
        modelEngine: "Flux.1 Pro / Multi-LoRA Composite",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Sweeping epic drone shot between flowering peach blossom trees, sun flare revealing floating heart lanterns",
      lighting: "Glorious golden dawn sunrise illumination over misty mountain creek",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Cinematic majestic wide shot, golden sunrise breaking through morning mist over creek bordered by blooming peach blossom trees, thousands of glowing lotus heart lanterns floating into sky, six Asian women in red gold regal dresses on shore --ar 16:9",
          notes: "全曲最震撼灵魂的画面，点亮浩瀚彼岸与众生觉心。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_02_yinyin_hd.jpg",
          notes: "茵茵与全员庄严神圣姿态。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/taohua_yuan/桃花溪畔石上舞台-1.png",
          notes: "千盏心灯升空与落英飘拂动态。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/taohua_yuan/桃花溪畔的晨光舞台-4.png",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-009",
      number: 9,
      title: "【Outro 终章燃爆】龙鼓殿主舞台齐舞 · 뛰어! (Jump!) 薪火相传全员滞空",
      timecode: "04:30 - 04:49",
      startSec: 269,
      endSec: 289,

      lyricsSnippet: `大合唱: '뛰어! (Jump!)' (04:30)
Sam & Coco & Moon: 'Hey! 薪火相传，Let's go!' (04:31)
茵茵 & Kitty: 'Jump! 灯火全开，Make it glow!' (04:34)
大合唱: '一盏传 一盏一颗心，暖一颗心！' (04:37)
大合唱: '뛰어! (Jump!)' (04:40-04:49)`,
      singerHighlight: "大合唱 ➔ Sam & Coco & Moon ➔ 茵茵 & Kitty ➔ 全员 6 人 120fps 慢动作大跳跃定格",
      suggestedEnvironment: "龙鼓殿 · 月夜中国鼓堂主舞台",
      environmentId: "env_longgu_dian",
      participatingCast: [
        { name: "Alicia · Moon · Coco · Kitty · 茵茵 · Sam", role: "6 人在龙鼓殿主舞台同时起跳，慢动作滞空 1.5 秒" }
      ],
      wardrobeNote: "全员全新国潮嘻哈街舞风 (红装抽绳与大口袋在空中飞扬)",

      visualRequirements: [
        "构图与机位：正面中景高速摄影机（120fps 慢动作升格），抓取 6 人在龙鼓殿巨型战鼓主舞台前同时腾空起跳的瞬间",
        "角色表演：跳跃至最高点滞空时，所有人露出灿烂狂欢的笑容，双手比出‘托心灯’手势",
        "光影与特效：金色彩带炮与满堂华灯在空中轰鸣炸裂，天边成千上万盏心灯冉冉升起，全片在最热烈的金色欢呼中定格"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/longgu_dian/月夜中国鼓堂主舞台-4.png",
        caption: "AI 最终生成效果图：龙鼓殿主舞台全员 120fps 慢动作跳跃滞空与漫天金色彩带",
        modelEngine: "Flux.1 Pro / Multi-LoRA Composite",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Monumental high-speed synchronized jump shot with 6 women on grand drum hall stage, explosive gold confetti cannons",
      lighting: "Full concert hall pyrotechnics, golden lanterns, fireworks finale",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Epic concert grand finale shot, six Asian women in red streetwear jumping in mid-air in front of Chinese war drum stage, fireworks, thousands of golden heart lanterns, triumphant smiles --ar 16:9",
          notes: "全曲燃爆大高潮，心灯接通千家万户。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_03_coco_hd.jpg",
          notes: "Coco 与全员红装跳跃动态。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/longgu_dian/高阁俯瞰的琥珀夜鼓厅-8.png",
          notes: "120fps 慢动作滞空 1.5 秒。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/longgu_dian/月夜中国鼓堂主舞台-4.png",
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

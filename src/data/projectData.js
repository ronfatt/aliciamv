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
      role: "主唱 · Intro 启航 · 唯美蓝调之声",
      vibe: "Regal · Deep Emotion · Cobalt Blue · Silky Vocal",
      tagline: "点燃第一盏灯火，引万千繁星共鸣",
      costume: "皇家钴蓝风琴褶长裙、飘带领结、气球袖、闪钻耳坠，端庄大气",
      image: "/characters/char_06_moon_hd.jpg",
      loraKeywords: "Moon, elegant Asian female singer, wavy dark brown hair, cobalt blue pleated silk evening gown, ribbon tie neck, long bishop sleeves, sparkling diamond drop earrings, singing into retro microphone",
      lyricsPart: "【主唱 Intro 启航】Yeah, light it up! / 点燃这第一盏心灯，让善意穿透长夜..."
    },
    {
      id: "char_coco",
      name: "Coco",
      role: "主唱 · 街舞活力 · 嘻哈 Rap · Swag 担当",
      vibe: "Be Real · Swag · Hip-hop · Never Lay Low",
      tagline: "We never lay low / Swag 刻在血脉",
      costume: "Balenciaga 黑色宽松短袖、马丁靴、双编发、翡翠玉坠",
      image: "/characters/char_03_coco_hd.jpg",
      loraKeywords: "Coco, curvy Asian dancer, Balenciaga black oversized t-shirt, combat boots, double braids, jade necklace, hip-hop dynamic rap pose",
      lyricsPart: "Yeah, light it up! / 舞狮鼓声传千里，We never lay low / 乘风破浪的先辈，Swag 刻在血脉"
    },
    {
      id: "char_kitty",
      name: "Kitty",
      role: "主唱 · 根脉深植 · 敬茶奉献 · 成熟大爱",
      vibe: "Rooted · Resilient · Warm · Sincere",
      tagline: "外面的风浪再大，根脉依然在心底绕",
      costume: "黑色无袖立领衬衫、干练盘发带淡紫发圈、手臂纹身、双手稳重",
      image: "/characters/char_04_kitty_hd.jpg",
      loraKeywords: "Kitty, stylish Asian woman, sleeveless black mandarin collar shirt, arm tattoo, holding traditional hot Chinese tea cup, calm confident smile",
      lyricsPart: "新年到 / 外面的风浪再大，根脉依然在心底绕 / 敬上一杯热茶，传承不只是一个 Title"
    },
    {
      id: "char_yinyin",
      name: "茵茵 (YIN YIN)",
      role: "主唱 · 优雅旋转 · 慈爱温润 · 生命 Idol",
      vibe: "Grace · Elegance · Compassion · Light Bearer",
      tagline: "Grace in every chapter / 点燃心灯",
      costume: "白色短西装、黑色飘逸长裙、金色挑染、蝴蝶胸针、舒展舞姿",
      image: "/characters/char_02_yinyin_hd.jpg",
      loraKeywords: "Yin Yin, elegant woman, cropped white blazer, black flowing evening gown, ballet extension pose, holding warm glowing lantern light",
      lyricsPart: "红包里的祝福，装满期待把你当成宝 / 原来最珍贵的福气，不是自己多耀眼，而是别人需要时候，你化身那道光线"
    },
    {
      id: "char_sam",
      name: "Sam",
      role: "主唱 · 现代舞动 · 南洋深海 · 青春燃力",
      vibe: "Energetic · Natural · Modern Movement · Passion",
      tagline: "跨越南洋的深海，一路燃到这舞台",
      costume: "简约黑T、直筒修身牛仔裤、白球鞋、金色挑染公主半编发、圆环耳环",
      image: "/characters/char_05_sam_hd.jpg",
      loraKeywords: "Sam, athletic Asian dancer in black fitted t-shirt, blue jeans, white sneakers, hoop earrings, energetic jump and modern dance pose",
      lyricsPart: "穿破天空的鞭炮，那是世代的记号 / 跨越南洋的深海，一路燃到这舞台"
    }
  ],

  // 4 大全新国风奇幻核心视觉概念场景库 (已全面替换旧场景)
  environments: [
    {
      id: "env_qihuan_shanshui",
      name: "晨光碧波 · 奇幻山水与湖畔古亭",
      lightingTag: "晨曦初照 · 烟岚碧玉",
      image: "/environments/qihuan_shanshui/晨光中的湖畔古亭-1.png",
      shots: [
        { title: "晨光中的湖畔古亭 (全景视角)", url: "/environments/qihuan_shanshui/晨光中的湖畔古亭-1.png" },
        { title: "晨光下的中式奇幻山水 (群峰倒影)", url: "/environments/qihuan_shanshui/晨光下的中式奇幻山水-2.png" },
        { title: "湖畔古亭与烟岚山湖 (水汽氤氲)", url: "/environments/qihuan_shanshui/湖畔古亭与烟岚山湖-2.png" },
        { title: "亭内静望玉湖群山 (画框借景)", url: "/environments/qihuan_shanshui/亭内静望玉湖群山-3.png" },
        { title: "桃花湖畔的青山亭景 (粉樱点染)", url: "/environments/qihuan_shanshui/桃花湖畔的青山亭景-4.png" }
      ],
      recommendedWardrobe: "盛典金红旗袍 (和韵新春 / 金韵华裳)",
      wardrobeReason: "金红旗袍与翡翠青绿的奇幻山水形成极致国风撞色，晨光穿透烟岚勾勒人物华美金边轮廓。",
      lyricsMapping: "【Intro & Verse 2】点燃心灯 / 烟岚青绿 / 归家的导航",
      description: "如梦似幻的青绿水墨奇幻山水，晨光穿透晨雾洒在如镜的碧玉湖面，湖畔飞檐古亭与远方层峦叠嶂相映生辉。",
      lightingDetails: "柔和的晨曦金光穿透远山烟岚，湖面呈现温润碧玉质感的漫反射与倒影，色彩层次丰富空灵。",
      cameraGuidance: "超广角低空掠过平静湖面，由远及近推向古亭，晨雾在两侧缓缓流动，营造出世仙境质感。"
    },
    {
      id: "env_shanshui_shigong",
      name: "云海崇峦 · 悬崖画廊与山水石宫",
      lightingTag: "暖阳映照 · 浩瀚云海",
      image: "/environments/shanshui_shigong/暖阳映照的山水石宫-3.png",
      shots: [
        { title: "暖阳映照的山水石宫 (主殿全貌)", url: "/environments/shanshui_shigong/暖阳映照的山水石宫-3.png" },
        { title: "悬崖古廊前的静谧舞台 (天然石台)", url: "/environments/shanshui_shigong/悬崖古廊前的静谧舞台-4.png" },
        { title: "云海古廊与远山亭 (长廊远眺)", url: "/environments/shanshui_shigong/云海古廊与远山亭-1.png" },
        { title: "古建长廊远眺云海 (光影通廊)", url: "/environments/shanshui_shigong/古建长廊远眺云海-2.png" },
        { title: "崖壁画廊望云海 (崇山磅礴)", url: "/environments/shanshui_shigong/崖壁画廊望云海-3.png" }
      ],
      recommendedWardrobe: "国潮嘻哈工装 (红韵 / 红潮) & 现代舞燃动服",
      wardrobeReason: "石宫长廊的古朴沧桑与宏伟巨石，为嘻哈齐舞和现代舞爆发力提供极具张力的天然石质舞台！",
      lyricsMapping: "【Rap 1 & Chorus 1】跨越南洋深海 / 舞步震彻云海 / 世代记号",
      description: "依托天险悬崖峭壁而建的宏伟中式石造宫阙与回廊，廊外即是翻滚无尽的浩瀚云海与远山孤峰。",
      lightingDetails: "暖金色斜阳直射石廊朱柱与青石地面，背靠冷调云海与悬崖，形成明暗鲜明、宏阔壮丽的电影景深。",
      cameraGuidance: "沿悬崖外侧滑轨平行推移，镜头自云海深处旋转升起俯瞰整座石宫长廊与主角舞步。"
    },
    {
      id: "env_yuse_gongque",
      name: "霄汉天门 · 巍峨天阙与玉色宫殿",
      lightingTag: "仙气缭绕 · 威严玉阙",
      image: "/environments/yuse_gongque/山湖间的玉色宫阙-1.png",
      shots: [
        { title: "山湖间的玉色宫阙 (巍峨主殿)", url: "/environments/yuse_gongque/山湖间的玉色宫阙-1.png" },
        { title: "双塔天门映云山 (双塔凌空)", url: "/environments/yuse_gongque/双塔天门映云山-3.png" },
        { title: "天门侧影与云山 (雄伟石柱)", url: "/environments/yuse_gongque/天门侧影与云山-2.png" },
        { title: "山门云海侧景 (祥云绕阙)", url: "/environments/yuse_gongque/山门云海侧景-1.png" },
        { title: "山门下的云海 (俯瞰波涛)", url: "/environments/yuse_gongque/山门下的云海-4.png" }
      ],
      recommendedWardrobe: "特邀京腔领唱 (Alicia 华服) & 全员旗袍盛典",
      wardrobeReason: "宛若神话天界的巍峨玉色宫阙与双塔天门，将特邀京腔领唱的大气磅礴与新春大爱烘托至顶点！",
      lyricsMapping: "【特邀京腔领唱 & Chorus 2】红灯笼高挂 / 众生觉心点亮 / 万千灯火",
      description: "耸入云霄的白玉双塔天门与宏大宫阙，石桥飞架，祥云缭绕，碧水环绕，宛如东方神话天庭圣境。",
      lightingDetails: "宏阔的高空气流与散射天光，白玉石柱折射皎洁冷月色与金色神圣光辉，气势非凡。",
      cameraGuidance: "仰拍机位顺着双塔天门垂直上升，穿透云层俯冲向天阙主殿广场，展现万千气象。"
    },
    {
      id: "env_taohua_yuan",
      name: "世外仙源 · 桃花溪畔与晨光石庭",
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
      recommendedWardrobe: "盛典金红旗袍 (四季金菊 / 腊梅 / 银杏款)",
      wardrobeReason: "粉白桃花花瓣纷飞与清澈溪流，与旗袍上的花卉金绣（银杏、梅花、金菊）相映成趣，春意盎然、生机勃发。",
      lyricsMapping: "【Pre-Chorus & Outro】阿公阿嬷牵过的手 / 新年快乐 / 뛰어! Jump!",
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
      title: "【Intro 序章】霄汉天门祥云绕阙 · 惊艳京腔开门红",
      timecode: "00:00 - 00:39",
      startSec: 0,
      endSec: 39,

      lyricsSnippet: "Moon: '【Intro 独白引唱】点燃第一盏心灯，让善意穿透长夜...'\nCoco: 'Yeah, light it up!' (00:03)\nKitty: '新年到' (00:06)\n茵茵 & Sam: 'You know what to do' (00:08)\nAlicia (京腔): '红灯笼高挂，全城在欢呼！归家的导航，幸福已切入！' (00:12-00:26)",
      singerHighlight: "Alicia (特邀京腔领唱) · Moon (主唱) · Coco (主唱) · Kitty (主唱) · 茵茵 (主唱) · Sam (主唱)",
      suggestedEnvironment: "霄汉天门 · 巍峨天阙与玉色宫殿",
      environmentId: "env_yuse_gongque",
      participatingCast: [
        { name: "Alicia", role: "特邀领唱 (京腔国粹 / 旦角身段)" },
        { name: "Moon", role: "主唱 (Intro 启航 / 唯美之声)" },
        { name: "Coco", role: "主唱 (街舞起范 / 嘻哈 Swag)" }
      ],
      wardrobeNote: "Alicia 灰西装撞色传统红灯笼 / Moon 皇家钴蓝礼服 / Coco 选定《红韵》工装",

      visualRequirements: [
        "构图与机位：大广角由万丈云海向上仰冲穿过双塔天门，巍峨白玉宫阙耸立在碧水千仞群山之间",
        "角色表演：Alicia 站在天门广场正中央昂首开唱京腔，神态端庄自信，手势精准还原京剧旦角手势",
        "光影与特效：晨光穿透云海照射白玉石阙，祥云在天门双塔两侧缓缓翻涌，红灯笼悬挂如星辰指引归家"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/yuse_gongque/山湖间的玉色宫阙-1.png",
        caption: "AI 最终生成效果图：霄汉天门与玉色宫阙祥云缭绕，京腔开唱引爆全片",
        modelEngine: "Flux.1 Pro + Midjourney v6.1",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Ascending crane shot rising through sea of clouds, framing Alicia in majestic twin gate towers",
      lighting: "Cinematic ethereal heavenly sky glow, golden dawn cresting over cloud tops",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro / Midjourney v6.1",
          prompt: "Cinematic shot of celestial ancient Chinese jade palace and towering twin gates amidst sea of clouds and jade lake, Alicia in elegant style singing Peking opera pose with red lantern aesthetic, Arri Alexa 65mm --ar 16:9",
          notes: "将开篇特邀京腔的气势通过巍峨天门与天阙仙境具象化。"
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
          mediaUrl: "/environments/yuse_gongque/双塔天门映云山-3.png",
          notes: "双塔天门云海流动与光束穿透测试。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/yuse_gongque/山湖间的玉色宫阙-1.png",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: [
        {
          id: "fb-401",
          author: "Ron (Director)",
          date: "2026-09-20 22:45",
          tag: "场景与歌词对齐",
          content: "玉色宫阙与双塔天门配合京腔起调，视听冲击力极大，确认定稿！",
          resolved: true
        }
      ]
    },
    {
      id: "SC-002",
      number: 2,
      title: "【Verse 1 民俗与根脉】桃花溪畔醒狮鼓跃 · 落英缤纷与红包祝福",
      timecode: "00:39 - 01:08",
      startSec: 39,
      endSec: 68,

      lyricsSnippet: "Sam: '穿破天空的鞭炮，那是世代的记号' (00:40)\nCoco: '舞狮鼓声传千里，We never lay low' (00:48)\n茵茵: '红包里的祝福，装满期待把你当成宝' (00:55)\nKitty: '外面的风浪再大，根脉依然在心底绕' (01:02)",
      singerHighlight: "Sam · Coco · 茵茵 · Kitty",
      suggestedEnvironment: "世外仙源 · 桃花溪畔与晨光石庭",
      environmentId: "env_taohua_yuan",
      participatingCast: [
        { name: "Sam & Coco", role: "醒狮鼓点卡点跳跃与桃花溪畔街舞" },
        { name: "茵茵 & Kitty", role: "双手送出精美烫金红包，温情凝望" }
      ],
      wardrobeNote: "Coco/Sam 换装《红韵》嘻哈工装 / 茵茵 Kitty 着《金韵华裳》旗袍",

      visualRequirements: [
        "构图与机位：快节奏卡点剪辑（122 BPM），桃花溪畔天然石台上舞步飞扬，粉色花瓣随微风洒入流水",
        "角色表演：Coco 戴翡翠项链双手摆出街舞手势，与清澈流水形成动静对比；茵茵在花树下温婉递出红包",
        "光影与特效：晨光斜射穿透桃花枝桠，溪水波光粼粼泛着金粉色光晕，落英缤纷"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/taohua_yuan/桃花溪畔石上舞台-1.png",
        caption: "AI 最终生成效果图：桃花溪畔天然巨石舞台与晨曦光影舞动",
        modelEngine: "Flux.1 Pro",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Dynamic whip pan from falling peach blossom petal to dancers on natural stream rock stage",
      lighting: "Soft morning golden sunbeams filtering through blooming pink peach blossom branches",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Cinematic shot of Chinese dancers on natural stone stage beside clear river creek surrounded by blooming pink peach blossoms, golden morning sun flare, red streetwear jacket, festive energy --ar 16:9",
          notes: "国风仙境与现代律动节奏交融。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_03_coco_hd.jpg",
          notes: "Coco 拳击辫与翡翠挂坠标志。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/taohua_yuan/桃花溪畔石舞台-2.png",
          notes: "桃花落瓣流体动态与舞步卡点。"
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
      id: "SC-003",
      number: 3,
      title: "【Rap 1 团圆欢聚】云海石宫悬崖长廊 · 一家团圆满屋欢笑",
      timecode: "01:08 - 01:26",
      startSec: 68,
      endSec: 86,

      lyricsSnippet: "Coco: '一桌菜等一年久，就盼着这一刻来到' (01:09)\n茵茵: '一家团圆满屋欢笑，迎接新春多热闹' (01:13)\nKitty: '提醒着我们珍惜，把岁月紧紧抓牢' (01:17)\nSam: '眼前每一份爱，都是我们一生的依靠' (01:21)",
      singerHighlight: "全员 4 人依次接唱 Rap 节奏",
      suggestedEnvironment: "云海崇峦 · 悬崖画廊与山水石宫",
      environmentId: "env_shanshui_shigong",
      participatingCast: [
        { name: "全员", role: "在石宫长廊大案前欢笑相聚，举杯相庆" }
      ],
      wardrobeNote: "全员《金韵华裳》盛典旗袍系列，年味富贵典雅",

      visualRequirements: [
        "构图与机位：平稳滑轨推镜（Steadicam），顺着石宫悬崖雕花长廊徐徐推进，外侧是翻涌无垠的浩瀚云海",
        "角色表演：家人笑逐颜开相互夹菜举杯，Kitty 颔首微笑，眼神满是对阖家团聚的珍惜与感慨",
        "光影与特效：暖阳斜斜洒入石廊青石地面，金色光线投在雕梁画栋上，与窗外苍茫冷调云海形成温暖反差"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/shanshui_shigong/暖阳映照的山水石宫-3.png",
        caption: "AI 最终生成效果图：悬崖石造画廊中的暖阳与云海阖家欢聚",
        modelEngine: "Midjourney v6.1",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Slow warm tracking shot along open stone palace colonnade overlooking sea of clouds",
      lighting: "Golden sunlight illuminating ancient stone columns, vast misty valley below",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Midjourney v6.1",
          prompt: "Majestic Chinese stone palace corridor carved into cliffside over vast sea of clouds, warm golden sunlight streaming through carved pillars, festive joyful celebration, Arri Alexa 65mm --ar 16:9",
          notes: "核心情感爆发点：一家团圆满屋欢笑。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_02_yinyin_hd.jpg",
          notes: "茵茵端庄优雅笑容。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/shanshui_shigong/古建长廊远眺云海-2.png",
          notes: "长廊光柱与云海缓慢涌动测试。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/shanshui_shigong/暖阳映照的山水石宫-3.png",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-004",
      number: 4,
      title: "【Pre-Chorus 代际破晓】桃花源石庭溪桥 · 阿公阿嬷牵过的手",
      timecode: "01:26 - 01:56",
      startSec: 86,
      endSec: 116,

      lyricsSnippet: "Coco & Sam: '阿公阿嬷牵过的手，这份温暖我收好' (01:27)\n茵茵 & Kitty: '那些接力过的爱，点亮前路的破晓' (01:34)\nCoco & Sam: '曾有盏灯照亮我，穿过狂雨和风暴' (01:41)\n茵茵 & Kitty: 'Now it's my turn, 把黑暗都燃烧' (01:49)\nKitty: '准备好了没？' (01:56)",
      singerHighlight: "Coco & Sam / 茵茵 & Kitty 轮唱与二重唱",
      suggestedEnvironment: "世外仙源 · 桃花源石庭溪桥",
      environmentId: "env_taohua_yuan",
      participatingCast: [
        { name: "老阿公阿嬷 (剪影演员)", role: "长满老茧的手温柔握住年轻人的手" },
        { name: "Kitty", role: "在古意石庭中捧起第一盏心灯并沉稳发问" }
      ],
      wardrobeNote: "《金韵华裳》旗袍 (晨雾青石与落英反差)",

      visualRequirements: [
        "构图与机位：诗意摇镜，由石桥上交握的手部特写慢慢移向桃花石亭前晨光微透的天空，再切至 Kitty 毅然捧起心灯的大特写",
        "角色表演：眼神从含泪感恩逐渐转为无比笃定，最后那句独白‘准备好了没？’气场震慑全场",
        "光影与特效：晨光穿透晨雾洒在古朴木桥与清溪上，心灯金光泛起，照亮人物坚毅的面庞"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/taohua_yuan/桃花源溪桥晨光.png",
        caption: "AI 最终生成效果图：桃花源溪桥晨光、石庭回廊与传递的温情心灯",
        modelEngine: "Midjourney v6.1",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Slow poetic pan across rustic wooden bridge and stone garden bordered by blooming peach trees",
      lighting: "Soft diffuse morning mist breaking into gentle warm golden backlit rays",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Midjourney v6.1",
          prompt: "Atmospheric traditional stone garden and wooden bridge over creek bordered by blossoming peach trees in morning mist, emotional warm glowing heart lantern held by singer, cinematic backlight --ar 16:9",
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
      title: "【Chorus 1 首唱高潮】悬崖石基天然舞台 · 点燃心灯！善意无限接通",
      timecode: "01:57 - 02:25",
      startSec: 116,
      endSec: 145,

      lyricsSnippet: "茵茵 & Kitty: '点燃心灯！' Coco & Sam: '(Light it up!)' (01:57)\n茵茵 & Kitty: '照亮整个夜空！' (02:00)\n茵茵 & Kitty: '点燃心灯！' Coco & Sam: '(Pass it on!)' (02:04)\n茵茵 & Kitty: '善意无限接通！' (02:08)\n大合唱: '万千新年灯火连成 千家万户的希望 / 我的光，你的光，这份温暖，世世代代相传！' (02:11-02:25)",
      singerHighlight: "领唱对答 ➔ 震撼全员大合唱",
      suggestedEnvironment: "云海崇峦 · 悬崖画廊天然舞台",
      environmentId: "env_shanshui_shigong",
      participatingCast: [
        { name: "茵茵", role: "双手托起金光心灯优雅旋转" },
        { name: "全员 6 人", role: "做统一‘托灯 Pass it on’手势接力" }
      ],
      wardrobeNote: "选定《金韵华裳》旗袍 (金绣在云海悬崖前闪烁耀眼神光)",

      visualRequirements: [
        "构图与机位：360度环绕升降运镜（Orbit Upwards），从茵茵捧着心灯的手部特写逐渐拉出至悬崖石基天然大舞台",
        "角色表演：茵茵在悬崖巨石上舒展旋转，随后将心灯平推向镜头，微光化为漫天金色光点洒入浩瀚云海",
        "光影与特效：暖阳金光洒向石殿与云海，悬崖边缘升腾起金色祥瑞微粒，神圣纯洁"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/shanshui_shigong/悬崖古廊前的静谧舞台-4.png",
        caption: "AI 最终生成效果图：悬崖古廊前的天然舞台与翻涌云海，全员心灯接力",
        modelEngine: "Flux.1 Pro",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "360-degree tracking shot around dancer on cliffside stone platform, sea of clouds sweeping beneath",
      lighting: "Glorious golden hour rim lighting, mist clouds catching amber sunbeams",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Monumental natural stone stage in front of cliffside ancient pavilion, vast rolling sea of clouds in background, dancers performing explosive chorus dance in red and gold outfits, golden rim lighting, cinematic epic --ar 16:9",
          notes: "象征心灯穿透迷雾，善意无限接通。"
        },
        stage2_keyframe: {
          title: "出镜人物参考表",
          mediaType: "image",
          mediaUrl: "/characters/char_02_yinyin_hd.jpg",
          notes: "茵茵金绣长裙与旋转舞姿。"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaType: "video_preview",
          mediaUrl: "/environments/shanshui_shigong/云海古廊与远山亭-1.png",
          notes: "云海翻滚与金光掠过石台动态测试。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/shanshui_shigong/悬崖古廊前的静谧舞台-4.png",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-006",
      number: 6,
      title: "【Rap 2 大爱心灯】石宫画廊纵览崇山 · 一盏灯火化身那道光线",
      timecode: "02:25 - 02:50",
      startSec: 145,
      endSec: 170,

      lyricsSnippet: "茵茵: '一盏灯火，绝对不只照亮一个屋檐' (02:25)\nCoco: '这份大爱，注定能够走到无限遥远' (02:30)\nKitty: '一句好话、一次帮助、一个微笑的照面' (02:33)\nSam: '能让寒冷冰封之地，瞬间切换成春天' (02:36)\n茵茵: '原来最珍贵的福气，不是自己多耀眼' (02:40)\nCoco & Sam: '而是别人需要时候，你化身那道光线' (02:44)",
      singerHighlight: "茵茵 · Coco · Kitty · Sam 轮流特写递进",
      suggestedEnvironment: "云海崇峦 · 崖壁画廊望云海",
      environmentId: "env_shanshui_shigong",
      participatingCast: [
        { name: "茵茵", role: "眼神充满慈爱大爱，走入阳光下" },
        { name: "Coco & Sam", role: "自信对视，双手向前递出温暖微光" }
      ],
      wardrobeNote: "《金韵华裳》旗袍金光漫射",

      visualRequirements: [
        "构图与机位：四人快速单人中景特写切换，背景虚化为石廊外的金色云峰光斑，在'化身那道光线'时合为双人中景",
        "角色表演：每个人的眼神从内敛微笑到开朗笃定，将大爱慈悲的温度传达给镜头前的观众",
        "光影与特效：随着'瞬间切换成春天'的唱词，金色暖光自云海升腾，整个石廊瞬间溢满金辉"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/shanshui_shigong/崖壁画廊望云海-3.png",
        caption: "AI 最终生成效果图：崖壁画廊远望无边云海，主角化身光线照亮人间",
        modelEngine: "Flux.1 Pro",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Quick cinematic character portrait cuts syncing with rapid vocal lines into slow sunburst bloom",
      lighting: "Dynamic illumination transition as golden cloud tops flare through open stone corridor",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Chinese open cliff gallery overlooking boundless sea of clouds and mountain peaks, dancers dynamic hip-hop rap movement, dramatic volumetric god rays piercing mist --ar 16:9",
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
          mediaUrl: "/environments/shanshui_shigong/古建长廊远眺云海-2.png",
          notes: "光线强弱渐变动画测试。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/shanshui_shigong/崖壁画廊望云海-3.png",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-007",
      number: 7,
      title: "【Verse 2 南洋深海与敬茶】奇幻山水湖畔古亭 · 乘风破浪的先辈",
      timecode: "02:50 - 03:33",
      startSec: 170,
      endSec: 213,

      lyricsSnippet: "Sam: '跨越南洋的深海，一路燃到这舞台' (03:05)\nCoco: '乘风破浪的先辈，Swag 刻在血脉' (03:12)\nKitty: '敬上一杯热茶，传承不只是一个 Title' (03:19)\n茵茵: '化作那一道光芒，做别人生命里的 Idol' (03:26)",
      singerHighlight: "Sam (燃舞) · Coco (Swag) · Kitty (茶道) · 茵茵 (Idol 高光)",
      suggestedEnvironment: "晨光碧波 · 奇幻山水与湖畔古亭",
      environmentId: "env_qihuan_shanshui",
      participatingCast: [
        { name: "Sam & Coco", role: "跨越南洋深海的蓬勃动能" },
        { name: "Kitty", role: "湖畔古亭庄重端茶敬茶仪式特写" },
        { name: "茵茵", role: "做别人生命里的 Idol 圣洁姿态" }
      ],
      wardrobeNote: "Kitty《金韵华裳》旗袍 / Coco《红韵》工装碰撞",

      visualRequirements: [
        "构图与机位：如诗如画的碧玉湖泊如镜，远处奇峰耸立，镜头由青山绿水缓缓推向湖畔飞檐古亭，特写 Kitty 双手平举敬茶的端庄神情",
        "角色表演：Kitty 眼神恭敬庄严，向先辈与天地敬茶；茵茵在'Idol'高音处微仰起头，湖面晨光映亮全身",
        "光影与特效：热茶水汽袅袅升起，在青翠奇幻山水与倒影中化作璀璨微尘，呈现最高规格东方美学"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/qihuan_shanshui/晨光中的湖畔古亭-1.png",
        caption: "AI 最终生成效果图：碧波如镜的奇幻山水、湖畔古亭与敬热茶传承仪式",
        modelEngine: "Flux.1 Pro",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Sweeping crane move gliding over tranquil emerald lake towards graceful ancient pavilion",
      lighting: "Gentle morning sun glinting off turquoise water surface, mountains bathed in jade mist",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Ethereal Chinese fantasy landscape, turquoise calm lake reflecting mountain peaks, pavilion by the shore, morning mist, singer gracefully serving hot tea in traditional porcelain cup, warm golden sunrise --ar 16:9",
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
          mediaUrl: "/environments/qihuan_shanshui/亭内静望玉湖群山-3.png",
          notes: "古亭内框景构图与水面涟漪动态。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/qihuan_shanshui/晨光中的湖畔古亭-1.png",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-008",
      number: 8,
      title: "【Chorus 2 & 3 浩瀚天门】双塔凌空祥云翻腾 · 照亮浩瀚彼岸！众生觉心",
      timecode: "03:34 - 04:29",
      startSec: 213,
      endSec: 269,

      lyricsSnippet: "大合唱: '点燃心灯！(Light it up!) 照亮浩瀚彼岸！' (04:02)\n'点燃心灯！(Pass it on!) 众生觉心点亮！' (04:09)\n'感恩过去修正现在，创造未来的光芒' (04:16)\n'慈爱光，智慧光，清明闪耀，照见生命破晓！' (04:23-04:29)",
      singerHighlight: "全员大合唱最高音升调爆发",
      suggestedEnvironment: "霄汉天门 · 巍峨天阙与玉色宫殿",
      environmentId: "env_yuse_gongque",
      participatingCast: [
        { name: "全员 6 位主角", role: "红金盛典华服，并肩立于双塔天门浩瀚天阙前" }
      ],
      wardrobeNote: "全员《金韵华裳》盛典旗袍 (重工真金丝刺绣迎着高空天光)",

      visualRequirements: [
        "构图与机位：大广角航拍无人机超大远景，自双塔凌空天门间俯冲掠过，再仰冲云霄展现万千心灯升入天阙",
        "角色表演：6 位女性在白玉桥梁与天门前自信定格，红金华服与巍峨玉色宫阙形成极致反差，双手放飞无数盏金色心灯",
        "光影与特效：万丈天光破云而出，数千盏心灯漂浮升向苍穹，碧水倒映双塔，祥云如织"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/yuse_gongque/双塔天门映云山-3.png",
        caption: "AI 最终生成效果图：双塔天门迎着万丈天光，数千盏心灯升入浩瀚彼岸",
        modelEngine: "Flux.1 Pro / Multi-LoRA Composite",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Sweeping epic drone shot between heavenly jade towers, clouds parting to reveal glowing lantern constellation",
      lighting: "Glorious celestial illumination over mountain towers and sea of mist",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Epic grand scale Chinese celestial twin stone gate towers piercing into heavenly clouds above mystical mountain peaks, thousands of glowing heart lanterns rising into the sky, cinematic masterpiece --ar 16:9",
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
          mediaUrl: "/environments/yuse_gongque/天门侧影与云山-2.png",
          notes: "千盏心灯升空与天门祥云动态。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/yuse_gongque/双塔天门映云山-3.png",
          statusTag: "Keyframe Approved"
        }
      },
      feedbacks: []
    },
    {
      id: "SC-009",
      number: 9,
      title: "【Outro 终章燃爆】桃花溪畔齐舞腾空 · 뛰어! (Jump!) 薪火相传全员滞空",
      timecode: "04:30 - 04:49",
      startSec: 269,
      endSec: 289,

      lyricsSnippet: "全员呼喊: '뛰어! (Jump!)' (04:30)\nSam & Coco: 'Hey! 薪火相传，Let's go!' (04:31)\n茵茵 & Kitty: 'Jump! 灯火全开，Make it glow!' (04:34)\n大合唱: '一盏传一盏，一颗心暖一颗心！' (04:37)\n全员终极大喊: '뛰어! (Jump!)' (04:40-04:49)",
      singerHighlight: "全员 6 人同步滞空起跳狂欢",
      suggestedEnvironment: "世外仙源 · 桃花溪畔晨光舞台",
      environmentId: "env_taohua_yuan",
      participatingCast: [
        { name: "Alicia · Moon · Coco · Kitty · 茵茵 · Sam", role: "6 人在桃花溪畔天然石台上同时起跳，慢动作滞空 1.5 秒" }
      ],
      wardrobeNote: "全员《红韵》国潮嘻哈工装 (红装大口袋在空中飞扬)",

      visualRequirements: [
        "构图与机位：正面中景高速摄影机（120fps 慢动作升格），抓取 6 人在桃花溪畔石台上同时起跳的瞬间",
        "角色表演：跳跃至最高点滞空时，所有人露出灿烂狂欢的笑容，双手比出‘托心灯’手势，桃花花瓣随身形翻飞",
        "光影与特效：金色彩带炮与粉白桃花在空中轰鸣炸裂，天边成千上万盏心灯冉冉升起，全片在最热烈的金色春晖中定格"
      ],

      generatedOutput: {
        type: "image",
        imageUrl: "/environments/taohua_yuan/桃花溪畔的晨光舞台-4.png",
        caption: "AI 最终生成效果图：桃花溪畔晨曦舞台全员 120fps 慢动作跳跃滞空与漫天落英",
        modelEngine: "Flux.1 Pro / Multi-LoRA Composite",
        aspectRatio: "16:9 4K Cinema"
      },

      cameraMotion: "Monumental high-speed synchronized jump shot with 6 women on stream stone stage, explosive peach petal confetti",
      lighting: "Warm morning sun flare, golden backlit river reflections, festival finale",
      status: "approved",
      aspectRatio: "16:9",

      evolution: {
        stage1_prompt: {
          title: "Prompt 提示词与指令",
          model: "Flux.1 Pro",
          prompt: "Full cast freeze-frame jump shot on stone creek stage surrounded by blooming pink peach blossoms, golden morning sun flare, explosive festival atmosphere, cinematic 8k --ar 16:9",
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
          mediaUrl: "/environments/taohua_yuan/桃花溪畔石上舞台-1.png",
          notes: "120fps 慢动作滞空 1.5 秒。"
        },
        stage4_final: {
          title: "最终生成画面效果图",
          mediaType: "image",
          mediaUrl: "/environments/taohua_yuan/桃花溪畔的晨光舞台-4.png",
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

import React, { useState } from 'react';
import { BookOpen, Copy, Check, Music2, Sparkles, Flame, Heart, Lightbulb, Users, Play, Clock } from 'lucide-react';

export const lyricsData = [
  {
    id: 'intro',
    timecode: '00:00 - 00:39',
    startSec: 0,
    sceneId: 'sc_001',
    sceneNumber: 1,
    title: '【Intro】京腔开门红 · 归家导航',
    mood: '欢庆宏大 · 传统戏曲碰撞现代电音',
    bgGradient: 'from-red-950/40 via-zinc-900 to-zinc-950',
    borderColor: 'border-red-500/30',
    lines: [
      { singer: 'Coco', role: '嘻哈街舞', text: 'Yeah, light it up!' },
      { singer: 'Kitty', role: '根脉深植', text: '新年到' },
      { singer: '茵茵 & Sam', role: '双人合唱', text: 'You know what to do' },
      { singer: 'Alicia (京腔领唱)', role: '京腔国粹', text: '【京腔领唱】红灯笼高挂，全城在欢呼！归家的导航，幸福已切入！', isHighlight: true }
    ]
  },
  {
    id: 'verse1',
    timecode: '00:39 - 01:08',
    startSec: 39,
    sceneId: 'sc_002',
    sceneNumber: 2,
    title: '【Verse 1】爆竹舞狮 · 根脉深植',
    mood: '节奏升腾 · 街头年味与传统记忆',
    bgGradient: 'from-orange-950/40 via-zinc-900 to-zinc-950',
    borderColor: 'border-orange-500/30',
    lines: [
      { singer: 'Sam', role: '现代舞动', text: '穿破天空的鞭炮，那是世代的记号' },
      { singer: 'Coco', role: '嘻哈 Rap', text: '舞狮鼓声传千里，We never lay low' },
      { singer: '茵茵', role: '慈爱温润', text: '红包里的祝福，装满期待把你当成宝' },
      { singer: 'Kitty', role: '根脉传承', text: '外面的风浪再大，根脉依然在心底绕' }
    ]
  },
  {
    id: 'rap1',
    timecode: '01:08 - 01:26',
    startSec: 68,
    sceneId: 'sc_003',
    sceneNumber: 3,
    title: '【Rap 1】年夜饭长桌 · 阖家欢笑',
    mood: '嘻哈律动 · 温情团聚与亲情依靠',
    bgGradient: 'from-amber-950/40 via-zinc-900 to-zinc-950',
    borderColor: 'border-amber-500/30',
    lines: [
      { singer: 'Coco', role: '嘻哈 Rap', text: '一桌菜等一年久，就盼着这一刻来到' },
      { singer: '茵茵', role: '生命 Idol', text: '一家团圆满屋欢笑，迎接新春多热闹' },
      { singer: 'Kitty', role: '根脉深植', text: '提醒着我们珍惜，把岁月紧紧抓牢' },
      { singer: 'Sam', role: '现代舞动', text: '眼前每一份爱，都是我们一生的依靠' }
    ]
  },
  {
    id: 'prechorus',
    timecode: '01:26 - 01:56',
    startSec: 86,
    sceneId: 'sc_004',
    sceneNumber: 4,
    title: '【Pre-Chorus】阿公阿嬷牵过的手 · 接力破晓',
    mood: '深情舒展 · 跨越代际的薪火温情',
    bgGradient: 'from-rose-950/40 via-zinc-900 to-zinc-950',
    borderColor: 'border-rose-500/30',
    lines: [
      { singer: 'Coco & Sam', role: '双人合唱', text: '阿公阿嬷牵过的手，这份温暖我收好' },
      { singer: '茵茵 & Kitty', role: '双人合唱', text: '那些接力过的爱，点亮前路的破晓' },
      { singer: 'Coco & Sam', role: '双人合唱', text: '曾有盏灯照亮我，穿过狂雨和风暴' },
      { singer: '茵茵 & Kitty', role: '双人合唱', text: "Now it's my turn，把黑暗都燃烧" },
      { singer: 'Kitty', role: '根脉深植', text: '准备好了没？' }
    ]
  },
  {
    id: 'chorus1',
    timecode: '01:57 - 02:25',
    startSec: 117,
    sceneId: 'sc_005',
    sceneNumber: 5,
    title: '【Chorus 1】点燃心灯 Light It Up! · 善意无限接通',
    mood: '高潮爆发 · 齐舞齐唱 · 震撼人心',
    bgGradient: 'from-red-900/40 via-amber-950/30 to-zinc-950',
    borderColor: 'border-red-500/50',
    lines: [
      { singer: '茵茵 & Kitty', role: '主唱', text: '点燃心灯！' },
      { singer: 'Coco & Sam', role: '和声响应', text: '(Light it up!) 照亮整个夜空！' },
      { singer: '茵茵 & Kitty', role: '主唱', text: '点燃心灯！' },
      { singer: 'Coco & Sam', role: '和声响应', text: '(Pass it on!) 善意无限接通！' },
      { singer: '大合唱 (All Cast)', role: '五人齐唱', text: '万千新年灯火连成 千家万户的希望', isHighlight: true },
      { singer: '茵茵 & Sam / Kitty & Coco', role: '轮唱', text: '我的光，你的光' },
      { singer: '大合唱 (All Cast)', role: '五人齐唱', text: '这份温暖，世世代代相传' }
    ]
  },
  {
    id: 'rap2',
    timecode: '02:25 - 02:50',
    startSec: 145,
    sceneId: 'sc_006',
    sceneNumber: 6,
    title: '【Rap 2】一盏灯火 · 化身那道光线',
    mood: '思辨内省 · 慈悲与利他精神升华',
    bgGradient: 'from-blue-950/40 via-zinc-900 to-zinc-950',
    borderColor: 'border-blue-500/30',
    lines: [
      { singer: '茵茵', role: '生命 Idol', text: '一盏灯火，绝对不只照亮一个屋檐' },
      { singer: 'Coco', role: '嘻哈 Rap', text: '这份大爱，注定能够走到无限遥远' },
      { singer: 'Kitty', role: '根脉深植', text: '一句好话、一次帮助、一个微笑的照面' },
      { singer: 'Sam', role: '现代舞动', text: '能让寒冷冰封之地，瞬间切换成春天' },
      { singer: '茵茵', role: '生命 Idol', text: '原来最珍贵的福气，不是自己多耀眼', isHighlight: true },
      { singer: 'Coco & Sam', role: '双人合唱', text: '而是别人需要时候，你化身那道光线', isHighlight: true }
    ]
  },
  {
    id: 'verse2',
    timecode: '02:50 - 03:33',
    startSec: 170,
    sceneId: 'sc_007',
    sceneNumber: 7,
    title: '【Verse 2】跨越南洋深海 · 传承不只是 Title',
    mood: '坚定豪迈 · 华侨奋斗史与敬茶感恩',
    bgGradient: 'from-emerald-950/40 via-zinc-900 to-zinc-950',
    borderColor: 'border-emerald-500/30',
    lines: [
      { singer: 'Sam', role: '现代舞动', text: '跨越南洋的深海，一路燃到这舞台' },
      { singer: 'Coco', role: '嘻哈 Rap', text: '乘风破浪的先辈，Swag 刻在血脉' },
      { singer: 'Kitty', role: '根脉奉献', text: '敬上一杯热茶，传承不只是一个 Title', isHighlight: true },
      { singer: '茵茵', role: '生命 Idol', text: '化作那一道光芒，做别人生命里的 Idol' }
    ]
  },
  {
    id: 'chorus2_3',
    timecode: '03:34 - 04:29',
    startSec: 214,
    sceneId: 'sc_008',
    sceneNumber: 8,
    title: '【Chorus 2 & 3】照亮浩瀚彼岸 · 众生觉心点亮',
    mood: '终极升华 · 慈爱光与智慧光大觉醒',
    bgGradient: 'from-amber-950/40 via-red-950/30 to-zinc-950',
    borderColor: 'border-amber-500/40',
    lines: [
      { singer: '大合唱 (All Cast)', role: '五人齐唱', text: '点燃心灯！(Light it up!) 照亮整个夜空！' },
      { singer: '大合唱 (All Cast)', role: '五人齐唱', text: '点燃心灯！(Pass it on!) 善意无限接通！' },
      { singer: '大合唱 (All Cast)', role: '五人齐唱', text: '万千新年灯火连成 千家万户的希望，我的光，你的光，这份温暖，世世代代相传！' },
      { singer: '大合唱 (All Cast)', role: '高潮双连击', text: '点燃心灯！(Light it up!) 照亮浩瀚彼岸！', isHighlight: true },
      { singer: '大合唱 (All Cast)', role: '高潮双连击', text: '点燃心灯！(Pass it on!) 众生觉心点亮！', isHighlight: true },
      { singer: '大合唱 (All Cast)', role: '合唱', text: '感恩过去修正现在，创造未来的光芒！' },
      { singer: '大合唱 (All Cast)', role: '合唱', text: '慈爱光、智慧光，让黑夜全退散！' }
    ]
  },
  {
    id: 'outro',
    timecode: '04:30 - 04:49',
    startSec: 270,
    sceneId: 'sc_009',
    sceneNumber: 9,
    title: '【Outro】뛰어! (Jump!) · 薪火相传全城通明',
    mood: '终极爆点 · 全体腾空滞空 · 新春终章',
    bgGradient: 'from-purple-950/40 via-red-950/30 to-zinc-950',
    borderColor: 'border-purple-500/40',
    lines: [
      { singer: 'Sam', role: '现代舞', text: '点燃心灯！' },
      { singer: '茵茵', role: '生命 Idol', text: '新年快乐！' },
      { singer: 'Coco', role: '嘻哈 Rap', text: 'Light it up!' },
      { singer: 'Kitty', role: '根脉传承', text: '照亮未来！' },
      { singer: 'Alicia (京腔)', role: '戏曲收尾', text: '【京腔高昂】点亮心灯，世世代代！', isHighlight: true },
      { singer: '大合唱 (All Cast)', role: '全员腾空', text: '뛰어! (Jump!)', isHighlight: true }
    ]
  }
];

export default function LyricsWorkspace({ currentSec, onSeekSec, onSelectScene }) {
  const [selectedSinger, setSelectedSinger] = useState('all');
  const [copied, setCopied] = useState(false);

  const singers = [
    { id: 'all', label: '全员全曲' },
    { id: 'alicia', label: 'Alicia (京腔)' },
    { id: 'coco', label: 'Coco (Rap)' },
    { id: 'sam', label: 'Sam (现代舞)' },
    { id: 'yinyin', label: '茵茵 (生命Idol)' },
    { id: 'kitty', label: 'Kitty (根脉传承)' },
    { id: 'chorus', label: '大合唱' }
  ];

  const handleCopyFullLyrics = () => {
    let fullText = "🎬 《点燃心灯 (Light It Up!)》MV 官方完整歌词与人声分配全案\n\n";
    lyricsData.forEach(sec => {
      fullText += `${sec.title} (${sec.timecode})\n`;
      fullText += `氛围: ${sec.mood}\n`;
      sec.lines.forEach(l => {
        fullText += `(${l.singer}) ${l.text}\n`;
      });
      fullText += "\n";
    });
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSingerColor = (singerName) => {
    if (singerName.includes('Alicia')) return 'bg-red-500/20 text-red-300 border-red-500/40';
    if (singerName.includes('Coco')) return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
    if (singerName.includes('Sam')) return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
    if (singerName.includes('茵茵')) return 'bg-pink-500/20 text-pink-300 border-pink-500/40';
    if (singerName.includes('Kitty')) return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
    return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40';
  };

  return (
    <div className="space-y-6">
      
      {/* 顶部工具栏与统计 */}
      <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-4 sm:p-6 backdrop-blur-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20 flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              官方 7 页完整歌词与人声分配全案
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                4分49秒 毫秒对齐
              </span>
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              点击任意段落卡片可联动音轨跳转播放；标明 5 位主角领唱、Rap、京腔与齐唱分工
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleCopyFullLyrics}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-medium text-zinc-200 transition-all shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">已复制完整歌词</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>复制完整歌词</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 角色演唱过滤筛选 Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-zinc-500 font-medium shrink-0 flex items-center gap-1">
          <Users className="w-3.5 h-3.5" />
          筛选主唱：
        </span>
        {singers.map(s => {
          const isSelected = selectedSinger === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setSelectedSinger(s.id)}
              className={`px-3 py-1.5 rounded-xl font-medium border transition-all whitespace-nowrap ${
                isSelected
                  ? 'bg-pink-600 text-white border-pink-500 shadow-md shadow-pink-600/20'
                  : 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      {/* 9 大歌词段落卡片流 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {lyricsData.map(sec => {
          const isCurrentActive = currentSec >= sec.startSec && currentSec < (sec.startSec + 30);
          
          // 角色筛选
          const filteredLines = selectedSinger === 'all'
            ? sec.lines
            : sec.lines.filter(l => {
                if (selectedSinger === 'alicia') return l.singer.includes('Alicia');
                if (selectedSinger === 'coco') return l.singer.includes('Coco');
                if (selectedSinger === 'sam') return l.singer.includes('Sam');
                if (selectedSinger === 'yinyin') return l.singer.includes('茵茵');
                if (selectedSinger === 'kitty') return l.singer.includes('Kitty');
                if (selectedSinger === 'chorus') return l.singer.includes('合唱');
                return true;
              });

          if (selectedSinger !== 'all' && filteredLines.length === 0) return null;

          return (
            <div
              key={sec.id}
              className={`relative rounded-2xl bg-gradient-to-br ${sec.bgGradient} border ${sec.borderColor} p-5 backdrop-blur-sm transition-all duration-300 hover:shadow-xl flex flex-col justify-between ${
                isCurrentActive ? 'ring-2 ring-pink-500/80 shadow-lg shadow-pink-500/20' : ''
              }`}
            >
              {/* 卡片头部 */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/60 text-pink-300 border border-pink-500/30 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {sec.timecode}
                    </span>
                    <button
                      onClick={() => onSeekSec && onSeekSec(sec.startSec)}
                      className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors"
                      title="点击跳转音乐至该段落"
                    >
                      <Play className="w-2.5 h-2.5 fill-current" />
                      <span>播放此段</span>
                    </button>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900/80 text-zinc-400 border border-zinc-800">
                    对应分镜 #{String(sec.sceneNumber).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  {sec.title}
                </h3>
                <p className="text-[11px] text-zinc-400 mb-4 italic">
                  情绪与节奏: {sec.mood}
                </p>

                {/* 歌词句表 */}
                <div className="space-y-2">
                  {filteredLines.map((line, idx) => (
                    <div
                      key={idx}
                      className={`p-2 rounded-xl transition-colors ${
                        line.isHighlight 
                          ? 'bg-pink-500/10 border border-pink-500/30 text-pink-100 font-medium' 
                          : 'bg-black/30 border border-zinc-800/60 text-zinc-300'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border shrink-0 ${getSingerColor(line.singer)}`}>
                          {line.singer}
                        </span>
                        <span className="text-xs leading-relaxed select-text">
                          {line.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 卡片底部快速联动 */}
              <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px]">
                <span className="text-zinc-500">
                  {sec.lines.length} 句演唱分配
                </span>
                <button
                  onClick={() => onSelectScene && onSelectScene(sec.sceneNumber)}
                  className="text-pink-400 hover:text-pink-300 transition-colors font-medium flex items-center gap-1"
                >
                  <span>查看分镜画面</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

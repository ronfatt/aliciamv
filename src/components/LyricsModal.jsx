import React, { useState } from 'react';
import { X, Copy, Check, Music2, Sparkles, Flame, Heart, Lightbulb } from 'lucide-react';

export default function LyricsModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const rawLyrics = `【Intro】
(Coco) Yeah, light it up! 
(Kitty) 新年到
(茵茵 & Sam) You know what to do 

(京腔)
(Alicia)
红灯笼高挂，全城在欢呼
归家的导航，幸福已切入！

【Verse 1】
(Sam)
穿破天空的鞭炮，那是世代的记号
(Coco)
舞狮鼓声传千里，We never lay low 
(茵茵)
红包里的祝福，装满期待把你当成宝
(Kitty)
外面的风浪再大，根脉依然在心底绕  

【Rap】
(Coco)
一桌菜等一年久，就盼着这一刻来到
(茵茵)
一家团圆满屋欢笑，迎接新春多热闹
(Kitty)
提醒着我们珍惜，把岁月紧紧抓牢
(Sam)
眼前每一份爱，都是我们一生的依靠

【Pre-Chorus】
(Coco & Sam)
阿公阿嬷牵过的手，这份温暖我收好
(茵茵 & Kitty)
那些接力过的爱，点亮前路的破晓
(Coco & Sam)
曾有盏灯照亮我，穿过狂雨和风暴
(茵茵 & Kitty)
Now it's my turn，把黑暗都燃烧
(Kitty)
准备好了没？ 

【Chorus】
(茵茵 & Kitty) 点燃心灯！
(Coco & Sam) (Light it up!) 
(茵茵 & Kitty) 照亮整个夜空！
(茵茵 & Kitty) 点燃心灯！
(Coco & Sam) (Pass it on!) 
(茵茵 & Kitty) 善意无限接通！

(大合唱)
万千新年灯火连成 千家万户的希望
(茵茵 & Sam) 我的光，(Kitty & Coco) 你的光
(大合唱)
这份温暖，世世代代相传

【Rap】
(茵茵)
一盏灯火，绝对不只照亮一个屋檐
(Coco)
这份大爱，注定能够走到无限遥远
(Kitty)
一句好话、一次帮助、一个微笑的照面
(Sam)
能让寒冷冰封之地，瞬间切换成春天
(茵茵)
原来最珍贵的福气，不是自己多耀眼
(Coco & Sam)
而是别人需要时候，你化身那道光线

【Verse 2】
(Sam)
跨越南洋的深海，一路燃到这舞台
(Coco)
乘风破浪的先辈，Swag 刻在血脉
(Kitty)
敬上一杯热茶，传承不只是一个 Title 
(茵茵)
化作那一道光芒，做别人生命里的 Idol

【Chorus】
(大合唱)
点燃心灯！(Light it up!) 照亮整个夜空！
点燃心灯！(Pass it on!) 善意无限接通！
万千新年灯火连成 千家万户的希望
我的光，你的光
这份温暖，世世代代相传

(大合唱)
点燃心灯！(Light it up!) 照亮浩瀚彼岸！
点燃心灯！(Pass it on!) 众生觉心点亮！
感恩过去修正现在，创造未来的光芒
慈爱光 智慧光
清明闪耀 照见生命破晓

【Outro】
(再看，大家都试试)
뛰어! (Jump!)
(Sam & Coco) Hey! 薪火相传，Let's go!
(茵茵 & Kitty) Jump! 灯火全开，Make it glow!
(大合唱) 一盏传一盏，一颗心暖一颗心！
뛰어! (Jump!)`;

  const handleCopy = () => {
    navigator.clipboard.writeText(rawLyrics);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl bg-[#0e1017] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/90">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-pink-500 flex items-center justify-center text-black font-bold shadow-md shadow-amber-500/20">
              <Music2 className="w-5 h-5 text-zinc-950" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                《点燃心灯 (Light It Up!)》官方歌词与人声分配
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono">
                  全 7 页完整收录
                </span>
              </h3>
              <p className="text-xs text-zinc-400">
                传统京腔 · 潮流嘻哈 · 南洋华人先辈与慈悲心灯传承
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '已复制歌词' : '复制歌词全文'}</span>
            </button>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 歌词展示区 */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 bg-[#090a0f] space-y-6 text-sm">
          
          {/* 歌词特色与唱将解析 */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 text-xs">
            <div className="text-center p-2 rounded-lg bg-zinc-950/60">
              <span className="text-[11px] text-zinc-500 block">京腔国粹</span>
              <strong className="text-indigo-400">Alicia</strong>
            </div>
            <div className="text-center p-2 rounded-lg bg-zinc-950/60">
              <span className="text-[11px] text-zinc-500 block">街舞 Rap / Swag</span>
              <strong className="text-amber-400">Coco</strong>
            </div>
            <div className="text-center p-2 rounded-lg bg-zinc-950/60">
              <span className="text-[11px] text-zinc-500 block">敬茶根脉 / 笃定</span>
              <strong className="text-pink-400">Kitty</strong>
            </div>
            <div className="text-center p-2 rounded-lg bg-zinc-950/60">
              <span className="text-[11px] text-zinc-500 block">芭蕾优雅 / 心灯</span>
              <strong className="text-emerald-400">茵茵 (YIN YIN)</strong>
            </div>
            <div className="text-center p-2 rounded-lg bg-zinc-950/60 col-span-2 sm:col-span-1">
              <span className="text-[11px] text-zinc-500 block">南洋深海 / 燃舞台</span>
              <strong className="text-cyan-400">Sam</strong>
            </div>
          </div>

          {/* 格式化歌词渲染 */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 font-mono text-xs leading-loose text-zinc-300 whitespace-pre-wrap select-all">
            {rawLyrics}
          </div>

        </div>

      </div>
    </div>
  );
}

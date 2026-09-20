import React, { useState } from 'react';
import { Users, Eye, Sparkles, X, Heart, ShieldCheck, ChevronRight } from 'lucide-react';

export default function CharacterRoster({ characters }) {
  const [selectedChar, setSelectedChar] = useState(null);

  if (!characters || characters.length === 0) return null;

  return (
    <section className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 sm:p-5 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/20 flex items-center justify-center">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              MV 主角人物设定资产库 (Character Cast & References)
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20">
                5位真实角色锁定
              </span>
            </h3>
            <p className="text-[11px] text-zinc-400">
              点击卡片可放大查看「多视图细节、发型耳饰、服装版型与舞姿」，用于把控 AI 角色一致性 (Face Consistency)
            </p>
          </div>
        </div>
      </div>

      {/* 5 位主角横向卡片流 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {characters.map(char => (
          <div
            key={char.id}
            onClick={() => setSelectedChar(char)}
            className="group relative bg-zinc-900/80 hover:bg-zinc-900 border border-zinc-800/80 hover:border-pink-500/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/10 flex flex-col"
          >
            {/* 角色参考图缩略展示 */}
            <div className="relative aspect-[4/5] bg-zinc-950 overflow-hidden">
              <img
                src={char.image}
                alt={char.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-2.5">
                <span className="text-[10px] font-mono text-pink-300 font-semibold uppercase tracking-wider">
                  {char.role}
                </span>
                <h4 className="text-xs font-bold text-white group-hover:text-pink-200 transition-colors">
                  {char.name}
                </h4>
              </div>

              {/* 悬停放大提示 */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-md p-1.5 rounded-lg text-white">
                <Eye className="w-3.5 h-3.5 text-pink-300" />
              </div>
            </div>

            {/* 底部气质与标签 */}
            <div className="p-2.5 flex-1 flex flex-col justify-between text-[11px] bg-zinc-950/40">
              <div className="text-zinc-400 line-clamp-1 italic">
                {char.tagline || char.vibe}
              </div>
              <div className="mt-2 pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] text-zinc-500">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3 h-3" />
                  LoRA 锁定
                </span>
                <span className="group-hover:text-zinc-300 transition-colors flex items-center">
                  查看全表 <ChevronRight className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 放大查看全幅 Character Sheet 模态框 */}
      {selectedChar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="fixed inset-0" onClick={() => setSelectedChar(null)} />

          <div className="relative z-10 w-full max-w-5xl bg-[#0e1017] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            
            {/* Header */}
            <div className="px-5 py-3.5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/80">
              <div className="flex items-center gap-2.5">
                <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 text-xs font-mono font-bold">
                  {selectedChar.name}
                </span>
                <span className="text-sm font-semibold text-white">
                  全角度人物参考设定表 (Character Reference Sheet)
                </span>
              </div>
              <button
                onClick={() => setSelectedChar(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 大图展示区域 */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#090a0f] space-y-4">
              <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 flex items-center justify-center shadow-2xl">
                <img
                  src={selectedChar.image}
                  alt={selectedChar.name}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              {/* 设定与提示词说明 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
                  <div className="font-semibold text-pink-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>服装造型与标识 (Costume & Props):</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">{selectedChar.costume}</p>
                  <p className="text-zinc-400 italic pt-1">{selectedChar.storySnippet}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
                  <div className="font-semibold text-indigo-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>AI 生图一致性关键提示词 (LoRA Keywords):</span>
                  </div>
                  <div className="p-2 rounded bg-black/60 font-mono text-[11px] text-zinc-200 select-all border border-zinc-800">
                    {selectedChar.loraKeywords}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

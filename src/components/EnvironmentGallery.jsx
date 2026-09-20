import React, { useState } from 'react';
import { Compass, Sparkles, Eye, X, Sun, Moon, Flame, Wind, Film, ChevronRight } from 'lucide-react';

export default function EnvironmentGallery({ environments }) {
  const [selectedEnv, setSelectedEnv] = useState(null);

  if (!environments || environments.length === 0) return null;

  return (
    <section className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 sm:p-5 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              MV 核心视觉场景概念库 (Cinematic Concept Environments)
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                5大主场已锁定
              </span>
            </h3>
            <p className="text-[11px] text-zinc-400">
              龙鼓大院 · 水墨画堂 · 月影深闺 · 晨光竹海 · 金光破晓江天（点击查看光影与机位调度）
            </p>
          </div>
        </div>
      </div>

      {/* 5 组场景卡片网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {environments.map((env, idx) => (
          <div
            key={env.id}
            onClick={() => setSelectedEnv(env)}
            className="group relative bg-zinc-900/80 hover:bg-zinc-900 border border-zinc-800/80 hover:border-amber-500/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 flex flex-col"
          >
            {/* 场景封面图 */}
            <div className="relative aspect-video lg:aspect-[4/3] bg-zinc-950 overflow-hidden">
              <img
                src={env.image}
                alt={env.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3">
                <span className="text-[10px] font-mono text-amber-300 font-semibold uppercase tracking-wider">
                  场景 0{idx + 1} · {env.lightingTag}
                </span>
                <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                  {env.name}
                </h4>
              </div>

              {/* 推荐服装标识 */}
              <div className="absolute top-2 left-2 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-medium text-zinc-200 border border-white/10">
                {env.recommendedWardrobe}
              </div>

              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-md p-1.5 rounded-lg text-white">
                <Eye className="w-3.5 h-3.5 text-amber-300" />
              </div>
            </div>

            {/* 底部信息 */}
            <div className="p-3 flex-1 flex flex-col justify-between text-[11px] bg-zinc-950/40 gap-2">
              <p className="text-zinc-400 line-clamp-2 leading-relaxed italic">
                {env.description}
              </p>
              <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] text-zinc-500">
                <span className="text-amber-400 font-mono">
                  {env.lyricsMapping}
                </span>
                <span className="group-hover:text-zinc-300 transition-colors flex items-center">
                  详情 <ChevronRight className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 放大查看全景概念图模态框 */}
      {selectedEnv && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="fixed inset-0" onClick={() => setSelectedEnv(null)} />

          <div className="relative z-10 w-full max-w-5xl bg-[#0e1017] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            
            {/* Header */}
            <div className="px-5 py-3.5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/80">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
                  {selectedEnv.lightingTag}
                </span>
                <span className="text-sm font-bold text-white">
                  {selectedEnv.name} — 概念视觉全景与机位调度
                </span>
              </div>
              <button
                onClick={() => setSelectedEnv(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 大图展示 */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#090a0f] space-y-4">
              <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 flex items-center justify-center shadow-2xl">
                <img
                  src={selectedEnv.image}
                  alt={selectedEnv.name}
                  className="w-full h-auto max-h-[65vh] object-contain"
                />
              </div>

              {/* 场景调度指南 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
                  <div className="font-semibold text-amber-300 flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5" />
                    <span>光影与氛围系统:</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">{selectedEnv.lightingDetails}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
                  <div className="font-semibold text-indigo-300 flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5" />
                    <span>推荐镜头运镜 (Camera Motion):</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">{selectedEnv.cameraGuidance}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
                  <div className="font-semibold text-red-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>推荐服装方案:</span>
                  </div>
                  <div className="p-2 rounded bg-black/60 font-medium text-[11px] text-red-300 border border-red-500/20">
                    {selectedEnv.recommendedWardrobe}
                  </div>
                  <p className="text-zinc-400 text-[11px] pt-0.5">{selectedEnv.wardrobeReason}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

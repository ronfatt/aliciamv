import React, { useState } from 'react';
import { Compass, Sparkles, Eye, X, Sun, Moon, Flame, Wind, Film, ChevronRight, Layers, Camera } from 'lucide-react';

export default function EnvironmentGallery({ environments }) {
  const [selectedEnv, setSelectedEnv] = useState(null);
  const [activeShotUrl, setActiveShotUrl] = useState(null);

  if (!environments || environments.length === 0) return null;

  const handleOpenModal = (env) => {
    setSelectedEnv(env);
    setActiveShotUrl(env.image);
  };

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
                2大核心影视场景已锁定 (龙鼓殿 & 桃花源)
              </span>
            </h3>
            <p className="text-[11px] text-zinc-400">
              龙鼓殿（主殿/战鼓阵/高阁长廊等12机位） · 桃花源（溪畔石台/石庭/溪桥等6机位），点击卡片查看多视角机位与光影调度
            </p>
          </div>
        </div>
      </div>

      {/* 2 组场景核心展示卡片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {environments.map((env, idx) => (
          <div
            key={env.id}
            onClick={() => handleOpenModal(env)}
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

              {/* 多视角机位数量标识 */}
              {env.shots && env.shots.length > 0 && (
                <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-mono text-amber-300 border border-amber-500/30 flex items-center gap-1 shadow-sm">
                  <Camera className="w-3 h-3 text-amber-400" />
                  <span>{env.shots.length} 组机位</span>
                </div>
              )}

              {/* 推荐服装标识 */}
              <div className="absolute top-2 left-2 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-medium text-zinc-200 border border-white/10">
                {env.recommendedWardrobe}
              </div>
            </div>

            {/* 底部信息 */}
            <div className="p-3 flex-1 flex flex-col justify-between text-[11px] bg-zinc-950/40 gap-2">
              <p className="text-zinc-400 line-clamp-2 leading-relaxed italic">
                {env.description}
              </p>
              <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] text-zinc-500">
                <span className="text-amber-400 font-mono line-clamp-1">
                  {env.lyricsMapping}
                </span>
                <span className="group-hover:text-zinc-300 transition-colors flex items-center shrink-0 ml-1">
                  查看全景 <ChevronRight className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 放大查看全景概念图与多机位模态框 */}
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

            {/* 主画廊展示区 */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#090a0f] space-y-4">
              
              {/* 大图展示 */}
              <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 flex items-center justify-center shadow-2xl aspect-[16/9] max-h-[58vh]">
                <img
                  src={activeShotUrl || selectedEnv.image}
                  alt={selectedEnv.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 多视角机位快速切换栏 */}
              {selectedEnv.shots && selectedEnv.shots.length > 0 && (
                <div className="space-y-2 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-300 font-semibold flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-amber-400" />
                      官方多视角镜头库 (点击切换大图预览):
                    </span>
                    <span className="text-zinc-500 font-mono text-[11px]">
                      共 {selectedEnv.shots.length} 组高清分镜机位
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 pt-1">
                    {selectedEnv.shots.map((shot, sIdx) => {
                      const isSelected = (activeShotUrl || selectedEnv.image) === shot.url;
                      return (
                        <button
                          key={sIdx}
                          onClick={() => setActiveShotUrl(shot.url)}
                          className={`relative rounded-lg overflow-hidden border text-left transition-all ${
                            isSelected
                              ? 'border-amber-400 ring-2 ring-amber-400/40 shadow-lg scale-[1.02]'
                              : 'border-zinc-800 hover:border-zinc-600 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <div className="aspect-[16/9] bg-black">
                            <img src={shot.url} alt={shot.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-1 bg-zinc-950/90 text-[10px] text-zinc-300 line-clamp-1">
                            {shot.title}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

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

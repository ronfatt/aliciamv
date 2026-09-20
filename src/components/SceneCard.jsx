import React from 'react';
import { 
  Play, Check, AlertCircle, Clock, Video, Image as ImageIcon, 
  Sparkles, Camera, MessageSquare, Compass, Users, FileText, CheckCircle2, Sliders 
} from 'lucide-react';
import { statusConfig } from '../data/projectData';

export default function SceneCard({ 
  scene, 
  onOpenModal, 
  isActiveInPlayback, 
  onToggleStatus 
}) {
  const currentStatus = statusConfig[scene.status] || statusConfig.draft;
  
  // 核心：优先展示我生成的画面效果图
  const displayImage = 
    scene.generatedOutput?.imageUrl || 
    scene.evolution.stage4_final?.mediaUrl || 
    scene.evolution.stage3_motion?.mediaUrl ||
    "/environments/env_04_drum_courtyard.jpg";

  const pendingFeedbacks = scene.feedbacks?.filter(f => !f.resolved)?.length || 0;

  return (
    <div 
      className={`group relative flex flex-col bg-zinc-900/80 border rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-indigo-500/10 ${
        isActiveInPlayback 
          ? 'border-indigo-500 ring-2 ring-indigo-500/50 shadow-xl shadow-indigo-500/20 -translate-y-1' 
          : 'border-zinc-800/80'
      }`}
    >
      {/* 正在播放时的高光指示条 */}
      {isActiveInPlayback && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-pink-500 to-indigo-500 z-20 animate-pulse" />
      )}

      {/* 1. 我生成的画面效果图 / 视频预览 (16:9 画幅) */}
      <div 
        onClick={() => onOpenModal(scene, 'stage4_final')}
        className="relative aspect-video w-full bg-zinc-950 overflow-hidden cursor-pointer group/media"
      >
        <img 
          src={displayImage} 
          alt={scene.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/media:scale-105"
          loading="lazy"
        />

        {/* 顶部浮层：镜头编号与时间码 */}
        <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
          <span className="px-2.5 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-white font-mono font-bold text-xs border border-white/10 shadow-sm">
            #{String(scene.number).padStart(2, '0')}
          </span>
          <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-zinc-300 font-mono text-[11px] border border-white/5">
            {scene.timecode}
          </span>
        </div>

        {/* 顶部右侧：状态 Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border backdrop-blur-md shadow-sm ${currentStatus.badgeBg}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${currentStatus.dot} ${scene.status === 'needs_review' ? 'animate-pulse' : ''}`} />
            <span>{currentStatus.label}</span>
          </span>
        </div>

        {/* 左下角：生成画面标识 */}
        <div className="absolute bottom-2.5 left-3 z-10">
          <span className="px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-medium text-amber-300 border border-amber-500/30 flex items-center gap-1 shadow-sm">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>生成效果图 / 视频</span>
          </span>
        </div>

        {/* 悬停快捷入口 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover/media:opacity-100 transition-opacity flex flex-col justify-end p-3.5 z-10">
          <div className="flex items-center justify-between text-white text-xs">
            <span className="flex items-center gap-1.5 font-medium text-indigo-300">
              <Sparkles className="w-3.5 h-3.5" />
              点击查看 4 阶段演进（Prompt / 人设表 / 动效）
            </span>
            <span className="text-[11px] font-mono text-zinc-400">
              {scene.evolution?.stage1_prompt?.model}
            </span>
          </div>
        </div>
      </div>

      {/* 2. 信息主体：四要素生产公式 (歌词 + 场景 + 人物 = 画面) + 要求描述 */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-3.5">
        
        {/* 标题 */}
        <div>
          <h3 
            onClick={() => onOpenModal(scene)}
            className="font-bold text-sm text-zinc-100 group-hover:text-indigo-300 transition-colors cursor-pointer line-clamp-1"
          >
            {scene.title}
          </h3>
        </div>

        {/* 核心公式 3 要素条目 */}
        <div className="space-y-2 text-xs">
          
          {/* ① 歌词分段 */}
          <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-semibold text-pink-400 flex items-center gap-1">
                <span>🎵 歌词分段:</span>
              </span>
              <span className="text-zinc-500 text-[10px]">{scene.timecode}</span>
            </div>
            <p className="text-zinc-200 text-xs italic leading-relaxed whitespace-pre-line">
              {scene.lyricsSnippet || scene.lyrics}
            </p>
          </div>

          {/* ② 场景建议 */}
          <div className="p-2 rounded-lg bg-zinc-950/50 border border-zinc-800/60 flex items-start gap-2">
            <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-[11px] leading-snug">
              <span className="text-zinc-400 font-medium mr-1.5">场景建议:</span>
              <strong className="text-zinc-200">{scene.suggestedEnvironment || "指定影视实景"}</strong>
            </div>
          </div>

          {/* ③ 参与人物与服装 */}
          <div className="p-2 rounded-lg bg-zinc-950/50 border border-zinc-800/60 flex items-start gap-2">
            <Users className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-[11px] leading-snug">
              <span className="text-zinc-400 font-medium mr-1.5">登场人物:</span>
              <strong className="text-indigo-300">{scene.characterName}</strong>
              {scene.wardrobeNote && (
                <div className="text-zinc-500 text-[10px] mt-0.5">
                  造型: {scene.wardrobeNote}
                </div>
              )}
            </div>
          </div>

          {/* ④ 画面要求与描述 (Visual Directives) */}
          {scene.visualRequirements && scene.visualRequirements.length > 0 && (
            <div className="p-2.5 rounded-xl bg-amber-950/15 border border-amber-500/20 text-[11px] space-y-1">
              <div className="font-semibold text-amber-300 flex items-center gap-1 text-[11px]">
                <FileText className="w-3 h-3 text-amber-400" />
                <span>画面要求与指令描述:</span>
              </div>
              <ul className="space-y-1 text-zinc-300 text-[11px]">
                {scene.visualRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-1 leading-relaxed">
                    <span className="text-amber-400 font-mono text-[10px]">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* 底部演化小点与操作 */}
        <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between">
          <button
            onClick={() => onOpenModal(scene)}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-amber-300 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>
              {pendingFeedbacks > 0 ? (
                <strong className="text-amber-400 font-medium">{pendingFeedbacks} 条待修</strong>
              ) : (
                <span className="text-zinc-500">审片批注</span>
              )}
            </span>
          </button>

          {/* 快捷定稿确认 */}
          <button
            onClick={() => onToggleStatus(scene.id)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
              scene.status === 'approved'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border border-zinc-700'
            }`}
          >
            <Check className="w-3 h-3" />
            <span>{scene.status === 'approved' ? '画面已定稿' : '确认画面'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}

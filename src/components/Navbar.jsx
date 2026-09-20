import React from 'react';
import { Film, CheckCircle2, AlertCircle, Clock, FileText, MessageSquare, Plus, LayoutGrid, ListTree, Sparkles, BookOpen, Shirt } from 'lucide-react';

export default function Navbar({ 
  projectInfo, 
  scenes, 
  activeView, 
  setActiveView, 
  onOpenFeedback, 
  onOpenNewScene,
  onOpenLyrics,
  onOpenWardrobe,
  feedbackCount 
}) {
  const total = scenes.length;
  const approved = scenes.filter(s => s.status === 'approved').length;
  const needsReview = scenes.filter(s => s.status === 'needs_review').length;
  const inProgress = scenes.filter(s => s.status === 'in_progress').length;
  const percent = total > 0 ? Math.round((approved / total) * 100) : 0;

  return (
    <header className="sticky top-0 z-40 bg-[#090a0f]/90 backdrop-blur-xl border-b border-zinc-800/80 px-4 lg:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* 左侧：MV 标题与元数据 */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-black/60 rounded-[10px] flex items-center justify-center backdrop-blur-sm">
              <Film className="w-5 h-5 text-indigo-300" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg text-white tracking-tight flex items-center gap-2">
                {projectInfo.title}
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium">
                  {projectInfo.currentVersion}
                </span>
              </h1>
            </div>
            <p className="text-xs text-zinc-400 flex items-center gap-2 mt-0.5">
              <span>导演 / 制作: <strong className="text-zinc-300 font-medium">{projectInfo.director}</strong></span>
              <span className="text-zinc-600">•</span>
              <span>画幅: <strong className="text-zinc-300 font-mono font-medium">{projectInfo.aspectRatio}</strong></span>
            </p>
          </div>
        </div>

        {/* 中间：制作全景进度环与统计 */}
        <div className="hidden xl:flex items-center gap-6 bg-zinc-900/60 border border-zinc-800/80 rounded-xl px-4 py-2">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <svg className="w-9 h-9 transform -rotate-90">
                <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="3" className="text-zinc-800" fill="transparent"/>
                <circle 
                  cx="18" 
                  cy="18" 
                  r="14" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  className="text-emerald-500 transition-all duration-500" 
                  fill="transparent"
                  strokeDasharray="88"
                  strokeDashoffset={88 - (88 * percent) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute text-[10px] font-bold text-zinc-200">{percent}%</span>
            </div>
            <div>
              <div className="text-[11px] text-zinc-400 font-medium">成片定稿率</div>
              <div className="text-xs font-semibold text-zinc-200">{approved} / {total} 镜头锁定</div>
            </div>
          </div>

          <div className="h-6 w-px bg-zinc-800" />

          {/* 状态小标签 */}
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>定稿 {approved}</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>待审 {needsReview}</span>
            </div>
            <div className="flex items-center gap-1.5 text-indigo-400">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              <span>生成中 {inProgress}</span>
            </div>
          </div>
        </div>

        {/* 右侧：操作区 (视图切换 / 反馈清单 / 新增镜头) */}
        <div className="flex items-center gap-2.5">
          {/* 视图切换 */}
          <div className="flex bg-zinc-900/90 border border-zinc-800 rounded-lg p-0.5">
            <button
              onClick={() => setActiveView('grid')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeView === 'grid'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="故事板网格视图"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">故事板</span>
            </button>
            <button
              onClick={() => setActiveView('timeline')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeView === 'timeline'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="时间轴流式视图"
            >
              <ListTree className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">时间流</span>
            </button>
          </div>

          {/* 查看完整官方歌词 */}
          <button
            onClick={onOpenLyrics}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-medium text-zinc-300 transition-all"
            title="查看完整 7 页官方歌词与人声分配"
          >
            <BookOpen className="w-3.5 h-3.5 text-pink-400" />
            <span className="hidden sm:inline">歌词</span>
          </button>

          {/* 造型二选一定稿按钮 */}
          <button
            onClick={onOpenWardrobe}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 border border-red-500/40 text-xs font-medium text-red-200 transition-all shadow-sm"
            title="查看并选定 2 套服装方案"
          >
            <Shirt className="w-3.5 h-3.5 text-red-400" />
            <span>造型二选一</span>
          </button>

          {/* 评审反馈清单按钮 (解决聊天软件传图痛点) */}
          <button
            onClick={onOpenFeedback}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-medium text-zinc-200 transition-all shadow-sm group"
          >
            <MessageSquare className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
            <span>评审清单</span>
            {feedbackCount > 0 && (
              <span className="flex items-center justify-center px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-amber-500 text-black">
                {feedbackCount}
              </span>
            )}
          </button>

          {/* 添加新分镜 */}
          <button
            onClick={onOpenNewScene}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-xs font-semibold shadow-md shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>添加分镜</span>
          </button>
        </div>

      </div>
    </header>
  );
}

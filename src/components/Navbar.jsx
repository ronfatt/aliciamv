import React from 'react';
import { 
  Film, 
  Users, 
  Shirt, 
  Compass, 
  BookOpen, 
  MessageSquare, 
  Plus, 
  LayoutGrid, 
  ListTree, 
  Sparkles,
  RefreshCw,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function Navbar({ 
  projectInfo, 
  scenes, 
  activeTab, 
  setActiveTab, 
  activeView, 
  setActiveView, 
  onOpenNewScene,
  feedbackCount,
  onResetData
}) {
  const total = scenes.length;
  const approved = scenes.filter(s => s.status === 'approved').length;
  const needsReview = scenes.filter(s => s.status === 'needs_review').length;
  const percent = total > 0 ? Math.round((approved / total) * 100) : 0;

  // 6 大核心工作台定义
  const workspaces = [
    { 
      id: 'storyboard', 
      label: '智能分镜流', 
      sub: '4阶演进与公式卡片', 
      icon: Film, 
      badge: `${total} 镜头` 
    },
    { 
      id: 'characters', 
      label: 'MC主角定妆', 
      sub: '1位特邀领唱 + 5位主唱', 
      icon: Users, 
      badge: '6 位全卡司' 
    },
    { 
      id: 'wardrobe', 
      label: '换装试衣与定稿', 
      sub: '独立视觉与二选一定稿', 
      icon: Shirt, 
      badge: '2 套服装' 
    },
    { 
      id: 'environments', 
      label: '概念场景画廊', 
      sub: '5大影视核心场景', 
      icon: Compass, 
      badge: '5 大场景' 
    },
    { 
      id: 'lyrics', 
      label: '官方歌词全案', 
      sub: '4:49 毫秒人声分配', 
      icon: BookOpen, 
      badge: '7 页全曲' 
    },
    { 
      id: 'review', 
      label: '审片与修改清单', 
      sub: '替代聊天群碎图片', 
      icon: MessageSquare, 
      badge: feedbackCount > 0 ? `${feedbackCount} 待改` : '已清空',
      alert: feedbackCount > 0
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#090a0f]/95 backdrop-blur-xl border-b border-zinc-800/80 transition-all shadow-xl shadow-black/40">
      
      {/* 顶级栏：平台标志、项目元数据、定稿率与全局快捷操作 */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-zinc-800/50">
        
        {/* 左侧：Logo 与项目信息 */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20 shrink-0">
            <div className="w-full h-full bg-black/80 rounded-[10px] flex items-center justify-center">
              <Film className="w-4 h-4 text-indigo-300" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-base text-white tracking-tight flex items-center gap-2">
                {projectInfo.title}
              </h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium hidden sm:inline">
                {projectInfo.currentVersion}
              </span>
            </div>
            <div className="text-[11px] text-zinc-400 flex flex-wrap items-center gap-2 mt-0.5">
              <span>导演 / 制作: <strong className="text-zinc-300 font-medium">{projectInfo.director}</strong></span>
              <span className="text-zinc-600">•</span>
              <span>4分49秒 官方全音轨</span>
              <span className="text-zinc-600">•</span>
              <span>122 BPM</span>
            </div>
          </div>
        </div>

        {/* 右侧：定稿进度与全局动作 */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          {/* 定稿率小徽章 */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>定稿率: <strong className="text-white font-mono">{percent}%</strong> ({approved}/{total})</span>
          </div>

          {/* 恢复示范数据 */}
          {onResetData && (
            <button
              onClick={onResetData}
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors"
              title="恢复示范数据"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          )}

          {/* 添加分镜按钮 */}
          <button
            onClick={onOpenNewScene}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-xs font-semibold shadow-md shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>添加分镜</span>
          </button>
        </div>
      </div>

      {/* 平台级工作台选项卡 (Workspace Tabs) */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2 flex items-center justify-between gap-3 overflow-x-auto">
        <nav className="flex items-center gap-1 sm:gap-2">
          {workspaces.map(ws => {
            const Icon = ws.icon;
            const isActive = activeTab === ws.id;

            return (
              <button
                key={ws.id}
                onClick={() => setActiveTab(ws.id)}
                className={`relative flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                  isActive
                    ? 'bg-zinc-800 text-white shadow-md border border-zinc-700/80'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/80 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-indigo-400' : 'text-zinc-500'}`} />
                <div className="text-left flex items-center gap-1.5">
                  <span>{ws.label}</span>
                  <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded-full border ${
                    ws.alert
                      ? 'bg-amber-500 text-black border-amber-400 font-bold animate-pulse'
                      : isActive
                        ? 'bg-zinc-700/80 text-zinc-200 border-zinc-600'
                        : 'bg-zinc-900 text-zinc-500 border-zinc-800'
                  }`}>
                    {ws.badge}
                  </span>
                </div>

                {/* 活跃指示光条 */}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* 当在分镜流时，在最右侧展示网格 / 时间轴切换 */}
        {activeTab === 'storyboard' && (
          <div className="flex bg-zinc-900/90 border border-zinc-800 rounded-lg p-0.5 shrink-0 hidden sm:flex">
            <button
              onClick={() => setActiveView('grid')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                activeView === 'grid'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="故事板网格视图"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>网格</span>
            </button>
            <button
              onClick={() => setActiveView('timeline')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                activeView === 'timeline'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="时间轴流式视图"
            >
              <ListTree className="w-3.5 h-3.5" />
              <span>时间流</span>
            </button>
          </div>
        )}
      </div>

    </header>
  );
}

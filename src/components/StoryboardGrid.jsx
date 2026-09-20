import React from 'react';
import SceneCard from './SceneCard';
import { Film, Sparkles, Clock, Music } from 'lucide-react';

export default function StoryboardGrid({ 
  scenes, 
  onOpenModal, 
  currentSec, 
  activeView, 
  onToggleStatus 
}) {
  if (scenes.length === 0) {
    return (
      <div className="py-20 text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-zinc-500">
          <Film className="w-6 h-6" />
        </div>
        <h4 className="text-sm font-semibold text-zinc-300">没有匹配的分镜镜头</h4>
        <p className="text-xs text-zinc-500">尝试更改上方的筛选状态或清空搜索关键字</p>
      </div>
    );
  }

  // 网格视图
  if (activeView === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {scenes.map(scene => {
          const isActiveInPlayback = currentSec >= scene.startSec && currentSec < scene.endSec;
          return (
            <SceneCard
              key={scene.id}
              scene={scene}
              isActiveInPlayback={isActiveInPlayback}
              onOpenModal={onOpenModal}
              onToggleStatus={onToggleStatus}
            />
          );
        })}
      </div>
    );
  }

  // 时间轴流式视图 (Timeline Flow)
  return (
    <div className="relative border-l-2 border-zinc-800/80 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8 py-2">
      {scenes.map(scene => {
        const isActiveInPlayback = currentSec >= scene.startSec && currentSec < scene.endSec;
        return (
          <div key={scene.id} className="relative group">
            {/* 时间轴左侧锚点 */}
            <div className={`absolute -left-[31px] sm:-left-[39px] top-4 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              isActiveInPlayback 
                ? 'bg-indigo-500 border-white ring-4 ring-indigo-500/30 scale-125' 
                : 'bg-zinc-900 border-zinc-600 group-hover:border-zinc-400'
            }`} />

            <div className="max-w-3xl">
              <SceneCard
                scene={scene}
                isActiveInPlayback={isActiveInPlayback}
                onOpenModal={onOpenModal}
                onToggleStatus={onToggleStatus}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React from 'react';
import { Search, Filter, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { statusConfig } from '../data/projectData';

export default function StatusFilter({ 
  scenes, 
  activeFilter, 
  setActiveFilter, 
  searchQuery, 
  setSearchQuery,
  sortBy,
  setSortBy
}) {
  const counts = {
    all: scenes.length,
    approved: scenes.filter(s => s.status === 'approved').length,
    needs_review: scenes.filter(s => s.status === 'needs_review').length,
    in_progress: scenes.filter(s => s.status === 'in_progress').length,
    draft: scenes.filter(s => s.status === 'draft').length
  };

  const filterOptions = [
    { key: 'all', label: '全部镜头', count: counts.all, dot: 'bg-zinc-400' },
    { key: 'approved', label: '已定稿', count: counts.approved, dot: 'bg-emerald-400' },
    { key: 'needs_review', label: '待审核', count: counts.needs_review, dot: 'bg-amber-400' },
    { key: 'in_progress', label: '生成中', count: counts.in_progress, dot: 'bg-indigo-400' },
    { key: 'draft', label: '草稿', count: counts.draft, dot: 'bg-zinc-500' }
  ];

  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-2 pb-1">
      
      {/* 状态过滤标签组 */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
        {filterOptions.map(option => {
          const isActive = activeFilter === option.key;
          return (
            <button
              key={option.key}
              onClick={() => setActiveFilter(option.key)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-zinc-800 text-white shadow-sm ring-1 ring-zinc-700'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${option.dot} ${option.key === 'needs_review' && counts.needs_review > 0 ? 'animate-pulse' : ''}`} />
              <span>{option.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                isActive ? 'bg-zinc-700 text-zinc-200' : 'bg-zinc-900 text-zinc-500'
              }`}>
                {option.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 搜索与排序 */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1 md:w-64">
          <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="搜索歌词、运镜、提示词..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900/80 border border-zinc-800 focus:border-indigo-500/50 rounded-lg pl-8 pr-3 py-1.5 text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none transition-all"
          />
        </div>

        {/* 排序方式切换 */}
        <button
          onClick={() => setSortBy(sortBy === 'time' ? 'needs_review_first' : 'time')}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-all shrink-0"
          title="切换排序规则"
        >
          <ArrowUpDown className="w-3 h-3 text-indigo-400" />
          <span className="hidden sm:inline">
            {sortBy === 'time' ? '时间线顺序' : '优先待审'}
          </span>
        </button>
      </div>

    </div>
  );
}

import React, { useState } from 'react';
import { 
  MessageSquare, 
  Check, 
  Copy, 
  Download, 
  AlertCircle, 
  CheckCircle2, 
  Share2, 
  Film, 
  Filter, 
  Trash2,
  Clock,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function ReviewWorkspace({ 
  scenes, 
  projectInfo, 
  onToggleFeedbackStatus, 
  onDeleteFeedback,
  onOpenSceneModal 
}) {
  const [filterType, setFilterType] = useState('unresolved'); // 'all' | 'unresolved' | 'resolved'
  const [copied, setCopied] = useState(false);

  // 收集所有镜头批注反馈
  const allFeedbacks = [];
  scenes.forEach(scene => {
    if (scene.feedbacks && scene.feedbacks.length > 0) {
      scene.feedbacks.forEach(fb => {
        allFeedbacks.push({
          sceneNumber: scene.number,
          sceneTitle: scene.title,
          timecode: scene.timecode,
          sceneId: scene.id,
          sceneObj: scene,
          ...fb
        });
      });
    }
  });

  const unresolved = allFeedbacks.filter(f => !f.resolved);
  const resolved = allFeedbacks.filter(f => f.resolved);

  const displayedFeedbacks = filterType === 'all'
    ? allFeedbacks
    : filterType === 'unresolved'
      ? unresolved
      : resolved;

  // 生成格式化 WhatsApp 文本清单
  const generateFormattedText = () => {
    let text = `🎬 【${projectInfo.title}】制作审片与修改清单\n`;
    text += `版本: ${projectInfo.currentVersion} | 制作: ${projectInfo.director}\n`;
    text += `时间: ${new Date().toLocaleDateString()}\n`;
    text += `待处理项目: ${unresolved.length} 条 | 已确认通过: ${resolved.length} 条\n`;
    text += `===================================\n\n`;

    if (unresolved.length > 0) {
      text += `⚡ 【待调整修改项】：\n`;
      unresolved.forEach((item, index) => {
        text += `${index + 1}. [分镜 #${String(item.sceneNumber).padStart(2, '0')}] ${item.sceneTitle} (${item.timecode})\n`;
        text += `   🏷️ 标签: ${item.tag}\n`;
        text += `   📝 要求: ${item.content}\n`;
        if (item.coords) {
          text += `   📍 坐标: (X:${Math.round(item.coords.x)}%, Y:${Math.round(item.coords.y)}%)\n`;
        }
        text += `\n`;
      });
    } else {
      text += `🎉 暂无待修改项，所有镜头均已锁定通过！\n\n`;
    }

    if (resolved.length > 0) {
      text += `✅ 【已定稿/解决项】：\n`;
      resolved.forEach((item, index) => {
        text += `• [分镜 #${String(item.sceneNumber).padStart(2, '0')}] ${item.sceneTitle}: ${item.content}\n`;
      });
    }

    return text;
  };

  const handleCopyWhatsApp = () => {
    const text = generateFormattedText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleDownloadMarkdown = () => {
    const text = generateFormattedText();
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${projectInfo.title}-修改清单-${new Date().toISOString().slice(0, 10)}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      
      {/* 顶部标题与快速导出工具栏 */}
      <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-4 sm:p-6 backdrop-blur-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              制作审片与修改意见中心 (Review & Feedback Center)
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                替代聊天软件碎片沟通
              </span>
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              各镜头打标批注统一汇总，支持一键生成 WhatsApp 格式清单，告别打样图刷屏与版本混淆
            </p>
          </div>
        </div>

        {/* 导出按钮组 */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleCopyWhatsApp}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold shadow-md shadow-emerald-600/20 transition-all active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>已复制 WhatsApp 清单</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>复制 WhatsApp 格式</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownloadMarkdown}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-medium text-zinc-200 transition-all shadow-sm"
            title="下载 .md 审片报告文件"
          >
            <Download className="w-4 h-4 text-zinc-400" />
            <span className="hidden sm:inline">下载报告 (.md)</span>
          </button>
        </div>
      </div>

      {/* 3 大核心审片指标 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-zinc-950/70 border border-amber-500/30 flex items-center justify-between">
          <div>
            <div className="text-xs font-medium text-zinc-400">待处理修改项</div>
            <div className="text-2xl font-bold text-amber-300 font-mono mt-1">{unresolved.length}</div>
          </div>
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <AlertCircle className="w-5 h-5" />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950/70 border border-emerald-500/30 flex items-center justify-between">
          <div>
            <div className="text-xs font-medium text-zinc-400">已解决 / 确认定稿</div>
            <div className="text-2xl font-bold text-emerald-300 font-mono mt-1">{resolved.length}</div>
          </div>
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 flex items-center justify-between">
          <div>
            <div className="text-xs font-medium text-zinc-400">总打标记录</div>
            <div className="text-2xl font-bold text-zinc-200 font-mono mt-1">{allFeedbacks.length}</div>
          </div>
          <div className="w-9 h-9 rounded-lg bg-zinc-800 text-zinc-400 flex items-center justify-center">
            <Film className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* 左右分栏：左侧批注项列表，右侧 WhatsApp 实时预览卡片 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* 左侧：反馈清单与筛选 (7/12) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* 筛选切换 Tabs */}
          <div className="flex items-center justify-between gap-2 p-1 bg-zinc-900/90 rounded-xl border border-zinc-800 text-xs">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setFilterType('unresolved')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  filterType === 'unresolved'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                待处理 ({unresolved.length})
              </button>
              <button
                onClick={() => setFilterType('resolved')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  filterType === 'resolved'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                已定稿 ({resolved.length})
              </button>
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  filterType === 'all'
                    ? 'bg-zinc-800 text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                全部记录 ({allFeedbacks.length})
              </button>
            </div>
            <span className="text-[11px] text-zinc-500 px-2 font-mono">
              共 {displayedFeedbacks.length} 条
            </span>
          </div>

          {/* 批注卡片列表 */}
          <div className="space-y-3">
            {displayedFeedbacks.length === 0 ? (
              <div className="p-8 rounded-2xl bg-zinc-950/40 border border-zinc-800/80 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto opacity-60" />
                <h4 className="text-sm font-semibold text-zinc-300">当前没有此类反馈</h4>
                <p className="text-xs text-zinc-500">
                  点击任意分镜详情，在画面上点击即可留下打标意见
                </p>
              </div>
            ) : (
              displayedFeedbacks.map(item => (
                <div
                  key={item.id}
                  className={`p-4 rounded-xl border transition-all ${
                    item.resolved
                      ? 'bg-zinc-950/40 border-zinc-800/60 opacity-60'
                      : 'bg-zinc-900/80 border-zinc-800 hover:border-amber-500/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      {/* 勾选框 */}
                      <button
                        onClick={() => onToggleFeedbackStatus && onToggleFeedbackStatus(item.sceneId, item.id)}
                        className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                          item.resolved
                            ? 'bg-emerald-500 border-emerald-400 text-black'
                            : 'border-zinc-700 bg-zinc-950 hover:border-zinc-500 text-transparent'
                        }`}
                        title={item.resolved ? '标记为未解决' : '标记为已定稿'}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </button>

                      <div>
                        {/* 镜头与标签 */}
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <button
                            onClick={() => onOpenSceneModal && onOpenSceneModal(item.sceneObj)}
                            className="text-xs font-bold text-white hover:text-indigo-300 transition-colors flex items-center gap-1"
                          >
                            <span className="font-mono text-indigo-400">#{String(item.sceneNumber).padStart(2, '0')}</span>
                            <span>{item.sceneTitle}</span>
                            <ExternalLink className="w-3 h-3 text-zinc-500" />
                          </button>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                            {item.tag || '画面优化'}
                          </span>
                          <span className="text-[10px] text-zinc-500 font-mono">
                            {item.timecode}
                          </span>
                        </div>

                        {/* 反馈正文 */}
                        <p className={`text-xs leading-relaxed ${item.resolved ? 'line-through text-zinc-500' : 'text-zinc-200'}`}>
                          {item.content}
                        </p>

                        {/* 坐标与时间 */}
                        <div className="flex items-center gap-3 mt-2 text-[10px] text-zinc-500 font-mono">
                          {item.coords && (
                            <span className="text-amber-400/80">
                              📍 坐标: X:{Math.round(item.coords.x)}% Y:{Math.round(item.coords.y)}%
                            </span>
                          )}
                          <span>{item.date || '今日'}</span>
                        </div>
                      </div>
                    </div>

                    {/* 删除按钮 */}
                    {onDeleteFeedback && (
                      <button
                        onClick={() => onDeleteFeedback(item.sceneId, item.id)}
                        className="p-1 rounded text-zinc-600 hover:text-red-400 transition-colors"
                        title="删除该批注"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* 右侧：WhatsApp 清单实时预览与复制 (5/12) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
            <span className="font-semibold text-zinc-300 flex items-center gap-1.5">
              <Share2 className="w-3.5 h-3.5 text-emerald-400" />
              WhatsApp 导出实时预览
            </span>
            <span className="text-[10px] font-mono text-zinc-500">Live Preview</span>
          </div>

          <div className="relative rounded-2xl bg-zinc-950 border border-zinc-800 p-4 font-mono text-xs text-zinc-300 shadow-xl overflow-hidden">
            <div className="absolute top-2 right-2">
              <button
                onClick={handleCopyWhatsApp}
                className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px] font-sans font-medium flex items-center gap-1 transition-colors border border-zinc-700"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? '已复制' : '复制'}</span>
              </button>
            </div>

            <pre className="whitespace-pre-wrap font-sans text-xs text-zinc-300 leading-relaxed max-h-[460px] overflow-y-auto select-all pr-12">
              {generateFormattedText()}
            </pre>
          </div>
        </div>

      </div>

    </div>
  );
}

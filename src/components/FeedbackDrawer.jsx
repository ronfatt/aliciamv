import React, { useState } from 'react';
import { X, Copy, Check, Download, Share2, MessageSquare, AlertCircle, CheckCircle2, Film } from 'lucide-react';

export default function FeedbackDrawer({ 
  isOpen, 
  onClose, 
  scenes, 
  projectInfo,
  onToggleFeedbackStatus 
}) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // 收集所有反馈
  const allFeedbacks = [];
  scenes.forEach(scene => {
    if (scene.feedbacks && scene.feedbacks.length > 0) {
      scene.feedbacks.forEach(fb => {
        allFeedbacks.push({
          sceneNumber: scene.number,
          sceneTitle: scene.title,
          timecode: scene.timecode,
          sceneId: scene.id,
          ...fb
        });
      });
    }
  });

  const unresolved = allFeedbacks.filter(f => !f.resolved);
  const resolved = allFeedbacks.filter(f => f.resolved);

  // 生成格式化 WhatsApp 文本清单
  const generateFormattedText = () => {
    let text = `🎬 【${projectInfo.title}】制作审片与修改清单\n`;
    text += `版本: ${projectInfo.currentVersion} | 导演: ${projectInfo.director}\n`;
    text += `时间: ${new Date().toLocaleDateString()}\n`;
    text += `待处理项目: ${unresolved.length} 条 | 已确认定稿/解决: ${resolved.length} 条\n`;
    text += `===================================\n\n`;

    if (unresolved.length > 0) {
      text += `⚡ 【待调整修改项】：\n`;
      unresolved.forEach((item, index) => {
        text += `${index + 1}. [镜头 #${String(item.sceneNumber).padStart(2, '0')}] ${item.sceneTitle} (${item.timecode})\n`;
        text += `   🏷️ 标签: ${item.tag}\n`;
        text += `   📝 要求: ${item.content}\n\n`;
      });
    } else {
      text += `🎉 暂无待修改项，所有镜头均已锁定通过！\n\n`;
    }

    if (resolved.length > 0) {
      text += `✅ 【已解决/确认定稿项】：\n`;
      resolved.forEach((item, index) => {
        text += `• [镜头 #${String(item.sceneNumber).padStart(2, '0')}] ${item.sceneTitle}: ${item.content}\n`;
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
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fadeIn">
      {/* 遮罩 */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* 右侧抽屉 */}
      <div className="relative z-10 w-full max-w-md bg-[#0e1017] border-l border-zinc-800 h-full flex flex-col shadow-2xl overflow-hidden animate-slideLeft">
        
        {/* Header */}
        <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">MV 评审与修改清单</h3>
              <p className="text-[11px] text-zinc-400">跨团队/客户免发图沟通中心</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 快捷操作条 (一键复制到 WhatsApp) */}
        <div className="p-4 bg-zinc-900/60 border-b border-zinc-800 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-400">总反馈: <strong className="text-zinc-200">{allFeedbacks.length}</strong></span>
            <span className="text-amber-400 font-medium">待解决: {unresolved.length}</span>
            <span className="text-emerald-400 font-medium">已解决: {resolved.length}</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleCopyWhatsApp}
              className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all active:scale-98"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '已复制 WhatsApp 格式' : '一键复制给客户/群聊'}</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs transition-colors"
              title="导出 Markdown"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 列表内容 */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          
          {/* 待解决项 */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>待调整修改项 ({unresolved.length})</span>
            </h4>

            {unresolved.length > 0 ? (
              unresolved.map(item => (
                <div key={item.id} className="p-3 rounded-xl bg-zinc-900/90 border border-amber-500/20 text-xs space-y-1.5 hover:border-amber-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-indigo-300 font-mono">
                      #{String(item.sceneNumber).padStart(2, '0')} {item.sceneTitle}
                    </span>
                    <button
                      onClick={() => onToggleFeedbackStatus(item.sceneId, item.id)}
                      className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 hover:bg-emerald-600 text-zinc-300 hover:text-white transition-colors"
                    >
                      标记解决
                    </button>
                  </div>
                  <div className="text-[11px] text-zinc-400">时间: {item.timecode}</div>
                  <div className="p-2 rounded-lg bg-black/40 text-zinc-200 text-xs">
                    <span className="text-amber-400 font-semibold mr-1.5">[{item.tag}]</span>
                    {item.content}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-3 text-center text-xs text-zinc-500 bg-zinc-900/40 rounded-xl border border-zinc-800/60">
                暂无待修改项
              </div>
            )}
          </div>

          {/* 已解决项 */}
          <div className="space-y-2.5 pt-2 border-t border-zinc-800/80">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>已解决 / 确认通过 ({resolved.length})</span>
            </h4>

            {resolved.map(item => (
              <div key={item.id} className="p-2.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-xs space-y-1 opacity-70 hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-zinc-400">
                    #{String(item.sceneNumber).padStart(2, '0')} {item.sceneTitle}
                  </span>
                  <span className="text-[10px] text-emerald-400">已定稿</span>
                </div>
                <p className="text-zinc-400 line-through text-[11px]">{item.content}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

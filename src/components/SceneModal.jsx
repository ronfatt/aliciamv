import React, { useState, useEffect } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Copy, Check, Sparkles, 
  Layers, Video, Image as ImageIcon, Camera, Palette, 
  MessageSquare, Send, CheckCircle2, Clock, Trash2, Sliders, Play
} from 'lucide-react';
import { statusConfig } from '../data/projectData';

export default function SceneModal({ 
  scene, 
  onClose, 
  onPrev, 
  onNext, 
  onUpdateStatus, 
  onAddFeedback, 
  onToggleFeedbackStatus,
  onDeleteFeedback,
  initialStage = 'stage4_final'
}) {
  const [activeStage, setActiveStage] = useState(initialStage);
  const [copied, setCopied] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    setActiveStage(initialStage);
  }, [scene?.id, initialStage]);

  if (!scene) return null;

  const currentStatus = statusConfig[scene.status] || statusConfig.draft;

  // 快捷批注标签
  const quickTags = [
    "人物面部保真",
    "动作稍显生硬",
    "运镜节奏偏快",
    "调色需要更暖",
    "光影高光过曝",
    "完美确认通过"
  ];

  // 复制 Prompt
  const handleCopyPrompt = () => {
    if (scene.evolution.stage1_prompt?.prompt) {
      navigator.clipboard.writeText(scene.evolution.stage1_prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // 提交反馈
  const handleSubmitFeedback = (e) => {
    e?.preventDefault();
    if (!feedbackText.trim() && !selectedTag) return;

    onAddFeedback(scene.id, {
      author: "审核方 / 制作人",
      tag: selectedTag || "修改意见",
      content: feedbackText.trim() || selectedTag,
      resolved: selectedTag === "完美确认通过"
    });

    setFeedbackText('');
    setSelectedTag('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      {/* 遮罩背景点击关闭 */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* 模态框主体 */}
      <div className="relative z-10 w-full max-w-6xl bg-[#0e1017] border border-zinc-800 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* 顶部 Header：分镜信息与控制 */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800/80 bg-zinc-950/60">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-indigo-600/20 text-indigo-300 font-mono font-bold text-sm border border-indigo-500/30">
              #{String(scene.number).padStart(2, '0')}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {scene.title}
                </h2>
                <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                  {scene.timecode}
                </span>
              </div>
              <p className="text-xs text-zinc-400 italic mt-0.5 truncate max-w-lg">
                {scene.lyrics}
              </p>
            </div>
          </div>

          {/* 右侧：状态切换与关闭按钮 */}
          <div className="flex items-center gap-3">
            <select
              value={scene.status}
              onChange={(e) => onUpdateStatus(scene.id, e.target.value)}
              className="bg-zinc-900 border border-zinc-700 text-xs rounded-lg px-2.5 py-1.5 font-medium text-zinc-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="approved">🟢 已定稿 (Approved)</option>
              <option value="needs_review">🟡 待审核 (Needs Review)</option>
              <option value="in_progress">🔵 迭代生成中 (In Progress)</option>
              <option value="draft">⚪ 脚本筹备 (Draft)</option>
            </select>

            <div className="flex items-center gap-1 border-l border-zinc-800 pl-3">
              <button 
                onClick={onPrev}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title="上一个镜头"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={onNext}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title="下一个镜头"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={onClose}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-red-500/20 hover:text-red-300 transition-colors ml-1"
                title="关闭"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 阶段切换 Tabs (4 个演化阶梯) */}
        <div className="flex items-center bg-zinc-950 border-b border-zinc-800/80 px-4 sm:px-6 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveStage('stage1_prompt')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeStage === 'stage1_prompt'
                ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>阶段 1: 视觉提示词与构思 (Prompt & Concept)</span>
          </button>

          <button
            onClick={() => setActiveStage('stage2_keyframe')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeStage === 'stage2_keyframe'
                ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>阶段 2: 关键静帧 (Keyframe Still)</span>
          </button>

          <button
            onClick={() => setActiveStage('stage3_motion')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeStage === 'stage3_motion'
                ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>阶段 3: 动态样片推演 (Motion Draft)</span>
          </button>

          <button
            onClick={() => setActiveStage('stage4_final')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold border-b-2 transition-all whitespace-nowrap ${
              activeStage === 'stage4_final'
                ? 'border-emerald-500 text-emerald-400 bg-emerald-500/5'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>阶段 4: 调色与成片 (Final VFX)</span>
          </button>
        </div>

        {/* 内容展示区分两列：左侧媒体/提示词，右侧拍摄参数与反馈区 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 flex-1 overflow-y-auto">
          
          {/* 左侧：根据 activeStage 呈现的内容 (8 列) */}
          <div className="lg:col-span-8 p-5 bg-[#090a0f] border-b lg:border-b-0 lg:border-r border-zinc-800/80 flex flex-col justify-start">
            
            {/* Stage 1: Prompt 构思 */}
            {activeStage === 'stage1_prompt' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-mono font-medium">
                      Model: {scene.evolution.stage1_prompt?.model}
                    </span>
                    <span className="text-xs text-zinc-500">
                      生成比例: {scene.aspectRatio}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyPrompt}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? '已复制' : '复制 Prompt'}</span>
                  </button>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-zinc-300">正向提示词 (Positive Prompt):</label>
                  <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 font-mono leading-relaxed select-all">
                    {scene.evolution.stage1_prompt?.prompt}
                  </div>
                </div>

                {scene.evolution.stage1_prompt?.negativePrompt && (
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-400">负向提示词 (Negative Prompt):</label>
                    <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-900 text-xs text-zinc-400 font-mono select-all">
                      {scene.evolution.stage1_prompt.negativePrompt}
                    </div>
                  </div>
                )}

                <div className="p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-900/40 text-xs text-indigo-200/90 leading-relaxed">
                  <strong className="text-indigo-400">视觉导演笔记: </strong>
                  {scene.evolution.stage1_prompt?.notes}
                </div>

                {/* 概念参考图预演 */}
                <div className="mt-2 aspect-video w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
                  <img 
                    src={scene.evolution.stage2_keyframe?.mediaUrl} 
                    alt="Prompt Visual" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Stage 2: 关键静帧 */}
            {activeStage === 'stage2_keyframe' && (
              <div className="space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 group">
                  <img 
                    src={scene.evolution.stage2_keyframe?.mediaUrl} 
                    alt="Keyframe Still" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded text-xs font-mono text-zinc-300 border border-white/10">
                    Seed: {scene.evolution.stage2_keyframe?.seed || 'Auto'}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 text-xs text-zinc-300">
                  <span className="text-indigo-400 font-semibold">首帧选片说明: </span>
                  {scene.evolution.stage2_keyframe?.notes}
                </div>
              </div>
            )}

            {/* Stage 3: 动态样片 */}
            {activeStage === 'stage3_motion' && (
              <div className="space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 group flex items-center justify-center">
                  <img 
                    src={scene.evolution.stage3_motion?.mediaUrl} 
                    alt="Motion Preview" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                    <div className="w-14 h-14 rounded-full bg-indigo-600/90 flex items-center justify-center shadow-lg shadow-indigo-600/50">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                    <span className="mt-2 text-xs font-medium text-zinc-200">循环动态渲染样片 (1080p 60fps)</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded text-xs font-mono text-indigo-300 border border-indigo-500/30">
                    Engine: {scene.evolution.stage3_motion?.model}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 text-xs text-zinc-300">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-indigo-400 font-semibold">运动参数:</span>
                    <span className="font-mono text-zinc-400">{scene.evolution.stage3_motion?.motionParams}</span>
                  </div>
                  <p className="text-zinc-400">{scene.evolution.stage3_motion?.notes}</p>
                </div>
              </div>
            )}

            {/* Stage 4: 调色与成片 */}
            {activeStage === 'stage4_final' && (
              <div className="space-y-3">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-emerald-500/30 shadow-xl shadow-emerald-500/5 bg-zinc-950 group">
                  <img 
                    src={scene.evolution.stage4_final?.mediaUrl} 
                    alt="Final VFX Render" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-emerald-500/90 text-black font-bold px-2.5 py-1 rounded text-xs">
                    {scene.evolution.stage4_final?.statusTag || 'Mastered'}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 text-xs text-zinc-300">
                  <span className="text-emerald-400 font-semibold">后期剪辑与调色节点: </span>
                  {scene.evolution.stage4_final?.vfxNotes}
                </div>
              </div>
            )}

          </div>

          {/* 右侧：拍摄参数 + 点对点审片留言区 (4 列) */}
          <div className="lg:col-span-4 p-5 bg-zinc-950/90 flex flex-col justify-between">
            
            <div className="space-y-4">
              {/* 核心生产公式：歌词 + 场景 + 人物 = 画面 */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>分镜生产四大要素</span>
                </h4>
                <div className="space-y-2 bg-zinc-900/80 p-3 rounded-xl border border-zinc-800 text-xs">
                  <div>
                    <span className="text-zinc-500 block text-[10px]">① 建议场景:</span>
                    <strong className="text-amber-300 font-medium">{scene.suggestedEnvironment || "指定场景"}</strong>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">② 登场人物与服装:</span>
                    <strong className="text-indigo-300 font-medium">{scene.characterName}</strong>
                    {scene.wardrobeNote && <p className="text-zinc-400 text-[10px] mt-0.5">{scene.wardrobeNote}</p>}
                  </div>
                  {scene.visualRequirements && (
                    <div className="pt-1.5 border-t border-zinc-800/80">
                      <span className="text-zinc-400 block text-[10px] font-semibold mb-1">③ 画面要求与描述:</span>
                      <ul className="space-y-1 text-zinc-300 text-[11px]">
                        {scene.visualRequirements.map((r, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-amber-400">•</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* 工业参数 */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                  <span>镜头工业参数</span>
                </h4>
                <div className="space-y-1.5 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80 text-xs">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">运镜手法:</span>
                    <span className="text-zinc-200 font-medium text-right max-w-[170px] truncate">{scene.cameraMotion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">光影氛围:</span>
                    <span className="text-zinc-200 font-medium text-right max-w-[170px] truncate">{scene.lighting}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">画幅比例:</span>
                    <span className="text-zinc-200 font-mono">{scene.aspectRatio}</span>
                  </div>
                </div>
              </div>

              {/* 审片与互动留言区 (核心解决 WhatsApp 沟通痛点) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                    <span>镜头评审反馈 ({scene.feedbacks?.length || 0})</span>
                  </h4>
                </div>

                {/* 快捷标签点选 */}
                <div className="flex flex-wrap gap-1.5">
                  {quickTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => {
                        setSelectedTag(tag);
                        if (!feedbackText) setFeedbackText(`【${tag}】`);
                      }}
                      className={`text-[11px] px-2 py-0.5 rounded border transition-all ${
                        selectedTag === tag 
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                          : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-300'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                {/* 输入框 */}
                <form onSubmit={handleSubmitFeedback} className="space-y-2">
                  <div className="relative">
                    <textarea
                      rows={3}
                      placeholder="输入具体修改要求（如：第5秒雨水太密，需要调慢一点...）"
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 resize-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/10"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>记录修改意见</span>
                  </button>
                </form>

                {/* 反馈列表 */}
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1 scrollbar-thin">
                  {scene.feedbacks && scene.feedbacks.length > 0 ? (
                    scene.feedbacks.map(fb => (
                      <div 
                        key={fb.id} 
                        className={`p-2.5 rounded-xl border text-xs transition-all ${
                          fb.resolved 
                            ? 'bg-emerald-950/20 border-emerald-900/40 text-zinc-400' 
                            : 'bg-zinc-900/90 border-zinc-800 text-zinc-200'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-[11px] text-zinc-300">{fb.author}</span>
                            <span className="text-[10px] text-zinc-500">{fb.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => onToggleFeedbackStatus(scene.id, fb.id)}
                              className={`text-[10px] px-1.5 py-0.2 rounded border transition-colors ${
                                fb.resolved 
                                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
                                  : 'bg-zinc-800 text-amber-400 border-zinc-700 hover:bg-zinc-700'
                              }`}
                              title="切换解决状态"
                            >
                              {fb.resolved ? '已解决' : '标记完成'}
                            </button>
                            <button
                              onClick={() => onDeleteFeedback(scene.id, fb.id)}
                              className="text-zinc-600 hover:text-red-400 p-0.5"
                              title="删除此条"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <p className="text-xs leading-relaxed">{fb.content}</p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-4 text-xs text-zinc-600">
                      暂无修改批注，可点击上方快捷标签输入
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* 底部小提示 */}
            <div className="pt-3 border-t border-zinc-800/80 text-[11px] text-zinc-500 flex items-center justify-between">
              <span>快捷键: ← 上一镜 / → 下一镜</span>
              <span>ESC 关闭</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { X, Check, Shirt, Sparkles, ThumbsUp, ArrowRight, Eye, Copy, Share2 } from 'lucide-react';

export default function WardrobeReviewModal({ 
  isOpen, 
  onClose, 
  wardrobeData, 
  onSelectWardrobe 
}) {
  const [activeSet, setActiveSet] = useState('set1'); // 'set1' | 'set2'
  const [selectedSet1, setSelectedSet1] = useState(wardrobeData?.set1_streetwear?.selectedOption || 'option_a');
  const [selectedSet2, setSelectedSet2] = useState(wardrobeData?.set2_qipao?.selectedOption || 'option_b');
  const [copied, setCopied] = useState(false);

  if (!isOpen || !wardrobeData) return null;

  const currentSetData = activeSet === 'set1' 
    ? wardrobeData.set1_streetwear 
    : wardrobeData.set2_qipao;

  const currentSelectedOptionId = activeSet === 'set1' ? selectedSet1 : selectedSet2;

  const handleSelectOption = (optionId) => {
    if (activeSet === 'set1') {
      setSelectedSet1(optionId);
      onSelectWardrobe('set1', optionId);
    } else {
      setSelectedSet2(optionId);
      onSelectWardrobe('set2', optionId);
    }
  };

  // 生成定稿结论
  const generateSummaryText = () => {
    const s1Choice = wardrobeData.set1_streetwear.options.find(o => o.id === selectedSet1);
    const s2Choice = wardrobeData.set2_qipao.options.find(o => o.id === selectedSet2);

    return `👗 【《点燃心灯》MV 造型定稿确认通知】\n` +
      `===================================\n` +
      `1️⃣ 造型一 (国潮嘻哈工装 · 街舞/跳跃)：\n` +
      `   ✅ 已确认方案: ${s1Choice?.name} (${s1Choice?.code})\n` +
      `   💡 特点: ${s1Choice?.vibe}\n\n` +
      `2️⃣ 造型二 (盛典金红旗袍 · 京腔/大合唱)：\n` +
      `   ✅ 已确认方案: ${s2Choice?.name} (${s2Choice?.code})\n` +
      `   💡 特点: ${s2Choice?.vibe}\n` +
      `===================================\n` +
      `导演组与妆造组已完成线上确认，请以此版本推进道具打样与 LoRA 训练！`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(generateSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-6xl bg-[#0e1017] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/90">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-red-500/20">
              <Shirt className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                MV 造型定稿评审中心 (Wardrobe Selection & Approval)
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 font-mono">
                  2 套更换 · 各 2 组方案竞逐
                </span>
              </h3>
              <p className="text-xs text-zinc-400">
                对比面料、刺绣工艺与镜头表现力，点击卡片直接锁定定稿
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-600/20 transition-all"
              title="复制定稿结论直接发群里"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '已复制定稿结论' : '复制选定结论'}</span>
            </button>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 套装切换 Tabs (造型一 vs 造型二) */}
        <div className="flex items-center bg-zinc-950 border-b border-zinc-800 px-6 gap-3">
          <button
            onClick={() => setActiveSet('set1')}
            className={`py-3 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
              activeSet === 'set1'
                ? 'border-red-500 text-red-400 bg-red-500/5'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <span>造型一：国潮嘻哈工装 (Dance & Streetwear)</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-300 font-normal">
              {selectedSet1 === 'option_a' ? '已选: 红韵' : '已选: 红潮'}
            </span>
          </button>

          <button
            onClick={() => setActiveSet('set2')}
            className={`py-3 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
              activeSet === 'set2'
                ? 'border-red-500 text-red-400 bg-red-500/5'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <span>造型二：盛典金红旗袍 (Gala & Heritage Qipao)</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-300 font-normal">
              {selectedSet2 === 'option_a' ? '已选: 和韵新春' : '已选: 金韵华裳'}
            </span>
          </button>
        </div>

        {/* 核心对比区：左右并排两大设计方案 */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#090a0f] space-y-4">
          
          {/* 场景使用提示 */}
          <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs text-zinc-300 flex items-center justify-between">
            <span className="text-zinc-400">
              <strong className="text-white font-medium mr-2">适用场景:</strong>
              {currentSetData.usageScenes}
            </span>
            <span className="text-[11px] text-amber-400 font-medium">
              点击下方卡片右上角按钮即可选定方案
            </span>
          </div>

          {/* 方案 A 与 方案 B 对比网格 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {currentSetData.options.map(option => {
              const isSelected = currentSelectedOptionId === option.id;

              return (
                <div
                  key={option.id}
                  className={`group relative flex flex-col bg-zinc-900/80 border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isSelected
                      ? 'border-red-500 ring-2 ring-red-500/30 shadow-2xl shadow-red-500/15'
                      : 'border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {/* 方案大图预览 */}
                  <div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                    />

                    {/* 顶部标签 */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-white font-bold text-xs border border-white/10">
                        {option.name}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-red-600/80 text-white font-mono text-[10px] font-bold">
                        {option.code}
                      </span>
                    </div>

                    {/* 选定按钮 */}
                    <div className="absolute top-3 right-3">
                      <button
                        onClick={() => handleSelectOption(option.id)}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all shadow-lg backdrop-blur-md ${
                          isSelected
                            ? 'bg-red-500 text-white shadow-red-500/50 scale-105'
                            : 'bg-black/70 hover:bg-black/90 text-zinc-300 border border-white/20'
                        }`}
                      >
                        <Check className={`w-3.5 h-3.5 ${isSelected ? 'stroke-[3]' : 'opacity-40'}`} />
                        <span>{isSelected ? '已选定此方案' : '选定此方案'}</span>
                      </button>
                    </div>
                  </div>

                  {/* 方案说明主体 */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-red-300 font-mono mb-1">
                        {option.concept}
                      </div>
                      <div className="text-xs text-zinc-300 font-medium">
                        风格定位: <span className="text-zinc-200">{option.vibe}</span>
                      </div>
                    </div>

                    {/* 细节工艺 */}
                    <div className="space-y-1.5 bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/80 text-xs">
                      <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                        四位主角细节工艺 (Details):
                      </div>
                      {option.details.map((detail, idx) => (
                        <div key={idx} className="text-zinc-300 flex items-start gap-1.5">
                          <span className="text-red-400 font-mono">•</span>
                          <span className="leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* 导演与舞美建议 */}
                    <div className="p-3 rounded-xl bg-red-950/20 border border-red-900/40 text-xs text-red-200/90 leading-relaxed">
                      <strong className="text-red-300">舞美与镜头建议: </strong>
                      {option.pros}
                    </div>

                    {/* 底部确认操作 */}
                    <button
                      onClick={() => handleSelectOption(option.id)}
                      className={`w-full py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                        isSelected
                          ? 'bg-red-500/20 border border-red-500/40 text-red-300'
                          : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-red-400" />
                          <span>已确定用于最终制作</span>
                        </>
                      ) : (
                        <span>点击确定采用 {option.name}</span>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}

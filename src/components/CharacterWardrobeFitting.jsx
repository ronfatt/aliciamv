import React, { useState } from 'react';
import { 
  Sparkles, 
  Shirt, 
  Eye, 
  ArrowLeftRight, 
  Check, 
  Copy, 
  X, 
  ZoomIn, 
  Layers, 
  ShieldCheck, 
  ChevronRight,
  Info,
  Maximize2
} from 'lucide-react';
import { characterWardrobeData } from '../data/characterWardrobeData';

export default function CharacterWardrobeFitting() {
  const [activeSetId, setActiveSetId] = useState('set1_streetwear');
  const [activeOptionId, setActiveOptionId] = useState('option_a');
  const [compareMode, setCompareMode] = useState(false);
  const [selectedCharDetail, setSelectedCharDetail] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [hoveredCharId, setHoveredCharId] = useState(null);

  const currentSet = characterWardrobeData.wardrobeSets.find(s => s.id === activeSetId) || characterWardrobeData.wardrobeSets[0];
  const currentOption = currentSet.options.find(o => o.id === activeOptionId) || currentSet.options[0];

  const handleCopyPrompt = (id, text, e) => {
    e?.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSetChange = (setId) => {
    setActiveSetId(setId);
    // keep option_a as default
    setActiveOptionId('option_a');
  };

  return (
    <section id="wardrobe-fitting-section" className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 sm:p-6 backdrop-blur-sm relative overflow-hidden scroll-mt-24">
      {/* 顶部柔和环境光晕 */}
      <div className={`absolute top-0 right-1/4 w-96 h-48 bg-gradient-to-b ${currentSet.colorTheme} blur-3xl pointer-events-none opacity-40 transition-all duration-700`} />

      {/* 模块标题与说明 */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 relative z-10">
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-red-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/10">
            <Shirt className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-bold text-white tracking-wide flex items-center gap-2">
                MC 主角换装视觉效果库 (Character Wardrobe Fitting & Visuals)
              </h3>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-gradient-to-r from-red-500/20 to-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                5位主角各别分开独立视觉
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                支持原设对比与工艺微距
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              点击下方切换【第一套国潮工装】与【第二套盛典旗袍】，查看每位主角专属剪裁、面料细节与 AI 换装效果
            </p>
          </div>
        </div>

        {/* 全局对比开关 */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setCompareMode(!compareMode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
              compareMode
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm shadow-amber-500/20'
                : 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-white hover:bg-zinc-800'
            }`}
            title="开启后卡片并排显示原定妆照与换装后视觉效果"
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>换装前后并排对比</span>
            <span className={`w-2 h-2 rounded-full ${compareMode ? 'bg-amber-400 animate-pulse' : 'bg-zinc-600'}`} />
          </button>
        </div>
      </div>

      {/* 顶级套系选择栏：第一套 vs 第二套 */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-2 rounded-xl bg-zinc-900/90 border border-zinc-800/80 mb-5 relative z-10">
        
        {/* 套装大类 Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-black/60 rounded-lg border border-zinc-800/60">
          {characterWardrobeData.wardrobeSets.map(set => {
            const isSelected = set.id === activeSetId;
            return (
              <button
                key={set.id}
                onClick={() => handleSetChange(set.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-semibold transition-all ${
                  isSelected
                    ? set.activeTabColor
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{set.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* 方案子选项：方案A vs 方案B */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          <span className="text-[11px] font-medium text-zinc-400 shrink-0 flex items-center gap-1">
            <Layers className="w-3 h-3 text-amber-400" />
            设计版型：
          </span>
          {currentSet.options.map(option => {
            const isOptSelected = option.id === activeOptionId;
            return (
              <button
                key={option.id}
                onClick={() => setActiveOptionId(option.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isOptSelected
                    ? 'bg-zinc-800 text-amber-300 border-amber-500/50 shadow-sm'
                    : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-700'
                }`}
              >
                <span>{option.name}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/50 text-zinc-400 font-mono">
                  {option.code}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 当前选定方案的剧本定位与亮点提示条 */}
      <div className="mb-5 px-3.5 py-2.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-zinc-300">
          <Info className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="font-semibold text-white">{currentOption.name}</span>
          <span className="text-zinc-400">· {currentOption.vibe}</span>
          <span className="hidden md:inline text-zinc-500">| {currentOption.description}</span>
        </div>
        <div className="text-[11px] font-mono text-amber-300/80 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md self-start sm:self-auto">
          {currentSet.usageBadge}
        </div>
      </div>

      {/* 5 位主角各别分开的卡片流 (独立 Card 展示) */}
      <div className={`grid gap-4 ${
        compareMode 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'
      }`}>
        {characterWardrobeData.characters.map(char => {
          const look = char.wardrobeLooks[activeSetId]?.[activeOptionId] || char.wardrobeLooks[activeSetId]?.option_a;
          const isCopied = copiedId === `${char.id}_${activeSetId}_${activeOptionId}`;
          const isHovered = hoveredCharId === char.id;

          return (
            <div
              key={char.id}
              onMouseEnter={() => setHoveredCharId(char.id)}
              onMouseLeave={() => setHoveredCharId(null)}
              onClick={() => setSelectedCharDetail({ char, look, currentSet, currentOption })}
              className="group relative bg-zinc-900/90 hover:bg-zinc-900 border border-zinc-800/90 hover:border-amber-500/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 flex flex-col"
            >
              {/* 卡片头部：角色标识与角色定位 */}
              <div className="p-3 bg-zinc-950/80 border-b border-zinc-800/70 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition-colors flex items-center gap-1.5">
                    {char.name}
                  </h4>
                  <p className="text-[10px] text-zinc-400 line-clamp-1">{char.role}</p>
                </div>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-amber-300/90 border border-zinc-700">
                  {activeSetId === 'set1_streetwear' ? '国潮工装' : '盛典旗袍'}
                </span>
              </div>

              {/* 图像展示区域 */}
              <div className="relative bg-black overflow-hidden">
                {compareMode ? (
                  // 并排对比模式：原定妆 vs 换装效果
                  <div className="grid grid-cols-2 aspect-[4/3] bg-zinc-950 divide-x divide-zinc-800">
                    <div className="relative group/sub overflow-hidden">
                      <img
                        src={char.originalCasting.image}
                        alt="原定妆照"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[9px] font-mono text-zinc-300">
                        原定妆
                      </div>
                    </div>
                    <div className="relative group/sub overflow-hidden">
                      <img
                        src={look.image}
                        alt="换装视觉效果"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-amber-600/90 backdrop-blur-sm text-[9px] font-mono text-white font-semibold">
                        换装效果
                      </div>
                    </div>
                  </div>
                ) : (
                  // 单人主图模式 (独立肖像/全身)
                  <div className="relative aspect-[3/4] bg-zinc-950">
                    <img
                      src={look.image}
                      alt={`${char.name} ${look.title}`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* 渐变遮罩与快捷信息 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent flex flex-col justify-end p-3">
                      <span className="text-[10px] font-mono text-amber-300 font-semibold tracking-wide drop-shadow">
                        {look.title}
                      </span>
                    </div>

                    {/* 右上角悬浮放大图标 */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-md p-1.5 rounded-lg text-white">
                      <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
                    </div>

                    {/* 右下角工艺微距缩略小贴纸 */}
                    {look.detailImage && (
                      <div 
                        className="absolute bottom-2 right-2 w-11 h-11 rounded-lg border-2 border-amber-500/60 overflow-hidden shadow-lg shadow-black/80 bg-black group-hover:scale-110 transition-transform"
                        title="工艺微距特写，点击可放大"
                      >
                        <img
                          src={look.detailImage}
                          alt="工艺细节"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* 卡片下半部：服装亮点与专属参数 */}
              <div className="p-3 flex-1 flex flex-col justify-between text-xs bg-zinc-950/60 space-y-2.5">
                <div>
                  <p className="text-[11px] text-zinc-300 leading-relaxed line-clamp-2">
                    {look.costumeDesc}
                  </p>

                  {/* 亮点标签 Pills */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {look.highlightPills?.map((pill, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/60"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 底部 AI LoRA 复制条与详情触发 */}
                <div className="pt-2 border-t border-zinc-800/70 flex items-center justify-between text-[11px]">
                  <button
                    onClick={(e) => handleCopyPrompt(`${char.id}_${activeSetId}_${activeOptionId}`, look.loraPrompt, e)}
                    className="flex items-center gap-1 text-[10px] text-zinc-400 hover:text-amber-300 transition-colors py-1 px-1.5 rounded hover:bg-zinc-800"
                    title="复制此角色该服装的 AI 生图一致性提示词"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">已复制 LoRA</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>复制生图词</span>
                      </>
                    )}
                  </button>

                  <span className="text-[10px] text-amber-400/90 font-medium group-hover:text-amber-300 flex items-center">
                    查看详情 <ChevronRight className="w-3 h-3 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 独立角色换装高清单人放大与工艺特写模态框 */}
      {selectedCharDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="fixed inset-0" onClick={() => setSelectedCharDetail(null)} />

          <div className="relative z-10 w-full max-w-5xl bg-[#0d0f15] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center font-bold text-xs">
                  {selectedCharDetail.char.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    {selectedCharDetail.char.name} · {selectedCharDetail.look.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    {selectedCharDetail.char.role} · 换装独立视觉设定与微距工艺解析
                  </p>
                </div>
              </div>

              {/* 弹窗内快速切换第一套 / 第二套 */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-1 p-1 bg-zinc-900 rounded-lg border border-zinc-800 text-xs">
                  <button
                    onClick={() => {
                      setActiveSetId('set1_streetwear');
                      setActiveOptionId('option_a');
                      const newLook = selectedCharDetail.char.wardrobeLooks['set1_streetwear']?.option_a;
                      setSelectedCharDetail(prev => ({ ...prev, look: newLook }));
                    }}
                    className={`px-2.5 py-1 rounded text-xs transition-colors ${
                      activeSetId === 'set1_streetwear' ? 'bg-red-600 text-white font-medium' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    国潮工装
                  </button>
                  <button
                    onClick={() => {
                      setActiveSetId('set2_qipao');
                      setActiveOptionId('option_a');
                      const newLook = selectedCharDetail.char.wardrobeLooks['set2_qipao']?.option_a;
                      setSelectedCharDetail(prev => ({ ...prev, look: newLook }));
                    }}
                    className={`px-2.5 py-1 rounded text-xs transition-colors ${
                      activeSetId === 'set2_qipao' ? 'bg-amber-600 text-white font-medium' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    盛典旗袍
                  </button>
                </div>

                <button
                  onClick={() => setSelectedCharDetail(null)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: 左右双栏排版 */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#090a0f] space-y-6">
              
              {/* 上半部：视觉并排展示 (原定妆 vs 换装效果大图 + 微距细节) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                
                {/* 左列：原定妆照 (4/12) */}
                <div className="md:col-span-4 flex flex-col space-y-2">
                  <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
                    <span className="font-semibold text-zinc-300">【初始定妆参考】</span>
                    <span className="text-[10px] font-mono text-zinc-500">Base Casting</span>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[3/4] flex items-center justify-center relative shadow-lg">
                    <img
                      src={selectedCharDetail.char.originalCasting.image}
                      alt="初始定妆照"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/80 backdrop-blur-sm p-2 text-[11px] text-zinc-300">
                      {selectedCharDetail.char.originalCasting.vibe}
                    </div>
                  </div>
                </div>

                {/* 中列：换装后独立大图 (5/12) */}
                <div className="md:col-span-5 flex flex-col space-y-2">
                  <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
                    <span className="font-semibold text-amber-300">【换装后独立视觉】</span>
                    <span className="text-[10px] font-mono text-amber-400/80">Fitted Wardrobe</span>
                  </div>
                  <div className="rounded-xl overflow-hidden border-2 border-amber-500/40 bg-zinc-950 aspect-[3/4] flex items-center justify-center relative shadow-xl shadow-amber-500/10">
                    <img
                      src={selectedCharDetail.look.image}
                      alt="换装后大图"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 text-xs text-white">
                      <div className="font-bold text-amber-300">{selectedCharDetail.look.title}</div>
                      <div className="text-[11px] text-zinc-300 mt-0.5 line-clamp-2">{selectedCharDetail.look.costumeDesc}</div>
                    </div>
                  </div>
                </div>

                {/* 右列：微距工艺与面料细节 (3/12) */}
                <div className="md:col-span-3 flex flex-col space-y-2">
                  <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
                    <span className="font-semibold text-rose-300">【微距工艺特写】</span>
                    <span className="text-[10px] font-mono text-rose-400/80">Macro Craft</span>
                  </div>
                  {selectedCharDetail.look.detailImage ? (
                    <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 flex flex-col shadow-lg">
                      <div className="aspect-[4/3] bg-black overflow-hidden relative">
                        <img
                          src={selectedCharDetail.look.detailImage}
                          alt="工艺细节"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3 bg-zinc-950/90 text-xs space-y-1">
                        <div className="font-semibold text-zinc-200">{selectedCharDetail.look.detailTitle}</div>
                        <p className="text-[11px] text-zinc-400 leading-relaxed">{selectedCharDetail.look.detailDesc}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-xs text-zinc-500 flex items-center justify-center">
                      无独立微距图
                    </div>
                  )}

                  {/* 角色剧本名台词与歌词映射 */}
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs space-y-1">
                    <span className="text-[10px] font-mono uppercase text-zinc-500 font-bold">歌词与情绪映射</span>
                    <p className="text-zinc-300 italic text-[11px] leading-relaxed">
                      "{selectedCharDetail.char.tagline}"
                    </p>
                  </div>
                </div>
              </div>

              {/* 下半部：AI 生图一致性 Prompt 参数 */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300">
                    <ShieldCheck className="w-4 h-4 text-indigo-400" />
                    <span>该服装套系专属 AI 生图一致性提示词 (Midjourney / Kling / SD LoRA Prompt)</span>
                  </div>
                  <button
                    onClick={(e) => handleCopyPrompt('modal_prompt', selectedCharDetail.look.loraPrompt, e)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 hover:bg-indigo-500/30 transition-colors"
                  >
                    {copiedId === 'modal_prompt' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">已复制到剪贴板</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>一键复制 Prompt</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-3 rounded-lg bg-black/80 border border-zinc-800 font-mono text-xs text-zinc-200 select-all leading-relaxed">
                  {selectedCharDetail.look.loraPrompt}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}

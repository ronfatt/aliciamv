import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AudioPlayer from './components/AudioPlayer';
import StatusFilter from './components/StatusFilter';
import StoryboardGrid from './components/StoryboardGrid';
import SceneModal from './components/SceneModal';
import FeedbackDrawer from './components/FeedbackDrawer';
import NewSceneModal from './components/NewSceneModal';
import LyricsModal from './components/LyricsModal';
import CharacterRoster from './components/CharacterRoster';
import EnvironmentGallery from './components/EnvironmentGallery';
import WardrobeReviewModal from './components/WardrobeReviewModal';
import { initialProjectData } from './data/projectData';
import { Sparkles, Layers, ArrowRight, RefreshCw, HelpCircle, Film, ExternalLink, BookOpen, Shirt, Compass } from 'lucide-react';

const STORAGE_KEY = 'alicia_mv_scenes_v5';
const WARDROBE_KEY = 'alicia_mv_wardrobe_v1';

export default function App() {
  const [projectInfo] = useState(initialProjectData.info);
  
  // 从 LocalStorage 加载服装选择
  const [wardrobeData, setWardrobeData] = useState(() => {
    try {
      const saved = localStorage.getItem(WARDROBE_KEY);
      return saved ? JSON.parse(saved) : initialProjectData.wardrobe;
    } catch (e) {
      return initialProjectData.wardrobe;
    }
  });

  const handleSelectWardrobe = (setName, optionId) => {
    setWardrobeData(prev => {
      const nextState = { ...prev };
      if (setName === 'set1') {
        nextState.set1_streetwear.selectedOption = optionId;
      } else {
        nextState.set2_qipao.selectedOption = optionId;
      }
      try {
        localStorage.setItem(WARDROBE_KEY, JSON.stringify(nextState));
      } catch (err) {
        console.error("Failed to save wardrobe to localStorage", err);
      }
      return nextState;
    });
  };

  // 从 LocalStorage 加载持久化分镜数据
  const [scenes, setScenes] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialProjectData.scenes;
    } catch (e) {
      return initialProjectData.scenes;
    }
  });

  // 保存到 LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(scenes));
    } catch (e) {
      console.error("Failed to save scenes to localStorage", e);
    }
  }, [scenes]);

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('time');
  const [activeView, setActiveView] = useState('grid');
  const [currentSec, setCurrentSec] = useState(0);

  // 灯箱与抽屉控制
  const [selectedScene, setSelectedScene] = useState(null);
  const [modalStage, setModalStage] = useState('stage4_final');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isNewSceneOpen, setIsNewSceneOpen] = useState(false);
  const [isLyricsOpen, setIsLyricsOpen] = useState(false);
  const [isWardrobeOpen, setIsWardrobeOpen] = useState(false);

  // 快捷键监听
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedScene) return;

      if (e.key === 'Escape') {
        setSelectedScene(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrevScene();
      } else if (e.key === 'ArrowRight') {
        handleNextScene();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedScene, scenes]);

  // 打开特定镜头与特定阶段
  const handleOpenModal = (scene, stage = 'stage4_final') => {
    setSelectedScene(scene);
    setModalStage(stage);
  };

  // 切换上一个/下一个镜头
  const handlePrevScene = () => {
    if (!selectedScene) return;
    const currentIndex = scenes.findIndex(s => s.id === selectedScene.id);
    if (currentIndex > 0) {
      setSelectedScene(scenes[currentIndex - 1]);
    } else {
      setSelectedScene(scenes[scenes.length - 1]);
    }
  };

  const handleNextScene = () => {
    if (!selectedScene) return;
    const currentIndex = scenes.findIndex(s => s.id === selectedScene.id);
    if (currentIndex < scenes.length - 1) {
      setSelectedScene(scenes[currentIndex + 1]);
    } else {
      setSelectedScene(scenes[0]);
    }
  };

  // 更新分镜状态
  const handleUpdateStatus = (sceneId, newStatus) => {
    setScenes(prev => prev.map(s => s.id === sceneId ? { ...s, status: newStatus } : s));
    if (selectedScene && selectedScene.id === sceneId) {
      setSelectedScene(prev => ({ ...prev, status: newStatus }));
    }
  };

  // 一键切换定稿
  const handleToggleStatus = (sceneId) => {
    setScenes(prev => prev.map(s => {
      if (s.id === sceneId) {
        const nextStatus = s.status === 'approved' ? 'needs_review' : 'approved';
        return { ...s, status: nextStatus };
      }
      return s;
    }));
  };

  // 添加反馈
  const handleAddFeedback = (sceneId, feedback) => {
    const newFb = {
      id: `fb-${Date.now()}`,
      date: new Date().toLocaleString([], { hour: '2-digit', minute: '2-digit', month: '2-digit', day: '2-digit' }),
      ...feedback
    };

    setScenes(prev => prev.map(s => {
      if (s.id === sceneId) {
        const updatedFeedbacks = [newFb, ...(s.feedbacks || [])];
        return { ...s, feedbacks: updatedFeedbacks };
      }
      return s;
    }));

    if (selectedScene && selectedScene.id === sceneId) {
      setSelectedScene(prev => ({
        ...prev,
        feedbacks: [newFb, ...(prev.feedbacks || [])]
      }));
    }
  };

  // 切换单条反馈状态
  const handleToggleFeedbackStatus = (sceneId, feedbackId) => {
    setScenes(prev => prev.map(s => {
      if (s.id === sceneId) {
        const updated = (s.feedbacks || []).map(f => f.id === feedbackId ? { ...f, resolved: !f.resolved } : f);
        return { ...s, feedbacks: updated };
      }
      return s;
    }));

    if (selectedScene && selectedScene.id === sceneId) {
      setSelectedScene(prev => ({
        ...prev,
        feedbacks: (prev.feedbacks || []).map(f => f.id === feedbackId ? { ...f, resolved: !f.resolved } : f)
      }));
    }
  };

  // 删除单条反馈
  const handleDeleteFeedback = (sceneId, feedbackId) => {
    setScenes(prev => prev.map(s => {
      if (s.id === sceneId) {
        return { ...s, feedbacks: (s.feedbacks || []).filter(f => f.id !== feedbackId) };
      }
      return s;
    }));

    if (selectedScene && selectedScene.id === sceneId) {
      setSelectedScene(prev => ({
        ...prev,
        feedbacks: (prev.feedbacks || []).filter(f => f.id !== feedbackId)
      }));
    }
  };

  // 添加新分镜
  const handleAddScene = (newScene) => {
    setScenes(prev => [...prev, newScene]);
  };

  // 恢复默认演示数据
  const handleResetData = () => {
    if (window.confirm("确定要恢复默认的示范分镜数据吗？本地新增的临时修改将被重置。")) {
      setScenes(initialProjectData.scenes);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  // 计算未解决反馈总数
  const totalPendingFeedback = scenes.reduce((acc, cur) => {
    return acc + (cur.feedbacks?.filter(f => !f.resolved)?.length || 0);
  }, 0);

  // 过滤与排序
  const filteredScenes = scenes.filter(s => {
    if (activeFilter !== 'all' && s.status !== activeFilter) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = s.title.toLowerCase().includes(q);
      const matchLyrics = s.lyrics.toLowerCase().includes(q);
      const matchMotion = s.cameraMotion?.toLowerCase().includes(q);
      const matchPrompt = s.evolution.stage1_prompt?.prompt?.toLowerCase().includes(q);
      return matchTitle || matchLyrics || matchMotion || matchPrompt;
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === 'needs_review_first') {
      if (a.status === 'needs_review' && b.status !== 'needs_review') return -1;
      if (b.status === 'needs_review' && a.status !== 'needs_review') return 1;
    }
    return a.startSec - b.startSec;
  });

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col selection:bg-indigo-500/30">
      
      {/* 顶部导航 */}
      <Navbar
        projectInfo={projectInfo}
        scenes={scenes}
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenFeedback={() => setIsFeedbackOpen(true)}
        onOpenNewScene={() => setIsNewSceneOpen(true)}
        onOpenLyrics={() => setIsLyricsOpen(true)}
        onOpenWardrobe={() => setIsWardrobeOpen(true)}
        feedbackCount={totalPendingFeedback}
      />

      {/* 音频与分镜联动条 */}
      <AudioPlayer
        audioSrc={projectInfo.audioSrc}
        scenes={scenes}
        currentSec={currentSec}
        setCurrentSec={setCurrentSec}
        activeSceneId={selectedScene?.id}
        onSelectScene={(scene) => handleOpenModal(scene)}
      />

      {/* 主体工作区 */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-6 space-y-6">
        
        {/* 造型二选一决策横幅 (解决两套服装各有两个方案待定痛点) */}
        <section className="bg-gradient-to-r from-red-950/60 via-zinc-950 to-zinc-950 border border-red-500/30 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl shadow-red-500/5">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 text-red-400 flex items-center justify-center shrink-0">
              <Shirt className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white">MV 2套服装造型定稿决策中</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 font-mono">
                  各有 2 组设计待选
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                造型一：嘻哈工装 (已选: <strong className="text-zinc-200">{wardrobeData?.set1_streetwear?.selectedOption === 'option_a' ? '红韵' : '红潮'}</strong>) · 造型二：盛典旗袍 (已选: <strong className="text-zinc-200">{wardrobeData?.set2_qipao?.selectedOption === 'option_a' ? '和韵新春' : '金韵华裳'}</strong>)
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsWardrobeOpen(true)}
            className="w-full md:w-auto px-4 py-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-red-600/25 flex items-center justify-center gap-1.5 transition-all active:scale-95 shrink-0"
          >
            <span>进入造型二选一评审台</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </section>

        {/* 生产流水线与痛点解决横幅 */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-zinc-950 border border-indigo-900/30 p-5">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
                <h2 className="text-sm font-bold text-indigo-300 tracking-wide uppercase">
                  全流程 AI 影视制作演化管线 (Production Pipeline)
                </h2>
              </div>
              <p className="text-xs text-zinc-400 max-w-2xl leading-relaxed">
                无需在 WhatsApp 反复发送碎片图片与样片。点击任意镜头即可查看「提示词 ➔ 静帧 ➔ 动态推演 ➔ 调色成片」四阶蜕变，精准留下打标意见，一键导出修改简报。
              </p>
            </div>

            {/* 4 步流转指示 */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] font-medium text-zinc-400">
              {projectInfo.productionPipeline.map((step, idx) => (
                <div key={step.step} className="flex items-center gap-1.5">
                  <div className="px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 whitespace-nowrap">
                    <span className="text-indigo-400 font-mono mr-1.5">{step.step}</span>
                    <span>{step.name}</span>
                  </div>
                  {idx < projectInfo.productionPipeline.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-zinc-600 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5位主角人物设定与多视图参考资产库 */}
        <CharacterRoster characters={initialProjectData.characters} />

        {/* 5大核心概念场景美术馆 */}
        <EnvironmentGallery environments={initialProjectData.environments} />

        {/* 过滤器与工具栏 */}
        <StatusFilter
          scenes={scenes}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* 核心展示区：网格故事板 / 时间轴流 */}
        <StoryboardGrid
          scenes={filteredScenes}
          onOpenModal={handleOpenModal}
          currentSec={currentSec}
          activeView={activeView}
          onToggleStatus={handleToggleStatus}
        />

      </main>

      {/* 底部 Footer */}
      <footer className="mt-16 border-t border-zinc-900 bg-black/40 py-6 px-4 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span>© 2026 {projectInfo.director}</span>
            <span>•</span>
            <span>{projectInfo.title}</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <button
              onClick={handleResetData}
              className="flex items-center gap-1 text-[11px] hover:text-zinc-200 transition-colors"
              title="恢复初始示范案例数据"
            >
              <RefreshCw className="w-3 h-3" />
              <span>恢复示范数据</span>
            </button>
            <span>•</span>
            <button
              onClick={() => setIsFeedbackOpen(true)}
              className="hover:text-amber-300 transition-colors"
            >
              导出评审清单
            </button>
          </div>
        </div>
      </footer>

      {/* 分镜详情灯箱 */}
      {selectedScene && (
        <SceneModal
          scene={selectedScene}
          initialStage={modalStage}
          onClose={() => setSelectedScene(null)}
          onPrev={handlePrevScene}
          onNext={handleNextScene}
          onUpdateStatus={handleUpdateStatus}
          onAddFeedback={handleAddFeedback}
          onToggleFeedbackStatus={handleToggleFeedbackStatus}
          onDeleteFeedback={handleDeleteFeedback}
        />
      )}

      {/* 批注修改清单抽屉 */}
      <FeedbackDrawer
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
        scenes={scenes}
        projectInfo={projectInfo}
        onToggleFeedbackStatus={handleToggleFeedbackStatus}
      />

      {/* 添加新分镜弹窗 */}
      <NewSceneModal
        isOpen={isNewSceneOpen}
        onClose={() => setIsNewSceneOpen(false)}
        onAddScene={handleAddScene}
        nextNumber={scenes.length + 1}
      />

      {/* 官方歌词展板 */}
      <LyricsModal
        isOpen={isLyricsOpen}
        onClose={() => setIsLyricsOpen(false)}
      />

      {/* 2 套造型二选一定稿决策弹窗 */}
      <WardrobeReviewModal
        isOpen={isWardrobeOpen}
        onClose={() => setIsWardrobeOpen(false)}
        wardrobeData={wardrobeData}
        onSelectWardrobe={handleSelectWardrobe}
      />

    </div>
  );
}

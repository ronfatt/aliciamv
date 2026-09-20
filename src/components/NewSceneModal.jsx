import React, { useState } from 'react';
import { X, Plus, Sparkles, Camera, Film } from 'lucide-react';

export default function NewSceneModal({ isOpen, onClose, onAddScene, nextNumber }) {
  const [title, setTitle] = useState('');
  const [timecode, setTimecode] = useState('01:45 - 02:00');
  const [startSec, setStartSec] = useState(105);
  const [endSec, setEndSec] = useState(120);
  const [lyrics, setLyrics] = useState('');
  const [cameraMotion, setCameraMotion] = useState('Dolly Forward');
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newScene = {
      id: `SC-${String(nextNumber).padStart(3, '0')}`,
      number: nextNumber,
      title: title.trim(),
      timecode,
      startSec: Number(startSec) || 0,
      endSec: Number(endSec) || 10,
      lyrics: lyrics.trim() ? `♪ '${lyrics.trim()}'` : '♪ [纯器乐 / 气氛过渡]',
      cameraMotion: cameraMotion.trim() || 'Static Shot',
      lighting: 'Cinematic mood lighting',
      status: 'draft',
      aspectRatio: '16:9',
      evolution: {
        stage1_prompt: {
          title: "Prompt & 情绪构思",
          model: "Midjourney v6.1",
          prompt: prompt.trim() || "Cinematic shot of Alicia, highly detailed, 8k --ar 16:9",
          negativePrompt: "blurry, low quality",
          notes: "新创建分镜草稿"
        },
        stage2_keyframe: {
          title: "关键帧静止图",
          mediaUrl: imageUrl.trim() || "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85",
          notes: "等待首帧渲染"
        },
        stage3_motion: {
          title: "动态推演样片",
          mediaUrl: imageUrl.trim() || "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85",
          notes: "等待排期生成"
        },
        stage4_final: {
          title: "最终调色",
          mediaUrl: imageUrl.trim() || "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85",
          statusTag: "Draft"
        }
      },
      feedbacks: []
    };

    onAddScene(newScene);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-lg bg-[#0e1017] border border-zinc-800 rounded-2xl p-6 shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-indigo-600/20 text-indigo-400 font-mono font-bold text-xs">
              #{String(nextNumber).padStart(2, '0')}
            </span>
            <h3 className="text-base font-bold text-white">添加新分镜镜头</h3>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div>
            <label className="block text-zinc-400 mb-1 font-medium">分镜标题 / 场景简述</label>
            <input
              type="text"
              required
              placeholder="例如：雨中天台回眸、霓虹长街特写..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-zinc-400 mb-1 font-medium">时间码区间</label>
              <input
                type="text"
                placeholder="01:30 - 01:45"
                value={timecode}
                onChange={(e) => setTimecode(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-indigo-500 font-mono"
              />
            </div>
            <div>
              <label className="block text-zinc-400 mb-1 font-medium">摄影机运镜</label>
              <input
                type="text"
                placeholder="Slow Zoom In / Dolly Left"
                value={cameraMotion}
                onChange={(e) => setCameraMotion(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-zinc-400 mb-1 font-medium">对应歌词</label>
            <input
              type="text"
              placeholder="输入该镜头对应的单句歌词..."
              value={lyrics}
              onChange={(e) => setLyrics(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-zinc-400 mb-1 font-medium">初步 AI 提示词 (Prompt)</label>
            <textarea
              rows={2}
              placeholder="Cinematic 8k shot of Alicia, moody volumetric lighting --ar 16:9"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-indigo-500 resize-none font-mono"
            />
          </div>

          <div>
            <label className="block text-zinc-400 mb-1 font-medium">图片素材 URL (本地路径或网络图，可选)</label>
            <input
              type="text"
              placeholder="可留空使用默认，或填入本地 /assets/xxx.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-zinc-200 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            >
              取消
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center gap-1.5 shadow-lg shadow-indigo-600/20"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>确认添加</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

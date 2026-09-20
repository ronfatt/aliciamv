import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Music2, Upload, Sparkles } from 'lucide-react';

export default function AudioPlayer({ 
  audioSrc, 
  scenes, 
  currentSec, 
  setCurrentSec, 
  activeSceneId, 
  onSelectScene 
}) {
  const audioRef = useRef(null);
  const fileInputRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(289); // 默认 4分49秒 官方音频
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [customAudioUrl, setCustomAudioUrl] = useState(null);

  const effectiveAudioSrc = customAudioUrl || audioSrc;

  // 格式化时间
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  // 监听音频时间更新
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentSec(audioRef.current.currentTime);
    }
  };

  // 监听时长加载
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 289);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(e => {
        console.warn("Audio play prevented:", e);
      });
      setIsPlaying(true);
    }
  };

  const handleSeek = (e) => {
    const val = parseFloat(e.target.value);
    setCurrentSec(val);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
    }
  };

  const handleReset = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentSec(0);
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
    setIsMuted(val === 0);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume || 0.8;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  // 允许上传本地音乐试听
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setCustomAudioUrl(objectUrl);
      setIsPlaying(false);
    }
  };

  // 找到当前时间对应的分镜
  const currentScene = scenes.find(
    s => currentSec >= s.startSec && currentSec < s.endSec
  );

  return (
    <section className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-b border-zinc-800/80 px-4 lg:px-8 py-3">
      <audio
        ref={audioRef}
        src={effectiveAudioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* 左侧：播放控制与当前镜头联动提示 */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-all"
              title="重头播放 (00:00)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 transition-all active:scale-95"
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </button>
          </div>

          {/* 当前对应歌词与分镜提示 */}
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center text-indigo-400 shrink-0">
              <Music2 className="w-3.5 h-3.5 animate-pulse" />
            </div>
            <div className="truncate max-w-[240px] lg:max-w-xs">
              {currentScene ? (
                <div 
                  onClick={() => onSelectScene(currentScene)}
                  className="cursor-pointer group text-left"
                >
                  <div className="text-xs font-semibold text-indigo-300 group-hover:text-indigo-200 truncate flex items-center gap-1.5">
                    <span className="px-1.5 py-0.2 text-[10px] bg-indigo-500/20 text-indigo-300 rounded font-mono">
                      #{String(currentScene.number).padStart(2, '0')}
                    </span>
                    <span>{currentScene.title}</span>
                  </div>
                  <div className="text-[11px] text-zinc-400 truncate italic">
                    {currentScene.lyrics}
                  </div>
                </div>
              ) : (
                <div className="text-xs text-zinc-500">
                  点击播放预览整首 MV 节奏...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 中间：主时间进度条与歌词刻度 */}
        <div className="w-full md:flex-1 max-w-2xl flex items-center gap-3">
          <span className="text-xs font-mono text-zinc-400 w-10 text-right">
            {formatTime(currentSec)}
          </span>

          <div className="relative flex-1 group">
            <input
              type="range"
              min="0"
              max={duration || 105}
              step="0.1"
              value={currentSec}
              onChange={handleSeek}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:h-2.5 transition-all"
            />
            {/* 镜头区间标记 */}
            <div className="absolute top-3 left-0 w-full flex justify-between pointer-events-none text-[9px] text-zinc-600 font-mono">
              {scenes.map((sc, i) => (
                <span 
                  key={sc.id} 
                  style={{ left: `${(sc.startSec / duration) * 100}%` }}
                  className={`absolute -translate-x-1/2 transition-colors ${currentSec >= sc.startSec && currentSec < sc.endSec ? 'text-indigo-400 font-bold' : ''}`}
                >
                  S{sc.number}
                </span>
              ))}
            </div>
          </div>

          <span className="text-xs font-mono text-zinc-500 w-10">
            {formatTime(duration)}
          </span>
        </div>

        {/* 右侧：音量调节与本地音频导入 */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2">
            <button onClick={toggleMute} className="text-zinc-400 hover:text-zinc-200">
              {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-16 h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          <div className="h-4 w-px bg-zinc-800" />

          {/* 更换音频按钮 */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-indigo-300 transition-colors px-2 py-1 rounded bg-zinc-900 border border-zinc-800 hover:border-indigo-500/40"
            title="选择本地 MP3/WAV 作为伴奏"
          >
            <Upload className="w-3 h-3" />
            <span>{customAudioUrl ? "已加载本地曲目" : "换曲试听"}</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="audio/*"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>

      </div>
    </section>
  );
}

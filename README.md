# 🎬 Alicia MV — 制作过程与协作评审平台 (MV Production Portal)

> **告别在 WhatsApp 繁琐打样品、传画面与截图画圈沟通。**  
> 一套专为 AI MV 打造的电影级交互式制作进度与协作评审系统，让客户与团队一目了然看清整部 MV 从无到有的全流程蜕变。

---

## 🌟 核心特色与痛点解决

1. **4 阶段镜头蜕变透视 (Evolution Stages)**
   - 每个分镜均完整记录 4 阶演化：
     - **Stage 1: 视觉提示词与参数 (Prompt & Concept)**：主 Prompt、负向词、AI 模型、导演笔记，支持一键复制 Prompt。
     - **Stage 2: 关键静帧 (Keyframe Still)**：Midjourney / Flux 首选定帧、种子号 (Seed)。
     - **Stage 3: 动态样片推演 (Motion Draft)**：Runway Gen-3 / Kling 动态推演测试、运镜控制。
     - **Stage 4: 最终调色与合成 (Final VFX)**：DaVinci Resolve 调色节点、胶片颗粒、4K 定稿标记。

2. **音乐与时间轴实时联动 (Audio-Synced Timeline)**
   - 顶部集成立体声全曲伴奏播放条。
   - 播放音乐时，时间轴与分镜卡片**自动高亮当前播放的镜头**，视听节奏严丝合缝。
   - 支持上传本地音频文件或直接替换 `audioSrc`。

3. **告别聊天软件的“点对点批注与修改清单”**
   - 针对单个镜头打标（如：人物面部保真、动作生硬、节奏偏快、调色偏暖）。
   - **一键复制 WhatsApp / 微信 格式化修改清单**：自动生成结构化修改简报，直接粘贴给团队。
   - 支持导出为 Markdown 文件。

4. **双视图模式自由切换**
   - **故事板网格 (Storyboard Grid)**：经典 16:9 影视分镜卡片。
   - **时间流 (Timeline Flow)**：纵向剧幕流，适合顺片评审。

5. **数据本地持久化与自由扩展**
   - 本地自动记忆所有勾选、状态与修改记录（基于 LocalStorage）。
   - 支持在页面点击 **「+ 添加分镜」** 随时扩充镜头。

---

## 🚀 启动与使用指南

### 1. 启动本地开发与预览
```bash
npm run dev
```
打开浏览器访问：`http://localhost:3000`

### 2. 打包与极速交付分享给客户
```bash
npm run build
```
打包后生成的 `dist` 文件夹是一个纯静态网站：
- 可以直接将 `dist` 拖拽部署到 [Vercel](https://vercel.com) 或 [Cloudflare Pages](https://pages.cloudflare.com)
- 发送一个在线网址给客户，客户在手机或电脑上均可全屏沉浸浏览与审核。

---

## 📂 自定义你的 MV 数据

所有分镜内容、提示词、时间码和图片/视频路径都位于：
📁 [`src/data/projectData.js`](file:///Users/rms/Desktop/Ron%20AI%20video/alicia%20MV/Scene/src/data/projectData.js)

你也可以随时在页面中：
1. 点击右上角 **「添加分镜」**，在网页表单中快速录入新分镜；
2. 在任意镜头灯箱中更改审核状态（已定稿 / 待审核 / 生成中）；
3. 底部随时可点击 **「恢复示范数据」** 重置。

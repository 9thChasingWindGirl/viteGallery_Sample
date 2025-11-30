<div align="center">
<img width="1758" height="1195" alt="viteGallery Banner" src="https://i.postimg.cc/8zKB0X7J/vite-Gallery.png" />
</div>

# viteGallery

🎨 **沉浸式画廊应用** - 一个优雅的照片和视频展示平台。

## 📋 项目简介

viteGallery 是一个基于 React 和 TypeScript 构建的现代化画廊应用，旨在提供沉浸式的媒体浏览体验。该应用采用深色主题设计，配合流畅的动画效果和响应式布局，为用户带来视觉上的享受。

### ✨ 主要功能

- 🖼️ **精美画廊布局**：采用响应式网格系统，自适应各种屏幕尺寸
- 📱 **分页浏览**：每页显示8个媒体项目，支持平滑的页面导航
- 🔍 **详细查看**：点击缩略图可查看大图和视频的详细信息
- 🎬 **多媒体支持**：同时支持图片（.webp）和视频（.mp4）格式
- 💫 **流畅动画**：使用 Framer Motion 实现平滑的过渡和动画效果
- 🎨 **现代化设计**：深色主题搭配渐变效果，视觉体验出色

## 🛠️ 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | ^19.2.0 | 前端框架 |
| TypeScript | ~5.8.2 | 类型系统 |
| Vite | ^6.2.0 | 构建工具 |
| Framer Motion | ^12.23.24 | 动画效果 |
| Lucide React | ^0.555.0 | 图标库 |
| Google Gemini | ^1.30.0 | AI 功能集成 |

## 🚀 快速开始

### 先决条件

- Node.js (建议使用 LTS 版本)
- pnpm (推荐的包管理器)

### 安装与运行

1. **克隆项目**

```bash
git clone <repository-url>
cd viteGallery
```

2. **安装依赖**

```bash
pnpm install
```

3. **配置环境变量**

创建 `.env` 文件并根据需要配置环境变量（参考 `.env.example` 文件）：

```bash
# .env
# 应用基本信息
VITE_APP_TITLE=viteGallery
VITE_APP_SUBTITLE=沉浸式画廊

# 链接信息
VITE_GITHUB_URL=https://github.com/your_github_username

# 画廊信息
VITE_GALLERY_NAME=galleryName
VITE_GALLERY_DESCRIPTION=galleryDescription

# 版权信息
VITE_COPYRIGHT_TEXT=© 2025 viteGallery. All rights reserved.*备*******号.

# AI 功能配置（可选）
GEMINI_API_KEY=your_api_key_here
```

4. **启动开发服务器**

```bash
pnpm run dev
```

5. **构建项目**

```bash
pnpm run build
```

6. **预览构建结果**

```bash
pnpm run preview
```

## 📁 项目结构

```
viteGallery/
├── components/           # React 组件
│   ├── Card.tsx         # 媒体卡片组件
│   └── DetailView.tsx   # 详情查看组件
├── services/            # 服务层
│   └── geminiService.ts # Gemini API 服务
├── utils/               # 工具函数和数据
│   └── mockData.ts      # 模拟数据
├── public/              # 本地媒体文件
│   ├── img/             # 图片文件
│   └── video/           # 视频文件
├── .env                 # 环境变量配置
├── .env.example         # 环境变量示例
├── .gitignore           # Git 忽略文件
├── App.tsx              # 应用主组件
├── config.ts            # 配置管理文件
├── index.html           # HTML 模板
├── index.tsx            # 应用入口
├── metadata.json        # 元数据文件
├── package.json         # 项目配置和依赖
├── pnpm-lock.yaml       # pnpm 依赖锁定文件
├── README.md            # 项目说明文档
├── tsconfig.json        # TypeScript 配置
├── types.ts             # TypeScript 类型定义
└── vite.config.ts       # Vite 配置
```

## ⚙️ 配置说明

### 配置文件

项目使用环境变量进行配置，所有配置项都以 `VITE_` 前缀开头，支持在构建时替换。

### 配置项列表

| 配置项 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| `VITE_APP_TITLE` | string | `viteGallery` | 应用标题，显示在浏览器标签和页面头部 |
| `VITE_APP_SUBTITLE` | string | `沉浸式画廊` | 应用副标题，显示在页面头部 |
| `VITE_GITHUB_URL` | string | `https://github.com/your_github_username` | GitHub 链接，显示在页面头部 |
| `VITE_GALLERY_NAME` | string | `galleryName` | 画廊名称，显示在页面主内容区 |
| `VITE_GALLERY_DESCRIPTION` | string | `galleryDescription` | 画廊描述，显示在页面主内容区 |
| `VITE_COPYRIGHT_TEXT` | string | `© 2025 viteGallery. All rights reserved.*备*******号.` | 版权信息，显示在页面底部 |
| `GEMINI_API_KEY` | string | - | Gemini API 密钥，用于 AI 功能（可选） |

### 配置方式

1. **通过环境变量配置**
   - 创建 `.env` 文件，添加需要的配置项
   - 配置项会在构建时被注入到应用中

2. **修改默认配置**
   - 直接修改 `config.ts` 文件中的默认值
   - 适合不需要频繁修改的配置项

## 🎯 使用指南

### 浏览画廊

1. 打开应用后，您将看到一个精美的媒体网格，展示照片和视频
2. 使用页面底部的分页控件浏览更多内容
3. 点击缩略图可查看详细信息和大图/视频
4. 在详情页面，点击空白区域或使用关闭按钮返回网格视图

### 添加新媒体

要添加新的媒体内容：

1. 将媒体文件（.webp 或 .mp4）添加到 `public/` 目录下相应的子文件夹中
2. 或者直接使用url链接
3. 编辑修改 `utils/mockData.ts` 文件，添加新的媒体项目记录，确保格式正确


### 部署到静态网站托管服务

1. **Vercel**
   - 连接 GitHub 仓库
   - 配置环境变量
   - 点击部署

2. **Netlify**
   - 连接 GitHub 仓库
   - 配置环境变量
   - 点击部署

## 🤝 贡献规范



## 📝 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

- 个人博客：[速溶理查](https://blog.whysoserious.dpdns.org/)

---

<div align="center">
  <p>💖 感谢您的关注！</p>
</div>

// 配置管理文件
// 从环境变量加载配置，提供默认值

interface Config {
  // 应用基本信息
  APP_TITLE: string;
  APP_SUBTITLE: string;
  
  // 链接信息
  GITHUB_URL: string;
  
  // 画廊信息
  GALLERY_NAME: string;
  GALLERY_DESCRIPTION: string;
  
  // 版权信息
  COPYRIGHT_TEXT: string;
}

// 从环境变量加载配置，提供默认值
export const config: Config = {
  APP_TITLE: import.meta.env.VITE_APP_TITLE || 'viteGallery',
  APP_SUBTITLE: import.meta.env.VITE_APP_SUBTITLE || '沉浸式画廊',
  GITHUB_URL: import.meta.env.VITE_GITHUB_URL || 'https://github.com/your_github_username',
  GALLERY_NAME: import.meta.env.VITE_GALLERY_NAME || 'galleryName',
  GALLERY_DESCRIPTION: import.meta.env.VITE_GALLERY_DESCRIPTION || 'galleryDescription',
  COPYRIGHT_TEXT: import.meta.env.VITE_COPYRIGHT_TEXT || '© 2025 viteGallery. All rights reserved.*备*******号.'
};

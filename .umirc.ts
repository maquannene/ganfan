import { defineConfig } from 'dumi';

export default defineConfig({
  title: '干（gàn）饭食堂',
  mode: 'site',
  base: '/ganfan',
  publicPath: '/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  // 其他配置
  // more config: https://d.umijs.org/config
});

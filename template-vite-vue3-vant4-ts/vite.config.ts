import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import eslintPlugin from 'vite-plugin-eslint';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    host: true
    // 禁用或配置 HMR 连接（用于 HMR websocket 必须使用不同的 http 服务器地址的情况）。
    // hmr: {
    //   overlay: false  // server.hmr.overlay 为 false 可以禁用服务器错误遮罩层。
    // }
  },
  // 路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    // vue3等插件 hooks 自动引入
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/auto-import.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    // 自定义组件自动引入
    Components({
      extensions: ['vue', 'tsx'],
      resolvers: [VantResolver()],
      dts: 'src/components.d.ts'
    }),
    // 配置vite在运行的时候自动检测eslint规范
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.js', 'src/**/*.vue', 'src/*.ts', 'src/*.js', 'src/*.vue']
      // cache: false // 关闭缓存
    })
  ]
});

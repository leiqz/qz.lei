import { createApp } from 'vue';
import App from './App.vue';
import router, { setupRouter } from './router';
import { setupStore } from './store';

import '@/assets/styles/index.scss';

async function bootstrap() {
  const app = createApp(App);
  // 挂载状态管理
  setupStore(app);
  // 挂载路由
  setupRouter(app);
  // 等待路由加载完毕
  await router.isReady();
  // APP实例
  app.mount('#app', true);
}

void bootstrap();

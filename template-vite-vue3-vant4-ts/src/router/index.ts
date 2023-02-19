import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { constantRoutes, dynamicRoutes } from './modules';
import { createRouterGuards } from './router-guards';
import useRouteStoreWidthOut from '@/store/modules/route';

const routes = constantRoutes.concat(dynamicRoutes);

const routeStore = useRouteStoreWidthOut();

// Menus
routeStore.setMenus(dynamicRoutes);

routeStore.setRouters(routes);

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return {
      top: 0
    };
  }
});

export function setupRouter(app: App) {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router);
}

export default router;

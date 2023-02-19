import { Router } from 'vue-router';

export function createRouterGuards(router: Router): void {
  // 路由全局拦截
  router.beforeEach(async (to, from, next) => {
    //......
    next();
  });
}

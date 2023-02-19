import { RouteRecordRaw } from 'vue-router';

const Layout = () => import('@/layout/index.vue');

// 可添加 公共路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/:path(.*)*',
    component: Layout,
    redirect: '/404',
    children: [
      {
        path: '/404',
        name: 'error',
        meta: {
          keepAlive: false
        },
        component: () => import('@/views/error/404.vue')
      }
    ]
  }
];

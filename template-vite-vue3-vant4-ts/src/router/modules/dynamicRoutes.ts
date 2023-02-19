import { RouteRecordRaw } from 'vue-router';

const Layout = () => import('@/layout/index.vue');

// 菜单 动态路由 可以基于用户权限动态加载 -- 这里我就写死了
export const dynamicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'dashboard',
    redirect: '/dashboard/index',
    component: Layout,
    meta: {
      title: '主控台',
      icon: 'wap-home'
    },
    children: [
      {
        path: 'index',
        name: 'DashboardPage',
        meta: {
          keepAlive: false
        },
        component: () => import('@/views/dashboard/index.vue')
      }
    ]
  },
  {
    path: '/message',
    name: 'Message',
    redirect: '/message/index',
    component: Layout,
    meta: {
      title: '消息',
      icon: 'chat'
    },
    children: [
      {
        path: 'index',
        name: 'MessagePage',
        meta: {
          keepAlive: false
        },
        component: () => import('@/views/message/index.vue')
      }
    ]
  },
  {
    path: '/my',
    name: 'My',
    redirect: '/my/index',
    component: Layout,
    meta: {
      title: '我的',
      icon: 'manager'
    },
    children: [
      {
        path: 'index',
        name: 'MyPage',
        meta: {
          keepAlive: false
        },
        component: () => import('@/views/my/index.vue')
      }
    ]
  }
];

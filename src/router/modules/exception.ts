import { AppRouteRecord } from '@/types/router'

export const exceptionRoutes: AppRouteRecord = {
  path: '/exception',
  name: 'Exception',
  component: '/index/index',
  meta: {
    title: '异常页面',
    icon: 'ri:error-warning-line'
  },
  children: [
    {
      path: '403',
      name: 'Exception403',
      component: '/exception/403',
      meta: {
        title: '403',
        keepAlive: true,
        isHideTab: true,
        isFullPage: true
      }
    },
    {
      path: '404',
      name: 'Exception404',
      component: '/exception/404',
      meta: {
        title: '404',
        keepAlive: true,
        isHideTab: true,
        isFullPage: true
      }
    },
    {
      path: '500',
      name: 'Exception500',
      component: '/exception/500',
      meta: {
        title: '500',
        keepAlive: true,
        isHideTab: true,
        isFullPage: true
      }
    }
  ]
}

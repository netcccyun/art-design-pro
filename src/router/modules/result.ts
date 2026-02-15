import { AppRouteRecord } from '@/types/router'

export const resultRoutes: AppRouteRecord = {
  path: '/result',
  name: 'Result',
  component: '/index/index',
  meta: {
    title: '结果页面',
    icon: 'ri:checkbox-circle-line'
  },
  children: [
    {
      path: 'success',
      name: 'ResultSuccess',
      component: '/result/success',
      meta: {
        title: '成功页',
        icon: 'ri:checkbox-circle-line',
        keepAlive: true
      }
    },
    {
      path: 'fail',
      name: 'ResultFail',
      component: '/result/fail',
      meta: {
        title: '失败页',
        icon: 'ri:close-circle-line',
        keepAlive: true
      }
    }
  ]
}

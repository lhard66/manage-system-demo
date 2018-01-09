/**
 * 卡券管理
 */
export default [
  {
    name: '卡券管理',
    path: '/coupon/manage/list',
    component: () => import('@/views/coupon/manage/CouponList.vue')
  }, {
    name: '发放记录',
    path: '/coupon/deliver/list',
    component: () => import('@/views/coupon/deliver/DeliverList.vue')
  },
]

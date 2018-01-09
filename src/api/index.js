import { doPost, doGet } from './request'
import { API } from './apis';

// 忘记密码
export * from './modules/resetPwd';
// 门店管理
export * from './modules/shop';
// 订单管理
export * from './modules/order';
// 财务管理
export * from './modules/finance';
// 会员管理
export * from './modules/member';
// 审车
export * from './modules/trial';
// 系统设置
export * from './modules/systems';

// 评论管理
export * from './modules/comment';

// 公共方法
export * from './modules/public';

// 通用设置
export * from './modules/common';

export * from './modules/order/wash';
export * from './modules/business/services';

/**
 * 全局常量，获取行数
 */
const PAGESIZE = 10;

/**
 * 申请订单退款
 * @param {*支付密码、订单ID和退款备注} data Object
 */
export function refund(data) {
  const url = API.get('order.refund', data);
  return doPost(url, data);
}

/**
 * 用户登陆
 * @param {*Object} data 用户名和登陆
 */
export function userLogin(data) {
  const url = API.get('user.login');
  return doPost(url, data);
}

/**
 * 得到新订单通知
 */
export function getNewOrder(time) {
  const url = API.get('new.order');
  return doGet(url, { time });
}

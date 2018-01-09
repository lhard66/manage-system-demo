import { doPost, doGet } from './request'
import { API } from './apis';

/**
 * 全局常量，获取行数
 */
const PAGESIZE = 10;

/**
 * 申请订单退款
 * @param {*支付密码、订单ID和退款备注} data Object
 */
export function getMenu(data) {
  const url = API.get('menu');
  return doGet(url);
}

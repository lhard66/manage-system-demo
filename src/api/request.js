import axios from 'axios';
import Qs from 'qs';

/**
 * @param  {String} url 请求地址
 * @param  {String} method  请求方式，默认get
 * @param  {Object} options 其它参数
 * @return {Promise}
 */
const doRequest = (url, options) => {
  const config = Object.assign({
    url,
    timeout: 30 * 1000,
    withCredentials: true, // 允许跨域请求带上cookie
  }, options);

  return new Promise((resolve, reject) => {
    axios(config).then(res => {
      // debugger;
      const status = res.status;
      if (status === 200) {
        const result = res.data;
        if (result) {
          if (result.code == 200) {
            resolve(result.data);
          } else {
            let msg = `${result.msg || '请求失败'} (${result.code})`;
            reject(msg, result.code, result);
          }
        }
      } else {
        let msg = `请求失败(${status})`;
        if (status === 400) {
          msg = '请求参数错误(400)';
        } else if (status === 502) {
          msg = '服务器正在升级中，请稍后再试';
        } else if (status === 503) {
          msg = '服务器正在维护中, 请稍后再试';
        }
        reject(msg, status);
      }
    }).catch(function (err) {
      let msg = `请求失败(${err})`;
      const status = err && err.response && err.response.status;
      if (status === 400) {
        msg = '请求参数错误(400)';
      } else if (status === 502) {
        msg = '服务器正在升级中，请稍后再试';
      } else if (status === 503) {
        msg = '服务器正在维护中, 请稍后再试';
      }
      reject(msg, status);
    });
  });
}

export function doPost(url, data, options = {}) {
  const params = Qs.stringify(data, { encodeValuesOnly: true, indices: false });
  console.log(params);
  const settings = Object.assign(options, {
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
    data: params,
  })
  return doRequest(url, settings);
}

export function postJSON(url, payload, options = {}) {
  const settings = Object.assign(options, {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    data: payload,
  });
  return doRequest(url, settings);
}

export function doGet(url, data, options = {}) {
  const settings = Object.assign(options, {
    method: 'get',
    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
    params: data,
  })
  return doRequest(url, settings);
}

/**
 * 序列化对象
 */
export function serialize(data, settings = {}) {
  const options = Object.assign({
    encodeValuesOnly: true,
    indices: false,
    skipNulls: true,
  }, settings);
  return Qs.stringify(data, options);
}

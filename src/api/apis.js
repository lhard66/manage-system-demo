import render from './url-render.js';

const DEBUG = false;

export const API = {
  get(name) {
    const url = this.urls[name];
    if (!url) throw new Error(name + ' not found!');
    return url;
  },
  extend(obj) {
    this.urls = Object.assign(this.urls, obj);
  },
  urls: {
    'enum': '/car/static/json/ok.json',
  }
}

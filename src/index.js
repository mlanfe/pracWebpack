import '@/css/common.css'
import ('./css/tst.less')
const dayjs = require('dayjs')
import (
  // 魔法字符串
  /*webpackChunkName: 'component'*/
  /*webpackPreload: true*/
  'js/component'
)

// 因为配置了reslove的extensions, 可以省略.jsx后缀名
import './app'

var now = dayjs()
console.log(now);

import { sum, multi } from './js/math'

const sum1 = sum(13, 10)
const multi1 = multi(1, 10)

new Promise(resolve => {
  setTimeout(resolve, 3000)
}).then(() => {
  console.log('===========resolve');
})

console.log(sum1, multi1);
console.log('hello webpack');

// webpack编译时, 将definePlugin中的process.env.NODE_ENV设置为development或者production
// 但是该值无法在项目外的babel.config.js中获取
console.log('definePlugin定义的全局变量: process.env.NODE_ENV:', process.env.NODE_ENV);
console.log('definePlugin定义的全局变量: BASE_URL:', BASE_URL);
import '@/css/common.css'
import './css/tst.less'

import 'js/component'

// 因为配置了reslove的extensions, 可以省略.jsx后缀名
import './app'

import { sum, multi } from './js/math'

const sum1 = sum(1, 10)
const multi1 = multi(1, 10)

new Promise(resolve => {
  setTimeout(resolve, 3000)
}).then(() => {
  console.log('===========resolve');
})

console.log(sum1, multi1);
console.log('hello webpack');
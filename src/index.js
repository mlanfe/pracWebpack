import './css/common.css'
import './css/tst.less'

import './js/component'

import { sum, multi } from './js/math'

const sum1 = sum(1, 10)
const multi1 = multi(1, 10)

console.log(sum1, multi1);
console.log('hello webpack');
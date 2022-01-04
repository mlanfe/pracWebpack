// const _ = require('lodash');
// import _ from 'lodash'


// 测试shimming
// 没有导入lodash, 也能使用lodash导出的全局变量
console.log('lodash-_:', _.lastIndexOf([1, 2, 1, 2], 2));
console.log('lodash-lodashTst:', lodashTst.lastIndexOf([1, 2, 1, 2], 2));

export const sum = (num1, num2) => num1 + num2
export const multi = (num1, num3) => num1 * num3


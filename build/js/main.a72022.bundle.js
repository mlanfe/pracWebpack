"use strict";(self.webpackChunkpracwebpack=self.webpackChunkpracwebpack||[]).push([[179],{4054:function(e,t,n){n(6992),n(1539),n(8674),n(8783),n(3948),n(2526),n(1817),n(2165),n(7042),n(8309),n(1038),n(4916);var r=n(7294),o=n(3935),l=n(9342),u=n(6974);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,l=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(){var e=a((0,r.useState)(0),2),t=e[0];e[1];return r.createElement("div",null,"Home",t)}function f(){return console.log("==========About"),r.createElement("div",null,"About")}function m(){return r.createElement("div",null,"hello react",r.createElement(l.rU,{to:"/home"},"Home"),r.createElement(l.rU,{to:"/about"},"About"),r.createElement(u.Z5,null,r.createElement(u.AW,{path:"/home",element:r.createElement(i,null)}),r.createElement(u.AW,{path:"/about",element:r.createElement(f,null)})))}o.render(r.createElement(l.VK,null,r.createElement(m,null)),document.getElementById("root"));var s=n(6486);console.log(s.lastIndexOf([1,2,1,2],2));n.e(349).then(n.bind(n,3349)),n.e(986).then(n.bind(n,7986));var b=13+10,h=function(e,t){return e*t}(1,10);new Promise((function(e){setTimeout(e,3e3)})).then((function(){console.log("===========resolve")})),console.log(b,h),console.log("hello webpack"),console.log("definePlugin定义的全局变量: process.env.NODE_ENV:","production"),console.log("definePlugin定义的全局变量: BASE_URL:","./")}},function(e){e.O(0,[807],(function(){return t=4054,e(e.s=t);var t}));e.O()}]);
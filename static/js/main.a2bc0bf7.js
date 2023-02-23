!function(){"use strict";function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function r(r){return function(r){if(Array.isArray(r))return t(r)}(r)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(r,e){if(r){if("string"===typeof r)return t(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(r,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var n="function"===typeof Symbol&&Symbol.observable||"@@observable",o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function u(t){if("object"!==typeof t||null===t)return!1;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(t)===r}function f(t,r,o){var c;if("function"===typeof r&&"function"===typeof o||"function"===typeof o&&"function"===typeof arguments[3])throw new Error(e(0));if("function"===typeof r&&"undefined"===typeof o&&(o=r,r=void 0),"undefined"!==typeof o){if("function"!==typeof o)throw new Error(e(1));return o(f)(t,r)}if("function"!==typeof t)throw new Error(e(2));var a=t,l=r,d=[],p=d,y=!1;function s(){p===d&&(p=d.slice())}function h(){if(y)throw new Error(e(3));return l}function v(t){if("function"!==typeof t)throw new Error(e(4));if(y)throw new Error(e(5));var r=!0;return s(),p.push(t),function(){if(r){if(y)throw new Error(e(6));r=!1,s();var n=p.indexOf(t);p.splice(n,1),d=null}}}function b(t){if(!u(t))throw new Error(e(7));if("undefined"===typeof t.type)throw new Error(e(8));if(y)throw new Error(e(9));try{y=!0,l=a(l,t)}finally{y=!1}for(var r=d=p,n=0;n<r.length;n++){(0,r[n])()}return t}return b({type:i.INIT}),(c={dispatch:b,subscribe:v,getState:h,replaceReducer:function(t){if("function"!==typeof t)throw new Error(e(10));a=t,b({type:i.REPLACE})}})[n]=function(){var t,r=v;return(t={subscribe:function(t){if("object"!==typeof t||null===t)throw new Error(e(11));function n(){t.next&&t.next(h())}return n(),{unsubscribe:r(n)}}})[n]=function(){return this},t},c}var c="ADD_TODO",a="DEL_TODO",l=document.querySelector("#todoform"),d=document.querySelector("#todoinput"),p=document.querySelector("#todoul"),y=f((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c:return[].concat(r(t),[{payload:e.payload,id:Date.now()}]);case a:return t.filter((function(t){return t.id!==e.id}));default:return t}})),s=function(t){y.dispatch(function(t){return{type:c,payload:t}}(t))},h=function(t){var r=parseInt(t.target.parentNode.id);y.dispatch(function(t){return{type:a,id:t}}(r))};y.subscribe((function(){var t=y.getState();p.innerText="",t.forEach((function(t){var r=document.createElement("li"),e=document.createElement("button");e.innerText="DEL",e.addEventListener("click",h),r.id=t.id.toString(),r.innerText=t.payload,r.appendChild(e),p.appendChild(r)}))}));l.addEventListener("submit",(function(t){t.preventDefault();var r=d.value;d.value="",s(r)}))}();
//# sourceMappingURL=main.a2bc0bf7.js.map
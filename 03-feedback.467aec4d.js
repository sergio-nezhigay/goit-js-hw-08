!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire4c75;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire4c75=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var i=o("hKHmD"),u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f.default(e,t,r[t])}))}return e};var a,f=(a=o("hKHmD"))&&a.__esModule?a:{default:a};var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t){return c.default(e)||s.default(e,t)||p.default(e,t)||d.default()};var c=v(o("8slrw")),s=v(o("7AJDX")),d=v(o("ifqQW")),p=v(o("auk6i"));function v(e){return e&&e.__esModule?e:{default:e}}var y,b={};Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var m="Expected a function",g=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,_=/^0o[0-7]+$/i,h=parseInt,x="object"==typeof t&&t&&t.Object===Object&&t,w="object"==typeof self&&self&&self.Object===Object&&self,M=x||w||Function("return this")(),S=Object.prototype.toString,P=Math.max,D=Math.min,T=function(){return M.Date.now()};function E(e,t,r){var n,o,i,u,a,f,l=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(m);function p(t){var r=n,i=o;return n=o=void 0,l=t,u=e.apply(i,r)}function v(e){return l=e,a=setTimeout(b,t),c?p(e):u}function y(e){var r=e-f;return void 0===f||r>=t||r<0||s&&e-l>=i}function b(){var e=T();if(y(e))return g(e);a=setTimeout(b,function(e){var r=t-(e-f);return s?D(r,i-(e-l)):r}(e))}function g(e){return a=void 0,d&&n?p(e):(n=o=void 0,u)}function O(){var e=T(),r=y(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return v(f);if(s)return a=setTimeout(b,t),p(f)}return void 0===a&&(a=setTimeout(b,t)),u}return t=A(t)||0,N(r)&&(c=!!r.leading,i=(s="maxWait"in r)?P(A(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=f=o=a=void 0},O.flush=function(){return void 0===a?u:g(T())},O}function N(t){var r=void 0===t?"undefined":e(b)(t);return!!t&&("object"==r||"function"==r)}function A(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(b)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==S.call(t)}(t))return NaN;if(N(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=N(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(g,"");var n=j.test(t);return n||_.test(t)?h(t.slice(2),n?2:8):O.test(t)?NaN:+t}y=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(m);return N(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),E(e,t,{leading:n,maxWait:t,trailing:o})};var I="feedback-form-state",k=document.querySelector(".feedback-form");function q(t){var r,n=t.target,o=n.name,a=n.value,f=$();r=e(u)({},f,e(i)({},o,a)),localStorage.setItem(I,JSON.stringify(r))}function W(t){t.preventDefault();var r={},n=new FormData(k),o=!0,i=!1,u=void 0;try{for(var a,f=n[Symbol.iterator]();!(o=(a=f.next()).done);o=!0){var c=e(l)(a.value,2),s=c[0],d=c[1];r[s]=d}}catch(e){i=!0,u=e}finally{try{o||null==f.return||f.return()}finally{if(i)throw u}}console.log(r),t.target.reset(),localStorage.removeItem(I)}function $(){var e=localStorage.getItem(I)||"{}";try{return JSON.parse(e)}catch(e){return console.log("error: ",e),{}}}!function(){k.addEventListener("input",e(y)(q,500)),k.addEventListener("submit",W);var t=$();Object.entries(t).forEach((function(t){var r=e(l)(t,2),n=r[0],o=r[1];k.elements[n]&&(k.elements[n].value=o)}))}()}();
//# sourceMappingURL=03-feedback.467aec4d.js.map
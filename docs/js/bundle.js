!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";async function r(e,t,n){await fetch(t).then(e=>e.text()).then(t=>{document.querySelector(e).innerHTML=t}),n&&n()}n.r(t),n.d(t,"getHtml",(function(){return r}))},function(e,t,n){"use strict";function r(){let e=document.getElementsByTagName("input");for(let t of e)t.addEventListener("input",e=>{t.value=t.value.replace(/\D/,""),t.value=t.value.replace(/(\d{4}\B)/g,"$1 ")})}n.r(t),n.d(t,"cardValidation",(function(){return r}))},function(e,t,n){n(3),n(1),e.exports=n(0)},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1);Object(r.getHtml)("header","./views/header.html"),Object(r.getHtml)("main","./views/step2.html",i.cardValidation),Object(r.getHtml)("footer","./views/footer.html");class o{static height(){return window.innerHeight}static width(){return window.innerWidth}}function u(){document.getElementById("container").style.setProperty("--vh",o.height()+"px")}document.onreadystatechange=()=>{"complete"===document.readyState&&u()},window.addEventListener("resize",()=>{u(),function(){let e;return()=>{clearTimeout(e);let t=function(e,t=""){if(""!=t){let e=document.getElementById(t);if(e)return e}let n=document.createElement(e);return n.setAttribute("id",t),document.body.appendChild(n),n}("div","notification"),n=window.matchMedia("(orientation: portrait)").matches?"Portrait":"Landscape";t.textContent=`${n} mode: ${o.height()}x${o.width()}`,t.className="show",e=setTimeout(()=>{t.className="hide"},2e3)}}()()})}]);
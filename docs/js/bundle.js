"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var ScreenSize=function(){function a(){_classCallCheck(this,a)}return _createClass(a,null,[{key:"height",value:function(){return window.innerHeight}},{key:"width",value:function(){return window.innerWidth}}]),a}();document.onreadystatechange=function(){"complete"===document.readyState&&(setMobileViewportHeight(),showNotification()())},window.addEventListener("resize",function(){setMobileViewportHeight(),showNotification()()});function setMobileViewportHeight(){var a=document.getElementById("container");a.style.setProperty("--vh","".concat(ScreenSize.height(),"px"))}function showNotification(){var a;return function(){clearTimeout(a);var b=createElement("div","notification"),c=window.matchMedia("(orientation: portrait)").matches;viewMode=c?"Portrait":"Landscape",b.textContent="".concat(viewMode," mode: ").concat(ScreenSize.height(),"x").concat(ScreenSize.width()),b.className="show",a=setTimeout(function(){b.className="hide"},2e3)}}function createElement(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";if(""!=b){var c=document.getElementById(b);if(c)return c}var d=document.createElement(a);return d.setAttribute("id",b),document.body.appendChild(d),d}
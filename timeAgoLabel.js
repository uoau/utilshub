"use strict";function timeAgoLabel(e){e=((new Date).getTime()-e)/1e3;return e<60?"刚刚":e<3600?"".concat(Math.floor(e/60),"分钟前"):e<86400?"".concat(Math.floor(e/3600),"小时前"):e<2592e3?"".concat(Math.floor(e/86400),"天前"):e<31104e3?"".concat(Math.floor(e/2592e3),"月前"):"".concat(Math.floor(e/31104e3),"年前")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.timeAgoLabel=timeAgoLabel;
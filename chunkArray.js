"use strict";function chunkArray(e){for(var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,s=0,t=0,c=e.length,n=new Array(Math.ceil(c/r));s<c;)n[t]=e.slice(s,s+r),s+=r,t+=1;return n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.chunkArray=chunkArray,require("core-js/modules/es.array.slice.js");
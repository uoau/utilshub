"use strict";function parseUrlQuery(e){e=e||globalThis.location.href;return e.substring(e.lastIndexOf("?")+1).split("&").reduce(function(e,r){var s=e,e=r.split("="),r=e[0],e=e[1];return s[r]=e,s},{})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseUrlQuery=parseUrlQuery,require("core-js/modules/es.global-this.js"),require("core-js/modules/es.array.reduce.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.split.js");
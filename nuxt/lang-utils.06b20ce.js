(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{213:function(e,r,t){"use strict";t.r(r),t.d(r,"extractLanguageFromTable",(function(){return O})),t.d(r,"extractLanguageFromProposal",(function(){return j}));t(47),t(24),t(75),t(214),t(39);var n=t(12),o=(t(25),t(13),t(475),t(56),t(647)),c=t.n(o);function f(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(r){Object(n.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}var v={en:!0,"英語":!0,"英文":!0,"英":!0};function O(e){var r=e.rows,t=e.isEn,n=void 0===t||t;return r.map((function(e){var r={};for(var t in e){var o=t.split("-");if(o.length<2)r[t]=e[t];else{var f=c.a.last(o)in v;if(n&&f||!n&&!f)r[o.slice(0,-1).join("-")]=e[t]}}return r}))}function j(e){var r=e.proposals,t=e.isEn,n=void 0===t||t;return Object.values(r).map((function(e){var r=O({rows:[e.timeSheet],isEn:n}),t=l(l({},e),{},{timeSheet:r[0]});if(Object.keys(t).forEach((function(e){if(e.endsWith("_en")){var r=(t[e]||"").trim();if(n&&r){var o=e.split("_").slice(0,-1).join("_");t[o]=r}delete t[e]}})),t.format){var o=t.format.replace(/（[^）]+）/,"").replace(/\([^)]+\)/,"").split(" ");t.format=n?o.slice(1).join(" "):o[0]}if(t.topic){var c=t.topic.split(" ");t.topic=n?c.slice(1).join(" "):c[0]}return t}))}}}]);
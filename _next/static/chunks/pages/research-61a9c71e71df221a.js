(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{2771:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/research",function(){return n(8652)}])},3909:function(e,r,n){"use strict";var t=n(5893);r.Z=function(e){var r=e.src;return(0,t.jsx)("section",{className:"hero is-medium",style:{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url("'.concat(r,'")'),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:(0,t.jsx)("div",{className:"hero-body"})})}},5988:function(e,r,n){"use strict";var t=n(5893),a=n(7294),s=n(6010);r.Z=function(e){var r=e.src,n=e.caption,i=e.alt,c=e.previewSize,l=e.href,o=(0,a.useState)(!1),u=o[0],m=o[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("figure",{className:(0,s.Z)("image cursor-pointer relative","is-".concat(c,"x").concat(c)),onClick:function(){return l?window.open(l):m(!0)},children:(0,t.jsx)("img",{src:r,alt:i,title:n})}),!l&&(0,t.jsxs)("div",{className:(0,s.Z)("modal",u&&"is-active"),children:[(0,t.jsx)("div",{className:"modal-background",onClick:function(){return m(!1)}}),(0,t.jsxs)("div",{className:"modal-content relative h-full my-6",children:[(0,t.jsx)("img",{src:r,alt:i,className:"w-full"}),(0,t.jsx)("p",{className:"absolute bottom-0 p-4 has-background-dark has-text-white w-full",children:n})]}),(0,t.jsx)("button",{className:"modal-close is-large","aria-label":"close",onClick:function(){return m(!1)}})]})]})}},8652:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return j}});var t=n(5893),a=n(1664),s=n(3909),i=n(9352),c=n(5988),l=n(9655);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){o(e,r,n[r])}))}return e}var m,d=function(e){var r=e.name,n=e.purpose,a=e.researchQuestions,s=e.summary,o=e.image,m=e.start,d=e.end,h=e.showYear;return(0,t.jsxs)("li",{className:"timeline-item",children:[(0,t.jsxs)("div",{className:"media",children:[(0,t.jsx)("div",{className:"media-left",children:(0,t.jsx)(c.Z,u({previewSize:"256",alt:o.caption},o))}),(0,t.jsxs)("div",{className:"media-content",children:[(0,t.jsx)("h2",{className:"is-size-5 mb-3",children:r}),(0,t.jsxs)("h2",{className:"is-size-6 ml-4",children:[m.getFullYear(),"\xa0\u2014\xa0",d?d.getFullYear():"Ongoing"]}),(0,t.jsx)("h2",{className:"is-size-6 ml-4 mt-2 is-italic",children:n}),(0,t.jsx)("div",{className:"ml-4 mt-3 content fbox box",children:(0,t.jsx)(l.D,{children:s})}),a&&(0,t.jsx)("ul",{className:"ml-4 mt-4",children:a.map((function(e,r){return(0,t.jsxs)("li",{className:"is-italic",children:[(0,t.jsx)("span",{className:"has-text-warning",children:(0,t.jsx)(i.qvv,{})})," ",e]},r)}))})]})]}),(0,t.jsx)("h2",{className:h?"pub-year":"is-hidden",children:m.getFullYear()}),(0,t.jsx)("hr",{})]})};function h(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var f=(null===(m=n(5680).Z.research)||void 0===m?void 0:m.sort((function(e,r){return r.start.getFullYear()==e.start.getFullYear()?r.end&&e.end?r.end.getFullYear()-e.end.getFullYear():e.end?1:-1:r.start.getFullYear()-e.start.getFullYear()})))||[],j=function(){var e=0;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Z,{src:"/img/dickinson.webp"}),(0,t.jsxs)("main",{className:"container mt-6",children:[(0,t.jsx)("h1",{className:"is-size-3 is-family-primary",children:"Research"}),(0,t.jsxs)("p",{children:["Projects are listed chronologically and resulting manuscripts can be found on the"," ",(0,t.jsx)(a.default,{href:"/publications",children:(0,t.jsx)("a",{children:"Publications page."})})]}),(0,t.jsx)("ul",{className:"mt-6 timeline",children:f.map((function(r){var n=!1;return r.start.getFullYear()!==e&&(n=!0,e=r.start.getFullYear()),(0,t.jsx)(d,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){h(e,r,n[r])}))}return e}({},r,{showYear:n}),r.name)}))})]})]})}}},function(e){e.O(0,[937,655,774,888,179],(function(){return r=2771,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[4621],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79842:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={id:"release-notes",title:"Release Notes"},a=void 0,l={unversionedId:"notes/release-notes",id:"notes/release-notes",title:"Release Notes",description:"1.0.0-rc.33",source:"@site/docs/notes/notes.md",sourceDirName:"notes",slug:"/notes/",permalink:"/docs/notes/",draft:!1,editUrl:"https://github.com/qodly/docs/edit/main/docs/notes/notes.md",tags:[],version:"current",frontMatter:{id:"release-notes",title:"Release Notes"},sidebar:"Develop",previous:{title:"Overview",permalink:"/docs/studio/overview"},next:{title:"Model Editor",permalink:"/docs/studio/model/model-editor-interface"}},s={},c=[{value:"1.0.0-rc.33",id:"100-rc33",level:2},{value:"New features",id:"new-features",level:3},{value:"Studio",id:"studio",level:4},{value:"Server",id:"server",level:4},{value:"Fixes",id:"fixes",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"100-rc33"},"1.0.0-rc.33"),(0,o.kt)("h3",{id:"new-features"},"New features"),(0,o.kt)("h4",{id:"studio"},"Studio"),(0,o.kt)("h4",{id:"server"},"Server"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"New collection.multiSort function."),(0,o.kt)("li",{parentName:"ul"},"Global modification stamp to help implementing data synchronization modules. New functions: ds.getGlobalStamp and ds.setGlobalStamp."),(0,o.kt)("li",{parentName:"ul"},"Support for initializing the variable's value and data type in the declaration line."),(0,o.kt)("li",{parentName:"ul"},"Support for variadic parameters declaration")),(0,o.kt)("h3",{id:"fixes"},"Fixes"))}p.isMDXComponent=!0}}]);
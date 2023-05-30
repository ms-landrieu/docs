"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[8967],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,b=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={id:"rendering",title:"Rendering a webform"},a=void 0,s={unversionedId:"studio/rendering",id:"studio/rendering",title:"Rendering a webform",description:"A webform describes your application's look and behavior. After or while you design a webform, you can render it to see its final result.",source:"@site/docs/studio/rendering.md",sourceDirName:"studio",slug:"/studio/rendering",permalink:"/docs/studio/rendering",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/rendering.md",tags:[],version:"current",frontMatter:{id:"rendering",title:"Rendering a webform"},sidebar:"Development",previous:{title:"Events and standard actions",permalink:"/docs/studio/design-webforms/events"},next:{title:"Settings",permalink:"/docs/studio/settings"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"How to render a webform",id:"how-to-render-a-webform",level:2},{value:"From the 4D Web Studio IDE",id:"from-the-4d-web-studio-ide",level:3},{value:"From a browser window",id:"from-a-browser-window",level:3},{value:"Exposed and non-exposed assets",id:"exposed-and-non-exposed-assets",level:2}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A webform describes your application's look and behavior. After or while you design a webform, you can ",(0,o.kt)("em",{parentName:"p"},"render")," it to see its final result."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"4D Web Studio does not generate HTML code directly. When you drop components on the canvas, when you map datasources to components, or when you configure an event, 4D Web Studio places your work in a JSON file. This JSON file, the webform, cannot directly be opened in a web browser. It is \u201crendered\u201d either when you preview it in the webstudio, or when you choose to render it in a dedicated browser tab."),(0,o.kt)("p",null,"At runtime, webforms are generated and interpreted by a built-in renderer engine."),(0,o.kt)("p",null,"Each webform has its own URL on the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/WebServer/webServer.html"},"4D web server"),"."),(0,o.kt)("p",null,"The following diagram describes how data flows to and from the studio:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"workflow-diagram",src:r(8201).Z,width:"1223",height:"781"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The 4D WebAdmin web server provides a secured web access to 4D Web Studio and allows previewing webforms inside the studio."),(0,o.kt)("li",{parentName:"ul"},"The main 4D web server is ",(0,o.kt)("a",{parentName:"li",href:"https://developer.4d.com/docs/en/REST/configuration.html#starting-the-rest-server"},"exposed as REST server"),", and the renderer communicates with it using ",(0,o.kt)("a",{parentName:"li",href:"https://developer.4d.com/docs/en/REST/gettingStarted.html"},"REST requests"),"."),(0,o.kt)("li",{parentName:"ul"},"The webforms are deployed with the application, and end-users render them in their browsers. ")),(0,o.kt)("h2",{id:"how-to-render-a-webform"},"How to render a webform"),(0,o.kt)("p",null,"Webforms can be rendered from the 4D Web Studio IDE, or directly from a browser window. "),(0,o.kt)("h3",{id:"from-the-4d-web-studio-ide"},"From the 4D Web Studio IDE"),(0,o.kt)("p",null,"To open a browser tab and render a webform, click the ",(0,o.kt)("strong",{parentName:"p"},"Render")," button (",(0,o.kt)("img",{alt:"render-button",src:r(7420).Z,width:"25",height:"25"}),")."),(0,o.kt)("p",null,"A tab will open at ",(0,o.kt)("inlineCode",{parentName:"p"},"IP:port/$lib/renderer/?w=WebFormName"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The button is displayed only when the ",(0,o.kt)("a",{parentName:"p",href:"#configuration"},"configuration options")," are activated.")),(0,o.kt)("h3",{id:"from-a-browser-window"},"From a browser window"),(0,o.kt)("p",null,"Webforms can be rendered directly from a browser window, by typing the following address:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IP:port/$lib/renderer/?w=WebFormName")),(0,o.kt)("h2",{id:"exposed-and-non-exposed-assets"},"Exposed and non-exposed assets"),(0,o.kt)("p",null,"4D Web Studio runs through the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Admin/webAdmin.html"},"4D WebAdmin web server"),". When you use 4D Web Studio as a developer, even when you preview a webform in the studio, you\u2019re using the 4D WebAdmin web server. This allows you to see dataclasses, functions and attributes that are not exposed as REST resources for example (they are greyed out)."),(0,o.kt)("p",null,"However, webform rendering happens outside 4D Web Studio, and is served by the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/WebServer/webServer.html"},"standard 4D web server"),". In this situation, your web application cannot access assets that are not exposed as REST resources."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/ORDA/ordaClasses.html#exposed-vs-non-exposed-functions"},"Exposed vs non-exposed functions")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/REST/configuration.html#exposing-tables"},"Exposing tables")," for more information on how to expose assets."))}u.isMDXComponent=!0},7420:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABP2lDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSCwoyGFhYGDIzSspCnJ3UoiIjFJgf8bAyMAHhAwM+onJxQWOAQE+QDYDjEYF364BVQPBZV2QWZIrmpNa1H4d42MKDUr3qZuDqR4FcKWkFicD6T9AnJRcUFTCwMCYAGQrl5cUgNgtQLZIEdBRQPYMEDsdwl4DYidB2AfAakKCnIHsK0C2QHJGYgqQ/QTI1klCEk9HYkPtBQEOZyNzN2NLAwJOJR2UpFaUgGjn/ILKosz0jBIFR2AIpSp45iXr6SgYGRgZMTCAwhui+vMNcDgyinEgxFJ3MDCYNAMFbyLEst8xMOxZxMDA9w4hpqoP5N9mYDiUVpBYlAh3AOM3luI0YyMIm3s7AwPrtP//P4czMLBrMjD8vf7//+/t////XcbAwHyLgeHANwAoA16LnVXJtAAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGaADAAQAAAABAAAAGQAAAAB7O7VkAAABSklEQVRIDd1WOw6DMAxNq16HATHAaZhgYeEsLCwwcRsGxMCBWl4kSyaxkwipHeqhSYj9nuOf+ijL8m2+LM8v41v4/yF5pYYryzKr2jSN2bbN7vd9N8dxRCGiJACfpukCdBbL5TyOo1mW5fKNH4IkwzAYF5Ab077rOrvViNTE13WdRMCJ4JQkIgkIyDvJSPuGV1PuuI5IohGs68ptxb2bPyh5JJInhDbPs0GSY+JieCR5ngcxkNy2bYM67qVH4ipIZ/RGVVXqq9BLXDySoij4/a09NSsZe32CuMd6AzGHtzE9lYQutDWlvDFuuHgvCc2iVO9dDC8n8ECrnpTwSCUuksCTlMbjIcFeG5QiCQz6vldLFPeuwCltQHo54cZkpI0Z0kV43TzQHdbHGeekPxIoW5oG6CWUOiQEbhXOn2QSMrizqjm5A6bZ/ITkA0LFacvfWgKGAAAAAElFTkSuQmCC"},8201:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/workflow-270238fe59daa38386214f58375ad832.png"}}]);
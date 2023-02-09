"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[9852],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>b});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(o),m=n,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return o?r.createElement(b,a(a({ref:t},u),{},{components:o})):r.createElement(b,a({ref:t},u))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var d=2;d<i;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2018:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=o(7462),n=(o(7294),o(3905));const i={id:"get-started",title:"Getting Started"},a=void 0,l={unversionedId:"get-started",id:"get-started",title:"Getting Started",description:"Welcome to 4D Web Studio preview version",source:"@site/docs/get-started.md",sourceDirName:".",slug:"/get-started",permalink:"/docs/get-started",draft:!1,editUrl:"https://github.com/4d/qodly/edit/main/docs/get-started.md",tags:[],version:"current",frontMatter:{id:"get-started",title:"Getting Started"},sidebar:"GetStarted",previous:{title:"Overview",permalink:"/docs/overview"}},s={},d=[{value:"Welcome to 4D Web Studio preview version",id:"welcome-to-4d-web-studio-preview-version",level:2},{value:"What is 4D Web Studio?",id:"what-is-4d-web-studio",level:2},{value:"Hello, World",id:"hello-world",level:2},{value:"What to expect from this preview version",id:"what-to-expect-from-this-preview-version",level:2},{value:"Technologies used",id:"technologies-used",level:2},{value:"Before you start",id:"before-you-start",level:2},{value:"Use cases",id:"use-cases",level:3},{value:"4D and 4D Server",id:"4d-and-4d-server",level:3},{value:"About REST",id:"about-rest",level:3},{value:"Debugging 4D Code",id:"debugging-4d-code",level:3},{value:"Known limitations",id:"known-limitations",level:3}],u={toc:d};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"welcome-to-4d-web-studio-preview-version"},"Welcome to 4D Web Studio preview version"),(0,n.kt)("admonition",{title:"info",type:"note"},(0,n.kt)("p",{parentName:"admonition"}," At this stage, 4D Web Studio is a codename for the product. It may not be its final name.")),(0,n.kt)("h2",{id:"what-is-4d-web-studio"},"What is 4D Web Studio?"),(0,n.kt)("p",null,"4D Web Studio is a new way of building business web applications, powered by 4D. Our vision is to provide developers a 100% web-browser-based experience by allowing them to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"design web forms visually by drag and dropping components on a canvas"),(0,n.kt)("li",{parentName:"ul"},"preview pages instantly"),(0,n.kt)("li",{parentName:"ul"},"easily map data with ORDA data classes"),(0,n.kt)("li",{parentName:"ul"},"directly execute 4D code on web events or datasource events"),(0,n.kt)("li",{parentName:"ul"},"code & debug in the browser"),(0,n.kt)("li",{parentName:"ul"},"and even edit a data model")),(0,n.kt)("p",null,"At the end of the road, developers will be able to build complete web business applications using only a web browser and their 4D coding skills. There is no JavaScript involved."),(0,n.kt)("h2",{id:"hello-world"},"Hello, World"),(0,n.kt)("p",null,'This 5-minute video provides a "Hello World" example and covers how to enable access to the studio, create a basic interface, and configure an event that greets the user by their name:'),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/GwIdic4OhPQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),(0,n.kt)("h2",{id:"what-to-expect-from-this-preview-version"},"What to expect from this preview version"),(0,n.kt)("p",null,"In 4D Web Studio, you will discover a totally new web UI, get familiar with the concept of datasources, and learn how to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"create webforms by placing components on a page"),(0,n.kt)("li",{parentName:"ul"},"map components to data"),(0,n.kt)("li",{parentName:"ul"},"trigger 4D code (dataclass functions or project methods) by configuring events")),(0,n.kt)("p",null,"Since this is a preview version, you'll be using an unfinished product, and you can expect bugs to happen. If you'd rather have a bug-free experience, we recommend waiting a few more months."),(0,n.kt)("p",null,"As usual in such situations, we do not recommend using this product in a production environment yet."),(0,n.kt)("h2",{id:"technologies-used"},"Technologies used"),(0,n.kt)("p",null,"In order to get the best experience possible, 4D Web Studio currently requires a precise set of 4D skills:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"knowledge of project mode: 4D Web Studio won\u2019t run in binary mode"),(0,n.kt)("li",{parentName:"ul"},"knowledge of ",(0,n.kt)("a",{parentName:"li",href:"https://developer.4d.com/docs/en/ORDA/overview.html"},"ORDA"),": 4D Web Studio relies heavily on ",(0,n.kt)("a",{parentName:"li",href:"https://developer.4d.com/docs/en/ORDA/dsmapping.html#dataclass"},"dataclasses")),(0,n.kt)("li",{parentName:"ul"},"being familiar with the ",(0,n.kt)("a",{parentName:"li",href:"https://developer.4d.com/docs/en/REST/gettingStarted.html"},"4D REST server")," and API")),(0,n.kt)("h2",{id:"before-you-start"},"Before you start"),(0,n.kt)("p",null,"Here are a few things to know before you start using 4D Web Studio."),(0,n.kt)("h3",{id:"use-cases"},"Use cases"),(0,n.kt)("p",null,"With 4D Web Studio, you can either build a new web application from scratch, or open an already existing 4D project and start adding webforms to your existing application."),(0,n.kt)("admonition",{title:"Info",type:"note"},(0,n.kt)("p",{parentName:"admonition"},'4D Web Studio does not allow "converting" a 4D desktop form into a 4D webform.')),(0,n.kt)("h3",{id:"4d-and-4d-server"},"4D and 4D Server"),(0,n.kt)("p",null,"You can use 4D Web Studio with both 4D and 4D Server. This allows you to work on your own, or within a team with a version control system (VCS) such as Git, and see the results in a shared 4D Server."),(0,n.kt)("h3",{id:"about-rest"},"About REST"),(0,n.kt)("p",null,"All 4D code executed from a webform is in fact triggered through the 4D REST API. This makes it possible for you to use your browser\u2019s developer tools to inspect your rendered webform and troubleshoot REST requests and responses."),(0,n.kt)("h3",{id:"debugging-4d-code"},"Debugging 4D Code"),(0,n.kt)("p",null,"Until the online debugger is available, if you use 4D Web Studio on your local workstation together with 4D, placing a breakpoint in your code makes it possible for you to debug 4D code triggered from a 4D webform."),(0,n.kt)("h3",{id:"known-limitations"},"Known limitations"),(0,n.kt)("p",null,"Since 4D Web Studio is still in early stages of development, some features are not yet available."),(0,n.kt)("p",null," At this stage:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The debugger is not available yet"),(0,n.kt)("li",{parentName:"ul"},"Navigation features are still in development, but you can already embed a webform inside another using the ",(0,n.kt)("a",{parentName:"li",href:"/docs/design-webforms/create-webform#component-list"},"Webform Loader")," and attach ",(0,n.kt)("a",{parentName:"li",href:"/docs/design-webforms/events/#bind-a-navigation-action-to-an-event"},"navigation actions to events"),".")))}c.isMDXComponent=!0}}]);
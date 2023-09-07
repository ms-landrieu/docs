"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[2685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52203:(e,t,n)=>{n.d(t,{ZP:()=>a});var r=n(67294),o=n(86010);const a={List:function(e){let{children:t,align:n="start",justifyContent:a="start"}=e;return r.createElement("div",{className:(0,o.Z)("flex flex-col lg:flex-row flex-wrap",{"items-start":"start"===n,"items-center":"center"===n,"items-end":"end"===n},{"justify-start":"start"===a,"justify-center":"center"===a,"justify-end":"end"===a,"justify-between":"between"===a,"justify-around":"around"===a,"justify-evenly":"evenly"===a})},t)},Item:function(e){let{children:t,width:n}=e;const a=(e=>{const t="undefined"!=typeof window&&window.matchMedia(e),[n,o]=(0,r.useState)(t.matches);return(0,r.useEffect)((()=>(t.onchange=e=>o(e.matches),()=>t.onchange=null))),n})("(max-width: 1024px)");return r.createElement("div",{className:(0,o.Z)({"flex-1":!n}),style:a?{}:{width:n}},t)}}},9949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),a=n(52203);const i={id:"icon",title:"Icon"},s=void 0,l={unversionedId:"studio/design-webforms/components/icon",id:"studio/design-webforms/components/icon",title:"Icon",description:"The Icon component is a UI element that displays graphical symbols or icons in web applications.",source:"@site/docs/studio/design-webforms/components/icon.md",sourceDirName:"studio/design-webforms/components",slug:"/studio/design-webforms/components/icon",permalink:"/docs/studio/design-webforms/components/icon",draft:!1,editUrl:"https://github.com/qodly/docs/edit/main/docs/studio/design-webforms/components/icon.md",tags:[],version:"current",frontMatter:{id:"icon",title:"Icon"},sidebar:"Develop",previous:{title:"Select Input",permalink:"/docs/studio/design-webforms/components/selectinput"},next:{title:"Checkbox",permalink:"/docs/studio/design-webforms/components/checkbox"}},c={},p=[{value:"Use Cases",id:"use-cases",level:2},{value:"Properties Customization",id:"properties-customization",level:2},{value:"Data Binding",id:"data-binding",level:2},{value:"Triggers and Events",id:"triggers-and-events",level:2}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Icon")," component is a UI element that displays graphical symbols or icons in web applications."),(0,o.kt)("h2",{id:"use-cases"},"Use Cases"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Icon")," component serves various purposes within user interfaces, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Action Indicators"),': Icons are used to represent actions, such as "Save," "Delete," or "Print".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Navigation Enhancements"),": Icons can be employed to enhance navigation by representing menu items, links, or categories.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Information Presentation"),": Icons are utilized to visually convey information, such as alerts, warnings, or success messages."))),(0,o.kt)("h2",{id:"properties-customization"},"Properties Customization"),(0,o.kt)("p",null,"Enhance the ",(0,o.kt)("strong",{parentName:"p"},"Icon")," component to align with your application's requirements using the following customization options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(a.ZP.List,{align:"center"},(0,o.kt)(a.ZP.Item,{width:"50%"},(0,o.kt)("span",{style:{fontWeight:"bold"}},"Icon"),": Select the desired icon from a predefined list of icons."),(0,o.kt)(a.ZP.Item,{width:"35%"},(0,o.kt)("img",{alt:"explorer",src:n(59154).Z,style:{borderRadius:"6px",width:"60%"}}))))),(0,o.kt)("h2",{id:"data-binding"},"Data Binding"),(0,o.kt)("p",null,"When it comes to data-binding, it's important to note that the ",(0,o.kt)("strong",{parentName:"p"},"Icon")," component itself is not inherently data-bound. Unlike components like the ",(0,o.kt)("strong",{parentName:"p"},"DataTable")," that derive their content from specified datasources, the main purpose of the ",(0,o.kt)("strong",{parentName:"p"},"Icon")," component is to provide a visual representation."),(0,o.kt)("h2",{id:"triggers-and-events"},"Triggers and Events"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Icon")," component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Event"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On Click"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user clicks on the component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On Keyup"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when a keyboard key is released while the component is in focus")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On KeyDown"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when a keyboard key is pressed down while the component is in focus.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On MouseEnter"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor enters the area of the component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On MouseLeave"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor exits the area of the component.")))))}d.isMDXComponent=!0},59154:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/button_icon-b5859757b1356431be521f1c0bee2343.png"}}]);
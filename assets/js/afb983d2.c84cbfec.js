"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[7568],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",A={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(o),c=r,h=d["".concat(s,".").concat(c)]||d[c]||A[c]||i;return o?n.createElement(h,l(l({ref:t},u),{},{components:o})):n.createElement(h,l({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:r,l[1]=a;for(var p=2;p<i;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},98988:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const i={id:"settings",title:"Settings"},l=void 0,a={unversionedId:"studio/settings",id:"studio/settings",title:"Settings",description:"The Settings panel allows you to customize the Qodly Studio interface for the current user and the current application.",source:"@site/docs/studio/settings.md",sourceDirName:"studio",slug:"/studio/settings",permalink:"/docs/studio/settings",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/settings.md",tags:[],version:"current",frontMatter:{id:"settings",title:"Settings"},sidebar:"Develop",previous:{title:"Rendering a webform",permalink:"/docs/studio/rendering"},next:{title:"Coding",permalink:"/docs/studio/coding"}},s={},p=[{value:"User",id:"user",level:2},{value:"Show Renderer Pop Over",id:"show-renderer-pop-over",level:4},{value:"Tooltip Behavior",id:"tooltip-behavior",level:4},{value:"Tooltip timeout (in seconds)",id:"tooltip-timeout-in-seconds",level:4},{value:"Enable Helper Tips",id:"enable-helper-tips",level:4},{value:"Activate Welcome Tour",id:"activate-welcome-tour",level:4},{value:"Application",id:"application",level:2},{value:"Start Page",id:"start-page",level:4},{value:"Default Display Mode",id:"default-display-mode",level:4}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Settings panel allows you to customize the Qodly Studio interface for the current user and the current application. "),(0,r.kt)("p",null,"To open the Settings panel, click on the ",(0,r.kt)("strong",{parentName:"p"},"Settings")," button from the Explorer or the toolbar:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"settings",src:o(79407).Z,width:"94",height:"33"})),(0,r.kt)("p",null,"The following pages are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User"),": settings related to the user interface"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Application"),": settings related to the web application")),(0,r.kt)("h2",{id:"user"},"User"),(0,r.kt)("p",null,"This page contains settings related to the Qodly Studio user interface."),(0,r.kt)("h4",{id:"show-renderer-pop-over"},"Show Renderer Pop Over"),(0,r.kt)("p",null,"Displays or not a pop over when the renderer and the Studio use ",(0,r.kt)("a",{parentName:"p",href:"/docs/studio/configuration/license-usage#url-schemes"},"different URL schemes")," (which could lead to wrong licence counting)."),(0,r.kt)("h4",{id:"tooltip-behavior"},"Tooltip Behavior"),(0,r.kt)("p",null,"Defines how to display the ",(0,r.kt)("a",{parentName:"p",href:"/docs/studio/design-webforms/components/componentsBasics#tooltip"},"component tooltip")," ",(0,r.kt)("img",{alt:"tooltip",src:o(27064).Z,width:"117",height:"41"})," when the mouse hovers a component area."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Show after timeout"),": The tooltip is displayed after a the defined timeout (and kept onscreen until the user moves the mouse). "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hide after timeout"),": The tooltip is immediately displayed and hidden after a the defined timeout.")),(0,r.kt)("h4",{id:"tooltip-timeout-in-seconds"},"Tooltip timeout (in seconds)"),(0,r.kt)("p",null,"Timeout for selected tooltip behavior."),(0,r.kt)("h4",{id:"enable-helper-tips"},"Enable Helper Tips"),(0,r.kt)("p",null,"Shows or hides the tips icons ",(0,r.kt)("img",{alt:"helper",src:o(94819).Z,width:"17",height:"23"})," in the webform editor."),(0,r.kt)("h4",{id:"activate-welcome-tour"},"Activate Welcome Tour"),(0,r.kt)("p",null,"Enables or disables the display of the Welcome tour dialogs boxes that introduce you to the main features of the Qodly Studio.  "),(0,r.kt)("h2",{id:"application"},"Application"),(0,r.kt)("h4",{id:"start-page"},"Start Page"),(0,r.kt)("p",null,"Allows to select a webform to use as the start page of your application. "),(0,r.kt)("p",null,"The start page webform is automatically rendered when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"you click on the ",(0,r.kt)("strong",{parentName:"li"},"Preview")," button in the webform editor - the webform is rendered in a new tab."),(0,r.kt)("li",{parentName:"ul"},"you click on the ",(0,r.kt)("strong",{parentName:"li"},"Preview URL")," area in the Qodly Cloud dashboard of your application. ")),(0,r.kt)("h4",{id:"default-display-mode"},"Default Display Mode"),(0,r.kt)("p",null,"Allows to select the default mode for displaying multiple components in your webforms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Neutral")," (default): no specific margins are applied to components"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Airy"),": automatically incorporate default margins between components, for a better design. ")),(0,r.kt)("p",null,"The display mode can also be selected at the webform level."))}d.isMDXComponent=!0},94819:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAXCAYAAADtNKTnAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAC4SURBVDhPY7S3t//PQCFggtIUgVFDMAHtDVGQZgJjQgBrOrE2YmaI9WdhUFNgBPNvPfjPsHjjH4aj5/6C+egAwxoOdkaG7GiEASAAYoPEQHLYAIYhshKMDBIimIpBYiA5bADDkGevcOcCXHIYhnz9/p9h3wlMv4PEQHLYALOCgkIDlA0Hh878Y/gPhAaazGD+gvW/GSYv+QNmYwOE448IQPuiICOChSElhAXKww1GCyVMMFgMYWAAABpmL9tq7KKQAAAAAElFTkSuQmCC"},79407:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,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"},27064:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAApCAYAAAALSGYwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAOUSURBVHhe7ZnNTxNBGMYHU4kgpArGSqVFJRhMxMTGRE2MhkQ4yKWcuHjSv0tPXjzJhQs1wRA/E1MTxUhCwFiUCoFKQwVtm+g+05myuyyV7s5udsb5JW/mnd3tHvaZ92OmLX8MiEYpDrFRoxBaVAXRoiqIFlVBtKgK4tj97uz8IgtLy+RzboVsFrdItVpldzRhIBKJkGPRTnI2GScD5xKkre0Iu1Njj6jf8mtk7tMi+bqyyq5owkxvPEYuXugnp3tOsiu29IsI1YLKBbSCZtCOYxEVKVcLKh/QDNpxLKKihmrkxKydRVQ0RRo5MWtnaZQePJpk3v9L6tIguWyYmddvP5CP84tsFl7u303TsSX3fbMu6nRmhnneGehP0nFhMUdHL3R0tJOOo+1s1pjSz21SKm2zWfOMjw2TruNRNqsxOTVDNn4U2Sy8jI4M09GXSIWgN6+nqD/7KutZWKfo2Y937+dJ1jA3YPFMpEfZrAYWyeMn02wmjm62cEQuFh6pwk+UuKDlSoUafB61YacndoJ5u3xZzjNPHBA0bWQEGBdXJEJF5YIiOguFIjX4XoX9Xa7QEVGIbOJkuAe2jMhyS19vD/N2EVE+gkaYqGZBzR8CvldhCyxFnTIiCWnYbqC19TAdvdTTvoRVVKReP2op3ok67VetFiIqUoiToByzsF7SDdIj6usZ4+PHDZ8b8JrG7IICNGeoU9wmxq31NqwIERUpD6uuUarCPTzjJj3afzNnbC+mMs/rZsbtyneqp3bcNmB2pKipZaPmHeRj4hk82yz2lJoaGiR3Rm5Qu3ZliF5D5wrcvB84RaoZ7FMbLdowIbRRCgI0Rfm1dRpZMF5LD7qP3Q8ciqPZgi0sWcVDTccBhCikqKlBwJslgDSIGg0zp0TzM82CSMS7YBtG187Btsye4sOONKLytHr71lW69civrlODj2vAbeq1c97UpT999kbYezlS1NQgQe1DHcXJDwz+v+phM6A282NCpFwsHNmQRlR+qO6UYnEN90TUPd4F4yTJr0N8v2uqb//SIHqQtvxY6Ygm/vHxfi8HDnaQyjuN96OOik67fuPb2S8HK92v1AURsb2AiRQUdHdFyezLrHSCmpGupvoN/pHxIyUGiRZVQbSoCqJFVRAtqoLURU0+ZI5GWjLsyLq+T4WoL8bk7vo0NfaImoiJP4vUBEs9/ebuMUcjPbpRUhDdKCmIjlQF0aIqByF/Ad1D7wa5ecmMAAAAAElFTkSuQmCC"}}]);
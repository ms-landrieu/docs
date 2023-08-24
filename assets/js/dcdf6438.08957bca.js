"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[2940],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return o?r.createElement(f,l(l({ref:t},d),{},{components:o})):r.createElement(f,l({ref:t},d))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},17115:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={id:"model-overview",title:"Qodly Model"},l=void 0,i={unversionedId:"studio/model/model-overview",id:"studio/model/model-overview",title:"Qodly Model",description:"The structure of your project is called the Data Model. In Qodly, following the ORDA concepts, the data model includes the datastore, the datastore classes and their attributes (scalar, related, alias, calculated), as well as their functions.",source:"@site/docs/studio/model/model-overview.md",sourceDirName:"studio/model",slug:"/studio/model/model-overview",permalink:"/docs/studio/model/model-overview",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/model/model-overview.md",tags:[],version:"current",frontMatter:{id:"model-overview",title:"Qodly Model"},sidebar:"Studio",previous:{title:"Overview",permalink:"/docs/studio/overview"},next:{title:"Model Editor",permalink:"/docs/studio/model/model-editor-interface"}},s={},c=[],d={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The structure of your project is called the Data Model. In Qodly, following the ",(0,n.kt)("a",{parentName:"p",href:"../../concepts/platforms.md#the-orda-concept"},"ORDA concepts"),", the data model includes the datastore, the datastore classes and their attributes (scalar, related, alias, calculated), as well as their functions.  "),(0,n.kt)("p",null,"Included in the model view are also the permissions, allowing you to assign access right at any level of the model (datastore, dataclass, attributes and functions)."),(0,n.kt)("p",null,"By default in blank applications, the model does not contain any default dataclasses; you have to create the dataclasses. "),(0,n.kt)("p",null,"You access your current project's model in the ",(0,n.kt)("strong",{parentName:"p"},"Model Editor")," by double-clicking on ",(0,n.kt)("img",{alt:"alt-text",src:o(17537).Z,width:"53",height:"23"})," in your project's sidebar."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can zoom out on your project's model to view the whole structure of the dataclasses it contains; or zoom in to get a\nclearer view of a specific dataclass.")))}u.isMDXComponent=!0},17537:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAXCAYAAACrggdNAAACtElEQVRYhe2Wz2uScRzHX24+onOb2xTc07DDxtjBg+FlQUMXKEHHLt7Eyw52iq7FDqP+gCAK8hLeBtExig0SoYMEy2ARIhMq5qNkmk33w2exDo+/HqfbYgub7AUPPM/78/08z+f9fJ/Ph0fjdrsP6DH6ul3Av+DC1HmhJ01pAbLXH1K2XVMFjN/eYX17rytFnRYtQH9JQnxzRxUoX57rSkFngWKqUsKQjasCu+NXulLQWaAF+K0bZMfqUAV+6wbr5wVH4JBJfSbO6MfnbW4ZJOf3QWweS6JJngmRmgVreAHjicsLkrslYnq5iNBpyUyI9Mgyl2KrdakPYOTzC0DD3ug0e6PTgKaqKVTGFK35ULQOSEmwLyHXBQ9Fuxl96cRuToUWQFvKoC1lgNpnd4BstCIbrQAIxS+MrT1TJRYcgSNuu4Zhy8u2BUw5wOJC3lzBOOFsLJkJkZqtvZhkYwctS6RvutgFkJIMI9VTyt4IWVE5H279EppQjXRDNo4+E6d1V/6aIRHdh3XkKQ8A8pSIsJFsWhAkZ5ewheeZDM8z+Uqi6A0CHoouEVNN/wq/ml5ClmVFDz9AsIcod3i8Fo7vmf3BcQqOAPuGMSVpJ1/f2Y7kogguH2Wm2ZmQMMVguxaziFS2pEaf5CR0QyIyICMxUNMTawzbla2RR8wg+kj5fdVgHrPlCFONnmnQ3DNDG68BKNvm6GszKduzysDmbYpeJ3xaQMDTZLhhQlCZTCLgpNKsV1OEnz/QJ56oBgIA5g6mdPnkoUn2/epdpBuPVFp/ScLy/vEJDFULia2A34lhpTXyFEt0ibQ/ovQOSazhRQBMURdpf4QsQCmPnnUlJbGAyRsh5b+vXJei2DpMRY3b7T4oOAKHTLXTzgv16dc6zY7tmf8YLTR6plfoyb/0C1PnhQtT54U/QlDmILEuZcUAAAAASUVORK5CYII="}}]);
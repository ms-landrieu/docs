"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var o=n(87462),r=(n(67294),n(3905));const a={id:"overview",title:"Overview"},i=void 0,l={unversionedId:"customComponent/overview",id:"customComponent/overview",title:"Overview",description:"Qodly introduces the concept of Custom Components, empowering developers to extend the capabilities of the platform and tailor webforms to their specific needs.",source:"@site/docs/customComponent/overview.md",sourceDirName:"customComponent",slug:"/customComponent/overview",permalink:"/docs/customComponent/overview",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/customComponent/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Overview"},sidebar:"ReactComponent",next:{title:"Project Setup",permalink:"/docs/customComponent/setup"}},s={},m=[{value:"What Are Custom Components?",id:"what-are-custom-components",level:2},{value:"Benefits of Custom Components",id:"benefits-of-custom-components",level:2},{value:"Key Distinctions from Built-in Components",id:"key-distinctions-from-built-in-components",level:2},{value:"Community Custom Components",id:"community-custom-components",level:2}],p={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Qodly introduces the concept of ",(0,r.kt)("strong",{parentName:"p"},"Custom Components"),", empowering developers to extend the capabilities of the platform and tailor webforms to their specific needs."),(0,r.kt)("h2",{id:"what-are-custom-components"},"What Are Custom Components?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Custom Components")," user-created building blocks developed to address unique requirements or introduce specific features not covered by the default set of Qodly built-in components. These components are crafted using React, providing a flexible and powerful foundation for developers."),(0,r.kt)("h2",{id:"benefits-of-custom-components"},"Benefits of Custom Components"),(0,r.kt)("p",null,"The integration of Custom Components into Qodly Studio offers a range of advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Extensibility"),": Tailor webforms precisely to meet specific project requirements, providing a flexible and customizable solution.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Reusability"),": Share Custom Components seamlessly across diverse projects or within the Qodly community. This fosters collective enhancement and collaboration among developers.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Efficiency"),": Enhance development efficiency by utilizing pre-built Custom Components. This approach streamlines the development process, reducing time and costs associated with building components from scratch."))),(0,r.kt)("h2",{id:"key-distinctions-from-built-in-components"},"Key Distinctions from Built-in Components"),(0,r.kt)("p",null,"While Qodly Studio offers a variety of built-in components, Custom Components provide developers with the freedom to design and implement functionalities tailored to their projects. Key distinctions include:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Aspect")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Built-in Components")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Custom Components")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Ease of Use")),(0,r.kt)("td",{parentName:"tr",align:null},"Easily accessible through drag-and-drop functionality."),(0,r.kt)("td",{parentName:"tr",align:null},"Requires manual development and implementation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Customization")),(0,r.kt)("td",{parentName:"tr",align:null},"Covers common use cases."),(0,r.kt)("td",{parentName:"tr",align:null},"Enables fine-tuning and specific adaptations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Unique Features")),(0,r.kt)("td",{parentName:"tr",align:null},"Offers a standard set of features."),(0,r.kt)("td",{parentName:"tr",align:null},"Introduces new features or variations beyond the standard set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Tailored Appearance")),(0,r.kt)("td",{parentName:"tr",align:null},"Standardized visual design."),(0,r.kt)("td",{parentName:"tr",align:null},"Developers have full control over visual design for cohesive integration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Performance")),(0,r.kt)("td",{parentName:"tr",align:null},"Managed for optimal performance."),(0,r.kt)("td",{parentName:"tr",align:null},"Performance depends on Qodler practices and maintenance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Long-Term Advancement")),(0,r.kt)("td",{parentName:"tr",align:null},"Regularly updated and managed internally."),(0,r.kt)("td",{parentName:"tr",align:null},"Relies on the Qodler for updates, maintenance, and best practices adherence.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Deprecation Risk")),(0,r.kt)("td",{parentName:"tr",align:null},"No risk of deprecation."),(0,r.kt)("td",{parentName:"tr",align:null},"Risk depends on Qodler's commitment to maintaining the component.")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Custom components are managed in Qodly Studio to match the performance of built-in components, mitigating any potential drawbacks associated with response and interaction times.")),(0,r.kt)("h2",{id:"community-custom-components"},"Community Custom Components"),(0,r.kt)("p",null,"The growing Qodly developer community creates amazing custom components and makes them available online for free download. If you want to share your custom components with the community, please contribute on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/qodly/custom-components"},(0,r.kt)("strong",{parentName:"a"},"Custom Components for Qodly Studio"))," page."))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[5966],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(g,o(o({ref:e},s),{},{components:n})):a.createElement(g,o({ref:e},s))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[d]="string"==typeof t?t:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45354:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={id:"getStarted",title:"Qodly Applications"},o=void 0,i={unversionedId:"cloud/getStarted",id:"cloud/getStarted",title:"Qodly Applications",description:"The Qodly Cloud Management Console (QCMC) is the portal from which you can manage all your Qodly applications.",source:"@site/docs/cloud/getStarted.md",sourceDirName:"cloud",slug:"/cloud/getStarted",permalink:"/docs/cloud/getStarted",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/cloud/getStarted.md",tags:[],version:"current",frontMatter:{id:"getStarted",title:"Qodly Applications"},sidebar:"Run",next:{title:"Application Management",permalink:"/docs/cloud/application-management"}},p={},c=[{value:"Application list",id:"application-list",level:2},{value:"Environments and services",id:"environments-and-services",level:2},{value:"Clone your applications",id:"clone-your-applications",level:2}],s={toc:c};function d(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Qodly Cloud Management Console (QCMC) is the portal from which you can manage all your Qodly applications. "),(0,r.kt)("h2",{id:"application-list"},"Application list"),(0,r.kt)("p",null,"Once you are ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/quickstart"},"logged to your Qodly account"),", the QCMC displays all your Qodly applications in a single page:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"console",src:n(4069).Z,width:"1326",height:"643"})),(0,r.kt)("p",null,"There are three kinds of Qodly applications:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sandbox"),": This is your trial application, where you can let your imagination run wild and experiment with all Qodly's features. This application is only available in the ",(0,r.kt)("a",{parentName:"li",href:"/docs/concepts/platform#environments-and-services"},"development environment"),". "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Applications"),": This area lists all the applications that you have created (except the Sandbox)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Shared Applications"),": This area lists all the applications created by other developers that they have shared with you (through invitations).")),(0,r.kt)("h2",{id:"environments-and-services"},"Environments and services"),(0,r.kt)("p",null,"For every application, ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/platform#qodly-server"},"Qodly Server")," is deployed on three different instances\u202fcalled ",(0,r.kt)("strong",{parentName:"p"},"environments"),": "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"development"),": in this environment, developers can create, design, improve their Qodly application"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"staging"),": in this environment, developers, product managers, or quality team can test the application and its features in a configuration similar to the production environment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"production"),": in this environment, users can connect and use your final application. ")),(0,r.kt)("p",null,"Each environment proposes different services:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Development"),(0,r.kt)("th",{parentName:"tr",align:null},"Staging"),(0,r.kt)("th",{parentName:"tr",align:null},"Production"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Access to Qodly Studio"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Invite developers"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Invite users"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Backup and Restore"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Updates"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")))),(0,r.kt)("h2",{id:"clone-your-applications"},"Clone your applications"),(0,r.kt)("p",null,"Instead of starting from scratch, you can clone any of your applications and start a new project based on the same code. "),(0,r.kt)("p",null,"To clone an application, click on the ",(0,r.kt)("strong",{parentName:"p"},"Clone")," button in the Apps list:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"clone",src:n(64893).Z,width:"1467",height:"139"})),(0,r.kt)("p",null,"The cloning feature duplicates all your code except your data and resources."))}d.isMDXComponent=!0},64893:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/clone-43f1ea8fcbb27fe326c1c6a99d10e286.png"},4069:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/console-4afeddcc371981d992a83beaeaf80fba.png"}}]);
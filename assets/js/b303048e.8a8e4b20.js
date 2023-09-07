"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[9893],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(o),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return o?n.createElement(h,i(i({ref:t},d),{},{components:o})):n.createElement(h,i({ref:t},d))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},37256:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const a={id:"application-management",title:"Application Management"},i=void 0,l={unversionedId:"cloud/application-management",id:"cloud/application-management",title:"Application Management",description:"When you click on an application in the Apps list, you open its dedicated panel. You can view the status of every environment:",source:"@site/docs/cloud/application-management.md",sourceDirName:"cloud",slug:"/cloud/application-management",permalink:"/docs/cloud/application-management",draft:!1,editUrl:"https://github.com/qodly/docs/edit/main/docs/cloud/application-management.md",tags:[],version:"current",frontMatter:{id:"application-management",title:"Application Management"},sidebar:"Run",previous:{title:"Qodly Applications",permalink:"/docs/cloud/getStarted"},next:{title:"Release Management and Deployment",permalink:"/docs/cloud/deployment"}},s={},p=[{value:"Stop or restart Qodly Server",id:"stop-or-restart-qodly-server",level:2},{value:"Go to Qodly Studio",id:"go-to-qodly-studio",level:2},{value:"Monitor your resources",id:"monitor-your-resources",level:2},{value:"Update your Qodly Server",id:"update-your-qodly-server",level:2},{value:"Invite other developers or users",id:"invite-other-developers-or-users",level:2},{value:"Schedule and restore your backups",id:"schedule-and-restore-your-backups",level:2},{value:"Preview your app",id:"preview-your-app",level:2},{value:"Add custom domain",id:"add-custom-domain",level:2},{value:"Access to your files through sftp",id:"access-to-your-files-through-sftp",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you click on an application in the Apps list, you open its dedicated panel. You can view the status of every ",(0,r.kt)("a",{parentName:"p",href:"/docs/cloud/getStarted#environments-and-services"},"environment"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"app",src:o(86091).Z,width:"1488",height:"218"})),(0,r.kt)("p",null,"Click on the left side tabs to control your apps individually for every environment. "),(0,r.kt)("h2",{id:"stop-or-restart-qodly-server"},"Stop or restart Qodly Server"),(0,r.kt)("p",null,"This action can be useful to reset the Server memory. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"app",src:o(84871).Z,width:"1209",height:"167"})),(0,r.kt)("h2",{id:"go-to-qodly-studio"},"Go to Qodly Studio"),(0,r.kt)("p",null,"You can directly open your application instance in Qodly Studio (",(0,r.kt)("strong",{parentName:"p"},"Development")," and ",(0,r.kt)("strong",{parentName:"p"},"Staging")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/cloud/getStarted#environments-and-services"},"environments")," only):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Studio")," button in the Overview page")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"studio",src:o(36136).Z,width:"1237",height:"283"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Or,  click on the "Studio URL" in the ',(0,r.kt)("strong",{parentName:"li"},"General")," tab for the open environment:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"studio",src:o(54064).Z,width:"1464",height:"795"})),(0,r.kt)("h2",{id:"monitor-your-resources"},"Monitor your resources"),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Metrics")," tab of an environment to monitor the resources for this environment: "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"metrics",src:o(27255).Z,width:"1372",height:"699"})),(0,r.kt)("h2",{id:"update-your-qodly-server"},"Update your Qodly Server"),(0,r.kt)("p",null,"Click on the cloud icon to update your Qodly Server with latest updates provided by Qodly Platform:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"update",src:o(39163).Z,width:"391",height:"211"})),(0,r.kt)("h2",{id:"invite-other-developers-or-users"},"Invite other developers or users"),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Team")," tab to display the list of developers and users who are registered to the application. "),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Add user")," button to invite users:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"invite",src:o(30544).Z,width:"1474",height:"710"})),(0,r.kt)("p",null,'For every user, you need to provide their "First Name", "Last Name", "Email address", and "Profile". The Profile is a Role you ',(0,r.kt)("a",{parentName:"p",href:"/docs/studio/roles/rolesPrivilegesOverview"},"defined in the application with Qodly Studio"),". "),(0,r.kt)("h2",{id:"schedule-and-restore-your-backups"},"Schedule and restore your backups"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"backup",src:o(52393).Z,width:"1474",height:"708"})),(0,r.kt)("h2",{id:"preview-your-app"},"Preview your app"),(0,r.kt)("p",null,"In the Application Access area, click on the ",(0,r.kt)("strong",{parentName:"p"},"Preview URL")," to open the ",(0,r.kt)("a",{parentName:"p",href:"/docs/studio/settings#start-page"},"home page")," of your application."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"publish",src:o(80141).Z,width:"1105",height:"161"})),(0,r.kt)("h2",{id:"add-custom-domain"},"Add custom domain"),(0,r.kt)("p",null,"Per app, you can add your domain to be validated by your DNS. All the information will be provided by QCMC."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"publish",src:o(80141).Z,width:"1105",height:"161"})),(0,r.kt)("h2",{id:"access-to-your-files-through-sftp"},"Access to your files through sftp"),(0,r.kt)("p",null,"For every environment, you can access to your files on the server using the ",(0,r.kt)("strong",{parentName:"p"},"Secure File Transfer Protocol")," (sftp). You just need to click on the ",(0,r.kt)("strong",{parentName:"p"},"Access files")," button:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"access-files",src:o(55819).Z,width:"955",height:"215"})),(0,r.kt)("p",null,"With your favorite ftp client (Filezilla for instance), you can access and manage your files."))}c.isMDXComponent=!0},86091:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/app1-f49d641b0bde28d21118934ce492a3a6.png"},84871:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/app2-d67adef328cd38759d17db21e9921dc3.png"},52393:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/backup-b004aca2c33050a694487f50403e34db.png"},30544:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/invite1-0fe2fde8bdd7206a7da3110ff74a69b6.png"},27255:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/metrics-f22b686647943ab1b2e27015114192ad.png"},80141:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/publish-8c1edb973129e15f03bb139a20689f4c.png"},55819:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/sftp-54729870b772db8819d2403f3992560e.png"},36136:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/studio1-d4e86e71009c4ef29d6507aff3e03e2c.png"},54064:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/studio2-923d4b7c625055f0b2baf3815ddd1036.png"},39163:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/update-4b927127ba0d71b5974f0d14a11a2030.png"}}]);
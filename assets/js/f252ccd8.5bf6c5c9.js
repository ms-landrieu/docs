"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[8967],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>A});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,A=u["".concat(d,".").concat(h)]||u[h]||c[h]||a;return n?r.createElement(A,o(o({ref:t},p),{},{components:n})):r.createElement(A,o({ref:t},p))}));function A(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},52203:(e,t,n)=>{n.d(t,{ZP:()=>a});var r=n(67294),i=n(86010);const a={List:function(e){let{children:t,align:n="start",justifyContent:a="start"}=e;return r.createElement("div",{className:(0,i.Z)("flex flex-col lg:flex-row flex-wrap",{"items-start":"start"===n,"items-center":"center"===n,"items-end":"end"===n},{"justify-start":"start"===a,"justify-center":"center"===a,"justify-end":"end"===a,"justify-between":"between"===a,"justify-around":"around"===a,"justify-evenly":"evenly"===a})},t)},Item:function(e){let{children:t,width:n}=e;const a=(e=>{const t="undefined"!=typeof window&&window.matchMedia(e),[n,i]=(0,r.useState)(t.matches);return(0,r.useEffect)((()=>(t.onchange=e=>i(e.matches),()=>t.onchange=null))),n})("(max-width: 1024px)");return r.createElement("div",{className:(0,i.Z)({"flex-1":!n}),style:a?{}:{width:n}},t)}}},92938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var r=n(87462),i=(n(67294),n(3905)),a=n(52203);const o={id:"rendering",title:"Webform Rendering"},s=void 0,d={unversionedId:"studio/rendering",id:"studio/rendering",title:"Webform Rendering",description:"The concept of rendering plays a fundamental role in bringing digital interfaces to life. However, Qodly Studio has a unique approach to rendering that sets it apart from traditional methods.",source:"@site/docs/studio/rendering.md",sourceDirName:"studio",slug:"/studio/rendering",permalink:"/docs/studio/rendering",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/rendering.md",tags:[],version:"current",frontMatter:{id:"rendering",title:"Webform Rendering"},sidebar:"Develop",previous:{title:"Styles Library",permalink:"/docs/studio/design-webforms/styling"},next:{title:"Settings",permalink:"/docs/studio/settings"}},l={},p=[{value:"What is Rendering?",id:"what-is-rendering",level:2},{value:"Understanding the Qodly Approach",id:"understanding-the-qodly-approach",level:2},{value:"Runtime Rendering",id:"runtime-rendering",level:2},{value:"Unique Webform URLs",id:"unique-webform-urls",level:2},{value:"Data Flow and Server Architecture",id:"data-flow-and-server-architecture",level:2},{value:"Webform Rendering Options",id:"webform-rendering-options",level:2},{value:"Preview in the Studio",id:"preview-in-the-studio",level:3},{value:"Preview in a Browser Window",id:"preview-in-a-browser-window",level:3},{value:"Preview Webform in a New Tab",id:"preview-webform-in-a-new-tab",level:4},{value:"Preview the Entire Site",id:"preview-the-entire-site",level:4}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The concept of rendering plays a fundamental role in bringing digital interfaces to life. However, Qodly Studio has a unique approach to rendering that sets it apart from traditional methods."),(0,i.kt)("h2",{id:"what-is-rendering"},"What is Rendering?"),(0,i.kt)("p",null,"At its core, rendering represents the pivotal stage where the abstract blueprint of a digital interface takes its final form. It encompasses the intricate process of translating design layouts, data connections, and interactive behaviors into a visually appealing and functional user interface that end-users can interact with."),(0,i.kt)("h2",{id:"understanding-the-qodly-approach"},"Understanding the Qodly Approach"),(0,i.kt)("p",null,"In the case of Qodly Studio, rendering takes a different path compared to conventional web development. Here's how it works:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Design and Configuration"),": Users initiate the webform creation process within ",(0,i.kt)("strong",{parentName:"p"},"Qodly Studio")," by arranging components, mapping datasources to these components, and configuring event-driven behaviors. This design phase captures the form's layout and desired functionality.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"JSON Representation"),": Instead of generating conventional HTML code, ",(0,i.kt)("strong",{parentName:"p"},"Qodly Studio")," encapsulates the entire webform, including layout, data connections, and event-driven logic, in a structured JSON file. This JSON file serves as the representation of the webform.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Rendering Trigger"),': Accessing the webform directly in a web browser is not an option. Instead, the webform is "',(0,i.kt)("strong",{parentName:"p"},"rendered"),'" when users initiate the rendering process, which can be done in one of two ways:'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Preview in the Studio"),": Users have the option to ",(0,i.kt)("a",{parentName:"p",href:"#preview-in-the-studio"},"preview the webform within the Qodly Studio interface"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Dedicated Browser Tab"),": Alternatively, users can opt to ",(0,i.kt)("a",{parentName:"p",href:"#preview-in-a-browser-window"},"render the webform in a separate browser tab"),"."))))),(0,i.kt)("p",null,"When a webform is rendered for the end user, what is returned is the final HTML code and CSS that represent the webform's visual appearance and functionality."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The webform is transformed into an HTML/CSS representation that can be displayed and interacted with in a web browser. JSON is used internally for data representation and configuration but is not what the end user receives when viewing the webform.")),(0,i.kt)("h2",{id:"runtime-rendering"},"Runtime Rendering"),(0,i.kt)("p",null,"At ",(0,i.kt)("strong",{parentName:"p"},"runtime"),", webforms are generated and interpreted by the built-in renderer engine. This engine takes the JSON representation and transforms it into a functional, interactive form that end-users can engage with."),(0,i.kt)("h2",{id:"unique-webform-urls"},"Unique Webform URLs"),(0,i.kt)("p",null,"Crucially, each webform is assigned a ",(0,i.kt)("strong",{parentName:"p"},"unique URL")," on the Qodly Web server. These URLs serve as access points for end-users to interact with and render the webforms they require."),(0,i.kt)("h2",{id:"data-flow-and-server-architecture"},"Data Flow and Server Architecture"),(0,i.kt)("p",null,"The flow of data within the Qodly Studio ecosystem is carefully orchestrated, ensuring a seamless rendering experience:"),(0,i.kt)("img",{alt:"explorer",src:n(42240).Z,style:{borderRadius:"6px"}}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Qodly Studio operates with an embedded Studio web server, providing secure web access. Users can conveniently preview webforms within the protected confines of Qodly Studio.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Additionally, the Qodly web server functions as a REST server, facilitating communication between the rendering engine and the web server through REST requests.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After deployment, webforms become readily accessible to end-users, who can render and interact with them directly in their web browsers."))),(0,i.kt)("h2",{id:"webform-rendering-options"},"Webform Rendering Options"),(0,i.kt)("p",null,"Rendering a webform in Qodly Studio provides versatile control and accessibility. You can preview it in the Studio or a separate browser window, but It's important to note that:"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Database resource access control depends on the chosen rendering method.")),(0,i.kt)("h3",{id:"preview-in-the-studio"},"Preview in the Studio"),(0,i.kt)(a.ZP.List,{align:"center",justifyContent:"between"},(0,i.kt)(a.ZP.Item,{width:"75%"},"This option enables you to render the current page directly within the webform editor window. Here, the webform is rendered by the Qodly Studio's embedded web server. ",(0,i.kt)("br",null),(0,i.kt)("br",null),"This approach provides a comprehensive view of data classes, functions, and attributes, even if they are not exposed as REST resources."),(0,i.kt)(a.ZP.Item,{width:"20%"},(0,i.kt)("img",{alt:"explorer",src:n(23842).Z,style:{borderRadius:"6px",height:"70%",width:"70%"}}))),(0,i.kt)("br",null),(0,i.kt)("p",null,"Please keep in mind that:"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This preview is conducted with ",(0,i.kt)("strong",{parentName:"p"},"Administrative")," privileges, utilizing the ",(0,i.kt)("strong",{parentName:"p"},"Admin")," account you registered with. To conduct a preview based on a specific user's perspective, explore the options for ",(0,i.kt)("strong",{parentName:"p"},"Previewing in a new tab")," or ",(0,i.kt)("strong",{parentName:"p"},"Previewing the entire site"),".")),(0,i.kt)("h3",{id:"preview-in-a-browser-window"},"Preview in a Browser Window"),(0,i.kt)("p",null,"You have the flexibility to render the current webform or the entire website in a browser window. In both scenarios, the webform is rendered by the Qodly web renderer engine. This engine diligently applies ",(0,i.kt)("strong",{parentName:"p"},"REST resource restrictions and permission actions")," defined in your Qodly project, ensuring that only exposed resources are rendered in the browser."),(0,i.kt)("p",null,"It's worth noting that:"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This preview operates under the logged-in user's privileges. During your initial preview or when your session expires, your browser will prompt you to log in with a Qodly user account, utilizing this account's privileges for rendering your application.")),(0,i.kt)("h4",{id:"preview-webform-in-a-new-tab"},"Preview Webform in a New Tab"),(0,i.kt)(a.ZP.List,{align:"center",justifyContent:"between"},(0,i.kt)(a.ZP.Item,{width:"75%"},"This option allows you to display the current webform in a browser window tab, offering a convenient way to assess its appearance and functionality."),(0,i.kt)(a.ZP.Item,{width:"20%"},(0,i.kt)("img",{alt:"explorer",src:n(82294).Z,style:{borderRadius:"6px",height:"70%",width:"70%"}}))),(0,i.kt)("h4",{id:"preview-the-entire-site"},"Preview the Entire Site"),(0,i.kt)(a.ZP.List,{align:"center",justifyContent:"between"},(0,i.kt)(a.ZP.Item,{width:"75%"},"The ",(0,i.kt)("code",null,"Preview")," button on the Qodly toolbar presents the start page, as ",(0,i.kt)("a",{href:"settings#application"},"defined in the Settings")," within a browser window tab. This option provides a holistic view of the application's initial landing page."),(0,i.kt)(a.ZP.Item,{width:"20%"},(0,i.kt)("img",{alt:"explorer",src:n(50700).Z,style:{borderRadius:"6px",height:"70%",width:"70%"}}))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you click on the ",(0,i.kt)("strong",{parentName:"p"},"Preview")," button while there are unsaved changes in your forms, they will not be taken into account for the rendering. A pop over warns you about it:"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"preview-pop-over",src:n(54542).Z,width:"291",height:"210"})),(0,i.kt)("p",{parentName:"admonition"},'You can disable this pop over display by selecting the "Memorize..." option at the bottom of the window. You can also control the option through the ',(0,i.kt)("a",{parentName:"p",href:"/docs/studio/settings#show-unsaved-files-pop-over"},(0,i.kt)("strong",{parentName:"a"},"Show Unsaved Files Pop Over")," user settings option"),".")))}c.isMDXComponent=!0},23842:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/preview-ide-a4422f5129d4c73243fea791f3ac2f52.png"},50700:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},82294:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/preview-tab-1bc544896c7ce9d719322cb74aad72a2.png"},42240:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/workflow-de3b6a743da903cd3ad846ac3823beee.png"},54542:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/preview-pop-a56b93543d85363e1b355e8919afed2b.png"}}]);
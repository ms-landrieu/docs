"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[2727],{3905:(e,t,A)=>{A.d(t,{Zo:()=>c,kt:()=>h});var n=A(67294);function a(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function r(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function o(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?r(Object(A),!0).forEach((function(t){a(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):r(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function l(e,t){if(null==e)return{};var A,n,a=function(e,t){if(null==e)return{};var A,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)A=r[n],t.indexOf(A)>=0||(a[A]=e[A]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)A=r[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(a[A]=e[A])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),A=t;return e&&(A="function"==typeof e?e(t):o(o({},t),e)),A},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var A=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(A),d=a,h=p["".concat(i,".").concat(d)]||p[d]||g[d]||r;return A?n.createElement(h,o(o({ref:t},c),{},{components:A})):n.createElement(h,o({ref:t},c))}));function h(e,t){var A=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=A.length,o=new Array(r);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=A[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,A)}d.displayName="MDXCreateElement"},52203:(e,t,A)=>{A.d(t,{ZP:()=>r});var n=A(67294),a=A(86010);const r={List:function(e){let{children:t,align:A="start",justifyContent:r="start"}=e;return n.createElement("div",{className:(0,a.Z)("flex flex-col lg:flex-row flex-wrap",{"items-start":"start"===A,"items-center":"center"===A,"items-end":"end"===A},{"justify-start":"start"===r,"justify-center":"center"===r,"justify-end":"end"===r,"justify-between":"between"===r,"justify-around":"around"===r,"justify-evenly":"evenly"===r})},t)},Item:function(e){let{children:t,width:A}=e;const r=(e=>{const t="undefined"!=typeof window&&window.matchMedia(e),[A,a]=(0,n.useState)(t.matches);return(0,n.useEffect)((()=>(t.onchange=e=>a(e.matches),()=>t.onchange=null))),A})("(max-width: 1024px)");return n.createElement("div",{className:(0,a.Z)({"flex-1":!A}),style:r?{}:{width:A}},t)}}},54938:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=A(87462),a=(A(67294),A(3905)),r=A(52203);const o={id:"checkbox",title:"Checkbox"},l=void 0,i={unversionedId:"studio/design-webforms/components/checkbox",id:"studio/design-webforms/components/checkbox",title:"Checkbox",description:"The Checkbox component is a UI element designed for binary selections. It consists of a small box that can be checked (selected) or unchecked (deselected) by the user.",source:"@site/docs/studio/design-webforms/components/checkbox.md",sourceDirName:"studio/design-webforms/components",slug:"/studio/design-webforms/components/checkbox",permalink:"/docs/studio/design-webforms/components/checkbox",draft:!1,editUrl:"https://github.com/qodly/docs/edit/main/docs/studio/design-webforms/components/checkbox.md",tags:[],version:"current",frontMatter:{id:"checkbox",title:"Checkbox"},sidebar:"Develop",previous:{title:"Icon",permalink:"/docs/studio/design-webforms/components/icon"},next:{title:"Crafted components",permalink:"/docs/studio/design-webforms/craftedComponents"}},s={},c=[{value:"Use Cases",id:"use-cases",level:2},{value:"Properties Customization",id:"properties-customization",level:2},{value:"Checkbox Component",id:"checkbox-component",level:3},{value:"Embedded Label",id:"embedded-label",level:3},{value:"Data Integration",id:"data-integration",level:2},{value:"Data Binding",id:"data-binding",level:3},{value:"Server-Side Interaction",id:"server-side-interaction",level:3},{value:"Triggers and Events",id:"triggers-and-events",level:2},{value:"Checkbox Component",id:"checkbox-component-1",level:3},{value:"Embedded Label",id:"embedded-label-1",level:3}],p={toc:c};function g(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Checkbox")," component is a UI element designed for binary selections. It consists of a small box that can be checked (selected) or unchecked (deselected) by the user. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("strong",{parentName:"p"},"Checkbox")," component contains an embedded ",(0,a.kt)("strong",{parentName:"p"},"Checkbox Input")," and a ",(0,a.kt)("strong",{parentName:"p"},"Label")," element. This is of great importance as configuring the ",(0,a.kt)("strong",{parentName:"p"},"Checkbox")," component may require adjusting properties within the embedded elements. This applies to the visual style, triggers, and actions as they may differ.")),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Checkbox")," component serve various purposes in user interfaces, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Feature Control"),": Enable/disable features.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Preference Indication"),": Reflect user preferences.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Agree/Disagree Choices"),": Obtain user consent."))),(0,a.kt)("h2",{id:"properties-customization"},"Properties Customization"),(0,a.kt)("h3",{id:"checkbox-component"},"Checkbox Component"),(0,a.kt)("p",null,"Enhance the ",(0,a.kt)("strong",{parentName:"p"},"Checkbox")," component to align with your application's requirements using the following customization options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,a.kt)(r.ZP.Item,{width:"60%"},(0,a.kt)("span",{style:{fontWeight:"bold"}},"Label Position"),": Developers can tailor the label's position, placing it above, below, to the left, to the right, or even hidden."),(0,a.kt)(r.ZP.Item,{width:"35%"},(0,a.kt)("img",{alt:"explorer",src:A(89430).Z,style:{borderRadius:"6px"}}))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Variant Selection"),": Choose the variant that aligns with your design:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,a.kt)(r.ZP.Item,{width:"60%"},(0,a.kt)("li",null,(0,a.kt)("span",{style:{fontWeight:"bold"}},"Checkbox Variant"),": Select this for the standard checkbox style. "),(0,a.kt)("br",null),(0,a.kt)("li",null,(0,a.kt)("span",{style:{fontWeight:"bold"}},"Switch Variant"),": Choose this for a switch-like appearance. ")),(0,a.kt)(r.ZP.Item,{width:"35%"},(0,a.kt)("img",{alt:"explorer",src:A(76566).Z,style:{borderRadius:"6px"}})))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,a.kt)(r.ZP.Item,{width:"60%"},(0,a.kt)("span",{style:{fontWeight:"bold"}},"Size"),": Choose from small, medium, or large sizes for the Checkbox component."),(0,a.kt)(r.ZP.Item,{width:"34%"},(0,a.kt)("img",{alt:"explorer",src:A(51383).Z,style:{borderRadius:"6px"}}))))),(0,a.kt)("h3",{id:"embedded-label"},"Embedded Label"),(0,a.kt)("p",null,"Within the ",(0,a.kt)("strong",{parentName:"p"},"Checkbox")," component, an embedded ",(0,a.kt)("strong",{parentName:"p"},"Label")," allows for further customization of the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,a.kt)(r.ZP.Item,{width:"60%"},(0,a.kt)("span",{style:{fontWeight:"bold"}},"Label"),": Personalize the label to offer clear instructions or guidance."),(0,a.kt)(r.ZP.Item,{width:"35%"},(0,a.kt)("img",{alt:"explorer",src:A(229).Z,style:{borderRadius:"6px"}}))))),(0,a.kt)("h2",{id:"data-integration"},"Data Integration"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Checkbox")," component allows for seamless integration of datasources, enabling dynamic data binding and interaction within the webform."),(0,a.kt)("h3",{id:"data-binding"},"Data Binding"),(0,a.kt)("p",null,"To associate data with the Checkbox component, follow these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Navigate to the Properties Panel"),": Access the Data Access category located within the Properties panel for the Checkbox component.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,a.kt)(r.ZP.Item,{width:"60%"},(0,a.kt)("li",null,(0,a.kt)("span",{style:{fontWeight:"bold"}},"Define the Datasource"),": Specify the relevant Datasource that will capture the user's selected choice.")),(0,a.kt)(r.ZP.Item,{width:"35%"})))),(0,a.kt)("h3",{id:"server-side-interaction"},"Server-Side Interaction"),(0,a.kt)("p",null,"Interacting with user input data is straightforward. When you bind a datasource to the ",(0,a.kt)("strong",{parentName:"p"},"Checkbox")," component, you can access and make use of the input content."),(0,a.kt)("p",null,"Subsequently, you can utilize this input value in various ways, such as within a standard action to initiate a search with matching attribute values."),(0,a.kt)("h2",{id:"triggers-and-events"},"Triggers and Events"),(0,a.kt)("h3",{id:"checkbox-component-1"},"Checkbox Component"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Checkbox")," component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Event"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On Click"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user clicks on the component.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On Blur"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when the component loses focus (user clicks outside).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On Focus"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when the component gains focus (user clicks on it).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On MouseEnter"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor enters the area of the component.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On MouseLeave"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor exits the area of the component.")))),(0,a.kt)("h3",{id:"embedded-label-1"},"Embedded Label"),(0,a.kt)("p",null,"The embedded ",(0,a.kt)("strong",{parentName:"p"},"Label")," can also respond to various events, allowing for dynamic user experiences. Events that can trigger actions within the embedded icon include:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Event"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On Click"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user clicks on the Label.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On Keyup"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when a keyboard key is released while the Label is in focus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On KeyDown"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when a keyboard key is pressed down while the Label is in focus.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On MouseEnter"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor enters the area of the Label.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On MouseLeave"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor exits the area of the Label.")))))}g.isMDXComponent=!0},51383:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/checkbox_Size-a9792e1dd6f44fce5ac4318a1b40ae15.png"},76566:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/checkbox_VariantSelection-37c6e6c3404cc56c46710a5662727722.png"},89430:(e,t,A)=>{A.d(t,{Z:()=>n});const n="data:image/png;base64,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"},229:(e,t,A)=>{A.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);
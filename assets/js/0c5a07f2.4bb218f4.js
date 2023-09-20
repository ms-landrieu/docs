"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[7314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52203:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(67294),i=n(86010);const o={List:function(e){let{children:t,align:n="start",justifyContent:o="start"}=e;return a.createElement("div",{className:(0,i.Z)("flex flex-col lg:flex-row flex-wrap",{"items-start":"start"===n,"items-center":"center"===n,"items-end":"end"===n},{"justify-start":"start"===o,"justify-center":"center"===o,"justify-end":"end"===o,"justify-between":"between"===o,"justify-around":"around"===o,"justify-evenly":"evenly"===o})},t)},Item:function(e){let{children:t,width:n}=e;const o=(e=>{const t="undefined"!=typeof window&&window.matchMedia(e),[n,i]=(0,a.useState)(t.matches);return(0,a.useEffect)((()=>(t.onchange=e=>i(e.matches),()=>t.onchange=null))),n})("(max-width: 1024px)");return a.createElement("div",{className:(0,i.Z)({"flex-1":!n}),style:o?{}:{width:n}},t)}}},16723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),o=n(52203);const r={id:"matrix",title:"Matrix"},l=void 0,s={unversionedId:"studio/design-webforms/components/matrix",id:"studio/design-webforms/components/matrix",title:"Matrix",description:"The Matrix component is a UI element designed to display a dynamic array of Stylebox components.",source:"@site/docs/studio/design-webforms/components/matrix.md",sourceDirName:"studio/design-webforms/components",slug:"/studio/design-webforms/components/matrix",permalink:"/docs/studio/design-webforms/components/matrix",draft:!1,editUrl:"https://github.com/qodly/docs/edit/main/docs/studio/design-webforms/components/matrix.md",tags:[],version:"current",frontMatter:{id:"matrix",title:"Matrix"},sidebar:"Develop",previous:{title:"Webform Loader",permalink:"/docs/studio/design-webforms/components/webformloader"},next:{title:"Data Table",permalink:"/docs/studio/design-webforms/components/datatable"}},c={},p=[{value:"Use Cases",id:"use-cases",level:2},{value:"Properties Customization",id:"properties-customization",level:2},{value:"Data Integration",id:"data-integration",level:2},{value:"Data Binding",id:"data-binding",level:3},{value:"Data Display",id:"data-display",level:3},{value:"Server-Side Interaction",id:"server-side-interaction",level:3},{value:"Dynamic Attribute Display",id:"dynamic-attribute-display",level:3},{value:"Showcase",id:"showcase",level:2},{value:"Triggers and Events",id:"triggers-and-events",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Matrix")," component is a UI element designed to display a dynamic array of Stylebox components. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Categorized under iterative components, the ",(0,i.kt)("strong",{parentName:"p"},"Matrix")," component is specialized in showcasing dynamic arrays of ",(0,i.kt)("strong",{parentName:"p"},"Stylebox")," components based on the component's designated datasource.")),(0,i.kt)("p",null,"Upon being placed on the canvas, the Matrix component includes a single Stylebox component, and this Stylebox is duplicated for each iteration of data."),(0,i.kt)("h2",{id:"use-cases"},"Use Cases"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Matrix")," component finds application in various scenarios where data needs to be displayed iteratively and can be customized. Common use cases include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Product Gallery"),": Create an interactive product gallery where each Stylebox represents a product with its image, name, and price. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"News Feed"),": Design a dynamic news feed by using the Matrix component to iterate over news articles. Each Stylebox can display the headline and a brief excerpt.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"User Profile Showcase"),": Build a user profile showcase where the Matrix iterates over user profiles, displaying profile images and usernames."))),(0,i.kt)("h2",{id:"properties-customization"},"Properties Customization"),(0,i.kt)("p",null,"Enhance the ",(0,i.kt)("strong",{parentName:"p"},"Matrix")," component to align with your application's requirements using the following customization options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Orientation"),": Developers can choose between horizontal and vertical orientations for the Matrix. This choice affects the arrangement of Stylebox components and the presence of scrollbars."),(0,i.kt)(o.ZP.List,{align:"center",justifyContent:"between"},(0,i.kt)(o.ZP.Item,{width:"60%"},(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("strong",null,"Vertical Orientation (Default)"),": By default, the Matrix component is oriented vertically. This means that Stylebox components are stacked from top to bottom. If the content surpasses the defined height, a vertical scrollbar will automatically be shown, facilitating vertical scrolling to access all the content."),(0,i.kt)("li",null,(0,i.kt)("strong",null,"Horizontal Orientation"),": When the Matrix component is configured with a horizontal orientation, Stylebox components are arranged from left to right. If the content exceeds the available width, a horizontal scrollbar will automatically appear, enabling users to scroll through the content horizontally."))),(0,i.kt)(o.ZP.Item,{width:"35%"},(0,i.kt)("img",{alt:"explorer",src:n(65178).Z,style:{borderRadius:"6px"}}))))),(0,i.kt)("h2",{id:"data-integration"},"Data Integration"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Matrix")," component is data-bound, meaning it relies on an external datasource to populate its options. This allows the component to display and interact with data."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The datasource for the ",(0,i.kt)("strong",{parentName:"p"},"Matrix")," component can take the form of either an ",(0,i.kt)("inlineCode",{parentName:"p"},"ORDA entity selection")," or an ",(0,i.kt)("inlineCode",{parentName:"p"},"array"),".")),(0,i.kt)("h3",{id:"data-binding"},"Data Binding"),(0,i.kt)("p",null,"To associate data with the ",(0,i.kt)("strong",{parentName:"p"},"Matrix")," component, follow these steps:"),(0,i.kt)(o.ZP.List,{align:"center",justifyContent:"between"},(0,i.kt)(o.ZP.Item,{width:"60%"},(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("strong",null,"Navigate to the Properties Panel"),": Access the Data Access category located within the Properties panel for the Matrix component."),(0,i.kt)("br",null),(0,i.kt)("li",null,(0,i.kt)("strong",null,"Define the Datasource"),": Specify the appropriate Datasource that contains the data you want to display within the Matrix. For instance, you can select an entity selection from a relevant dataclass, such as ",(0,i.kt)("code",null,"roomSelection"),"."))),(0,i.kt)(o.ZP.Item,{width:"35%"},(0,i.kt)("img",{alt:"explorer",src:n(61801).Z,style:{borderRadius:"6px"}}))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Alternatively, you can establish the connection by dragging and dropping the datasource onto the Matrix component.")),(0,i.kt)("h3",{id:"data-display"},"Data Display"),(0,i.kt)("p",null,"To display data iterated over a datasource, you can follow these additional steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Access the Matrix"),": Within the Matrix component, locate the embedded Stylebox.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Add a Component"),": Add a Text component or other relevant components within the Stylebox."),(0,i.kt)("img",{alt:"explorer",src:n(50575).Z,style:{borderRadius:"6px",borderStyle:"solid"}})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Configure the Component"),": Click on the component you've added to enter its editing mode. The process of configuring components varies based on their type:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Toggle Datasource"),": Prepare to connect the component to the datasource in the next step by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Toggle Datasource")," button.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Properties Panel"),": In the next step, you'll configure them through the ",(0,i.kt)("inlineCode",{parentName:"p"},"Data Access")," category in the Properties panel. ")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Choose the Iterator"),": Choose the iterator corresponding to the iterated data (e.g., ",(0,i.kt)("code",null,"$This"),") to represent the current data item."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Choose the Attribute"),": Once you've selected the iterator, choose the specific attribute that you want to display within the component. This could include related entity selections. For example, use an embedded Matrix within the same Matrix to present various choices like room options (with/without breakfast)."),(0,i.kt)("img",{alt:"explorer",src:n(56612).Z,style:{borderRadius:"6px",borderStyle:"solid"}}))),(0,i.kt)("h3",{id:"server-side-interaction"},"Server-Side Interaction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Direct Datasource Interaction"),": When using a direct datasource like ",(0,i.kt)("inlineCode",{parentName:"p"},"Rooms"),", you can bind functions to button clicks using ",(0,i.kt)("inlineCode",{parentName:"p"},"$This"),'. This functionality enables the execution of functions such as "selectRoom" upon button clicks.'),(0,i.kt)("p",{parentName:"li"},"  Follow these steps to achieve this functionality:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Integrate the Matrix component within the interface."),(0,i.kt)("li",{parentName:"ul"},"Select a direct datasource like ",(0,i.kt)("code",null,"Rooms")," for the Matrix."),(0,i.kt)("li",{parentName:"ul"},"Embed buttons within the Matrix for each iterated data."),(0,i.kt)("li",{parentName:"ul"},"Bind the desired function, , e.g., ",(0,i.kt)("code",null,"selectRoom"),", to the button click event using ",(0,i.kt)("code",null,"$This"),".")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Related Entity Interaction"),": Alternatively, you can leverage related entity selections from the primary datasource, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"$This.roomOptionsSelection"),". This method involves embedding another Matrix within the main Matrix to handle each iterated data. This allows you to access options associated with a particular room, such as services offered."),(0,i.kt)("p",{parentName:"li"},"  Follow these steps to implement this approach:"),(0,i.kt)(o.ZP.List,{align:"center",justifyContent:"between"},(0,i.kt)(o.ZP.Item,{width:"50%"},(0,i.kt)("ul",null,(0,i.kt)("li",null," Integrate the Matrix component within the interface."),(0,i.kt)("li",null," Select a direct datasource like ",(0,i.kt)("code",null,"Rooms")," for the main Matrix."),(0,i.kt)("li",null," Embed another Matrix for each iterated data within the main Matrix."),(0,i.kt)("li",null," Choose a Related Entity datasource like ",(0,i.kt)("code",null,"$This.roomOptionsSelection")," for the embedded Matrix."),(0,i.kt)("li",null," Integrate buttons within the embeded Matrix for each iterated data."),(0,i.kt)("li",null," Bind the desired function, e.g., ",(0,i.kt)("code",null,"selectRoomOption"),", to the button click event using ",(0,i.kt)("code",null,"This"),"."))),(0,i.kt)(o.ZP.Item,{width:"50%"},(0,i.kt)("img",{alt:"explorer",src:n(46670).Z,style:{borderRadius:"6px"}}))))),(0,i.kt)("h3",{id:"dynamic-attribute-display"},"Dynamic Attribute Display"),(0,i.kt)(o.ZP.List,{align:"center",justifyContent:"between"},(0,i.kt)(o.ZP.Item,{width:"65%"},"The ",(0,i.kt)("code",null,"Matrix")," component can link its currently selected entity to a datasource in the ",(0,i.kt)("code",null,"Selected Element")," field. This feature allows the component to automatically display the attributes of the selected element whenever a new entity is chosen."),(0,i.kt)(o.ZP.Item,{width:"30%"},(0,i.kt)("img",{alt:"explorer",src:n(42618).Z,style:{borderRadius:"6px"}}))),(0,i.kt)(o.ZP.List,{align:"center",justifyContent:"between"},(0,i.kt)(o.ZP.Item,{width:"60%"},"These attributes can be showcased in other configured components, such as a ",(0,i.kt)("code",null,"Text")," component, to display the corresponding attribute values."),(0,i.kt)(o.ZP.Item,{width:"25%"},(0,i.kt)("img",{alt:"explorer",src:n(80485).Z,style:{borderRadius:"6px",width:"100%"}}))),(0,i.kt)("h2",{id:"showcase"},"Showcase"),(0,i.kt)("p",null,"Here's a glimpse of how the ",(0,i.kt)("strong",{parentName:"p"},"Matrix")," component will look and behave in action:"),(0,i.kt)("img",{alt:"explorer",src:n(2325).Z,style:{borderRadius:"6px"}}),(0,i.kt)("h2",{id:"triggers-and-events"},"Triggers and Events"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Matrix")," component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Event"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"On Click"),(0,i.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user clicks on the component.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"On Keyup"),(0,i.kt)("td",{parentName:"tr",align:null},"Calls for an action when a keyboard key is released while the component is in focus")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"On KeyDown"),(0,i.kt)("td",{parentName:"tr",align:null},"Calls for an action when a keyboard key is pressed down while the component is in focus.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"On MouseEnter"),(0,i.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor enters the area of the component.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"On MouseLeave"),(0,i.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor exits the area of the component.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"On Select"),(0,i.kt)("td",{parentName:"tr",align:null},"Calls for an action when an item within the component is selected.")))))}m.isMDXComponent=!0},42618:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dynamicAttributeDisplay_SelectedElement-edd1b4ec9f1daa412cb229e1d4ac8a9b.png"},80485:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dynamicAttributeDisplay_attributeValue-bd6a2b2189a3b960896388f3b7c1718d.png"},61801:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matrix_DataBinding-1a580d30a9281c8d7d817502f1affa6c.png"},50575:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matrix_DataDisplay-475de3e6d2298063ea99d50f7a8aebc4.png"},56612:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matrix_DataDisplay_embeddedMatrix-056961eefc3a76e08171fff9b87dce01.png"},2325:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matrix_Preview-b9178cba3322eff7c33d7c2abac45679.gif"},46670:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matrix_ServerSideInteraction_RelatedEntity-ab29063016714aeeda394a66c2700d47.png"},65178:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/matrix_orientations-45558a2a796937392991303ee02acbb4.gif"}}]);
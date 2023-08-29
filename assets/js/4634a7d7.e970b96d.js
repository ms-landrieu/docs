"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[9804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),A=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=A(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=A(n),d=i,g=u["".concat(s,".").concat(d)]||u[d]||p[d]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var A=2;A<r;A++)o[A]=n[A];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52203:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(67294),i=n(86010);const r={List:function(e){let{children:t,align:n="start",justifyContent:r="start"}=e;return a.createElement("div",{className:(0,i.Z)("flex flex-col lg:flex-row flex-wrap",{"items-start":"start"===n,"items-center":"center"===n,"items-end":"end"===n},{"justify-start":"start"===r,"justify-center":"center"===r,"justify-end":"end"===r,"justify-between":"between"===r,"justify-around":"around"===r,"justify-evenly":"evenly"===r})},t)},Item:function(e){let{children:t,width:n}=e;const r=(e=>{const t="undefined"!=typeof window&&window.matchMedia(e),[n,i]=(0,a.useState)(t.matches);return(0,a.useEffect)((()=>(t.onchange=e=>i(e.matches),()=>t.onchange=null))),n})("(max-width: 1024px)");return a.createElement("div",{className:(0,i.Z)({"flex-1":!n}),style:r?{}:{width:n}},t)}}},10517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),r=n(52203);const o={id:"rangeinput",title:"Range Input"},l=void 0,s={unversionedId:"studio/design-webforms/components/rangeinput",id:"studio/design-webforms/components/rangeinput",title:"Range Input",description:"The Range Input component is an interactive user interface element that allows users to select a numeric value within a specified range. This component is commonly used for inputting values such as sliders, volume controls, and other settings that require a range selection.",source:"@site/docs/studio/design-webforms/components/rangeinput.md",sourceDirName:"studio/design-webforms/components",slug:"/studio/design-webforms/components/rangeinput",permalink:"/docs/studio/design-webforms/components/rangeinput",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/design-webforms/components/rangeinput.md",tags:[],version:"current",frontMatter:{id:"rangeinput",title:"Range Input"},sidebar:"Studio",previous:{title:"Radio",permalink:"/docs/studio/design-webforms/components/radio"},next:{title:"Select Input",permalink:"/docs/studio/design-webforms/components/selectinput"}},A={},c=[{value:"Use Cases",id:"use-cases",level:2},{value:"Properties Customization",id:"properties-customization",level:2},{value:"Data Integration",id:"data-integration",level:2},{value:"<u>Data Binding</u>",id:"data-binding",level:3},{value:"<u>Server-Side Interaction</u>",id:"server-side-interaction",level:3},{value:"Showcase",id:"showcase",level:2},{value:"Triggers and Events",id:"triggers-and-events",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Range Input")," component is an interactive user interface element that allows users to select a numeric value within a specified range. This component is commonly used for inputting values such as sliders, volume controls, and other settings that require a range selection."),(0,i.kt)("h2",{id:"use-cases"},"Use Cases"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Range Input")," component can be applied in various scenarios:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Volume Control"),": Use it to control audio or video volume levels.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Data Filtering"),": Implement it to allow users to filter results based on a numeric range, such as prices or quantities.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Configuration Settings"),": Utilize it for user-configurable settings that require selecting a specific numeric value within a range."))),(0,i.kt)("h2",{id:"properties-customization"},"Properties Customization"),(0,i.kt)("p",null,"Enhance the ",(0,i.kt)("strong",{parentName:"p"},"Range Input")," component to align with your application's requirements using the following customization options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,i.kt)(r.ZP.Item,{width:"60%"},(0,i.kt)("span",{style:{fontWeight:"bold"}},"Label Position"),": Developers can tailor the label's position, placing it above, below, to the left, to the right, or even hidden."),(0,i.kt)(r.ZP.Item,{width:"35%"},(0,i.kt)("img",{alt:"explorer",src:n(72725).Z,style:{borderRadius:"6px"}})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Orientation"),": Developers can choose between horizontal and vertical orientations for the Matrix. This choice affects the arrangement of Stylebox components and the presence of scrollbars."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,i.kt)(r.ZP.Item,{width:"60%"},(0,i.kt)("li",null,(0,i.kt)("span",{style:{fontWeight:"bold"}},"Vertical Orientation (Default)"),": By default, the Range Input component is oriented vertically. This means that Slider container is stacked from top to bottom.")," ",(0,i.kt)("br",null),(0,i.kt)("li",null,(0,i.kt)("span",{style:{fontWeight:"bold"}},"Horizontal Orientation"),": When the Range Input component is configured with a horizontal orientation, Slider container is arranged from left to right.")),(0,i.kt)(r.ZP.Item,{width:"35%"},(0,i.kt)("img",{alt:"explorer",src:n(8180).Z,style:{borderRadius:"6px"}}))))))),(0,i.kt)("p",null,"Within the ",(0,i.kt)("strong",{parentName:"p"},"Range Input")," component, an embedded ",(0,i.kt)("strong",{parentName:"p"},"Slider container")," allows for further customization of the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,i.kt)(r.ZP.Item,{width:"60%"},(0,i.kt)("li",null,(0,i.kt)("span",{style:{fontWeight:"bold"}},"Minimum Value"),": Set the minimum value that users can select within the range.")," ",(0,i.kt)("br",null),(0,i.kt)("li",null,(0,i.kt)("span",{style:{fontWeight:"bold"}},"Maximum Value"),": Define the maximum value that users can select within the range.")," ",(0,i.kt)("br",null),(0,i.kt)("li",null,(0,i.kt)("span",{style:{fontWeight:"bold"}},"Step"),": Determine the increment value when users interact with the component.")),(0,i.kt)(r.ZP.Item,{width:"35%"},(0,i.kt)("img",{alt:"explorer",src:n(10059).Z,style:{borderRadius:"6px"}}))))),(0,i.kt)("h2",{id:"data-integration"},"Data Integration"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Range Input")," component allows for seamless integration of datasources, enabling dynamic data binding and interaction within the webform."),(0,i.kt)("h3",{id:"data-binding"},(0,i.kt)("u",null,"Data Binding")),(0,i.kt)("p",null,"To associate data with the Range Input component, follow these steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Navigate to the Properties Panel"),": Access the Data Access category located within the Properties panel for the Range Input component.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,i.kt)(r.ZP.Item,{width:"55%"},(0,i.kt)("li",null,(0,i.kt)("span",{style:{fontWeight:"bold"}},"Define the Datasource"),": Specify the appropriate Datasource that contains the data you want to display within the Range Input or retrieve from user input. This can be an attribute from an entity, an array, or a direct datasource of type number. For instance, you can select an entity, such as ",(0,i.kt)("code",null,"dayplan.hotel_ID"),".")),(0,i.kt)(r.ZP.Item,{width:"45%"},(0,i.kt)("img",{alt:"explorer",src:n(72951).Z,style:{borderRadius:"6px"}})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Choose the Attribute"),": Choose the specific attribute that you want to display within the component when using an entity or an array type datasource, such as ",(0,i.kt)("code",null,"dayplan.hotel_ID.rating"),"."))),(0,i.kt)("h3",{id:"server-side-interaction"},(0,i.kt)("u",null,"Server-Side Interaction")),(0,i.kt)("p",null,"Retrieving user input data is equally effortless. By binding a datasource to the ",(0,i.kt)("strong",{parentName:"p"},"Range Input")," component, you gain access to and can utilize the content input by the user."),(0,i.kt)("p",null,"Consider a rating slider scenario, where users interact by dragging the slider to a specific value. Binding a datasource captures this selected value."),(0,i.kt)("p",null,"Consequently, you can utilize this input value \u2013 for instance, within a standard action \u2013 to initiate a search for hotels whose rating match the entered value."),(0,i.kt)("h2",{id:"showcase"},"Showcase"),(0,i.kt)("p",null,"Here's a glimpse of how the ",(0,i.kt)("strong",{parentName:"p"},"Range Input")," component will look and behave in action:"),(0,i.kt)("img",{alt:"explorer",src:n(26643).Z,style:{borderRadius:"6px",height:"90%",width:"90%"}}),(0,i.kt)("h2",{id:"triggers-and-events"},"Triggers and Events"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Range Input")," component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Event"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"On Click"),(0,i.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user clicks on the component.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"On Blur"),(0,i.kt)("td",{parentName:"tr",align:null},"Calls for an action when the component loses focus (user clicks outside).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"On Focus"),(0,i.kt)("td",{parentName:"tr",align:null},"Calls for an action when the component gains focus (user clicks on it).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"On MouseEnter"),(0,i.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor enters the area of the component.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"On MouseLeave"),(0,i.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor exits the area of the component.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"On KeyDown"),(0,i.kt)("td",{parentName:"tr",align:null},"Calls for an action when a keyboard key is pressed down while the component is in focus.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"On Keyup"),(0,i.kt)("td",{parentName:"tr",align:null},"Calls for an action when a keyboard key is released while the component is in focus")))))}p.isMDXComponent=!0},72951:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rangeInput_DataDisplay-d7550756ed8c0eab6630b815094b1027.png"},72725:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},26643:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rangeInput_Preview-04ac0cebc29eef580c17a03bda00c2ec.gif"},8180:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rangeInput_orientation-45558a2a796937392991303ee02acbb4.gif"},10059:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rangeInput_sliderProperties-4a3d4d3afbcc7283eb4692b9d1e4b904.png"}}]);
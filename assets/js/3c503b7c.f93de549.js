"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[8827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(67294);function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,A=function(e,t){if(null==e)return{};var n,i,A={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(A[n]=e[n]);return A}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(A[n]=e[n])}return A}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,A=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(n),d=A,u=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?i.createElement(u,r(r({ref:t},c),{},{components:n})):i.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,A=t&&t.mdxType;if("string"==typeof e||A){var o=n.length,r=new Array(o);r[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:A,r[1]=a;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52203:(e,t,n)=>{n.d(t,{ZP:()=>o});var i=n(67294),A=n(86010);const o={List:function(e){let{children:t,align:n="start",justifyContent:o="start"}=e;return i.createElement("div",{className:(0,A.Z)("flex flex-col lg:flex-row flex-wrap",{"items-start":"start"===n,"items-center":"center"===n,"items-end":"end"===n},{"justify-start":"start"===o,"justify-center":"center"===o,"justify-end":"end"===o,"justify-between":"between"===o,"justify-around":"around"===o,"justify-evenly":"evenly"===o})},t)},Item:function(e){let{children:t,width:n}=e;const o=(e=>{const t="undefined"!=typeof window&&window.matchMedia(e),[n,A]=(0,i.useState)(t.matches);return(0,i.useEffect)((()=>(t.onchange=e=>A(e.matches),()=>t.onchange=null))),n})("(max-width: 1024px)");return i.createElement("div",{className:(0,A.Z)({"flex-1":!n}),style:o?{}:{width:n}},t)}}},94849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),A=(n(67294),n(3905)),o=n(52203);const r={id:"functionPermissions",title:"Function Permissions"},a=void 0,s={unversionedId:"studio/roles/functionPermissions",id:"studio/roles/functionPermissions",title:"Function Permissions",description:"Purpose and Scope",source:"@site/docs/studio/roles/permissionsFunctionLevel.md",sourceDirName:"studio/roles",slug:"/studio/roles/functionPermissions",permalink:"/docs/studio/roles/functionPermissions",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/roles/permissionsFunctionLevel.md",tags:[],version:"current",frontMatter:{id:"functionPermissions",title:"Function Permissions"},sidebar:"Develop",previous:{title:"Attribute Permissions",permalink:"/docs/studio/roles/attributesPermissions"},next:{title:"Model Editor Approach",permalink:"/docs/studio/roles/modelEditorApproach"}},l={},c=[{value:"Purpose and Scope",id:"purpose-and-scope",level:2},{value:"Configuring Function Permissions",id:"configuring-function-permissions",level:2},{value:"Max Restriction to Gradual Expansion",id:"max-restriction-to-gradual-expansion",level:2},{value:"Full Access to Gradual Restriction",id:"full-access-to-gradual-restriction",level:2},{value:"Promote Permission Use Case",id:"promote-permission-use-case",level:2},{value:"Purpose",id:"purpose",level:3},{value:"Background",id:"background",level:3},{value:"Promote Permission Configuration",id:"promote-permission-configuration",level:3},{value:"Handy Tips",id:"handy-tips",level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,A.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("h2",{id:"purpose-and-scope"},"Purpose and Scope"),(0,A.kt)("p",null,"Function-level permissions control access to custom functions defined within the Model. These functions can perform actions such as managing bookings, generating invoices, and handling reservations."),(0,A.kt)("h2",{id:"configuring-function-permissions"},"Configuring Function Permissions"),(0,A.kt)("p",null,"To configure ",(0,A.kt)("strong",{parentName:"p"},"Function")," Permissions for a specific privilege, follow these steps:"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Choose the resource name, like the ",(0,A.kt)("inlineCode",{parentName:"li"},"register")," function, from the dropdown list."),(0,A.kt)("li",{parentName:"ul"},"Alternatively, type the resource name, such as the ",(0,A.kt)("inlineCode",{parentName:"li"},"register")," function, directly into the search bar.")),(0,A.kt)("admonition",{type:"info"},(0,A.kt)("p",{parentName:"admonition"},"The ",(0,A.kt)("img",{src:n(96353).Z,style:{borderRadius:"6px",width:"3%"}})," icon in the dropdown list indicates ",(0,A.kt)("strong",{parentName:"p"},"Function")," ressources.")),(0,A.kt)("h2",{id:"max-restriction-to-gradual-expansion"},"Max Restriction to Gradual Expansion"),(0,A.kt)("p",null,"To control function execution, the ",(0,A.kt)("strong",{parentName:"p"},"DataStore")," level is configured exclusively for the ",(0,A.kt)("inlineCode",{parentName:"p"},"Restricted")," privilege, ensuring that only roles with this privilege can execute functions, thus preventing any unauthorized access."),(0,A.kt)("img",{src:n(9072).Z,style:{borderRadius:"6px"}}),(0,A.kt)(o.ZP.List,{align:"center",justifyContent:"between"},(0,A.kt)(o.ZP.Item,{width:"65%"},"Hovering over the ",(0,A.kt)("img",{src:n(22935).Z,style:{borderRadius:"6px",width:"3%"}}),"  icon reveals that all functions throughout the model \u2014 encompassing DataStore, Dataclasses, Entity selections, and Entities \u2014 have the execute permission for the Restricted privilege."),(0,A.kt)(o.ZP.Item,{width:"30%"},(0,A.kt)("img",{src:n(29795).Z,style:{borderRadius:"6px"}}))),(0,A.kt)("br",null),(0,A.kt)("p",null,"However, to accommodate scenarios where the ",(0,A.kt)("inlineCode",{parentName:"p"},"Agent")," role needs to execute functions, such as the ",(0,A.kt)("inlineCode",{parentName:"p"},"book")," function within the ",(0,A.kt)("inlineCode",{parentName:"p"},"roomOptions")," Entity class, a gradual expansion involves adding the ",(0,A.kt)("inlineCode",{parentName:"p"},"book")," function resource and checking the execute permission. "),(0,A.kt)("img",{src:n(95044).Z,style:{borderRadius:"6px"}}),(0,A.kt)("br",null),(0,A.kt)("br",null),(0,A.kt)("admonition",{type:"info"},(0,A.kt)("p",{parentName:"admonition"},"In this context, the ",(0,A.kt)("inlineCode",{parentName:"p"},"agent")," privilege overrides function permissions set at the ",(0,A.kt)("strong",{parentName:"p"},"DataStore")," level (",(0,A.kt)("inlineCode",{parentName:"p"},"Restricted"),").")),(0,A.kt)("h2",{id:"full-access-to-gradual-restriction"},"Full Access to Gradual Restriction"),(0,A.kt)("p",null,"If no ",(0,A.kt)("inlineCode",{parentName:"p"},"Execute")," permission is set at any level, it grants full access to all functions defined throughout the Model. Gradual restriction involves using other privileges to restrict specific function execution, as seen in the ",(0,A.kt)("inlineCode",{parentName:"p"},"Employee")," DataClass, where the ",(0,A.kt)("inlineCode",{parentName:"p"},"register()")," function execution is restricted to specific privileges."),(0,A.kt)("h2",{id:"promote-permission-use-case"},"Promote Permission Use Case"),(0,A.kt)("h3",{id:"purpose"},"Purpose"),(0,A.kt)("p",null,"Promote permissions enable temporary privilege escalation during function execution, ensuring the secure performance of critical operations within that function's code without permanently adding privileges."),(0,A.kt)("admonition",{type:"info"},(0,A.kt)("p",{parentName:"admonition"},"Upon executing a specific function within a session with a designated privilege, Qodly dynamically integrates the privileges that ",(0,A.kt)("inlineCode",{parentName:"p"},"Promote")," the function into the session. This temporary elevation allows the function's execution, even when the original session's privilege lacks direct permission for resources in that function code."),(0,A.kt)("p",{parentName:"admonition"},"After the function concludes, the temporary elevation from the ",(0,A.kt)("inlineCode",{parentName:"p"},"Promote")," permission is revoked.")),(0,A.kt)("h3",{id:"background"},"Background"),(0,A.kt)("p",null,"In a travel agency's system, dynamic pricing analysis recalculates travel package prices based on demand, seasonal trends, and competitor pricing. Key roles include:"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"The ",(0,A.kt)("inlineCode",{parentName:"p"},"Sales Manager")," role fully controls the ",(0,A.kt)("inlineCode",{parentName:"p"},"Pricing")," Dataclass and its ",(0,A.kt)("inlineCode",{parentName:"p"},"analyzePricing")," function, ensuring confidentiality. Access to this Dataclass is strictly restricted from the ",(0,A.kt)("inlineCode",{parentName:"p"},"Agent")," role.")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"In specific scenarios, the ",(0,A.kt)("inlineCode",{parentName:"p"},"Agent")," role may need to perform a pricing analysis, responding to special requests."))),(0,A.kt)("h3",{id:"promote-permission-configuration"},"Promote Permission Configuration"),(0,A.kt)("p",null,"If an ",(0,A.kt)("inlineCode",{parentName:"p"},"Agent")," receives a special request from a high-value customer, they need ",(0,A.kt)("inlineCode",{parentName:"p"},"Execute")," permission for the ",(0,A.kt)("inlineCode",{parentName:"p"},"analyzePricing")," function to generate a customized pricing quote. This allows users with the ",(0,A.kt)("inlineCode",{parentName:"p"},"Agent")," role to directly execute the function."),(0,A.kt)("img",{src:n(30550).Z,style:{borderRadius:"6px"}}),(0,A.kt)("p",null,"However, due to restricted access to the ",(0,A.kt)("inlineCode",{parentName:"p"},"Pricing")," Dataclass limited to the ",(0,A.kt)("inlineCode",{parentName:"p"},"Sales Manager"),' role, executing the function code attempting to read data from it would result in a "No permission to read" error:'),(0,A.kt)("img",{src:n(6463).Z,style:{borderRadius:"6px"}}),(0,A.kt)("p",null,"It becomes essential to include ",(0,A.kt)("inlineCode",{parentName:"p"},"Promote")," permission for the ",(0,A.kt)("inlineCode",{parentName:"p"},"analyzePricing")," function within the ",(0,A.kt)("inlineCode",{parentName:"p"},"ManageFinancials")," privilege:"),(0,A.kt)("img",{src:n(20707).Z,style:{borderRadius:"6px"}}),(0,A.kt)("p",null,"This configuration explicitly specifies that when the ",(0,A.kt)("inlineCode",{parentName:"p"},"analyzePricing")," function is executed within a session holding the ",(0,A.kt)("inlineCode",{parentName:"p"},"Agent")," role, which lacks permission for the ",(0,A.kt)("inlineCode",{parentName:"p"},"Pricing")," resource, it temporarily integrates the ",(0,A.kt)("inlineCode",{parentName:"p"},"ManageFinancials")," privilege into that session during function execution. This temporary elevation allows the function to be executed without granting permanent access."),(0,A.kt)("h2",{id:"handy-tips"},"Handy Tips"),(0,A.kt)("admonition",{type:"tip"},(0,A.kt)("p",{parentName:"admonition"},"Add the ",(0,A.kt)("inlineCode",{parentName:"p"},"Execute")," permission in the privilege associated with the role that needs to directly perform the function. Meanwhile, the ",(0,A.kt)("inlineCode",{parentName:"p"},"Promote")," permission is configured in the privilege that grants broader control over the resources involved in the function, providing a temporary elevation of privileges during the function's execution.")),(0,A.kt)("admonition",{type:"info"},(0,A.kt)("p",{parentName:"admonition"},"If you have set permissions for the ",(0,A.kt)("inlineCode",{parentName:"p"},"Describe")," action, which may be the case when access controllers want to truly conceal the information, then all functions you execute must have at least the same permission level as the ",(0,A.kt)("inlineCode",{parentName:"p"},"Describe"),".")),(0,A.kt)("admonition",{type:"info"},(0,A.kt)(o.ZP.List,{align:"center",justifyContent:"between"},(0,A.kt)(o.ZP.Item,{width:"65%"},"A function can be promoted from multiple privileges. In such cases, there's no hierarchy determining priority. The session experiencing temporary privilege elevation during function execution, will have access to all resource permissions set in each of the promoting privileges."),(0,A.kt)(o.ZP.Item,{width:"30%"},(0,A.kt)("img",{src:n(19441).Z,style:{borderRadius:"6px"}})))),(0,A.kt)("admonition",{type:"info"},(0,A.kt)(o.ZP.List,{align:"center",justifyContent:"between"},(0,A.kt)(o.ZP.Item,{width:"65%"},"The ",(0,A.kt)("img",{src:n(94401).Z,style:{borderRadius:"6px",width:"4%"}})," icon indicates that the function has been promoted by another privilege. Hover over the privilege name, and clicking on it will direct you to the privilege promoting the function."),(0,A.kt)(o.ZP.Item,{width:"30%"},(0,A.kt)("img",{src:n(6200).Z,style:{borderRadius:"6px"}})))))}m.isMDXComponent=!0},96353:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABGCAYAAAA+c+FUAAAKrGlDQ1BJQ0MgUHJvZmlsZQAASImVlwdUU9kWhs+96SGhJYQOoTdBOgGkhNACKL2KSkgChBJCIKjYEXEExoKKCDbQAREFR6XIICqi2AZFxa4DMggo42BBVFTeBRZhZt56762319rrfHdnn332OeuerP8CQJbniESpsDwAacIscYiPBz0qOoaOGwREgAMQIAEdDjdTxAwKCgCIzY5/t4/3kUzE7ppP1fr33/+rKfD4mVwAoCCE43mZ3DSEzyD+iisSZwGAOoTE9ZZniaa4A2GqGGkQ4YdTnDjDI1McP81oMJ0TFsJCmAoAnsThiBMBINGROD2bm4jUIbkjbCnkCYQIixB2TUtL5yF8EmFjJAeJkabqM+L/UifxbzXjpTU5nEQpz+xl2vCegkxRKmfl/3kc/9vSUiWzaxgiTkoS+4YgoyJyZg9T0v2lLIxfFDjLAt50/jQnSXzDZ5mbyYqZZR7H0186N3VRwCwnCLzZ0jpZ7LBZ5md6hc6yOD1EulaCmMWcZY54bl1JSrg0nsRnS+vnJIVFznK2IGLRLGemhPrP5bCkcbEkRNo/X+jjMbeut3TvaZl/2a+ALZ2blRTmK907Z65/vpA5VzMzStobj+/pNZcTLs0XZXlI1xKlBknz+ak+0nhmdqh0bhbyQs7NDZKeYTLHL2iWAQukg1TExYAOApAnTwCy+CuypjbCShetFAsSk7LoTOSG8elsIddiHt3a0toGgKn7OvM6vKdN30OIdn0ulvsMAJfoycnJ1rlYAHIeZ4YAII7MxYxqASC3AXB1E1cizp6JTd8lDPJPIAeoQBVoAT1gDMyBNbAHzsAdeAE/EAjCQDRYCrggCaQhnS8Hq8EGkA8KwXawG5SBg+AwOApOgFOgCbSCi+AKuAFugx7wBPSCAfAajIKPYAKCIBxEhiiQKqQNGUBmkDXEgFwhLygACoGioTgoERJCEmg1tBEqhIqhMqgCqoF+hs5CF6FrUDf0COqDhqF30BcYBZNgKqwJG8LzYQbMhP3hMHgJnAhnwDlwHrwVLoUr4eNwI3wRvgH3wL3wa3gMBVAyKBpKB2WOYqBYqEBUDCoBJUatRRWgSlCVqDpUC6oTdRfVixpBfUZj0RQ0HW2Odkb7osPRXHQGei26CF2GPopuRHeg76L70KPo7xgyRgNjhnHCsDFRmETMckw+pgRThWnAXMb0YAYwH7FYLA1rhHXA+mKjscnYVdgi7H5sPfYCthvbjx3D4XCqODOcCy4Qx8Fl4fJxe3HHcedxd3ADuE94Gbw23hrvjY/BC/G5+BL8MXwb/g5+ED9BkCcYEJwIgQQeYSVhG+EIoYVwizBAmCAqEI2ILsQwYjJxA7GUWEe8THxKfC8jI6Mr4ygTLCOQWS9TKnNS5qpMn8xnkiLJlMQixZIkpK2katIF0iPSezKZbEh2J8eQs8hbyTXkS+Tn5E+yFFkLWbYsT3adbLlso+wd2TdyBDkDOabcUrkcuRK503K35EbkCfKG8ix5jvxa+XL5s/IP5McUKApWCoEKaQpFCscUrikMKeIUDRW9FHmKeYqHFS8p9lNQFD0Ki8KlbKQcoVymDFCxVCMqm5pMLaSeoHZRR5UUlWyVIpRWKJUrnVPqpaFohjQ2LZW2jXaKdp/2RVlTmanMV96iXKd8R3lcRV3FXYWvUqBSr9Kj8kWVruqlmqK6Q7VJ9ZkaWs1ULVhtudoBtctqI+pUdWd1rnqB+in1xxqwhqlGiMYqjcMaNzXGNLU0fTRFmns1L2mOaNG03LWStXZptWkNa1O0XbUF2ru0z2u/oivRmfRUeim9gz6qo6HjqyPRqdDp0pnQNdIN183Vrdd9pkfUY+gl6O3Sa9cb1dfWX6i/Wr9W/7EBwYBhkGSwx6DTYNzQyDDScLNhk+GQkYoR2yjHqNboqTHZ2M04w7jS+J4J1oRhkmKy3+S2KWxqZ5pkWm56yww2szcTmO03656Hmec4Tzivct4Dc5I50zzbvNa8z4JmEWCRa9Fk8Wa+/vyY+Tvmd87/bmlnmWp5xPKJlaKVn1WuVYvVO2tTa651ufU9G7KNt806m2abt7ZmtnzbA7YP7Sh2C+0227XbfbN3sBfb19kPO+g7xDnsc3jAoDKCGEWMq44YRw/HdY6tjp+d7J2ynE45/els7pzifMx5aIHRAv6CIwv6XXRdOC4VLr2udNc410OuvW46bhy3SrcX7nruPPcq90GmCTOZeZz5xsPSQ+zR4DHOcmKtYV3wRHn6eBZ4dnkpeoV7lXk999b1TvSu9R71sfNZ5XPBF+Pr77vD9wFbk81l17BH/Rz81vh1+JP8Q/3L/F8EmAaIA1oWwgv9Fu5c+HSRwSLhoqZAEMgO3Bn4LMgoKCPol2BscFBwefDLEKuQ1SGdoZTQZaHHQj+GeYRtC3sSbhwuCW+PkIuIjaiJGI/0jCyO7I2aH7Um6ka0WrQgujkGFxMRUxUztthr8e7FA7F2sfmx95cYLVmx5NpStaWpS88tk1vGWXY6DhMXGXcs7isnkFPJGYtnx++LH+WyuHu4r3nuvF28Yb4Lv5g/mOCSUJwwlOiSuDNxOMktqSRpRMASlAneJvsmH0weTwlMqU6ZTI1MrU/Dp8WlnRUqClOEHela6SvSu0VmonxRb4ZTxu6MUbG/uCoTylyS2ZxFRYTRTYmxZJOkL9s1uzz70/KI5adXKKwQrri50nTllpWDOd45P61Cr+Kual+ts3rD6r41zDUVa6G18Wvb1+mty1s3sN5n/dENxA0pG37Ntcwtzv2wMXJjS55m3vq8/k0+m2rzZfPF+Q82O28++AP6B8EPXVtstuzd8r2AV3C90LKwpPBrEbfo+o9WP5b+OLk1YWvXNvttB7Zjtwu339/htuNosUJxTnH/zoU7G3fRdxXs+rB72e5rJbYlB/cQ90j29JYGlDbv1d+7fe/XsqSynnKP8vp9Gvu27Bvfz9t/54D7gbqDmgcLD345JDj0sMKnorHSsLLkMPZw9uGXRyKOdP7E+KmmSq2qsOpbtbC692jI0Y4ah5qaYxrHttXCtZLa4eOxx2+f8DzRXGdeV1FPqy88CU5KTr76Oe7n+6f8T7WfZpyuO2NwZl8DpaGgEWpc2TjalNTU2xzd3H3W72x7i3NLwy8Wv1S36rSWn1M6t62N2JbXNnk+5/zYBdGFkYuJF/vbl7U/uRR16V5HcEfXZf/LV694X7nUyew8f9Xlaus1p2tnrzOuN92wv9F40+5mw692vzZ02Xc13nK41Xzb8XZL94Lutjtudy7e9bx75R773o2eRT3d98PvP3wQ+6D3Ie/h0KPUR28fZz+eeLL+KeZpwTP5ZyXPNZ5X/mbyW32vfe+5Ps++my9CXzzp5/a//j3z968DeS/JL0sGtQdrhqyHWoe9h2+/Wvxq4LXo9cRI/h8Kf+x7Y/zmzJ/uf94cjRodeCt+O/mu6L3q++oPth/ax4LGnn9M+zgxXvBJ9dPRz4zPnV8ivwxOLP+K+1r6zeRby3f/708n0yYnRRwxZ1oKoBCHExIAeFeN6IRoACi3Ef2weEZPTxs08w0wTeA/8YzmnjZ7AOqQYUoWsS4AcBJxw/VIbeR5ShKFuQPYxkbqs9p3WqdPGRb5YjnkPkU9KkxP8A+b0fB/6fufI5iqagv+Of4LCLAGpV3Pd3wAAACKZVhJZk1NACoAAAAIAAQBGgAFAAAAAQAAAD4BGwAFAAAAAQAAAEYBKAADAAAAAQACAACHaQAEAAAAAQAAAE4AAAAAAAAAkAAAAAEAAACQAAAAAQADkoYABwAAABIAAAB4oAIABAAAAAEAAABmoAMABAAAAAEAAABGAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdILVVnAAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAHVaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjcwPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjEwMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlVzZXJDb21tZW50PlNjcmVlbnNob3Q8L2V4aWY6VXNlckNvbW1lbnQ+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpfl2UKAAAAHGlET1QAAAACAAAAAAAAACMAAAAoAAAAIwAAACMAAATmViy3kAAABLJJREFUeAHsm0dLNTEUhs+1996xNxQLItgFEQs2XCgquBPEhTt/iaD4A9xYFi5ERCyggl1QwQa2hYIFUcGFYsPPE4xMycy9n87MjTIHLid502byTDKZRC2NjY3vYBp3PWAxwXDHhFyQCYZPLmCCMcFw2gOcXpY5YkwwnPYAp5dljhgTDKc9wOllcTNiAgMDITk5GdLT0+H09JT89vf3de02JycniIiIAGdnZ9Ley8uLru39T+VcgEEotbW1gJ7a4+MjDAwMwP39PZU09aGhoVBeXg4hISGk3qenJ9jc3ITl5WVN2/luZXYHw4JCb2Z2dha2trZoVFOfm5sLRUVFsjpXVla4gGNXMGpQsMcGBwfh8vJS1nlaCE1NTRAZGcmsigc4dgNjDQoCQTB6WUpKClRXVytWb284dgFjDcrNzQ2Mj48Der3Mzc0NmpubRe81aVv2hGM4GB6gUAABAQFk0REUFEQlmbcXHEPB8ASFEvD39ydwgoODqSTz9oBjGBgeoVACfn5+BA5dOlNd6I2GYwgYnqHQzvf19SVw8PtGyYyEozuY3wCFgvDx8SFwwsLCqCTzRsHRFcxvgkIJeHl5QV1dHYSHh1NJ5o2AoxuY3wiFEvD09CRwcB9NyfSGowuY3wyFgvDw8CDTmtLuAObTE47mYP4CFArH3d2dwImKiqKSzOsFR1MwfwkKJYA7BLjzHR0dTSWZ1wOOZmD+IhRKwNXVlcCJiYmhksxrDUcTMFpAwWkjLS2N7Pg+PDzA8fEx+cl6gCFkZGRAXFwcvL+/kzJ7e3uMXHIJD+awHI4KPJzb2dkBpcMyFxcXAic2NlZe0aeiJZwfg9ECCp5aVlRUyG747OwMRkdHFTsLX8y4Q4xLXKHd3d2RTdDr62uh/BXGVVd9fT1Iv1cQyuTkJBweHn7lFQbwxBOX0ghTybSC8yMwWkDBaaKzs1PpPsmp4tzcHDO9ra0NcDuFZVdXV+QElJVWVVUFqamprCR4fn6Gvr4+ZhqKjo6OBE58fLxiHi3g/AhMQ0MDKM27tm7dZ2dnQ0lJieJNYkJPTw+8vb2J8mC72L6a4dE0AhIajpaOjg6hJAvjqFGbDh0cHAichIQEWVkqzMzMwPb2No3+t/82GNxTam1tZTZoKxQsjFOK2g1inpGREfIOwDC1goICyM/Pp1Gmn5+fh42NDVFaUlIS6VSRKIns7u7C1NSURBVHLRYLqScxMVGc8Bm7uLiAoaEhZpot4rfBeHt7Q3t7u2Ib+EcNOKStWWlpKWRlZalm6+/vh9vbW1GezMxMKCsrE2nSCB62HRwciGT8mm9paRFp0sjq6iosLS1JZWYcl9K4iGBZd3c3S7ZJ+zYYrB07BjtIyfDm8CbVDL8PPv4VRDHL6+sr9Pb2ytJtmZKwHJaXWldXl1QSxVlToCjDR8TaiDk/P4fh4WFpMZvjPwKDrag9MZi+uLgIa2trGFQ0telsbGwMjo6OmGWLi4shJyeHmbawsADr6+vMNFyWV1ZWMtPw3YLvGDXj+h0jvHBrcNQ6idZTWFgIeXl5NEpWRxMTE3BycvKlsQI4DeJ0KLTp6WnyTSLUpGGcfmpqasiTT9NseYiMWpX9AwAA//9fG+5rAAADBElEQVTtmTtrYlEUhXcgaB6GPNRoiDEmYIoU/gmLgNoJ/jr/gIWliibm1Zgm8ZEoamFhI1iImEII4gzrglPMnJPrwD337mHOaoR9dvZa53wGvZ6NdDr9gyxQMpmkq6sr6aTn52d6fX2Vrq8WAoEAzedzms1mq9Jarz6fj5bLJU0mk7X6V00HBwfkcrloPB6vStLXzc1NSqVSdHFxIe15eXmhWq0mXV93YcMqMDA0g/P09ERvb2/rZmPVB3jYXyQSkeayCgoMLAWDgWZwHh8fqV6vo/WfkdvtNvZ1fn4uzWwlFJhYDgZDzeA8PDxQo9FAK3ttbW0Z+wmHw9KsVkOBkRIwGGwG5/7+nprNJlrZant729jH2dmZNKMKKDBTBgbDzeBUq1VqtVpoZaednR0jfygUkmZTBQWGSsHAwAzO3d0dvb+/o5WNdnd3jdynp6fSTCqhwFQ5GJiYwbm9vaWPjw+0Oi6Px2N8JT45OZFmUQ0FxraAgZEZnEqlQu12G62OaW9vz4ASDAalGeyAAnPbwMDMDE65XKZOp4NW27W/v2/kwwOuTHZBgb+tYGBoBqdUKlG320WrbcLTP3IdHx9LPe2EghC2g4GpGZxisUi9Xg+tynV4eGjk8fv9Ui+7oSCII2BgbAanUChQv99HqzIdHR0ZOfA7m0xOQEEWx8DA/Ds4n5+flM1m0aZEeKLPZDLk9Xql852CgkCOgkGA7+Co/K+5vr6mm5sbRBDKSSgI5DgYhJDByefzNBwO0WK58PN9NBoVznUaCkKxAIMgv8PB/Ugul6PFYoFlyxWLxSgej/8xlwMUhGIDBmFw0YZ38XQ6pcFgQKPRCGUlwgd+IpH49Rnz9fVl3BVZccllRWBWYKzY0N/MwOXX5eWl8Sd4IwAOF/3XYLhAEOXQYESnwqCmwTCAIIqgwYhOhUFNg2EAQRRBgxGdCoOaBsMAgiiCBiM6FQY1DYYBBFEEDUZ0KgxqGgwDCKIIGozoVBjUNBgGEEQRNBjRqTCoaTAMIIgiaDCiU2FQ+wmZMKhEIq4KfAAAAABJRU5ErkJggg=="},6200:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/functionPermission_goToPrivilege-93296bd0faa96dd1c7e47aee1ac7236c.png"},9072:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/functionPermission_maxRestriction-e3ed6cf12e2b95ec7a10195ab493efb1.png"},29795:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/functionPermission_maxRestriction2-f98cbec52eb1b365d530b637868af017.png"},95044:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/functionPermission_maxRestriction3-d2d17e2b79a831b68945311c36fab643.png"},30550:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/functionPermission_maxRestriction5-107e78f30c941da8533410eb2bd1d193.png"},6463:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/functionPermission_maxRestriction6-b81be9ca19e2e417ef67051e64c0419e.png"},20707:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/functionPermission_maxRestriction7-b4edd7b219703e3e6cc870ce2e802a14.png"},19441:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/functionPermission_promotedFromMultiple-8c947eeac5596c7ca885f676345bfcf2.png"},94401:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABCCAYAAADE+oEAAAAKrGlDQ1BJQ0MgUHJvZmlsZQAASImVlwdUU9kWhs+96SGhJYQOoTdBOgGkhNACKL2KSkgChBJCIKjYEXEExoKKCDbQAREFR6XIICqi2AZFxa4DMggo42BBVFTeBRZhZt56762319rrfHdnn332OeuerP8CQJbniESpsDwAacIscYiPBz0qOoaOGwREgAMQIAEdDjdTxAwKCgCIzY5/t4/3kUzE7ppP1fr33/+rKfD4mVwAoCCE43mZ3DSEzyD+iisSZwGAOoTE9ZZniaa4A2GqGGkQ4YdTnDjDI1McP81oMJ0TFsJCmAoAnsThiBMBINGROD2bm4jUIbkjbCnkCYQIixB2TUtL5yF8EmFjJAeJkabqM+L/UifxbzXjpTU5nEQpz+xl2vCegkxRKmfl/3kc/9vSUiWzaxgiTkoS+4YgoyJyZg9T0v2lLIxfFDjLAt50/jQnSXzDZ5mbyYqZZR7H0186N3VRwCwnCLzZ0jpZ7LBZ5md6hc6yOD1EulaCmMWcZY54bl1JSrg0nsRnS+vnJIVFznK2IGLRLGemhPrP5bCkcbEkRNo/X+jjMbeut3TvaZl/2a+ALZ2blRTmK907Z65/vpA5VzMzStobj+/pNZcTLs0XZXlI1xKlBknz+ak+0nhmdqh0bhbyQs7NDZKeYTLHL2iWAQukg1TExYAOApAnTwCy+CuypjbCShetFAsSk7LoTOSG8elsIddiHt3a0toGgKn7OvM6vKdN30OIdn0ulvsMAJfoycnJ1rlYAHIeZ4YAII7MxYxqASC3AXB1E1cizp6JTd8lDPJPIAeoQBVoAT1gDMyBNbAHzsAdeAE/EAjCQDRYCrggCaQhnS8Hq8EGkA8KwXawG5SBg+AwOApOgFOgCbSCi+AKuAFugx7wBPSCAfAajIKPYAKCIBxEhiiQKqQNGUBmkDXEgFwhLygACoGioTgoERJCEmg1tBEqhIqhMqgCqoF+hs5CF6FrUDf0COqDhqF30BcYBZNgKqwJG8LzYQbMhP3hMHgJnAhnwDlwHrwVLoUr4eNwI3wRvgH3wL3wa3gMBVAyKBpKB2WOYqBYqEBUDCoBJUatRRWgSlCVqDpUC6oTdRfVixpBfUZj0RQ0HW2Odkb7osPRXHQGei26CF2GPopuRHeg76L70KPo7xgyRgNjhnHCsDFRmETMckw+pgRThWnAXMb0YAYwH7FYLA1rhHXA+mKjscnYVdgi7H5sPfYCthvbjx3D4XCqODOcCy4Qx8Fl4fJxe3HHcedxd3ADuE94Gbw23hrvjY/BC/G5+BL8MXwb/g5+ED9BkCcYEJwIgQQeYSVhG+EIoYVwizBAmCAqEI2ILsQwYjJxA7GUWEe8THxKfC8jI6Mr4ygTLCOQWS9TKnNS5qpMn8xnkiLJlMQixZIkpK2katIF0iPSezKZbEh2J8eQs8hbyTXkS+Tn5E+yFFkLWbYsT3adbLlso+wd2TdyBDkDOabcUrkcuRK503K35EbkCfKG8ix5jvxa+XL5s/IP5McUKApWCoEKaQpFCscUrikMKeIUDRW9FHmKeYqHFS8p9lNQFD0Ki8KlbKQcoVymDFCxVCMqm5pMLaSeoHZRR5UUlWyVIpRWKJUrnVPqpaFohjQ2LZW2jXaKdp/2RVlTmanMV96iXKd8R3lcRV3FXYWvUqBSr9Kj8kWVruqlmqK6Q7VJ9ZkaWs1ULVhtudoBtctqI+pUdWd1rnqB+in1xxqwhqlGiMYqjcMaNzXGNLU0fTRFmns1L2mOaNG03LWStXZptWkNa1O0XbUF2ru0z2u/oivRmfRUeim9gz6qo6HjqyPRqdDp0pnQNdIN183Vrdd9pkfUY+gl6O3Sa9cb1dfWX6i/Wr9W/7EBwYBhkGSwx6DTYNzQyDDScLNhk+GQkYoR2yjHqNboqTHZ2M04w7jS+J4J1oRhkmKy3+S2KWxqZ5pkWm56yww2szcTmO03656Hmec4Tzivct4Dc5I50zzbvNa8z4JmEWCRa9Fk8Wa+/vyY+Tvmd87/bmlnmWp5xPKJlaKVn1WuVYvVO2tTa651ufU9G7KNt806m2abt7ZmtnzbA7YP7Sh2C+0227XbfbN3sBfb19kPO+g7xDnsc3jAoDKCGEWMq44YRw/HdY6tjp+d7J2ynE45/els7pzifMx5aIHRAv6CIwv6XXRdOC4VLr2udNc410OuvW46bhy3SrcX7nruPPcq90GmCTOZeZz5xsPSQ+zR4DHOcmKtYV3wRHn6eBZ4dnkpeoV7lXk999b1TvSu9R71sfNZ5XPBF+Pr77vD9wFbk81l17BH/Rz81vh1+JP8Q/3L/F8EmAaIA1oWwgv9Fu5c+HSRwSLhoqZAEMgO3Bn4LMgoKCPol2BscFBwefDLEKuQ1SGdoZTQZaHHQj+GeYRtC3sSbhwuCW+PkIuIjaiJGI/0jCyO7I2aH7Um6ka0WrQgujkGFxMRUxUztthr8e7FA7F2sfmx95cYLVmx5NpStaWpS88tk1vGWXY6DhMXGXcs7isnkFPJGYtnx++LH+WyuHu4r3nuvF28Yb4Lv5g/mOCSUJwwlOiSuDNxOMktqSRpRMASlAneJvsmH0weTwlMqU6ZTI1MrU/Dp8WlnRUqClOEHela6SvSu0VmonxRb4ZTxu6MUbG/uCoTylyS2ZxFRYTRTYmxZJOkL9s1uzz70/KI5adXKKwQrri50nTllpWDOd45P61Cr+Kual+ts3rD6r41zDUVa6G18Wvb1+mty1s3sN5n/dENxA0pG37Ntcwtzv2wMXJjS55m3vq8/k0+m2rzZfPF+Q82O28++AP6B8EPXVtstuzd8r2AV3C90LKwpPBrEbfo+o9WP5b+OLk1YWvXNvttB7Zjtwu339/htuNosUJxTnH/zoU7G3fRdxXs+rB72e5rJbYlB/cQ90j29JYGlDbv1d+7fe/XsqSynnKP8vp9Gvu27Bvfz9t/54D7gbqDmgcLD345JDj0sMKnorHSsLLkMPZw9uGXRyKOdP7E+KmmSq2qsOpbtbC692jI0Y4ah5qaYxrHttXCtZLa4eOxx2+f8DzRXGdeV1FPqy88CU5KTr76Oe7n+6f8T7WfZpyuO2NwZl8DpaGgEWpc2TjalNTU2xzd3H3W72x7i3NLwy8Wv1S36rSWn1M6t62N2JbXNnk+5/zYBdGFkYuJF/vbl7U/uRR16V5HcEfXZf/LV694X7nUyew8f9Xlaus1p2tnrzOuN92wv9F40+5mw692vzZ02Xc13nK41Xzb8XZL94Lutjtudy7e9bx75R773o2eRT3d98PvP3wQ+6D3Ie/h0KPUR28fZz+eeLL+KeZpwTP5ZyXPNZ5X/mbyW32vfe+5Ps++my9CXzzp5/a//j3z968DeS/JL0sGtQdrhqyHWoe9h2+/Wvxq4LXo9cRI/h8Kf+x7Y/zmzJ/uf94cjRodeCt+O/mu6L3q++oPth/ax4LGnn9M+zgxXvBJ9dPRz4zPnV8ivwxOLP+K+1r6zeRby3f/708n0yYnRRwxZ1oKoBCHExIAeFeN6IRoACi3Ef2weEZPTxs08w0wTeA/8YzmnjZ7AOqQYUoWsS4AcBJxw/VIbeR5ShKFuQPYxkbqs9p3WqdPGRb5YjnkPkU9KkxP8A+b0fB/6fufI5iqagv+Of4LCLAGpV3Pd3wAAACKZVhJZk1NACoAAAAIAAQBGgAFAAAAAQAAAD4BGwAFAAAAAQAAAEYBKAADAAAAAQACAACHaQAEAAAAAQAAAE4AAAAAAAAAkAAAAAEAAACQAAAAAQADkoYABwAAABIAAAB4oAIABAAAAAEAAABSoAMABAAAAAEAAABCAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdNodaJwAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAHUaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjY2PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjgyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6VXNlckNvbW1lbnQ+U2NyZWVuc2hvdDwvZXhpZjpVc2VyQ29tbWVudD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CkB8l2MAAAAcaURPVAAAAAIAAAAAAAAAIQAAACgAAAAhAAAAIQAAA23jDZDeAAADOUlEQVR4AeyYP0i6QRjHvxJhhiYpRHOLg4gtUdkiQQU1BJlWUDQU5NIUREtBgTWYEDXU0Nofi1ocHCIkgqaGbGhoqiWCSPAf1RD9fs+Bgva++dp75g3vgbzv3X3f55778Nxz5+k6Ojq+oBXVBHQaSNUMmQENJB+O0EBqIDkR4GRGi0gNJCcCnMxoEamB5ESAkxktIjWQnAhwMiNkRFosFmxubmJ+fh5PT0+cplpZM0KCDIVCcLlcuLu7w/T0NL6+xL8OEA5kb28vlpeX8+GzsbGBcDicr4v6IhTIhoYGHB8fg5658vHxgdHRUTw/P+eahHwKBXJtbQ1ut/sbqHg8Dr/f/61dpAZhQHZ3dyMQCMiyCQaDOD09le2vdocQIKWWdDGYt7c3jIyM4OXlpbhLiLoQIFdWVtDT01MSyPX1NWZnZ0vqqiGoOsiuri6sr68rnvvq6ioikYhi/V8JqwrSaDTi6OgIjY2Niucr6hKvKsjFxUX09/crhpgTirjEVYN0OBx4fHxEKpXKzVPRs729HXTY/m2hvBqNRsv63GAwwGaz4ebmpqzvlIhVgWxpacHe3h7e399xcHDAful0uuS49fX1TNvU1FRSKyfIZrNsF399fZWT5Nvr6urg8/kwPj4Ok8mEmZkZ3N7e5vt5vKgCWVtbi1gshpqaGuZLNpPFYfiQQaKJypWFhQUMDg7KdStuv7q6wtzcnKyeAA4PDzOAZrM5rxsYGEAikcjXebyoAkkObG9vo7W1tcCXTCbDYNJ/5GKgTqcTOzs7BXo1laWlJZydnRWY0Ov18Hg8DGDxRvbw8ICxsbECPY+KapB0OzM1NSXpC+XN/f19tjPTbks5iurNzc2S+t800hher5flaFohnqH/ACcmYLVaJM2dnJyUddySNCLRqBqkkghLJpMsQknb2dkp4Ya6Jvovfnl5ySLNarX+aIzSysXFxY+a33SqBkn5kfIkRYPohe41+/r6oGRDLHcuqkHSgHSb3dbWVu7Yf66/v7/H5ORkRcblApKcE/2ai+hRft7a2hIXpN1ux+7ubkUc5GmUjkp0ZKpE4RKROp0O5+fnbFeuhJM8bH5+frIbJjo9VKL8AwAA///6Rk2GAAABmUlEQVTtlzGuglAQRa+lhQW2NCQG1mCoSNyBoWEBUhA1MS6Cih5t1ISEBjdgZ0OlsdDO0mVY+D8LIHmB+/jmZ15DwcyZm8OEQG88Hn9AOEmSwHVdAkkP4vF4YDab6YH/UnsskUEQYLlcagvaFrzf77HZbNpiavtpIh3HweFwqB301zcWiwUul4u2GDSRVcLT6YTBYKAtbFPw+/3GZDJBddV1qCLjOIbnebqyNuZer1fM5/PG/SqNVJG+72O9XqvM7bRmu91it9tpnUkVaVkW8jzXGrgJPAxD3O/3Jq3KPVSR1dTVagXbtpUD6C58vV6oXjm6D12k7sDfyheRpCcjIr9Z5HQ6xXA4JEVshzmfz3g+n+0gCt30jTRNE0VRKIzupqQsy04+yegiR6MRsizrxpLClNvthiiKFCrbldBF9vt9HI9HGIbRLhmpu/r/T9OURKvH0EXWj/rfd0Qk6fmKSBFJMkDCyEaKSJIBEkY2UkSSDJAwspEikmSAhJGNFJEkAySMbKSIJBkgYWQjRSTJAAkjGykiSQZImB9g+rFg6Kd2vwAAAABJRU5ErkJggg=="},22935:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAABCCAYAAAAPIWX+AAAKrGlDQ1BJQ0MgUHJvZmlsZQAASImVlwdUU9kWhs+96SGhJYQOoTdBOgGkhNACKL2KSkgChBJCIKjYEXEExoKKCDbQAREFR6XIICqi2AZFxa4DMggo42BBVFTeBRZhZt56762319rrfHdnn332OeuerP8CQJbniESpsDwAacIscYiPBz0qOoaOGwREgAMQIAEdDjdTxAwKCgCIzY5/t4/3kUzE7ppP1fr33/+rKfD4mVwAoCCE43mZ3DSEzyD+iisSZwGAOoTE9ZZniaa4A2GqGGkQ4YdTnDjDI1McP81oMJ0TFsJCmAoAnsThiBMBINGROD2bm4jUIbkjbCnkCYQIixB2TUtL5yF8EmFjJAeJkabqM+L/UifxbzXjpTU5nEQpz+xl2vCegkxRKmfl/3kc/9vSUiWzaxgiTkoS+4YgoyJyZg9T0v2lLIxfFDjLAt50/jQnSXzDZ5mbyYqZZR7H0186N3VRwCwnCLzZ0jpZ7LBZ5md6hc6yOD1EulaCmMWcZY54bl1JSrg0nsRnS+vnJIVFznK2IGLRLGemhPrP5bCkcbEkRNo/X+jjMbeut3TvaZl/2a+ALZ2blRTmK907Z65/vpA5VzMzStobj+/pNZcTLs0XZXlI1xKlBknz+ak+0nhmdqh0bhbyQs7NDZKeYTLHL2iWAQukg1TExYAOApAnTwCy+CuypjbCShetFAsSk7LoTOSG8elsIddiHt3a0toGgKn7OvM6vKdN30OIdn0ulvsMAJfoycnJ1rlYAHIeZ4YAII7MxYxqASC3AXB1E1cizp6JTd8lDPJPIAeoQBVoAT1gDMyBNbAHzsAdeAE/EAjCQDRYCrggCaQhnS8Hq8EGkA8KwXawG5SBg+AwOApOgFOgCbSCi+AKuAFugx7wBPSCAfAajIKPYAKCIBxEhiiQKqQNGUBmkDXEgFwhLygACoGioTgoERJCEmg1tBEqhIqhMqgCqoF+hs5CF6FrUDf0COqDhqF30BcYBZNgKqwJG8LzYQbMhP3hMHgJnAhnwDlwHrwVLoUr4eNwI3wRvgH3wL3wa3gMBVAyKBpKB2WOYqBYqEBUDCoBJUatRRWgSlCVqDpUC6oTdRfVixpBfUZj0RQ0HW2Odkb7osPRXHQGei26CF2GPopuRHeg76L70KPo7xgyRgNjhnHCsDFRmETMckw+pgRThWnAXMb0YAYwH7FYLA1rhHXA+mKjscnYVdgi7H5sPfYCthvbjx3D4XCqODOcCy4Qx8Fl4fJxe3HHcedxd3ADuE94Gbw23hrvjY/BC/G5+BL8MXwb/g5+ED9BkCcYEJwIgQQeYSVhG+EIoYVwizBAmCAqEI2ILsQwYjJxA7GUWEe8THxKfC8jI6Mr4ygTLCOQWS9TKnNS5qpMn8xnkiLJlMQixZIkpK2katIF0iPSezKZbEh2J8eQs8hbyTXkS+Tn5E+yFFkLWbYsT3adbLlso+wd2TdyBDkDOabcUrkcuRK503K35EbkCfKG8ix5jvxa+XL5s/IP5McUKApWCoEKaQpFCscUrikMKeIUDRW9FHmKeYqHFS8p9lNQFD0Ki8KlbKQcoVymDFCxVCMqm5pMLaSeoHZRR5UUlWyVIpRWKJUrnVPqpaFohjQ2LZW2jXaKdp/2RVlTmanMV96iXKd8R3lcRV3FXYWvUqBSr9Kj8kWVruqlmqK6Q7VJ9ZkaWs1ULVhtudoBtctqI+pUdWd1rnqB+in1xxqwhqlGiMYqjcMaNzXGNLU0fTRFmns1L2mOaNG03LWStXZptWkNa1O0XbUF2ru0z2u/oivRmfRUeim9gz6qo6HjqyPRqdDp0pnQNdIN183Vrdd9pkfUY+gl6O3Sa9cb1dfWX6i/Wr9W/7EBwYBhkGSwx6DTYNzQyDDScLNhk+GQkYoR2yjHqNboqTHZ2M04w7jS+J4J1oRhkmKy3+S2KWxqZ5pkWm56yww2szcTmO03656Hmec4Tzivct4Dc5I50zzbvNa8z4JmEWCRa9Fk8Wa+/vyY+Tvmd87/bmlnmWp5xPKJlaKVn1WuVYvVO2tTa651ufU9G7KNt806m2abt7ZmtnzbA7YP7Sh2C+0227XbfbN3sBfb19kPO+g7xDnsc3jAoDKCGEWMq44YRw/HdY6tjp+d7J2ynE45/els7pzifMx5aIHRAv6CIwv6XXRdOC4VLr2udNc410OuvW46bhy3SrcX7nruPPcq90GmCTOZeZz5xsPSQ+zR4DHOcmKtYV3wRHn6eBZ4dnkpeoV7lXk999b1TvSu9R71sfNZ5XPBF+Pr77vD9wFbk81l17BH/Rz81vh1+JP8Q/3L/F8EmAaIA1oWwgv9Fu5c+HSRwSLhoqZAEMgO3Bn4LMgoKCPol2BscFBwefDLEKuQ1SGdoZTQZaHHQj+GeYRtC3sSbhwuCW+PkIuIjaiJGI/0jCyO7I2aH7Um6ka0WrQgujkGFxMRUxUztthr8e7FA7F2sfmx95cYLVmx5NpStaWpS88tk1vGWXY6DhMXGXcs7isnkFPJGYtnx++LH+WyuHu4r3nuvF28Yb4Lv5g/mOCSUJwwlOiSuDNxOMktqSRpRMASlAneJvsmH0weTwlMqU6ZTI1MrU/Dp8WlnRUqClOEHela6SvSu0VmonxRb4ZTxu6MUbG/uCoTylyS2ZxFRYTRTYmxZJOkL9s1uzz70/KI5adXKKwQrri50nTllpWDOd45P61Cr+Kual+ts3rD6r41zDUVa6G18Wvb1+mty1s3sN5n/dENxA0pG37Ntcwtzv2wMXJjS55m3vq8/k0+m2rzZfPF+Q82O28++AP6B8EPXVtstuzd8r2AV3C90LKwpPBrEbfo+o9WP5b+OLk1YWvXNvttB7Zjtwu339/htuNosUJxTnH/zoU7G3fRdxXs+rB72e5rJbYlB/cQ90j29JYGlDbv1d+7fe/XsqSynnKP8vp9Gvu27Bvfz9t/54D7gbqDmgcLD345JDj0sMKnorHSsLLkMPZw9uGXRyKOdP7E+KmmSq2qsOpbtbC692jI0Y4ah5qaYxrHttXCtZLa4eOxx2+f8DzRXGdeV1FPqy88CU5KTr76Oe7n+6f8T7WfZpyuO2NwZl8DpaGgEWpc2TjalNTU2xzd3H3W72x7i3NLwy8Wv1S36rSWn1M6t62N2JbXNnk+5/zYBdGFkYuJF/vbl7U/uRR16V5HcEfXZf/LV694X7nUyew8f9Xlaus1p2tnrzOuN92wv9F40+5mw692vzZ02Xc13nK41Xzb8XZL94Lutjtudy7e9bx75R773o2eRT3d98PvP3wQ+6D3Ie/h0KPUR28fZz+eeLL+KeZpwTP5ZyXPNZ5X/mbyW32vfe+5Ps++my9CXzzp5/a//j3z968DeS/JL0sGtQdrhqyHWoe9h2+/Wvxq4LXo9cRI/h8Kf+x7Y/zmzJ/uf94cjRodeCt+O/mu6L3q++oPth/ax4LGnn9M+zgxXvBJ9dPRz4zPnV8ivwxOLP+K+1r6zeRby3f/708n0yYnRRwxZ1oKoBCHExIAeFeN6IRoACi3Ef2weEZPTxs08w0wTeA/8YzmnjZ7AOqQYUoWsS4AcBJxw/VIbeR5ShKFuQPYxkbqs9p3WqdPGRb5YjnkPkU9KkxP8A+b0fB/6fufI5iqagv+Of4LCLAGpV3Pd3wAAACKZVhJZk1NACoAAAAIAAQBGgAFAAAAAQAAAD4BGwAFAAAAAQAAAEYBKAADAAAAAQACAACHaQAEAAAAAQAAAE4AAAAAAAAAkAAAAAEAAACQAAAAAQADkoYABwAAABIAAAB4oAIABAAAAAEAAAA+oAMABAAAAAEAAABCAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdOOuBcAAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAHUaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjY2PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjYyPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6VXNlckNvbW1lbnQ+U2NyZWVuc2hvdDwvZXhpZjpVc2VyQ29tbWVudD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Ctm5aEAAAAAcaURPVAAAAAIAAAAAAAAAIQAAACgAAAAhAAAAIQAABVt67aLBAAAFJ0lEQVR4AeyY2UtVXxTHl3POI2iamjMO4FiGGBoS2oMTPgS9if+XIPhg+KQi5UBQhCNFKmrOmJoTjjmllvFZcET85fGec/3Rgy7YeD1333P2d3+/67vWPi5Pnjw5k1sYLnfAbxnrd4zfMsLljvE7xm/JDtxJ/ZYQfQ7zf2HcxcVF3Nzc5N69e+Ll5aV/PT099RrXGcwhzs7O5Pfv3/Lr1y85PT2Vk5MT+fnzpxwdHengGnNuOm4cOIDc3d0V7P3794UREREhYWFh4uvrKz4+PvodcwgAA/Lw8FD29/dlc3NTVldXZXl5Wb5//y57e3u6ITcN/kaAu7q6Klg/Pz/x9/eXgIAACQ4OlsjISB0GcL4HOCrw8PD4D3BAbm1tycrKioJeWlqSjY0N2d3dlR8/fugmoAgU4uxG3AhwgAAoKSlJEhMTJS4uTqKjo/WawTBSh2VkzkYxCADAujGOj49V6gcHB6oANmFubk5mZmZkampKtre3hTmAdyacAu7t7S0M5BwVFSUJCQk6YmJiVN4GSDsLNPIexr99+yazs7MyPT0ti4uLmgaogxSxuwFOAUfCyDk/P19yc3NV5kidzUAFhGFidsCjBtgl/wG6s7MjY2Nj0tfXJ/Pz87K2tqZmaOfetoADLjAwUJKTk3VkZmZKenr6uYztLOS63xipAPNfvnyRr1+/qvQxQzzAKvO2gJPHgIblrKwsZRrjIpxh2Aw87DNgH6MbHx+XwcFBmZiY0PynBFoJS8ApRwAEcF5enoInr/9FLCwsKGjY//Tpk7o/5dBR5i0Bf/DggcTGxsrTp091GOb2L4DDMOwD+sOHD2p8mCANjyPhEHBqLuUoJydHHj9+LGlpaTocecDFObDBgqnVsENggiEhIVr6SBOrqULOj46O6gYgfUwQQ7wuHAJuNCUvXryQiooKlTtsWwnyEzaowyyU5oQANMZISbRT/ihp1Px3795Ja2urdn14AM8zC4eAP3z4UBuToqIiefbsmS7Q7KZ/+46OC6bJzf7+fq3LzAsPD1cV0fzQ7dnZUEAODAwoeMPsqAJm4RBw6jSgU1NTJSUlxbIcWQCs0H3BNjk5OTmp64JpPIM0wigBbyeQPE7f09MjHz9+vFbupsCRHm3m8+fPVeJGz201DwECcBY3MjIi3d3d2ohwHcMsKSmRR48eSXx8vG3g1PP19XXp7OyUtrY2fZ4Z66bAMR6OllVVVfLq1Ss1IONUxaKtBLmIzGH8zZs3Mjw8rD+nSpSVlSlw+nsOOHYCkHhIS0uLNDY2alNjVttNgXOUhOXS0lIpLy8/b0PtLIwcp+XE1D5//qz9N8rhGTRBsB0UFKQbbef+/IZc7+rqUvA8h5b2KpMzBU7OkdcFBQVSWFh4fpS0szAWwIB5Dh6UM05oKIq85hTH/3bS6OJ6MLn3799rvmN0VzU0psCzs7MVcEZGxnkvfvEhdj4jScCjAECSOqSU3RS6vAbA4iNUjt7eXj3uXp7D/6bAi4uLVeLkIe5rnKH/diMr1y7Lz1mWLz6btzfIvKOjQ9rb2+0Bp2F5+fKl1lpOY3YWCEhYpqnA1XmxgAkZZkT/z8ZSzzE24zh7EYyVz5zU6Bcwuebm5itbWFPGq6urpba2Vk3HeFVkZRHMNdpU3p+9fftWjQ23ZSB5ANMUYXDOuLqxLuMNzuvXr6WhocEe8JqaGqmrq1MmqOl2AsZhGEenlJF/Q0ND+iKB67BdWVmpp73Q0FDLndvlNXFP/KOpqUnq6+uvBP4HAAD//3BrJHgAAAYLSURBVO2Y60tVTRTGl5VaapaVZpZFFy+lZnYxgyKDlKJU8oYkfknwvwpBxPDyQVEivEQlaWk3MTVF0xQpSvPSXUt7fwsGRM7Z7bPPidcPDQz7uJ0zM8+stZ7nmeOXlpa2LG5afn6+lJWVSUhIiPj5+bkZZe/1z58/5dOnTzI0NCS3bt2Sx48f6xfj4+OlpKRETp8+LYGBgbJhwwZ7E7oZtbS0JL9+/ZKqqiq5efOmLC4uuhzpZwU8Ly9PSktLJTQ0VNavX+9yArsv2cDHjx9lcHBQ6urq5NmzZwo0ISFBrl+/LsePH1fQ69atszuly3GA5pA5XIDz2VWzBH7t2jW5ceOGbNmyRfz9/V193/a7hYUFef/+vQwMDEh9fb28fPlS501KSpLCwkJJTk62PZfVQIByyAAvLy93BjwrK0vTcMeOHbJx40av0v3bt2/y+vVrBdzS0iKjo6MSFRWlgK9cuSKHDx+2wmP7f6zz9etXzarKykpnwC9fvixFRUWyc+dOTXdv6vzz58/S29srL168kI6ODo1+bGysHDt2TNLT0+XgwYO2wVkNnJ+fl9nZWWloaJCamhpnwC9cuCA5OTmyd+9eBe9N/bEZCO3JkyfS09MjX758kZSUFK3tU6dOSXR0tBUe2/+jnN6+fSt37tyRpqYmZ8DPnDkjFy9eFCKzf/9+rwhuenpa7t69K48ePZLh4WEFcvbsWTl58qQcOXJED9Y2OouBb968kZGREbl3756uB9m5apbkBvGkpqZqZCAfb6SGSDQ2Nkp7e7u8e/dOJTIzM1NljIwKCwtztT+P3/X19cnz5881s7q7uwV5c9UsgRNldJbInDt3zjGzLy8va/pVV1drJNDziIgIyc3NVeCQZ3BwsKv9efyOcrp//76qB57BEXA2B/NmZGTI1atXJSAgwOONAJp0m5iYEFiWFERu9u3bJ8XFxUI5BQUFOT7U1Rtqa2vTzGI9ap31XTXLiBOFzZs3K+iCggLdoKfpzol///5dxsbGpKKiQh48eCCQ5KFDh1Qq/zNQWkIYJLpT5TDG5fbt28rmcApK4gg4poVOxLOzs5WAtm3b5tHmMBQwOoRWW1srnZ2dChQWRy6RMywxnUPGtjpprAHY5uZmjTig3dlV5reMuNkAUTl//rzWOwzviayx+NTUlAJHW58+faqRxRtAnBgXPoeHhyvBbdq0ySxr+0lUySjs8MOHDzWrcIpWzRZwogPRYTSQN1LSLnhSEDJDZkhDPDrpjA2OiYmRuLg4lTO4xMklhVKiI5Otra16wByCOxkzh2ELOORDv3TpkmBjt27dqk7OTGL1ZFM/fvxQp0Y0Xr16pcOxwEQZkkM2IyMjPSohsyYpPTc3p5qNXHIRwrK6q23zPVvAITQ6Wo7hOHr0qHYzidWTDQAeD42Ws0kaWQN4ahsNd5LizINkodumA9rdjYzxptkCbgaTjqQ9mk6H9X2lv2YNu08OEtuLSUEiufQgX3ZAs4ZHwIkKQPHYJ06cUGKC7P6PNj4+Lv39/RppCHNmZkaz6k8pbvbqEXDzpQMHDuhtih8POASIih8rIC2nOmzmdvcEEJ0oI13c6wFMqnPd/ROLr57XEXBjbDAhRBzw1L0xIasX8cXfxqDgB1AGSJLPHAIEB4940hwBNwugv0aPif727duVqJAlJ/bWzLvySc2iCpAifoBLSFdXl5DqHz58sDQpK+dZ/dkr4ACEmXft2iV79uxRF5aYmKgXEF/dtvAAAMScwNxoNCRGlDkQuzXtU+BmMkgPWUKPuVvv3r1bdZmDMdEnAygFZHGlASJFSWOTyjg96pWOx8eGTk5OKnB+pyPqMLqnqW32ap5eRdxMYmobrw3RIXtkAQaFKyfR5z3cgBEiS8yPl6QyAI088dMRDA1gIs3dnQhjTIg+BwJop5E2e/YJcDMZTw4BoFxmTDesT2bQyQIDnEgD3IAHHPUMeMCa7ilrr9yTq88+B46ckc7mZsfTOD/8PQfDGOP1iRwRdJXypD2drPA2tVeD9znw1Qus1b//AV+rkflb+/oX8b91smt13n8RX6uR+Vv7+g3Qw3OrSPySQQAAAABJRU5ErkJggg=="}}]);
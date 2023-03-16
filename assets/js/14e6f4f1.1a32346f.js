"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[4794],{3905:(A,a,e)=>{e.d(a,{Zo:()=>E,kt:()=>N});var Q=e(7294);function t(A,a,e){return a in A?Object.defineProperty(A,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[a]=e,A}function c(A,a){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var Q=Object.getOwnPropertySymbols(A);a&&(Q=Q.filter((function(a){return Object.getOwnPropertyDescriptor(A,a).enumerable}))),e.push.apply(e,Q)}return e}function n(A){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?c(Object(e),!0).forEach((function(a){t(A,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(a){Object.defineProperty(A,a,Object.getOwnPropertyDescriptor(e,a))}))}return A}function g(A,a){if(null==A)return{};var e,Q,t=function(A,a){if(null==A)return{};var e,Q,t={},c=Object.keys(A);for(Q=0;Q<c.length;Q++)e=c[Q],a.indexOf(e)>=0||(t[e]=A[e]);return t}(A,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(A);for(Q=0;Q<c.length;Q++)e=c[Q],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(t[e]=A[e])}return t}var i=Q.createContext({}),o=function(A){var a=Q.useContext(i),e=a;return A&&(e="function"==typeof A?A(a):n(n({},a),A)),e},E=function(A){var a=o(A.components);return Q.createElement(i.Provider,{value:a},A.children)},I="mdxType",C={inlineCode:"code",wrapper:function(A){var a=A.children;return Q.createElement(Q.Fragment,{},a)}},r=Q.forwardRef((function(A,a){var e=A.components,t=A.mdxType,c=A.originalType,i=A.parentName,E=g(A,["components","mdxType","originalType","parentName"]),I=o(e),r=t,N=I["".concat(i,".").concat(r)]||I[r]||C[r]||c;return e?Q.createElement(N,n(n({ref:a},E),{},{components:e})):Q.createElement(N,n({ref:a},E))}));function N(A,a){var e=arguments,t=a&&a.mdxType;if("string"==typeof A||t){var c=e.length,n=new Array(c);n[0]=r;var g={};for(var i in a)hasOwnProperty.call(a,i)&&(g[i]=a[i]);g.originalType=A,g[I]="string"==typeof A?A:t,n[1]=g;for(var o=2;o<c;o++)n[o]=e[o];return Q.createElement.apply(null,n)}return Q.createElement.apply(null,e)}r.displayName="MDXCreateElement"},4667:(A,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>n,default:()=>I,frontMatter:()=>c,metadata:()=>g,toc:()=>o});var Q=e(7462),t=(e(7294),e(3905));const c={id:"lang-picture",title:"Picture"},n=void 0,g={unversionedId:"language/basics/lang-picture",id:"language/basics/lang-picture",title:"Picture",description:"A Picture attribute, variable or expression can be any valid image. In general, this includes any picture that can be put on the pasteboard or read from the disk using commands such as READ PICTURE FILE.",source:"@site/docs/language/basics/lang-picture.md",sourceDirName:"language/basics",slug:"/language/basics/lang-picture",permalink:"/docs/language/basics/lang-picture",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/basics/lang-picture.md",tags:[],version:"current",frontMatter:{id:"lang-picture",title:"Picture"},sidebar:"QodlyScript",previous:{title:"Object",permalink:"/docs/language/basics/lang-object"},next:{title:"Time",permalink:"/docs/language/basics/lang-time"}},i={},o=[{value:"Picture Codec IDs",id:"picture-codec-ids",level:2},{value:"Picture operators",id:"picture-operators",level:2},{value:"Examples",id:"examples",level:3}],E={toc:o};function I(A){let{components:a,...c}=A;return(0,t.kt)("wrapper",(0,Q.Z)({},E,c,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"A Picture attribute, variable or expression can be any valid image. In general, this includes any picture that can be put on the pasteboard or read from the disk using commands such as ",(0,t.kt)("inlineCode",{parentName:"p"},"READ PICTURE FILE"),". "),(0,t.kt)("p",null,"QodlyScript uses native APIs to encode (write) and decode (read) picture. These implementations provide access to numerous native formats. "),(0,t.kt)("p",null,"QodlyScript supports metadata in pictures. Two commands, ",(0,t.kt)("inlineCode",{parentName:"p"},"SET PICTURE METADATA")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"GET PICTURE METADATA"),", let you benefit from metadata in your developments."),(0,t.kt)("h2",{id:"picture-codec-ids"},"Picture Codec IDs"),(0,t.kt)("p",null,"QodlyScript supports natively a basic set of picture formats, such as .jpeg, .png, or .svg. "),(0,t.kt)("p",null,"Picture formats recognized by QodlyScript are returned by the ",(0,t.kt)("inlineCode",{parentName:"p"},"PICTURE CODEC LIST")," command as picture Codec IDs. They can be returned in the following forms:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},'As an extension (for example ".gif")'),(0,t.kt)("li",{parentName:"ul"},'As a MIME type (for example "image/jpeg")')),(0,t.kt)("p",null,"The form returned for each format will depend on the way the Codec is recorded at the system level. Note that the list of available codecs for reading and writing can be different since encoding codecs may require specific licenses."),(0,t.kt)("p",null,"Most of the ",(0,t.kt)("a",{parentName:"p",href:"picture.md"},"picture management commands")," can receive a Codec ID as a parameter. It is therefore imperative to use the system ID returned by the ",(0,t.kt)("inlineCode",{parentName:"p"},"PICTURE CODEC LIST")," command."),(0,t.kt)("h2",{id:"picture-operators"},"Picture operators"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Operation"),(0,t.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,t.kt)("th",{parentName:"tr",align:null},"Returns"),(0,t.kt)("th",{parentName:"tr",align:null},"Action"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"Horizontal concatenation"),(0,t.kt)("td",{parentName:"tr",align:null},"Pict1 + Pict2"),(0,t.kt)("td",{parentName:"tr",align:null},"Picture"),(0,t.kt)("td",{parentName:"tr",align:null},"Add Pict2 to the right of Pict1")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"Vertical concatenation"),(0,t.kt)("td",{parentName:"tr",align:null},"Pict1 / Pict2"),(0,t.kt)("td",{parentName:"tr",align:null},"Picture"),(0,t.kt)("td",{parentName:"tr",align:null},"Add Pict2 to the bottom of Pict1")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"Exclusive superimposition"),(0,t.kt)("td",{parentName:"tr",align:null},"Pict1 & Pict2"),(0,t.kt)("td",{parentName:"tr",align:null},"Picture"),(0,t.kt)("td",{parentName:"tr",align:null},"Superimposes Pict2 on top of Pict1 (Pict2 in foreground). Produces the same result as ",(0,t.kt)("inlineCode",{parentName:"td"},"COMBINE PICTURES(pict3,pict1,Superimposition,pict2)"))),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"Inclusive superimposition"),(0,t.kt)("td",{parentName:"tr",align:null},"Pict1 ","|"," Pict2"),(0,t.kt)("td",{parentName:"tr",align:null},"Picture"),(0,t.kt)("td",{parentName:"tr",align:null},"Superimposes Pict2 on Pict1 and returns resulting mask if both pictures are the same size. Produces the same result as ",(0,t.kt)("inlineCode",{parentName:"td"},"equal=Equal pictures(Pict1,Pict2,Pict3)"))),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"Horizontal move"),(0,t.kt)("td",{parentName:"tr",align:null},"Picture + Number"),(0,t.kt)("td",{parentName:"tr",align:null},"Picture"),(0,t.kt)("td",{parentName:"tr",align:null},"Move Picture horizontally Number pixels")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"Vertical move"),(0,t.kt)("td",{parentName:"tr",align:null},"Picture / Number"),(0,t.kt)("td",{parentName:"tr",align:null},"Picture"),(0,t.kt)("td",{parentName:"tr",align:null},"Move Picture vertically Number pixels")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"Resizing"),(0,t.kt)("td",{parentName:"tr",align:null},"Picture * Number"),(0,t.kt)("td",{parentName:"tr",align:null},"Picture"),(0,t.kt)("td",{parentName:"tr",align:null},"Resize Picture by Number ratio")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"Horizontal scaling"),(0,t.kt)("td",{parentName:"tr",align:null},"Picture *+ Number"),(0,t.kt)("td",{parentName:"tr",align:null},"Picture"),(0,t.kt)("td",{parentName:"tr",align:null},"Resize Picture horizontally by Number ratio")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"Vertical scaling"),(0,t.kt)("td",{parentName:"tr",align:null},"Picture *","|"," Number"),(0,t.kt)("td",{parentName:"tr",align:null},"Picture"),(0,t.kt)("td",{parentName:"tr",align:null},"Resize Picture vertically by Number ratio")))),(0,t.kt)("admonition",{title:"Notes",type:"note"},(0,t.kt)("ul",{parentName:"admonition"},(0,t.kt)("li",{parentName:"ul"},"In order to use the | operator, Pict1 and Pict2 must have exactly the same dimension. If both pictures are a different size, the operation Pict1 | Pict2 produces a blank picture."),(0,t.kt)("li",{parentName:"ul"},"The ",(0,t.kt)("inlineCode",{parentName:"li"},"COMBINE PICTURES")," command can be used to superimpose pictures while keeping the characteristics of each source picture in the resulting picture."),(0,t.kt)("li",{parentName:"ul"},"Additional operations can be performed on pictures using the ",(0,t.kt)("inlineCode",{parentName:"li"},"TRANSFORM PICTURE")," command."),(0,t.kt)("li",{parentName:"ul"},"There is no comparison operators on pictures, however 4D proposes the ",(0,t.kt)("inlineCode",{parentName:"li"},"Equal picture")," command to compare two pictures."))),(0,t.kt)("h3",{id:"examples"},"Examples"),(0,t.kt)("p",null,"Horizontal concatenation"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-4d"}," circle+rectangle //Place the rectangle to the right of the circle\n rectangle+circle //Place the circle to the right of the rectangle\n")),(0,t.kt)("p",null,(0,t.kt)("img",{src:e(7625).Z,width:"376",height:"279"}),"\n",(0,t.kt)("img",{src:e(4343).Z,width:"376",height:"279"})),(0,t.kt)("p",null,"Vertical concatenation"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-4d"}," circle/rectangle //Place the rectangle under the circle\n rectangle/circle //Place the circle under the rectangle\n")),(0,t.kt)("p",null,(0,t.kt)("img",{src:e(5604).Z,width:"376",height:"279"}),"\n",(0,t.kt)("img",{src:e(8704).Z,width:"376",height:"279"})),(0,t.kt)("p",null,"Exclusive superimposition"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-4d"},"Pict3=Pict1 & Pict2 // Superimposes Pict2 on top of  Pict1\n")),(0,t.kt)("p",null,(0,t.kt)("img",{src:e(6784).Z,width:"805",height:"335"})),(0,t.kt)("p",null,"Inclusive superimposition"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-4d"},"Pict3=Pict1|Pict2 // Recovers resulting mask from superimposing two pictures of the same size\n")),(0,t.kt)("p",null,(0,t.kt)("img",{src:e(696).Z,width:"806",height:"333"})),(0,t.kt)("p",null,"Horizontal move"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-4d"},"rectangle+50 //Move the rectangle 50 pixels to the right\nrectangle-50 //Move the rectangle 50 pixels to the left\n")),(0,t.kt)("p",null,(0,t.kt)("img",{src:e(5639).Z,width:"376",height:"279"})),(0,t.kt)("p",null,"Vertical move"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-4d"},"rectangle/50 //Move the rectangle down by 50 pixels\nrectangle/-20 //Move the rectangle up by 20 pixels\n")),(0,t.kt)("p",null,(0,t.kt)("img",{src:e(3367).Z,width:"376",height:"279"}),(0,t.kt)("img",{src:e(2284).Z,width:"376",height:"279"})),(0,t.kt)("p",null,"Resize"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-4d"},"rectangle*1.5 //The rectangle becomes 50% bigger\nrectangle*0.5 //The rectangle becomes 50% smaller\n")),(0,t.kt)("p",null,(0,t.kt)("img",{src:e(3754).Z,width:"376",height:"279"}),(0,t.kt)("img",{src:e(9031).Z,width:"376",height:"279"})),(0,t.kt)("p",null,"Horizontal scaling"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-4d"},"circle*+3 //The circle becomes 3 times wider\ncircle*+0.25 //The circle's width becomes a quarter of what it was\n")),(0,t.kt)("p",null,(0,t.kt)("img",{src:e(4439).Z,width:"376",height:"279"}),(0,t.kt)("img",{src:e(3631).Z,width:"376",height:"279"})),(0,t.kt)("p",null,"Vertical scaling"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-4d"},"circle*|2 //The circle becomes twice as tall\ncircle*|0.25 //The circle's height becomes a quarter of what it was\n")),(0,t.kt)("p",null,(0,t.kt)("img",{src:e(1208).Z,width:"376",height:"279"}),(0,t.kt)("img",{src:e(3810).Z,width:"376",height:"279"})))}I.isMDXComponent=!0},4439:(A,a,e)=>{e.d(a,{Z:()=>Q});const Q="data:image/png;base64,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"},3631:(A,a,e)=>{e.d(a,{Z:()=>Q});const Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAEXCAIAAAAoXch+AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFg8hDI2iBFEAAAR2SURBVHic7d3RattAAEXBqPT/f9l1SdK49mq1MjkNDTNQKMYPeTrclYT18gIQ267/LpfLV/8ZwLe1bdvP9a++/keVgLOOF82fxNySG2DRtSE/vvpvAL6/g9AM58zkc4BHs9DMa6I1wCJHJyC3G5qVwWLUACssGiA3Ds36VDFqgEMWDZATGiA3CM3Z05DTEzBn0QA5oQFyQgPk7kPz3AUXl2mACYsGyAkNkBMaICc0QO6v0Eyu6V7e7X3B9WBgz9Kiue2LXwsGznJ0AnLHoXmcMEYNcIpFA+SEBsh9hObUi+KGn7vxBAxZNEBOaICc0AA5oQFys9DMn5fxNA2wyKIBckID5IQGyAkNkHsLzWc91OvhYOCRRQPkdkOzcvfaHW5ghUUD5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiA3G5oVl4F53VxwAqLBsi9heazXgXnlXLAI4sGyAkNkBMaICc0QG4Wmvnda/e2gUUWDZATGiAnNEBOaIDcR2iGD/XuXfEdfu6xYGDIogFyQgPkjkPzeEryBA1wikUD5JZCczthzBngrN/VuL1b9HRH3HIChq5VcXQCckID5IQGyAkNkLsPzXPXdF0JBiYsGiAnNEBOaIDcIDRnL7i4QAPMWTRATmiA3Dg066ch5ybgkEUD5HZDszJVzBlghUUD5GahmQ8WcwZYdLBo9mqiMsA6Rycgd/9Tnrvfe/+JT1sGOGV7zYd2AB2/GQz8C0ID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQAAD/v18GonQlEoqedQAAAABJRU5ErkJggg=="},7625:(A,a,e)=>{e.d(a,{Z:()=>Q});const Q="data:image/png;base64,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"},4343:(A,a,e)=>{e.d(a,{Z:()=>Q});const Q="data:image/png;base64,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"},5604:(A,a,e)=>{e.d(a,{Z:()=>Q});const Q="data:image/png;base64,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"},8704:(A,a,e)=>{e.d(a,{Z:()=>Q});const Q="data:image/png;base64,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"},5639:(A,a,e)=>{e.d(a,{Z:()=>Q});const Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAEXCAIAAAAoXch+AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFg8hDfqlNMcAAAO0SURBVHic7dxBCsJAEEXBtHj/K4/xAirIYzRUQfZ/9TKrPg6A2JzfWmv3DOCyZua+e8Mr577dE+A9v+q3brsHANcnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogNxP3wz+nmOufM6N6o4XDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPk7rsHtGZm9wTAiwboCQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZB7Xrpca+2eAVzWzHjRADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAYA+H8Pt4QOMrzYsAUAAAAASUVORK5CYII="},9031:(A,a,e)=>{e.d(a,{Z:()=>Q});const Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAEXCAIAAAAoXch+AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFg8hDI2iBFEAAAOxSURBVHic7d2xCsIwFEDRPun//3JVBBeXKlyC5RwodOjwpkuGJN02gNg8nuM4Vo8BXNbM7O+3taNckoLDy231AMD1CQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkNvPf2pD/SdHN+AMKxogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+S+uCbClQjAb6xogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaIDcc7OvP8MBnZmxogFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaACA/3cHyP4OMocJwNIAAAAASUVORK5CYII="},3754:(A,a,e)=>{e.d(a,{Z:()=>Q});const Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAEXCAIAAAAoXch+AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFg8hDI2iBFEAAAO2SURBVHic7d1BbsMwDADBMPD/v6wmlz6gwEqNMwMY8I08LXjT4wEQm9e31jq9BnBbM3P9/p1dBThiz53x3DAD+HJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZC79ozZ85A43NvMnF7hj1w0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaIHftGTMzewYB/5CLBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiD3fhJ7rXV6DeC2ZsZFA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCAwB8vh+x9w4y8nZPXwAAAABJRU5ErkJggg=="},6784:(A,a,e)=>{e.d(a,{Z:()=>Q});const Q=e.p+"assets/images/superimpoExc.fr-3f43331b6ad72a7af1674c03b0aa4deb.png"},696:(A,a,e)=>{e.d(a,{Z:()=>Q});const Q=e.p+"assets/images/superimpoInc.fr-d5b1ee79902ed658674b87e6a7df9816.png"},3367:(A,a,e)=>{e.d(a,{Z:()=>Q});const Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAEXCAIAAAAoXch+AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFg8hDfqlNMcAAAO3SURBVHic7dxBasRADADBVfD/v6wk5ANLcDPEqQLjm9Cp0WleL4DYfH27e3oN4LFm5uP0DsDzCQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2Qu35+M3N2D3jH7p5egd9w0QA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SuuwZ5zJX3eaP6v3HRADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEDuumvQzNw1CngYFw2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiD3/f7m7p5eA3ismXHRADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQEA/r5PUroOMlyfWKEAAAAASUVORK5CYII="},2284:(A,a,e)=>{e.d(a,{Z:()=>Q});const Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAEXCAIAAAAoXch+AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFg8hDI2iBFEAAAOvSURBVHic7dwxCsMwEABBX/D/v6wkTeqQeDE2M2BwdVwhFlXaNoDYvL611tlrALc1M/vn789ZasX3fj5vjtlFPc5eALg/oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRAbj9q0MwcNQq4GTcaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRA7v3+5lrr7DWA25oZNxogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNAHB9TxoWDjB8Awa9AAAAAElFTkSuQmCC"},1208:(A,a,e)=>{e.d(a,{Z:()=>Q});const Q="data:image/png;base64,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"},3810:(A,a,e)=>{e.d(a,{Z:()=>Q});const Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAEXCAIAAAAoXch+AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGFg8hDI2iBFEAAARCSURBVHic7dzRbptAFEDBEPX/f9lNlShSW8dxzB7Dwoxk+W1ZHu6RsYCXF4DY8va5XC5bbwM4rGVZfj3/kMWyWgl7lvyiiWryGA2CbS3vRVg5irvKyj2kB57pwdBMV5bbdAdSPwjNweLyFdGB4b4PzUn68j/FgVFuhaZOzJBJnmKTcHLXQzN8ep88rrPvHw7mSmiGTOmuJvN4ZwRz+Ss06wdy59N4+BOEfRp2Z/AUEziqp8BPvb5/rRm/KSrzac1uRQoe87r1BoDjExog9xGa81xQnOciEfZjzJ/BQx7OrM0VRDgS99HcZVdnBHNxZ/BdVAbW8KzTNyQG1vP09pckBkbxPpp/6QsM5w17f4gLpLwzGMiNCc3VdccuuIaswLaq0Nw+ZLGsmsBubRAa4GzeOuOhSiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzRATmiAnNAAOaEBckID5IQGyAkNkBMaICc0QE5ogJzQADmhAXJCA+SEBsgJDZATGiAnNEBOaICc0AA5oQFyQgPkhAbICQ2QExogJzQAwPx+A0hOoR2+8OxBAAAAAElFTkSuQmCC"}}]);
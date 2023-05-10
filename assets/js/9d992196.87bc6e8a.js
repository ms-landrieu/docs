"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[4539],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),d=u(a),k=l,g=d["".concat(p,".").concat(k)]||d[k]||s[k]||r;return a?n.createElement(g,o(o({ref:e},m),{},{components:a})):n.createElement(g,o({ref:e},m))}));function g(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[d]="string"==typeof t?t:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6473:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));const r={id:"lang-boolean",title:"Boolean"},o=void 0,i={unversionedId:"language/basics/lang-boolean",id:"language/basics/lang-boolean",title:"Boolean",description:"A boolean attribute, variable or expression can be either true or false.",source:"@site/docs/language/basics/lang-boolean.md",sourceDirName:"language/basics",slug:"/language/basics/lang-boolean",permalink:"/docs/language/basics/lang-boolean",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/basics/lang-boolean.md",tags:[],version:"current",frontMatter:{id:"lang-boolean",title:"Boolean"},sidebar:"Development",previous:{title:"BLOB",permalink:"/docs/language/basics/lang-blob"},next:{title:"Collection",permalink:"/docs/language/basics/lang-collection"}},p={},u=[{value:"Boolean functions",id:"boolean-functions",level:2},{value:"Example",id:"example",level:3},{value:"Logical operators",id:"logical-operators",level:2}],m={toc:u};function d(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A boolean attribute, variable or expression can be either ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("h2",{id:"boolean-functions"},"Boolean functions"),(0,l.kt)("p",null,"QuodlyScript provides the Boolean functions ",(0,l.kt)("inlineCode",{parentName:"p"},"True"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"False"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"Not"),"."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"This example sets a boolean variable based on the value of a numeric variable. It returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"myBoolean")," if the ",(0,l.kt)("inlineCode",{parentName:"p"},"myVar")," value is set to 1 and ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"var myBoolean : Boolean\nvar myVar : Integer\nif(myVar==1)\n    myBoolean=True //myBoolean is set to True\nelse\n    myBoolean=False //myBoolean is set to False\nend if\n")),(0,l.kt)("p",null,"This example can be simplified into one line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"myBoolean=(myButton==1)\n")),(0,l.kt)("h2",{id:"logical-operators"},"Logical operators"),(0,l.kt)("p",null,"QodlyScript supports two logical operators that work on Boolean expressions: conjunction (AND) and inclusive disjunction (OR). A logical AND returns true if both expressions are true. A logical OR returns true if at least one of the expressions is true. The following table shows the logical operators:"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"In boolean contexts, it is usually recommended to use ",(0,l.kt)("a",{parentName:"p",href:"operators.md#short-circuit-operators"},"short-circuit logical operators")," (",(0,l.kt)("inlineCode",{parentName:"p"},"&&")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"||"),"). ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operation"),(0,l.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:null},"Returns"),(0,l.kt)("th",{parentName:"tr",align:null},"Expression"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AND"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean & Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},'("A" == "A") & (15 != 3)'),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'("A" == "B") & (15 != 3)'),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'("A" == "B") & (15 == 3)'),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OR"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean  ","|"," Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},'("A" == "A") ',"|"," (15 != 3)"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'("A" == "B") ',"|","  (15 != 3)"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'("A" == "B") ',"|","  (15 == 3)"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("p",null,"The following is the truth table for the AND logical operator:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Expr1"),(0,l.kt)("th",{parentName:"tr",align:null},"Expr2"),(0,l.kt)("th",{parentName:"tr",align:null},"Expr1 & Expr2"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("p",null,"The following is the truth table for the OR logical operator:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Expr1"),(0,l.kt)("th",{parentName:"tr",align:null},"Expr2"),(0,l.kt)("th",{parentName:"tr",align:null},"Expr1 ","|"," Expr2"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you need to calculate the exclusive disjunction between ",(0,l.kt)("em",{parentName:"p"},"Expr1")," and ",(0,l.kt)("em",{parentName:"p"},"Expr2"),", evaluate:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-4d"}," (Expr1|Expr2) & Not(Expr1 & Expr2)  \n"))))}d.isMDXComponent=!0}}]);
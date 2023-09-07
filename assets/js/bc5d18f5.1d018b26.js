"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>N});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),m=o(n),k=l,N=m["".concat(p,".").concat(k)]||m[k]||s[k]||r;return n?a.createElement(N,i(i({ref:t},u),{},{components:n})):a.createElement(N,i({ref:t},u))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[m]="string"==typeof e?e:l,i[1]=d;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},54636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));const r={id:"lang-null-undefined",title:"Null and Undefined"},i=void 0,d={unversionedId:"language/basics/lang-null-undefined",id:"language/basics/lang-null-undefined",title:"Null and Undefined",description:"Null and Undefined are data types that handle cases where the value of an expression is not known.",source:"@site/docs/language/basics/lang-null-undefined.md",sourceDirName:"language/basics",slug:"/language/basics/lang-null-undefined",permalink:"/docs/language/basics/lang-null-undefined",draft:!1,editUrl:"https://github.com/qodly/docs/edit/main/docs/language/basics/lang-null-undefined.md",tags:[],version:"current",frontMatter:{id:"lang-null-undefined",title:"Null and Undefined"},sidebar:"Develop",previous:{title:"Date",permalink:"/docs/language/basics/lang-date"},next:{title:"Numeric",permalink:"/docs/language/basics/lang-number"}},p={},o=[{value:"Null",id:"null",level:2},{value:"<code>null</code>",id:"null-1",level:3},{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Null operators",id:"null-operators",level:3},{value:"Undefined",id:"undefined",level:2},{value:"<code>undefined</code>",id:"undefined-1",level:3},{value:"Description",id:"description-1",level:4},{value:"Example",id:"example",level:4},{value:"Undefined operators",id:"undefined-operators",level:3}],u={toc:o};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Null and Undefined are data types that handle cases where the value of an expression is not known.  "),(0,l.kt)("h2",{id:"null"},"Null"),(0,l.kt)("p",null,"Null is a special data type with only one possible value: ",(0,l.kt)("strong",{parentName:"p"},"null"),". This value is returned by an expression that does not contain any value."),(0,l.kt)("p",null,"In the QodlyScript language and for object attribute properties, null values are managed through the ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," function. This function can be used with the following expressions for setting or comparing the ",(0,l.kt)("strong",{parentName:"p"},"null")," value:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"object attributes"),(0,l.kt)("li",{parentName:"ul"},"collection elements"),(0,l.kt)("li",{parentName:"ul"},"variables of the object, collection, picture, or variant type.")),(0,l.kt)("h3",{id:"null-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"null")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"null")," : null"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"Null value")))),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"null"),"returns the null type value ",(0,l.kt)("strong",{parentName:"p"},"null"),"."),(0,l.kt)("p",null,"This function allows you to assign or compare the ",(0,l.kt)("strong",{parentName:"p"},"null")," value to the following language elements:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Language elements"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Comments"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"object property values"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Comparing Null to an object property returns true if the property value is null, and false otherwise. To simplify code, comparing Null also returns true if the property does not exist in the object (i.e. is ",(0,l.kt)("a",{parentName:"td",href:"#undefined"},(0,l.kt)("inlineCode",{parentName:"a"},"undefined")),"), see example 4.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"collection elements"),(0,l.kt)("td",{parentName:"tr",align:"left"},"When a collection is expanded by adding non-adjacent elements, any intermediary elements get automatically the ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"object variables"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Assigning the null value to such a variable type clears its contents. In this case, it has the same effect as calling the ",(0,l.kt)("a",{parentName:"td",href:"#clearvariable"},(0,l.kt)("inlineCode",{parentName:"a"},"clearVariable"))," command.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"collection variables"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Assigning the null value to such a variable type clears its contents. In this case, it has the same effect as calling the ",(0,l.kt)("a",{parentName:"td",href:"#clearvariable"},(0,l.kt)("inlineCode",{parentName:"a"},"clearVariable"))," command.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"picture variables"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Assigning the null value to such a variable type clears its contents. In this case, it has the same effect as calling the ",(0,l.kt)("a",{parentName:"td",href:"#clearvariable"},(0,l.kt)("inlineCode",{parentName:"a"},"clearVariable"))," command.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"variant variables"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"example-1"},"Example 1"),(0,l.kt)("p",null,"You assign and test the ",(0,l.kt)("strong",{parentName:"p"},"null")," value to an object property:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-qs"},'var vEmp : object\nvEmp=newObject\nvEmp.name="Smith"\nvEmp.children=null\n \nif(vEmp.children==null) //true\nend\nif(vEmp.name==null) //false\nend\nif(vEmp.parent==null) //true\nend\n')),(0,l.kt)("h4",{id:"example-2"},"Example 2"),(0,l.kt)("p",null,"You assign and compare the ",(0,l.kt)("strong",{parentName:"p"},"null")," value to a collection element:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-qs"},"var myCol : collection\nmyCol=newCollection(10,20,null)\n\nif(myCol[2]==null)\n  // if the 3rd element is null\n...\nend\n")),(0,l.kt)("h4",{id:"example-3"},"Example 3"),(0,l.kt)("p",null,"These examples show the various ways to assign or compare the ",(0,l.kt)("strong",{parentName:"p"},"null")," value to variables: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-qs"},"\n//Object variable\nvar o : object\no=newObject\no=null //equivalent to clearVariable(o)\nif(o!=null) //equivalent to if(objectIsDefined(o))\nend\n\n//Collection variable\nvar c : collection\nc=newCollection\nc=null //equivalent to clearVariable(c)\nif(c!=null)\nend\n\n//Picture variable\nvar i : picture\ni=vpicture\ni=null //equivalent to clearVariable(i)\nif(i!=null) //equivalent to if(pictureSize(i)!=0)\nend\n")),(0,l.kt)("h4",{id:"example-4"},"Example 4"),(0,l.kt)("p",null,"Here are the different results of the ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," command as well as the ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," command with object properties, depending on the context:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-qs"},'var vEmp : object\nvar vUndefined, vNull : boolean\nvEmp=newObject\nvEmp.name="Smith"\nvEmp.children=null\n \nvUndefined=undefined(vEmp.name) // false\nvNull=(vEmp.name=null) //false\n \nvUndefined=undefined(vEmp.children) // false\nvNull=(vEmp.children=null) //true\n \nvUndefined=undefined(vEmp.parent) // true\nvNull=(vEmp.parent=null) //true\n')),(0,l.kt)("h3",{id:"null-operators"},"Null operators"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operation"),(0,l.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:null},"Returns"),(0,l.kt)("th",{parentName:"tr",align:null},"Expression"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Equality"),(0,l.kt)("td",{parentName:"tr",align:null},"null ",(0,l.kt)("inlineCode",{parentName:"td"},"==")," null"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"a.nullProp ",(0,l.kt)("inlineCode",{parentName:"td"},"==")," b.nullProp"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"null ",(0,l.kt)("inlineCode",{parentName:"td"},"==")," undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"a.nullProp ",(0,l.kt)("inlineCode",{parentName:"td"},"==")," b.undefinedProp"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"null ",(0,l.kt)("inlineCode",{parentName:"td"},"==")," ",(0,l.kt)("em",{parentName:"td"},"scalar value")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"a.nullProp ",(0,l.kt)("inlineCode",{parentName:"td"},"==")," 42"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inequality"),(0,l.kt)("td",{parentName:"tr",align:null},"null ",(0,l.kt)("inlineCode",{parentName:"td"},"!=")," null"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"a.nullProp ",(0,l.kt)("inlineCode",{parentName:"td"},"!=")," b.nullProp"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"null ",(0,l.kt)("inlineCode",{parentName:"td"},"!=")," undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"a.nullProp ",(0,l.kt)("inlineCode",{parentName:"td"},"!=")," b.undefinedProp"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"null ",(0,l.kt)("inlineCode",{parentName:"td"},"!=")," ",(0,l.kt)("em",{parentName:"td"},"scalar value")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"a.nullProp ",(0,l.kt)("inlineCode",{parentName:"td"},"!=")," 42"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"scalar values")," are values of type string, date, time, boolean, number, or blob. When declared, their ",(0,l.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-data-types"},"default value")," is neither undefined nor null. Other types (picture, object, collection) have undefined or null default value. Ex:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-qs"},'var object : Object\nvar text : Text\n\n//object == null\n//text == "" \n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Comparisons with Greater than (",(0,l.kt)("inlineCode",{parentName:"p"},">"),"), Less than (",(0,l.kt)("inlineCode",{parentName:"p"},"<"),"), Greater than or equal to (",(0,l.kt)("inlineCode",{parentName:"p"},">="),"), and Less than or equal to (",(0,l.kt)("inlineCode",{parentName:"p"},"<="),") operators are not supported with null values and return an error.")),(0,l.kt)("h2",{id:"undefined"},"Undefined"),(0,l.kt)("p",null,"Undefined is not actually a data type. It denotes a variable that has not yet been defined. A user function can return an undefined value if, within the method, the function result is assigned an undefined expression (an expression calculated with at least one undefined variable). An attribute cannot be ",(0,l.kt)("strong",{parentName:"p"},"undefined")," (the ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," command always returns false for an attribute). A variant variable has ",(0,l.kt)("strong",{parentName:"p"},"undefined")," as default value."),(0,l.kt)("h3",{id:"undefined-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"undefined")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"undefined")," ( expression : ",(0,l.kt)("em",{parentName:"p"},"any")," )"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expression"),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:"center"},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Expression whose resulting value to be evaluated")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"true = undefined, false = not undefined")))),(0,l.kt)("h4",{id:"description-1"},"Description"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the result of the evaluation of ",(0,l.kt)("em",{parentName:"p"},"expression")," is not a defined value, and ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A variable is defined if it has been declared or if a value is assigned to it. It is undefined in all other cases."),(0,l.kt)("li",{parentName:"ul"},"An object property is ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," if it does not exist in the object."),(0,l.kt)("li",{parentName:"ul"},"A collection item is ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," if it does not exist in the collection.")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Keep in mind that ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," evaluates ",(0,l.kt)("em",{parentName:"p"},"expression"),". The following statements are equivalent:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-qs"},"var result : boolean\nresult=undefined(exp)\n  // same result:\nresult=(valueType(exp)=kUndefined)\n"))),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("p",null,"Here are the different results of the ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," command as well as the ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," command with object properties, depending on the context:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-qs"},'var vEmp : object\nvar vUndefined, vNull : boolean\n\nvEmp=newObject\nvEmp.name="Smith"\nvEmp.children=null\n \nvUndefined=undefined(vEmp.name) // false\nvNull=(vEmp.name=null) //false\n \nvUndefined=undefined(vEmp.children) // false\nvNull=(vEmp.children=null) //true\n \nvUndefined=undefined(vEmp.parent) // true\nvNull=(vEmp.parent=null) //true\n')),(0,l.kt)("h3",{id:"undefined-operators"},"Undefined operators"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operation"),(0,l.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:null},"Returns"),(0,l.kt)("th",{parentName:"tr",align:null},"Expression"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Equality"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined ",(0,l.kt)("inlineCode",{parentName:"td"},"==")," undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"a.undefinedProp ",(0,l.kt)("inlineCode",{parentName:"td"},"==")," b.undefinedProp"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"undefined ",(0,l.kt)("inlineCode",{parentName:"td"},"==")," null"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"a.undefinedProp ",(0,l.kt)("inlineCode",{parentName:"td"},"==")," c.nullProp"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"undefined ",(0,l.kt)("inlineCode",{parentName:"td"},"==")," ",(0,l.kt)("em",{parentName:"td"},"other values")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"a.undefinedProp ",(0,l.kt)("inlineCode",{parentName:"td"},"==")," 42"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inequality"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined ",(0,l.kt)("inlineCode",{parentName:"td"},"!=")," undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"a.undefinedProp ",(0,l.kt)("inlineCode",{parentName:"td"},"!=")," b.undefinedProp"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"undefined ",(0,l.kt)("inlineCode",{parentName:"td"},"!=")," null"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"a.undefinedProp ",(0,l.kt)("inlineCode",{parentName:"td"},"!=")," b.nullProp"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"undefined ",(0,l.kt)("inlineCode",{parentName:"td"},"!=")," ",(0,l.kt)("em",{parentName:"td"},"other values")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"a.undefinedProp ",(0,l.kt)("inlineCode",{parentName:"td"},"!=")," 42"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Greater than"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined ",(0,l.kt)("inlineCode",{parentName:"td"},">")," string, date, time, boolean, number"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"a.undefinedProp ",(0,l.kt)("inlineCode",{parentName:"td"},">"),' "abc"'),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Less than"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined ",(0,l.kt)("inlineCode",{parentName:"td"},"<")," string, date, time, boolean, number"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"a.undefinedProp ",(0,l.kt)("inlineCode",{parentName:"td"},"<"),' "abc"'),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Greater than or equal to"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined ",(0,l.kt)("inlineCode",{parentName:"td"},">=")," string, date, time, boolean, number"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"a.undefinedProp ",(0,l.kt)("inlineCode",{parentName:"td"},">="),' "abc"'),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Less than or equal to"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined ",(0,l.kt)("inlineCode",{parentName:"td"},"<=")," string, date, time, boolean, number"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"a.undefinedProp ",(0,l.kt)("inlineCode",{parentName:"td"},"<="),' "abc"'),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"other values")," are expressions of any type with a value neither ",(0,l.kt)("strong",{parentName:"p"},"undefined")," nor ",(0,l.kt)("strong",{parentName:"p"},"null"),". "),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Comparisons of ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," values with picture, blob, object, collection, undefined or null values using Greater than (",(0,l.kt)("inlineCode",{parentName:"p"},">"),"), Less than (",(0,l.kt)("inlineCode",{parentName:"p"},"<"),"), Greater than or equal to (",(0,l.kt)("inlineCode",{parentName:"p"},">="),"), and Less than or equal to (",(0,l.kt)("inlineCode",{parentName:"p"},"<="),") operators are not supported and return an error.")))}m.isMDXComponent=!0}}]);
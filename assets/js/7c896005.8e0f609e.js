"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[891],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),l=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(a),h=n,f=p["".concat(i,".").concat(h)]||p[h]||u[h]||r;return a?o.createElement(f,s(s({ref:t},d),{},{components:a})):o.createElement(f,s({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:n,s[1]=c;for(var l=2;l<r;l++)s[l]=a[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},816:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=a(7462),n=(a(7294),a(3905));const r={id:"overview",title:"What is ORDA?"},s=void 0,c={unversionedId:"concepts/orda/overview",id:"concepts/orda/overview",title:"What is ORDA?",description:"ORDA stands for Object Relational Data Access. It is an enhanced technology allowing to access both the model and the data of a database through objects.",source:"@site/docs/concepts/orda/overview.md",sourceDirName:"concepts/orda",slug:"/concepts/orda/overview",permalink:"/docs/concepts/orda/overview",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/concepts/orda/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"What is ORDA?"},sidebar:"Platform",previous:{title:"Qodly Database",permalink:"/docs/concepts/db"},next:{title:"Data Model Objects",permalink:"/docs/concepts/orda/data-model"}},i={},l=[{value:"Why use ORDA?",id:"why-use-orda",level:2},{value:"How to use ORDA?",id:"how-to-use-orda",level:2}],d={toc:l};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"ORDA stands for ",(0,n.kt)("strong",{parentName:"p"},"Object Relational Data Access"),". It is an enhanced technology allowing to access both the model and the data of a database through objects."),(0,n.kt)("p",null,"Relations are transparently included in the concept, in combination with ",(0,n.kt)("a",{parentName:"p",href:"/docs/concepts/orda/glossary#lazy-loading"},"lazy loading"),", to remove all the typical hassles of data selection or transfer from the developer."),(0,n.kt)("p",null,"With ORDA, data is accessed through an abstraction layer, the ",(0,n.kt)("a",{parentName:"p",href:"/docs/concepts/orda/data-model#datastore"},"datastore"),". A datastore is an object that provides an interface to the database model and data through objects and classes. For example, a table is mapped to a ",(0,n.kt)("a",{parentName:"p",href:"/docs/concepts/orda/data-model#dataclass"},"dataclass")," object, a field is an ",(0,n.kt)("a",{parentName:"p",href:"/docs/concepts/orda/data-model##attribute"},"attribute")," of a dataclass, and records are accessed through ",(0,n.kt)("a",{parentName:"p",href:"/docs/concepts/orda/data-model#entity"},"entities")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/concepts/orda/data-model#entity-selection"},"entity selections"),". "),(0,n.kt)("h2",{id:"why-use-orda"},"Why use ORDA?"),(0,n.kt)("p",null,"Instead of representing information as tables, records, and fields, ORDA uses an alternate approach that more accurately maps data to real-world concepts."),(0,n.kt)("p",null,"Imagine the ability to denormalize a relational structure, yet not affect efficiency. Imagine describing everything about the business objects in your application in such a way that using the data becomes simple and straightforward and removes the need for a complete understanding of the relational structure."),(0,n.kt)("p",null,"In the ORDA data model, a single dataclass can incorporate all of the elements that make up a traditional relational database table, but can also include values from related parent entities, and direct references to related entities and entity selections."),(0,n.kt)("p",null,'A query returns a list of entities called an entity selection, which fulfills the role of a SQL query\u2019s row set. The difference is that each entity "knows" where it belongs in the data model and "understands" its relationship to all other entities. This means that a developer does not need to explain in a query how to relate the various pieces of information, nor in an update how to write modified values back to the relational structure.'),(0,n.kt)("h2",{id:"how-to-use-orda"},"How to use ORDA?"),(0,n.kt)("p",null,"Basically, ORDA handles objects. In ORDA, all main concepts, including the datastore itself, are available through objects. The datastore is automatically mapped upon the underlying database structure. "),(0,n.kt)("p",null,"ORDA objects can be handled like standard objects, but they automatically benefit from specific properties and methods."),(0,n.kt)("p",null,"ORDA objects are created and instanciated when necessary (you do not need to create them). However, ORDA data model objects are associated with ",(0,n.kt)("a",{parentName:"p",href:"/docs/concepts/orda/orda-classes"},"classes")," where you can add custom functions and define ",(0,n.kt)("a",{parentName:"p",href:"/docs/concepts/orda/orda-classes#computed-attributes"},"computed attributes"),"."))}p.isMDXComponent=!0}}]);
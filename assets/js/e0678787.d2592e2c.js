"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[836],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var s=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,o=function(e,t){if(null==e)return{};var a,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=s.createContext({}),d=function(e){var t=s.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=d(e.components);return s.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),h=o,m=p["".concat(i,".").concat(h)]||p[h]||u[h]||r;return a?s.createElement(m,n(n({ref:t},c),{},{components:a})):s.createElement(m,n({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,n[1]=l;for(var d=2;d<r;d++)n[d]=a[d];return s.createElement.apply(null,n)}return s.createElement.apply(null,a)}h.displayName="MDXCreateElement"},67615:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=a(87462),o=(a(67294),a(3905));const r={id:"datastore-classes",title:"Datastore Classes"},n=void 0,l={unversionedId:"studio/model/datastore-classes",id:"studio/model/datastore-classes",title:"Datastore Classes",description:"The datastore class is a type of structure that can contain attributes and relation attributes (links between datastore classes) in order to conceptually describe its data and how they all interact with each other as well as functions to interact with the data in your model.",source:"@site/docs/studio/model/datastore-classes.md",sourceDirName:"studio/model",slug:"/studio/model/datastore-classes",permalink:"/docs/studio/model/datastore-classes",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/model/datastore-classes.md",tags:[],version:"current",frontMatter:{id:"datastore-classes",title:"Datastore Classes"},sidebar:"Studio",previous:{title:"Model Editor",permalink:"/docs/studio/model/model-editor-interface"},next:{title:"Functions",permalink:"/docs/studio/model/functions"}},i={},d=[{value:"Handling datastore classes",id:"handling-datastore-classes",level:2},{value:"Create a datastore class",id:"create-a-datastore-class",level:3},{value:"Delete a datastore class",id:"delete-a-datastore-class",level:3},{value:"Rename a datastore class",id:"rename-a-datastore-class",level:3},{value:"Datastore Class Properties",id:"datastore-class-properties",level:2},{value:"Panel color",id:"panel-color",level:3},{value:"Primary key",id:"primary-key",level:3},{value:"Class name",id:"class-name",level:3},{value:"Selection name",id:"selection-name",level:3},{value:"Scope",id:"scope",level:3},{value:"Page size",id:"page-size",level:3},{value:"Records definitely deleted",id:"records-definitely-deleted",level:3},{value:"Include in log file",id:"include-in-log-file",level:3},{value:"Comment",id:"comment",level:3},{value:"Permissions",id:"permissions",level:2}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The datastore class is a type of structure that can contain attributes and relation attributes (links between datastore classes) in order to conceptually describe its data and how they all interact with each other as well as functions to interact with the data in your model."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:a(66373).Z,width:"605",height:"462"})),(0,o.kt)("p",null,"Once you create a datastore class, you can add ",(0,o.kt)("a",{parentName:"p",href:"/docs/studio/model/attributes"},"attributes")," and functions to it."),(0,o.kt)("p",null,"All datastores classes are automatically listed in the ",(0,o.kt)("a",{parentName:"p",href:"model-editor-overview.md#outline"},"Outline")," area."),(0,o.kt)("h2",{id:"handling-datastore-classes"},"Handling datastore classes"),(0,o.kt)("h3",{id:"create-a-datastore-class"},"Create a datastore class"),(0,o.kt)("p",null,"To add a new datastore class, click on the ",(0,o.kt)("strong",{parentName:"p"},"+")," button of the ",(0,o.kt)("a",{parentName:"p",href:"model-editor-overview.md#outline"},"Outline area"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:a(32405).Z,width:"284",height:"98"})),(0,o.kt)("p",null,"Enter the name of the new dataclass, with respect to the general ",(0,o.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-identifiers#classes"},"naming rules"),". "),(0,o.kt)("p",null,"The datastore class is created and displayed in the model area with its ID attribute. You can start adding ",(0,o.kt)("a",{parentName:"p",href:"#attributes.md"},"attributes"),"."),(0,o.kt)("h3",{id:"delete-a-datastore-class"},"Delete a datastore class"),(0,o.kt)("p",null,"To delete a datastore class and all its attributes, click on the ",(0,o.kt)("img",{alt:"alt-text",src:a(99605).Z,width:"25",height:"22"})," in the title bar of the dataclass or in the ",(0,o.kt)("a",{parentName:"p",href:"model-editor-overview.md#outline"},"Outline area"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Removing a dataclass from the model does not remove its associated functions. ")),(0,o.kt)("h3",{id:"rename-a-datastore-class"},"Rename a datastore class"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When you rename a datastore class, Qodly Studio renames automatically the ",(0,o.kt)("a",{parentName:"p",href:"/docs/orda/data-model"},"Data Model classes"),' associated to the dataclass. For example, if you rename "Emp" to "Employee", the associated "Emp", "EmpEntity", and "EmpSelection" classes will be renamed respectively "Employee", "EmployeeEntity", and "EmployeeSelection". Note that the entity selection class can be ',(0,o.kt)("a",{parentName:"p",href:"#selection-name"},"renamed separately in the Properties"),". ")),(0,o.kt)("p",null,"To rename a datastore class:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Double-click on the datastore class name in the title bar to make it editable, ")),(0,o.kt)("p",null,"or"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the datastore class and, in the Properties area, click on the ",(0,o.kt)("strong",{parentName:"p"},"Edit")," button (pencil icon) in the right side of the ",(0,o.kt)("a",{parentName:"p",href:"#class-name"},"Class name area"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Type in the new name and press ",(0,o.kt)("strong",{parentName:"p"},"Enter")," key (title bar) or ",(0,o.kt)("strong",{parentName:"p"},"Confirm")," button (Property area) to validate the change. "))),(0,o.kt)("h2",{id:"datastore-class-properties"},"Datastore Class Properties"),(0,o.kt)("p",null,"In the Properties tab, you can modify the properties of the selected datastore class:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:a(13989).Z,width:"308",height:"471"})),(0,o.kt)("h3",{id:"panel-color"},"Panel color"),(0,o.kt)("p",null,"Defines the color of the datastore class title area. You can click in the color selector or enter a value in the color area."),(0,o.kt)("h3",{id:"primary-key"},"Primary key"),(0,o.kt)("p",null,"Defines one of the attributes as the primary key attribute for the datastore class. By default, each datastore class is created with an ",(0,o.kt)("inlineCode",{parentName:"p"},"ID")," attribute as the primary key, having the ",(0,o.kt)("strong",{parentName:"p"},"Mandatory"),", ",(0,o.kt)("strong",{parentName:"p"},"Autosequence")," and ",(0,o.kt)("strong",{parentName:"p"},"Unique")," properties checked as well as the Index kind set to Autoamtic by default. In the datastore class\u2019s panel, the attribute defined as the primary key is bold and underlined with a key icon next to it. "),(0,o.kt)("p",null,"To change the primary key, you can select an attribute in the Primary Key drop-down menu. Only the attributes with valid types (Long, Number, String, or UUID) are displayed in the drop-down menu."),(0,o.kt)("h3",{id:"class-name"},"Class name"),(0,o.kt)("p",null,"Datastore class name. Allows you to ",(0,o.kt)("a",{parentName:"p",href:"#rename-a-datastore-class"},"rename the datastore class")," and its ",(0,o.kt)("a",{parentName:"p",href:"/docs/orda/data-model"},"associated model classes"),"."),(0,o.kt)("h3",{id:"selection-name"},"Selection name"),(0,o.kt)("p",null,"Name of the entity selection for the datastore class. This name is used for the ",(0,o.kt)("a",{parentName:"p",href:"/docs/orda/data-model"},"entity selection class")," as well as related entity selections in related attributes. You can modify the default name, however it will be overriden if you change the Datastore class name afterwards."),(0,o.kt)("h3",{id:"scope"},"Scope"),(0,o.kt)("p",null,'An exposed dataclass can be used from anywhere and its attribute values can be displayed using REST requests. A not-exposed dataclass can only be used by code called from inside the datastore class, including calculated attributes, functions, methods, and events, executed on the server. Select "Do not expose as REST" for dataclasses that should not be accessed directly, e.g. "Users".'),(0,o.kt)("p",null,"This property can be selected at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/studio/model/attributes#scope"},"attribute level"),', and attributes inherit from this level. An attribute can override the parent dataclass level with "Do not expose as REST" if the parent was exposed; however, it the parent dataclass property is "Do not expose as REST", the attribute cannot override it. '),(0,o.kt)("h3",{id:"page-size"},"Page size"),(0,o.kt)("p",null,"Default top page size for REST requests made to the server. The number you specify is the number of entities retrieved per request for the datastore class. If this property is left blank, the default value of 40 is used."),(0,o.kt)("h3",{id:"records-definitely-deleted"},"Records definitely deleted"),(0,o.kt)("p",null,"This option lets you control an optimization for the deletion of a selection of records. When Qodly deletes a selection, the record markers are not deleted by default. A record marker is a header attached to the record that contains information relating to this record. Deleting both markers and records is slower than deleting only records but in certain cases, it may be desirable to delete the record markers.\nTo delete record markers when deleting a large selection of records, select the ",(0,o.kt)("strong",{parentName:"p"},"Records definitively deleted")," option."),(0,o.kt)("h3",{id:"include-in-log-file"},"Include in log file"),(0,o.kt)("p",null,"Check this option in order for operations performed on the table\u2019s data to be included in the database log file (when it is generated). It is important to note that this option only indicates that the table\u2019s data must be journaled if the database uses a log file; it does not enable the journaling procedure itself at the database level."),(0,o.kt)("h3",{id:"comment"},"Comment"),(0,o.kt)("p",null,"Comments that you can store with your datastore class for private use."),(0,o.kt)("h2",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"This area allows you to define the permissions at the dataclass level. Permissions can also be set at the datastore and attribute levels."),(0,o.kt)("p",null,"Dataclass permissions are described in ",(0,o.kt)("a",{parentName:"p",href:"/docs/studio/roles/dataClassPermissions"},"this section"),"."))}p.isMDXComponent=!0},66373:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/dataclass1-77a4c3d3d23866ded5556f039604f191.png"},32405:(e,t,a)=>{a.d(t,{Z:()=>s});const s="data:image/png;base64,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"},13989:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/datastoreclass-properties-13484bf1b2dbaf5418f3354040eb13ad.png"},99605:(e,t,a)=>{a.d(t,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAWCAYAAAA1vze2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADFSURBVEhLYwwODv7PQGPABKVpCkYtIQnQxRKCqUuTnR1Me/PxMRhycoLZ579/Z9j66ROYff3nTzCND+C1BGRBjbg4lIcdrP3wgWEd1EJcgKBPgvj5oSzsYN3Hj1AWbkDQkiIREQZjLi4oDxWc/faNoe/NGygPNyAY8V/+43YDPjlkQNCSz3//QlmYAJ8cMiBsyb9/UBYmwCeHDAha8gmPa/HJIQPCluBxLT45ZEDQkse/f0NZmACfHDIYrU9IAqOWkAAYGABMzkb5ORlGhQAAAABJRU5ErkJggg=="}}]);
"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[7511],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),g=r,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||i;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},37314:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={id:"roles",title:"Access Control Roles & Privileges"},s=void 0,o={unversionedId:"studio/roles",id:"studio/roles",title:"Access Control Roles & Privileges",description:"Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The Qodly security architecture provides a robust system for defining and managing roles, privileges, permissions, actions, and resources in the context of a travel agency website. These concepts enable fine-grained control over access to functionalities and data, ensuring data security and integrity.",source:"@site/docs/studio/roles.md",sourceDirName:"studio",slug:"/studio/roles",permalink:"/docs/studio/roles",draft:!1,editUrl:"https://github.com/qodly/docs/edit/main/docs/studio/roles.md",tags:[],version:"current",frontMatter:{id:"roles",title:"Access Control Roles & Privileges"}},l={},d=[{value:"Roles",id:"roles",level:2},{value:"Privileges",id:"privileges",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Permission Actions",id:"permission-actions",level:2},{value:"Resources",id:"resources",level:2}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The Qodly security architecture provides a robust system for defining and managing roles, privileges, permissions, actions, and resources in the context of a travel agency website. These concepts enable fine-grained control over access to functionalities and data, ensuring data security and integrity."),(0,r.kt)("h2",{id:"roles"},"Roles"),(0,r.kt)("p",null,"Roles in the travel agency website represent different user profiles, each with specific privileges. These roles determine the actions and operations a user can perform within the system. Here are some example roles in the travel agency context:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Roles"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Customer"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents website visitors who can browse travel packages, view destination information, and make bookings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content Manager"),(0,r.kt)("td",{parentName:"tr",align:null},"Responsible for managing the content of the website, including creating and updating travel packages, adding new destinations, and editing descriptions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sales Manager"),(0,r.kt)("td",{parentName:"tr",align:null},"Has additional privileges compared to customers, allowing them to manage customer bookings, view sales reports, and generate invoices.")))),(0,r.kt)("h2",{id:"privileges"},"Privileges"),(0,r.kt)("p",null,"Privileges define the technical abilities granted to users based on their roles. Each role can have one or more privileges associated with it. In the travel agency website, the following privileges can be defined:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Privileges"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BrowsePackages"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows users to view and browse available travel packages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BookPackage"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables users to make bookings for travel packages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ManageContent"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides the ability to create, update, and delete content related to travel packages and destinations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ManageBookings"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows users to manage customer bookings, view booking details, and generate invoices.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ViewReports"),(0,r.kt)("td",{parentName:"tr",align:null},"Grants access to sales reports and other statistical data.")))),(0,r.kt)("h2",{id:"permissions"},"Permissions"),(0,r.kt)("p",null,"Permissions in the travel agency website define the access rights for different resources. They specify which privileges are required to perform specific actions on those resources. Permissions can be set at multiple levels, including the datastore, dataclasses, attributes, and data model functions. In the travel agency context, the following permissions can be defined:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Permissions"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Datastore Permission"),(0,r.kt)("td",{parentName:"tr",align:null},"The administrate privilege is required to drop entities in any dataclass and create new entities in the datastore.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dataclass Permissions"),(0,r.kt)("td",{parentName:"tr",align:null},"The ManageContent privilege is necessary to create, update, and delete entities in the travel packages and destinations dataclasses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Attribute Permissions"),(0,r.kt)("td",{parentName:"tr",align:null},"The BrowsePackages privilege is needed to read attributes of travel packages, such as package details, pricing, and availability.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Model Function Permissions"),(0,r.kt)("td",{parentName:"tr",align:null},"The ManageBookings privilege is required to execute functions related to managing customer bookings, generating invoices, and handling reservations.")))),(0,r.kt)("h2",{id:"permission-actions"},"Permission Actions"),(0,r.kt)("p",null,"Permission actions define the specific operations that can be performed on resources within the travel agency website. Each permission action is associated with a target resource and requires specific privileges. The following permission actions are relevant to the travel agency scenario:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Permission Actions"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows the creation of new entities, such as adding new travel packages or destinations to the datastore.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Read"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables reading/viewing the content of resources, such as browsing travel packages, viewing destination information, or accessing booking details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows modifying the content of resources, such as updating travel package details or editing destination descriptions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Permits the deletion of entities, such as removing outdated travel packages or destinations from the datastore.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Execute"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables the execution of functions related to managing bookings, generating invoices, and performing other administrative tasks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Describe"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides access to metadata about resources, such as retrieving information about available dataclasses, attributes, or data model functions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Promote"),(0,r.kt)("td",{parentName:"tr",align:null},"Temporarily adds a specific privilege to the session for the duration of executing a function, primarily used for secure privilege escalation.")))),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("p",null,"Resources represent the various elements within the travel agency website to which permissions and privileges are applied. These resources include:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Resources"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Datastore"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents the entire data storage system of the website, including all dataclasses and entities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dataclasses"),(0,r.kt)("td",{parentName:"tr",align:null},"Refer to specific data structures or entities in the website's datastore, such as travel packages, destinations, or customer bookings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("td",{parentName:"tr",align:null},"Define the properties or characteristics of dataclasses, such as package details, pricing, availability, or destination descriptions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Model Functions"),(0,r.kt)("td",{parentName:"tr",align:null},"Represent custom functions defined within the website's data model, used for managing bookings, generating invoices, or handling reservations.")))),(0,r.kt)("p",null,"In the travel agency scenario, permissions and privileges can be set for each of these resources, ensuring proper access control and data protection."),(0,r.kt)("p",null,"By implementing and utilizing roles and privileges, the travel agency website can ensure secure and controlled access to its functionalities and data. Users will be able to browse and book travel packages, while content managers and sales managers will have the necessary permissions to manage and update the website's content and customer bookings."))}p.isMDXComponent=!0}}]);
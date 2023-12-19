"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[9108],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,m=u["".concat(s,".").concat(c)]||u[c]||h[c]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={id:"v1.0.0-beta.2",title:"1.0.0 - beta.2"},o=void 0,l={unversionedId:"notes/v1.0.0-beta.2",id:"notes/v1.0.0-beta.2",title:"1.0.0 - beta.2",description:"12/18/2023",source:"@site/docs/notes/v1.0.0-beta-2.md",sourceDirName:"notes",slug:"/notes/v1.0.0-beta.2",permalink:"/docs/notes/v1.0.0-beta.2",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/notes/v1.0.0-beta-2.md",tags:[],version:"current",frontMatter:{id:"v1.0.0-beta.2",title:"1.0.0 - beta.2"},sidebar:"ReleaseNotes",next:{title:"1.0.0 - beta.1",permalink:"/docs/notes/v1.0.0-beta.1"}},s={},d=[{value:"12/18/2023",id:"12182023",level:4},{value:"Qodly Studio",id:"qodly-studio",level:2},{value:"Qodly Server",id:"qodly-server",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"12182023"},"12/18/2023"),(0,a.kt)("h2",{id:"qodly-studio"},"Qodly Studio"),(0,a.kt)("h3",null," What's New "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added support for Custom Components. "),(0,a.kt)("li",{parentName:"ul"},"Implemented a loading bar display during REST API calls."),(0,a.kt)("li",{parentName:"ul"},'Integrated support for "hh:mm" for the "duration" type input.'),(0,a.kt)("li",{parentName:"ul"},'Introduced the "text area" type for input in the Text Input component.'),(0,a.kt)("li",{parentName:"ul"},'Extended support for the "duration" type for input in some components.'),(0,a.kt)("li",{parentName:"ul"},'Added a "Show Documentation" redirection link to the documentation in the Code Editor tips.')),(0,a.kt)("h3",null," Improvements "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Improved user experience for the "duration" type in the Text Input component with a more user-friendly widget.'),(0,a.kt)("li",{parentName:"ul"},"Disabled the Stylebox width property when the parent is a Select Box."),(0,a.kt)("li",{parentName:"ul"},"Made refinements to some Properties Panel ergonomics.")),(0,a.kt)("h3",null," Bug Fixes "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed the suggestion of computed attributes for Alias creation in the Model. (Reference: docs#2006)"),(0,a.kt)("li",{parentName:"ul"},"Fixed discrepancies in the results returned by the Filter function within tabs. "),(0,a.kt)("li",{parentName:"ul"},"Fixed the issue where reloading the model did not refresh the function list."),(0,a.kt)("li",{parentName:"ul"},"Fixed the problem where the date format did not appear when binding a text component in a nested matrix."),(0,a.kt)("li",{parentName:"ul"},"Fixed the cursor positioning, ensuring it now points to the correct line when using the preview button."),(0,a.kt)("li",{parentName:"ul"},"Fixed the creation of webforms with a persistent touched flag. "),(0,a.kt)("li",{parentName:"ul"},"Fixed the tooltip display in the contextual panel of the roles editor. "),(0,a.kt)("li",{parentName:"ul"},"Fixed the alignment of the label icon, position, and server-side properties in the Properties panel."),(0,a.kt)("li",{parentName:"ul"},"Fixed the inconsistency in the Text-Align Property behavior and Reset Value in the Datatable. "),(0,a.kt)("li",{parentName:"ul"},"Fixed the synchronization issue where changes made in the role and privilege editor were not reflected in the JSON representation in the text editor."),(0,a.kt)("li",{parentName:"ul"},"Fixed the formatting issue with days and months in date formats that were not translated."),(0,a.kt)("li",{parentName:"ul"},"Fixed the size discrepancy of the search icon in the Model Editor."),(0,a.kt)("li",{parentName:"ul"},"Fixed the save popup appearing after deleting an unsaved Webform."),(0,a.kt)("li",{parentName:"ul"},'Fixed the jumping "Open With" options side menu when scrolled down in the Explorer panel.'),(0,a.kt)("li",{parentName:"ul"},"Fixed options icons appearing when renaming folders from the Explorer panel."),(0,a.kt)("li",{parentName:"ul"},"Prevented users from creating files with empty names."),(0,a.kt)("li",{parentName:"ul"},"Fixed the auto value triggering an error in the DataTable component columns width."),(0,a.kt)("li",{parentName:"ul"},'Fixed the "Collapse All" button behavior for collapsing events cards.'),(0,a.kt)("li",{parentName:"ul"},"Prevented users from dragging and dropping components onto the search input within the Explorer, Datasources, and Components sections."),(0,a.kt)("li",{parentName:"ul"},"Addressed issue of creating unnecessary namespaces."),(0,a.kt)("li",{parentName:"ul"},"Fixed the Matrix issue where the selected element is not taken into account when copied from another Datasource."),(0,a.kt)("li",{parentName:"ul"},"Fixed the highlighted default Label position in the Properties Panel not being displayed for some components."),(0,a.kt)("li",{parentName:"ul"},"Prevented users from drag and dropping attributes from Datasources not linked to the Datatable component."),(0,a.kt)("li",{parentName:"ul"},"Fixed the issue of data not being displayed by recomputing entity Datasources."),(0,a.kt)("li",{parentName:"ul"},"Fixed the issue related to uploading images to a blob attribute using the File Upload component."),(0,a.kt)("li",{parentName:"ul"},'Fixed the issue where the "onChange" event is triggered too many times.'),(0,a.kt)("li",{parentName:"ul"},"Fixed the Datatable component issue that does not take full width in the Tab component."),(0,a.kt)("li",{parentName:"ul"},"Fixed the design of the Datasource creation dialog to be more consistent with the rest of Qodly UI."),(0,a.kt)("li",{parentName:"ul"},"Fixed UI issue wherein the Outline was disabled on the Explorer Panel"),(0,a.kt)("li",{parentName:"ul"},'Fixed "Text Editor" unavailability after corrupting the JSON representation of the Model, Webform, and Roles & Privileges.'),(0,a.kt)("li",{parentName:"ul"},'Fixed the issue where the "roles.json" file from recent files could not be opened.'),(0,a.kt)("li",{parentName:"ul"},"Provided more detailed feedback for Permission errors."),(0,a.kt)("li",{parentName:"ul"},"Fixed the issue where the hardcoded value disappears from the parameter field in a Class Function bound to an event."),(0,a.kt)("li",{parentName:"ul"},'Fixed the issue where changing the width of the Matrix using "%" affected the Stylebox inside.'),(0,a.kt)("li",{parentName:"ul"},'Fixed the Tabs component issue where a "Touched" state is persistent after save.'),(0,a.kt)("li",{parentName:"ul"},'Fixed the issue of the Matrix component triggering the "Touched" flag in the WebForm when resizing the Contextual Panel.'),(0,a.kt)("li",{parentName:"ul"},"Fixed the Settings Editor where the Airy mode is not enabled by default in the Webforms."),(0,a.kt)("li",{parentName:"ul"},"Fixed the color border property input in the Properties Panel that didn't appear properly."),(0,a.kt)("li",{parentName:"ul"},'Fixed the issue of the "copy" Standard action of a collection in an object attribute of an entity.'),(0,a.kt)("li",{parentName:"ul"},"Fixed the issue of the search output selected of a Selectbox not being stable."),(0,a.kt)("li",{parentName:"ul"},"Fixed the Inspector issue where the highlight persists after deleting the Datasource."),(0,a.kt)("li",{parentName:"ul"},"Fixed the issue where the Datatable expands infinitely."),(0,a.kt)("li",{parentName:"ul"},'Fixed the issue where the column doesn\'t take the right width when the "%" unit is used in the Datatable.'),(0,a.kt)("li",{parentName:"ul"},"Fixed the issue where the Datatable does not shrink properly."),(0,a.kt)("li",{parentName:"ul"},"Fixed a regression in the Datatable where data is not displayed."),(0,a.kt)("li",{parentName:"ul"},"Fixed the issue of Datasources initializing after each Navigation action."),(0,a.kt)("li",{parentName:"ul"},"Fixed the problem where the sorting arrow is visible in the Datatable component when there is no source."),(0,a.kt)("li",{parentName:"ul"},"Fixed the visibility of the div element added from the Google Translate extension by hiding it."),(0,a.kt)("li",{parentName:"ul"},'Fixed the error encountered while duplicating a Webform by sending the correct file name to the server, using the local "duplicateFileName" variable as the name to open the file.'),(0,a.kt)("li",{parentName:"ul"},'Fixed the absence of support for "Reset Value" in certain properties.'),(0,a.kt)("li",{parentName:"ul"},"Fixed the issue where the value of boolean Datasources is not displayed."),(0,a.kt)("li",{parentName:"ul"},'Fixed the "clear" Standard action to reset the related entity as well.'),(0,a.kt)("li",{parentName:"ul"},'Fixed the issue where the "onClick" event is not working on empty cells.'),(0,a.kt)("li",{parentName:"ul"},"Fixed the issue of hover in the Model Editor by removing the hover effect on TreeIcon."),(0,a.kt)("li",{parentName:"ul"},"Fixed Class Function titles to display long node titles correctly."),(0,a.kt)("li",{parentName:"ul"},"Fixed Namespace info display in the Contextual Panel to show information correctly."),(0,a.kt)("li",{parentName:"ul"},"Fixed the issue where the box shadow of the Image component in the Properties Panel disappeared."),(0,a.kt)("li",{parentName:"ul"},'Fixed the disappearance of the "Edit Properties" section in the Contextual Panel when modifying the name of a Datasource.'),(0,a.kt)("li",{parentName:"ul"},"Fixed the issue of the Webform not disappearing upon deletion."),(0,a.kt)("li",{parentName:"ul"},"Fixed the problem with the privileges panel display after adding and canceling a role."),(0,a.kt)("li",{parentName:"ul"},'Fixed the background absence for the "Reset Value" button.'),(0,a.kt)("li",{parentName:"ul"},"Fixed the issue in the Tabs component where the Webform Loaders of the tabs were not displayed."),(0,a.kt)("li",{parentName:"ul"},"Fixed the malfunction of the WebForm Loader after clearing and resetting the value.")),(0,a.kt)("h2",{id:"qodly-server"},"Qodly Server"),(0,a.kt)("h3",null," What's New "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Introduction of the "collection.multiSort" function.'),(0,a.kt)("li",{parentName:"ul"},"Support for assigning file references to picture/blob attributes in ORDA."),(0,a.kt)("li",{parentName:"ul"},"Capability to initialize the variable's value and data type in the declaration line."),(0,a.kt)("li",{parentName:"ul"},"Adoption of a new syntax for declaring variadic parameters.")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[5723],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=d(a),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6544:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={id:"db",title:"Qodly Database"},i=void 0,o={unversionedId:"concepts/db",id:"concepts/db",title:"Qodly Database",description:"Overview",source:"@site/docs/concepts/db.md",sourceDirName:"concepts",slug:"/concepts/db",permalink:"/docs/concepts/db",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/concepts/db.md",tags:[],version:"current",frontMatter:{id:"db",title:"Qodly Database"},sidebar:"Guides",previous:{title:"Server Architecture",permalink:"/docs/concepts/server-architecture"},next:{title:"QodlyScript Language",permalink:"/docs/category/language"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Data types",id:"data-types",level:3},{value:"Capabilities",id:"capabilities",level:3},{value:"Data Model",id:"data-model",level:3},{value:"Transactions",id:"transactions",level:3},{value:"CRUD operations",id:"crud-operations",level:2},{value:"Queries",id:"queries",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Placeholders",id:"placeholders",level:3},{value:"Parser",id:"parser",level:3},{value:"Security",id:"security",level:2},{value:"Mirroring",id:"mirroring",level:2}],p={toc:d};function u(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"At the heart of the Qodly platform is the Qodly database, named ",(0,r.kt)("strong",{parentName:"p"},"QodlyDB"),". QodlyDB is a powerful ",(0,r.kt)("strong",{parentName:"p"},"relational database")," (RDBMS) fully integrated to the ORDA technology. Qodly database is a ",(0,r.kt)("strong",{parentName:"p"},"nosql")," database. Queries are expressed using a natural syntax and automatically optimized. "),(0,r.kt)("p",null,"Unlike other databases that require the addition and configuration of an external ORM (Object Relational Mapping) component, the Qodly database is automatically available as an object thanks to the dynamic ORM layer implemented by ORDA. In addition to performance, this architecture allows direct access to the datastore and the application API. Any change in the underlying model is automatically available in the API."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"qodly database",src:a(5637).Z,width:"311",height:"562"})),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("h3",{id:"data-types"},"Data types"),(0,r.kt)("p",null,"The following table lists all available Qodly database scalar data types and how they are handled in the Qodly language:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data Types"),(0,r.kt)("th",{parentName:"tr",align:null},"Language support"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Text]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var Text")),(0,r.kt)("td",{parentName:"tr",align:null},"A sequence of characters up to 2 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[String]"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"A sequence of characters with properties")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[UUID]"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Universally Unique Identifier: a 16-bytes (128 bits) number containing 32 hexadecimal characters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Date]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var Date")),(0,r.kt)("td",{parentName:"tr",align:null},"If the ",(0,r.kt)("strong",{parentName:"td"},"Date only"),' property is selected for this attribute type, the date value will include only the "MM/DD/YYYY" format (e.g., "10/05/2023"). Otherwise, the date value including the time, stored in UTC. The date is expressed in the following format: YYYY-MM-DDTHH:MM:ss.SSSZ (e.g., "2023-10-05T23:00:00.000Z" for October 5, 2023 in the Central European Timezone). SSS represents the milliseconds, which can be between 0 to 999.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Duration]"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"A duration between two dates")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Bool]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"A Boolean value: either true or false.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Byte]"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"A sequence of 8 bits.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Word]"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"A 16-bit signed integer. Range: -32,767 to 32,768")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Number]"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"A numeric value, can be a Real or a Long. Range: \xb11.7e\xb1308 (real), -2^31 to (2^31)-1 (long)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Long]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var Real")),(0,r.kt)("td",{parentName:"tr",align:null},"A whole number, greater than or equal to a standard number. Range: -2,147,483,648 to 2,147,483,647")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Long 64]"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"A whole number, greater than or equal to a standard number. Range: -9,223,372,036,854,775,808 to +9,223,372,036,854,775,807")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Object]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Object containing any kind of property/value pairs, including collections. This data type can be indexed. Functions and recursive references are not supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[Image]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"var Picture")),(0,r.kt)("td",{parentName:"tr",align:null},"A reference to an image file or an actual image.")))),(0,r.kt)("h3",{id:"capabilities"},"Capabilities"),(0,r.kt)("p",null,"The following table lists the maximum capabilities of the Qodly database per application:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Capabilities"),(0,r.kt)("th",{parentName:"tr",align:null},"Maximum"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number of dataclasses"),(0,r.kt)("td",{parentName:"tr",align:null},"32,767")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number of attributes per dataclass"),(0,r.kt)("td",{parentName:"tr",align:null},"32,767")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number of entities per dataclass"),(0,r.kt)("td",{parentName:"tr",align:null},"1 billion")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number of index keys per dataclass"),(0,r.kt)("td",{parentName:"tr",align:null},"128 billion")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Size of text attributes"),(0,r.kt)("td",{parentName:"tr",align:null},"2 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Size BLOB fields")),(0,r.kt)("td",{parentName:"tr",align:null},"2 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Size of object attributes"),(0,r.kt)("td",{parentName:"tr",align:null},"2 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number of properties per object attribute"),(0,r.kt)("td",{parentName:"tr",align:null},"up to 128 billion*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number of transaction levels"),(0,r.kt)("td",{parentName:"tr",align:null},"Unlimited")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"depending on the number of index keys")),(0,r.kt)("h3",{id:"data-model"},"Data Model"),(0,r.kt)("p",null,"The Data Model describes how information is organized and stored in your application, according to your business rules. Built into Qodly is a data management system that lets you easily manipulate information. "),(0,r.kt)("p",null,"The Qodly ",(0,r.kt)("strong",{parentName:"p"},"datastore")," model uses a datastore class paradigm rather than a relational database methodology. Instead of representing information as tables, records, and fields, Qodly uses an approach that more accurately maps data to real world items and concepts. A dynamic ",(0,r.kt)("strong",{parentName:"p"},"ORM")," (Object Relational Mapping) automatically maps the underlying database to the high-level datastore concepts, allowing the use of advanced features such as alias attributes, relation attributes, computed attributes, and more. "),(0,r.kt)("p",null,"You create and configure your data model in Qodly Studio using the Data Model Designer that provides a graphical representation of your model."),(0,r.kt)("h3",{id:"transactions"},"Transactions"),(0,r.kt)("p",null,"The Qodly database supports ",(0,r.kt)("strong",{parentName:"p"},"transactions"),". A transaction represents a series of changes made within a context on interconnected data. A transaction is only permanently saved in the datastore when the transaction is validated as a whole by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"ds.validateTransaction()"),". If a transaction has not been validated, whether it was cancelled or because of some external event, the changes are not saved."),(0,r.kt)("h2",{id:"crud-operations"},"CRUD operations"),(0,r.kt)("p",null,"CRUD (",(0,r.kt)("em",{parentName:"p"},"Create, Read, Update, Delete"),") operations in the Qodly database are executed using the Qodly language or the REST API. Thanks to the ORDA concept, the database perfectly matches the Qodly language/REST APIs since they all share the same definition of objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the database side, the model itself as well as underlying tables and fields are automatically exposed as a datastore with datastore class and attributes, thanks to the dynamic ORM. "),(0,r.kt)("li",{parentName:"ul"},"On the APIs side, the datastore (",(0,r.kt)("strong",{parentName:"li"},"ds"),"), datastore class, and attributes are automatically available as classes, functions, and properties. Keep in mind that the ORDA concept also includes access to objects describing ",(0,r.kt)("strong",{parentName:"li"},"data"),", such as entities and entity selections. ")),(0,r.kt)("p",null,"For example, to create and save a new entity, you just have to write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' employee=ds.Employee.new() //create an entity in the Employee dataclass\n employee.firstName="Mary" //update some attributes\n employee.lastName="Smith"\n status=employee.save() //save changes\n')),(0,r.kt)("p",null,"To get or delete entities, you can just write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' employees=ds.Employee.query("lastName=:1";"Smith") //query employees\n employee=employees.first() //get the entity\n status=employee.drop() //delete the entity\n')),(0,r.kt)("h2",{id:"queries"},"Queries"),(0,r.kt)("p",null,"Querying data is the most common database operation. You will always need to search, filter, and sort your data in datasources using different criteria."),(0,r.kt)("p",null,"Querying the Qodly database can be done through two APIs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the Qodly language - using the ",(0,r.kt)("strong",{parentName:"li"},"query()")," function "),(0,r.kt)("li",{parentName:"ul"},"the REST API - using the ",(0,r.kt)("strong",{parentName:"li"},"$filter")," command ")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("strong",{parentName:"p"},"components")," can execute automatic queries since they subscribe to datasources that connect to the server to get data.  "),(0,r.kt)("p",null,"Queries always return ",(0,r.kt)("strong",{parentName:"p"},"entity selections"),". "),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"Queries are expressed through a natural, extensive ",(0,r.kt)("strong",{parentName:"p"},"query syntax"),". "),(0,r.kt)("p",null,"The basic syntax for a query is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"attribute|formula comparator value   \n {logicalOperator attribute|formula comparator value}...\n {order by attribute {desc | asc}}\n")),(0,r.kt)("p",null,"where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"attribute"),': path of attribute on which you want to execute the query. This parameter can be a simple name (for example "country") or any valid attribute path (for example "country.name".) In case of an attribute path whose type is ',(0,r.kt)("inlineCode",{parentName:"p"},"Collection"),", ","[",'] notation is used to handle all the occurences (for example "children',"[",'].age").')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"formula"),": a valid formula passed as ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),". The formula will be evaluated for each processed entity and must return a boolean value. Within the formula, the entity is available through the ",(0,r.kt)("inlineCode",{parentName:"p"},"This")," object.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"comparator"),": symbol that compares ",(0,r.kt)("em",{parentName:"p"},"attributePath")," and ",(0,r.kt)("em",{parentName:"p"},"value"),". The following symbols are supported:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Comparison"),(0,r.kt)("th",{parentName:"tr",align:null},"Symbol(s)"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Equal to"),(0,r.kt)("td",{parentName:"tr",align:null},"=, =="),(0,r.kt)("td",{parentName:"tr",align:null},"Gets matching data, supports the wildcard (@), neither case-sensitive nor diacritic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"===, IS"),(0,r.kt)("td",{parentName:"tr",align:null},"Gets matching data, considers the @ as a standard character, neither case-sensitive nor diacritic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Not equal to"),(0,r.kt)("td",{parentName:"tr",align:null},"#, !="),(0,r.kt)("td",{parentName:"tr",align:null},"Supports the wildcard (@)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"!==, IS NOT"),(0,r.kt)("td",{parentName:"tr",align:null},"Considers the @ as a standard character")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Less than"),(0,r.kt)("td",{parentName:"tr",align:null},"<"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Greater than"),(0,r.kt)("td",{parentName:"tr",align:null},">"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Less than or equal to"),(0,r.kt)("td",{parentName:"tr",align:null},"<="),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Greater than or equal to"),(0,r.kt)("td",{parentName:"tr",align:null},">="),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Included in"),(0,r.kt)("td",{parentName:"tr",align:null},"IN"),(0,r.kt)("td",{parentName:"tr",align:null},"Gets data equal to at least one of the values in a collection or in a set of values, supports the wildcard (@)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Not condition applied on a statement"),(0,r.kt)("td",{parentName:"tr",align:null},"NOT"),(0,r.kt)("td",{parentName:"tr",align:null},"Parenthesis are mandatory when NOT is used before a statement containing several operators")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains keyword"),(0,r.kt)("td",{parentName:"tr",align:null},"%"),(0,r.kt)("td",{parentName:"tr",align:null},"Keywords can be used in attributes of string or picture type"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"value"),": the value to compare to the current value of the property of each entity in the entity selection or element in the collection. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"logicalOperator"),": used to join multiple conditions in the query (optional). You can use one of the following logical operators (either the name or the symbol can be used):"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Conjunction"),(0,r.kt)("th",{parentName:"tr",align:null},"Symbol(s)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AND"),(0,r.kt)("td",{parentName:"tr",align:null},"&, &&, and")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OR"),(0,r.kt)("td",{parentName:"tr",align:null},"|",",","|","|",", or"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"order by attribute"),": you can include an order by ",(0,r.kt)("em",{parentName:"p"},"attributePath")," statement in the query so that the resulting data will be sorted according to that statement. You can use multiple order by statements, separated by commas (e.g., order by ",(0,r.kt)("em",{parentName:"p"},"attributePath1")," desc, ",(0,r.kt)("em",{parentName:"p"},"attributePath2")," asc). By default, the order is ascending. Pass 'desc' to define a descending order and 'asc' to define an ascending order."))),(0,r.kt)("p",null,"Here are some examples of valid queries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\'employee.name == "smith" AND employee.firstname == "john"\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\'(employee.age >= "30" OR employee.age <= "65") AND (employee.salary <= "10000" OR employee.status == "Manager")\'\n')),(0,r.kt)("h3",{id:"placeholders"},"Placeholders"),(0,r.kt)("p",null,"Queries can include placeholders. A placeholder is a parameter that you insert in query strings and that is replaced by another value when the query string is evaluated. The value of placeholders is evaluated once at the beginning of the query; it is not evaluated for each element."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'result=col.query("address.city = :1 & name =:2";city;myVar+"@")\nresult2=col.query("company.name = :1";"John\'s Pizzas")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'entitySelection=ds.Student.query("nationality = :1 order by campus.name desc, lastname";"French")\n')),(0,r.kt)("h3",{id:"parser"},"Parser"),(0,r.kt)("p",null,"On the server, queries are processed by the Qodly ",(0,r.kt)("strong",{parentName:"p"},"query parser")," that translates the user query in a SQL-like statement, including automatic joins and subqueries: the ",(0,r.kt)("strong",{parentName:"p"},"query plan"),". It also optimizes the ",(0,r.kt)("strong",{parentName:"p"},"query path"),", depending on the query context. For example, the query analyzer can dynamically convert an indexed query into a sequential one if it estimates that it is faster. This particular case can occur when the number of entities being searched for is low."),(0,r.kt)("p",null,"For more detailed information about queries in Qodly, see XXX."),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)("p",null,"Security encompasses more than risk elimination and blocking unauthorized access or unlawful disclosure of information, it covers data loss prevention and protection against destruction."),(0,r.kt)("p",null,"Qodly's key features to protect your data from breaches, loss and failure events include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Authentication"),": Qodly supports built-in and customized authentication, as well as authentication via Active Directory and LDAP."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Access control with a low level authorization system"),": a per session, built-in user authorization system is included in Qodly, allowing you to assign different permissions and roles to users connecting to the database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Encryption"),": ensures the confidentiality of your data by encrypting tables that contain sensitive information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Backup and logs"),": the Qodly platform includes administration tools that verify, maintain, and backup your data and model, ensuring data integrity in case of failure, data corruption or accidental deletion.")),(0,r.kt)("h2",{id:"mirroring"},"Mirroring"))}u.isMDXComponent=!0},5637:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/qodlydb-a46b416db5158de8ec1ce400075c30fc.png"}}]);
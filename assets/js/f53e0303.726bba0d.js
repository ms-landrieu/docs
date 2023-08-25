"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[9004],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=c(a),u=i,y=m["".concat(l,".").concat(u)]||m[u]||d[u]||s;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},24109:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const s={id:"data",title:"CRUD Operations"},o=void 0,r={unversionedId:"orda/data",id:"orda/data",title:"CRUD Operations",description:"In ORDA, you access data through entities and entity selections objects. These objects allow you to execute CRUD (Create, Read, Update, Delete) basic operations on data, along with queries and sorts.",source:"@site/docs/orda/data.md",sourceDirName:"orda",slug:"/orda/data",permalink:"/docs/orda/data",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/orda/data.md",tags:[],version:"current",frontMatter:{id:"data",title:"CRUD Operations"},sidebar:"Programming",previous:{title:"Data Model Objects",permalink:"/docs/orda/data-model"},next:{title:"Queries",permalink:"/docs/orda/queries"}},l={},c=[{value:"Creating an entity",id:"creating-an-entity",level:2},{value:"Entities and references",id:"entities-and-references",level:2},{value:"Using entity attributes",id:"using-entity-attributes",level:2},{value:"Assigning values to relation attributes",id:"assigning-values-to-relation-attributes",level:2},{value:"Creating an entity selection",id:"creating-an-entity-selection",level:2},{value:"Entity selections and Storage attributes",id:"entity-selections-and-storage-attributes",level:3},{value:"Entity selections and Relation attributes",id:"entity-selections-and-relation-attributes",level:3},{value:"Shareable or alterable entity selections",id:"shareable-or-alterable-entity-selections",level:3},{value:"Properties",id:"properties",level:4},{value:"How are they defined?",id:"how-are-they-defined",level:4},{value:"Sharing an entity selection between processes (example)",id:"sharing-an-entity-selection-between-processes-example",level:4},{value:"Entity Locking",id:"entity-locking",level:2},{value:"Automatic optimistic lock",id:"automatic-optimistic-lock",level:3},{value:"Pessimistic lock",id:"pessimistic-lock",level:3}],p={toc:c};function m(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In ORDA, you access data through ",(0,i.kt)("a",{parentName:"p",href:"data-model#entity"},"entities")," and ",(0,i.kt)("a",{parentName:"p",href:"data-model#entity-selection"},"entity selections")," objects. These objects allow you to execute CRUD (",(0,i.kt)("em",{parentName:"p"},"Create, Read, Update, Delete"),") basic operations on data, along with ",(0,i.kt)("a",{parentName:"p",href:"/docs/orda/queries"},"queries")," and sorts."),(0,i.kt)("h2",{id:"creating-an-entity"},"Creating an entity"),(0,i.kt)("p",null,"There are two ways to create a new entity in a dataclass:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You create an empty entity using the ",(0,i.kt)("inlineCode",{parentName:"li"},"dataclass.new()")," function."),(0,i.kt)("li",{parentName:"ul"},"You create a new reference to a database record using ORDA functions such as ",(0,i.kt)("inlineCode",{parentName:"li"},"entity.next()")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"entityselection.first()"),".")),(0,i.kt)("p",null,"At this moment, the entity is only created in memory. If you want to add it to the datastore, you must call the ",(0,i.kt)("inlineCode",{parentName:"p"},"entity.save()")," function."),(0,i.kt)("p",null,"Entity attributes are directly available as properties of the entity object. For more information, please refer to ",(0,i.kt)("a",{parentName:"p",href:"#using-entity-attributes"},"Using entity attributes"),"."),(0,i.kt)("p",null,'For example, we want to create a new entity in the "Employee" dataclass in the current datastore with "John" and "Dupont" assigned to the firstname and name attributes:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-qs"},"var myEntity : cs.EmployeeEntity\nmyEntity=ds.Employee.new() //Create a new object of the entity type\nmyEntity.name=\"Dupont\" //assign 'Dupont' to the 'name' attribute\nmyEntity.firstname=\"John\" //assign 'John' to the 'firstname' attribute\nmyEntity.save() //save the entity\n")),(0,i.kt)("h2",{id:"entities-and-references"},"Entities and references"),(0,i.kt)("p",null,"An entity contains a reference to a database record. Different entities can reference the same record. Also, since an entity can be stored in an object variable, different variables can contain a reference to the same entity."),(0,i.kt)("p",null,"If you execute the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-qs"},' var e1, e2 : cs.EmployeeEntity\n e1=ds.Employee.get(1) //access the employee with ID 1\n e2=e1\n e1.name="Hammer"\n  //both variables e1 and e2 share the reference to the same entity\n  //e2.name contains "Hammer"\n')),(0,i.kt)("p",null,"This is illustrated by the following graphic:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(84912).Z,width:"1485",height:"679"})),(0,i.kt)("p",null,"Now if you execute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-qs"},' var e1,e2 : cs.EmployeeEntity\n e1=ds.Employee.get(1)\n e2=ds.Employee.get(1)\n e1.name="Hammer"\n  //variable e1 contains a reference to an entity\n  //variable e2 contains another reference to another entity\n  //e2.name contains "smith"\n')),(0,i.kt)("p",null,"This is illustrated by the following graphic:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(84930).Z,width:"1105",height:"293"})),(0,i.kt)("p",null,"Note however that entities refer to the same record. In all cases, if you call the ",(0,i.kt)("inlineCode",{parentName:"p"},"entity.save()")," method, the record will be updated (except in ",(0,i.kt)("a",{parentName:"p",href:"#entity-locking"},"case of conflict"),")."),(0,i.kt)("p",null,"In fact, ",(0,i.kt)("inlineCode",{parentName:"p"},"e1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"e2")," are not the entity itself, but a reference to the entity. It means that you can pass them directly to any function or method, and it will act like a pointer. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-qs"}," forEach(entity,selection)\n    do_Capitalize(entity)\n end\n")),(0,i.kt)("p",null,"And the ",(0,i.kt)("em",{parentName:"p"},"do_Capitalize")," method is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-qs"}," declare (entity : cs.EmployeeEntity)\n var name : string\n name=entity.lastname\n if(name!=null)\n    name=uppercase(substring(name,1,1))+lowercase(substring(name,2))\n end\n entity.lastname=name\n")),(0,i.kt)("p",null,"You can handle entities like any other object and pass their references directly as ",(0,i.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-parameters"},"parameters"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can use as many entities as you need at the same time, there is no automatic lock on an entity (see ",(0,i.kt)("a",{parentName:"p",href:"#entity-locking"},"Entity locking"),"). When an entity is loaded, it uses the ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/platform#lazy-loading"},"lazy loading")," mechanism, which means that only the needed information is loaded.")),(0,i.kt)("h2",{id:"using-entity-attributes"},"Using entity attributes"),(0,i.kt)("p",null,"Entity attributes store or reference data and map corresponding fields in the corresponding table of the database, with regards to their ",(0,i.kt)("a",{parentName:"p",href:"/docs/language/DataClassClass#attributename"},(0,i.kt)("inlineCode",{parentName:"a"},"kind")),". Entity attributes of the ",(0,i.kt)("strong",{parentName:"p"},"storage")," kind can be set or get as simple properties of the entity object, while entity of the ",(0,i.kt)("strong",{parentName:"p"},"relatedEntity")," or ",(0,i.kt)("strong",{parentName:"p"},"relatedEntities")," kind will return an entity or an entity selection. Entity attributes of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/orda/data-model#calculated-attributes"},(0,i.kt)("strong",{parentName:"a"},"calculated"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/orda/data-model#alias-attributes"},(0,i.kt)("strong",{parentName:"a"},"alias"))," kind can return any value type.  "),(0,i.kt)("p",null,"For example, to set a storage attribute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-qs"},'\n entity=ds.Employee.get(1) //get employee attribute with ID 1\n name=entity.lastname //get the employee name, e.g. "Smith"\n entity.lastname="Jones" //set the employee name\n entity.save() //save the modifications\n')),(0,i.kt)("p",null,"Accessing a related attribute depends on the attribute ",(0,i.kt)("a",{parentName:"p",href:"/docs/language/DataClassClass#attributename"},(0,i.kt)("inlineCode",{parentName:"a"},"kind")),". For example, with the following structure:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(35134).Z,width:"1543",height:"374"})),(0,i.kt)("p",null,"You can access data through the related object(s):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-qs"}," var entity : cs.CompanyEntity\n var entitySel : cs.ProjectSelection\n entity=ds.Project.all().first().theClient //get the Company entity associated to the project\n entitySel=ds.Company.all().first().companyProjects //get the selection of projects for the company\n")),(0,i.kt)("p",null,"Note that both ",(0,i.kt)("em",{parentName:"p"},"theClient")," and ",(0,i.kt)("em",{parentName:"p"},"companyProjects")," in the above example are primary relation attributes and represent a direct relationship between the two dataclasses. However, relation attributes can also be built upon paths through relationships at several levels, including circular references. For example, consider the following structure:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(69033).Z,width:"861",height:"691"})),(0,i.kt)("p",null,"Each employee can be a manager and can have a manager. To get the manager of the manager of an employee, you can simply write:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-qs"}," var myEmp : cs.EmployeeEntity\n var manLev2 : string\n myEmp=ds.Employee.get(50)\n manLev2=myEmp.manager.manager.lastname\n")),(0,i.kt)("h2",{id:"assigning-values-to-relation-attributes"},"Assigning values to relation attributes"),(0,i.kt)("p",null,"In the ORDA architecture, relation attributes directly contain data related to entities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An many-to-one type relation attribute (",(0,i.kt)("strong",{parentName:"li"},"relatedEntity")," kind) contains an entity"),(0,i.kt)("li",{parentName:"ul"},"A one-to-many type relation attribute (",(0,i.kt)("strong",{parentName:"li"},"relatedEntities")," kind) contains an entity selection")),(0,i.kt)("p",null,"Let's look at the following (simplified) structure:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(98566).Z,width:"1525",height:"488"})),(0,i.kt)("p",null,'In this example, an entity in the "Employee" dataclass contains an object of type Entity in the "employer" attribute (or a null value). An entity in the "Company" dataclass contains an object of type EntitySelection in the "staff" attribute (or a null value).'),(0,i.kt)("p",null,'To assign a value directly to the "employer" attribute, you must pass an existing entity from the "Company" dataclass. For example:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-qs"},' var emp : cs.EmployeeEntity\n emp=ds.Employee.new() // create an employee\n emp.lastname="Smith" // assign a value to an attribute\n emp.employer=ds.Company.query("name =:1","4D")[0]  //assign a company entity\n emp.save()\n')),(0,i.kt)("p",null,'ORDA provides an additional facility for entering a relation attribute for a "many" entity related to a "one" entity: you pass the primary key of the "one" entity directly when assigning a value to the relation attribute. For this to work, you pass the primary key value (number or string) to the relation attribute. ORDA then automatically takes care of searching for the corresponding entity in the dataclass. For example:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-qs"},' var emp : cs.EmployeeEntity\n emp=ds.Employee.new()\n emp.lastname="Wesson"\n emp.employer=2 // assign a primary key to the relation attribute\n  //ORDA looks for the company whose primary key (in this case, its ID)\n  //is 2 and assigns it to the employee\n emp.save()\n')),(0,i.kt)("p",null,'This is particularly useful when you are importing large amounts of data from a relational database. This type of import usually contains an "ID" column, which references a primary key that you can then assign directly to a relation attribute.'),(0,i.kt)("p",null,'This also means that you can assign primary keys in the "many" entities without corresponding entities having already been created in the "one" datastore class. If you assign a primary key that does not exist in the related datastore class, it is nevertheless stored and assigned by ORDA as soon as this "one" entity is created.'),(0,i.kt)("p",null,'You can assign or modify the value of a "one" related entity attribute from the "many" dataclass directly through the related attribute. For example, if you want to modify the name attribute of a related Company entity of an Employee entity, you can write:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-code4d"},' var emp : cs.EmployeeEntity\n emp=ds.Employee.get(2) // load the Employee entity with primary key 2\n\n emp.employer.name="4D, Inc." //modify the name attribute of the related Company\n emp.employer.save() //save the related attribute\n  //the related entity is updated\n')),(0,i.kt)("h2",{id:"creating-an-entity-selection"},"Creating an entity selection"),(0,i.kt)("p",null,"You can create an object of type ",(0,i.kt)("a",{parentName:"p",href:"data-model#entity-selection"},"entity selection")," as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Querying the entities ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/DataClassClass#query"},"in a dataclass")," or in an ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntitySelectionClass#query"},"existing entity selection"),";"),(0,i.kt)("li",{parentName:"ul"},"Using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/DataClassClass#all"},(0,i.kt)("inlineCode",{parentName:"a"},".all()"))," dataclass function to select all the entities in a dataclass;"),(0,i.kt)("li",{parentName:"ul"},"Using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/DataClassClass#newselection"},(0,i.kt)("inlineCode",{parentName:"a"},".newSelection()"))," dataclass function to create a blank entity selection;"),(0,i.kt)("li",{parentName:"ul"},"Using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntitySelectionClass#copy"},(0,i.kt)("inlineCode",{parentName:"a"},".copy()"))," function to duplicate an existing entity selection;"),(0,i.kt)("li",{parentName:"ul"},"Using one of the various functions from the ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntitySelectionClass"},"Entity selection class")," that returns a new entity selection, such as ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntitySelectionClass#and"},(0,i.kt)("inlineCode",{parentName:"a"},".and()")),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntitySelectionClass#minus"},(0,i.kt)("inlineCode",{parentName:"a"},".minus()")),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntitySelectionClass#slice"},(0,i.kt)("inlineCode",{parentName:"a"},".slice()")),", etc.;"),(0,i.kt)("li",{parentName:"ul"},"Using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntityClass#getselection"},(0,i.kt)("inlineCode",{parentName:"a"},"entity.getSelection()"))," function;"),(0,i.kt)("li",{parentName:"ul"},"Using a relation attribute of kind ",(0,i.kt)("inlineCode",{parentName:"li"},"relatedEntities")," such as ",(0,i.kt)("inlineCode",{parentName:"li"},"empSel=company.employees"),", or a projection such as ",(0,i.kt)("inlineCode",{parentName:"li"},"empSel.name"),".")),(0,i.kt)("p",null,"You can simultaneously create and use as many different entity selections as you want for a dataclass. Keep in mind that an entity selection only contains references to entities. Different entity selections can contain references to the same entities. "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"An entity selection is usually unordered, but it can be ordered (see ",(0,i.kt)("a",{parentName:"p",href:"/docs/orda/data-model#ordered-or-unordered-entity-selection"},"Ordered or unordered entity selection"),").")),(0,i.kt)("h3",{id:"entity-selections-and-storage-attributes"},"Entity selections and Storage attributes"),(0,i.kt)("p",null,"All storage attributes (string, number, boolean, date) are available as properties of entity selections as well as of entities. When used in conjunction with an entity selection, a scalar attribute returns a collection of scalar values. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-qs"},' var locals : cs.PersonSelection\n var localEmails : collection\n locals=ds.Person.query("city = :1","San Jose") //entity selection of person\n localEmails=locals.emailAddress //collection of email addresses (strings)\n')),(0,i.kt)("h3",{id:"entity-selections-and-relation-attributes"},"Entity selections and Relation attributes"),(0,i.kt)("p",null,"In addition to the variety of ways you can query, you can also use relation attributes as properties of entity selections to return new entity selections. For example, consider the following structure: "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2331).Z,width:"1825",height:"510"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-qs"},' var myParts : cs.PartSelection\n var myInvoices : cs.InvoiceSelection\n myParts=ds.Part.query("ID < 100") //Return parts with ID less than 100\n myInvoices=myParts.invoiceItems.invoice\n  //All invoices with at least one line item related to a part in myParts\n')),(0,i.kt)("p",null,"The last line will return in ",(0,i.kt)("em",{parentName:"p"},"myInvoices")," an entity selection of all invoices that have at least one invoice item related to a part in the entity selection ",(0,i.kt)("em",{parentName:"p"},"myParts"),". When a relation attribute is used as a property of an entity selection, the result is always another entity selection, even if only one entity is returned. When a relation attribute is used as a property of an entity selection and no entities are returned, the result is an empty entity selection, not null."),(0,i.kt)("h3",{id:"shareable-or-alterable-entity-selections"},"Shareable or alterable entity selections"),(0,i.kt)("p",null,"An entity selection can be ",(0,i.kt)("strong",{parentName:"p"},"shareable")," (readable by multiple processes, but not alterable after creation) or ",(0,i.kt)("strong",{parentName:"p"},"alterable")," (supports the ",(0,i.kt)("a",{parentName:"p",href:"/docs/language/EntitySelectionClass#add"},(0,i.kt)("inlineCode",{parentName:"a"},".add()"))," function, but only usable by the current process). "),(0,i.kt)("h4",{id:"properties"},"Properties"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"shareable")," entity selection has the following characteristics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it can be stored in a shared object or shared collection, and can be passed as parameter between several processes or workers;"),(0,i.kt)("li",{parentName:"ul"},"it can be stored in several shared objects or collections, or in a shared object or collection which already belongs to a group;"),(0,i.kt)("li",{parentName:"ul"},"it does not allow the addition of new entities. Trying to add an entity to a shareable entity selection will trigger an error (1637 - This entity selection cannot be altered). To add an entity to a shareable entity selection, you must first transform it into a non-shareable entity selection using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntitySelectionClass#copy"},(0,i.kt)("inlineCode",{parentName:"a"},".copy()"))," function, before calling ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntitySelectionClass#add"},(0,i.kt)("inlineCode",{parentName:"a"},".add()")),".")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Most entity selection functions (such as ",(0,i.kt)("a",{parentName:"p",href:"/docs/language/EntitySelectionClass#slice"},(0,i.kt)("inlineCode",{parentName:"a"},".slice()")),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/language/EntitySelectionClass#and"},(0,i.kt)("inlineCode",{parentName:"a"},".and()")),"...) support shareable entity selections since they do not need to alter the original entity selection (they return a new one). ")),(0,i.kt)("p",null,"An ",(0,i.kt)("strong",{parentName:"p"},"alterable")," entity selection has the following characteristics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it cannot be shared between processes, nor be stored in a shared object or collection. Trying to store a non-shareable entity selection in a shared object or collection will trigger an error (-10721 - Not supported value type in a shared object or shared collection);"),(0,i.kt)("li",{parentName:"ul"},"it accepts the addition of new entities, i.e. it is supports the ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntitySelectionClass#add"},(0,i.kt)("inlineCode",{parentName:"a"},".add()"))," function.")),(0,i.kt)("h4",{id:"how-are-they-defined"},"How are they defined?"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"shareable")," or ",(0,i.kt)("strong",{parentName:"p"},"alterable")," nature of an entity selection is defined when the entity selection is created (it cannot be modified afterwards). You can know the nature of an entity selection using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/language/EntitySelectionClass#isalterable"},".isAlterable()")," function. "),(0,i.kt)("p",null,"A new entity selection is ",(0,i.kt)("strong",{parentName:"p"},"shareable")," in the following cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the new entity selection results from an ORDA class function applied to a dataclass: ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/DataClassClass#all"},"dataClass.all()"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/DataClassClass#fromcollection"},"dataClass.fromCollection()"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/DataClassClass#query"},"dataClass.query()"),","),(0,i.kt)("li",{parentName:"ul"},"the new entity selection is based upon a relation ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntityClass#attributename"},"entity.",(0,i.kt)("em",{parentName:"a"},"attributeName")),' (e.g. "company.employees") when ',(0,i.kt)("em",{parentName:"li"},"attributeName")," is a one-to-many related attribute but the entity does not belong to an entity selection."),(0,i.kt)("li",{parentName:"ul"},"the new entity selection is explicitely copied as shareable with ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntitySelectionClass#copy"},"entitySelection.copy()")," (i.e. with the ",(0,i.kt)("inlineCode",{parentName:"li"},"ck shared")," option).")),(0,i.kt)("p",null,"Example: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-qs"},"var myComp : cs.CompanyEntity\nvar employees : cs.EmployeeSelection\nmyComp=ds.Company.get(2) //myComp does not belong to an entity selection\nemployees=myComp.employees //employees is shareable\n")),(0,i.kt)("p",null,"A new entity selection is ",(0,i.kt)("strong",{parentName:"p"},"alterable")," in the following cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the new entity selection created blank using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/DataClassClass#newselection"},"dataClass.newSelection()")," function,"),(0,i.kt)("li",{parentName:"ul"},"the new entity selection is explicitely copied as alterable with ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntitySelectionClass#copy"},"entitySelection.copy()")," (i.e. without the ",(0,i.kt)("inlineCode",{parentName:"li"},"ck shared")," option).")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-qs"},"var toModify : cs.CompanySelection\ntoModify=ds.Company.all().copy() //toModify is alterable\n")),(0,i.kt)("p",null,"A new entity selection ",(0,i.kt)("strong",{parentName:"p"},"inherits")," from the original entity selection nature in the following cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the new entity selection results from one of the various ORDA class functions applied to an existing entity selection (",(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntitySelectionClass#query"},".query()"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntitySelectionClass#slice"},".slice()"),", etc.) ."),(0,i.kt)("li",{parentName:"ul"},"the new entity selection is based upon a relation:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntityClass#attributename"},"entity.",(0,i.kt)("em",{parentName:"a"},"attributeName")),' (e.g. "company.employees") when ',(0,i.kt)("em",{parentName:"li"},"attributeName")," is a one-to-many related attribute and the entity belongs to an entity selection (same nature as ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntityClass#getselection"},".getSelection()")," entity selection),"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntitySelectionClass#attributename"},"entitySelection.",(0,i.kt)("em",{parentName:"a"},"attributeName")),' (e.g. "employees.employer") when ',(0,i.kt)("em",{parentName:"li"},"attributeName")," is a related attribute (same nature as the entity selection),"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntitySelectionClass#extract"},".extract()")," when the resulting collection contains entity selections (same nature as the entity selection).")))),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-qs"},'var highSal, lowSal : cs.EmployeeSelection\nvar comp, comp2 : cs.CompanySelection\nhighSal=ds.Employee.query("salary >= :1", 1000000)   \n    //highSal is shareable because of the query on dataClass\ncomp=highSal.employer //comp is shareable because highSal is shareable\n\nlowSal=ds.Employee.query("salary <= :1", 10000).copy() \n    //lowSal is alterable because of the copy()\ncomp2=lowSal.employer //comp2 is alterable because lowSal is alterable\n')),(0,i.kt)("h4",{id:"sharing-an-entity-selection-between-processes-example"},"Sharing an entity selection between processes (example)"),(0,i.kt)("p",null,"You work with two entity selections that you want to pass to a worker process so that it can send mails to appropriate persons:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-qs"},'\nvar paid,unpaid : cs.InvoicesSelection\n//We get entity selections for paid and unpaid invoices\npaid=ds.Invoices.query("status=:1", "Paid")\nunpaid=ds.Invoices.query("status=:1", "Unpaid")\n\n//We pass entity selection references as parameters to the worker\ncallWorker("mailing", "sendMails", paid, unpaid)\n \n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sendMails")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-qs"},'\n declare (paid : cs.InvoicesSelection, unpaid : cs.InvoicesSelection)\n var invoice : cs.InvoicesEntity\n \n var server, transporter, email, status : object\n \n  //Prepare emails\n server=newObject()\n server.host="exchange.company.com"\n server.user="myName@company.com"\n server.password="my!!password"\n transporter=smtpNewTransporter(server)\n email=newObject()\n email.from="myName@company.com"\n \n  //Loops on entity selections\n forEach(invoice,paid)\n    email.to=invoice.customer.address // email address of the customer\n    email.subject="Payment OK for invoice # "+string(invoice.number)\n    status=transporter.send(email)\n end\n \n forEach(invoice,unpaid)\n    email.to=invoice.customer.address // email address of the customer\n    email.subject="Please pay invoice # "+string(invoice.number)\n    status=transporter.send(email)\n end\n')),(0,i.kt)("h2",{id:"entity-locking"},"Entity Locking"),(0,i.kt)("p",null,"You often need to manage possible conflicts that might arise when several users or processes load and attempt to modify the same entities at the same time. Record locking is a methodology used in relational databases to avoid inconsistent updates to data. The concept is to either lock a record upon read so that no other process can update it, or alternatively, to check when saving a record to verify that some other process hasn\u2019t modified it since it was read. The former is referred to as ",(0,i.kt)("strong",{parentName:"p"},"pessimistic record locking")," and it ensures that a modified record can be written at the expense of locking records to other users. The latter is referred to as ",(0,i.kt)("strong",{parentName:"p"},"optimistic record locking")," and it trades the guarantee of write privileges to the record for the flexibility of deciding write privileges only if the record needs to be updated. In pessimistic record locking, the record is locked even if there is no need to update it. In optimistic record locking, the validity of a record\u2019s modification is decided at update time."),(0,i.kt)("p",null,"ORDA provides you with two entity locking modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'an automatic "optimistic" mode, suitable for most applications,'),(0,i.kt)("li",{parentName:"ul"},'a "pessimistic" mode allowing you to lock entities prior to their access.')),(0,i.kt)("h3",{id:"automatic-optimistic-lock"},"Automatic optimistic lock"),(0,i.kt)("p",null,'This automatic mechanism is based on the concept of "optimistic locking" which is particularly suited to the issues of web applications. This concept is characterized by the following operating principles:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All entities can always be loaded in read-write; there is no ",(0,i.kt)("em",{parentName:"li"},"a priori"),' "locking" of entities.'),(0,i.kt)("li",{parentName:"ul"},"Each entity has an internal locking stamp that is incremented each time it is saved."),(0,i.kt)("li",{parentName:"ul"},"When a user or process tries to save an entity using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntityClass#save"},(0,i.kt)("inlineCode",{parentName:"a"},"entity.save()"))," function, Qodly compares the stamp value of the entity to be saved with that of the entity found in the data (in the case of a modification):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When the values match, the entity is saved and the internal stamp value is incremented."),(0,i.kt)("li",{parentName:"ul"},"When the values do not match, it means that another user has modified this entity in the meantime. The save is not performed and an error is returned.")))),(0,i.kt)("p",null,"The following diagram illustrates optimistic locking:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Two processes load the same entity. ")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(20229).Z,width:"1366",height:"350"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"The first process modifies the entity and validates the change. The ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntityClass#save"},(0,i.kt)("inlineCode",{parentName:"a"},"entity.save()"))," fucntion is called. The Qodly engine automatically compares the internal stamp value of the modified entity with that of the entity stored in the data. Since they match, the entity is saved and its stamp value is incremented. ")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(19798).Z,width:"1956",height:"484"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"The second process also modifies the loaded entity and validates its changes. The ",(0,i.kt)("inlineCode",{parentName:"li"},"entity.save()")," function is called. Since the stamp value of the modified entity does not match the one of the entity stored in the data, the save is not performed and an error is returned. ")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6680).Z,width:"1952",height:"480"})),(0,i.kt)("p",null,"This can also be illustrated by the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-qs"},' person1=ds.Person.get(1) //Reference to entity\n person2=ds.Person.get(1) //Other reference to same entity\n person1.name="Bill"\n result=person1.save() //result.success=true, change saved\n person2.name="William"\n result=person2.save() //result.success=false, change not saved\n')),(0,i.kt)("p",null,"In this example, we assign to ",(0,i.kt)("em",{parentName:"p"},"person1")," a reference to the person entity with a key of 1. Then, we assign another reference of the same entity to variable ",(0,i.kt)("em",{parentName:"p"},"person2"),". Using ",(0,i.kt)("em",{parentName:"p"},"person1"),", we change the first name of the person and save the entity. When we attempt to do the same thing with ",(0,i.kt)("em",{parentName:"p"},"person2"),", ORDA checks to make sure the entity on disk is the same as when the reference in ",(0,i.kt)("em",{parentName:"p"},"person1")," was first assigned. Since it isn't the same, it returns false in the ",(0,i.kt)("inlineCode",{parentName:"p"},"success")," property and doesn\u2019t save the second modification."),(0,i.kt)("p",null,"When this situation occurs, you can, for example, reload the entity from the disk using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/language/EntityClass#reload"},(0,i.kt)("inlineCode",{parentName:"a"},"entity.reload()"))," function so that you can try to make the modification again. The ",(0,i.kt)("inlineCode",{parentName:"p"},"entity.save()"),' function also proposes an "automerge" option to save the entity in case processes modified attributes that were not the same.'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Record stamps are not used in ",(0,i.kt)("strong",{parentName:"p"},"transactions")," because only a single copy of a record exists in this context. Whatever the number of entities that reference a record, the same copy is modified thus ",(0,i.kt)("inlineCode",{parentName:"p"},"entity.save()")," operations will never generate stamp errors.")),(0,i.kt)("h3",{id:"pessimistic-lock"},"Pessimistic lock"),(0,i.kt)("p",null,"You can lock and unlock entities on demand when accessing data. When an entity is getting locked by a process, it is loaded in read/write in this process but it is locked for all other processes. The entity can only be loaded in read-only mode in these processes; its values cannot be edited or saved."),(0,i.kt)("p",null,"This feature is based upon two functions of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity")," class:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntityClass#lock"},(0,i.kt)("inlineCode",{parentName:"a"},"entity.lock()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/language/EntityClass#unlock"},(0,i.kt)("inlineCode",{parentName:"a"},"entity.unlock()")))),(0,i.kt)("p",null,"For more information, please refer to the descriptions for these functions."))}m.isMDXComponent=!0},84912:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/entityRef1-d0eef4f04cfb9498cf30221f59c283ea.png"},84930:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/entityRef2-57fe6c7da8136b8cf3108f7631da59ca.png"},20229:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/optimisticLock1-1e67dd3b4e6661df397780ad7e309ed2.png"},19798:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/optimisticLock2-b5276f63a1a51d44fe34a379ca5cacbf.png"},6680:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/optimisticLock3-1896f094cf59a30ce6b5ecb7bb227b65.png"},35134:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/structure2-7b7639f97c7864976928f03ab76c6c48.png"},69033:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/structure4-0a2a9e6bf6e9caf1c330f882b363ebe9.png"},98566:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/structure5-472a41f6e7af9248f8e30fff30ffe7f6.png"},2331:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/structure6-433a6af682009ee2458e680fb64bea72.png"}}]);
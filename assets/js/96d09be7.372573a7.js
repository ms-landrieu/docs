"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[6960],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=l,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,r=new Array(s);r[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},815:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const s={id:"lang-classes",title:"Classes"},r=void 0,o={unversionedId:"concepts/lang-classes",id:"concepts/lang-classes",title:"Classes",description:"Overview",source:"@site/docs/concepts/lang-classes.md",sourceDirName:"concepts",slug:"/concepts/lang-classes",permalink:"/docs/concepts/lang-classes",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/concepts/lang-classes.md",tags:[],version:"current",frontMatter:{id:"lang-classes",title:"Classes"},sidebar:"Guides",previous:{title:"Shared objects and collections",permalink:"/docs/concepts/lang-shared"},next:{title:"Control flow",permalink:"/docs/concepts/lang-control-flow"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"Class definition",id:"class-definition",level:2},{value:"Class stores",id:"class-stores",level:2},{value:"<code>cs</code>",id:"cs",level:3},{value:"cs -&gt; classStore",id:"cs---classstore",level:4},{value:"Example",id:"example",level:4},{value:"<code>4D</code>",id:"4d",level:3},{value:"4D -&gt; classStore",id:"4d---classstore",level:4},{value:"Example",id:"example-1",level:4},{value:"Class object",id:"class-object",level:2},{value:"Inheritance",id:"inheritance",level:3},{value:"Class keywords",id:"class-keywords",level:2},{value:"<code>Function</code>",id:"function",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Return value",id:"return-value",level:4},{value:"Example 1",id:"example-1-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"<code>Function get</code> and <code>Function set</code>",id:"function-get-and-function-set",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"Example 1",id:"example-1-2",level:4},{value:"Example 2",id:"example-2-1",level:4},{value:"<code>Class Constructor</code>",id:"class-constructor",level:3},{value:"Syntax",id:"syntax-2",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>Class extends &lt;ClassName&gt;</code>",id:"class-extends-classname",level:3},{value:"Syntax",id:"syntax-3",level:4},{value:"Example",id:"example-4",level:4},{value:"<code>Super</code>",id:"super",level:3},{value:"Syntax",id:"syntax-4",level:4},{value:"Example 1",id:"example-1-3",level:4},{value:"Example 2",id:"example-2-2",level:4},{value:"<code>This</code>",id:"this",level:3},{value:"Syntax",id:"syntax-5",level:4},{value:"Class commands",id:"class-commands",level:2},{value:"<code>OB Class</code>",id:"ob-class",level:3},{value:"<code>OB Class ( object ) -&gt; Object | Null</code>",id:"ob-class--object----object--null",level:4},{value:"<code>OB Instance of</code>",id:"ob-instance-of",level:3},{value:"<code>OB Instance of ( object ; class ) -&gt; Boolean</code>",id:"ob-instance-of--object--class----boolean",level:4}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The Qodly language supports the concept of ",(0,l.kt)("strong",{parentName:"p"},"classes"),". In a programming language, using a class allows you to define an object behaviour with associated properties and functions."),(0,l.kt)("p",null,"Once a user class is defined, you can ",(0,l.kt)("strong",{parentName:"p"},"instantiate")," objects of this class anywhere in your code. Each object is an instance of its class. A class can ",(0,l.kt)("a",{parentName:"p",href:"#class-extends-classname"},(0,l.kt)("inlineCode",{parentName:"a"},"extend"))," another class, and then inherits from its ",(0,l.kt)("a",{parentName:"p",href:"#function"},"functions")," and properties (",(0,l.kt)("a",{parentName:"p",href:"#class-constructor"},"static")," and ",(0,l.kt)("a",{parentName:"p",href:"#function-get-and-function-set"},"computed"),")."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The class model in Qodly is similar to classes in JavaScript, and based on a chain of prototypes.")),(0,l.kt)("p",null,"For example, you could create a ",(0,l.kt)("inlineCode",{parentName:"p"},"Person")," class with the following definition:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'//Class: Person.4qm\nClass constructor(firstname : Text, lastname : Text)\n This.firstName=firstname\n This.lastName=lastname\n\nFunction get fullName() -> fullName : Text\n fullName=This.firstName+" "+This.lastName\n \nFunction sayHello() -> welcome : Text\n welcome="Hello "+This.fullName\n')),(0,l.kt)("p",null,'In a method, creating a "Person":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'var person : cs.Person //object of Person class  \nvar hello : Text\nperson=cs.Person.new("John","Doe")\n//person:{firstName: "John", lastName: "Doe", fullName: "John Doe"}\nhello=person.sayHello() //"Hello John Doe"\n')),(0,l.kt)("h2",{id:"class-definition"},"Class definition"),(0,l.kt)("p",null,"A user class in Qodly is defined by a specific ",(0,l.kt)("a",{parentName:"p",href:"methods.md"},"method")," file (.4qm), stored in the ",(0,l.kt)("inlineCode",{parentName:"p"},"/Project/Sources/Classes/")," folder. The name of the file is the class name."),(0,l.kt)("p",null,"When naming classes, you should keep in mind the following rules:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("a",{parentName:"li",href:"identifiers.md#classes"},"class name")," must be compliant with ",(0,l.kt)("a",{parentName:"li",href:"identifiers.md#object-properties"},"property naming rules"),"."),(0,l.kt)("li",{parentName:"ul"},"Class names are case sensitive."),(0,l.kt)("li",{parentName:"ul"},"Giving the same name to a user class and a datastore's dataclass is not recommended, in order to prevent any conflict.")),(0,l.kt)("p",null,'For example, if you want to define a class named "Polygon", you need to create the following file:'),(0,l.kt)("p",null,"Project folder\nProject\nSources\nClasses\nPolygon.4qm"),(0,l.kt)("h2",{id:"class-stores"},"Class stores"),(0,l.kt)("p",null,"Available classes are accessible from their class stores. Two class stores are available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cs")," for user class store"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"4D")," for built-in class store")),(0,l.kt)("h3",{id:"cs"},(0,l.kt)("inlineCode",{parentName:"h3"},"cs")),(0,l.kt)("h4",{id:"cs---classstore"},"cs -> classStore"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"classStore"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"User class store for the project")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"cs")," command returns the user class store for the current project. It returns all user classes ",(0,l.kt)("a",{parentName:"p",href:"#class-definition"},"defined")," in the opened project. By default, only project ",(0,l.kt)("a",{parentName:"p",href:"ORDA/ordaClasses.md"},"ORDA classes")," are available."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("p",null,"You want to create a new instance of an object of ",(0,l.kt)("inlineCode",{parentName:"p"},"myClass"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"instance=cs.myClass.new()\n")),(0,l.kt)("h3",{id:"4d"},(0,l.kt)("inlineCode",{parentName:"h3"},"4D")),(0,l.kt)("h4",{id:"4d---classstore"},"4D -> classStore"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"classStore"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"4D class store")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"4D")," command returns the class store for available built-in Qodly classes. It provides access to specific APIs such as ",(0,l.kt)("a",{parentName:"p",href:"API/CryptoKeyClass.md"},"CryptoKey"),"."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("p",null,"You want to create a new key in the ",(0,l.kt)("inlineCode",{parentName:"p"},"CryptoKey")," class:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'key=4D.CryptoKey.new(New object("type","ECDSA","curve","prime256v1"))\n')),(0,l.kt)("h2",{id:"class-object"},"Class object"),(0,l.kt)("p",null,"When a class is ",(0,l.kt)("a",{parentName:"p",href:"#class-definition"},"defined")," in the project, it is loaded in the Qodly language environment. A class is an object itself, of ",(0,l.kt)("a",{parentName:"p",href:"API/ClassClass.md"},'"Class" class'),". A class object has the following properties and function:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"API/ClassClass.md#name"},(0,l.kt)("inlineCode",{parentName:"a"},"name"))," string"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"API/ClassClass.md#superclass"},(0,l.kt)("inlineCode",{parentName:"a"},"superclass"))," object (null if none)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"API/ClassClass.md#new"},(0,l.kt)("inlineCode",{parentName:"a"},"new()"))," function, allowing to instantiate class objects.")),(0,l.kt)("p",null,"In addition, a class object can reference a ",(0,l.kt)("a",{parentName:"p",href:"#class-constructor"},(0,l.kt)("inlineCode",{parentName:"a"},"constructor"))," object (optional)."),(0,l.kt)("p",null,"A class object is a ",(0,l.kt)("a",{parentName:"p",href:"shared.md"},"shared object")," and can therefore be accessed from different processes simultaneously."),(0,l.kt)("h3",{id:"inheritance"},"Inheritance"),(0,l.kt)("p",null,"If a class inherits from another class (i.e. the ",(0,l.kt)("a",{parentName:"p",href:"classes.md#class-extends-classname"},"Class extends")," keyword is used in its definition), the parent class is its ",(0,l.kt)("a",{parentName:"p",href:"API/ClassClass.md#superclass"},(0,l.kt)("inlineCode",{parentName:"a"},"superclass")),"."),(0,l.kt)("p",null,"When Qodly does not find a function or a property in a class, it searches it in its ",(0,l.kt)("a",{parentName:"p",href:"API/ClassClass.md#superclass"},(0,l.kt)("inlineCode",{parentName:"a"},"superclass")),'; if not found, Qodly continues searching in the superclass of the superclass, and so on until there is no more superclass (all objects inherit from the "Object" superclass).'),(0,l.kt)("h2",{id:"class-keywords"},"Class keywords"),(0,l.kt)("p",null,"Specific Qodly keywords can be used in class definitions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Function <Name>")," to define class functions of the objects."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Function get <Name>")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Function set <Name>")," to define computed properties of the objects."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Class constructor")," to define static properties of the objects."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Class extends <ClassName>")," to define inheritance.")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"XXX"},"ORDA data model classes")," support additional keywords such as ",(0,l.kt)("inlineCode",{parentName:"p"},"exposed")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Alias"),". ")),(0,l.kt)("h3",{id:"function"},(0,l.kt)("inlineCode",{parentName:"h3"},"Function")),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"Function <name>({parameterName : type, ...}){->parameterName : type}\n// code\n")),(0,l.kt)("p",null,"Class functions are specific properties of the class. They are objects of the ",(0,l.kt)("a",{parentName:"p",href:"API/FunctionClass.md#about-4dfunction-objects"},"4D.Function")," class."),(0,l.kt)("p",null,"In the class definition file, function declarations use the ",(0,l.kt)("inlineCode",{parentName:"p"},"Function")," keyword, and the name of the function. The function name must be compliant with ",(0,l.kt)("a",{parentName:"p",href:"Concepts/identifiers.md#object-properties"},"property naming rules"),"."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},'Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features in the code editor. For example, if you declare ',(0,l.kt)("inlineCode",{parentName:"p"},"Function _myPrivateFunction")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"MyClass"),", it will not be proposed in the code editor when you type in ",(0,l.kt)("inlineCode",{parentName:"p"},'"cs.MyClass. "'),".")),(0,l.kt)("p",null,"Immediately following the function name, ",(0,l.kt)("a",{parentName:"p",href:"#parameters"},"parameters")," for the function can be declared with an assigned name and data type, including the return parameter (optional). For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"Function computeArea(width : Integer , height : Integer)-> area : Integer\n")),(0,l.kt)("p",null,"Within a class function, the ",(0,l.kt)("inlineCode",{parentName:"p"},"This")," command is used as the object instance. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'Function setFullname(firstname : Text, lastname : Text)\n This.firstName=firstname\n This.lastName=lastname\n\nFunction getFullname()->fullname : Text\n fullname=This.firstName+" "+Uppercase(This.lastName)\n')),(0,l.kt)("p",null,"For a class function, the ",(0,l.kt)("inlineCode",{parentName:"p"},"Current method name")," command returns ",(0,l.kt)("inlineCode",{parentName:"p"},"<ClassName>.<FunctionName>"),', for example "MyClass.myFunction".'),(0,l.kt)("p",null,"In the application code, class functions are called as member methods of the object instance and can receive ",(0,l.kt)("a",{parentName:"p",href:"#class-function-parameters"},"parameters")," if any. The following syntaxes are supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"use of the ",(0,l.kt)("inlineCode",{parentName:"li"},"()")," operator. For example, ",(0,l.kt)("inlineCode",{parentName:"li"},'myObject.methodName("hello")')),(0,l.kt)("li",{parentName:"ul"},'use of a "4D.Function" class member method:',(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"API/FunctionClass.md#apply"},(0,l.kt)("inlineCode",{parentName:"a"},"apply()"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"API/FunctionClass.md#call"},(0,l.kt)("inlineCode",{parentName:"a"},"call()")))))),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,"Function parameters are declared using the parameter name and the parameter type, separated by a colon (:). The parameter name must be compliant with ",(0,l.kt)("a",{parentName:"p",href:"Concepts/identifiers.md#object-properties"},"property naming rules"),". Multiple parameters (and types) are separated by commas (,)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"Function add(x, y : Variant, z : Integer, xy : Object)\n")),(0,l.kt)("p",null,"If the type is not stated, the parameter will be defined as ",(0,l.kt)("inlineCode",{parentName:"p"},"Variant"),"."),(0,l.kt)("h4",{id:"return-value"},"Return value"),(0,l.kt)("p",null,"You declare the return parameter (optional) by adding an arrow (",(0,l.kt)("inlineCode",{parentName:"p"},"->"),") and the return parameter definition after the input parameter(s) list, or a colon (",(0,l.kt)("inlineCode",{parentName:"p"},":"),") and the return parameter type only. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"Function add(x : Variant, y : Integer)->result : Integer\n result=x+y\n")),(0,l.kt)("p",null,"You can also declare the return parameter by adding only ",(0,l.kt)("inlineCode",{parentName:"p"},": type")," and use the ",(0,l.kt)("a",{parentName:"p",href:"parameters.md#return-expression"},(0,l.kt)("inlineCode",{parentName:"a"},"return expression"))," (it will also end the function execution). For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"Function add(x : Variant, y : Integer): Integer\n // some code\n return x+y\n")),(0,l.kt)("h4",{id:"example-1-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'// Class: Rectangle\nClass constructor(width : Integer, height : Integer)\n This.name="Rectangle"\n This.height=height\n This.width=width\n\n// Function definition\nFunction getArea()->result : Integer\n result=(This.height)*(This.width)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"// In a project method\n\nvar rect : cs.Rectangle\nvar area : Real\n\nrect=cs.Rectangle.new(50,100)  \narea=rect.getArea() //5000\n")),(0,l.kt)("h4",{id:"example-2"},"Example 2"),(0,l.kt)("p",null,"This example uses the ",(0,l.kt)("a",{parentName:"p",href:"parameters.md#return-expression"},(0,l.kt)("inlineCode",{parentName:"a"},"return expression")),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"Function getRectArea(width : Integer, height : Integer) : Integer\n If (width > 0 && height > 0)\n  return width * height\n Else\n  return 0\n End if\n")),(0,l.kt)("h3",{id:"function-get-and-function-set"},(0,l.kt)("inlineCode",{parentName:"h3"},"Function get")," and ",(0,l.kt)("inlineCode",{parentName:"h3"},"Function set")),(0,l.kt)("h4",{id:"syntax-1"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"Function get <name>()->result : type\n// code\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"Function set <name>(parameterName : type)\n// code\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Function get")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Function set")," are accessors defining ",(0,l.kt)("strong",{parentName:"p"},"computed properties")," in the class. A computed property is a named property with a data type that masks a calculation. When a computed property value is accessed, Qodly substitutes the corresponding accessor's code:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"when the property is read, the ",(0,l.kt)("inlineCode",{parentName:"li"},"Function get")," is executed,"),(0,l.kt)("li",{parentName:"ul"},"when the property is written, the ",(0,l.kt)("inlineCode",{parentName:"li"},"Function set")," is executed.")),(0,l.kt)("p",null,"If the property is not accessed, the code never executes."),(0,l.kt)("p",null,"Computed properties are designed to handle data that do not necessary need to be kept in memory. They are usually based upon persistent properties. For example, if a class object contains as persistent property the ",(0,l.kt)("em",{parentName:"p"},"gross price")," and the ",(0,l.kt)("em",{parentName:"p"},"VAT rate"),", the ",(0,l.kt)("em",{parentName:"p"},"net price")," could be handled by a computed property."),(0,l.kt)("p",null,"In the class definition file, computed property declarations use the ",(0,l.kt)("inlineCode",{parentName:"p"},"Function get")," (the ",(0,l.kt)("em",{parentName:"p"},"getter"),") and ",(0,l.kt)("inlineCode",{parentName:"p"},"Function set")," (the ",(0,l.kt)("em",{parentName:"p"},"setter"),") keywords, followed by the name of the property. The name must be compliant with ",(0,l.kt)("a",{parentName:"p",href:"Concepts/identifiers.md#object-properties"},"property naming rules"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Function get")," returns a value of the property type and ",(0,l.kt)("inlineCode",{parentName:"p"},"Function set")," takes a parameter of the property type. Both arguments must comply with standard ",(0,l.kt)("a",{parentName:"p",href:"#parameters"},"function parameters"),"."),(0,l.kt)("p",null,"When both functions are defined, the computed property is ",(0,l.kt)("strong",{parentName:"p"},"read-write"),". If only a ",(0,l.kt)("inlineCode",{parentName:"p"},"Function get")," is defined, the computed property is ",(0,l.kt)("strong",{parentName:"p"},"read-only"),". In this case, an error is returned if the code tries to modify the property. If only a ",(0,l.kt)("inlineCode",{parentName:"p"},"Function set")," is defined, Qodly returns ",(0,l.kt)("em",{parentName:"p"},"undefined")," when the property is read."),(0,l.kt)("p",null,"The type of the computed property is defined by the ",(0,l.kt)("inlineCode",{parentName:"p"},"return")," type declaration of the ",(0,l.kt)("em",{parentName:"p"},"getter"),". It can be of any ",(0,l.kt)("a",{parentName:"p",href:"dt_object.md"},"valid property type"),"."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Assigning ",(0,l.kt)("em",{parentName:"p"},"undefined")," to an object property clears its value while preserving its type. In order to do that, the ",(0,l.kt)("inlineCode",{parentName:"p"},"Function get")," is first called to retrieve the value type, then the ",(0,l.kt)("inlineCode",{parentName:"p"},"Function set")," is called with an empty value of that type.")),(0,l.kt)("h4",{id:"example-1-2"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'//Class: Person.4qm\n\nClass constructor(firstname : Text, lastname : Text)\n This.firstName=firstname\n This.lastName=lastname\n\nFunction get fullName() -> fullName : Text\n fullName=This.firstName+" "+This.lastName\n\nFunction set fullName( fullName : Text )\n p=Position(" ", fullName)\n This.firstName=Substring(fullName, 1; p-1)\n This.lastName=Substring(fullName, p+1)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'//in a method\nfullName=person.fullName // Function get fullName() is called\nperson.fullName="John Smith" // Function set fullName() is called\n')),(0,l.kt)("h4",{id:"example-2-1"},"Example 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"Function get fullAddress()->result : Object\n \n result=New object\n \n result.fullName=This.fullName\n result.address=This.address\n result.zipCode=This.zipCode\n result.city=This.city\n result.state=This.state\n result.country=This.country \n")),(0,l.kt)("h3",{id:"class-constructor"},(0,l.kt)("inlineCode",{parentName:"h3"},"Class Constructor")),(0,l.kt)("h4",{id:"syntax-2"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"// Class: MyClass\nClass Constructor({parameterName : type, ...})\n// code\n")),(0,l.kt)("p",null,"A class constructor function, which can accept ",(0,l.kt)("a",{parentName:"p",href:"#parameters"},"parameters"),", can be used to define a user class.  "),(0,l.kt)("p",null,"In that case, when you call the ",(0,l.kt)("a",{parentName:"p",href:"API/ClassClass.md#new"},(0,l.kt)("inlineCode",{parentName:"a"},"new()"))," function, the class constructor is called with the parameters optionally passed to the ",(0,l.kt)("inlineCode",{parentName:"p"},"new()")," function."),(0,l.kt)("p",null,"For a class constructor function, the ",(0,l.kt)("inlineCode",{parentName:"p"},"Current method name")," command returns: ",(0,l.kt)("inlineCode",{parentName:"p"},"<ClassName>:constructor"),', for example "MyClass:constructor".'),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"// Class: MyClass\n// Class constructor of MyClass\nClass Constructor (name : Text)\n This.name=name\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'// in a method\n// you can instantiate an object\nvar o : cs.MyClass\no=cs.MyClass.new("HelloWorld")  \n// o == {"name":"HelloWorld"}\n')),(0,l.kt)("h3",{id:"class-extends-classname"},(0,l.kt)("inlineCode",{parentName:"h3"},"Class extends <ClassName>")),(0,l.kt)("h4",{id:"syntax-3"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"// Class: ChildClass\nClass extends <ParentClass>\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Class extends")," keyword is used in class declaration to create a user class which is a child of another user class. The child class inherits all functions of the parent class."),(0,l.kt)("p",null,"Class extension must respect the following rules:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A user class cannot extend a built-in class (except 4D.Object and ",(0,l.kt)("a",{parentName:"li",href:"../ORDA/ordaClasses.md"},"ORDA classes")," which are extended by default for user classes)."),(0,l.kt)("li",{parentName:"ul"},"A user class cannot extend a user class from another project or component."),(0,l.kt)("li",{parentName:"ul"},"A user class cannot extend itself."),(0,l.kt)("li",{parentName:"ul"},'It is not possible to extend classes in a circular way (i.e. "a" extends "b" that extends "a").')),(0,l.kt)("p",null,"Breaking such a rule is not detected by the code editor or the interpreter, only the ",(0,l.kt)("inlineCode",{parentName:"p"},"check syntax")," will throw an error in this case."),(0,l.kt)("p",null,"An extended class can call the constructor of its parent class using the ",(0,l.kt)("a",{parentName:"p",href:"#super"},(0,l.kt)("inlineCode",{parentName:"a"},"Super"))," command."),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("p",null,"This example creates a class called ",(0,l.kt)("inlineCode",{parentName:"p"},"Square")," from a class called ",(0,l.kt)("inlineCode",{parentName:"p"},"Polygon"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"//Class: Square\n\n//path: Classes/Square.4dm \n\nClass extends Polygon\n\nClass constructor (side : Integer)\n \n // It calls the parent class's constructor with lengths\n // provided for the Polygon's width and height\n Super(side,side)\n // In derived classes, Super must be called \n // before you can use 'This'\n This.name=\"Square\"\n\n\n\n Function getArea() -> result : Integer\n  result:=This.height*This.width\n")),(0,l.kt)("h3",{id:"super"},(0,l.kt)("inlineCode",{parentName:"h3"},"Super")),(0,l.kt)("h4",{id:"syntax-4"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"Super {( param{,...,paramN} )} {-> Object}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"param"),(0,l.kt)("td",{parentName:"tr",align:null},"Mixed"),(0,l.kt)("td",{parentName:"tr",align:null},"->"),(0,l.kt)("td",{parentName:"tr",align:null},"Parameter(s) to pass to the parent constructor")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"Object's parent")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Super")," keyword allows calls to the ",(0,l.kt)("inlineCode",{parentName:"p"},"superclass"),", i.e. the parent class."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Super")," serves two different purposes:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Inside a ",(0,l.kt)("a",{parentName:"li",href:"#class-constructor"},"constructor code"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Super")," is a command that allows to call the constructor of the superclass. When used in a constructor, the ",(0,l.kt)("inlineCode",{parentName:"li"},"Super")," command appears alone and must be used before the ",(0,l.kt)("inlineCode",{parentName:"li"},"This")," keyword is used.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If all class constructors in the inheritance tree are not properly called, error -10748 is generated. It's up to the developer to make sure calls are valid."),(0,l.kt)("li",{parentName:"ul"},"If the ",(0,l.kt)("inlineCode",{parentName:"li"},"This")," command is called on an object whose superclasses have not been constructed, error -10743 is generated."),(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"Super")," is called out of an object scope, or on an object whose superclass constructor has already been called, error -10746 is generated.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"// inside myClass constructor\nvar text1, text2 : Text\nSuper(text1) //calls superclass constructor with a text param\nThis.param=text2 // use second param\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Inside a ",(0,l.kt)("a",{parentName:"li",href:"#class-function"},"class member function"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Super")," designates the prototype of the superclass and allows to call a function of the superclass hierarchy.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'Super.doSomething(42) //calls "doSomething" function  \n//declared in superclasses\n')),(0,l.kt)("h4",{id:"example-1-3"},"Example 1"),(0,l.kt)("p",null,"This example illustrates the use of ",(0,l.kt)("inlineCode",{parentName:"p"},"Super")," in a class constructor. The command is called to avoid duplicating the constructor parts that are common between ",(0,l.kt)("inlineCode",{parentName:"p"},"Rectangle")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Square")," classes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'// Class: Rectangle\nClass constructor(width : Integer, height : Integer)\n This.name="Rectangle"\n This.height=height\n This.width=width\n\n \nFunction sayName()\n return "Hi, I am a "+This.name+"."\n \n\nFunction getArea() -> area : Integer\n area=(This.height)*(This.width)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"//Class: Square\n \nClass extends Rectangle\n \nClass constructor (side : Integer)\n \n // It calls the parent class's constructor with lengths\n // provided for the Rectangle's width and height\n Super(side;side)\n // In derived classes, Super must be called before you\n // can use 'This'\n This.name=\"Square\"\n\nFunction getArea() -> area : Integer\n area=This.height*This.width\n")),(0,l.kt)("h4",{id:"example-2-2"},"Example 2"),(0,l.kt)("p",null,"This example illustrates the use of ",(0,l.kt)("inlineCode",{parentName:"p"},"Super")," in a class member method. You created the ",(0,l.kt)("inlineCode",{parentName:"p"},"Rectangle")," class with a function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'//Class: Rectangle\n \nFunction nbSides() -> sides : Text\n sides="I have 4 sides"\n')),(0,l.kt)("p",null,"You also created the ",(0,l.kt)("inlineCode",{parentName:"p"},"Square")," class with a function calling the superclass function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'//Class: Square\n \nClass extends Rectangle\n \nFunction description() -> sides:Text\n sides=Super.nbSides()+" which are all equal"\n')),(0,l.kt)("p",null,"Then you can write in a method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"var square : Object\nvar message : Text\nsquare=cs.Square.new()\nmessage=square.description() //I have 4 sides which are all equal\n")),(0,l.kt)("h3",{id:"this"},(0,l.kt)("inlineCode",{parentName:"h3"},"This")),(0,l.kt)("h4",{id:"syntax-5"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"This -> Object\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Result"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"<-"),(0,l.kt)("td",{parentName:"tr",align:null},"Current object")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"This")," keyword returns a reference to the currently processed object. "),(0,l.kt)("p",null,"In most cases, the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"This")," is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called."),(0,l.kt)("p",null,"When a formula is called as a member method of an object, its ",(0,l.kt)("inlineCode",{parentName:"p"},"This")," is set to the object the method is called on. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},'o=New object("prop",42,"f",Formula(This.prop))\nval:=o.f() //42\n')),(0,l.kt)("p",null,"When a ",(0,l.kt)("a",{parentName:"p",href:"#class-constructor"},"class constructor")," function is used (with the ",(0,l.kt)("a",{parentName:"p",href:"API/ClassClass.md#new"},(0,l.kt)("inlineCode",{parentName:"a"},"new()"))," function), its ",(0,l.kt)("inlineCode",{parentName:"p"},"This")," is bound to the new object being constructed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"//Class: ob\n  \nClass Constructor  \n \n // Create properties on This as\n // desired by assigning to them\n This.a=42 \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"// in a method  \no=cs.ob.new()\nval=o.a //42\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When calling the superclass constructor in a constructor using the ",(0,l.kt)("a",{parentName:"p",href:"#super"},"Super")," keyword, keep in mind that ",(0,l.kt)("inlineCode",{parentName:"p"},"This")," must not be called before the superclass constructor, otherwise an error is generated. See ",(0,l.kt)("a",{parentName:"p",href:"#example-1"},"this example"),".")),(0,l.kt)("p",null,"In any cases, ",(0,l.kt)("inlineCode",{parentName:"p"},"This")," refers to the object the method was called on, as if the method were on the object."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"//Class: ob\n  \nFunction f()\n return This.a+This.b\n")),(0,l.kt)("p",null,"Then you can write in a project method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-4d"},"o=cs.ob.new()\no.a=5\no.b=3\nval=o.f() //8\n\n")),(0,l.kt)("p",null,"In this example, the object assigned to the variable $o doesn't have its own ",(0,l.kt)("em",{parentName:"p"},"f")," property, it inherits it from its class. Since ",(0,l.kt)("em",{parentName:"p"},"f")," is called as a method of o, its ",(0,l.kt)("inlineCode",{parentName:"p"},"This")," refers to o."),(0,l.kt)("h2",{id:"class-commands"},"Class commands"),(0,l.kt)("p",null,"Several commands of the Qodly language allows you to handle class features."),(0,l.kt)("h3",{id:"ob-class"},(0,l.kt)("inlineCode",{parentName:"h3"},"OB Class")),(0,l.kt)("h4",{id:"ob-class--object----object--null"},(0,l.kt)("inlineCode",{parentName:"h4"},"OB Class ( object ) -> Object | Null")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"OB Class")," returns the class of the object passed in parameter."),(0,l.kt)("h3",{id:"ob-instance-of"},(0,l.kt)("inlineCode",{parentName:"h3"},"OB Instance of")),(0,l.kt)("h4",{id:"ob-instance-of--object--class----boolean"},(0,l.kt)("inlineCode",{parentName:"h4"},"OB Instance of ( object ; class ) -> Boolean")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"OB Instance of")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," belongs to ",(0,l.kt)("inlineCode",{parentName:"p"},"class")," or to one of its inherited classes, and ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," otherwise."))}d.isMDXComponent=!0}}]);
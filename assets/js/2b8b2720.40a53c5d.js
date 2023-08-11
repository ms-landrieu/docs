"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[9619],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(b,l(l({ref:t},c),{},{components:a})):n.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},66917:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"lang-object",title:"Object"},l=void 0,i={unversionedId:"language/basics/lang-object",id:"language/basics/lang-object",title:"Object",description:'Variables, attributes or expressions of the object type can contain various types of data. The structure of QodlyScript objects is based on the classic principle of "property/value" pairs. The syntax of these objects is based on JSON notation:',source:"@site/docs/language/basics/lang-object.md",sourceDirName:"language/basics",slug:"/language/basics/lang-object",permalink:"/docs/language/basics/lang-object",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/basics/lang-object.md",tags:[],version:"current",frontMatter:{id:"lang-object",title:"Object"},sidebar:"Programming",previous:{title:"Numeric",permalink:"/docs/language/basics/lang-number"},next:{title:"Picture",permalink:"/docs/language/basics/lang-picture"}},s={},p=[{value:"Instantiation",id:"instantiation",level:2},{value:"<code>newObject</code> command",id:"newobject-command",level:3},{value:"<code>{}</code> operator",id:"-operator",level:3},{value:"Regular or shared object",id:"regular-or-shared-object",level:3},{value:"Syntax basics",id:"syntax-basics",level:2},{value:"Object properties",id:"object-properties",level:3},{value:"Null value",id:"null-value",level:3},{value:"Undefined value",id:"undefined-value",level:3},{value:"Examples",id:"examples",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Variables, attributes or expressions of the object type can contain various types of data. The structure of QodlyScript objects is based on the classic principle of "property/value" pairs. The syntax of these objects is based on JSON notation: '),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'A property name is always a text, for example "Name". It must follow ',(0,r.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-identifiers#object-properties"},"specific rules"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A property value can be of the following type:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"number (number, integer)"),(0,r.kt)("li",{parentName:"ul"},"string"),(0,r.kt)("li",{parentName:"ul"},"null"),(0,r.kt)("li",{parentName:"ul"},"boolean"),(0,r.kt)("li",{parentName:"ul"},"date (date type or ISO date format string)"),(0,r.kt)("li",{parentName:"ul"},"object(1) (objects can be nested on several levels)"),(0,r.kt)("li",{parentName:"ul"},"picture(2)"),(0,r.kt)("li",{parentName:"ul"},"collection")))),(0,r.kt)("p",null,"(1)ORDA objects such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/orda/data-model#entity"},"entities")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/orda/data-model#entity-selection"},"entity selections")," cannot be stored in ",(0,r.kt)("strong",{parentName:"p"},"attributes of the object type"),"; however, they are fully supported in ",(0,r.kt)("strong",{parentName:"p"},"object variables"),". "),(0,r.kt)("p",null,'(2)When exposed as text in the debugger or exported to JSON, picture object properties print "',"[object Picture]",'". '),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Attribute names are case-sensitive.")),(0,r.kt)("p",null,"You manage object type variables, attributes or expressions using the ",(0,r.kt)("a",{parentName:"p",href:"#syntax-basics"},"object notation")," or the commands such as ",(0,r.kt)("inlineCode",{parentName:"p"},"instanceOf"),". "),(0,r.kt)("p",null,"Each property value accessed through the object notation is considered an expression. You can use such values wherever expressions are expected. "),(0,r.kt)("h2",{id:"instantiation"},"Instantiation"),(0,r.kt)("p",null,"Objects must have been instantiated, otherwise trying to read or modify their properties will generate a syntax error."),(0,r.kt)("p",null,"Object instantiation can be done in one of the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"using the ",(0,r.kt)("a",{parentName:"li",href:"/docs/language/object#newobject"},(0,r.kt)("inlineCode",{parentName:"a"},"newObject"))," command,"),(0,r.kt)("li",{parentName:"ul"},"using the ",(0,r.kt)("inlineCode",{parentName:"li"},"{}")," operator.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Several commands and functions return objects, for example ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/json#jsonparse"},(0,r.kt)("inlineCode",{parentName:"a"},"jsonParse"))," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass#file"},(0,r.kt)("inlineCode",{parentName:"a"},"file")),". In this case, it is not necessary to instantiate the object explicitly, the QodlyScript language does it for you.")),(0,r.kt)("h3",{id:"newobject-command"},(0,r.kt)("inlineCode",{parentName:"h3"},"newObject")," command"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/object#newobject"},(0,r.kt)("inlineCode",{parentName:"a"},"newObject"))," command creates a new empty or prefilled object and returns its reference."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var obVar : object //declaration of an object type variable\n obVar=newObject //instantiation and assignment to the variable\n \n var obFilled : object \n obFilled=newObject("name","Smith","age",42) //instantiation and assignment of a prefilled object\n')),(0,r.kt)("h3",{id:"-operator"},(0,r.kt)("inlineCode",{parentName:"h3"},"{}")," operator"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," operator allows you to create an ",(0,r.kt)("strong",{parentName:"p"},"object literal"),". An object literal is a semi-column separated list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),"). The object literal syntax creates empty or filled objects."),(0,r.kt)("p",null,"Since any property value is considered an expression, you can create sub-objects using ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," in property values. You can also create and reference ",(0,r.kt)("strong",{parentName:"p"},"collection literals"),"."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var o, o2, o3 : object //declaration of object variables\n o = {} // instantiation of an empty object \n o2 = {a: "foo", b: 42, c: {}, d: (toto) ? true : false } // instantiation of an object\n    // with properties {"a":"foo","b":42,"c":{},"d":false})\n\n    // same properties using variables\n var a : string\n var b : integer\n var c : object\n a="foo"\n b=42\n c={}\n o3={ a:a, b:b, c:c } // {"a":"foo",b":42,"c":{}}\n')),(0,r.kt)("p",null,"You can mix the ",(0,r.kt)("inlineCode",{parentName:"p"},"newObject")," and literal syntaxes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'var o : object\nvar result : string\no = {\\\n    ob1: {age: 42}, \\\n    ob2: newObject("message", "Hello"), \\\n    form1: formula(return this.ob1.age+10), \\\n    form2 : formula(return $1+" World")), \\\n    col: [1, 2, 3, 4, 5, 6]\\\n    }\n\no.form1()  //52\nresult=o.form2(o.ob2.message)  // Hello World\ncol=o.col[5] //6\n')),(0,r.kt)("h3",{id:"regular-or-shared-object"},"Regular or shared object"),(0,r.kt)("p",null,"You can create two types of objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"regular (non-shared) objects, using the ",(0,r.kt)("inlineCode",{parentName:"li"},"newObject")," command or object literal syntax (",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"). These objects can be edited without any specific access control but cannot be shared between processes. "),(0,r.kt)("li",{parentName:"ul"},"shared objects, using the ",(0,r.kt)("a",{parentName:"li",href:"/docs/language/object#newsharedobject"},(0,r.kt)("inlineCode",{parentName:"a"},"newSharedObject"))," command. These objects can be shared between processes, including preemptive threads. Access to these objects is controlled by ",(0,r.kt)("a",{parentName:"li",href:"/docs/language/basics/lang-shared#useend"},(0,r.kt)("inlineCode",{parentName:"a"},"use...end"))," structures.")),(0,r.kt)("h2",{id:"syntax-basics"},"Syntax basics"),(0,r.kt)("p",null,"Object notation can be used to access object property values through a chain of tokens."),(0,r.kt)("h3",{id:"object-properties"},"Object properties"),(0,r.kt)("p",null,"With object notation, object properties can be accessed in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'using a "dot" symbol:',(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"object.propertyName")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'     employee.name="Smith"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"using a string within square brackets:",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"object",'["propertyName"]')))),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'     vName=employee["name"]\n     //or also:\n     property="name"\n     vName=employee[property]\n')),(0,r.kt)("p",null,"Since an object property value can be an object or a collection, object notation accepts a sequence of symbols to access sub-properties, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"}," vAge=employee.children[2].age\n")),(0,r.kt)("p",null,"Object notation is available on any language element that can contains or returns an object, i.e:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Objects")," themselves (stored in variables, attributes, object properties, or collection elements).\nExamples:\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"     age=myObjVar.employee.age //variable\n     addr=myEntity.data_obj.address //attribute\n     city=addr.city //property of an object\n     val=myCollection[3].subvalue //collection element\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"QuodlyScript commands")," that return objects.\nExample:\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"     storage.mydata.prop2=10\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Methods")," that return objects.\nExample:\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'      //myMethod1\n     declare -> result : object\n     result=newObject("a",10,"b",20)\n     \n      //myMethod2\n     value=myMethod1.a //10\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Collections"),"\nExample:\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"     myColl.length //size of the collection\n")),(0,r.kt)("h3",{id:"null-value"},"Null value"),(0,r.kt)("p",null,"When using the object notation, the ",(0,r.kt)("strong",{parentName:"p"},"null")," value is supported though the ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," command. This command can be used to assign or compare the null value to object properties or collection elements, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"}," myObject.address.zip=null\n if(myColl[2]==null)\n")),(0,r.kt)("p",null,"For more information, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/#null"},(0,r.kt)("inlineCode",{parentName:"a"},"null"))," description."),(0,r.kt)("h3",{id:"undefined-value"},"Undefined value"),(0,r.kt)("p",null,"Evaluating an object property can sometimes produce an ",(0,r.kt)("strong",{parentName:"p"},"undefined")," value. Typically when trying to read or assign undefined expressions, the QodlyScript will generate errors. This does not happen in the following cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reading a property of an undefined object or value returns ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"; assigning an undefined value to variables has the same effect as calling ",(0,r.kt)("a",{parentName:"li",href:"/docs/language/#clearvariable"},(0,r.kt)("inlineCode",{parentName:"a"},"clearVariable"))," with them:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"     var o : object\n     var val : integer\n     val=10 //val:10\n     val=o.a //o.a is undefined (no error), and assigning this value clears the variable\n      //val:0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reading the ",(0,r.kt)("strong",{parentName:"li"},"length")," property of an undefined collection produces 0:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"     var c : collection //variable created but no collection is instanciated\n     size=c.length //size = 0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'An undefined value passed as parameter to a project method is automatically converted to 0 or "" according to the declared parameter type.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'     var o : object\n     mymethod(o.a) //pass an undefined parameter\n     \n      //In mymethod method\n     declare (param : text)\n      // param: ""\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A condition expression is automatically converted to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," when evaluating to ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," with the ",(0,r.kt)("inlineCode",{parentName:"li"},"if")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"case of")," keywords:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"     var o : object\n     if(o.a) // false\n     end\n     switch\n        :(o.a) // false\n     end\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Assigning an undefined value to an existing object property reinitializes or clears its value, depending on its type:"),(0,r.kt)("li",{parentName:"ul"},"object, collection: null"),(0,r.kt)("li",{parentName:"ul"},"picture: empty picture"),(0,r.kt)("li",{parentName:"ul"},"boolean: false"),(0,r.kt)("li",{parentName:"ul"},'string: ""'),(0,r.kt)("li",{parentName:"ul"},"number: 0"),(0,r.kt)("li",{parentName:"ul"},'date: !00-00-00! if "Use date type" setting is enabled, otherwise ""'),(0,r.kt)("li",{parentName:"ul"},"time: 0 (number of ms)"),(0,r.kt)("li",{parentName:"ul"},"undefined, null: no change")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'     var o : object\n     o=newObject("a",2)\n     o.a=o.b //o.a=0\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Assigning an undefined value to a non existing object property does nothing.")),(0,r.kt)("p",null,"When expressions of a given type are expected in your code, you can make sure they have the correct type even when evaluated to ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," by surrounding them with the appropriate QodlyScript cast command: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"num"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"date"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"time"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),". These commands return an empty value of the specified type when the expression evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"}," myString=lowercase(string(o.a.b)) //make sure you get a string value even if undefined\n  //to avoid errors in the code\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Writing and reading objects:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'  // Using newObject\n var myObj : object //declares an object variable \n myObj=newObject //instanciates object and assigns to the variable\n myObj.age=56\n age=myObj.age //56\n \n  // Alternate code\n var myObj2 : object \n myObj2={"age":42} //instanciates object and adds the age property\n myObj2.age //42\n \n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a property and assign values, including objects:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var Emp : object\n Emp=newObject\n Emp.city="London" //creates the city property and sets its value to "London"\n Emp.city="Paris" //modifies the city property\n Emp.phone={"office":"123456789","home":"0011223344"}\n  //creates the phone property and sets its value to an object\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get a value in a sub-object:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' vCity=Emp.city //"Paris"\n vPhone=Emp.phone.home //"0011223344"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can access properties as strings using the ",(0,r.kt)("inlineCode",{parentName:"li"},"[]")," operator ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' Emp["city"]="Berlin" //modifies the city property\n  //this can be useful for creating properties through variables\n var addr : string\n var i : integer\n addr="address"\n for(i,1,4)\n    Emp[addr+string(i)]=""\n end\n  // creates 4 empty properties "address1...address4" in the Emp object\n')))}u.isMDXComponent=!0}}]);
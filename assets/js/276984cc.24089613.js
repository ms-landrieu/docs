"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[2951],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>h});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(t),c=r,h=d["".concat(i,".").concat(c)]||d[c]||u[c]||o;return t?n.createElement(h,l(l({ref:a},m),{},{components:t})):n.createElement(h,l({ref:a},m))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3114:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const o={id:"lang-parameters",title:"Parameters"},l=void 0,s={unversionedId:"language/basics/lang-parameters",id:"language/basics/lang-parameters",title:"Parameters",description:"You'll often find that you need to pass data to your methods and functions. This is easily done with parameters.",source:"@site/docs/language/basics/lang-parameters.md",sourceDirName:"language/basics",slug:"/language/basics/lang-parameters",permalink:"/docs/language/basics/lang-parameters",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/basics/lang-parameters.md",tags:[],version:"current",frontMatter:{id:"lang-parameters",title:"Parameters"},sidebar:"QodlyScript",previous:{title:"Data Model Classes",permalink:"/docs/language/basics/orda-classes"},next:{title:"Expressions",permalink:"/docs/language/basics/lang-expressions"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"Initialization",id:"initialization",level:3},{value:"Declaring parameters",id:"declaring-parameters",level:2},{value:"Returned value",id:"returned-value",level:2},{value:"Supported data types",id:"supported-data-types",level:2},{value:"Parameters in formulas",id:"parameters-in-formulas",level:2},{value:"<code>return {expression}</code>",id:"return-expression",level:2},{value:"Parameter indirection (${N})",id:"parameter-indirection-n",level:2},{value:"Using generic parameters",id:"using-generic-parameters",level:3},{value:"Wrong parameter type",id:"wrong-parameter-type",level:2},{value:"Using object properties as named parameters",id:"using-object-properties-as-named-parameters",level:2},{value:"Optional parameters",id:"optional-parameters",level:2},{value:"Values or references",id:"values-or-references",level:2},{value:"Particular cases: objects and collections",id:"particular-cases-objects-and-collections",level:3}],m={toc:p};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You'll often find that you need to pass data to your methods and functions. This is easily done with parameters."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")," (or ",(0,r.kt)("strong",{parentName:"p"},"arguments"),") are pieces of data that a method or a class function needs in order to perform its task. The terms ",(0,r.kt)("em",{parentName:"p"},"parameter")," and ",(0,r.kt)("em",{parentName:"p"},"argument"),' are used interchangeably throughout this manual. Parameters are also passed to built-in QodlyScript commands. In this example, the name "pCounter" is an argument to the ',(0,r.kt)("inlineCode",{parentName:"p"},"killWorker")," built-in command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'killWorker("pCounter") //Terminates execution of pCounter worker\n')),(0,r.kt)("p",null,"Parameters are passed to methods or class functions in the same way. For example, if a class function named ",(0,r.kt)("inlineCode",{parentName:"p"},"getArea()")," accepts two parameters, a call to the class function might look like this: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"area=o.getArea(50,100)\n")),(0,r.kt)("p",null,"Or, if a method named ",(0,r.kt)("inlineCode",{parentName:"p"},"Do_Something")," accepts three parameters, a call to the method might look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"Do_Something(withThis,andThat,thisWay)\n")),(0,r.kt)("p",null,"The input parameters are separated by commas (,). "),(0,r.kt)("p",null,"The same principles are used when methods are executed through dedicated commands, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'callWorker("myWorker","workerMethod","Hello",vName)  \n//pass the "Hello" string and vName variable as parameters to the workerMethod  \n//in the context of the myWorker worker\n')),(0,r.kt)("p",null,"Data can also be ",(0,r.kt)("strong",{parentName:"p"},"returned")," from methods and class functions. For example, the following line is a statement that uses the built-in command, ",(0,r.kt)("inlineCode",{parentName:"p"},"length"),", to return the length of a string. The statement puts the value returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," in a variable called ",(0,r.kt)("em",{parentName:"p"},"MyLength"),". Here is the statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'MyLength=length("How did I get here?")\n')),(0,r.kt)("p",null,"Only one single output parameter can be declared per method or class function."),(0,r.kt)("p",null,"Input and output values are ",(0,r.kt)("a",{parentName:"p",href:"#values-or-references"},"evaluated")," at the moment of the call. They are copied into declared variables within the called class function or method, in the same order as they were passed. "),(0,r.kt)("h3",{id:"initialization"},"Initialization"),(0,r.kt)("p",null,"When parameters are declared, they are initialized to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-data-types#default-values"},(0,r.kt)("strong",{parentName:"a"},"default value corresponding to their type")),", which they will keep during the session as long as they have not been assigned. "),(0,r.kt)("h2",{id:"declaring-parameters"},"Declaring parameters"),(0,r.kt)("p",null,"Inside called methods or class functions, parameter values are assigned to variables. You declare parameters using a ",(0,r.kt)("strong",{parentName:"p"},"parameter name")," along with a ",(0,r.kt)("strong",{parentName:"p"},"parameter type"),", separated by comma.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For class functions, parameters are declared along with the ",(0,r.kt)("inlineCode",{parentName:"li"},"function")," keyword."),(0,r.kt)("li",{parentName:"ul"},"For methods, parameters are declared using the ",(0,r.kt)("inlineCode",{parentName:"li"},"declare")," keyword at the beginning of the method code.")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"function getArea(width : integer, height : integer) -> area : integer\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"}," //myProjectMethod\ndeclare (i :integer) -> myResult : object\n")),(0,r.kt)("p",null,"The following rules apply:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The declaration line must be the first line of the method or function code, otherwise an error is displayed (only ",(0,r.kt)("a",{parentName:"li",href:"/docs/language/basics/lang-methods#comments"},"comments")," or line breaks can precede the declaration)."),(0,r.kt)("li",{parentName:"ul"},"Parameter names must be compliant with ",(0,r.kt)("a",{parentName:"li",href:"/docs/language/basics/lang-identifiers#object-properties"},"Qodly naming rules"),". "),(0,r.kt)("li",{parentName:"ul"},"Multiple parameters (and types) are separated by commas (,). "),(0,r.kt)("li",{parentName:"ul"},"Multiline syntaxes are supported using ",(0,r.kt)("inlineCode",{parentName:"li"},"\\")," character.")),(0,r.kt)("p",null,"For example, when you call a ",(0,r.kt)("inlineCode",{parentName:"p"},"getArea()")," function with two parameters: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"area=o.getArea(50,100)\n")),(0,r.kt)("p",null,"In the class function code, the value of each parameter is copied into the corresponding declared parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"// Class: Polygon\nfunction getArea(width : integer, height : integer)-> area : integer\n    area=width*height\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the type is not defined, the parameter will be defined as ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-variant"},(0,r.kt)("inlineCode",{parentName:"a"},"variant")),".")),(0,r.kt)("h2",{id:"returned-value"},"Returned value"),(0,r.kt)("p",null,"You declare the return parameter of a function by adding an arrow (->) and the parameter definition after the input parameter(s) list. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"function add(x : variant, y : integer) -> result : integer\n")),(0,r.kt)("p",null,"You can also declare the return parameter only by adding ",(0,r.kt)("inlineCode",{parentName:"p"},": type"),", in which case it can be handled by a ",(0,r.kt)("a",{parentName:"p",href:"#return-expression"},"return statement"),". For example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"function add(x : variant, y : integer): integer\n    return (x+y)\n")),(0,r.kt)("h2",{id:"supported-data-types"},"Supported data types"),(0,r.kt)("p",null,"For parameters and returned values, you can use the same data types as those which are ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-variables#declaring-variables"},"supported by the ",(0,r.kt)("inlineCode",{parentName:"a"},"var")," keyword"),", including class objects. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"function saveToFile(entity : cs.ShapesEntity, myFile : 4D.File)\n")),(0,r.kt)("h2",{id:"parameters-in-formulas"},"Parameters in formulas"),(0,r.kt)("p",null,'You can use parameters in formulas made of single-line statements (i.e. not calling methods or functions). In this case, you need to use sequentially numbered variables starting with "$" as parameters: ',(0,r.kt)("strong",{parentName:"p"},"$1"),", ",(0,r.kt)("strong",{parentName:"p"},"$2"),", ",(0,r.kt)("strong",{parentName:"p"},"$3"),"..., and so on. The numbering of the local variables represents the order of the parameters. "),(0,r.kt)("p",null,"For example, you can write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'var f : object\nf=newObject\nf.welcome=formula(uppercase($1+", "+$2+"!"))\nf.welcome("hello","john") //"HELLO, JOHN!"\n')),(0,r.kt)("h2",{id:"return-expression"},(0,r.kt)("inlineCode",{parentName:"h2"},"return {expression}")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," statement ends function or method execution and can be used to return an expression to the caller. "),(0,r.kt)("p",null,"For example, the following function returns the square of its argument, x, where x is a number."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"function square(x : integer) \n   return x * x\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Internally, ",(0,r.kt)("inlineCode",{parentName:"p"},"return x")," executes ",(0,r.kt)("inlineCode",{parentName:"p"},"returnValue=x"),", and returns to the caller. If ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," is used without an expression, the function or method returns a null value of the declared return type (if any), otherwise ",(0,r.kt)("em",{parentName:"p"},"undefined"),".")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," statement can be used along with the standard syntax for ",(0,r.kt)("a",{parentName:"p",href:"#returned-value"},"returned values")," (the returned value must be of the declared type). However, note that it ends immediately the code execution. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"function getValue -> v : integer\n    v=10\n    return 20\n    // returns 20\n\nfunction getValue -> v : integer\n    return 10\n    v=20 // never executed\n    // returns 10\n")),(0,r.kt)("h2",{id:"parameter-indirection-n"},"Parameter indirection (${N})"),(0,r.kt)("p",null,"QodlyScript methods accept a variable number of parameters. You can address those parameters with a ",(0,r.kt)("inlineCode",{parentName:"p"},"for...end")," loop, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/#countparameters"},(0,r.kt)("inlineCode",{parentName:"a"},"countParameters"))," command and the ",(0,r.kt)("strong",{parentName:"p"},"parameter indirection syntax"),". Within the method, an indirection address is formatted ",(0,r.kt)("inlineCode",{parentName:"p"},"${N}"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"N")," is a numeric expression. ",(0,r.kt)("inlineCode",{parentName:"p"},"${N}")," is called a ",(0,r.kt)("strong",{parentName:"p"},"generic parameter"),".  "),(0,r.kt)("h3",{id:"using-generic-parameters"},"Using generic parameters"),(0,r.kt)("p",null,"For example, consider a method that adds values and returns the sum formatted according to a format that is passed as a parameter. Each time this method is called, the number of values to be added may vary. We must pass the values as parameters to the method and the format in the form of a character string. The number of values can vary from call to call."),(0,r.kt)("p",null,"Here is the method, named ",(0,r.kt)("inlineCode",{parentName:"p"},"MySum"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"//MySum\ndeclare (format : string) -> result : string\ntoSum=0\nfor(i,2,countParameters)\n   toSum=toSum+${i}\nEnd\nresult=string(toSum,format)\n")),(0,r.kt)("p",null,"The method's parameters must be passed in the correct order, first the format and then a variable number of values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'Result=MySum("##0.00",125,2,33.5,24) //"182.70"\nResult=MySum("000",1,2,200) //"203"\n')),(0,r.kt)("p",null,"Note that even if you declared 0, 1, or more parameters in the method, you can always pass the number of parameters that you want. Parameters are all available within the called method through the ",(0,r.kt)("inlineCode",{parentName:"p"},"${N}")," syntax and extra parameters type is ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-variant"},"variant")," by default. You just need to make sure parameters exist, thanks to the ","[",(0,r.kt)("inlineCode",{parentName:"p"},"Count parameters"),"]"," command. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'//foo method\n#DECLARE(p1: Text, p2 : Text, p3 : Date)\nvar myLog : Text\nFor(i,1,Count parameters)\n    myLog="param "+String(i)+" = "+String(${i})+"\\r"\nEnd for\n')),(0,r.kt)("p",null,"This method can be called:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'foo("hello","world",!01/01/2023!,42,?12:00:00?) //extra parameters are passed\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Parameter indirection is best managed if you respect the following convention: if only some of the parameters are addressed by indirection, they should be passed after the others. ")),(0,r.kt)("h2",{id:"wrong-parameter-type"},"Wrong parameter type"),(0,r.kt)("p",null,"Calling a parameter with an wrong type is an ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-errors"},"error")," that prevents correct execution. For example, if you write the following methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"// method1\ndeclare(value : string)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"// method2\nmethod1(42) //wrong type, string expected\n")),(0,r.kt)("p",null,"The error is generated when the method is called."),(0,r.kt)("h2",{id:"using-object-properties-as-named-parameters"},"Using object properties as named parameters"),(0,r.kt)("p",null,"Using objects as parameters allow you to handle ",(0,r.kt)("strong",{parentName:"p"},"named parameters"),". This programming style is simple, flexible, and easy to read. "),(0,r.kt)("p",null,"For example, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"CreatePerson")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'  //CreatePerson\nvar person : object\nperson=newObject("name","Smith","age",40)\nChangeAge(person) \n')),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChangeAge")," method you can write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'  //ChangeAge\ndeclare (param : object)\nvar result : string\nparam.age=param.age+10\nresult=param.name+" is "+string(param.age)+" years old." \n')),(0,r.kt)("p",null,"This provides a powerful way to define ",(0,r.kt)("a",{parentName:"p",href:"#optional-parameters"},"optional parameters")," (see also below). To handle missing parameters, you can either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"check if all expected parameters are provided by comparing them to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Null")," value, or"),(0,r.kt)("li",{parentName:"ul"},"preset parameter values, or"),(0,r.kt)("li",{parentName:"ul"},"use them as empty values.")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChangeAge")," method above, both age and name properties are mandatory and would produce errors if they were missing. To avoid this case, you can just write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'  //ChangeAge\ndeclare (param : object)\nvar result : string\nparam.age=num(param.age)+10\nresult=string(param.name)+" is "+string(param.age)+" years old."\n')),(0,r.kt)("p",null,'Then both parameters are optional; if they are not filled, the result will be " is 10 years old", but no error will be generated.'),(0,r.kt)("p",null,"Finally, with named parameters, maintaining or refactoring applications is very simple and safe. Imagine you later realize that adding 10 years is not always appropriate. You need another parameter to set how many years to add. You write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'person={"name":"Smith","aAge":40,"toAdd":10}\nChangeAge(person)\n\n//ChangeAge\ndeclare (param : object)\nvar result : string\nif (param.toAdd==null)\n    param.toAdd=10\nend\nparam.age=num(param.age)+param.toAdd\nresult=string(param.name)+" is "+string(param.age)+" years old."\n')),(0,r.kt)("p",null,"The power here is that you will not need to change your existing code. It will always work as in the previous version, but if necessary, you can use another value than 10 years."),(0,r.kt)("p",null,"With named variables, any parameter can be optional. In the above example, all parameters are optional and anyone can be given, in any order. "),(0,r.kt)("h2",{id:"optional-parameters"},"Optional parameters"),(0,r.kt)("p",null,"In the QodlyScript documentation, the ",(0,r.kt)("inlineCode",{parentName:"p"},"{ }")," characters (braces) usually indicate optional parameters. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},".extract( attributePath : string { , option : integer } ) : collection)")," means that the ",(0,r.kt)("em",{parentName:"p"},"option")," parameter may be omitted when calling the command. You can call it in the following ways:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'firstnames=ds.Teachers.all().extract("firstname") //1 parameter\naddresses=ds.Teachers.all().extract("address",ck keep null) //2 parameters\n')),(0,r.kt)("p",null,"QodlyScript methods and functions also accept such optional parameters. You can declare any number of parameters. If you call a method or function with less parameters than declared, missing parameters are processed as default values in the called code, ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-data-types#default-values"},"according to their type"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'// "concate" function of myClass\nfunction concate (param1 : string , param2 : string)-> result : string\nresult=param1+" "+param2\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'  // Calling method\nclass=cs.myClass.new()\nclass.concate("Hello") // "Hello "\nclass.concate() // Displays " "\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can also call a method or function with more parameters than declared. They will be available within the called code through the ",(0,r.kt)("a",{parentName:"p",href:"#parameter-indirection-n"},"${N} syntax"),".")),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"countParameters")," command from within the called method, you can detect the actual number of parameters and perform different operations depending on what you have received. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"// Append_Text Method\n// Append_Text ( string { , 4D.File } )\n \ndeclare(param1 : text, param2 : text, param3 : object)\n\n...// do action1\nif(countParameters>=3)\n    ...//do action2 \nelse\n    if(countParameters>=2)\n       ...//do action3\n    end\nend\n")),(0,r.kt)("p",null,"After this method has been added to your project, you can write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'Append_Text(vt1) //do only action1\nAppend_Text(vt1,vt2) //do action1 and action3\nAppend_Text(vt1,"",vobj) //do action1 and action2\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When optional parameters are needed in your methods, you might also consider using ",(0,r.kt)("a",{parentName:"p",href:"#using-objects-properties-as-named-parameters"},"object properties as named parameters")," which provide a flexible way to handle variable numbers of parameters.  ")),(0,r.kt)("h2",{id:"values-or-references"},"Values or references"),(0,r.kt)("p",null,"When you pass a parameter, QodlyScript always evaluates the parameter expression in the context of the calling method and sets the ",(0,r.kt)("strong",{parentName:"p"},"resulting value")," to the declared parameters in the called class function or method. The declared parameters are not the actual variables or expressions passed by the calling method; they only contain the values that have been passed. Since its scope is local, if the value of a parameter is modified in the class function/method, it does not change the value in the calling method. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'    //Here is some code from the method myMethod\nvar myVar, result : string\nmyVar="williams"\nDo_Something(myVar)\nresult=myVar //williams\n \n    //Here is the code of the method Do_Something\ndeclare ( param : string )\nresult=uppercase(param) //WILLIAMS\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"result")," value in ",(0,r.kt)("inlineCode",{parentName:"p"},"Do_Something"),' will be "WILLIAMS" and the ',(0,r.kt)("em",{parentName:"p"},"result")," value in ",(0,r.kt)("inlineCode",{parentName:"p"},"myMethod"),' will be "williams". The method locally changed the value of the parameter, but this does not affect the value of the variable ',(0,r.kt)("inlineCode",{parentName:"p"},"myVar")," passed as parameter by the method ",(0,r.kt)("inlineCode",{parentName:"p"},"myMethod"),"."),(0,r.kt)("p",null,"In some cases, you might want that the method ",(0,r.kt)("inlineCode",{parentName:"p"},"Do_Something")," change the value of the variable. There are two ways to do that:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Rather than passing a string variable to the method, you pass an object variable containing the string value as a property. Since ",(0,r.kt)("a",{parentName:"li",href:"#particular-cases-objects-and-collections"},"object parameters are passed by ",(0,r.kt)("strong",{parentName:"a"},"reference")),", the value will always be the same in all contexts:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'    //Here is some code from the method myMethod\nvar myVar : object\nvar result : text\nmyVar=newObject("name","williams")\nDo_Something(myVar)\nresult=myVar.name //WILLIAMS\n\n    //Here is the code of the method Do_Something\ndeclare ( param : object )\nvar result : string\nresult=uppercase(param.name) //WILLIAMS\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Rather than having the method ",(0,r.kt)("inlineCode",{parentName:"li"},"Do_Something"),' "doing something," you can rewrite the method so it returns a value. Thus you would write:')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'    //Here is some code from the method myMethod\nvar myVar, result : string\nmyVar="williams"\nmyVar=Do_Something(myVar) \nresult=myVar //WILLIAMS\n\n    //Here is the code of the method Do_Something\ndeclare ( param : string ) -> result : string\nresult=uppercase(param) //WILLIAMS\n')),(0,r.kt)("p",null,'This second technique of returning a value by a subroutine is called "using a function".'),(0,r.kt)("h3",{id:"particular-cases-objects-and-collections"},"Particular cases: objects and collections"),(0,r.kt)("p",null,"You need to pay attention to the fact that ",(0,r.kt)("strong",{parentName:"p"},"object")," and ",(0,r.kt)("strong",{parentName:"p"},"collection")," data types can only be handled through a reference (i.e. an internal ",(0,r.kt)("em",{parentName:"p"},"pointer"),"). "),(0,r.kt)("p",null,"Consequently, when using such data types as parameters, they do not contain ",(0,r.kt)("em",{parentName:"p"},"values")," but ",(0,r.kt)("em",{parentName:"p"},"references"),". Modifying the value of the parameters within the subroutine will be propagated wherever the source object or collection is used. "),(0,r.kt)("p",null,"For example, consider the ",(0,r.kt)("inlineCode",{parentName:"p"},"CreatePerson")," method that creates an object and sends it as a parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'  //CreatePerson\nvar person : object\nperson:=newObject("Name","Smith","Age",40)\nChangeAge(person)\nperson.Age //50 \n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ChangeAge")," method adds 10 to the Age attribute of the received object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"  //ChangeAge\ndeclare (person : object)\nperson.Age=person.Age+10\nperson.Age //50 \n")),(0,r.kt)("p",null,"When you execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"CreatePerson")," method, person.Age will be 50 everywhere since the same object reference is handled by both methods."))}d.isMDXComponent=!0}}]);
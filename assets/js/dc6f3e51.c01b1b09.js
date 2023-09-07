"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[2069],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},36547:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={id:"lang-text",title:"String"},i=void 0,o={unversionedId:"language/basics/lang-text",id:"language/basics/lang-text",title:"String",description:"A string (or text) value is an attribute, variable, or expression that may contain from 0 to 2 GB of text.",source:"@site/docs/language/basics/lang-text.md",sourceDirName:"language/basics",slug:"/language/basics/lang-text",permalink:"/docs/language/basics/lang-text",draft:!1,editUrl:"https://github.com/qodly/docs/edit/main/docs/language/basics/lang-text.md",tags:[],version:"current",frontMatter:{id:"lang-text",title:"String"},sidebar:"Develop",previous:{title:"Time",permalink:"/docs/language/basics/lang-time"},next:{title:"Variant",permalink:"/docs/language/basics/lang-variant"}},s={},p=[{value:"Literals",id:"literals",level:2},{value:"Escape sequences",id:"escape-sequences",level:2},{value:"String operators",id:"string-operators",level:2},{value:"String comparisons",id:"string-comparisons",level:2},{value:"Wilcard character (@)",id:"wilcard-character-",level:3},{value:"Keywords",id:"keywords",level:3},{value:"String functions",id:"string-functions",level:2},{value:"Character Reference Symbols",id:"character-reference-symbols",level:2},{value:"Example",id:"example",level:3}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A string (or text) value is an attribute, variable, or expression that may contain from 0 to 2 GB of text."),(0,r.kt)("h2",{id:"literals"},"Literals"),(0,r.kt)("p",null,'A string literal is enclosed in double, straight quotation marks ("..."). Here are some examples of string literals:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'"Add Profile"\n"No entities found."\n"Invoice"\n')),(0,r.kt)("p",null,'An empty string is specified by two quotation marks with nothing between them ("").'),(0,r.kt)("h2",{id:"escape-sequences"},"Escape sequences"),(0,r.kt)("p",null,'The QodlyScript language allows you to use escape sequences (also called escape characters). An escape sequence is a sequence of characters that can be used to replace a "special" character.'),(0,r.kt)("p",null,"The sequence consists of a backslash ",(0,r.kt)("inlineCode",{parentName:"p"},"\\"),", followed by a character. For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"\\t")," is an escape sequence for the ",(0,r.kt)("strong",{parentName:"p"},"Tab")," character. Escape sequences facilitate the entry of special characters: the previous example (",(0,r.kt)("inlineCode",{parentName:"p"},"\\t"),") replaces the code entry ",(0,r.kt)("inlineCode",{parentName:"p"},"character(Tab)"),"."),(0,r.kt)("p",null,"In QodlyScript, the following escape sequences can be used:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Escape sequence"),(0,r.kt)("th",{parentName:"tr",align:null},"Character replaced"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\n")),(0,r.kt)("td",{parentName:"tr",align:null},"LF (Line feed)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\t")),(0,r.kt)("td",{parentName:"tr",align:null},"HT (Tab)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\r")),(0,r.kt)("td",{parentName:"tr",align:null},"CR (Carriage return)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\\\")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\")," (Backslash)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'\\"')),(0,r.kt)("td",{parentName:"tr",align:null},'" (Quotation marks)')))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It is possible to use either upper or lower case in escape sequences.")),(0,r.kt)("p",null,"In the following example, the ",(0,r.kt)("strong",{parentName:"p"},"Carriage return")," character (escape sequence ",(0,r.kt)("inlineCode",{parentName:"p"},"\\r"),") is inserted in a statement in order to obtain a message on two lines:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'myDoc.setMessage("The operation has been completed successfully.\\rYou may now disconnect.")')),(0,r.kt)("h2",{id:"string-operators"},"String operators"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Returns"),(0,r.kt)("th",{parentName:"tr",align:null},"Expression"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Concatenation"),(0,r.kt)("td",{parentName:"tr",align:null},"String + String"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'"abc" + "def"'),(0,r.kt)("td",{parentName:"tr",align:null},'"abcdef"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Repetition"),(0,r.kt)("td",{parentName:"tr",align:null},"String * Number"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'"ab" * 3'),(0,r.kt)("td",{parentName:"tr",align:null},'"ababab"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Equality"),(0,r.kt)("td",{parentName:"tr",align:null},"String == String"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'"abc" == "abc"'),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'"abc" == "abd"'),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Inequality"),(0,r.kt)("td",{parentName:"tr",align:null},"String != String"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'"abc" != "abd"'),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'"abc" != "abc"'),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Greater than"),(0,r.kt)("td",{parentName:"tr",align:null},"String > String"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'"abd" > "abc"'),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'"abc" > "abc"'),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Less than"),(0,r.kt)("td",{parentName:"tr",align:null},"String < String"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'"abc" < "abd"'),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'"abc" < "abc"'),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Greater than or equal to"),(0,r.kt)("td",{parentName:"tr",align:null},"String >= String"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'"abd" >= "abc"'),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'"abc" >= "abd"'),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Less than or equal to"),(0,r.kt)("td",{parentName:"tr",align:null},"String <= String"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'"abc" <= "abd"'),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'"abd" <= "abc"'),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains keyword"),(0,r.kt)("td",{parentName:"tr",align:null},"String % String"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'"Alpha Bravo" % "Bravo"'),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'"Alpha Bravo" % "ravo"'),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Picture % String"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'Picture_expr % "Mer"'),(0,r.kt)("td",{parentName:"tr",align:null},"True (1)")))),(0,r.kt)("p",null,'(1) If the keyword "Mer" is associated with the picture stored in the picture expression (attribute or variable).'),(0,r.kt)("h2",{id:"string-comparisons"},"String comparisons"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Strings are compared on a character-by-character basis (except in the case of searching by ",(0,r.kt)("a",{parentName:"li",href:"#keywords"},"keywords"),", see below)."),(0,r.kt)("li",{parentName:"ul"},"When strings are compared, the case of the characters is ignored; thus, ",(0,r.kt)("inlineCode",{parentName:"li"},'"a"=="A"')," returns ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},"When strings are compared, diacritical characters are ignored. For example, the following expressions return ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'     "n"=="\xf1"\n     "n"=="\xd1"\n     "A"=="\xe5"\n      // and so on\n')),(0,r.kt)("p",null,"To test if the case of two characters is different or to take diacritical characters into account, compare their character codes. For example, the following expression returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'characterCode("A")==characterCode("a") // false because 65 is not equal to 97\n')),(0,r.kt)("h3",{id:"wilcard-character-"},"Wilcard character (@)"),(0,r.kt)("p",null,"The QodlyScript supports ",(0,r.kt)("strong",{parentName:"p"},"@")," as a wildcard character. This character can be used in any string comparison to match any number of characters. For example, the following expression is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'    "abcdefghij"=="abc@" //true\n')),(0,r.kt)("p",null,"The wildcard character must be used within the second operand (the string on the right side) in order to match any number of characters. The following expression is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", because the ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," is considered only as one character in the first operand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'    "abc@"=="abcdefghij" //false\n')),(0,r.kt)("p",null,'The wildcard means "one or more characters or nothing". The following expressions are ',(0,r.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'     "abcdefghij"=="abcdefghij@" //true\n     "abcdefghij"=="@abcdefghij" //true\n     "abcdefghij"=="abcd@efghij" //true\n     "abcdefghij"=="@abcdefghij@"//true\n     "abcdefghij"=="@abcde@fghij@"//true\n')),(0,r.kt)("p",null,"On the other hand, whatever the case, a string comparison with two consecutive wildcards will always return ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'    "abcdefghij"=="abc@@fg" //false\n')),(0,r.kt)("p",null,"When the comparison operator is or contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"<")," or ",(0,r.kt)("inlineCode",{parentName:"p"},">")," symbol, only comparison with a single wildcard located at the end of the operand is supported:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'     "abcd"<="abc@" // Valid comparison\n     "abcd"<="abc@ef" //Not a valid comparison\n')),(0,r.kt)("p",null,"If you want to execute comparisons or queries using ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," as a character (and not as a wildcard), you need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"characterCode(At sign)")," instruction. Imagine, for example, that you want to know if a string ends with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," character. The following expression (if ",(0,r.kt)("inlineCode",{parentName:"p"},"vsValue")," is not empty) is always ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'(vsValue[[length(vsValue)]]=="@") //always true\n')),(0,r.kt)("p",null,"The following expression will be evaluated correctly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"(characterCode(vsValue[[length(vsValue)]])!=64)  \n")),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("p",null,'Unlike other string comparisons, searching by keywords looks for "words" in "texts": words are considered both individually and as a whole. The ',(0,r.kt)("strong",{parentName:"p"},"%")," operator always returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),' if the query concerns several words or only part of a word (for example, a syllable). The "words" are character strings surrounded by "separators", which are spaces, punctuation characters, and dashes. An apostrophe, like in "Today\'s", is usually considered as part of the word, but will be ignored in certain cases (see the rules below). Numbers can be searched for because they are evaluated as a whole (including decimal symbols). Other symbols (currency, temperature, and so on) will be ignored.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'     "Alpha Bravo Charlie"%"Bravo" // true\n     "Alpha Bravo Charlie"%"vo" // false\n     "Alpha Bravo Charlie"%"Alpha Bravo" // false\n     "Alpha,Bravo,Charlie"%"Alpha" // true\n     "Software and Computers"%"comput@" // true\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"QodlyScript uses the ICU library for comparing strings (using ",(0,r.kt)("inlineCode",{parentName:"p"},"<>==!=")," operators) and detecting keywords. For more information about the rules implemented, please refer to the following address: ",(0,r.kt)("a",{parentName:"p",href:"http://www.unicode.org/reports/tr29/#Word_Boundaries"},"http://www.unicode.org/reports/tr29/#Word_Boundaries"),".")),(0,r.kt)("h2",{id:"string-functions"},"String functions"),(0,r.kt)("p",null,"QodlyScript provides several functions such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/string#replaceString"},(0,r.kt)("inlineCode",{parentName:"a"},"replaceString"))," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/string#substring"},(0,r.kt)("inlineCode",{parentName:"a"},"substring"))," to handle string values. For more information, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/string"},(0,r.kt)("strong",{parentName:"a"},"String"))," chapter."),(0,r.kt)("h2",{id:"character-reference-symbols"},"Character Reference Symbols"),(0,r.kt)("p",null,"The character reference symbols: ",(0,r.kt)("inlineCode",{parentName:"p"},"[[...]]")),(0,r.kt)("p",null,"These symbols are used to refer to a single character within a string. This syntax allows you to individually address the characters of a text variable or attribute."),(0,r.kt)("p",null,"If the character reference symbols appear on the left side of the assignment operator (",(0,r.kt)("inlineCode",{parentName:"p"},"="),"), a character is assigned to the referenced position in the string. For example, the following line sets the first character of ",(0,r.kt)("inlineCode",{parentName:"p"},"vsName")," to uppercase:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'var vsName : string\nvsName = "hello"\nif(vsName!="")\n    vsName[[1]]=uppercase(vsName[[1]])\nend  \n//"Hello"\n')),(0,r.kt)("p",null,"Otherwise, if the character reference symbols appear within an expression, they return the character (to which they refer) as a 1-character string. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'//The following example tests if the last character of vtText is an At sign "@"\n if(vtText!="")\n    if(characterCode(substring(vtText,length(vtText),1))==At sign)\n  //...\n    end\n end\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'  //Using the character reference syntax, you would write in a simpler manner:\n if(vtText!="")\n    if(characterCode(vtText[[length(vtText)]])==At sign)\n  // ...\n    end\n end\n')),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"The following method capitalizes the first character of each word of the text received as parameter and returns the resulting capitalized text:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'  //Capitalize_text ( Source text ) -> Capitalized text\n \n declare (source : string) -> capitalized : string\n var vlLen,vlChar : integer\n capitalized=source\n vlLen=length(capitalized)\n if(vlLen>0)\n    capitalized[[1]]=uppercase(capitalized[[1]])\n    for(vlChar,1,vlLen-1)\n       if(position(capitalized[[vlChar]]," !&()-{}:;<>?/,.=+*")>0)\n          capitalized[[vlChar+1]]=uppercase(capitalized[[vlChar+1]])\n       end\n    end\n end\n')),(0,r.kt)("p",null,"For example, the line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'var cap : string\ncap=Capitalize_text("hello, my name is jane doe and i\'m running for president!")\n//cap: "Hello, My Name Is Jane Doe And I\'m Running For President!"\n')))}d.isMDXComponent=!0}}]);
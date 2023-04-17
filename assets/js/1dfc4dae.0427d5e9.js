"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[9191],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,f=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2381:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={id:"lang-pathnames",title:"Pathnames"},o=void 0,s={unversionedId:"language/basics/lang-pathnames",id:"language/basics/lang-pathnames",title:"Pathnames",description:"File and folder functions, properties, and commands allow you to handle files and folders as objects. This makes file and folder management powerful and flexible. For example, to create a new file in the current user's Documents folder, you can write:",source:"@site/docs/language/basics/lang-pathnames.md",sourceDirName:"language/basics",slug:"/language/basics/lang-pathnames",permalink:"/docs/language/basics/lang-pathnames",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/basics/lang-pathnames.md",tags:[],version:"current",frontMatter:{id:"lang-pathnames",title:"Pathnames"},sidebar:"QodlyScript",previous:{title:"Identifiers",permalink:"/docs/language/basics/lang-identifiers"},next:{title:"Collection",permalink:"/docs/language/CollectionClass"}},i={},d=[{value:"Filesystem pathnames",id:"filesystem-pathnames",level:2},{value:"POSIX syntax",id:"posix-syntax",level:2},{value:"Absolute and relative pathnames",id:"absolute-and-relative-pathnames",level:2},{value:"<code>File</code> and <code>Folder</code> constructors",id:"file-and-folder-constructors",level:3},{value:"<code>.file()</code> and <code>.folder()</code> folder functions",id:"file-and-folder-folder-functions",level:3},{value:"Examples",id:"examples",level:2}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"File and folder functions, properties, and commands allow you to handle files and folders as objects. This makes file and folder management powerful and flexible. For example, to create a new file in the current user's Documents folder, you can write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'ok=Folder(fk documents folder).file("Archives/JohnQ.prefs").create()\n')),(0,r.kt)("p",null,"In addition, file and folder objects support ",(0,r.kt)("inlineCode",{parentName:"p"},"fileSystems"),", which provide contextual path to main application folders."),(0,r.kt)("h2",{id:"filesystem-pathnames"},"Filesystem pathnames"),(0,r.kt)("p",null,"Qodly accepts several ",(0,r.kt)("inlineCode",{parentName:"p"},"filesystem")," pathnames that designate specific folders. Filesystem pathnames are useful for two main reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Independence: You can move your solution from one place to another regardless of the environment, without having to worry about paths,"),(0,r.kt)("li",{parentName:"ul"},"Security: No code can access elements located above the file system root on the disk (sandboxing).")),(0,r.kt)("p",null,"The following filesystem pathnames are supported: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"filesystem"),(0,r.kt)("th",{parentName:"tr",align:null},"Designates"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"/DATA"'),(0,r.kt)("td",{parentName:"tr",align:null},"Current data folder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"/LOGS"'),(0,r.kt)("td",{parentName:"tr",align:null},"Logs folder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"/PROJECT"'),(0,r.kt)("td",{parentName:"tr",align:null},"Project folder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"/SOURCES"'),(0,r.kt)("td",{parentName:"tr",align:null},"Current project resources folder")))),(0,r.kt)("h2",{id:"posix-syntax"},"POSIX syntax"),(0,r.kt)("p",null,"QodlyScript uses the POSIX syntax. With this syntax:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'folders are separated by "/"'),(0,r.kt)("li",{parentName:"ul"},'absolute pathnames start with a "/"'),(0,r.kt)("li",{parentName:"ul"},'to move up one folder in a relative path, use "../" in front of the pathname (for security, you cannot move up the filesystem).')),(0,r.kt)("p",null,"In POSIX syntax, you will generally use ",(0,r.kt)("inlineCode",{parentName:"p"},"filesystem")," pathnames with ",(0,r.kt)("a",{parentName:"p",href:"../API/FileClass.md#file"},(0,r.kt)("inlineCode",{parentName:"a"},"File"))," and ",(0,r.kt)("a",{parentName:"p",href:"../API/FolderClass.md#folder"},(0,r.kt)("inlineCode",{parentName:"a"},"Folder"))," commands, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'pathFile=File("/DATA/Archives/file 2.txt")\npathFolder=Folder("/RESOURCES/Pictures")\n')),(0,r.kt)("h2",{id:"absolute-and-relative-pathnames"},"Absolute and relative pathnames"),(0,r.kt)("h3",{id:"file-and-folder-constructors"},(0,r.kt)("inlineCode",{parentName:"h3"},"File")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"Folder")," constructors"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../API/FileClass.md#file"},(0,r.kt)("inlineCode",{parentName:"a"},"File"))," and ",(0,r.kt)("a",{parentName:"p",href:"../API/FolderClass.md#folder"},(0,r.kt)("inlineCode",{parentName:"a"},"Folder"))," commands only accept ",(0,r.kt)("strong",{parentName:"p"},"absolute pathnames"),". Relative pathnames are not supported and will return errors. For example, the following code is not allowed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'    //ERROR\nko=Folder("myFolder").create() //relative pathname with constructor\n')),(0,r.kt)("p",null,"If you want to handle files or folders in various locations (project folder, system folders, etc.), you must use ",(0,r.kt)("inlineCode",{parentName:"p"},"filesystems")," (see above). For example, you can write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'okFolder=Folder("/PACKAGE/myFolder").create() //folder created at the structure level\nokFile=File("/DATA/Prefs/tempo.txt").create() //file created in the data folder\n')),(0,r.kt)("h3",{id:"file-and-folder-folder-functions"},(0,r.kt)("inlineCode",{parentName:"h3"},".file()")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},".folder()")," folder functions"),(0,r.kt)("p",null,"Functions of folder objects such as ",(0,r.kt)("a",{parentName:"p",href:"../API/FolderClass.md#file"},(0,r.kt)("inlineCode",{parentName:"a"},"folder.file()"))," and ",(0,r.kt)("a",{parentName:"p",href:"../API/FolderClass.md#folder-1"},(0,r.kt)("inlineCode",{parentName:"a"},"folder.folder()"))," expect relative POSIX pathnames. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'  //to reference a "Picture" folder within the user documents folder\nuserImages:=Folder(fk documents folder).folder("Pictures")\n  //to create a folder on the desktop\nok:=Folder(fk desktop folder).folder("myFolder").create()\n')),(0,r.kt)("p",null,"Absolute pathnames are not supported and will return errors."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The flexibility of file and folder functions offers you various possibilities for handling files and folders, like in the following examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'f=Folder(fk desktop folder).folder("archive/jan2023")\n \nf2=Folder("/DATA/archive/jan2023").file("total.txt")\n \nf3=Folder("/DATA/archive/jan2023")\n \nf4=File("/DATA/info.txt")\n \n')))}c.isMDXComponent=!0}}]);
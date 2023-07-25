"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[5156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||k[u]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={id:"FileHandleClass",title:"FileHandle"},i=void 0,o={unversionedId:"language/FileHandleClass",id:"language/FileHandleClass",title:"FileHandle",description:"The FileHandle class has functions that allow you to sequentially read from or append contents to an opened file object. A file handle can access any part of a document.",source:"@site/docs/language/FileHandleClass.md",sourceDirName:"language",slug:"/language/FileHandleClass",permalink:"/docs/language/FileHandleClass",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/FileHandleClass.md",tags:[],version:"current",frontMatter:{id:"FileHandleClass",title:"FileHandle"},sidebar:"QodlyScript",previous:{title:"File",permalink:"/docs/language/FileClass"},next:{title:"Folder",permalink:"/docs/language/FolderClass"}},p={},s=[{value:"Example",id:"example",level:3},{value:"Functions and properties",id:"functions-and-properties",level:3},{value:".breakModeRead",id:"breakmoderead",level:2},{value:"Description",id:"description",level:4},{value:".breakModeWrite",id:"breakmodewrite",level:2},{value:"Description",id:"description-1",level:4},{value:".charset",id:"charset",level:2},{value:"Description",id:"description-2",level:4},{value:".eof",id:"eof",level:2},{value:"Description",id:"description-3",level:4},{value:".file",id:"file",level:2},{value:"Description",id:"description-4",level:4},{value:".getSize()",id:"getsize",level:2},{value:"Description",id:"description-5",level:4},{value:"See also",id:"see-also",level:4},{value:".mode",id:"mode",level:2},{value:"Description",id:"description-6",level:4},{value:".offset",id:"offset",level:2},{value:"Description",id:"description-7",level:4},{value:".readBlob()",id:"readblob",level:2},{value:"Description",id:"description-8",level:4},{value:"See also",id:"see-also-1",level:4},{value:".readLine()",id:"readline",level:2},{value:"Description",id:"description-9",level:4},{value:"See also",id:"see-also-2",level:4},{value:".readText()",id:"readtext",level:2},{value:"Description",id:"description-10",level:4},{value:"See also",id:"see-also-3",level:4},{value:".setSize()",id:"setsize",level:2},{value:"Description",id:"description-11",level:4},{value:"See also",id:"see-also-4",level:4},{value:".writeBlob()",id:"writeblob",level:2},{value:"Description",id:"description-12",level:4},{value:"See also",id:"see-also-5",level:4},{value:".writeLine()",id:"writeline",level:2},{value:"Description",id:"description-13",level:4},{value:"See also",id:"see-also-6",level:4},{value:".writeText()",id:"writetext",level:2},{value:"Description",id:"description-14",level:4},{value:"See also",id:"see-also-7",level:4}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"FileHandle")," class has functions that allow you to sequentially read from or append contents to an opened ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass"},(0,r.kt)("inlineCode",{parentName:"a"},"file"))," object. A file handle can access any part of a document."),(0,r.kt)("p",null,"File handle objects are created with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass#open"},(0,r.kt)("inlineCode",{parentName:"a"},"file.open()"))," function."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To read or write a whole document at once, you might consider using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass#gettext"},"file.getText()")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass#settext"},"file.setText()")," functions.")),(0,r.kt)("p",null,"Thanks to the Qodly object ",(0,r.kt)("em",{parentName:"p"},"refcounting"),", a file handle is automatically deleted when it is no longer referenced and thus, the requested ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass"},(0,r.kt)("inlineCode",{parentName:"a"},"file"))," object is automatically closed. Consequently, with file handles you don't need to worry about closing documents."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'var f : 4D.File\nvar fhandle : 4D.FileHandle\nf=file("/PACKAGE/example.txt")\n\n//Writing line by line from the start\nfhandle=f.open("write")\ntext="Hello World"\nfor (line, 1, 4)\n    fhandle.writeLine(text+string(line))\nend\n\n//Writing line by line from the end\nfhandle=f.open("append")\ntext="Hello New World!"\nfor (line, 1, 4)\n    fhandle.writeLine(text+string(line))\nend\n\n//Reading using a stop character and an object parameter\no=newObject()\no.mode="read"\no.charset="UTF-8"\no.breakModeRead=Document with CRLF\nstopChar="!"\nfhandle=f.open(o)\ntext=fhandle.readText(stopChar)\n\n//Reading line by line\nlines=newCollection()\nfhandle=f.open("read")\nwhile (Not(fhandle.eof))\n    lines.push(fhandle.readLine())\nend\n\n')),(0,r.kt)("h3",{id:"functions-and-properties"},"Functions and properties"),(0,r.kt)("p",null,"file handle objects cannot be shared."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#breakmoderead"},(0,r.kt)("strong",{parentName:"a"},".breakModeRead")," : string"),"\xa0","\xa0","\xa0","\xa0","the processing mode for line breaks used when reading the file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#breakmodewrite"},(0,r.kt)("strong",{parentName:"a"},".breakModeWrite")," : string"),"\xa0","\xa0","\xa0","\xa0","the processing mode for line breaks used when writing to the file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#charset"},(0,r.kt)("strong",{parentName:"a"},".charset")," : string"),"\xa0","\xa0","\xa0","\xa0","the charset used when reading from or writing to the file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#eof"},(0,r.kt)("strong",{parentName:"a"},".eof")," : boolean"),"\xa0","\xa0","\xa0","\xa0","True is the ",(0,r.kt)("inlineCode",{parentName:"td"},"offset")," has reached the end of the file, and False otherwise")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#file"}),"\xa0","\xa0","\xa0","\xa0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#getsize"},(0,r.kt)("strong",{parentName:"a"},".getSize()")," : number "),"\xa0","\xa0","\xa0","\xa0","returns the current size of the document, expressed in bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mode"},(0,r.kt)("strong",{parentName:"a"},".mode")," : string"),"\xa0","\xa0","\xa0","\xa0",'the mode in which the file handle was created: "read", "write", or "append"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#offset"},(0,r.kt)("strong",{parentName:"a"},".offset")," : number"),"\xa0","\xa0","\xa0","\xa0","the current offset of the data stream (position inside the document)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#readblob"},(0,r.kt)("strong",{parentName:"a"},".readBlob"),"( ",(0,r.kt)("em",{parentName:"a"},"bytes")," : number ) : [4D.Blob](BlobClass) "),"\xa0","\xa0","\xa0","\xa0","returns a blob a ",(0,r.kt)("em",{parentName:"td"},"bytes")," size from the file, starting from the current position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#readline"},(0,r.kt)("strong",{parentName:"a"},".readLine()")," : string "),"\xa0","\xa0","\xa0","\xa0","returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#readtext"},(0,r.kt)("strong",{parentName:"a"},".readText"),"( { ",(0,r.kt)("em",{parentName:"a"},"stopChar")," : string } ) : string "),"\xa0","\xa0","\xa0","\xa0","returns text from the file, starting from the current position until the first ",(0,r.kt)("em",{parentName:"td"},"stopChar")," string is encountered (if passed) or the end of file is reached")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#setsize"},(0,r.kt)("strong",{parentName:"a"},".setSize"),"( ",(0,r.kt)("em",{parentName:"a"},"size")," : number )"),"\xa0","\xa0","\xa0","\xa0","sets a new ",(0,r.kt)("em",{parentName:"td"},"size")," in bytes for the document")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#writeblob"},(0,r.kt)("strong",{parentName:"a"},".writeBlob"),"( ",(0,r.kt)("em",{parentName:"a"},"blob")," : 4D.Blob ) "),"\xa0","\xa0","\xa0","\xa0","writes ",(0,r.kt)("em",{parentName:"td"},"blob")," into the file, starting from the current position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#writeline"},(0,r.kt)("strong",{parentName:"a"},".writeLine"),"( ",(0,r.kt)("em",{parentName:"a"},"lineOfText")," : string ) "),"\xa0","\xa0","\xa0","\xa0","writes ",(0,r.kt)("em",{parentName:"td"},"lineOfText")," content at the current position and inserts an end-of-line delimiter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#writetext"},(0,r.kt)("strong",{parentName:"a"},".writeText"),"( ",(0,r.kt)("em",{parentName:"a"},"textToWrite")," : string )"),"\xa0","\xa0","\xa0","\xa0","writes ",(0,r.kt)("em",{parentName:"td"},"textToWrite")," content at the current position and does not insert a final end-of-line delimiter")))),(0,r.kt)("h2",{id:"breakmoderead"},".breakModeRead"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".breakModeRead")," : string"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".breakModeRead")," property returns the processing mode for line breaks used when reading the file."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".breakModeRead")," property can be defined at the handle creation with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass#open"},(0,r.kt)("inlineCode",{parentName:"a"},"file.open()"))," function (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass#open"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},".open()")," function"),' for more information). Default is "native".'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},".breakModeRead")," property always contains a text value, even if the ",(0,r.kt)("inlineCode",{parentName:"p"},".open()")," option was set using a number (constant).")),(0,r.kt)("p",null,"This property is ",(0,r.kt)("strong",{parentName:"p"},"read-only"),"."),(0,r.kt)("h2",{id:"breakmodewrite"},".breakModeWrite"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".breakModeWrite")," : string"),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".breakModeWrite")," property returns the processing mode for line breaks used when writing to the file."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".breakModeWrite")," property can be defined at the handle creation with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass#open"},(0,r.kt)("inlineCode",{parentName:"a"},"file.open()"))," function (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass#open"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},".open()")," function"),' for more information). Default is "native".'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},".breakModeWrite")," property always contains a text value, even if the ",(0,r.kt)("inlineCode",{parentName:"p"},".open()")," option was set using a number (constant).")),(0,r.kt)("p",null,"This property is ",(0,r.kt)("strong",{parentName:"p"},"read-only"),"."),(0,r.kt)("h2",{id:"charset"},".charset"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".charset")," : string"),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".charset")," property returns the charset used when reading from or writing to the file."),(0,r.kt)("p",null,"The charset can be defined at the handle creation with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass#open"},(0,r.kt)("inlineCode",{parentName:"a"},"file.open()")),' function. Default is "UTF-8".'),(0,r.kt)("p",null,"This property is ",(0,r.kt)("strong",{parentName:"p"},"read-only"),"."),(0,r.kt)("h2",{id:"eof"},".eof"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".eof")," : boolean"),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".eof")," property returns True is the ",(0,r.kt)("inlineCode",{parentName:"p"},"offset")," has reached the end of the file, and False otherwise."),(0,r.kt)("p",null,"This property is ",(0,r.kt)("strong",{parentName:"p"},"read-only"),"."),(0,r.kt)("h2",{id:"file"},".file"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".file")," : 4D.File"),(0,r.kt)("h4",{id:"description-4"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".file")," property returns the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass"},"4D.File")," object on which the handle has been created."),(0,r.kt)("p",null,"This property is ",(0,r.kt)("strong",{parentName:"p"},"read-only"),"."),(0,r.kt)("h2",{id:"getsize"},".getSize()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".getSize()")," : number "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of the document in bytes")))),(0,r.kt)("h4",{id:"description-5"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".getSize()")," function returns the current size of the document, expressed in bytes."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This function returns the same value as the (",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass#size"},".size"),") property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," class.")),(0,r.kt)("h4",{id:"see-also"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#setsize"},".setSize()"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass#size"},"file.size")),(0,r.kt)("h2",{id:"mode"},".mode"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".mode")," : string"),(0,r.kt)("h4",{id:"description-6"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".mode"),' property returns the mode in which the file handle was created: "read", "write", or "append".'),(0,r.kt)("p",null,"The mode can be defined at the handle creation with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass#open"},(0,r.kt)("inlineCode",{parentName:"a"},"file.open()")),' function. Default is "read".'),(0,r.kt)("p",null,"This property is ",(0,r.kt)("strong",{parentName:"p"},"read-only"),"."),(0,r.kt)("h2",{id:"offset"},".offset"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".offset")," : number"),(0,r.kt)("h4",{id:"description-7"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".offset")," property returns the current offset of the data stream (position inside the document). The offset value is automatically updated after read and write operations."),(0,r.kt)("p",null,"Setting the ",(0,r.kt)("inlineCode",{parentName:"p"},".offset")," will change its current value."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the passed value is negative, the ",(0,r.kt)("inlineCode",{parentName:"li"},".offset")," is set to the start of the file (zero)."),(0,r.kt)("li",{parentName:"ul"},"If the passed value is higher than the size of the file,  the ",(0,r.kt)("inlineCode",{parentName:"li"},".offset")," is set to the end of the file (size of file).")),(0,r.kt)("p",null,"This property is ",(0,r.kt)("strong",{parentName:"p"},"read/write"),"."),(0,r.kt)("h2",{id:"readblob"},".readBlob()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".readBlob"),"( ",(0,r.kt)("em",{parentName:"p"},"bytes")," : number ) : ",(0,r.kt)("a",{parentName:"p",href:"BlobClass"},"4D.Blob")," "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of bytes to be read")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BlobClass"},"4D.Blob")),(0,r.kt)("td",{parentName:"tr",align:null},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Bytes read from the file")))),(0,r.kt)("h4",{id:"description-8"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".readBlob()")," function returns a blob a ",(0,r.kt)("em",{parentName:"p"},"bytes")," size from the file, starting from the current position ."),(0,r.kt)("p",null,"When this function is executed, the current position (",(0,r.kt)("a",{parentName:"p",href:"#offset"},".offset"),") is updated after the last byte read."),(0,r.kt)("h4",{id:"see-also-1"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#writeblob"},".writeBlob()")),(0,r.kt)("h2",{id:"readline"},".readLine()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".readLine()")," : string "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Line of text")))),(0,r.kt)("h4",{id:"description-9"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".readLine()")," function returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached."),(0,r.kt)("p",null,"When this function is executed, the current position (",(0,r.kt)("a",{parentName:"p",href:"#offset"},".offset"),") is updated."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When this function is executed for the first time on a file handle, the whole document contents is loaded in a buffer.")),(0,r.kt)("h4",{id:"see-also-2"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#readtext"},".readText()"),", ",(0,r.kt)("a",{parentName:"p",href:"#writeline"},".writeLine()")),(0,r.kt)("h2",{id:"readtext"},".readText()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".readText"),"( { ",(0,r.kt)("em",{parentName:"p"},"stopChar")," : string } ) : string "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"stopChar")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Character(s) at which to stop reading")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"string from the file")))),(0,r.kt)("h4",{id:"description-10"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".readText()")," function returns text from the file, starting from the current position until the first ",(0,r.kt)("em",{parentName:"p"},"stopChar")," string is encountered (if passed) or the end of file is reached."),(0,r.kt)("p",null,"This function replaces all original end-of-line delimiters. By default, the native delimiter is used, but you can define another delimiter when ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass#open"},"opening the file handle")," by setting the ",(0,r.kt)("a",{parentName:"p",href:"#breakmoderead"},(0,r.kt)("inlineCode",{parentName:"a"},".breakModeRead"))," property.  "),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"stopChar")," character string is not included in the returned text. If you omit the ",(0,r.kt)("em",{parentName:"p"},"stopChar")," parameter, the whole document text is returned.  "),(0,r.kt)("p",null,"When this function is executed, the (",(0,r.kt)("a",{parentName:"p",href:"#offset"},".offset"),") is placed just after the ",(0,r.kt)("em",{parentName:"p"},"stopChar")," string."),(0,r.kt)("p",null,"If the ",(0,r.kt)("em",{parentName:"p"},"stopChar")," parameter is passed and not found, ",(0,r.kt)("inlineCode",{parentName:"p"},".readText()")," returns an empty string and the ",(0,r.kt)("a",{parentName:"p",href:"#offset"},".offset")," is left untouched."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When this function is executed for the first time on a file handle, the whole document contents is loaded in a buffer.")),(0,r.kt)("h4",{id:"see-also-3"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#readline"},".readLine()"),", ",(0,r.kt)("a",{parentName:"p",href:"#writetext"},".writeText()")),(0,r.kt)("h2",{id:"setsize"},".setSize()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".setSize"),"( ",(0,r.kt)("em",{parentName:"p"},"size")," : number )"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"New size of the document in bytes")))),(0,r.kt)("h4",{id:"description-11"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".setSize()")," function sets a new ",(0,r.kt)("em",{parentName:"p"},"size")," in bytes for the document."),(0,r.kt)("p",null,"If the ",(0,r.kt)("em",{parentName:"p"},"size")," value is less than the current document size, the document content is truncated from the beginning to get the new ",(0,r.kt)("em",{parentName:"p"},"size")," ."),(0,r.kt)("h4",{id:"see-also-4"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#getsize"},".getSize()"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass#size"},"file.size")),(0,r.kt)("h2",{id:"writeblob"},".writeBlob()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".writeBlob"),"( ",(0,r.kt)("em",{parentName:"p"},"blob")," : 4D.Blob ) "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"blob")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"BlobClass"},"4D.Blob")),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Blob to write in the file")))),(0,r.kt)("h4",{id:"description-12"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".writeBlob()")," function writes ",(0,r.kt)("em",{parentName:"p"},"blob")," into the file, starting from the current position ."),(0,r.kt)("p",null,"When this function is executed, the current position (",(0,r.kt)("a",{parentName:"p",href:"#offset"},".offset"),") is updated after the last byte written."),(0,r.kt)("h4",{id:"see-also-5"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#readblob"},".readBlob()")),(0,r.kt)("h2",{id:"writeline"},".writeLine()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".writeLine"),"( ",(0,r.kt)("em",{parentName:"p"},"lineOfText")," : string ) "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"lineOfText")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"string to write")))),(0,r.kt)("h4",{id:"description-13"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".writeLine()")," function writes ",(0,r.kt)("em",{parentName:"p"},"lineOfText")," content at the current position and inserts an end-of-line delimiter (unlike the ",(0,r.kt)("a",{parentName:"p",href:"#writetext"},".writeText()")," function). By default, a native end-of-line delimiter is used, but you can define another delimiter when ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass#open"},"opening the file handle")," by setting the ",(0,r.kt)("a",{parentName:"p",href:"#breakmodewrite"},(0,r.kt)("inlineCode",{parentName:"a"},".breakModeWrite"))," property.  "),(0,r.kt)("p",null,"When this function is executed, the current position (",(0,r.kt)("a",{parentName:"p",href:"#offset"},".offset"),") is updated after the end-of-line delimiter."),(0,r.kt)("h4",{id:"see-also-6"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#breakmodewrite"},".breakModeWrite"),", ",(0,r.kt)("a",{parentName:"p",href:"#readline"},".readLine()"),", ",(0,r.kt)("a",{parentName:"p",href:"#writetext"},".writeText()")),(0,r.kt)("h2",{id:"writetext"},".writeText()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".writeText"),"( ",(0,r.kt)("em",{parentName:"p"},"textToWrite")," : string )"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"textToWrite")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"string to write")))),(0,r.kt)("h4",{id:"description-14"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".writeText()")," function writes ",(0,r.kt)("em",{parentName:"p"},"textToWrite")," content at the current position and does not insert a final end-of-line delimiter (unlike the ",(0,r.kt)("a",{parentName:"p",href:"#writeline"},".writeLine()")," function). This function replaces all original end-of-line delimiters. By default, the native delimiter is used, but you can define another delimiter when ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass#open"},"opening the file handle")," by setting the ",(0,r.kt)("a",{parentName:"p",href:"#breakmodewrite"},(0,r.kt)("inlineCode",{parentName:"a"},".breakModeWrite"))," property.  "),(0,r.kt)("p",null,"When this function is executed, the current position (",(0,r.kt)("a",{parentName:"p",href:"#offset"},".offset"),") is updated after the next end-of-line delimiter."),(0,r.kt)("h4",{id:"see-also-7"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#breakmodewrite"},".breakModeWrite"),", ",(0,r.kt)("a",{parentName:"p",href:"#readtext"},".readText()"),", ",(0,r.kt)("a",{parentName:"p",href:"#writeline"},".writeLine()")))}m.isMDXComponent=!0}}]);
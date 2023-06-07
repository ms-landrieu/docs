"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[9083],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=o(a),c=r,h=s["".concat(m,".").concat(c)]||s[c]||k[c]||l;return a?n.createElement(h,i(i({ref:e},d),{},{components:a})):n.createElement(h,i({ref:e},d))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[s]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8919:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={id:"MailAttachmentClass",title:"MailAttachment"},i=void 0,p={unversionedId:"language/MailAttachmentClass",id:"language/MailAttachmentClass",title:"MailAttachment",description:"Attachment objects allow referencing files within a Email object.",source:"@site/docs/language/MailAttachmentClass.md",sourceDirName:"language",slug:"/language/MailAttachmentClass",permalink:"/docs/language/MailAttachmentClass",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/MailAttachmentClass.md",tags:[],version:"current",frontMatter:{id:"MailAttachmentClass",title:"MailAttachment"},sidebar:"Development",previous:{title:"Interruptions",permalink:"/docs/language/interruptions"},next:{title:"Math",permalink:"/docs/language/math"}},m={},o=[{value:"Commands",id:"commands",level:3},{value:"Functions and properties",id:"functions-and-properties",level:3},{value:"MAIL New attachment",id:"mail-new-attachment",level:2},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"4D.MailAttachment.new()",id:"4dmailattachmentnew",level:2},{value:"Description",id:"description-1",level:4},{value:".cid",id:"cid",level:2},{value:"Description",id:"description-2",level:4},{value:".disposition",id:"disposition",level:2},{value:"Description",id:"description-3",level:4},{value:".getContent()",id:"getcontent",level:2},{value:"Description",id:"description-4",level:4},{value:".name",id:"name",level:2},{value:"Description",id:"description-5",level:4},{value:".path",id:"path",level:2},{value:"Description",id:"description-6",level:4},{value:".platformPath",id:"platformpath",level:2},{value:"Description",id:"description-7",level:4},{value:".type",id:"type",level:2},{value:"Description",id:"description-8",level:4}],d={toc:o};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Attachment objects allow referencing files within a ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/EmailObjectClass"},(0,r.kt)("inlineCode",{parentName:"a"},"Email"))," object. "),(0,r.kt)("h3",{id:"commands"},"Commands"),(0,r.kt)("p",null,"Attachment objects are created using the ",(0,r.kt)("a",{parentName:"p",href:"#mail-new-attachment"},(0,r.kt)("inlineCode",{parentName:"a"},"MAIL New attachment"))," command."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mail-new-attachment"},(0,r.kt)("strong",{parentName:"a"},"MAIL New attachment"),"( ",(0,r.kt)("em",{parentName:"a"},"file")," : 4D.File { , ",(0,r.kt)("em",{parentName:"a"},"name")," : Text {, ",(0,r.kt)("em",{parentName:"a"},"cid")," : Text{ , ",(0,r.kt)("em",{parentName:"a"},"type")," : Text { , ",(0,r.kt)("em",{parentName:"a"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"a"},"MAIL New attachment"),"( ",(0,r.kt)("em",{parentName:"a"},"zipFile")," : 4D.ZipFile { , ",(0,r.kt)("em",{parentName:"a"},"name")," : Text {, ",(0,r.kt)("em",{parentName:"a"},"cid")," : Text{ , ",(0,r.kt)("em",{parentName:"a"},"type")," : Text { , ",(0,r.kt)("em",{parentName:"a"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"a"},"MAIL New attachment"),"( ",(0,r.kt)("em",{parentName:"a"},"blob")," : 4D.Blob { , ",(0,r.kt)("em",{parentName:"a"},"name")," : Text {, ",(0,r.kt)("em",{parentName:"a"},"cid")," : Text{ , ",(0,r.kt)("em",{parentName:"a"},"type")," : Text { , ",(0,r.kt)("em",{parentName:"a"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"a"},"MAIL New attachment"),"( ",(0,r.kt)("em",{parentName:"a"},"path")," : Text { , ",(0,r.kt)("em",{parentName:"a"},"name")," : Text {, ",(0,r.kt)("em",{parentName:"a"},"cid")," : Text{ , ",(0,r.kt)("em",{parentName:"a"},"type")," : Text { , ",(0,r.kt)("em",{parentName:"a"},"disposition")," :Text } } } } ) : 4D.MailAttachment"),"\xa0","\xa0","\xa0","\xa0","allows you to create an attachment object that you can add to an ",(0,r.kt)("a",{parentName:"td",href:"/docs/language/EmailObjectClass#email-object"},"Email object"))))),(0,r.kt)("h3",{id:"functions-and-properties"},"Functions and properties"),(0,r.kt)("p",null,"Attachment objects provide the following functions and read-only properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#cid"},(0,r.kt)("strong",{parentName:"a"},".cid")," : Text"),"\xa0","\xa0","\xa0","\xa0"," the ID of the attachment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#disposition"},(0,r.kt)("strong",{parentName:"a"},".disposition")," : Text"),"\xa0","\xa0","\xa0","\xa0","the value of the ",(0,r.kt)("inlineCode",{parentName:"td"},"Content-Disposition")," header")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#getcontent"},(0,r.kt)("strong",{parentName:"a"},".getContent()")," : 4D.Blob"),"\xa0","\xa0","\xa0","\xa0","returns the contents of the attachment object in a ",(0,r.kt)("inlineCode",{parentName:"td"},"4D.Blob")," object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#name"},(0,r.kt)("strong",{parentName:"a"},".name")," : Text"),"\xa0","\xa0","\xa0","\xa0","the name and extension of the attachment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#cid"}),"\xa0","\xa0","\xa0","\xa0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#path"},(0,r.kt)("strong",{parentName:"a"},".path")," : Text"),"\xa0","\xa0","\xa0","\xa0","the POSIX path of the attachment file, if it exists")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#platformpath"},(0,r.kt)("strong",{parentName:"a"},".platformPath")," : Text"),"\xa0","\xa0","\xa0","\xa0","the path of the attachment file expressed with the current platform syntax")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#type"},(0,r.kt)("strong",{parentName:"a"},".type")," : Text"),"\xa0","\xa0","\xa0","\xa0","the ",(0,r.kt)("inlineCode",{parentName:"td"},"content-type")," of the attachment file")))),(0,r.kt)("h2",{id:"mail-new-attachment"},"MAIL New attachment"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MAIL New attachment"),"( ",(0,r.kt)("em",{parentName:"p"},"file")," : 4D.File { , ",(0,r.kt)("em",{parentName:"p"},"name")," : Text {, ",(0,r.kt)("em",{parentName:"p"},"cid")," : Text{ , ",(0,r.kt)("em",{parentName:"p"},"type")," : Text { , ",(0,r.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"MAIL New attachment"),"( ",(0,r.kt)("em",{parentName:"p"},"zipFile")," : 4D.ZipFile { , ",(0,r.kt)("em",{parentName:"p"},"name")," : Text {, ",(0,r.kt)("em",{parentName:"p"},"cid")," : Text{ , ",(0,r.kt)("em",{parentName:"p"},"type")," : Text { , ",(0,r.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"MAIL New attachment"),"( ",(0,r.kt)("em",{parentName:"p"},"blob")," : 4D.Blob { , ",(0,r.kt)("em",{parentName:"p"},"name")," : Text {, ",(0,r.kt)("em",{parentName:"p"},"cid")," : Text{ , ",(0,r.kt)("em",{parentName:"p"},"type")," : Text { , ",(0,r.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"MAIL New attachment"),"( ",(0,r.kt)("em",{parentName:"p"},"path")," : Text { , ",(0,r.kt)("em",{parentName:"p"},"name")," : Text {, ",(0,r.kt)("em",{parentName:"p"},"cid")," : Text{ , ",(0,r.kt)("em",{parentName:"p"},"type")," : Text { , ",(0,r.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.File"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Attachment file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zipFile"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.ZipFile"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Attachment Zipfile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blob"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.Blob"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"BLOB containing the attachment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Path of the attachment file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Name + extension used by the mail client to designate the attachment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cid"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},'ID of attachment (HTML messages only), or " " if no cid is required')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Value of the content-type header")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disposition"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},'Value of the content-disposition header: "inline" or "attachment".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.MailAttachment"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Attachment object")))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MAIL New attachment")," command allows you to create an attachment object that you can add to an ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/EmailObjectClass#email-object"},"Email object"),"."),(0,r.kt)("p",null,"To define the attachment, you can use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("em",{parentName:"li"},"file"),", pass a ",(0,r.kt)("inlineCode",{parentName:"li"},"4D.File")," object containing the attachment file."),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("em",{parentName:"li"},"zipfile"),", pass a ",(0,r.kt)("inlineCode",{parentName:"li"},"4D.ZipFile")," object containing the attachment file."),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("em",{parentName:"li"},"blob"),", pass a ",(0,r.kt)("inlineCode",{parentName:"li"},"4D.Blob")," object containing the attachment itself."),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("em",{parentName:"li"},"path"),", pass a ",(0,r.kt)("strong",{parentName:"li"},"text")," value containing the path of the attachment file, expressed with the system syntax. You can pass a full path name or a simple file name (in which case 4D will search for the file in the same directory as the project file).")),(0,r.kt)("p",null,"The optional ",(0,r.kt)("em",{parentName:"p"},"name")," parameter lets you pass the name and extension to be used by the mail client to designate the attachment. If ",(0,r.kt)("em",{parentName:"p"},"name")," is omitted and:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"you passed a file path, the name and extension of the file is used,"),(0,r.kt)("li",{parentName:"ul"},"you passed a BLOB, a random name without extension is automatically generated.")),(0,r.kt)("p",null,"The optional ",(0,r.kt)("em",{parentName:"p"},"cid")," parameter lets you pass an internal ID for the attachment. This ID is the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Id")," header, it will be used in HTML messages only. The cid associates the attachment with a reference defined in the message body using an HTML tag such as ",(0,r.kt)("inlineCode",{parentName:"p"},'\\<img src="cid:ID">'),". This means that the contents of the attachment (e.g., a picture) should be displayed within the message on the mail client. The final result may vary depending on the mail client. You can pass an empty string in ",(0,r.kt)("em",{parentName:"p"},"cid")," if you do not want to use this parameter."),(0,r.kt)("p",null,"You can use the optional ",(0,r.kt)("em",{parentName:"p"},"type")," parameter to explicitly set the ",(0,r.kt)("inlineCode",{parentName:"p"},"content-type"),' of the attachment file. For example, you can pass a string defining a MIME type ("video/mpeg"). This content-type value will be set for the attachment, regardless of its extension. For more information about MIME types, please refer to the ',(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/MIME"},"MIME type page on Wikipedia"),"."),(0,r.kt)("p",null,"By default, if the ",(0,r.kt)("em",{parentName:"p"},"type")," parameter is omitted or contains an empty string, the ",(0,r.kt)("inlineCode",{parentName:"p"},"content-type")," of the attachment file is based on its extension. The following rules are applied for the main MIME types:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Extension"),(0,r.kt)("th",{parentName:"tr",align:null},"Content Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jpg, jpeg"),(0,r.kt)("td",{parentName:"tr",align:null},"image/jpeg")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"png"),(0,r.kt)("td",{parentName:"tr",align:null},"image/png")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gif"),(0,r.kt)("td",{parentName:"tr",align:null},"image/gif")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pdf"),(0,r.kt)("td",{parentName:"tr",align:null},"application/pdf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doc"),(0,r.kt)("td",{parentName:"tr",align:null},"application/msword")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xls"),(0,r.kt)("td",{parentName:"tr",align:null},"application/vnd.ms-excel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ppt"),(0,r.kt)("td",{parentName:"tr",align:null},"application/vnd.ms-powerpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zip"),(0,r.kt)("td",{parentName:"tr",align:null},"application/zip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gz"),(0,r.kt)("td",{parentName:"tr",align:null},"application/gzip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"js"),(0,r.kt)("td",{parentName:"tr",align:null},"application/javascript")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps"),(0,r.kt)("td",{parentName:"tr",align:null},"application/postscript")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xml"),(0,r.kt)("td",{parentName:"tr",align:null},"application/xml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"htm, html"),(0,r.kt)("td",{parentName:"tr",align:null},"text/html")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mp3"),(0,r.kt)("td",{parentName:"tr",align:null},"audio/mpeg")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"other")),(0,r.kt)("td",{parentName:"tr",align:null},"application/octet-stream")))),(0,r.kt)("p",null,"The optional ",(0,r.kt)("em",{parentName:"p"},"disposition")," parameter lets you pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"content-disposition")," header of the attachment. You can pass one of the following constants:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Constant"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mail disposition attachment"),(0,r.kt)("td",{parentName:"tr",align:null},'"attachment"'),(0,r.kt)("td",{parentName:"tr",align:null},'Set the Content-disposition header value to "attachment", which means that the attachment file must be provided as a link in the message.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mail disposition inline"),(0,r.kt)("td",{parentName:"tr",align:null},'"inline"'),(0,r.kt)("td",{parentName:"tr",align:null},'Set the Content-disposition header value to "inline", which means that the attachment must be rendered within the message contents, at the "cid" location. The rendering depends on the mail client.')))),(0,r.kt)("p",null,"By default, if the ",(0,r.kt)("em",{parentName:"p"},"disposition")," parameter is omitted:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if the ",(0,r.kt)("em",{parentName:"li"},"cid")," parameter is used, the ",(0,r.kt)("inlineCode",{parentName:"li"},"Content-disposition"),' header is set to "inline",'),(0,r.kt)("li",{parentName:"ul"},"if the ",(0,r.kt)("em",{parentName:"li"},"cid")," parameter is not passed or empty, the ",(0,r.kt)("inlineCode",{parentName:"li"},"Content-disposition"),' header is set to "attachment".')),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"You want to send an email with a file as an attachment and an image embedded in the HTML body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'var attachment : 4D.File\nvar email,server : Object\nvar transporter : 4D.SMTPTransporter\n\nattachment=File("/PACKAGE/Docs/cv-john-smith.pdf")\n\nserver=New object\nserver.host="smtp.mail.com"\nserver.user="test_user@mail.com"\nserver.password="p@ssw@rd"\ntransporter=SMTP New transporter(server)\n\nemail=New object\nemail.from="test_user@mail.com"\nemail.to="test_user@mail.com"\nemail.subject="This is a test message with attachments"\n\n//add a link to download file\nemail.attachments=New collection(MAIL New attachment(attachment))\n//insert an inline picture (use a cid)\nemail.attachments[1]=MAIL New attachment(File("/PACKAGE/Docs/photo.jpg"),"","Qodly")\n\nemail.htmlBody="<html>"+\\\n"<body>Hello World!"+\\\n"<img src=\'cid:Qodly\' >"+\\\n"</body>"+\\\n"</head>"+\\\n"</html>"\n\ntransporter.send(email) //send mail\n\n')),(0,r.kt)("h2",{id:"4dmailattachmentnew"},"4D.MailAttachment.new()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4D.MailAttachment.new"),"( ",(0,r.kt)("em",{parentName:"p"},"file")," : 4D.File { , ",(0,r.kt)("em",{parentName:"p"},"name")," : Text {, ",(0,r.kt)("em",{parentName:"p"},"cid")," : Text{ , ",(0,r.kt)("em",{parentName:"p"},"type")," : Text { , ",(0,r.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"4D.MailAttachment.new"),"( ",(0,r.kt)("em",{parentName:"p"},"zipFile")," : 4D.ZipFile { , ",(0,r.kt)("em",{parentName:"p"},"name")," : Text {, ",(0,r.kt)("em",{parentName:"p"},"cid")," : Text{ , ",(0,r.kt)("em",{parentName:"p"},"type")," : Text { , ",(0,r.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"4D.MailAttachment.new"),"( ",(0,r.kt)("em",{parentName:"p"},"blob")," : 4D.Blob { , ",(0,r.kt)("em",{parentName:"p"},"name")," : Text {, ",(0,r.kt)("em",{parentName:"p"},"cid")," : Text{ , ",(0,r.kt)("em",{parentName:"p"},"type")," : Text { , ",(0,r.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"4D.MailAttachment.new"),"( ",(0,r.kt)("em",{parentName:"p"},"path")," : Text { , ",(0,r.kt)("em",{parentName:"p"},"name")," : Text {, ",(0,r.kt)("em",{parentName:"p"},"cid")," : Text{ , ",(0,r.kt)("em",{parentName:"p"},"type")," : Text { , ",(0,r.kt)("em",{parentName:"p"},"disposition")," :Text } } } } ) : 4D.MailAttachment"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.File"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Attachment file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zipFile"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.ZipFile"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Attachment Zipfile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blob"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.Blob"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"BLOB containing the attachment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Path of the attachment file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Name + extension used by the mail client to designate the attachment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cid"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},'ID of attachment (HTML messages only), or " " if no cid is required')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Value of the content-type header")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disposition"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},'Value of the content-disposition header: "inline" or "attachment".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.MailAttachment"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Attachment object")))),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.MailAttachment.new()")," function creates and returns a new object of the ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.MailAttachment")," type. It is identical to the ",(0,r.kt)("a",{parentName:"p",href:"#mail-new-attachment"},(0,r.kt)("inlineCode",{parentName:"a"},"MAIL New attachment"))," command (shortcut)."),(0,r.kt)("h2",{id:"cid"},".cid"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".cid")," : Text"),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".cid")," property contains  the ID of the attachment. This property is used in HTML messages only. If this property is missing, the file is handled as a simple attachment (link)."),(0,r.kt)("h2",{id:"disposition"},".disposition"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".disposition")," : Text"),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".disposition")," property contains the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Disposition")," header. Two values are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"inline": the attachment is rendered within the message contents, at the "cid" location. The rendering depends on the mail client.'),(0,r.kt)("li",{parentName:"ul"},'"attachment": the attachment is provided as a link in the message.')),(0,r.kt)("h2",{id:"getcontent"},".getContent()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".getContent()")," : 4D.Blob"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.Blob"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Content of the attachment")))),(0,r.kt)("h4",{id:"description-4"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".getContent()")," function returns the contents of the attachment object in a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.Blob")," object. You can use this method with attachment objects received by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/EmailObjectClass#mail-convert-from-mime"},(0,r.kt)("inlineCode",{parentName:"a"},"MAIL Convert from MIME"))," command."),(0,r.kt)("h2",{id:"name"},".name"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".name")," : Text"),(0,r.kt)("h4",{id:"description-5"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".name")," property contains the name and extension of the attachment.  By default, it is the name of the file, unless another name was specified in the ",(0,r.kt)("a",{parentName:"p",href:"#mail-new-attachment"},(0,r.kt)("inlineCode",{parentName:"a"},"MAIL New attachment"))," command."),(0,r.kt)("h2",{id:"path"},".path"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".path")," : Text"),(0,r.kt)("h4",{id:"description-6"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".path")," property contains the POSIX path of the attachment file, if it exists.  "),(0,r.kt)("h2",{id:"platformpath"},".platformPath"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".platformPath")," : Text"),(0,r.kt)("h4",{id:"description-7"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".platformPath")," property returns the path of the attachment file expressed with the current platform syntax."),(0,r.kt)("h2",{id:"type"},".type"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".type")," : Text"),(0,r.kt)("h4",{id:"description-8"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".type")," property contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"content-type")," of the attachment file. If this type is not explicitly passed to the ",(0,r.kt)("a",{parentName:"p",href:"#mail-new-attachment"},(0,r.kt)("inlineCode",{parentName:"a"},"MAIL New attachment"))," command, the ",(0,r.kt)("inlineCode",{parentName:"p"},"content-type")," is based on its file extension."))}s.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[5242],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=s(a),d=r,g=k["".concat(o,".").concat(d)]||k[d]||u[d]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[k]="string"==typeof t?t:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},120:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={id:"CryptoKeyClass",title:"CryptoKey"},i=void 0,p={unversionedId:"language/CryptoKeyClass",id:"language/CryptoKeyClass",title:"CryptoKey",description:"The CryptoKey class in QodlyScript encapsulates an asymmetric encryption key pair.",source:"@site/docs/language/CryptoKeyClass.md",sourceDirName:"language",slug:"/language/CryptoKeyClass",permalink:"/docs/language/CryptoKeyClass",draft:!1,editUrl:"https://github.com/qodly/docs/edit/main/docs/language/CryptoKeyClass.md",tags:[],version:"current",frontMatter:{id:"CryptoKeyClass",title:"CryptoKey"},sidebar:"Develop",previous:{title:"Collection",permalink:"/docs/language/CollectionClass"},next:{title:"DataClass",permalink:"/docs/language/DataClassClass"}},o={},s=[{value:"Example",id:"example",level:3},{value:"Functions and properties",id:"functions-and-properties",level:3},{value:"4D.CryptoKey.new()",id:"4dcryptokeynew",level:2},{value:"<em>settings</em>",id:"settings",level:4},{value:"<em>CryptoKey</em>",id:"cryptokey",level:4},{value:".curve",id:"curve",level:2},{value:".decrypt()",id:"decrypt",level:2},{value:"<em>options</em>",id:"options",level:4},{value:"<em>Result</em>",id:"result",level:4},{value:".encrypt()",id:"encrypt",level:2},{value:"<em>options</em>",id:"options-1",level:5},{value:"<em>Result</em>",id:"result-1",level:4},{value:".getPrivateKey()",id:"getprivatekey",level:2},{value:"<em>Result</em>",id:"result-2",level:4},{value:".getPublicKey()",id:"getpublickey",level:2},{value:"<em>Result</em>",id:"result-3",level:4},{value:".pem",id:"pem",level:2},{value:".sign()",id:"sign",level:2},{value:"<em>options</em>",id:"options-2",level:4},{value:"<em>Result</em>",id:"result-4",level:4},{value:".size",id:"size",level:2},{value:".type",id:"type",level:2},{value:".verify()",id:"verify",level:2},{value:"<em>options</em>",id:"options-3",level:4},{value:"<em>Result</em>",id:"result-5",level:4}],m={toc:s};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CryptoKey")," class in QodlyScript encapsulates an asymmetric encryption key pair."),(0,r.kt)("p",null,"This class is available from the ",(0,r.kt)("inlineCode",{parentName:"p"},"4D")," class store."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"The following sample code signs and verifies a message using a new ECDSA key pair, for example in order to make a ES256 JSON Web token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' // Generate a new ECDSA key pair\nvar key : 4D.CryptoKey\nkey = 4D.CryptoKey.new(newobject("type","ECDSA","curve","prime256v1"))\n\n  // Get signature as base64\nvar message, signature : string\nmessage = "hello world"\nsignature = key.sign(message,newobject("hash","SHA256"))\n\n  // Verify signature\nvar status : object\nstatus = key.verify(message,signature,newobject("hash","SHA256"))\nassert(status.success)\n')),(0,r.kt)("h3",{id:"functions-and-properties"},"Functions and properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#4dcryptokeynew"},(0,r.kt)("strong",{parentName:"a"},"4D.CryptoKey.new"),"( ",(0,r.kt)("em",{parentName:"a"},"settings")," : object ) : 4D.CryptoKey"),"\xa0","\xa0","\xa0","\xa0","creates a new ",(0,r.kt)("inlineCode",{parentName:"td"},"4D.CryptoKey")," object encapsulating an encryption key pair")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#curve"},(0,r.kt)("strong",{parentName:"a"},".curve")," : string"),"\xa0","\xa0","\xa0","\xa0","normalised curve name of the key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#decrypt"},(0,r.kt)("strong",{parentName:"a"},".decrypt"),"( ",(0,r.kt)("em",{parentName:"a"},"message")," : string , ",(0,r.kt)("em",{parentName:"a"},"options")," : object ) : object"),"\xa0","\xa0","\xa0","\xa0","decrypts the ",(0,r.kt)("em",{parentName:"td"},"message")," parameter using the ",(0,r.kt)("strong",{parentName:"td"},"private")," key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#encrypt"},(0,r.kt)("strong",{parentName:"a"},".encrypt"),"( ",(0,r.kt)("em",{parentName:"a"},"message")," : string , ",(0,r.kt)("em",{parentName:"a"},"options")," : object ) : string"),"\xa0","\xa0","\xa0","\xa0","encrypts the ",(0,r.kt)("em",{parentName:"td"},"message")," parameter using the ",(0,r.kt)("strong",{parentName:"td"},"public")," key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#getprivatekey"},(0,r.kt)("strong",{parentName:"a"},".getPrivateKey"),"() : string"),"\xa0","\xa0","\xa0","\xa0","returns the private key of the ",(0,r.kt)("inlineCode",{parentName:"td"},"CryptoKey")," object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#getpublickey"},(0,r.kt)("strong",{parentName:"a"},".getPublicKey"),"() : string"),"\xa0","\xa0","\xa0","\xa0","returns the public key of the ",(0,r.kt)("inlineCode",{parentName:"td"},"CryptoKey")," object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#sign"},".",(0,r.kt)("strong",{parentName:"a"},"sign")," (",(0,r.kt)("em",{parentName:"a"},"message")," : string , ",(0,r.kt)("em",{parentName:"a"},"options")," : string) : string"),"\xa0","\xa0","\xa0","\xa0","signs the utf8 representation of a ",(0,r.kt)("em",{parentName:"td"},"message")," string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#size"},(0,r.kt)("strong",{parentName:"a"},".size")," : integer"),"\xa0","\xa0","\xa0","\xa0","the size of the key in bits")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#type"},(0,r.kt)("strong",{parentName:"a"},".type")," : string"),"\xa0","\xa0","\xa0","\xa0",'name of the key type - "RSA", "ECDSA", "PEM"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#verify"},(0,r.kt)("strong",{parentName:"a"},".verify"),"( ",(0,r.kt)("em",{parentName:"a"},"message")," : string , ",(0,r.kt)("em",{parentName:"a"},"signature")," : string , ",(0,r.kt)("em",{parentName:"a"},"options")," : object) : object"),"\xa0","\xa0","\xa0","\xa0","verifies the base64 signature against the utf8 representation of ",(0,r.kt)("em",{parentName:"td"},"message"))))),(0,r.kt)("h2",{id:"4dcryptokeynew"},"4D.CryptoKey.new()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4D.CryptoKey.new"),"( ",(0,r.kt)("em",{parentName:"p"},"settings")," : object ) : 4D.CryptoKey"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settings"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Settings to generate or load a key pair")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},"4D.CryptoKey"),(0,r.kt)("td",{parentName:"tr",align:null},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"object encapsulating an encryption key pair")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.CryptoKey.new()")," function creates a new ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.CryptoKey")," object encapsulating an encryption key pair, based upon the ",(0,r.kt)("em",{parentName:"p"},"settings")," object parameter. It allows to generate a new RSA or ECDSA key, or to load an existing key pair from a PEM definition."),(0,r.kt)("h4",{id:"settings"},(0,r.kt)("em",{parentName:"h4"},"settings")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#type"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the type of the key to create: ",(0,r.kt)("li",null,'"RSA": generates a RSA key pair, using ',(0,r.kt)("a",{parentName:"td",href:"#size"},".size")," as size."),(0,r.kt)("li",null,'"ECDSA": generates an Elliptic Curve Digital Signature Algorithm key pair, using ',(0,r.kt)("a",{parentName:"td",href:"#curve"},".curve")," as curve. Note that ECDSA keys cannot be used for encryption but only for signature."),(0,r.kt)("li",null,'"PEM": loads a key pair definition in PEM format, using ',(0,r.kt)("a",{parentName:"td",href:"#pem"},".pem"),"."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#curve"},"curve")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of ECDSA curve")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#pem"},"pem")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"PEM definition of an encryption key to load")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#size"},"size")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of RSA key in bits")))),(0,r.kt)("h4",{id:"cryptokey"},(0,r.kt)("em",{parentName:"h4"},"CryptoKey")),(0,r.kt)("p",null,"The returned ",(0,r.kt)("inlineCode",{parentName:"p"},"CryptoKey")," object encapsulates an encryption key pair. It is a shared object and can therefore be used by multiple processes simultaneously."),(0,r.kt)("h2",{id:"curve"},".curve"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".curve")," : string"),(0,r.kt)("p",null,'Defined only for ECDSA keys: the normalised curve name of the key. Usually "prime256v1" for ES256 (default), "secp384r1" for ES384, "secp521r1" for ES512.'),(0,r.kt)("h2",{id:"decrypt"},".decrypt()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".decrypt"),"( ",(0,r.kt)("em",{parentName:"p"},"message")," : string , ",(0,r.kt)("em",{parentName:"p"},"options")," : object ) : object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Message string to be decoded using ",(0,r.kt)("inlineCode",{parentName:"td"},"options.encodingEncrypted")," and decrypted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Decoding options")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Status")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".decrypt()")," function decrypts the ",(0,r.kt)("em",{parentName:"p"},"message")," parameter using the ",(0,r.kt)("strong",{parentName:"p"},"private")," key. The algorithm used depends on the type of the key."),(0,r.kt)("p",null,"The key must be a RSA key, the algorithm is RSA-OAEP (see ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc3447"},"RFC 3447"),")."),(0,r.kt)("h4",{id:"options"},(0,r.kt)("em",{parentName:"h4"},"options")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hash"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"encodingEncrypted"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Encoding used to convert the ",(0,r.kt)("inlineCode",{parentName:"td"},"message"),' parameter into the binary representation to decrypt. Can be "Base64" or "Base64URL". Default is "Base64".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"encodingDecrypted"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'Encoding used to convert the binary decrypted message into the result string. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".')))),(0,r.kt)("h4",{id:"result"},(0,r.kt)("em",{parentName:"h4"},"Result")),(0,r.kt)("p",null,"The function returns a status object with ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," property set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the ",(0,r.kt)("em",{parentName:"p"},"message")," could be successfully decrypted."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"success"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"True if the message has been successfully decrypted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Message decrypted and decoded using the ",(0,r.kt)("inlineCode",{parentName:"td"},"options.encodingDecrypted"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errors"),(0,r.kt)("td",{parentName:"tr",align:null},"collection"),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"success")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", may contain a collection of errors")))),(0,r.kt)("p",null,"In case the ",(0,r.kt)("em",{parentName:"p"},"message")," couldn't be decrypted because it was not encrypted with the same key or algorithm, the ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," object being returned contains an error collection in ",(0,r.kt)("inlineCode",{parentName:"p"},"status.errors"),"."),(0,r.kt)("h2",{id:"encrypt"},".encrypt()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".encrypt"),"( ",(0,r.kt)("em",{parentName:"p"},"message")," : string , ",(0,r.kt)("em",{parentName:"p"},"options")," : object ) : string"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Message string to be encoded using ",(0,r.kt)("inlineCode",{parentName:"td"},"options.encodingDecrypted")," and encrypted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Encoding options")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Message encrypted and encoded using the ",(0,r.kt)("inlineCode",{parentName:"td"},"options.encodingEncrypted"))))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".encrypt()")," function encrypts the ",(0,r.kt)("em",{parentName:"p"},"message")," parameter using the ",(0,r.kt)("strong",{parentName:"p"},"public")," key. The algorithm used depends on the type of the key."),(0,r.kt)("p",null,"The key must be a RSA key, the algorithm is RSA-OAEP (see ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc3447"},"RFC 3447"),")."),(0,r.kt)("h5",{id:"options-1"},(0,r.kt)("em",{parentName:"h5"},"options")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hash"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"encodingEncrypted"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"encodingDecrypted"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Encoding used to convert the ",(0,r.kt)("inlineCode",{parentName:"td"},"message"),' parameter into the binary representation to encrypt. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".')))),(0,r.kt)("h4",{id:"result-1"},(0,r.kt)("em",{parentName:"h4"},"Result")),(0,r.kt)("p",null,"The returned value is an encrypted message."),(0,r.kt)("h2",{id:"getprivatekey"},".getPrivateKey()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".getPrivateKey"),"() : string"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Private key in PEM format")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".getPrivateKey()")," function  returns the private key of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CryptoKey")," object in PEM format, or an empty string if none is available."),(0,r.kt)("h4",{id:"result-2"},(0,r.kt)("em",{parentName:"h4"},"Result")),(0,r.kt)("p",null,"The returned value is the private key."),(0,r.kt)("h2",{id:"getpublickey"},".getPublicKey()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".getPublicKey"),"() : string"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Public key in PEM format")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".getPublicKey()")," function returns the public key of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CryptoKey")," object in PEM format, or an empty string if none is available."),(0,r.kt)("h4",{id:"result-3"},(0,r.kt)("em",{parentName:"h4"},"Result")),(0,r.kt)("p",null,"The returned value is the public key."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"pem"},".pem"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".pem")," : string"),(0,r.kt)("p",null,"PEM definition of an encryption key to load. If the key is a private key, the RSA or ECDSA public key will be deduced from it. "),(0,r.kt)("h2",{id:"sign"},".sign()"),(0,r.kt)("p",null,".",(0,r.kt)("strong",{parentName:"p"},"sign")," (",(0,r.kt)("em",{parentName:"p"},"message")," : string , ",(0,r.kt)("em",{parentName:"p"},"options")," : string) : string"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Message string to sign")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Signing options")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},'Signature in Base64 or Base64URL representation, depending on "encoding" option')))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".sign()")," function signs the utf8 representation of a ",(0,r.kt)("em",{parentName:"p"},"message")," string using the ",(0,r.kt)("inlineCode",{parentName:"p"},"CryptoKey")," object keys and provided ",(0,r.kt)("em",{parentName:"p"},"options"),". It returns its signature in base64 or base64URL format, depending on the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"options.encoding")," attribute you passed."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CryptoKey")," must contain a valid ",(0,r.kt)("strong",{parentName:"p"},"private")," key."),(0,r.kt)("h4",{id:"options-2"},(0,r.kt)("em",{parentName:"h4"},"options")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hash"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"encodingEncrypted"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pss"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," when producing a JWT for PS@ algorithm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"encoding"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'Representation to be used for result signature. Possible values: "Base64" or "Base64URL". Default is "Base64".')))),(0,r.kt)("h4",{id:"result-4"},(0,r.kt)("em",{parentName:"h4"},"Result")),(0,r.kt)("p",null,"The utf8 representation of the ",(0,r.kt)("em",{parentName:"p"},"message")," string."),(0,r.kt)("h2",{id:"size"},".size"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".size")," : integer"),(0,r.kt)("p",null,"Defined only for RSA keys: the size of the key in bits. Typically 2048 (default)."),(0,r.kt)("h2",{id:"type"},".type"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".type")," : string"),(0,r.kt)("p",null,'Contains the name of the key type - "RSA", "ECDSA", "PEM" . '),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"RSA": an RSA key pair, using ',(0,r.kt)("inlineCode",{parentName:"li"},"settings.size")," as ",(0,r.kt)("a",{parentName:"li",href:"#size"},".size"),"."),(0,r.kt)("li",{parentName:"ul"},'"ECDSA": an Elliptic Curve Digital Signature Algorithm key pair, using ',(0,r.kt)("inlineCode",{parentName:"li"},"settings.curve")," as ",(0,r.kt)("a",{parentName:"li",href:"#curve"},".curve"),". Note that ECDSA keys cannot be used for encryption but only for signature."),(0,r.kt)("li",{parentName:"ul"},'"PEM": a key pair definition in PEM format, using ',(0,r.kt)("inlineCode",{parentName:"li"},"settings.pem")," as ",(0,r.kt)("a",{parentName:"li",href:"#pem"},".pem"),".")),(0,r.kt)("h2",{id:"verify"},".verify()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".verify"),"( ",(0,r.kt)("em",{parentName:"p"},"message")," : string , ",(0,r.kt)("em",{parentName:"p"},"signature")," : string , ",(0,r.kt)("em",{parentName:"p"},"options")," : object) : object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Message string that was used to produce the signature")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"signature"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Signature to verify, in Base64 or Base64URL representation, depending on ",(0,r.kt)("inlineCode",{parentName:"td"},"options.encoding")," value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Signing options")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the verification")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".verify()")," function verifies the base64 signature against the utf8 representation of ",(0,r.kt)("em",{parentName:"p"},"message")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"CryptoKey")," object keys and provided ",(0,r.kt)("em",{parentName:"p"},"options"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CryptoKey")," must contain a valid ",(0,r.kt)("strong",{parentName:"p"},"public")," key."),(0,r.kt)("h4",{id:"options-3"},(0,r.kt)("em",{parentName:"h4"},"options")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hash"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},'Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pss"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," when verifying a JWT for PS@ algorithm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"encoding"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},'Representation of provided signature. Possible values are "Base64" or "Base64URL". Default is "Base64".')))),(0,r.kt)("h4",{id:"result-5"},(0,r.kt)("em",{parentName:"h4"},"Result")),(0,r.kt)("p",null,"The function returns a status object with ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," property set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," could be successfully verified (i.e. the signature matches)."),(0,r.kt)("p",null,"In case the signature couldn't be verified because it was not signed with the same ",(0,r.kt)("em",{parentName:"p"},"message"),", key or algorithm, the ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," object being returned contains an error collection in ",(0,r.kt)("inlineCode",{parentName:"p"},"status.errors"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"success"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"True if the signature matches the message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errors"),(0,r.kt)("td",{parentName:"tr",align:null},"collection"),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"success")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", may contain a collection of errors")))))}k.isMDXComponent=!0}}]);
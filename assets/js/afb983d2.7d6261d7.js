"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[7568],{3905:(e,A,t)=>{t.d(A,{Zo:()=>p,kt:()=>c});var o=t(67294);function a(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function n(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);A&&(o=o.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?n(Object(t),!0).forEach((function(A){a(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function s(e,A){if(null==e)return{};var t,o,a=function(e,A){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],A.indexOf(t)>=0||(a[t]=e[t]);return a}(e,A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),i=function(e){var A=o.useContext(l),t=A;return e&&(t="function"==typeof e?e(A):r(r({},A),e)),t},p=function(e){var A=i(e.components);return o.createElement(l.Provider,{value:A},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var A=e.children;return o.createElement(o.Fragment,{},A)}},m=o.forwardRef((function(e,A){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(t),m=a,c=d["".concat(l,".").concat(m)]||d[m]||u[m]||n;return t?o.createElement(c,r(r({ref:A},p),{},{components:t})):o.createElement(c,r({ref:A},p))}));function c(e,A){var t=arguments,a=A&&A.mdxType;if("string"==typeof e||a){var n=t.length,r=new Array(n);r[0]=m;var s={};for(var l in A)hasOwnProperty.call(A,l)&&(s[l]=A[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var i=2;i<n;i++)r[i]=t[i];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98988:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>i});var o=t(87462),a=(t(67294),t(3905));const n={id:"settings",title:"Settings"},r=void 0,s={unversionedId:"studio/settings",id:"studio/settings",title:"Settings",description:"The Settings panel allows you to customize the Qodly Studio interface for the current user and the current application.",source:"@site/docs/studio/settings.md",sourceDirName:"studio",slug:"/studio/settings",permalink:"/docs/studio/settings",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/settings.md",tags:[],version:"current",frontMatter:{id:"settings",title:"Settings"},sidebar:"Develop",previous:{title:"Webform Rendering",permalink:"/docs/studio/rendering"},next:{title:"Data Explorer",permalink:"/docs/data-explorer/"}},l={},i=[{value:"User",id:"user",level:2},{value:"Show Renderer Pop Over",id:"show-renderer-pop-over",level:3},{value:"Show Unsaved Files Pop Over",id:"show-unsaved-files-pop-over",level:3},{value:"Tooltip Behavior",id:"tooltip-behavior",level:3},{value:"Tooltip timeout (in seconds)",id:"tooltip-timeout-in-seconds",level:3},{value:"Enable Helper Tips",id:"enable-helper-tips",level:3},{value:"Activate Welcome Tour",id:"activate-welcome-tour",level:3},{value:"Activate tabs preview mode",id:"activate-tabs-preview-mode",level:3},{value:"Application",id:"application",level:2},{value:"Start Page",id:"start-page",level:3},{value:"Default Display Mode",id:"default-display-mode",level:3}],p={toc:i};function d(e){let{components:A,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:A,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Settings panel allows you to customize the Qodly Studio interface for the current user and the current application. "),(0,a.kt)("p",null,"To open the Settings panel, click on the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," button from the Explorer or the toolbar:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"settings",src:t(79407).Z,width:"94",height:"33"})),(0,a.kt)("p",null,"The following pages are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"User"),": settings related to the user interface"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Application"),": settings related to the web application")),(0,a.kt)("p",null,"You select a page by clicking its label in the top left area of the panel:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"settings selector",src:t(40996).Z,width:"791",height:"496"})),(0,a.kt)("h2",{id:"user"},"User"),(0,a.kt)("p",null,"This page contains settings related to the Qodly Studio user interface."),(0,a.kt)("h3",{id:"show-renderer-pop-over"},"Show Renderer Pop Over"),(0,a.kt)("p",null,"Displays or not the pop over when the ",(0,a.kt)("a",{parentName:"p",href:"/docs/studio/rendering"},"renderer")," and Qodly Studio use different URL schemes."),(0,a.kt)("h3",{id:"show-unsaved-files-pop-over"},"Show Unsaved Files Pop Over"),(0,a.kt)("p",null,"Displays or not the pop over when you click on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/studio/rendering#preview-the-entire-site"},(0,a.kt)("strong",{parentName:"a"},"Preview")," button")," whereas all changes made to your forms have not been saved:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"preview-pop-over",src:t(54542).Z,width:"291",height:"210"})),(0,a.kt)("p",null,"Since unsaved changes will not be rendered, it is usually useful to be warned."),(0,a.kt)("h3",{id:"tooltip-behavior"},"Tooltip Behavior"),(0,a.kt)("p",null,"Defines how to display the ",(0,a.kt)("a",{parentName:"p",href:"/docs/studio/design-webforms/components/componentsBasics#tooltip"},"component tooltip")," ",(0,a.kt)("img",{alt:"tooltip",src:t(27064).Z,width:"117",height:"41"})," when the mouse hovers a component area."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Show after timeout"),": The tooltip is displayed after a the defined timeout (and kept onscreen until the user moves the mouse). "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hide after timeout"),": The tooltip is immediately displayed and hidden after a the defined timeout.")),(0,a.kt)("h3",{id:"tooltip-timeout-in-seconds"},"Tooltip timeout (in seconds)"),(0,a.kt)("p",null,"Timeout for selected tooltip behavior."),(0,a.kt)("h3",{id:"enable-helper-tips"},"Enable Helper Tips"),(0,a.kt)("p",null,"Shows or hides the tips icons ",(0,a.kt)("img",{alt:"helper",src:t(94819).Z,width:"17",height:"23"})," in the webform editor."),(0,a.kt)("h3",{id:"activate-welcome-tour"},"Activate Welcome Tour"),(0,a.kt)("p",null,"Enables or disables the display of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/quickstart#step-3-navigate-qodly-studio-and-begin-the-welcome-tour"},"Welcome tour dialog boxes")," that introduce you to the main features of the Qodly Studio. "),(0,a.kt)("h3",{id:"activate-tabs-preview-mode"},"Activate tabs preview mode"),(0,a.kt)("p",null,"Enables or disables the ",(0,a.kt)("a",{parentName:"p",href:"/docs/studio/overview#preview-mode"},(0,a.kt)("strong",{parentName:"a"},"Tabs preview mode")),", which allows you to open and preview your Qodly files (webforms, model, classes, methods, or any other file) in a single tab. As a result, this option can reduce drastically the number of opened tabs in your project."),(0,a.kt)("h2",{id:"application"},"Application"),(0,a.kt)("p",null,"This page contains settings related to your web application."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"settings selector",src:t(28783).Z,width:"819",height:"165"})),(0,a.kt)("h3",{id:"start-page"},"Start Page"),(0,a.kt)("p",null,"Allows to select a webform to use as the start page of your application. "),(0,a.kt)("p",null,"The start page webform is automatically rendered when:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"you click on the ",(0,a.kt)("strong",{parentName:"li"},"Preview")," button in the webform editor - the webform is rendered in a new tab."),(0,a.kt)("li",{parentName:"ul"},"you click on the ",(0,a.kt)("strong",{parentName:"li"},"Preview URL")," area in the Qodly Cloud dashboard of your application. ")),(0,a.kt)("h3",{id:"default-display-mode"},"Default Display Mode"),(0,a.kt)("p",null,"Allows to select the default mode for displaying multiple components in your webforms:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Neutral")," (default): no specific margins are applied to components"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Airy"),": automatically incorporate default margins between components, for a better design. ")),(0,a.kt)("p",null,"The display mode can also be selected at the webform level."))}d.isMDXComponent=!0},94819:(e,A,t)=>{t.d(A,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAXCAYAAADtNKTnAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAC4SURBVDhPY7S3t//PQCFggtIUgVFDMAHtDVGQZgJjQgBrOrE2YmaI9WdhUFNgBPNvPfjPsHjjH4aj5/6C+egAwxoOdkaG7GiEASAAYoPEQHLYAIYhshKMDBIimIpBYiA5bADDkGevcOcCXHIYhnz9/p9h3wlMv4PEQHLYALOCgkIDlA0Hh878Y/gPhAaazGD+gvW/GSYv+QNmYwOE448IQPuiICOChSElhAXKww1GCyVMMFgMYWAAABpmL9tq7KKQAAAAAElFTkSuQmCC"},54542:(e,A,t)=>{t.d(A,{Z:()=>o});const o=t.p+"assets/images/preview-pop-a56b93543d85363e1b355e8919afed2b.png"},28783:(e,A,t)=>{t.d(A,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAzMAAAClCAYAAABofKN1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACZOSURBVHhe7d2PbxzVvffx56/p35Dg/CbUIeAkbAyC/rAwChARKwQ3oCgkBl8wAmoo1yC6pER+grCSsk9K6gSXTUs2TeK07oYq6eomLEqetRTZvaF7a6lbRc+W3Pt9zvfMzO7s7ux6bc+ObfJe6aXuzDlzzlljq/PJOWf2f61YsUKAMHzve98LPA8AAAC0AmEGoSHMAAAAIEqEGYSGMAMAAIAoEWYQGsIMAAAAokSYQWgIMwAAAIgSYQahIcwAAAAgSoQZhIYwAwAAgCgRZhAawgwAAACiRJhBaAgzAAAAiBJhBqEhzAAAACBKhBmEhjADAACAKBFmEBrCDAAAAKJEmEFoCDMAAACI0hzCTJusa++QWGy7bI/FpKN9nbQF1sPdijADAACAKDUdZta0b5Pt202Q8dnWviawblPaNsjmrZtlQ1t12Rr5fuB5LHWEGQAAAESpyTCzVtp1RqYqzGyPtcvawPpNaNsoHds7ZGNNaDF9BZ7HUkeYAQAAQJSWQZhZKavvvV8e3LpVtnY8IO33rpaV/vptq2T9xs11y1dtaJf2Debc2o2y+UFmfFqJMAMAAIAoLeIys+bCjPYb29IuG9asltXrTCDZtl22blzl1F1p6m6LydbNG2Xd6lWyeu0Gad8Sk9iDG2WV297aTWas27bJ1m0PyP2bNspawkzLEGYAAAAQpebCTNsaWb9uvayveACAOTbn1sw3HDQVZlbJxo7tssULL4bOsLRvXGtnX9a0m+CyeX3lTI0bcDavW2mPnTDTLmv8ddAShBkAAABEafYws6ZdtrkzMbGtOrvRLu2b7pcHtsbcGZpt0r4m4LrZNDkzs+peDVBb5YH7NsiaVU5AcThBZ+umDbJu3Tqf9fL9B7dLx71OALJhZtM633VoFcIMAAAAojRrmFm7yQst9cXur5odacYcHgCwctVa2dj+gGzZZsYS2yLfX6uhxg0zD2i4qrXR1vHCzNpSW2gdwgwAAACiNEuYWSX3ba0NLzXmtYzLhJZYTNrXVp1fdZ9s3f6ArHfDzMq2lRVBqe3eB2V7h+6JWSnr74/J1vtWl6+12mT1unWyxlynx4SZ6BBmAAAAEKVZwozOklQFl0Dze6qZfajA1nZZ5y0fa1sj9z3o3wfTJhse3C7bNq0rBZpVGzvcMGOOdQlcbIsJRG1umytl9fc7JLbtflm30qlPmIkOYQYAAABRmiXMrJH2bdXBJcC8N9i3yTrvoQLajj5YYNP60pPIrLZ10t5RXuoW27ZZ1q8ql69c+33p0OVnXvnWynLCTHQIMwAAAIjSrHtmVq5tl61B3zHjiW2VzevLTxtrnZWy0p1tCbSycjkaokeYAQAAQJRmDTNAswgzAAAAiBJhBqEhzAAAACBKhBmEhjADAACAKBFmEBrCDAAAAKJEmEFoCDMAAACIEmEGoSHMAAAAIEqEGYSGMAMAAIAoEWYQGsIMAAAAokSYQWgIMwAAAIgSYQahIcwAAAAgSoQZhIYwAwAAgCgRZhAawgwAAACiRJhBaAgzAAAAiBJhBqEhzAAAACBKhBmEhjADAACAKBFmEBrCDAAAAKJEmEFoCDMAAACIEmEGoSHMAAAAIEqEGYSGMAMAAIAoEWYQGsIMAAAAokSYQWgIMwAAAIgSYQahIcwAAAAgSoQZhIYwAwAAgCg1EWa6ZOBISjKTeSncLkr1q3i7IPnJjKSODEhX4PW4WxBmAAAAEKVZwsyQjOfd1NLMKz8uQ4HtLCUDMjyWlOFXneOeo2nJXR6VgZp6YRuS5NWsjB/uCSj7biDMAAAAIEqzhJlRybk5pblXTkYD22nSxxk7+5Mba+UNv/OZcied4/hlnW1a4LgDxM/mJHc2Xj63OylTpqfCxGBFve8SwgwAAACitIRmZmKS+Npt52ZSegLrhKEyzLTK6KTpZHI0sOy7ijADAACAKM0SZnqld+8c9szsNfUD22lCZ0Kyd0zIuJyRouRlvL+y3JvpiL2ZkPRkwfRblMKtrKQO9Zbr9Y9K5kZGRvt7Tf2s5AtFO77cpYQMdnptVYaZvhMZu8ysz2tjRZcMnkhL7pbbx3RGkm91uWWO2MFhSV11fh7FmZykjw9K7FCq1I6ONX/bdHI7L7kb3gxNXFLmfepQuZ0V3YOSvDzltGPHOSqD3eVyb2xDH4+XxzM5LiMHY+U2lhDCDAAAAKLUxDIzEy1upCX1SVz6TEio3OTfJb39fRL/JCXpG3kp3pn/cq3YSRMx7mQl0RmXjAkC+YsDFeV2pqNQkMIdc9N/MSnJsaSM3yhonDLBxA0076TF3PJLYcaEAxNCUqZO8ouMTGkGm0nLkA00lWFm6JJpo2DKbD8x59j2kZD4+wlJXTafS/s44S5922uu1/YKORnX9sdM0DCX5PP5UjsDR5KS0RmtvAlCWscEvZoZIbedYj5b0Y4Uzc9wr29sd0zv2teJhCROeHWyMlIKZ0sHYQYAAABRWiLLzHokedNc/3VCYubY3sSbtvyb8m2YMVEl/a5/VsINH7czEtdjG2bM62aycoZob1Km7ohMndZA0iDM9I+LftzsJ5V9jGRMRJpMyj5zPKJL4bS+P0x0DklaOy6FoqBlZpX9jlw1SaZOO8XLzl4bOzYzopQbbix3703u5NKbnSHMAAAAIEpLY5nZ7pS9Qc8edY9f1VBhgss75To2HEynavfSvKsBxq3rzsxkDlfVMYHEhiUbLhqEGZ0dMqX1Z5ecsBG0iX9wwteO0TjM1G/HjmcmLYPee1+bDvfaS0O+c0sDYQYAAABRWhLLzPrO5+3SqVHTVp81LJmZ8gyFsuHgZtLO3PivdQKMP8zo7E1VHaMcLmYJM3eyMuK7rpITJPLn+2rK7GeYY5gJasc/HsIMAAAAUN8SWGY24PRR1E3wPjoJdDsjw249Gw7snprK63u/sIuuZFTPu8vMqvfbrOg04ei2FwAahJlD7sMH3O+g8fQeGpXk8SHp8ZbD1TxtzT3fdJipXFZXrtMrqWnnutJyO8LMrNa0rZcdW16Qf/vxR/LBznNybM9XcuInNy19r+e0TOto3aA2AAAAsPws/jIzu6SsKBn/U75U1dIzJ8yYm/hb4zK8S/eLmHF9kpG8njM39jYUeHtmigXJnjDjMediu4YkddOM+86UJO3ekwZhxgtWM2m3jxXS9ZYZh25vmXDCQ+xo1ozWRJ5LCRnQJ491D0jikvnZaPryBQ+7t8aM1dax5yr7jR3W4FSUqbMmJGkQ03Yua+fl5XWEmcY6NjxiQ4qGll/vnWqK1tVr9NqgNgEAiFpbW5vcc889snLlSuCuob/z+rsf9DcxF4u+zMx+aWXNDbuqnL1wZjqSEr84Zfox791X4WqiHKC8ZWZHE5KdcSvo6/aUjJceHNAozBjdcRmf9oc2EzgujfhCWkz6jmel4BtDcXpchsZMq/523jEhSB/PrK+A5W2q9+O086Q172XGmf64/Khpwkx9+x97PzCszIW2EdQ2AABR0Bu59evXS0dHh2zfvh246+jvvv4NLCTULIFlZs2pXLYVk5791cHK8O+f0ePuXtnnzrDMWWeP7NvfU7tHx6dr7z5nViWgbC5iu/ZJr+/7ZZarKMKMzqjosrGgcDIf2hazNACAqOnN26ZNmwJv8IC7jf4tzDfQzBJm1ByWmQVeH47aPSgBqsMMItXqMPNwe7cc25MNDCULoW1q20F9AgDQCvqv0UE3dcDdSv8mgv5WZtNEmFkaCDNLXyvDjM6etCLIeLRtZmgAAFHQf4FmaRlQSf8m5jM7s2zCTPxsTnJny49qDtQ/KpkbGRntDyhDy7UyzIS5tKwe7SOobwAAwqQbn4Nu5oC7nf5tBP3NNLJswgyWvlaFmTA2+zeLhwIAAFpNn+QUdCMH3O30byPob6YRwgxC04owo0u/gkJHK7HcDADQSoQZIBhhBouqFWFGvxMmKHC0kvYZNBYAAMKw1MLMU/tfkTfefKPGK/ufCqwPtAphBosq7DCj39Y/ly/EDIv2qX0HjQkAgIWqG2bePyeT33wjV34dUBaKT+WKaX/yfLzifPz8pHxjzlerrhet4LGisc7OTnnuuefs/86lLMilS5cCz7cSYQaLKuwws2PLC4Fho54/HfkvSX/098CyudK+g8ZUq0sGx7KSLxSleNuYycn40b7y9xOF/VCKQynJ3UhJPKgMALAsLM0wc0U+9Z1bfISZ+RgcHLQhJB6v/bl98MEHtuzNN9+sKQtCmMFdJ+wwM9clZvI/9quP5G/X/5988eatwDrNanap2cD5vEgxL5kTcenrj8voVf2W2aJkj7pf1hr248JP5kz7ORkNKgMALAuBYea9M3Jt2p0VmZ6W6ZtGOlEu7x2SU+nrMmnOf/NXUzZ5Xb48OSR7/G14dbQd08Zk9ks59e/eUrGEfKnXavt6vbZ/7YwMmbKGYeb9M3Ld1L1y8sWashdPXjHtXJPTP3PP7XxDRlJX7Bin//qNKZuUK6kReWNn+Zqh310z57+UT18fkXPXJm29b6Yn5Xr6lAz1evWCx+q1gfqGhoZsCFGvv/566bwGGO/822+/XXFNPYQZ3HXCDjNzehzz8ybM+F7/898i//fCP2XswF+D68+iucc0D0p6RqRwach3bkBGMznJfhF3ZmVuFux4CjdzkvPP0HT2yfBZb0anILlLCRnsjEuqVEff5yR1pE8Sl6akMD0ugzorc0u/uLYoeVNWb4bGe4x57M2EpCcLdsaocCsrqUO9FfViB4clZcKXfhmuziiljw9KTPu4PCp9pXpdMngiLbkZZ5z5q6bPvX0yetmM7VBVW5fNOLWtQl5yF0ekr7NcDgAoCwwzB+KSMEFg2tzAX584JadOGh+5N50HPpUrNqBck4nPnbIzJrRo3enLn8qLto235cx1rXPdrXNGrkya429M2Oh3yo+cnJDres1fzjjt/5+4vbbxzIzb7rXTbj+eF+X0NXP++hl52x7HnXp/1QDjjPH0eRNsNKyYOnH3OqcvE05M2Lr2h9NuvWt2Ruqb3Dm3XvBYy32jHl1ClkgkbBBJp9Oyf/9+OXjwoH2v57QszGVm/f39ts2dO3cGlist0zovv/xyYLkfYQaLKuwwc2zPV4FBI1BVmPFexX/+t1xOzNjywOvq0L6DxlSpR1LTppObSekNKt89JImLORM9iubmPinJsYQM7dayXhmdNKHkjgkx9nxSxm+Y0JPPi4kW7izOqOgcTLFors6bcKIB49VhSWZ05icvGXNNcmxYBgL6tV8wWyhIobp9HcdJN9DsNe1rLirkZNy2NS45OwTTfiEtQ7atmAxdcq6bupyy7WhgKRbNOM3p3Em3T7et4nRGkkfiMnzCaUtmvHYAAH6BYUbVWWb24R90NuaanLKhpOylk9dsMJg4rMfOsqxrJ/eU6xw4JVd0VuWzV9xzjZaZmdBT8QCAV+RFd0bljd9dN+XX5cyb5Wu2D56xYePaZ86MzYuf6Vgm5Vy88qEBT8Wdz+TVc/oyx5+/VFHvpc/1+m/ky6PeOZaZzddjjz0mv/nNb2wY+eMf/yh/+tOf7PvPPvtMHn300cBrgjQTZn71q1/ZehcuXJBnnnmmplzPaZnWOXbsWE15NcIMFlXYYWaum/8bvfI3ioHX1KN9B42pWuzdtOTvmA6KBXPDPy6Jd3vK+2VU0DKzo1lzgTn3rrsUzfKCQ2WYka8Tle01sczMhpl67d/O2Nmcka+1igkb/tmTziFJ2yG4IaR/3MQmkamxyhmd3jHnZ+2FGdvWdKoy0O024zc/l6nTPeVzAABrbmEmLud0huXPI75zHv8N/4cycdPUm7wip37xUuXys8D65fNewKhkgsn7bh0Tiq6Zc9dT5eVJb6dMwPnrl5KwgecpOfUf5prrZ+QNt7zMHf9fPrXHpeB0oKregdNOH797wz1HmFmIxx9/XM6fP29DhPr9738vXV1dgXXraSbMPPvss6WwdPHiRdm9e3epTN/rOS2bmJioKKuHMINFdTeGGat7QIbH0pKdLkhRg00hK4m9bllAmLGhYiYtg971nrf8dZ0wMzXmDyRGs2HGhIue6jITvJz2ndBSmBisLDcGJ7TADTN1+3LG5oQZp63i5LidufHL1izBAwCouYUZ56a+NmyUeTf8T72ekIlsea/J5F/Oyafv+WZqGoaZRg8AeEoSfzZtTnrLwNzgVApYbmDxjalGRZgJ6qt6bISZhdAwowGm1WFGPf/886XZlz/84Q/2iWm9vb32vZ47d+6cPRd0bTXCDBbV3bfMLEB3XDI6u/H1iHNcL8zkx337Ulx2JqQyzJSWcnmaDTM3k5UzOqo0FieA5M/3VZYbffpAA3+YuZOVkao6K1aMSNaEtoowo0vh7D6eSpkTtX0AwN1ubmHmiA0O0xMJ3xKwSjXfB9P7knz4yzPy5XUNNv6lX/MNM8b/npBpb0nbYd97W+7un7l2Wt4OGJ/V74Qqwkzr6TKzzz//3AYJ/zKzsbGx0JeZeTSs6OyLXqP/673XmZmg5Wf1EGawqJbaAwBunG/1AwCcjfCZkwMV521YuZWSfXocEGZ6TutYpyRp989Unw8pzJgQkqjagN/7hbZvru3skeRN89YEnsrZG/e8F2YOZex+n4xvo79lz3tjc64pXh2pCk86W5WUxDs7fOcAAGpuYcadFbk5IUd8TwVTTx2dsE8Om/ilOX7vlHx5+YqcLgUMNSJfTs8eEJoKM+5szPTEETkyYUJSaeO/wy47Kz1swGfwtFwzY7x22lmiRphpragfAOC3Z8+eiqVtqVRKdu3aFVi3HsIMFlXYYWa+j2bWJWVnfhrFo5ljMvK17nzPSfLVLnuu69Wk3QyfP+8GHDvbUpTsJ769NJ0jktXLbqUlYa/rkoFP0mKfbDZbmLH7bfIy7vYXxAkzJpPcGpfhXbpMTdvP2L09uuxLxxEz7Whv+UsJGeg213UPSOJSXgpFMzAvzJhAMq6bZgrm89m9QDHpedd8Ph1naWbGa6sg2RMD0qXXdfbJiE5P3TGBzVtuBwAoqRtmdjo38NP/cVo+9M1meJvtp7PnJPHeK/Li/pdk6Jfn5Lo+4cx7AthOJ7h8k5uwdV7qf0U+PH3NPvHM23xfWg5m65j2B16Up8x5J2BUPwCgdsbH2SfjPHb52udVj2r2+rd7dt6Ql/a/KK/84pTzRLVpE17cPTLNh5nasVbWRxDve2aU/9HMP/3pT0vn33jD25fUmNYNOt/Ijh07bIj57W9/Kz/+8Y8D6zRCmMGiCjvMzOdLM1VQ2Vw1/aWZnYOStE8KK78KVxO+zfA9zo29U1KaoYkdTNg9JaXX7SkZ16AwW5hZMSSpaZ0X0VfwDI0NM5NJiV+ccvbwuK/KccWk73hWCr7y4vS4DI2ZXkthxuiOy3ipP/O6k5fMxyN2aVl5bLVtOZ+nar8PAMCqG2a2PyVx/R4WfZyxubH39pmop/7dBIOce941+RcTekrfzRJUZ1qunR+Rl9xy9dIvv3Qel6zl7h4YJ2D4r3PUzIq4DwLQ4HOqegO/6tfvjnH37Limr5sw8no5FDUfZmrHWlkfQX72s5/ZEPLee+/VlP385z+3ZRpsqsuCzCfMLBRhBosq7DCzpm39nB8CEAbtU/sOGlPountln509CSibJyfMjLrHMenZ3+vMmNTRtXef9Mz2nTCdPbJvrzcb5N8zU6lrb5/06kxP1XkAQFn9MNOE3pfkjTfrPa3M1UydVtr5orzie7QzoqWb/4POq0Zl1QgzuOuEHWbUXJeahaHZb/9fqirDzELEJZ0vytTZyj1BscO6Z6ZyHxAAoHkLCjPAdxhhBouqFWGmY8MjgYGjlbTPoLEsF+GFmRXSe9L50s/8VffRyxdzdjlZ8cZo7aOfAQBNIcwAwQgzWFStCDNq/2PvB4aOVtC+gsawnMTP5iR3Nh5YNncx6TucksxkXgq3TayZmZLM2GDDZWsAgMYIM0AwwgwWVavCjJrTY5rnqbnHMQMAsDD33HNP4I0ccLfTv42gv5lGCDMITSvDjC79OrYnGxhCwqBtL/flZQCA5aGtrU06OjoCb+aAu5X+TejfRtDfTCOEGYSmlWFGPdze3ZJAo21q20F9AgDQCuvXrw+8oQPuVvo3EfS3MhvCDELT6jCjdPYkzCVn2hYzMgCAqOm/QG/atCnwpg642+jfwnxmZRRhBqGJIsx4wngowHdhsz8AYPnSmzf912iWnOFupb/7+jcw3yCjCDMITZRhRumMin4nzFy+WFPr6jXMxgAAlgq9kdONz/okJ+Buob/zCwkxHsIMQhN1mPHot/Xv2PKCDSm6bOzYnq9saFH6Xs9pmdaJ7Jv9AQAA0HKEGYRmscIMAAAA7k6EGYSGMAMAAIAoEWYQGsIMAAAAokSYQWgIMwAAAIgSYQahIcwAAAAgSoQZhIYwAwAAgCgRZhAawgwAAACiRJhBaAgzAAAAiBJhBqEhzAAAACBKhBmEhjADAACAKBFmEBrCDAAAAKJEmEFoCDMAAACIEmEGoSHMAAAAIEqEGYSGMAMAAIAoEWYQGsIMAAAAokSYQWgIMwAAAIgSYQahIcwAAAAgSoQZhIYwAwAAgCgRZhAawgwAAACiRJhBaAgzAAAAiBJhBqEhzAAAACBKhBmEhjADAACAKBFmEBrCDAAAAKJEmEFoCDMAAACIEmEGoSHMAAAAIEqEGYSGMAMAAIAoEWYQGsIMAAAAokSYQWgIMwAAAIgSYQahIcwAAAAgSoQZhIYwAwAAgCgRZhAawgwAAACiRJhBaAgzAAAAiBJhBqFZrDCzpm297Njygvzbjz+SD3aek2N7vpITP7lp6Xs9p2VaR+sGtQEAAIDlhzCD0EQdZjo2PGJDioaWX++daorW1Wv02qA2AQAAsHwQZhCaKMPM/sfeDwwrc6FtBLUNAACA5YEwg9BEEWZ0RkWXjQWFk/nQtpilAQAAWJ4IMwhNq8PMw+3dcmxPNjCULIS2qW0H9QkAAIClizCD0LQyzOjsSSuCjEfbZoYGAABgeSHMIDStDDNhLi2rR/sI6hsAAABLE2EGoWlVmAljs3+zeCgAAADA8kGYQWhaEWZ06VdQ6FDpj/4uhW++lbm+9Bq9NqhNxXIzAACA5YEwg9C0Iszod8IEBQ71j//8Vi68/7fAskb0Gr02qExpn0FjAQAAWIo6Ojpk9+7d0t7ebo97enrkiSeesO8feughW7Zp0yZ7/Mwzz0hXV1fp2jD09vbKn//8Z3n88cft8cTEhBw/fty+P3DggC178skn7fGFCxfkyJEjpWsXijCD0IQdZvTb+ht9Iaa+gs43o9G12qf2HTSm1uqV+NmM5CazknorqHy+BmR4LCnDrwaVLcSQJK9mZfxwT0DZ/AwcSUryyEBg2fKjP/eEDO0OKgMAIDxPP/20DSkbNmywxz/84Q+ls7PTvtcQ86Mf/Ujuvfdee6zv+/r6SteG4fTp03Lu3DnZvn27Pf7ggw/ktddes+81xHz44YfyyCPOypdf/OIX8q9//at07UIRZhCasMPMji0vBIYNz0JfQW16tO+gMVVLXC1K8XZZ4VZOMhcTMtgdXL+RgfN5M6qC5Mz14d4Aj0rOtJw76R4fSknuRkriNfXKmvpcu5Oi/xUKE4MV1y7E6KRpcHI0sCwU/aOSuZGT9NF6ASwmw+dzkrs8Kn2B5XOhP/eCpN8JKgMAIDwbN26UtWvXyoMPPmjDimf16tXy8MMPl44fffRRWblypWzevDmwnfl67LHH5IEHHpBnn33WBhf1/PPP2zINVd65d955R+655x4bvKrbmC/CDEITdphptMRM6avRcSOz1W12qZm9+b6Zkr7+PiMuibFxyeaLInfykn43FnhNPa27ka8KMyftkYzW1CsL83PNRcvDzDtpEy/MKz8uA0Hle1M2oEkhLUNB5XNCmAEARKu7u1tefvnlEp2p+clPflI63rdvX+B1YTl27Jj+v6h9jY46/3++Z88e94zIrVu3aq5ZKMIMQhN2mJntccz6anTcyGx1m31Mc/DNd0yGLplb5qIJDL4Zlq63RiV9Iy8Fne2YmZLM2KB0uWXxsznJ3zZt3c5L7kZGRvud87GDw5K66l2Tk/TxQYnpzEpp5iAuqRs5SR0q92NV1PGFGT1/y4QSKUreXFdvhqa5z1Xdd5cMjmUlX9DZnIJMXU6WZ3LsjIh+Ll1KV66Tu5SQwU7v+oB+O/tkuKa+9uv8jHZ8PG4+w7gM+9pQPUfTkrtq+veds7wwY17ZT2pDWfyy/mzMqyLMxKTvqOnnVsGdpcpK6nCfxHzX1Yzz4oj0ddaGmUa/AwAAzJfOuui+mWbCTFtbm91DE9TOfOnSseeee66pMLNu3Tq7h6a6jfkizCA0YYeZY3u+CgwaHn3VO7799zv22P/Sc0F1g2jfQWOqVncmoTMhWTOEqS+c5Uyxd52b6IK58U68H5fEFxnRiY7ijVHpMeW6VySjq8zyGUl6+yz2mpthvbcu5GR8LGnOmxtq00g+byqWbrarZl08OvsSVOfVYUk6HZkbaW1zOHCGornPVdm3XSZX1HaHZfgTZ6xyM2k/nxMiTBCYMTfx0xlJad/mZzCln2/GjNMNI5X99ppjU+GOhgMda1LGb9gfgBm9GxLcpW5Tp/3LxnokNW2GcjnuO+ey4yhI9mszVm9sHvvZijJ10/RR+tm5Ac5cM3UpZceQujxlPokZxsSQG2jqjHNGeyqHmdl+B0rjAABgjnbu3GmXczUTZnTpmb4Pame+vvjiCxkYGGgqzOiSOH1VtzFfhBmEJuww02jzv9JXo+NGZqurfQeNqVrdm35zE5y8acq+HjHv+2Rc7/Mzw5X/mu/e4GfcmY3qtka+Nsd6U+2fdegckrS9I55nmPHKzJlZl5nN+rkq27XXmIBQ+oz+vTnejIgp7/XK1V4TRjQcuWGkot+jWXNgwkDFsrZyuHBCQkwS+nPKj5f3uLw6bsJOXsaDHnjghpn0YQ1BlXVsGDPtJLR972fXnzK1zPjGeiva6R2zEUqSGjqbGmdzvwMAACxEM3tmgq5bzggzCA1hpl6Zc9Ofzzj/al+WtjMTFWGg1JYTWoI21w9O+G62Iw8ztZ/La7fnRM7OWBQm0/aJZD3+EObdtB/2nbPccOT25e/XhoGZdO1SsbfcQOIt3zqUMS2Xg4ldKlY96+Lxwsw7MRMWTb2vE264iEvmtrP0zPbr/ezq/qzcz36i2XE29zsAAMBCEGaABWCZmZ8/jDg3soVp3aNSy9tzEhRm8udrH53YpzMIixZmaj+Xv++uV4ftMqyCphoTMabOu0uxvBDxbrmux99XTZjxz7h4+nXmxRdmVgw4sx52WVk5lFRc4ymFGfPezuA4syuxT7LmFyRjZ5FqwsydrIz427DKn725cTb3OwAAwHywzAwIAQ8AKOs1N8Hl2QLnBjt/tnKp0ordQ5IYG5Xhg85xZVs9zoxFzQyDe74UVEYq9uZ4Km7IQwwzlZ/L325Mevb3yb5d5RDRddztR2dobIgwP4OLVd8h0zlsfzaFS0P22N9vz2n97+Qu5fJd45z3hxn3nAkjI75Q4r+mxB9m3J9l4VLChiFvbBU/u6pZH0/ssJ532mlunM39DgAAMB8668IDAIAFCjvMLJtHM/tu+rv2DsrwWX2GlblxLW0QL2+O1y+YtOe6ByV1s+jcNAdufjc3zEez5obZ3Eqbm+0BfSpY94AkLuWlUHSvs/Xc5VLFnCRf1W/zNaHicFryOjFVL8zYPR56g17/23+b+1yVYcbuXZlJS9w+wSwmfXZfSWWYkWJBsicG7BO8YruGnJ/BHRME9jr9VPTbaYKafrRbaUnYsXbJwCfms+kTw0ohweU+mEB/NDWBya8izHihxLzuZCXh/neoDIK99mECMpNxx2B+vu+m7NKw0sb9JsfZzO8AAAALwaOZgQUIO8w086WZ9Y4Xusys2S/NtDff/tedOo/uNTe48YtTUvQPa8bcQLs38aW2fAHCBoLjWSn4rilOj8vQmIkQpZttozsu49P2ltx5FUywMX3VDTMrTIgo1Q+eoWnuc1W1u3dE0v5x3DHB5RN3JsILEUdN6Jhxy/V1e0rGfRvnq38GsYNB9ZOm36owYziPVa6dIalQFWYql6g55yrDjNE5KEl9OpnvVbiRrHikdHPjnP13AACA+eBLM4EQhB1m1rStb/gQAH01Om6kUV3tU/sOGtPC6XKsfZWb45vQtbeJazp7pNe3zGvRmHHs2+/OPniqQ0R3b8WStFnNWt+dGaq38T8UXdJb/bmqNfW55vc7AABAPU8//bQNCDoTo8caXDRE6PtNmzbZ43vvvbdU1tdXuyd3IZLJpJw7d062b99ujw8dOiSvvfaaff/kk0/aIPPII4/YY12S9u2335auXSjCDEITdphRjZaa/eM/v5UL7/+tdNwooPiNf5C31waVqWaXmGEOamZEQuZ+30zdjf8AAHyH3XfffbJr1y5pb2+3xz09PfLEE0/Y9w899JDdI6OhRo819Og579ow/OAHP5CLFy/K448/bo8nJibk+PHj9v2BAwfsHpkdO3bY4wsXLsjBgwdL1y4UYQahaUWY6djwSGDgUOmP/i7//Nu3NsTM5fWPW9/Kn478V2CbSvsMGgsWoMVhZuBivvHGfwAA8J1EmEFoWhFm1P7H3g8MHa2gfQWNAQvUPyqZGxkZ7Q8oW7ABGc3kJHOywcZ/AADwnUSYQWhaFWbUbI9pDkOzj2MGAADA0kCYQWhaGWZ06dexPdnAEBIGbZvlZQAAAMsLYQahaWWYUQ+3d7ck0Gib2nZQnwAAAFi6CDMITavDjNLZkzCXnGlbzMgAAAAsT4QZhCaKMOMJ46EAbPYHAABY3ggzCE2UYUbpjIp+J0yjL9aspnX1GmZjAAAAlj/CDEITdZjx6Lf179jygg0pumzs2J6vbGhR+l7PaZnWad03+wMAACBqhBmEZrHCDAAAAO5OhBmEhjADAACAKBFmEBrCDAAAAKJEmEFoCDMAAACIEmEGoSHMAAAAIEqEGYSGMAMAAIAoEWYQGsIMAAAAokSYQWgIMwAAAIgSYQahIcwAAAAgSoQZhIYwAwAAgCgRZhAawgwAAACiRJhBaAgzAAAAiM4K+f80E9kUaEGCxAAAAABJRU5ErkJggg=="},79407:(e,A,t)=>{t.d(A,{Z:()=>o});const o="data:image/png;base64,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"},40996:(e,A,t)=>{t.d(A,{Z:()=>o});const o=t.p+"assets/images/settings-user-e156e167a1d964a6f2ca72df30be3a97.png"},27064:(e,A,t)=>{t.d(A,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAApCAYAAAALSGYwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAOUSURBVHhe7ZnNTxNBGMYHU4kgpArGSqVFJRhMxMTGRE2MhkQ4yKWcuHjSv0tPXjzJhQs1wRA/E1MTxUhCwFiUCoFKQwVtm+g+05myuyyV7s5udsb5JW/mnd3tHvaZ92OmLX8MiEYpDrFRoxBaVAXRoiqIFlVBtKgK4tj97uz8IgtLy+RzboVsFrdItVpldzRhIBKJkGPRTnI2GScD5xKkre0Iu1Njj6jf8mtk7tMi+bqyyq5owkxvPEYuXugnp3tOsiu29IsI1YLKBbSCZtCOYxEVKVcLKh/QDNpxLKKihmrkxKydRVQ0RRo5MWtnaZQePJpk3v9L6tIguWyYmddvP5CP84tsFl7u303TsSX3fbMu6nRmhnneGehP0nFhMUdHL3R0tJOOo+1s1pjSz21SKm2zWfOMjw2TruNRNqsxOTVDNn4U2Sy8jI4M09GXSIWgN6+nqD/7KutZWKfo2Y937+dJ1jA3YPFMpEfZrAYWyeMn02wmjm62cEQuFh6pwk+UuKDlSoUafB61YacndoJ5u3xZzjNPHBA0bWQEGBdXJEJF5YIiOguFIjX4XoX9Xa7QEVGIbOJkuAe2jMhyS19vD/N2EVE+gkaYqGZBzR8CvldhCyxFnTIiCWnYbqC19TAdvdTTvoRVVKReP2op3ok67VetFiIqUoiToByzsF7SDdIj6usZ4+PHDZ8b8JrG7IICNGeoU9wmxq31NqwIERUpD6uuUarCPTzjJj3afzNnbC+mMs/rZsbtyneqp3bcNmB2pKipZaPmHeRj4hk82yz2lJoaGiR3Rm5Qu3ZliF5D5wrcvB84RaoZ7FMbLdowIbRRCgI0Rfm1dRpZMF5LD7qP3Q8ciqPZgi0sWcVDTccBhCikqKlBwJslgDSIGg0zp0TzM82CSMS7YBtG187Btsye4sOONKLytHr71lW69civrlODj2vAbeq1c97UpT999kbYezlS1NQgQe1DHcXJDwz+v+phM6A282NCpFwsHNmQRlR+qO6UYnEN90TUPd4F4yTJr0N8v2uqb//SIHqQtvxY6Ygm/vHxfi8HDnaQyjuN96OOik67fuPb2S8HK92v1AURsb2AiRQUdHdFyezLrHSCmpGupvoN/pHxIyUGiRZVQbSoCqJFVRAtqoLURU0+ZI5GWjLsyLq+T4WoL8bk7vo0NfaImoiJP4vUBEs9/ebuMUcjPbpRUhDdKCmIjlQF0aIqByF/Ad1D7wa5ecmMAAAAAElFTkSuQmCC"}}]);
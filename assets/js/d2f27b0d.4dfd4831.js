"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[7252],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var s=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,s,a=function(e,t){if(null==e)return{};var i,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)i=n[s],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)i=n[s],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=s.createContext({}),A=function(e){var t=s.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=A(e.components);return s.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},g=s.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=A(i),g=a,m=c["".concat(l,".").concat(g)]||c[g]||d[g]||n;return i?s.createElement(m,r(r({ref:t},p),{},{components:i})):s.createElement(m,r({ref:t},p))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,r=new Array(n);r[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,r[1]=o;for(var A=2;A<n;A++)r[A]=i[A];return s.createElement.apply(null,r)}return s.createElement.apply(null,i)}g.displayName="MDXCreateElement"},87981:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>A});var s=i(87462),a=(i(67294),i(3905));const n={id:"datastorePermissions",title:"Datastore Permissions"},r=void 0,o={unversionedId:"studio/roles/datastorePermissions",id:"studio/roles/datastorePermissions",title:"Datastore Permissions",description:"Datastore permissions are crucial for controlling access to your entire Datastore, acting as sentinels that guard all Dataclasses and Entities. Strategically setting these permissions at the Datastore level is paramount, serving as the primary defense against unauthorized access and alterations to mission-critical data.",source:"@site/docs/studio/roles/datastorePermissions.md",sourceDirName:"studio/roles",slug:"/studio/roles/datastorePermissions",permalink:"/docs/studio/roles/datastorePermissions",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/roles/datastorePermissions.md",tags:[],version:"current",frontMatter:{id:"datastorePermissions",title:"Datastore Permissions"},sidebar:"Develop",previous:{title:"Roles and Privileges",permalink:"/docs/studio/roles/rolesPrivilegesOverview"},next:{title:"DataClass Permissions",permalink:"/docs/studio/roles/dataClassPermissions"}},l={},A=[{value:"Risk of Unrestricted Access",id:"risk-of-unrestricted-access",level:2},{value:"1st Solution: Max Restriction to Gradual Expansion",id:"1st-solution-max-restriction-to-gradual-expansion",level:2},{value:"Introducing Restricted Privilege",id:"introducing-restricted-privilege",level:3},{value:"Setting Datastore Permissions",id:"setting-datastore-permissions",level:3},{value:"2nd Solution: Full Access to Gradual Restriction",id:"2nd-solution-full-access-to-gradual-restriction",level:2},{value:"Introducing the Guest Privilege",id:"introducing-the-guest-privilege",level:3},{value:"Configuring the Guest Privilege",id:"configuring-the-guest-privilege",level:3},{value:"Setting Datastore Read Access Permission",id:"setting-datastore-read-access-permission",level:3},{value:"Permission Management",id:"permission-management",level:2},{value:"Inherited Permissions",id:"inherited-permissions",level:3},{value:"Supplementing Permissions",id:"supplementing-permissions",level:3},{value:"Model Editor Approach",id:"model-editor-approach",level:2}],p={toc:A};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Datastore")," permissions are crucial for controlling access to your entire ",(0,a.kt)("strong",{parentName:"p"},"Datastore"),", acting as sentinels that guard all ",(0,a.kt)("strong",{parentName:"p"},"Dataclasses")," and ",(0,a.kt)("strong",{parentName:"p"},"Entities"),". Strategically setting these permissions at the ",(0,a.kt)("strong",{parentName:"p"},"Datastore")," level is paramount, serving as the primary defense against unauthorized access and alterations to mission-critical data."),(0,a.kt)("h2",{id:"risk-of-unrestricted-access"},"Risk of Unrestricted Access"),(0,a.kt)("p",null,"Without proper setup, your application faces the risk of unregulated access. In this scenario, every user gains unrestricted access to all ",(0,a.kt)("strong",{parentName:"p"},"Datastore")," resources, posing inherent risks."),(0,a.kt)("p",null,"To illustrate, envision an unauthorized user attempting an HTTP request to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Package")," Dataclass REST API endpoint. This unchecked data access allows unauthorized actions, including accessing confidential user information, posing a uniform risk across all Dataclasses."),(0,a.kt)("img",{alt:"explorer",src:i(62773).Z,style:{borderRadius:"6px"}}),(0,a.kt)("h2",{id:"1st-solution-max-restriction-to-gradual-expansion"},"1st Solution: Max Restriction to Gradual Expansion"),(0,a.kt)("p",null,"To address the risks of unrestricted access, Qodly employs an utmost controlled data interaction strategy called ",(0,a.kt)("inlineCode",{parentName:"p"},"All Data Inaccessible by Default"),". This approach restricts access to the entire ",(0,a.kt)("strong",{parentName:"p"},"Datastore")," by default, gradually expanding access to specific ",(0,a.kt)("strong",{parentName:"p"},"Dataclasses")," through other privileges achieved by applying ",(0,a.kt)("a",{parentName:"p",href:"/docs/studio/roles/dataClassPermissions"},"Dataclasses Permissions"),"."),(0,a.kt)("h3",{id:"introducing-restricted-privilege"},"Introducing Restricted Privilege"),(0,a.kt)("p",null,"At the core of the ",(0,a.kt)("strong",{parentName:"p"},"Datastore")," Lockdown strategy lies the concept of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Restricted")," privilege. This privilege operates as a safeguarding mechanism. It restricts all actions on the Datastore, thereby rendering it inaccessible until specific permissions are meticulously set up. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This ensures that users, even without defined roles or privileges, cannot access any resources within the ",(0,a.kt)("strong",{parentName:"p"},"Datastore"),".")),(0,a.kt)("h3",{id:"setting-datastore-permissions"},"Setting Datastore Permissions"),(0,a.kt)("p",null,"Having established a privilege, like ",(0,a.kt)("inlineCode",{parentName:"p"},"Restricted"),", you can explore resources through the intuitive user interface by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Selecting the resource name, like ",(0,a.kt)("inlineCode",{parentName:"li"},"ds"),", from the dropdown list to signify the Datastore resource."),(0,a.kt)("li",{parentName:"ul"},"Typing the resource name, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"ds"),", directly into the search bar.")),(0,a.kt)("img",{alt:"explorer",src:i(28450).Z,style:{borderRadius:"6px"}}),(0,a.kt)("p",null,"Assigning permissions to the ",(0,a.kt)("strong",{parentName:"p"},"Datastore")," involves comprehensive permissions, ranging from ",(0,a.kt)("inlineCode",{parentName:"p"},"Read")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Execute"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"By applying all permissions to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ds")," resource without tying it to any role, malicious access attempts are stopped. This safeguard transforms the website into a secure vault, true to its name.")),(0,a.kt)("p",null,"Attempting to access the same REST API Endpoints will result in a ",(0,a.kt)("inlineCode",{parentName:"p"},"No permission to read for the Package dataclass")," response, a rule that extends across all Dataclasses."),(0,a.kt)("img",{alt:"explorer",src:i(11003).Z,style:{borderRadius:"6px"}}),(0,a.kt)("h2",{id:"2nd-solution-full-access-to-gradual-restriction"},"2nd Solution: Full Access to Gradual Restriction"),(0,a.kt)("p",null,"In the pursuit of strict access control, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Guest")," privilege emerges as an alternative strategy for unauthorized users. This privilege allows full access to the entire ",(0,a.kt)("strong",{parentName:"p"},"Datastore"),", gradually restricting access to specific resources through other privileges achieved by applying ",(0,a.kt)("a",{parentName:"p",href:"/docs/studio/roles/dataClassPermissions"},"Dataclasses Permissions"),"."),(0,a.kt)("h3",{id:"introducing-the-guest-privilege"},"Introducing the Guest Privilege"),(0,a.kt)("p",null,"When a role lacks specific privileges, Qodly assigns the ",(0,a.kt)("inlineCode",{parentName:"p"},"Guest")," privilege to that ",(0,a.kt)("inlineCode",{parentName:"p"},"Session"),". This allows users without defined privileges to access non-restricted resources while preventing potentially harmful activities with other resources. This ensures users interact within well-defined boundaries."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Guest")," privilege grants access to all resources if no explicit permissions are in place.")),(0,a.kt)("h3",{id:"configuring-the-guest-privilege"},"Configuring the Guest Privilege"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Guest")," privilege is established in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Privileges")," tab by default, ready to extend a welcoming hand to users without yet having established a formal identity."),(0,a.kt)("img",{alt:"explorer",src:i(63882).Z,style:{borderRadius:"6px"}}),(0,a.kt)("h3",{id:"setting-datastore-read-access-permission"},"Setting Datastore Read Access Permission"),(0,a.kt)("p",null,"To grant the read access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Guest")," privilege, a deliberate transition is required, by:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Cease complete permissions control over the Datastore from the ",(0,a.kt)("inlineCode",{parentName:"li"},"Restricted")," privilege. "),(0,a.kt)("li",{parentName:"ol"},"Subsequently, the focus shifts to specifically assigning the read permission to the Datastore, thereby endowing the ",(0,a.kt)("inlineCode",{parentName:"li"},"Guest")," privilege with the sole capability of read access.")),(0,a.kt)("img",{alt:"explorer",src:i(85678).Z,style:{borderRadius:"6px"}}),(0,a.kt)("p",null,"Through this transition, you bestow the ",(0,a.kt)("inlineCode",{parentName:"p"},"Guest")," privilege with the ability for informed discovery, enabling access to a wealth of data, including details about flights, hotels, activities, and more, all while ensuring that critical information remains safeguarded against unauthorized modifications. "),(0,a.kt)("img",{alt:"explorer",src:i(26494).Z,style:{borderRadius:"6px"}}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"However, it's essential to acknowledge that not all data should be made accessible to users. Sensitive User data, confidential Reporting documents, and other private information must remain restricted.")),(0,a.kt)("p",null,"To navigate this intricate balance between data accessibility and security, we turn our attention to the next crucial step: utilizing ",(0,a.kt)("a",{parentName:"p",href:"/docs/studio/roles/dataClassPermissions"},(0,a.kt)("strong",{parentName:"a"},"DataClass Permissions"))," to selectively shape and control access to specific sets of data."),(0,a.kt)("h2",{id:"permission-management"},"Permission Management"),(0,a.kt)("h3",{id:"inherited-permissions"},"Inherited Permissions"),(0,a.kt)("p",null,"Permissions of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Guest")," privilege are automatically inherited across various privileges. This parallels the behavior observed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Restricted")," privilege, where the capability of reading from the ",(0,a.kt)("strong",{parentName:"p"},"Datastore")," is evident."),(0,a.kt)("img",{alt:"explorer",src:i(99494).Z,style:{borderRadius:"6px"}}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"The ",(0,a.kt)("img",{alt:"explorer",src:i(18217).Z,style:{borderRadius:"6px",width:"2%"}})," icon indicates that the permission is inherited, granting access to the resource. However, when you remove this privilege, the inherited permissions also vanish from the privilege that was receiving them."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can retain the inherited permission by checking the checkbox ",(0,a.kt)("img",{alt:"explorer",src:i(45787).Z,style:{borderRadius:"6px",width:"2%"}}),", ensuring that even if the originating privilege is deleted, the permission set on the resource remains intact.")),(0,a.kt)("h3",{id:"supplementing-permissions"},"Supplementing Permissions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Datastore")," permissions maintain adaptability, allowing for supplementation as necessary."),(0,a.kt)("img",{alt:"explorer",src:i(98644).Z,style:{borderRadius:"6px"}}),(0,a.kt)("p",null,"Augmenting ",(0,a.kt)("strong",{parentName:"p"},"Datastore")," permissions within the ",(0,a.kt)("inlineCode",{parentName:"p"},"ManageContent")," privilege provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"Guest")," privilege with the freedom to have read access to the entire ",(0,a.kt)("strong",{parentName:"p"},"Datastore"),". However, it restricts editing, updating, and creating access to specific users who have the ",(0,a.kt)("inlineCode",{parentName:"p"},"ManageContent")," privilege."),(0,a.kt)("h2",{id:"model-editor-approach"},"Model Editor Approach"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("strong",{parentName:"p"},"Model Editor"),", configure Datastore permissions by linking privileges to permissions like ",(0,a.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"read"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"update"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"delete"),". This interface empowers control over operations within the ",(0,a.kt)("strong",{parentName:"p"},"Datastore"),". "),(0,a.kt)("p",null,"Permissions management for the ",(0,a.kt)("strong",{parentName:"p"},"Datastore")," becomes straightforward through the Model Editor's streamlined dropdown selection, allowing easy allocation of desired privileges."),(0,a.kt)("img",{alt:"explorer",src:i(86589).Z,style:{borderRadius:"6px"}}))}c.isMDXComponent=!0},86589:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/ModelEditor_datastorePermissions-27e7c984624ebeed99cdb257ca9e65dc.png"},45787:(e,t,i)=>{i.d(t,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA7CAYAAAAq55mNAAAKrGlDQ1BJQ0MgUHJvZmlsZQAASImVlwdUU9kWhs+96SGhJYQOoTdBOgGkhNACKL2KSkgChBJCIKjYEXEExoKKCDbQAREFR6XIICqi2AZFxa4DMggo42BBVFTeBRZhZt56762319rrfHdnn332OeuerP8CQJbniESpsDwAacIscYiPBz0qOoaOGwREgAMQIAEdDjdTxAwKCgCIzY5/t4/3kUzE7ppP1fr33/+rKfD4mVwAoCCE43mZ3DSEzyD+iisSZwGAOoTE9ZZniaa4A2GqGGkQ4YdTnDjDI1McP81oMJ0TFsJCmAoAnsThiBMBINGROD2bm4jUIbkjbCnkCYQIixB2TUtL5yF8EmFjJAeJkabqM+L/UifxbzXjpTU5nEQpz+xl2vCegkxRKmfl/3kc/9vSUiWzaxgiTkoS+4YgoyJyZg9T0v2lLIxfFDjLAt50/jQnSXzDZ5mbyYqZZR7H0186N3VRwCwnCLzZ0jpZ7LBZ5md6hc6yOD1EulaCmMWcZY54bl1JSrg0nsRnS+vnJIVFznK2IGLRLGemhPrP5bCkcbEkRNo/X+jjMbeut3TvaZl/2a+ALZ2blRTmK907Z65/vpA5VzMzStobj+/pNZcTLs0XZXlI1xKlBknz+ak+0nhmdqh0bhbyQs7NDZKeYTLHL2iWAQukg1TExYAOApAnTwCy+CuypjbCShetFAsSk7LoTOSG8elsIddiHt3a0toGgKn7OvM6vKdN30OIdn0ulvsMAJfoycnJ1rlYAHIeZ4YAII7MxYxqASC3AXB1E1cizp6JTd8lDPJPIAeoQBVoAT1gDMyBNbAHzsAdeAE/EAjCQDRYCrggCaQhnS8Hq8EGkA8KwXawG5SBg+AwOApOgFOgCbSCi+AKuAFugx7wBPSCAfAajIKPYAKCIBxEhiiQKqQNGUBmkDXEgFwhLygACoGioTgoERJCEmg1tBEqhIqhMqgCqoF+hs5CF6FrUDf0COqDhqF30BcYBZNgKqwJG8LzYQbMhP3hMHgJnAhnwDlwHrwVLoUr4eNwI3wRvgH3wL3wa3gMBVAyKBpKB2WOYqBYqEBUDCoBJUatRRWgSlCVqDpUC6oTdRfVixpBfUZj0RQ0HW2Odkb7osPRXHQGei26CF2GPopuRHeg76L70KPo7xgyRgNjhnHCsDFRmETMckw+pgRThWnAXMb0YAYwH7FYLA1rhHXA+mKjscnYVdgi7H5sPfYCthvbjx3D4XCqODOcCy4Qx8Fl4fJxe3HHcedxd3ADuE94Gbw23hrvjY/BC/G5+BL8MXwb/g5+ED9BkCcYEJwIgQQeYSVhG+EIoYVwizBAmCAqEI2ILsQwYjJxA7GUWEe8THxKfC8jI6Mr4ygTLCOQWS9TKnNS5qpMn8xnkiLJlMQixZIkpK2katIF0iPSezKZbEh2J8eQs8hbyTXkS+Tn5E+yFFkLWbYsT3adbLlso+wd2TdyBDkDOabcUrkcuRK503K35EbkCfKG8ix5jvxa+XL5s/IP5McUKApWCoEKaQpFCscUrikMKeIUDRW9FHmKeYqHFS8p9lNQFD0Ki8KlbKQcoVymDFCxVCMqm5pMLaSeoHZRR5UUlWyVIpRWKJUrnVPqpaFohjQ2LZW2jXaKdp/2RVlTmanMV96iXKd8R3lcRV3FXYWvUqBSr9Kj8kWVruqlmqK6Q7VJ9ZkaWs1ULVhtudoBtctqI+pUdWd1rnqB+in1xxqwhqlGiMYqjcMaNzXGNLU0fTRFmns1L2mOaNG03LWStXZptWkNa1O0XbUF2ru0z2u/oivRmfRUeim9gz6qo6HjqyPRqdDp0pnQNdIN183Vrdd9pkfUY+gl6O3Sa9cb1dfWX6i/Wr9W/7EBwYBhkGSwx6DTYNzQyDDScLNhk+GQkYoR2yjHqNboqTHZ2M04w7jS+J4J1oRhkmKy3+S2KWxqZ5pkWm56yww2szcTmO03656Hmec4Tzivct4Dc5I50zzbvNa8z4JmEWCRa9Fk8Wa+/vyY+Tvmd87/bmlnmWp5xPKJlaKVn1WuVYvVO2tTa651ufU9G7KNt806m2abt7ZmtnzbA7YP7Sh2C+0227XbfbN3sBfb19kPO+g7xDnsc3jAoDKCGEWMq44YRw/HdY6tjp+d7J2ynE45/els7pzifMx5aIHRAv6CIwv6XXRdOC4VLr2udNc410OuvW46bhy3SrcX7nruPPcq90GmCTOZeZz5xsPSQ+zR4DHOcmKtYV3wRHn6eBZ4dnkpeoV7lXk999b1TvSu9R71sfNZ5XPBF+Pr77vD9wFbk81l17BH/Rz81vh1+JP8Q/3L/F8EmAaIA1oWwgv9Fu5c+HSRwSLhoqZAEMgO3Bn4LMgoKCPol2BscFBwefDLEKuQ1SGdoZTQZaHHQj+GeYRtC3sSbhwuCW+PkIuIjaiJGI/0jCyO7I2aH7Um6ka0WrQgujkGFxMRUxUztthr8e7FA7F2sfmx95cYLVmx5NpStaWpS88tk1vGWXY6DhMXGXcs7isnkFPJGYtnx++LH+WyuHu4r3nuvF28Yb4Lv5g/mOCSUJwwlOiSuDNxOMktqSRpRMASlAneJvsmH0weTwlMqU6ZTI1MrU/Dp8WlnRUqClOEHela6SvSu0VmonxRb4ZTxu6MUbG/uCoTylyS2ZxFRYTRTYmxZJOkL9s1uzz70/KI5adXKKwQrri50nTllpWDOd45P61Cr+Kual+ts3rD6r41zDUVa6G18Wvb1+mty1s3sN5n/dENxA0pG37Ntcwtzv2wMXJjS55m3vq8/k0+m2rzZfPF+Q82O28++AP6B8EPXVtstuzd8r2AV3C90LKwpPBrEbfo+o9WP5b+OLk1YWvXNvttB7Zjtwu339/htuNosUJxTnH/zoU7G3fRdxXs+rB72e5rJbYlB/cQ90j29JYGlDbv1d+7fe/XsqSynnKP8vp9Gvu27Bvfz9t/54D7gbqDmgcLD345JDj0sMKnorHSsLLkMPZw9uGXRyKOdP7E+KmmSq2qsOpbtbC692jI0Y4ah5qaYxrHttXCtZLa4eOxx2+f8DzRXGdeV1FPqy88CU5KTr76Oe7n+6f8T7WfZpyuO2NwZl8DpaGgEWpc2TjalNTU2xzd3H3W72x7i3NLwy8Wv1S36rSWn1M6t62N2JbXNnk+5/zYBdGFkYuJF/vbl7U/uRR16V5HcEfXZf/LV694X7nUyew8f9Xlaus1p2tnrzOuN92wv9F40+5mw692vzZ02Xc13nK41Xzb8XZL94Lutjtudy7e9bx75R773o2eRT3d98PvP3wQ+6D3Ie/h0KPUR28fZz+eeLL+KeZpwTP5ZyXPNZ5X/mbyW32vfe+5Ps++my9CXzzp5/a//j3z968DeS/JL0sGtQdrhqyHWoe9h2+/Wvxq4LXo9cRI/h8Kf+x7Y/zmzJ/uf94cjRodeCt+O/mu6L3q++oPth/ax4LGnn9M+zgxXvBJ9dPRz4zPnV8ivwxOLP+K+1r6zeRby3f/708n0yYnRRwxZ1oKoBCHExIAeFeN6IRoACi3Ef2weEZPTxs08w0wTeA/8YzmnjZ7AOqQYUoWsS4AcBJxw/VIbeR5ShKFuQPYxkbqs9p3WqdPGRb5YjnkPkU9KkxP8A+b0fB/6fufI5iqagv+Of4LCLAGpV3Pd3wAAACWZVhJZk1NACoAAAAIAAUBEgADAAAAAQABAAABGgAFAAAAAQAAAEoBGwAFAAAAAQAAAFIBKAADAAAAAQACAACHaQAEAAAAAQAAAFoAAAAAAAAAkAAAAAEAAACQAAAAAQADkoYABwAAABIAAACEoAIABAAAAAEAAAA6oAMABAAAAAEAAAA7AAAAAEFTQ0lJAAAAU2NyZWVuc2hvdECUtDQAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALVaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj43MDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlVzZXJDb21tZW50PlNjcmVlbnNob3Q8L2V4aWY6VXNlckNvbW1lbnQ+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj42ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjE0NDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+MTQ0PC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KG07J8wAACAlJREFUaAXlW2lv20YQHR6i7tNXnMhHXbQpkH4qECCf+8v68woUPdAAadOgdQ7bieVL90WR7HtLM6Eox5bkQ5IzMC1Kolb79s28mV2utGfPnnnyBZgZYDR0U6xYQrLJghTSy5K00hLHc010wb+5N8/zxHEH0um3pNmpSa11os77g67q+0egMdOSfKokOw+eyHflH2Q1X5ZSdlV03RBdA9g5N8d1pNtvS6W2J28qL+Xvvd+kUt2Xj0AJhOytl7blycZTebS0I2vFDUkncpKyMqIBpKbNP6We58IDk2IapiSslBTTK/Lq4E958e4XMNvE63DZHJjcXnksT7/5UYpgka8tmpEQy4yLlVlVobe18q3QSyu1fTmuH4geNxOytfpYttYeYyTScFNj0TCO9hceqIOs5dy6PNl8ihBcEz2GUXgIt31Y+soXnwVw01Fkw69olFAwXMisyNfr3yuGdfp0EXQX8aKB8/tkqXhGHhQ3oTdZMYk8EUupYxHUdRIiYoYlRtwQPoJCDeKDFILjvhkFyjDgyHic/wR57dH3U+MXANQfqYUACs8TpvbrJIS5llkCI0gzqQmKHrE7Ik7PE1R7gkJoIptvoNBHM6FJ7pEuubIhzfeutI5c6dZRwAPwJDa/QMFmDEymV3TJrOnqkcD0mIhhESwYbnvigd1xbD6BnrusldOksG1IooBKB+wSdDyriYWj+cGV+p4rAxfMjkHuXAI1wFqyBCZXAQxgjTiR+4LEeE3hPdcW6Tc8xeygczXS+QMKQCaAZR/4Lktg4VqG52TV6WvSOdPxCFYXDShVliBSy7pi1MqgqokkQCqu3fIAEsepq+J0oWKUIJkrGY+MxUReU4obBoHVEjBIkK60T1zpUX3xfBybG9elmsZSAIm4zMBtVVxGEKi4BJuNA6SZiivuYDyQbGb2QMEk/oZcNkaX5YshY4HQq/sA6bJ9AJ6kaJg50KD6ocqWdjClSo+CZPpgvmwdulJ760wMkuM1c6BU1WTRFyDmRx3TqqiRvS7Ep33qSb+JEnAQveLq57MFCkxU1sKmKckl5EtrFCTZ7NY8qb5zlAgNeleDuuiKmQGl+MQBMr0EhQWjLPeiRkVlmdeBwraPkS+744tPtK2ZAFUzEhQFKYBMLWtKiKIrrBQaLrK3j+myfiqJdn6S53cPFMRhCUeVdtl1AAXY6AorQTo24rLqShXiQ9e9rk0PFB1Wk2H0gOLAZH6l8TMo4RJ5fzaSKOoqd6r8EnwY7bgECfFpgU1WQJNOyYKmwo+RAiv81uXnTAuMK5UO0PlxTFU/iE0WBHnML1Vcop2wccDosvU9B4WBIy7idJJ8GW4rfD4Vo1RK1qTMfWSjjSqlh5mETbG4hFmmD7oqP3fRABFkD27agvB0kEooRO6EKwlhcOHzqYCyDs2VWaqBSnROV34BVcSs/zIXTsJVC1u4qQWVZZxGjcy1oLD1fcSlqmOjV0z/fCKgrEUTmB9SRFh4426GsuxDrJuyJbCrmAUTYeNyCFNJCrmSg3RRviR7/CzTSLfKomC4jXB705yPBxQAGF902QBkovApvJki+L5fsbhKMVmykV0Vy6pY912dbQwZruF1rHhYqFOEeH7TNhZQuiZZSGIKlX0EEUmNdoPxl9/Ein/ALGJtACHhJDpZgqtvGCquo5/k/JKFAaddNVQ/uGF9KzYW0OCbOfK8he55EVZwAQeCcefYulJJTWMl46/vcCLNVDJyDwvtsdqh8LAwoMvyO27DxgJK5fMgNMxptTeuMCbN1VGw7GASLs2Y1E1NLXEkCRJx6QtWCAIHDe1y8ny2i70HaPsm0kjoG4ZOxwKqpknoGJcwmpgqqUoGOJliCCpsrGEtHcKzoiHxg1HEJN2XsRo2B4tb3dr5Oi2YvE4dG273c+fjAT3/tI1FKOZKjjw7Wtz22Ys2zoHgSp2yCMDgWlY7XCngsqXKl4jV27SJgKqOgFnODwUKyZhz+v7S5Ehe/AzAQGGZRtRKART2Nl02GLzJgeKTdDPWo8TCTnJ9Jw7fpNteaoxL1MUs0tu4tdCBy9JL7sKmAsqOESATPLKnUkp12wA17IjohFA4AEk3Zb5sINZvolgPNX/p6fRAgTEo+bjHh0ZmsbFlRKDUm7jehpsyX3IizVX2u3BZ9d34NzXQoAE1pTqfL3I5MrfBGnhYZQmIB0Ge/ecoT7hLkOzrtYGqIgIuybLNQ8JlnHIFgfdMguURxjSLAVXHYlBuuo4NBv2yx2sDDRqnGwer5lTi4o6fepg/6abV145ilNfNwm4MKDtPdpXYQFHJGm/r0fx7JciXYHZWdqNACYKM8ehWZwXp4u/9NNe6+P1786oCChmB283OrW5rNH1cfvgAKNdlsAiFmTLfuE8W7Mp2kct07lzm1mweBHyfrIf9OmfNY+GjPsD6x1mrguNI7Um/T0DbvYYcVt9Kq9sQs2935e3RK8kki1LCdlbuhOQmwUU2fxXElZP6ofz17lc5bR4CKFaL947/xZ7WvNpubmJLiIVd2f6PBjg/+cx8aw5HggCpNQNMlkkg2Xy5/4dU4a1GuVz+iXFqOz1pIPm1e00wiikXWOWedFSt6vkc4hrqEvXFdrpgrwIP/Ueev/kZIH+X96evFWiTitS123JUO1A/p6i3z+DTdVnCPvR8akkxuwi/kiDQHrzztHEoBwC3++GFnOCcWGgfKyMbd1hr7VPpvX+OC3f9XctwYzLKv3m3IC7tQV+pLH/oY7PoPrf/AfrHpLH/652wAAAAAElFTkSuQmCC"},63882:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/guestPrivilege-495374236b583e0c2033dd38600dbb37.png"},18217:(e,t,i)=>{i.d(t,{Z:()=>s});const s="data:image/png;base64,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"},99494:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/inheritedPermissions-8749b68a45ff5bb3627063458ff84b8f.png"},26494:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/packages-4f78c36cb1c681e50b193edd257ffe38.png"},85678:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/readAccessGuestPrivilege-d805b71d8af0fc5edcf16692b420b848.png"},11003:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/restrictedAccess-3323fbb03ac5ea9b4b04c888c4db040b.png"},28450:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/restrictedPrivilege-5cd3cc21ae1c31fe9da9f67abb8a94c0.png"},98644:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/supplementing-f5cc6855e67f99a43dc383f8f1f86a6d.png"},62773:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/unrestrictedAccess-11700dac3d2e2aeea65b5c28ded777b6.png"}}]);
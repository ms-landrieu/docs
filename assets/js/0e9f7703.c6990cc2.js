"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[6694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,h=p["".concat(l,".").concat(g)]||p[g]||u[g]||r;return n?i.createElement(h,s(s({ref:t},d),{},{components:n})):i.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},21223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={id:"rolesPrivilegesOverview",title:"Roles and Privileges"},s=void 0,o={unversionedId:"studio/roles/rolesPrivilegesOverview",id:"studio/roles/rolesPrivilegesOverview",title:"Roles and Privileges",description:"In the realm of data security and access control, Qodly introduces a robust system of Roles and Privileges. These two fundamental concepts are at the heart of enforcing data access restrictions within the application. By understanding the intricacies of Roles and Privileges, you can ensure that each user accesses only the data pertinent to their designated role.",source:"@site/docs/studio/roles/rolesPrivilegesOverview.md",sourceDirName:"studio/roles",slug:"/studio/roles/rolesPrivilegesOverview",permalink:"/docs/studio/roles/rolesPrivilegesOverview",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/roles/rolesPrivilegesOverview.md",tags:[],version:"current",frontMatter:{id:"rolesPrivilegesOverview",title:"Roles and Privileges"},sidebar:"Studio",previous:{title:"Access Control Mechanisms",permalink:"/docs/studio/roles/accessControlMechanisms"},next:{title:"Datastore Permissions",permalink:"/docs/studio/roles/datastorePermissions"}},l={},c=[{value:"Roles: Defining User Profiles",id:"roles-defining-user-profiles",level:2},{value:"<u> Understanding Roles in Qodly </u>",id:"-understanding-roles-in-qodly-",level:3},{value:"<u> Role Hierarchy and Hierarchical Access Control </u>",id:"-role-hierarchy-and-hierarchical-access-control-",level:3},{value:"<u> Adding Roles in Qodly </u>",id:"-adding-roles-in-qodly-",level:3},{value:"<u> Role-Based Authentication: Ensuring Clear Access Control </u>",id:"-role-based-authentication-ensuring-clear-access-control-",level:3},{value:"Privileges: Enabling Controlled Access",id:"privileges-enabling-controlled-access",level:2},{value:"<u> Defining Privileges for Different User Profiles </u>",id:"-defining-privileges-for-different-user-profiles-",level:3},{value:"<u> Hierarchical Privileges for Granular Control </u>",id:"-hierarchical-privileges-for-granular-control-",level:3},{value:"<u> Adding Privileges in Qodly </u>",id:"-adding-privileges-in-qodly-",level:3},{value:"Interplay Between Roles and Privileges",id:"interplay-between-roles-and-privileges",level:2},{value:"Assigning Roles",id:"assigning-roles",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the realm of data security and access control, Qodly introduces a robust system of Roles and Privileges. These two fundamental concepts are at the heart of enforcing data access restrictions within the application. By understanding the intricacies of Roles and Privileges, you can ensure that each user accesses only the data pertinent to their designated role. "),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"roles-defining-user-profiles"},"Roles: Defining User Profiles"),(0,a.kt)("h3",{id:"-understanding-roles-in-qodly-"},(0,a.kt)("u",null," Understanding Roles in Qodly ")),(0,a.kt)("p",null,'Roles in Qodly play a pivotal role in defining distinct user profiles within the application. Each role corresponds to a specific set of responsibilities, privileges, and access levels. For instance, consider a travel agency website, roles such as "Customer," "Content Manager," and "Sales Manager" delineate varying user profiles, each with a unique scope of actions and operations they can perform.'),(0,a.kt)("h3",{id:"-role-hierarchy-and-hierarchical-access-control-"},(0,a.kt)("u",null," Role Hierarchy and Hierarchical Access Control ")),(0,a.kt)("p",null,"Roles are hierarchically structured, allowing for the establishment of an organized and layered access control system. This hierarchy ensures that higher-level roles encompass the privileges of lower-level roles, creating a seamless and efficient method of managing user access. This hierarchical access control enhances the granularity of access management, facilitating a streamlined and systematic approach."),(0,a.kt)("h3",{id:"-adding-roles-in-qodly-"},(0,a.kt)("u",null," Adding Roles in Qodly ")),(0,a.kt)("p",null,"Adding roles in Qodly is a straightforward process. Begin by opening the ",(0,a.kt)("inlineCode",{parentName:"p"},"Explorer")," Panel, your control center for Qodly management. From there, navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Roles and Privileges")," section, where you'll find the dedicated ",(0,a.kt)("inlineCode",{parentName:"p"},"Roles")," tab. Click on this tab to access role management. To define a new role, initiate the role creation process by clicking on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Add new role")," option. "),(0,a.kt)("img",{alt:"explorer",src:n(25641).Z,style:{borderRadius:"6px"}}),(0,a.kt)("p",null,"Following these uncomplicated steps, in the context of a travel agency website known as ",(0,a.kt)("inlineCode",{parentName:"p"},"TravelTrove"),", you can customize unique roles such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Customer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Content Manager"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Sales Manager")," to perfectly align with your specific application needs:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Roles"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Customer"),(0,a.kt)("td",{parentName:"tr",align:null},"Represents website visitors who can browse travel packages, view destination information, and make bookings.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Content Manager"),(0,a.kt)("td",{parentName:"tr",align:null},"Responsible for managing the content of the website, including creating and updating travel packages, adding new destinations, and editing descriptions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sales Manager"),(0,a.kt)("td",{parentName:"tr",align:null},"Has additional privileges compared to customers, allowing them to manage customer bookings, view sales reports, and generate invoices.")))),(0,a.kt)("h3",{id:"-role-based-authentication-ensuring-clear-access-control-"},(0,a.kt)("u",null," Role-Based Authentication: Ensuring Clear Access Control ")),(0,a.kt)("p",null,"To ensure clear role-based access within the system, the integration of a user authentication mechanism, specifically a dedicated sign-in page, is of utmost importance. This mechanism serves as a vital tool for distinguishing between different roles attempting to access the website. By requiring users to sign in, the system uniquely identifies and associates each user with their designated role. After a successful registration, automatic assignment of a default role, such as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Customer")," role, serves as the foundational step for controlled access in alignment with predefined privileges."),(0,a.kt)("img",{alt:"explorer",src:n(19924).Z,style:{borderRadius:"6px"}}),(0,a.kt)("p",null,"The next step involves binding this authentication function to the login button. When a user attempts to log in, the authentication process is triggered, and the system verifies their credentials before granting access:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-qs"},'exposed function authenticateUser(username: variant, password: variant) : string\n    var user : cs.UserEntity \n    var privileges : object\n\n    if ( (username != null) & (password != null) )\n        user = ds.User.query("username = :1",username).first()\n\n        if (user != null) \n            if (verifyPasswordHash(password,user.password))\n                privileges = newobject("userName", user.username, "roles", user.role_ID.name)\n                session.setPrivileges(privileges)\n                webForm.setMessage("You are authenticated as a " + user.role_ID.name)\n                return "homePage"\n            else\n                webForm.setError("Invalid username or password. Please check your credentials and try again.")\n                return "authPage"\n            end\n        else\n            webForm.setError("The username you are trying to authenticate with does not exist.")\n            return "authPage"\n        end\n    else\n        webForm.setError("Please provide both the username and password.")\n        return "authPage"\n    end\n')),(0,a.kt)("p",null,"For a more comprehensive understanding, we recommend consulting the ",(0,a.kt)("a",{parentName:"p",href:"/docs/language/SessionClass"},(0,a.kt)("strong",{parentName:"a"},"Session command"))," on the documentation page. This valuable resource offers in-depth insights and detailed information on the topic."),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"privileges-enabling-controlled-access"},"Privileges: Enabling Controlled Access"),(0,a.kt)("h3",{id:"-defining-privileges-for-different-user-profiles-"},(0,a.kt)("u",null," Defining Privileges for Different User Profiles ")),(0,a.kt)("p",null,'Privileges are the building blocks of access control in Qodly. They define the specific technical capabilities and actions that users of different roles can perform. By assigning privileges to roles, you determine the extent of a user\'s access to data and functionalities. For example, the "BrowsePackages" privilege allows users to view available travel packages, while the "BookPackage" privilege enables booking transactions.'),(0,a.kt)("h3",{id:"-hierarchical-privileges-for-granular-control-"},(0,a.kt)("u",null," Hierarchical Privileges for Granular Control ")),(0,a.kt)("p",null,"Privileges can be structured hierarchically, allowing one privilege to include or inherit the capabilities of another. This hierarchical arrangement enhances the flexibility of access control, enabling the creation of comprehensive privilege sets that cater to various user roles. By establishing a hierarchy of privileges, you can efficiently manage access without duplicating efforts or creating redundant privilege definitions."),(0,a.kt)("h3",{id:"-adding-privileges-in-qodly-"},(0,a.kt)("u",null," Adding Privileges in Qodly ")),(0,a.kt)("p",null,"The process of adding privileges in Qodly is just as simple as adding roles. To get started, head to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Privileges")," tab within the ",(0,a.kt)("inlineCode",{parentName:"p"},"Roles and Privileges")," section. To create a new privilege, simply click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," icon, which will prompt the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create New Privilege")," form to appear."),(0,a.kt)("img",{alt:"explorer",src:n(80875).Z,style:{borderRadius:"6px"}}),(0,a.kt)("p",null,"Let's explore some of these privileges and see their application in the context of ",(0,a.kt)("inlineCode",{parentName:"p"},"TravelTrove"),", a travel agency website:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Privileges"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ViewReports"),(0,a.kt)("td",{parentName:"tr",align:null},"Access to sales reports and statistical data, facilitating analysis of booking patterns, revenue tracking.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ManageBookings"),(0,a.kt)("td",{parentName:"tr",align:null},"Manage customer bookings by accessing details, verifying reservations, making changes, and generating invoices.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ManageContent"),(0,a.kt)("td",{parentName:"tr",align:null},"Access and manage the travel agency's online content, including travel package creation, updates, and deletions.")))),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"interplay-between-roles-and-privileges"},"Interplay Between Roles and Privileges"),(0,a.kt)("p",null,"Achieving the optimal synchronization of roles and privileges ensures seamless task execution for users while maintaining robust data security. "),(0,a.kt)("p",null,"To assign one or multiple privileges to a role, return to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Roles")," tab within the ",(0,a.kt)("inlineCode",{parentName:"p"},"Roles and Privileges")," section. Select the desired role, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Sales Manager"),", and find the privileges side section on the far right. Here, you'll discover a comprehensive list of available privileges, along with the means to assign them to the chosen role. Adding privileges is as simple as clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," icon, and removal is just as easy using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-")," icon. "),(0,a.kt)("img",{alt:"explorer",src:n(45895).Z,style:{borderRadius:"6px"}}),(0,a.kt)("p",null,"For instance, a ",(0,a.kt)("inlineCode",{parentName:"p"},"Sales Manager")," role might possess privileges like ",(0,a.kt)("inlineCode",{parentName:"p"},"ManageBookings")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewReports"),", granting them the ability to analyze booking trends and monitor revenue for informed decision-making. Similarly, a ",(0,a.kt)("inlineCode",{parentName:"p"},"Content Manager")," role could receive privileges for ",(0,a.kt)("inlineCode",{parentName:"p"},"ManageContent"),", enhancing the website's appeal to potential travelers and refining the overall user experience, including travel reservation options."),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"assigning-roles"},"Assigning Roles"),(0,a.kt)("p",null,"Through the Qodly Management Console of your application, you can seamlessly integrate roles for users across various environments, be it development, staging, or production \u2013 each with its own tailored configuration. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"It's important to note that roles added in the development environment may not necessarily align with those in the production environment for example.")),(0,a.kt)("p",null,"For instance, in the development environment, navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Teams")," tab. Here, you'll encounter a list of available users, each associated with their respective roles. Should you need to add a new user, simply click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Add User")," button located at the upper-right corner. This action will prompt a form to appear, allowing you to input the necessary user data. Towards the form's conclusion, you'll find a dropdown menu under ",(0,a.kt)("inlineCode",{parentName:"p"},"Profile"),", this dropdown showcases the roles that were previously established within Qodly Studio. From this list, you can select and assign appropriate roles to the new user, granting them specific privileges aligned with your requirements."),(0,a.kt)("img",{alt:"explorer",src:n(5401).Z,style:{borderRadius:"6px"}}),(0,a.kt)("p",null,"The impact of these role assignments goes beyond mere user administration. As you mold your application, these roles exert a direct influence on the user journey. For example, an unauthenticated customer will be limited in viewing their bookings, whereas an authenticated customer can effortlessly access their bookings from the header bar. This integrated role system guarantees a unified and customized user experience across your application. "),(0,a.kt)("img",{alt:"explorer",src:n(45804).Z,style:{borderRadius:"6px"}}),(0,a.kt)("p",null,"It's important to note that view management restrictions are just the initial step, subsequent stages will involve extending these limitations to various other aspects of interaction."))}p.isMDXComponent=!0},45895:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/InterplayBetweenRoles_and_Privileges-f9d7738406fd8d59529546b491e7de42.png"},80875:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/addPrivilege-9c8f934197fe034a58c74e5d3e04b443.png"},25641:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/addRole-631cfe32deb59eb73d735560ab3f9c99.png"},5401:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/addingRolesviaCloud-f8bff8f0df8a0adcf814ddeb1fc67579.png"},19924:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/authPage-18001d1d183b7e5e60e72e0c89a78c0a.gif"},45804:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/travelTrove-7f2e05789e46629826568cad51b73764.gif"}}]);
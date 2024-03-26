"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={id:"v1.1.0",title:"v1.1.0"},i="Hooks",l={unversionedId:"api-reference/webform-editor/v1.1.0",id:"api-reference/webform-editor/v1.1.0",title:"v1.1.0",description:"useLayout",source:"@site/docs/api-reference/webform-editor/v0.0.44.mdx",sourceDirName:"api-reference/webform-editor",slug:"/api-reference/webform-editor/v1.1.0",permalink:"/docs/api-reference/webform-editor/v1.1.0",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/api-reference/webform-editor/v0.0.44.mdx",tags:[],version:"current",frontMatter:{id:"v1.1.0",title:"v1.1.0"},sidebar:"APIReference",next:{title:"v0.0.46",permalink:"/docs/api-reference/webform-editor/v0.0.46"}},d={},s=[{value:"useLayout",id:"uselayout",level:2},{value:"<em>Returns</em>",id:"returns",level:3},{value:"useDatasourceSub",id:"usedatasourcesub",level:2},{value:"useSources",id:"usesources",level:2},{value:"<em>Parameters</em>",id:"parameters",level:3},{value:"<em>Returns</em>",id:"returns-1",level:3},{value:"useEnhancedNode",id:"useenhancednode",level:2},{value:"<em>Parameters</em>",id:"parameters-1",level:3},{value:"<em>Returns</em>",id:"returns-2",level:3},{value:"useEnhancedEditor",id:"useenhancededitor",level:2},{value:"<em>Parameters</em>",id:"parameters-2",level:3},{value:"<em>Returns</em>",id:"returns-3",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=p("Tabs"),c=p("TabItem"),u={toc:s};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hooks"},"Hooks"),(0,r.kt)("h2",{id:"uselayout"},"useLayout"),(0,r.kt)("p",null,"A Hook that provides methods and properties giving information about the webform airy mode"),(0,r.kt)("h3",{id:"returns"},(0,r.kt)("em",{parentName:"h3"},"Returns")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{LayoutReturnType}")),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(c,{value:"Example 1",mdxType:"TabItem"},(0,r.kt)("p",null,"Getting the AiryMode className"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'  import { useLayout } from "@ws-ui/webform-editor";\n\n  const Example = () => {\n    const { getClassName } = useLayout()\n\n\n  return (\n    <div className={getClassName("fd-stylebox")}>\n      Hello World\n    </div>\n   )\n  }\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The useLayout function returns an object with properties layout and isAiryMode, along with methods getClassName and toggle."),(0,r.kt)("h4",{parentName:"admonition",id:"properties"},"Properties"),(0,r.kt)("h5",{parentName:"admonition",id:"layout"},(0,r.kt)("inlineCode",{parentName:"h5"},"layout")),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EDisplayMode")),(0,r.kt)("td",{parentName:"tr",align:null},"The current layout mode, either ",(0,r.kt)("inlineCode",{parentName:"td"},"EDisplayMode.AIRY")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"EDisplayMode.COMPACT"),".")))),(0,r.kt)("h5",{parentName:"admonition",id:"isairymode"},(0,r.kt)("inlineCode",{parentName:"h5"},"isAiryMode")),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},'Indicates whether the current layout mode is in "Airy" mode.')))),(0,r.kt)("h4",{parentName:"admonition",id:"methods"},"Methods"),(0,r.kt)("h5",{parentName:"admonition",id:"togglechecked-boolean"},(0,r.kt)("inlineCode",{parentName:"h5"},"toggle(checked: boolean)")),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Input")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checked")," (boolean)"),(0,r.kt)("td",{parentName:"tr",align:null},"Toggles the layout mode based on the provided boolean value.")))),(0,r.kt)("h5",{parentName:"admonition",id:"getclassnamecn-string"},(0,r.kt)("inlineCode",{parentName:"h5"},"getClassName(cn: string)")),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Input")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Output")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cn")," (string)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},'Returns a modified class name based on the current layout mode. If the layout is in "Airy" mode, it appends ',(0,r.kt)("inlineCode",{parentName:"td"},"--airy")," to the class name."))))),(0,r.kt)("h2",{id:"usedatasourcesub"},"useDatasourceSub"),(0,r.kt)("p",null,"A hook that subscribes to changes in datasources and performs replacements in the webform based on specified actions."),(0,r.kt)("h2",{id:"usesources"},"useSources"),(0,r.kt)("p",null,"A hook that facilitates managing datasources and current elements associated with a web form. It provides methods for setting, fetching, and listening to changes in datasource values."),(0,r.kt)("h3",{id:"parameters"},(0,r.kt)("em",{parentName:"h3"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"param"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UseSourcesOptions"))))),(0,r.kt)("h3",{id:"returns-1"},(0,r.kt)("em",{parentName:"h3"},"Returns")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{object}")),(0,r.kt)("h2",{id:"useenhancednode"},"useEnhancedNode"),(0,r.kt)("p",null,"A hook that enhances the functionality of a Craft.js node, providing features for handling data transfer, managing datasources, and styling components."),(0,r.kt)("h3",{id:"parameters-1"},(0,r.kt)("em",{parentName:"h3"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"param"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collector"),(0,r.kt)("td",{parentName:"tr",align:null},"(optional) ",(0,r.kt)("inlineCode",{parentName:"td"},"(args: Node) => K"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"(optional) ",(0,r.kt)("inlineCode",{parentName:"td"},"{ stopPropagation?: (data: IDataTransfer) => boolean; onDrop?: (e: any) => void; }"))))),(0,r.kt)("h3",{id:"returns-2"},(0,r.kt)("em",{parentName:"h3"},"Returns")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{UseEnhancedNodeReturnType} - An object containing enhanced node information, connectors, and actions.")),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(c,{value:"Example 1",mdxType:"TabItem"},(0,r.kt)("p",null,"Basic usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEnhancedNode } from '@ws-ui/webform-editor';\nimport { useState, useEffect } from 'react';\n\nconst ExampleDelayedState = () => {\n  // highlight-next-line\n  const { actions, connectors, linkedNodes } = useEnhancedNode((node) => ({\n    nodes: node.data.nodes,\n    linkedNodes: node.data.linkedNodes,\n    node,\n  }));\n\n  const [delayedState, setDelayedState] = useState(null);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      // Fetch your data, e.g., from an API\n      const result = await fetch('https://api.example.com/data');\n      const data = await result.json();\n\n      setDelayedState(data);\n\n      actions.setDatasourceValue({ key: 'yourDatasourceKey', value: data });\n    };\n\n    fetchData();\n  }, [actions]);\n\n  return (\n    <div ref={connectors.connect}>\n\n      {delayedState && (\n        <div>\n          {JSON.stringify(delayedState)}\n        </div>\n      )}\n    </div>\n  );\n};\n"))),(0,r.kt)(c,{value:"Example 2",mdxType:"TabItem"},(0,r.kt)("p",null,"Handling drop events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEnhancedNode } from '@ws-ui/webform-editor';\n\nconst DraggableComponent = () => {\n  // highlight-next-line\n const { actions, connectors, linkedNodes } = useEnhancedNode((node) => ({\n   nodes: node.data.nodes,\n    linkedNodes: node.data.linkedNodes,\n    node,\n  }), {\n    onDrop: (event) => {\n      console.log('Dropped:', event);\n    },\n  });\n\n  return (\n    <div\n      ref={connectors.connect}\n      draggable\n      onDragStart={(event) => {\n        event.dataTransfer.setData('text', 'your data here');\n      }}\n    >\n\n      </div>\n      );\n    };\n")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useEnhancedNode")," function returns an object with the following structure:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id"),": The ID of the node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"store"),": The store associated with the node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"connectors")),": Object containing connectors to interact with the Craft.js editor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"...collected"),": Additional data collected by the collector function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"actions"),": An object containing methods for manipulating node values, including ",(0,r.kt)("inlineCode",{parentName:"li"},"setProp"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"setStyle"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"setDatasource"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"setIterator"),"."))),(0,r.kt)("h2",{id:"useenhancededitor"},"useEnhancedEditor"),(0,r.kt)("p",null,"A Hook that provides methods and state information associated with the entire editor."),(0,r.kt)("h3",{id:"parameters-2"},(0,r.kt)("em",{parentName:"h3"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"param"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collect"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that collects relevant state information from the editor state. The component will re-render when the values returned by this function changes.")))),(0,r.kt)("h3",{id:"returns-3"},(0,r.kt)("em",{parentName:"h3"},"Returns")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{useEditorReturnType<S>}")),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(c,{value:"Example 1",mdxType:"TabItem"},(0,r.kt)("p",null,"Basic usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEnhancedEditor } from \"@ws-ui/webform-editor\";\n\nconst BasicUsageExample = () => {\n// highlight-next-line\nconst { isActive, enabled, canvas } = useEnhancedEditor();\n\n // Your component logic based on the editor state\n return (\n   <div>\n    <p>Is Active: {isActive ? 'Yes' : 'No'}</p>\n    <p>Editor Enabled: {enabled ? 'Yes' : 'No'}</p>\n    <p>Canvas Element: {canvas}</p>\n\n   // Additional logic and components based on the editor state\n    </div>\n    );\n  };\n"))),(0,r.kt)(c,{value:"Example 2",mdxType:"TabItem"},(0,r.kt)("p",null,"Basic usage with collector:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEnhancedEditor } from \"@ws-ui/webform-editor\";\n\nconst CollectorUsageExample = () => {\n const collect = (state, query) => ({\n    enabled: state.options.enabled,\n   isActive: query.getEvent('selected').some(),\n });\n // highlight-next-line\n const { isActive, enabled, actions } = useEnhancedEditor(collect);\n\n // Your component logic based on the collected data\n return (\n   <div>\n     <p>Is Active: {isActive ? 'Yes' : 'No'}</p>\n     <p>Editor Enabled: {enabled ? 'Yes' : 'No'}</p>\n\n     // Additional logic and components based on the collected data\n    </div>\n   );\n  };\n"))),(0,r.kt)(c,{value:"Example 3",mdxType:"TabItem"},(0,r.kt)("p",null,"Usage with a custom collector function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEnhancedEditor } from \"@ws-ui/webform-editor\";\n\nconst CustomUsageExample = ({ id }) => {\n const { hidden, selected, hovered, topLevel } =\n  useEnhancedEditor((state, query) => {\n    const node = state.nodes[id];\n    const nodeActions = query.node(id);\n\n    return {\n      hidden: node?.data.hidden,\n      selected: state.events.selected.has(id),\n       topLevel: node ? nodeActions.isTopLevelCanvas() : false,\n      hovered: state.events.hovered.has(id),\n };\n});\n\n// Your component logic based on the useEnhancedEditor results\nreturn (\n <div>\n    <p>Is Hidden: {hidden ? 'Yes' : 'No'}</p>\n    <p>Is Selected: {selected ? 'Yes' : 'No'}</p>\n    <p>Is Top Level: {topLevel ? 'Yes' : 'No'}</p>\n    <p>Is Hovered: {hovered ? 'Yes' : 'No'}</p>\n</div>\n);\n };\n")))))}k.isMDXComponent=!0}}]);
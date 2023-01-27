"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55368,16258,46098,38245,63263,26620],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77942:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(37949),r=n(90077),i=n(37614),l=n(2784),o=n(90943);function s(e){const t=(0,i.Z)(),[n]=(0,l.useState)(!1),s=(0,r.Z)("/"),[d,c]=(0,l.useState)(""),[p,m]=(0,l.useState)((0,o.V)(t)),{preferredVersion:u}=(0,a.J)();return(0,l.useEffect)((()=>{const t=null==u?void 0:u.name;c(void 0===t||"current"===t?s+`webcomponent-examples/dist/preview-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[s,null==u?void 0:u.name,e.name]),(0,l.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),l.createElement(l.Fragment,null,n?l.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==u?void 0:u.name):l.createElement("iframe",{src:`${d}?theme=${e.theme?e.theme:p}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>M});var a,r=n(7267),i=n(90077),l=n(55061),o=n(2784);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}const d=e=>{let{title:t,titleId:n,...r}=e;return o.createElement("svg",s({style:{transform:"scale(2)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},r),t?o.createElement("title",{id:n},t):null,a||(a=o.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var c;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}const m=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",p({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,c||(c=o.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var u=n(77942);let k;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript"}(k||(k={}));var g=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],f={clickToLoad:function(e){return v("ctl",e)},devToolsHeight:function(e){return b("devtoolsheight",e)},forceEmbedLayout:function(e){return v("embed",e)},hideDevTools:function(e){return v("hidedevtools",e)},hideExplorer:function(e){return v("hideExplorer",e)},hideNavigation:function(e){return v("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return b("terminalHeight",e)},theme:function(e){return h("theme",["light","dark"],e)},view:function(e){return h("view",["preview","editor"],e)}};function N(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&f.hasOwnProperty(t)?f[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function v(e,t){return!0===t?e+"=1":""}function b(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function h(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function _(e,t){return""+T(t)+e+N(t)}function T(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function y(e){return e&&!1===e.newWindow?"_self":"_blank"}function w(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function C(e){if(!g.includes(e.template)){var t=g.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(w("project[title]",e.title)),a.appendChild(w("project[description]",e.description)),a.appendChild(w("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(w("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&a.appendChild(w("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&a.appendChild(w("project[files]["+t+"]",e.files[t]))})),a}var A=function(e,t){!function(e,t){var n=C(e);n.action=_("/run",t),n.target=y(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const x="https://github.com/siemens/ix/tree/main/packages";function E(e){let{name:t,framework:n}=e;const a=function(e){let{name:t,framework:n}=e;return n===k.ANGULAR?`${x}/angular-test-app/src/preview-examples/${t}.ts`:n===k.JAVASCRIPT?`${x}/html-test-app/src/preview-examples/${t}.html`:n===k.REACT?`${x}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(a,"_blank")}async function D(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function j(e){let{name:t,framework:n,files:a,baseUrl:r}=e;const i=await async function(e,t,n){const a=[];return(await D(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{a.push({filename:n[t],sourceCode:e})})),a}(r,n,a);return n===k.REACT?async function(e,t){const[n,a,r,i,l]=await D([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[o]=t,s={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;s[`src/${t}`]=n})),A({template:"node",title:"iX React App",description:"iX react playground",files:{...s,"public/index.html":a,"src/index.tsx":r,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${o.filename.substring(0,o.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":i,"tsconfig.json":l,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${o.filename}`})}(r,i):n===k.ANGULAR?async function(e,t,n){const[a,r,i,l,o,s,d,c,p,m,u]=await D([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),k=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&k.push(t)}));const g=`\n    ${k.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${k.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,f={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;f[`src/app/${t}`]=n})),A({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":g,"src/app/app.component.css":a,"src/app/app.component.html":r,"src/app/app.component.ts":i,"src/app/app.module.ts":l,"src/index.html":o,"src/main.ts":s,"src/styles.css":d,"angular.json":c,"package.json":p,"tsconfig.app.json":m,"tsconfig.json":u,...f}},{openFile:`src/app/${t}.ts`})}(r,t,i):n===k.JAVASCRIPT?async function(e,t){const[n,a,r,i]=await D([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[l,...o]=t,s={};o.forEach((e=>{s[`src/${e.filename}`]=e.sourceCode})),A({template:"node",title:"iX html app",description:"iX html playground",files:{...s,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",l.sourceCode),"src/main.js":a,"package.json":r,"vite.config.ts":i}},{openFile:["src/index.html"]})}(r,i):void 0}function O(e){let{name:t,framework:n}=e;return o.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>E({name:t,framework:n})},o.createElement(d,null))}function S(e){let{name:t,files:n,framework:a,baseUrl:r}=e;return o.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>j({name:t,files:n,framework:a,baseUrl:r})},o.createElement(m,null))}function P(e){let{onClick:t,showCode:n}=e;return o.createElement("ix-button",{onClick:t,ghost:!0},n?"Hide Code":"Show Code")}function $(e){const[t,n]=(0,o.useState)(e.files[0].filename);return o.createElement(o.Fragment,null,o.createElement(l.Vp,null,e.files.map((e=>{e.node;return o.createElement(l.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const a=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return a?o.createElement(a,null):null}())}function M(e){let{name:t,height:n,noMargin:a,theme:s,frameworks:d,hideInitalCodePreview:c,availableFrameworks:p}=e;const{pathname:m}=(0,r.TH)(),g=(0,i.Z)("/"),[f,N]=(0,o.useState)(!c),[v,b]=(0,o.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||k.ANGULAR}(p)),[h,_]=(0,o.useState)();(0,o.useEffect)((()=>{const e=function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(m),t=localStorage.getItem(e);var n;t&&((n=t)===k.ANGULAR||n===k.JAVASCRIPT||n===k.REACT)&&b(t)}),[]),(0,o.useEffect)((()=>{const e={};Object.keys(d).forEach((n=>{if("function"==typeof d[n]){let a=t;n===k.REACT&&(a=a.concat(".tsx")),n===k.JAVASCRIPT&&(a=a.concat(".html")),n===k.ANGULAR&&(a=a.concat(".ts")),e[n]=[{filename:a,node:d[n]({})}]}"object"==typeof d[n]&&(e[n]||(e[n]=[]),Object.keys(d[n]).forEach((t=>{e[n].push({filename:t,node:d[n][t]})})))})),_(e)}),[d,_]);const T=e=>{b(e),m&&localStorage.setItem(`docusaurus.playground${m.replace(/\//g,".")}`,e)};function y(e){return!p||(0===p.length||p.includes(e))}return o.createElement("div",{className:"Playground"},o.createElement("div",{className:"Playground__Toolbar Location__Top"},o.createElement("div",{className:"Playground__Toolbar__Actions"},o.createElement(P,{onClick:()=>N(!f),showCode:f}))),o.createElement(u.Z,{name:t,height:n,noMargin:a,theme:s}),f?o.createElement(o.Fragment,null,o.createElement("div",{className:"Playground__Toolbar Location__Bottom"},y(k.ANGULAR)?o.createElement(l._h,{className:"Playground__Framework__Button",ghost:v!==k.ANGULAR,onClick:()=>T(k.ANGULAR)},"Angular"):null,y(k.REACT)?o.createElement(l._h,{className:"Playground__Framework__Button",ghost:v!==k.REACT,onClick:()=>T(k.REACT)},"React"):null,y(k.JAVASCRIPT)?o.createElement(l._h,{className:"Playground__Framework__Button",ghost:v!==k.JAVASCRIPT,onClick:()=>T(k.JAVASCRIPT)},"JavaScript"):null,o.createElement("div",{className:"Playground__Toolbar__Actions"},o.createElement(O,{name:t,framework:v}),o.createElement(S,{name:t,framework:v,baseUrl:g,files:h?h[v].map((e=>e.filename)):[]}))),function(){if(!h||!h[v])return null;if(1===h[v].length){const[{node:e}]=h[v];return e}return o.createElement($,{files:h[v]})}()):null)}},23965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},l=void 0,o={unversionedId:"auto-generated/ix-datetime-picker/events",id:"auto-generated/ix-datetime-picker/events",title:"events",description:"| Name       | Description                   | Type        |",source:"@site/docs/auto-generated/ix-datetime-picker/events.md",sourceDirName:"auto-generated/ix-datetime-picker",slug:"/auto-generated/ix-datetime-picker/events",permalink:"/docs/auto-generated/ix-datetime-picker/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-datetime-picker/events.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dateChange"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Date change"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"},(0,r.kt)("span",{className:"Api__Table Docs__Tag"},"Since: 1.1.0")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \uff5c { from: string; to: string; }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dateSelect"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Date selection event is fired after confirm button is pressend"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"},(0,r.kt)("span",{className:"Api__Table Docs__Tag"},"Since: 1.1.0")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DateTimeSelectEvent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"done"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Done event",(0,r.kt)("br",null),(0,r.kt)("br",null),"Set ",(0,r.kt)("inlineCode",{parentName:"td"},"doneEventDelimiter")," to null or undefine to get the typed event"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeChange"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Time change"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"},(0,r.kt)("span",{className:"Api__Table Docs__Tag"},"Since: 1.1.0")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))))}p.isMDXComponent=!0},95251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},l=void 0,o={unversionedId:"auto-generated/ix-datetime-picker/props",id:"auto-generated/ix-datetime-picker/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-datetime-picker/props.md",sourceDirName:"auto-generated/ix-datetime-picker",slug:"/auto-generated/ix-datetime-picker/props",permalink:"/docs/auto-generated/ix-datetime-picker/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-datetime-picker/props.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dateFormat"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Date format string. See @link ",(0,r.kt)("a",{parentName:"td",href:"https://moment.github.io/luxon/#/formatting?id=table-of-tokens"},"https://moment.github.io/luxon/#/formatting?id=table-of-tokens")," for all available tokens."),(0,r.kt)("div",{className:"Api__Table Docs__Tags"},(0,r.kt)("span",{className:"Api__Table Docs__Tag"},"Since: 1.1.0")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date-format")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'yyyy/LL/dd'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventDelimiter"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Default behavior of the done event is to join the two events (date and time) into one combined string output. This combination can be configured over the delimiter"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"},(0,r.kt)("span",{className:"Api__Table Docs__Tag"},"Since: 1.1.0")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event-delimiter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"' - '"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"from"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Picker date. If the picker is in range mode this property is the start date.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Format is based on ",(0,r.kt)("inlineCode",{parentName:"td"},"format")),(0,r.kt)("div",{className:"Api__Table Docs__Tags"},(0,r.kt)("span",{className:"Api__Table Docs__Tag"},"Since: 1.1.0")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"from")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxDate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"The latest date that can be selected by the date picker. If not set there will be no restriction."),(0,r.kt)("div",{className:"Api__Table Docs__Tags"},(0,r.kt)("span",{className:"Api__Table Docs__Tag"},"Since: 1.1.0")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max-date")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minDate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"The earliest date that can be selected by the date picker. If not set there will be no restriction."),(0,r.kt)("div",{className:"Api__Table Docs__Tags"},(0,r.kt)("span",{className:"Api__Table Docs__Tag"},"Since: 1.1.0")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"min-date")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"range"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Set range size"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"range")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showHour"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Show hour input"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"show-hour")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showMinutes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Show minutes input"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"show-minutes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showSeconds"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Show seconds input"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"show-seconds")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showTimeReference"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Show time reference input Time reference is default aligned with @see {this.timeFormat}"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"},(0,r.kt)("span",{className:"Api__Table Docs__Tag"},"Since: 1.1.0")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"show-time-reference")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"textSelectDate"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Text of date select button"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"},(0,r.kt)("span",{className:"Api__Table Docs__Tag"},"Since: 1.1.0")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"text-select-date")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'Done'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Select time with format string"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"},(0,r.kt)("span",{className:"Api__Table Docs__Tag"},"Since: 1.1.0")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeFormat"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Time format string. See @link ",(0,r.kt)("a",{parentName:"td",href:"https://moment.github.io/luxon/#/formatting?id=table-of-tokens"},"https://moment.github.io/luxon/#/formatting?id=table-of-tokens")," for all available tokens."),(0,r.kt)("div",{className:"Api__Table Docs__Tags"},(0,r.kt)("span",{className:"Api__Table Docs__Tag"},"Since: 1.1.0")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time-format")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'TT'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeReference"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Set time reference"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time-reference")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"AM" \uff5c "PM"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"to"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Picker date. If the picker is in range mode this property is the end date. If the picker is not in range mode leave this value ",(0,r.kt)("inlineCode",{parentName:"td"},"null"),(0,r.kt)("br",null),(0,r.kt)("br",null),"Format is based on ",(0,r.kt)("inlineCode",{parentName:"td"},"format")),(0,r.kt)("div",{className:"Api__Table Docs__Tags"},(0,r.kt)("span",{className:"Api__Table Docs__Tag"},"Since: 1.1.0")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))))))}p.isMDXComponent=!0},56483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},l=void 0,o={unversionedId:"auto-generated/previews/angular/datetimepicker.ts",id:"auto-generated/previews/angular/datetimepicker.ts",title:"datetimepicker.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/datetimepicker.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/datetimepicker.ts",permalink:"/docs/auto-generated/previews/angular/datetimepicker.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/datetimepicker.ts.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: `<ix-datetime-picker></ix-datetime-picker>`,\n})\nexport default class Datetimepicker {}\n")))}p.isMDXComponent=!0},43972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},l=void 0,o={unversionedId:"auto-generated/previews/react/datetimepicker",id:"auto-generated/previews/react/datetimepicker",title:"datetimepicker",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/datetimepicker.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/datetimepicker",permalink:"/docs/auto-generated/previews/react/datetimepicker",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/datetimepicker.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxDatetimePicker } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return <IxDatetimePicker />;\n};\n")))}p.isMDXComponent=!0},66462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},l=void 0,o={unversionedId:"auto-generated/previews/web-component/datetimepicker",id:"auto-generated/previews/web-component/datetimepicker",title:"datetimepicker",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/datetimepicker.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/datetimepicker",permalink:"/docs/auto-generated/previews/web-component/datetimepicker",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/datetimepicker.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<ix-datetime-picker></ix-datetime-picker>\n")))}p.isMDXComponent=!0},67146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>N,frontMatter:()=>p,metadata:()=>u,toc:()=>g});var a=n(7896),r=(n(2784),n(30876)),i=n(30024),l=n(95251),o=n(23965),s=n(66462),d=n(43972),c=n(56483);const p={},m="Date time picker",u={unversionedId:"controls/date-time-picker",id:"controls/date-time-picker",title:"Date time picker",description:"Usage",source:"@site/docs/controls/date-time-picker.md",sourceDirName:"controls",slug:"/controls/date-time-picker",permalink:"/docs/controls/date-time-picker",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/date-time-picker.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Date picker",permalink:"/docs/controls/date-picker"},next:{title:"Drawer",permalink:"/docs/controls/drawer"}},k={},g=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],f={toc:g};function N(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"date-time-picker"},"Date time picker"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(i.Z,{name:"datetimepicker",height:"35rem",frameworks:{react:d.default,angular:c.default,javascript:s.default},mdxType:"Playground"}),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(l.default,{mdxType:"Props"}),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)(o.default,{mdxType:"Events"}))}N.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43933,86695,16629,94030,66801,91501,3749,5101,36004,97956,17719],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,b=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},77942:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(37949),r=n(90077),i=n(37614),o=n(2784),l=n(90943);function s(e){const t=(0,i.Z)(),[n]=(0,o.useState)(!1),s=(0,r.Z)("/"),[d,c]=(0,o.useState)(""),[m,p]=(0,o.useState)((0,l.V)(t)),{preferredVersion:u}=(0,a.J)();return(0,o.useEffect)((()=>{const t=null==u?void 0:u.name;c(void 0===t||"current"===t?s+`webcomponent-examples/dist/preview-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[s,null==u?void 0:u.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,l.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),p(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),o.createElement(o.Fragment,null,n?o.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==u?void 0:u.name):o.createElement("iframe",{src:`${d}?theme=${e.theme?e.theme:m}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>S});var a,r=n(7267),i=n(90077),o=n(55061),l=n(2784);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}const d=e=>{let{title:t,titleId:n,...r}=e;return l.createElement("svg",s({style:{transform:"scale(2)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},r),t?l.createElement("title",{id:n},t):null,a||(a=l.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var c;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}const p=e=>{let{title:t,titleId:n,...a}=e;return l.createElement("svg",m({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?l.createElement("title",{id:n},t):null,c||(c=l.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var u=n(77942);let b;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript"}(b||(b={}));var g=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],v={clickToLoad:function(e){return k("ctl",e)},devToolsHeight:function(e){return x("devtoolsheight",e)},forceEmbedLayout:function(e){return k("embed",e)},hideDevTools:function(e){return k("hidedevtools",e)},hideExplorer:function(e){return k("hideExplorer",e)},hideNavigation:function(e){return k("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return x("terminalHeight",e)},theme:function(e){return N("theme",["light","dark"],e)},view:function(e){return N("view",["preview","editor"],e)}};function f(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&v.hasOwnProperty(t)?v[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function k(e,t){return!0===t?e+"=1":""}function x(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function N(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function h(e,t){return""+w(t)+e+f(t)}function w(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function T(e){return e&&!1===e.newWindow?"_self":"_blank"}function y(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function C(e){if(!g.includes(e.template)){var t=g.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(y("project[title]",e.title)),a.appendChild(y("project[description]",e.description)),a.appendChild(y("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(y("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&a.appendChild(y("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&a.appendChild(y("project[files]["+t+"]",e.files[t]))})),a}var _=function(e,t){!function(e,t){var n=C(e);n.action=h("/run",t),n.target=T(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const I="https://github.com/siemens/ix/tree/main/packages";function E(e){let{name:t,framework:n}=e;const a=function(e){let{name:t,framework:n}=e;return n===b.ANGULAR?`${I}/angular-test-app/src/preview-examples/${t}.ts`:n===b.JAVASCRIPT?`${I}/html-test-app/src/preview-examples/${t}.html`:n===b.REACT?`${I}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(a,"_blank")}async function A(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function D(e){let{name:t,framework:n,files:a,baseUrl:r}=e;const i=await async function(e,t,n){const a=[];return(await A(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{a.push({filename:n[t],sourceCode:e})})),a}(r,n,a);return n===b.REACT?async function(e,t){const[n,a,r,i,o]=await A([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[l]=t,s={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;s[`src/${t}`]=n})),_({template:"node",title:"iX React App",description:"iX react playground",files:{...s,"public/index.html":a,"src/index.tsx":r,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${l.filename.substring(0,l.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":i,"tsconfig.json":o,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${l.filename}`})}(r,i):n===b.ANGULAR?async function(e,t,n){const[a,r,i,o,l,s,d,c,m,p,u]=await A([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),b=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&b.push(t)}));const g=`\n    ${b.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${b.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,v={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;v[`src/app/${t}`]=n})),_({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":g,"src/app/app.component.css":a,"src/app/app.component.html":r,"src/app/app.component.ts":i,"src/app/app.module.ts":o,"src/index.html":l,"src/main.ts":s,"src/styles.css":d,"angular.json":c,"package.json":m,"tsconfig.app.json":p,"tsconfig.json":u,...v}},{openFile:`src/app/${t}.ts`})}(r,t,i):n===b.JAVASCRIPT?async function(e,t){const[n,a,r,i]=await A([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[o,...l]=t,s={};l.forEach((e=>{s[`src/${e.filename}`]=e.sourceCode})),_({template:"node",title:"iX html app",description:"iX html playground",files:{...s,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",o.sourceCode),"src/main.js":a,"package.json":r,"vite.config.ts":i}},{openFile:["src/index.html"]})}(r,i):void 0}function j(e){let{name:t,framework:n}=e;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>E({name:t,framework:n})},l.createElement(d,null))}function O(e){let{name:t,files:n,framework:a,baseUrl:r}=e;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>D({name:t,files:n,framework:a,baseUrl:r})},l.createElement(p,null))}function M(e){let{onClick:t,showCode:n}=e;return l.createElement("ix-button",{onClick:t,ghost:!0},n?"Hide Code":"Show Code")}function P(e){const[t,n]=(0,l.useState)(e.files[0].filename);return l.createElement(l.Fragment,null,l.createElement(o.Vp,null,e.files.map((e=>{e.node;return l.createElement(o.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const a=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return a?l.createElement(a,null):null}())}function S(e){let{name:t,height:n,noMargin:a,theme:s,frameworks:d,hideInitalCodePreview:c,availableFrameworks:m}=e;const{pathname:p}=(0,r.TH)(),g=(0,i.Z)("/"),[v,f]=(0,l.useState)(!c),[k,x]=(0,l.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||b.ANGULAR}(m)),[N,h]=(0,l.useState)();(0,l.useEffect)((()=>{const e=function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(p),t=localStorage.getItem(e);var n;t&&((n=t)===b.ANGULAR||n===b.JAVASCRIPT||n===b.REACT)&&x(t)}),[]),(0,l.useEffect)((()=>{const e={};Object.keys(d).forEach((n=>{if("function"==typeof d[n]){let a=t;n===b.REACT&&(a=a.concat(".tsx")),n===b.JAVASCRIPT&&(a=a.concat(".html")),n===b.ANGULAR&&(a=a.concat(".ts")),e[n]=[{filename:a,node:d[n]({})}]}"object"==typeof d[n]&&(e[n]||(e[n]=[]),Object.keys(d[n]).forEach((t=>{e[n].push({filename:t,node:d[n][t]})})))})),h(e)}),[d,h]);const w=e=>{x(e),p&&localStorage.setItem(`docusaurus.playground${p.replace(/\//g,".")}`,e)};function T(e){return!m||(0===m.length||m.includes(e))}return l.createElement("div",{className:"Playground"},l.createElement("div",{className:"Playground__Toolbar Location__Top"},l.createElement("div",{className:"Playground__Toolbar__Actions"},l.createElement(M,{onClick:()=>f(!v),showCode:v}))),l.createElement(u.Z,{name:t,height:n,noMargin:a,theme:s}),v?l.createElement(l.Fragment,null,l.createElement("div",{className:"Playground__Toolbar Location__Bottom"},T(b.ANGULAR)?l.createElement(o._h,{className:"Playground__Framework__Button",ghost:k!==b.ANGULAR,onClick:()=>w(b.ANGULAR)},"Angular"):null,T(b.REACT)?l.createElement(o._h,{className:"Playground__Framework__Button",ghost:k!==b.REACT,onClick:()=>w(b.REACT)},"React"):null,T(b.JAVASCRIPT)?l.createElement(o._h,{className:"Playground__Framework__Button",ghost:k!==b.JAVASCRIPT,onClick:()=>w(b.JAVASCRIPT)},"JavaScript"):null,l.createElement("div",{className:"Playground__Toolbar__Actions"},l.createElement(j,{name:t,framework:k}),l.createElement(O,{name:t,framework:k,baseUrl:g,files:N?N[k].map((e=>e.filename)):[]}))),function(){if(!N||!N[k])return null;if(1===N[k].length){const[{node:e}]=N[k];return e}return l.createElement(P,{files:N[k]})}()):null)}},44684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/ix-tab-item/events",id:"auto-generated/ix-tab-item/events",title:"events",description:"No events available for this component.",source:"@site/docs/auto-generated/ix-tab-item/events.md",sourceDirName:"auto-generated/ix-tab-item",slug:"/auto-generated/ix-tab-item/events",permalink:"/docs/auto-generated/ix-tab-item/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-tab-item/events.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No events available for this component."))}m.isMDXComponent=!0},76211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/ix-tab-item/props",id:"auto-generated/ix-tab-item/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-tab-item/props.md",sourceDirName:"auto-generated/ix-tab-item",slug:"/auto-generated/ix-tab-item/props",permalink:"/docs/auto-generated/ix-tab-item/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-tab-item/props.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"counter"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Set counter value"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"counter")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Set disabled tab"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"icon"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Set icon only tab"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"icon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"layout"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Set layout width style"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"layout")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"auto" \uff5c "stretched"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'auto'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"placement"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Set selected placement"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"placement")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"bottom" \uff5c "top"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'bottom'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rounded"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Set rounded tab"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rounded")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selected"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Set selected tab"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"selected")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"small"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Set small size tab"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"small")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))))}m.isMDXComponent=!0},52070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/ix-tabs/events",id:"auto-generated/ix-tabs/events",title:"events",description:"No events available for this component.",source:"@site/docs/auto-generated/ix-tabs/events.md",sourceDirName:"auto-generated/ix-tabs",slug:"/auto-generated/ix-tabs/events",permalink:"/docs/auto-generated/ix-tabs/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-tabs/events.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No events available for this component."))}m.isMDXComponent=!0},19420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/ix-tabs/props",id:"auto-generated/ix-tabs/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-tabs/props.md",sourceDirName:"auto-generated/ix-tabs",slug:"/auto-generated/ix-tabs/props",permalink:"/docs/auto-generated/ix-tabs/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-tabs/props.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"layout"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Set layout width style"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"layout")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"auto" \uff5c "stretched"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'auto'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"placement"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Set placement style"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"placement")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"bottom" \uff5c "top"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'bottom'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rounded"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Set rounded tabs"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rounded")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selected"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Set default selected tab by index"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"selected")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"small"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Set tab items to small size"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"small")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))))}m.isMDXComponent=!0},36380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/angular/tabs-rounded.ts",id:"auto-generated/previews/angular/tabs-rounded.ts",title:"tabs-rounded.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/tabs-rounded.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/tabs-rounded.ts",permalink:"/docs/auto-generated/previews/angular/tabs-rounded.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/tabs-rounded.ts.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  styles: [\n    `\n      :host {\n        .example {\n          display: block;\n          position: relative;\n          width: 100%;\n        }\n      }\n    `,\n  ],\n  template: `\n    <div class="example">\n      <ix-tabs rounded>\n        <ix-tab-item><ix-icon name="success"></ix-icon></ix-tab-item>\n        <ix-tab-item counter="200"><ix-icon name="tree"></ix-icon></ix-tab-item>\n        <ix-tab-item><ix-icon name="maintenance"></ix-icon></ix-tab-item>\n        <ix-tab-item disabled counter="24">\n          <ix-icon name="sound-loud"></ix-icon>\n        </ix-tab-item>\n        <ix-tab-item><ix-icon name="hierarchy"></ix-icon></ix-tab-item>\n        <ix-tab-item disabled\n          ><ix-icon name="calendar-settings"></ix-icon\n        ></ix-tab-item>\n      </ix-tabs>\n    </div>\n  `,\n})\nexport default class TabsRounded {}\n')))}m.isMDXComponent=!0},51095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/angular/tabs.ts",id:"auto-generated/previews/angular/tabs.ts",title:"tabs.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/tabs.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/tabs.ts",permalink:"/docs/auto-generated/previews/angular/tabs.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/tabs.ts.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  styles: [\n    `\n      :host {\n        .example {\n          display: block;\n          position: relative;\n          width: 100%;\n        }\n      }\n    `,\n  ],\n  template: `\n    <div class="example">\n      <ix-tabs [selected]="selectedTab">\n        <ix-tab-item (click)="changeTab(0)">Tab 1</ix-tab-item>\n        <ix-tab-item (click)="changeTab(1)">Tab 2</ix-tab-item>\n        <ix-tab-item (click)="changeTab(2)">Tab 3</ix-tab-item>\n      </ix-tabs>\n      <div *ngIf="selectedTab === 0">Content Tab 1</div>\n      <div *ngIf="selectedTab === 1">Content Tab 2</div>\n      <div *ngIf="selectedTab === 2">Content Tab 3</div>\n    </div>\n  `,\n})\nexport default class Tabs {\n  selectedTab = 1;\n\n  changeTab(tabIndex: number) {\n    this.selectedTab = tabIndex;\n  }\n}\n')))}m.isMDXComponent=!0},97464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/react/tabs-rounded",id:"auto-generated/previews/react/tabs-rounded",title:"tabs-rounded",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/tabs-rounded.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/tabs-rounded",permalink:"/docs/auto-generated/previews/react/tabs-rounded",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/tabs-rounded.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxIcon, IxTabItem, IxTabs } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <IxTabs rounded>\n      <IxTabItem>\n        <IxIcon name="success"></IxIcon>\n      </IxTabItem>\n      <IxTabItem counter={200}>\n        <IxIcon name="tree"></IxIcon>\n      </IxTabItem>\n      <IxTabItem>\n        <IxIcon name="maintenance"></IxIcon>\n      </IxTabItem>\n      <IxTabItem disabled counter={24}>\n        <IxIcon name="sound-loud"></IxIcon>\n      </IxTabItem>\n      <IxTabItem>\n        <IxIcon name="hierarchy"></IxIcon>\n      </IxTabItem>\n      <IxTabItem disabled>\n        <IxIcon name="calendar-settings"></IxIcon>\n      </IxTabItem>\n    </IxTabs>\n  );\n};\n')))}m.isMDXComponent=!0},55708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/react/tabs",id:"auto-generated/previews/react/tabs",title:"tabs",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/tabs.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/tabs",permalink:"/docs/auto-generated/previews/react/tabs",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/tabs.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxTabItem, IxTabs } from '@siemens/ix-react';\nimport React, { useState } from 'react';\n\nexport default () => {\n  const [selectedTab, setSelectedTab] = useState(0);\n\n  const changeTab = (tabId: number) => setSelectedTab(tabId);\n\n  return (\n    <div\n      style={{\n        display: 'block',\n        position: 'relative',\n        width: '100%',\n      }}\n    >\n      <IxTabs selected={selectedTab}>\n        <IxTabItem onClick={() => changeTab(0)}>Tab 1</IxTabItem>\n        <IxTabItem onClick={() => changeTab(1)}>Tab 2</IxTabItem>\n        <IxTabItem onClick={() => changeTab(2)}>Tab 3</IxTabItem>\n      </IxTabs>\n      {selectedTab === 0 ? <div>Content 1</div> : null}\n      {selectedTab === 1 ? <div>Content 2</div> : null}\n      {selectedTab === 2 ? <div>Content 3</div> : null}\n    </div>\n  );\n};\n")))}m.isMDXComponent=!0},91236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/web-component/tabs-rounded",id:"auto-generated/previews/web-component/tabs-rounded",title:"tabs-rounded",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/tabs-rounded.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/tabs-rounded",permalink:"/docs/auto-generated/previews/web-component/tabs-rounded",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/tabs-rounded.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ix-tabs rounded>\n  <ix-tab-item><ix-icon name="success"></ix-icon></ix-tab-item>\n  <ix-tab-item counter="200"><ix-icon name="tree"></ix-icon></ix-tab-item>\n  <ix-tab-item><ix-icon name="maintenance"></ix-icon></ix-tab-item>\n  <ix-tab-item disabled counter="24"\n    ><ix-icon name="sound-loud"></ix-icon\n  ></ix-tab-item>\n  <ix-tab-item><ix-icon name="hierarchy"></ix-icon></ix-tab-item>\n  <ix-tab-item disabled\n    ><ix-icon name="calendar-settings"></ix-icon\n  ></ix-tab-item>\n</ix-tabs>\n')))}m.isMDXComponent=!0},50658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/web-component/tabs",id:"auto-generated/previews/web-component/tabs",title:"tabs",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/tabs.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/tabs",permalink:"/docs/auto-generated/previews/web-component/tabs",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/tabs.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<style>\n  .example {\n    display: block;\n    position: relative;\n    width: 100%;\n  }\n\n  div[data-tab-content] {\n    display: none;\n  }\n\n  div[data-tab-content].show {\n    display: block;\n  }\n</style>\n<div class="example">\n  <ix-tabs>\n    <ix-tab-item data-tab-id="0">Tab 1</ix-tab-item>\n    <ix-tab-item data-tab-id="1">Tab 2</ix-tab-item>\n    <ix-tab-item data-tab-id="2">Tab 3</ix-tab-item>\n  </ix-tabs>\n  <div data-tab-content="0" class="show">Content Tab 1</div>\n  <div data-tab-content="1">Content Tab 2</div>\n  <div data-tab-content="2">Content Tab 3</div>\n</div>\n\n<script>\n  (async function () {\n    await window.customElements.whenDefined(\'ix-tabs\');\n    const tabs = document.querySelectorAll(\'ix-tab-item[data-tab-id]\');\n\n    function registerClickListener(tab) {\n      tab.addEventListener(\'click\', (tabContent) => {\n        const contentList = document.querySelectorAll(\'[data-tab-content]\');\n        contentList.forEach((content) => {\n          if (content.dataset.tabContent === tab.dataset.tabId) {\n            content.classList.add(\'show\');\n          } else {\n            content.classList.remove(\'show\');\n          }\n        });\n      });\n    }\n\n    tabs.forEach(registerClickListener);\n  })();\n<\/script>\n')))}m.isMDXComponent=!0},47575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>f,default:()=>w,frontMatter:()=>v,metadata:()=>k,toc:()=>N});var a=n(7896),r=(n(2784),n(30876)),i=n(30024),o=n(19420),l=n(52070),s=n(76211),d=n(44684),c=n(50658),m=n(55708),p=n(51095),u=n(91236),b=n(97464),g=n(36380);const v={},f="Tabs",k={unversionedId:"controls/tabs",id:"controls/tabs",title:"Tabs",description:"Usage",source:"@site/docs/controls/tabs.md",sourceDirName:"controls",slug:"/controls/tabs",permalink:"/docs/controls/tabs",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/tabs.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Split button",permalink:"/docs/controls/split-button"},next:{title:"Text area",permalink:"/docs/controls/textarea"}},x={},N=[{value:"Usage",id:"usage",level:2},{value:"Tabs Rounded",id:"tabs-rounded",level:3},{value:"Properties (ix-tabs)",id:"properties-ix-tabs",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3},{value:"Properties (ix-tab-item)",id:"properties-ix-tab-item",level:2},{value:"Props",id:"props-1",level:3},{value:"Events",id:"events-1",level:3}],h={toc:N};function w(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tabs"},"Tabs"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(i.Z,{name:"tabs",height:"20rem",frameworks:{react:m.default,angular:p.default,javascript:c.default},mdxType:"Playground"}),(0,r.kt)("h3",{id:"tabs-rounded"},"Tabs Rounded"),(0,r.kt)(i.Z,{name:"tabs-rounded",hideInitalCodePreview:!0,frameworks:{react:b.default,angular:g.default,javascript:u.default},mdxType:"Playground"}),(0,r.kt)("h2",{id:"properties-ix-tabs"},"Properties (ix-tabs)"),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(o.default,{mdxType:"Props"}),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)(l.default,{mdxType:"Events"}),(0,r.kt)("h2",{id:"properties-ix-tab-item"},"Properties (ix-tab-item)"),(0,r.kt)("h3",{id:"props-1"},"Props"),(0,r.kt)(s.default,{mdxType:"ItemProps"}),(0,r.kt)("h3",{id:"events-1"},"Events"),(0,r.kt)(d.default,{mdxType:"ItemEvents"}))}w.isMDXComponent=!0}}]);
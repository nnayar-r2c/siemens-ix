"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45980,41476,86635],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77942:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(37949),o=n(90077),a=n(37614),i=n(2784),c=n(90943);function l(e){const t=(0,a.Z)(),[n]=(0,i.useState)(!1),l=(0,o.Z)("/"),[s,p]=(0,i.useState)(""),[d,m]=(0,i.useState)((0,c.V)(t)),{preferredVersion:u}=(0,r.J)();return(0,i.useEffect)((()=>{const t=null==u?void 0:u.name;p(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,null==u?void 0:u.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,c.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==u?void 0:u.name):i.createElement("iframe",{src:`${s}?theme=${e.theme?e.theme:d}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>M});var r,o=n(7267),a=n(90077),i=n(55061),c=n(2784);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const s=e=>{let{title:t,titleId:n,...o}=e;return c.createElement("svg",l({style:{transform:"scale(2)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},o),t?c.createElement("title",{id:n},t):null,r||(r=c.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var p;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}const m=e=>{let{title:t,titleId:n,...r}=e;return c.createElement("svg",d({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},r),t?c.createElement("title",{id:n},t):null,p||(p=c.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var u=n(77942);let f;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript"}(f||(f={}));var h=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],g={clickToLoad:function(e){return v("ctl",e)},devToolsHeight:function(e){return w("devtoolsheight",e)},forceEmbedLayout:function(e){return v("embed",e)},hideDevTools:function(e){return v("hidedevtools",e)},hideExplorer:function(e){return v("hideExplorer",e)},hideNavigation:function(e){return v("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return w("terminalHeight",e)},theme:function(e){return y("theme",["light","dark"],e)},view:function(e){return y("view",["preview","editor"],e)}};function b(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&g.hasOwnProperty(t)?g[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function v(e,t){return!0===t?e+"=1":""}function w(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function y(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function E(e,t){return""+k(t)+e+b(t)}function k(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function C(e){return e&&!1===e.newWindow?"_self":"_blank"}function O(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function j(e){if(!h.includes(e.template)){var t=h.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,r=document.createElement("form");return r.method="POST",r.setAttribute("style","display:none!important;"),r.appendChild(O("project[title]",e.title)),r.appendChild(O("project[description]",e.description)),r.appendChild(O("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):r.appendChild(O("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&r.appendChild(O("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&r.appendChild(O("project[files]["+t+"]",e.files[t]))})),r}var x=function(e,t){!function(e,t){var n=j(e);n.action=E("/run",t),n.target=C(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const A="https://github.com/siemens/ix/tree/main/packages";function T(e){let{name:t,framework:n}=e;const r=function(e){let{name:t,framework:n}=e;return n===f.ANGULAR?`${A}/angular-test-app/src/preview-examples/${t}.ts`:n===f.JAVASCRIPT?`${A}/html-test-app/src/preview-examples/${t}.html`:n===f.REACT?`${A}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(r,"_blank")}async function $(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function _(e){let{name:t,framework:n,files:r,baseUrl:o}=e;const a=await async function(e,t,n){const r=[];return(await $(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{r.push({filename:n[t],sourceCode:e})})),r}(o,n,r);return n===f.REACT?async function(e,t){const[n,r,o,a,i]=await $([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[c]=t,l={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;l[`src/${t}`]=n})),x({template:"node",title:"iX React App",description:"iX react playground",files:{...l,"public/index.html":r,"src/index.tsx":o,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${c.filename.substring(0,c.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":a,"tsconfig.json":i,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${c.filename}`})}(o,a):n===f.ANGULAR?async function(e,t,n){const[r,o,a,i,c,l,s,p,d,m,u]=await $([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),f=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&f.push(t)}));const h=`\n    ${f.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${f.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,g={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;g[`src/app/${t}`]=n})),x({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":h,"src/app/app.component.css":r,"src/app/app.component.html":o,"src/app/app.component.ts":a,"src/app/app.module.ts":i,"src/index.html":c,"src/main.ts":l,"src/styles.css":s,"angular.json":p,"package.json":d,"tsconfig.app.json":m,"tsconfig.json":u,...g}},{openFile:`src/app/${t}.ts`})}(o,t,a):n===f.JAVASCRIPT?async function(e,t){const[n,r,o,a]=await $([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[i,...c]=t,l={};c.forEach((e=>{l[`src/${e.filename}`]=e.sourceCode})),x({template:"node",title:"iX html app",description:"iX html playground",files:{...l,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",i.sourceCode),"src/main.js":r,"package.json":o,"vite.config.ts":a}},{openFile:["src/index.html"]})}(o,a):void 0}function N(e){let{name:t,framework:n}=e;return c.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>T({name:t,framework:n})},c.createElement(s,null))}function P(e){let{name:t,files:n,framework:r,baseUrl:o}=e;return c.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>_({name:t,files:n,framework:r,baseUrl:o})},c.createElement(m,null))}function R(e){let{onClick:t,showCode:n}=e;return c.createElement("ix-button",{onClick:t,ghost:!0},n?"Hide Code":"Show Code")}function S(e){const[t,n]=(0,c.useState)(e.files[0].filename);return c.createElement(c.Fragment,null,c.createElement(i.Vp,null,e.files.map((e=>{e.node;return c.createElement(i.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const r=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return r?c.createElement(r,null):null}())}function M(e){let{name:t,height:n,noMargin:r,theme:l,frameworks:s,hideInitalCodePreview:p,availableFrameworks:d}=e;const{pathname:m}=(0,o.TH)(),h=(0,a.Z)("/"),[g,b]=(0,c.useState)(!p),[v,w]=(0,c.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||f.ANGULAR}(d)),[y,E]=(0,c.useState)();(0,c.useEffect)((()=>{const e=function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(m),t=localStorage.getItem(e);var n;t&&((n=t)===f.ANGULAR||n===f.JAVASCRIPT||n===f.REACT)&&w(t)}),[]),(0,c.useEffect)((()=>{const e={};Object.keys(s).forEach((n=>{if("function"==typeof s[n]){let r=t;n===f.REACT&&(r=r.concat(".tsx")),n===f.JAVASCRIPT&&(r=r.concat(".html")),n===f.ANGULAR&&(r=r.concat(".ts")),e[n]=[{filename:r,node:s[n]({})}]}"object"==typeof s[n]&&(e[n]||(e[n]=[]),Object.keys(s[n]).forEach((t=>{e[n].push({filename:t,node:s[n][t]})})))})),E(e)}),[s,E]);const k=e=>{w(e),m&&localStorage.setItem(`docusaurus.playground${m.replace(/\//g,".")}`,e)};function C(e){return!d||(0===d.length||d.includes(e))}return c.createElement("div",{className:"Playground"},c.createElement("div",{className:"Playground__Toolbar Location__Top"},c.createElement("div",{className:"Playground__Toolbar__Actions"},c.createElement(R,{onClick:()=>b(!g),showCode:g}))),c.createElement(u.Z,{name:t,height:n,noMargin:r,theme:l}),g?c.createElement(c.Fragment,null,c.createElement("div",{className:"Playground__Toolbar Location__Bottom"},C(f.ANGULAR)?c.createElement(i._h,{className:"Playground__Framework__Button",ghost:v!==f.ANGULAR,onClick:()=>k(f.ANGULAR)},"Angular"):null,C(f.REACT)?c.createElement(i._h,{className:"Playground__Framework__Button",ghost:v!==f.REACT,onClick:()=>k(f.REACT)},"React"):null,C(f.JAVASCRIPT)?c.createElement(i._h,{className:"Playground__Framework__Button",ghost:v!==f.JAVASCRIPT,onClick:()=>k(f.JAVASCRIPT)},"JavaScript"):null,c.createElement("div",{className:"Playground__Toolbar__Actions"},c.createElement(N,{name:t,framework:v}),c.createElement(P,{name:t,framework:v,baseUrl:h,files:y?y[v].map((e=>e.filename)):[]}))),function(){if(!y||!y[v])return null;if(1===y[v].length){const[{node:e}]=y[v];return e}return c.createElement(S,{files:y[v]})}()):null)}},59166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/web-component/html-table-striped",id:"auto-generated/previews/web-component/html-table-striped",title:"html-table-striped",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/html-table-striped.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/html-table-striped",permalink:"/version-dev/docs/auto-generated/previews/web-component/html-table-striped",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/html-table-striped.md",tags:[],version:"current",frontMatter:{}},l={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<table class="table table-striped">\n  <thead>\n    <tr>\n      <th scope="col">#</th>\n      <th scope="col">First</th>\n      <th scope="col">Last</th>\n      <th scope="col">Handle</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope="row">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope="row">3</th>\n      <td colspan="2">Larry the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</table>\n')))}d.isMDXComponent=!0},99215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/web-component/html-table",id:"auto-generated/previews/web-component/html-table",title:"html-table",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/html-table.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/html-table",permalink:"/version-dev/docs/auto-generated/previews/web-component/html-table",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/html-table.md",tags:[],version:"current",frontMatter:{}},l={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<table class="table">\n  <thead>\n    <tr>\n      <th scope="col">#</th>\n      <th scope="col">First</th>\n      <th scope="col">Last</th>\n      <th scope="col">Handle</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope="row">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope="row">3</th>\n      <td colspan="2">Larry the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</table>\n')))}d.isMDXComponent=!0},34753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=n(7896),o=(n(2784),n(30876)),a=n(30024),i=n(99215),c=n(59166);const l={},s="HTML table",p={unversionedId:"controls/html-grid",id:"controls/html-grid",title:"HTML table",description:"Usage",source:"@site/docs/controls/html-grid.md",sourceDirName:"controls",slug:"/controls/html-grid",permalink:"/version-dev/docs/controls/html-grid",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/html-grid.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Group",permalink:"/version-dev/docs/controls/group"},next:{title:"Input",permalink:"/version-dev/docs/controls/input"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Striped",id:"striped",level:3}],u={toc:m};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"html-table"},"HTML table"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(a.Z,{name:"html-table",height:"12rem",hideInitalCodePreview:!0,frameworks:{javascript:i.default},mdxType:"Playground"}),(0,o.kt)("h3",{id:"striped"},"Striped"),(0,o.kt)(a.Z,{name:"html-table-striped",height:"12rem",hideInitalCodePreview:!0,frameworks:{javascript:c.default},mdxType:"Playground"}))}f.isMDXComponent=!0}}]);
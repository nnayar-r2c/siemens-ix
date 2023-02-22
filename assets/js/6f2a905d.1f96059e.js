"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39268,8874,59777,45394,57558,60669],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return n?i.createElement(f,l(l({ref:t},p),{},{components:n})):i.createElement(f,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77942:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(37949),a=n(90077),r=n(37614),l=n(2784),o=n(90943);function c(e){const t=(0,r.Z)(),[n]=(0,l.useState)(!1),c=(0,a.Z)("/"),[s,p]=(0,l.useState)(""),[d,m]=(0,l.useState)((0,o.V)(t)),{preferredVersion:u}=(0,i.J)();return(0,l.useEffect)((()=>{const t=null==u?void 0:u.name;p(void 0===t||"current"===t?c+`webcomponent-examples/dist/preview-examples/${e.name}.html`:c+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[c,null==u?void 0:u.name,e.name]),(0,l.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),l.createElement(l.Fragment,null,n?l.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==u?void 0:u.name):l.createElement("iframe",{src:`${s}?theme=${e.theme?e.theme:d}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>R});var i,a=n(7267),r=n(90077),l=n(55061),o=n(2784);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c.apply(this,arguments)}const s=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",c({style:{transform:"scale(1)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,i||(i=o.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var p;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d.apply(this,arguments)}const m=e=>{let{title:t,titleId:n,...i}=e;return o.createElement("svg",d({style:{transform:"scale(1)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},i),t?o.createElement("title",{id:n},t):null,p||(p=o.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var u=n(77942);let f;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.PREVIEW="preview"}(f||(f={}));var v=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],x={clickToLoad:function(e){return h("ctl",e)},devToolsHeight:function(e){return E("devtoolsheight",e)},forceEmbedLayout:function(e){return h("embed",e)},hideDevTools:function(e){return h("hidedevtools",e)},hideExplorer:function(e){return h("hideExplorer",e)},hideNavigation:function(e){return h("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return E("terminalHeight",e)},theme:function(e){return b("theme",["light","dark"],e)},view:function(e){return b("view",["preview","editor"],e)}};function g(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&x.hasOwnProperty(t)?x[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function h(e,t){return!0===t?e+"=1":""}function E(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function b(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function w(e,t){return""+y(t)+e+g(t)}function y(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function k(e){return e&&!1===e.newWindow?"_self":"_blank"}function T(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function C(e){if(!v.includes(e.template)){var t=v.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,i=document.createElement("form");return i.method="POST",i.setAttribute("style","display:none!important;"),i.appendChild(T("project[title]",e.title)),i.appendChild(T("project[description]",e.description)),i.appendChild(T("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):i.appendChild(T("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&i.appendChild(T("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&i.appendChild(T("project[files]["+t+"]",e.files[t]))})),i}var I=function(e,t){!function(e,t){var n=C(e);n.action=w("/run",t),n.target=k(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const N="https://github.com/siemens/ix/tree/main/packages";function F(e){let{name:t,framework:n}=e;const i=function(e){let{name:t,framework:n}=e;return n===f.ANGULAR?`${N}/angular-test-app/src/preview-examples/${t}.ts`:n===f.JAVASCRIPT?`${N}/html-test-app/src/preview-examples/${t}.html`:n===f.REACT?`${N}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(i,"_blank")}async function P(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function j(e){let{name:t,framework:n,files:i,baseUrl:a}=e;const r=await async function(e,t,n){const i=[];return(await P(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{i.push({filename:n[t],sourceCode:e})})),i}(a,n,i);return n===f.REACT?async function(e,t){const[n,i,a,r,l]=await P([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[o]=t,c={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;c[`src/${t}`]=n})),I({template:"node",title:"iX React App",description:"iX react playground",files:{...c,"public/index.html":i,"src/index.tsx":a,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${o.filename.substring(0,o.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":r,"tsconfig.json":l,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${o.filename}`})}(a,r):n===f.ANGULAR?async function(e,t,n){const[i,a,r,l,o,c,s,p,d,m,u]=await P([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),f=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&f.push(t)}));const v=`\n    ${f.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${f.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,x={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;x[`src/app/${t}`]=n})),I({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":v,"src/app/app.component.css":i,"src/app/app.component.html":a,"src/app/app.component.ts":r,"src/app/app.module.ts":l,"src/index.html":o,"src/main.ts":c,"src/styles.css":s,"angular.json":p,"package.json":d,"tsconfig.app.json":m,"tsconfig.json":u,...x}},{openFile:`src/app/${t}.ts`})}(a,t,r):n===f.JAVASCRIPT?async function(e,t){const[n,i,a,r]=await P([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[l,...o]=t,c={};o.forEach((e=>{c[`src/${e.filename}`]=e.sourceCode})),I({template:"node",title:"iX html app",description:"iX html playground",files:{...c,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",l.sourceCode),"src/main.js":i,"package.json":a,"vite.config.ts":r}},{openFile:["src/index.html"]})}(a,r):void 0}function A(e){let{name:t,framework:n}=e;return o.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>F({name:t,framework:n})},o.createElement(s,null))}function O(e){let{name:t,files:n,framework:i,baseUrl:a}=e;return o.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>j({name:t,files:n,framework:i,baseUrl:a})},o.createElement(m,null))}function $(e){const[t,n]=(0,o.useState)(e.files[0].filename);return o.createElement(o.Fragment,null,o.createElement(l.Vp,null,e.files.map((e=>{e.node;return o.createElement(l.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const i=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return i?o.createElement(i,null):null}())}function R(e){let{name:t,height:n,noMargin:i,theme:c,frameworks:s,availableFrameworks:p}=e;const{pathname:d}=(0,a.TH)(),m=(0,r.Z)("/"),[v,x]=(0,o.useState)(!0),[g,h]=(0,o.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||f.PREVIEW}(p)),[E,b]=(0,o.useState)();(0,o.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(d+t)),[t,d]);(0,o.useEffect)((()=>{const e={};s&&(Object.keys(s).forEach((n=>{if("function"==typeof s[n]){let i=t;n===f.REACT&&(i=i.concat(".tsx")),n===f.JAVASCRIPT&&(i=i.concat(".html")),n===f.ANGULAR&&(i=i.concat(".ts")),e[n]=[{filename:i,node:s[n]({})}]}"object"==typeof s[n]&&(e[n]||(e[n]=[]),Object.keys(s[n]).forEach((t=>{e[n].push({filename:t,node:s[n][t]})})))})),b(e))}),[s,b]);const w=e=>{h(e)};function y(e){return e===f.PREVIEW||(!p||(0===p.length||p.includes(e)))}return o.createElement("div",{className:"Playground"},v?o.createElement(o.Fragment,null,o.createElement("div",{className:"Playground__Toolbar Location__Bottom"},o.createElement(l.Vp,null,o.createElement(l.t3,{selected:g===f.PREVIEW,onClick:()=>w(f.PREVIEW)},"Preview")),y(f.ANGULAR)?o.createElement(l.t3,{selected:g===f.ANGULAR,onClick:()=>w(f.ANGULAR)},"Angular"):null,y(f.REACT)?o.createElement(l.t3,{selected:g===f.REACT,onClick:()=>w(f.REACT)},"React"):null,y(f.JAVASCRIPT)?o.createElement(l.t3,{selected:g===f.JAVASCRIPT,onClick:()=>w(f.JAVASCRIPT)},"JavaScript"):null,o.createElement("div",{className:"Playground__Toolbar__Actions"},g!==f.PREVIEW?o.createElement(o.Fragment,null,o.createElement(A,{name:t,framework:g}),o.createElement(O,{name:t,framework:g,baseUrl:m,files:E?g===f.PREVIEW?[]:E[g].map((e=>e.filename)):[]})):null)),function(){if(g===f.PREVIEW)return o.createElement(u.Z,{name:t,height:n,noMargin:i,theme:c});if(!E||!E[g])return null;if(1===E[g].length){const[{node:e}]=E[g];return e}return o.createElement($,{files:E[g]})}()):null)}},57858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(7896),a=(n(2784),n(30876));const r={},l=void 0,o={unversionedId:"auto-generated/ix-flip-tile/events",id:"auto-generated/ix-flip-tile/events",title:"events",description:"No events available for this component.",source:"@site/docs/auto-generated/ix-flip-tile/events.md",sourceDirName:"auto-generated/ix-flip-tile",slug:"/auto-generated/ix-flip-tile/events",permalink:"/docs/auto-generated/ix-flip-tile/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-flip-tile/events.md",tags:[],version:"current",frontMatter:{}},c={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No events available for this component."))}d.isMDXComponent=!0},7927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(7896),a=(n(2784),n(30876));const r={},l=void 0,o={unversionedId:"auto-generated/ix-flip-tile/props",id:"auto-generated/ix-flip-tile/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-flip-tile/props.md",sourceDirName:"auto-generated/ix-flip-tile",slug:"/auto-generated/ix-flip-tile/props",permalink:"/docs/auto-generated/ix-flip-tile/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-flip-tile/props.md",tags:[],version:"current",frontMatter:{}},c={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"footer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"},(0,a.kt)("div",null,"Tmp property name"),(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"footer")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"state"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"},(0,a.kt)("div",null,"Variation of the Flip"),(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"state")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FlipTileState.Alarm \uff5c FlipTileState.Info \uff5c FlipTileState.None \uff5c FlipTileState.Primary \uff5c FlipTileState.Warning")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))))))}d.isMDXComponent=!0},45355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(7896),a=(n(2784),n(30876));const r={},l=void 0,o={unversionedId:"auto-generated/previews/angular/flip-tile.ts",id:"auto-generated/previews/angular/flip-tile.ts",title:"flip-tile.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/flip-tile.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/flip-tile.ts",permalink:"/docs/auto-generated/previews/angular/flip-tile.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/flip-tile.ts.md",tags:[],version:"current",frontMatter:{}},c={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-flip-tile>\n      <div slot="header">Flip header</div>\n\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div class="d-flex align-items-center">\n          <ix-icon name="info" size="16"></ix-icon>2021-06-22\n        </div>\n      </div>\n\n      <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n      <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n    </ix-flip-tile>\n\n    <ix-flip-tile state="Primary">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div class="d-flex align-items-center">\n          <ix-icon name="info" size="16"></ix-icon>2021-06-22\n        </div>\n      </div>\n      <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n      <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n    </ix-flip-tile>\n\n    <ix-flip-tile state="Info">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div class="d-flex align-items-center">\n          <ix-icon name="info" size="16"></ix-icon>2021-06-22\n        </div>\n      </div>\n      <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n      <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n    </ix-flip-tile>\n\n    <ix-flip-tile state="Warning">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div class="d-flex align-items-center">\n          <ix-icon name="info" size="16"></ix-icon>2021-06-22\n        </div>\n      </div>\n      <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n      <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n    </ix-flip-tile>\n\n    <ix-flip-tile state="Alarm">\n      <div slot="header">Flip header</div>\n      <div slot="footer">\n        <div>Predicted maintenance date</div>\n        <div class="d-flex align-items-center">\n          <ix-icon name="info" size="16"></ix-icon>2021-06-22\n        </div>\n      </div>\n      <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n      <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n    </ix-flip-tile>\n  `,\n})\nexport default class FlipTile {}\n')))}d.isMDXComponent=!0},5446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(7896),a=(n(2784),n(30876));const r={},l=void 0,o={unversionedId:"auto-generated/previews/react/flip-tile",id:"auto-generated/previews/react/flip-tile",title:"flip-tile",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/flip-tile.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/flip-tile",permalink:"/docs/auto-generated/previews/react/flip-tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/flip-tile.md",tags:[],version:"current",frontMatter:{}},c={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { FlipTileState } from \'@siemens/ix\';\nimport { IxFlipTile, IxFlipTileContent, IxIcon } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <div className="example">\n      <IxFlipTile>\n        <div slot="header">Flip header</div>\n\n        <div slot="footer">\n          <div>Predicted maintenance date</div>\n          <div className="d-flex align-items-center">\n            <IxIcon name="info" size="16"></IxIcon>2021-06-22\n          </div>\n        </div>\n\n        <IxFlipTileContent> Example 1 </IxFlipTileContent>\n        <IxFlipTileContent> Example 2 </IxFlipTileContent>\n      </IxFlipTile>\n\n      <IxFlipTile state={FlipTileState.Primary}>\n        <div slot="header">Flip header</div>\n        <div slot="footer">\n          <div>Predicted maintenance date</div>\n          <div className="d-flex align-items-center">\n            <IxIcon name="info" size="16"></IxIcon>2021-06-22\n          </div>\n        </div>\n        <IxFlipTileContent> Example 1 </IxFlipTileContent>\n        <IxFlipTileContent> Example 2 </IxFlipTileContent>\n      </IxFlipTile>\n\n      <IxFlipTile state={FlipTileState.Info}>\n        <div slot="header">Flip header</div>\n        <div slot="footer">\n          <div>Predicted maintenance date</div>\n          <div className="d-flex align-items-center">\n            <IxIcon name="info" size="16"></IxIcon>2021-06-22\n          </div>\n        </div>\n        <IxFlipTileContent> Example 1 </IxFlipTileContent>\n        <IxFlipTileContent> Example 2 </IxFlipTileContent>\n      </IxFlipTile>\n\n      <IxFlipTile state={FlipTileState.Warning}>\n        <div slot="header">Flip header</div>\n        <div slot="footer">\n          <div>Predicted maintenance date</div>\n          <div className="d-flex align-items-center">\n            <IxIcon name="info" size="16"></IxIcon>2021-06-22\n          </div>\n        </div>\n        <IxFlipTileContent> Example 1 </IxFlipTileContent>\n        <IxFlipTileContent> Example 2 </IxFlipTileContent>\n      </IxFlipTile>\n\n      <IxFlipTile state={FlipTileState.Alarm}>\n        <div slot="header">Flip header</div>\n        <div slot="footer">\n          <div>Predicted maintenance date</div>\n          <div className="d-flex align-items-center">\n            <IxIcon name="info" size="16"></IxIcon>2021-06-22\n          </div>\n        </div>\n        <IxFlipTileContent> Example 1 </IxFlipTileContent>\n        <IxFlipTileContent> Example 2 </IxFlipTileContent>\n      </IxFlipTile>\n    </div>\n  );\n};\n')))}d.isMDXComponent=!0},21381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(7896),a=(n(2784),n(30876));const r={},l=void 0,o={unversionedId:"auto-generated/previews/web-component/flip-tile",id:"auto-generated/previews/web-component/flip-tile",title:"flip-tile",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/flip-tile.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/flip-tile",permalink:"/docs/auto-generated/previews/web-component/flip-tile",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/flip-tile.md",tags:[],version:"current",frontMatter:{}},c={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="example">\n  <ix-flip-tile>\n    <div slot="header">Flip header</div>\n\n    <div slot="footer">\n      <div>Predicted maintenance date</div>\n      <div class="d-flex align-items-center">\n        <ix-icon name="info" size="16"></ix-icon>2021-06-22\n      </div>\n    </div>\n\n    <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n    <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n  </ix-flip-tile>\n\n  <ix-flip-tile state="Primary">\n    <div slot="header">Flip header</div>\n    <div slot="footer">\n      <div>Predicted maintenance date</div>\n      <div class="d-flex align-items-center">\n        <ix-icon name="info" size="16"></ix-icon>2021-06-22\n      </div>\n    </div>\n    <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n    <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n  </ix-flip-tile>\n\n  <ix-flip-tile state="Info">\n    <div slot="header">Flip header</div>\n    <div slot="footer">\n      <div>Predicted maintenance date</div>\n      <div class="d-flex align-items-center">\n        <ix-icon name="info" size="16"></ix-icon>2021-06-22\n      </div>\n    </div>\n    <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n    <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n  </ix-flip-tile>\n\n  <ix-flip-tile state="Warning">\n    <div slot="header">Flip header</div>\n    <div slot="footer">\n      <div>Predicted maintenance date</div>\n      <div class="d-flex align-items-center">\n        <ix-icon name="info" size="16"></ix-icon>2021-06-22\n      </div>\n    </div>\n    <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n    <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n  </ix-flip-tile>\n\n  <ix-flip-tile state="Alarm">\n    <div slot="header">Flip header</div>\n    <div slot="footer">\n      <div>Predicted maintenance date</div>\n      <div class="d-flex align-items-center">\n        <ix-icon name="info" size="16"></ix-icon>2021-06-22\n      </div>\n    </div>\n    <ix-flip-tile-content> Example 1 </ix-flip-tile-content>\n    <ix-flip-tile-content> Example 2 </ix-flip-tile-content>\n  </ix-flip-tile>\n</div>\n')))}d.isMDXComponent=!0},83271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>v});var i=n(7896),a=(n(2784),n(30876)),r=n(30024),l=n(7927),o=n(57858),c=n(21381),s=n(5446),p=n(45355);const d={},m="Flip",u={unversionedId:"controls/flip",id:"controls/flip",title:"Flip",description:"Usage",source:"@site/docs/controls/flip.md",sourceDirName:"controls",slug:"/controls/flip",permalink:"/docs/controls/flip",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/flip.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Expanding search",permalink:"/docs/controls/expanding-search"},next:{title:"AG Grid",permalink:"/docs/controls/grid/"}},f={},v=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],x={toc:v};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flip"},"Flip"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(r.Z,{name:"flip-tile",height:"20rem",frameworks:{react:s.default,angular:p.default,javascript:c.default},mdxType:"Playground"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(l.default,{mdxType:"Props"}),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)(o.default,{mdxType:"Events"}))}g.isMDXComponent=!0}}]);
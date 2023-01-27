"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8369,26973,44543,34416],{30876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var a=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(t),p=o,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||r;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82009:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(2784),o=t(6277);const r="tabItem_OMyP";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:t},n)}},1112:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(7896),o=t(2784),r=t(6277),l=t(89741),i=t(42244),s=t(78963),c=t(24126);const d="tabList_M0Dn",u="tabItem_ysIP";function m(e){var n;const{lazy:t,block:l,defaultValue:m,values:p,groupId:f,className:v}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,i.l)(h,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===m?m:m??(null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)??g[0].props.value;if(null!==w&&!h.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:E}=(0,s.U)(),[k,x]=(0,o.useState)(w),C=[],{blockElementScrollPositionUntilNextRender:M}=(0,c.o5)();if(null!=f){const e=y[f];null!=e&&e!==k&&h.some((n=>n.value===e))&&x(e)}const N=e=>{const n=e.currentTarget,t=C.indexOf(n),a=h[t].value;a!==k&&(M(n),x(a),null!=f&&E(f,String(a)))},T=e=>{var n;let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},v)},h.map((e=>{let{value:n,label:t,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,key:n,ref:e=>C.push(e),onKeyDown:T,onClick:N},l,{className:(0,r.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":k===n})}),t??n)}))),t?(0,o.cloneElement)(g.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==k})))))}function p(e){const n=(0,l.Z)();return o.createElement(m,(0,a.Z)({key:String(n)},e))}},77942:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(37949),o=t(90077),r=t(37614),l=t(2784),i=t(90943);function s(e){const n=(0,r.Z)(),[t]=(0,l.useState)(!1),s=(0,o.Z)("/"),[c,d]=(0,l.useState)(""),[u,m]=(0,l.useState)((0,i.V)(n)),{preferredVersion:p}=(0,a.J)();return(0,l.useEffect)((()=>{const n=null==p?void 0:p.name;d(void 0===n||"current"===n?s+`webcomponent-examples/dist/preview-examples/${e.name}.html`:s+`versioned_examples/version-${n}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[s,null==p?void 0:p.name,e.name]),(0,l.useLayoutEffect)((()=>{const e=()=>{let e=(0,i.V)(n);document.body.classList.forEach((n=>{n.includes("theme-")&&(e=n)})),m(e)},t=new MutationObserver((()=>e()));return t.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{t.disconnect()}}),[]),l.createElement(l.Fragment,null,t?l.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==p?void 0:p.name):l.createElement("iframe",{src:`${c}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,n,t)=>{t.d(n,{Z:()=>P});var a,o=t(7267),r=t(90077),l=t(55061),i=t(2784);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)}const c=e=>{let{title:n,titleId:t,...o}=e;return i.createElement("svg",s({style:{transform:"scale(2)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":t},o),n?i.createElement("title",{id:t},n):null,a||(a=i.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var d;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},u.apply(this,arguments)}const m=e=>{let{title:n,titleId:t,...a}=e;return i.createElement("svg",u({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":t},a),n?i.createElement("title",{id:t},n):null,d||(d=i.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var p=t(77942);let f;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript"}(f||(f={}));var v=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],g={clickToLoad:function(e){return b("ctl",e)},devToolsHeight:function(e){return w("devtoolsheight",e)},forceEmbedLayout:function(e){return b("embed",e)},hideDevTools:function(e){return b("hidedevtools",e)},hideExplorer:function(e){return b("hideExplorer",e)},hideNavigation:function(e){return b("hideNavigation",e)},showSidebar:function(e){return function(e,n){return"boolean"==typeof n?"showSidebar="+(n?"1":"0"):""}(0,e)},openFile:function(e){return function(e,n){return(Array.isArray(n)?n:[n]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return w("terminalHeight",e)},theme:function(e){return y("theme",["light","dark"],e)},view:function(e){return y("view",["preview","editor"],e)}};function h(e){void 0===e&&(e={});var n=Object.entries(e).map((function(e){var n=e[0],t=e[1];return null!=t&&g.hasOwnProperty(n)?g[n](t):""})).filter(Boolean);return n.length?"?"+n.join("&"):""}function b(e,n){return!0===n?e+"=1":""}function w(e,n){return"number"==typeof n&&n>=0&&n<=100?e+"="+Math.round(n):""}function y(e,n,t){return"string"==typeof t&&n.includes(t)?e+"="+t:""}function E(e,n){return""+k(n)+e+h(n)}function k(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function x(e){return e&&!1===e.newWindow?"_self":"_blank"}function C(e,n){var t=document.createElement("input");return t.type="hidden",t.name=e,t.value=n,t}function M(e){if(!v.includes(e.template)){var n=v.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+n)}var t="node"===e.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(C("project[title]",e.title)),a.appendChild(C("project[description]",e.description)),a.appendChild(C("project[template]",e.template)),e.dependencies&&(t?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(C("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&a.appendChild(C("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(n){"string"==typeof e.files[n]&&a.appendChild(C("project[files]["+n+"]",e.files[n]))})),a}var N=function(e,n){!function(e,n){var t=M(e);t.action=E("/run",n),t.target=x(n),document.body.appendChild(t),t.submit(),document.body.removeChild(t)}(e,n)};const T="https://github.com/siemens/ix/tree/main/packages";function O(e){let{name:n,framework:t}=e;const a=function(e){let{name:n,framework:t}=e;return t===f.ANGULAR?`${T}/angular-test-app/src/preview-examples/${n}.ts`:t===f.JAVASCRIPT?`${T}/html-test-app/src/preview-examples/${n}.html`:t===f.REACT?`${T}/react-test-app/src/preview-examples/${n}.tsx`:void 0}({framework:t,name:n});window.open(a,"_blank")}async function A(e){const n=await Promise.all(e.map((e=>fetch(e))));return Promise.all(n.map((e=>e.text())))}async function j(e){let{name:n,framework:t,files:a,baseUrl:o}=e;const r=await async function(e,n,t){const a=[];return(await A(t.map((t=>`${e}auto-generated/previews/${n}/${t}.txt`)))).forEach(((e,n)=>{a.push({filename:t[n],sourceCode:e})})),a}(o,t,a);return t===f.REACT?async function(e,n){const[t,a,o,r,l]=await A([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[i]=n,s={};n.forEach((e=>{let{filename:n,sourceCode:t}=e;s[`src/${n}`]=t})),N({template:"node",title:"iX React App",description:"iX react playground",files:{...s,"public/index.html":a,"src/index.tsx":o,"src/App.tsx":t.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${i.filename.substring(0,i.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":r,"tsconfig.json":l,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${i.filename}`})}(o,r):t===f.ANGULAR?async function(e,n,t){const[a,o,r,l,i,s,c,d,u,m,p]=await A([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),f=[];t.forEach((e=>{let{filename:n,sourceCode:t}=e;/@Component/gms.test(t)&&f.push(n)}));const v=`\n    ${f.map(((e,n)=>`import COMPONENT_${n} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${f.map(((e,n)=>`COMPONENT_${n},`))}\n    ];\n  `,g={};t.forEach((e=>{let{filename:n,sourceCode:t}=e;g[`src/app/${n}`]=t})),N({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":v,"src/app/app.component.css":a,"src/app/app.component.html":o,"src/app/app.component.ts":r,"src/app/app.module.ts":l,"src/index.html":i,"src/main.ts":s,"src/styles.css":c,"angular.json":d,"package.json":u,"tsconfig.app.json":m,"tsconfig.json":p,...g}},{openFile:`src/app/${n}.ts`})}(o,n,r):t===f.JAVASCRIPT?async function(e,n){const[t,a,o,r]=await A([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[l,...i]=n,s={};i.forEach((e=>{s[`src/${e.filename}`]=e.sourceCode})),N({template:"node",title:"iX html app",description:"iX html playground",files:{...s,"src/index.html":t.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",l.sourceCode),"src/main.js":a,"package.json":o,"vite.config.ts":r}},{openFile:["src/index.html"]})}(o,r):void 0}function R(e){let{name:n,framework:t}=e;return i.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>O({name:n,framework:t})},i.createElement(c,null))}function _(e){let{name:n,files:t,framework:a,baseUrl:o}=e;return i.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>j({name:n,files:t,framework:a,baseUrl:o})},i.createElement(m,null))}function $(e){let{onClick:n,showCode:t}=e;return i.createElement("ix-button",{onClick:n,ghost:!0},t?"Hide Code":"Show Code")}function I(e){const[n,t]=(0,i.useState)(e.files[0].filename);return i.createElement(i.Fragment,null,i.createElement(l.Vp,null,e.files.map((e=>{e.node;return i.createElement(l.t3,{key:e.filename,onClick:()=>{return n=e.filename,t(n);var n}},e.filename)}))),function(){var t;const a=null==(t=e.files.find((e=>e.filename===n)))?void 0:t.node;return a?i.createElement(a,null):null}())}function P(e){let{name:n,height:t,noMargin:a,theme:s,frameworks:c,hideInitalCodePreview:d,availableFrameworks:u}=e;const{pathname:m}=(0,o.TH)(),v=(0,r.Z)("/"),[g,h]=(0,i.useState)(!d),[b,w]=(0,i.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||f.ANGULAR}(u)),[y,E]=(0,i.useState)();(0,i.useEffect)((()=>{const e=function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(m),n=localStorage.getItem(e);var t;n&&((t=n)===f.ANGULAR||t===f.JAVASCRIPT||t===f.REACT)&&w(n)}),[]),(0,i.useEffect)((()=>{const e={};Object.keys(c).forEach((t=>{if("function"==typeof c[t]){let a=n;t===f.REACT&&(a=a.concat(".tsx")),t===f.JAVASCRIPT&&(a=a.concat(".html")),t===f.ANGULAR&&(a=a.concat(".ts")),e[t]=[{filename:a,node:c[t]({})}]}"object"==typeof c[t]&&(e[t]||(e[t]=[]),Object.keys(c[t]).forEach((n=>{e[t].push({filename:n,node:c[t][n]})})))})),E(e)}),[c,E]);const k=e=>{w(e),m&&localStorage.setItem(`docusaurus.playground${m.replace(/\//g,".")}`,e)};function x(e){return!u||(0===u.length||u.includes(e))}return i.createElement("div",{className:"Playground"},i.createElement("div",{className:"Playground__Toolbar Location__Top"},i.createElement("div",{className:"Playground__Toolbar__Actions"},i.createElement($,{onClick:()=>h(!g),showCode:g}))),i.createElement(p.Z,{name:n,height:t,noMargin:a,theme:s}),g?i.createElement(i.Fragment,null,i.createElement("div",{className:"Playground__Toolbar Location__Bottom"},x(f.ANGULAR)?i.createElement(l._h,{className:"Playground__Framework__Button",ghost:b!==f.ANGULAR,onClick:()=>k(f.ANGULAR)},"Angular"):null,x(f.REACT)?i.createElement(l._h,{className:"Playground__Framework__Button",ghost:b!==f.REACT,onClick:()=>k(f.REACT)},"React"):null,x(f.JAVASCRIPT)?i.createElement(l._h,{className:"Playground__Framework__Button",ghost:b!==f.JAVASCRIPT,onClick:()=>k(f.JAVASCRIPT)},"JavaScript"):null,i.createElement("div",{className:"Playground__Toolbar__Actions"},i.createElement(R,{name:n,framework:b}),i.createElement(_,{name:n,framework:b,baseUrl:v,files:y?y[b].map((e=>e.filename)):[]}))),function(){if(!y||!y[b])return null;if(1===y[b].length){const[{node:e}]=y[b];return e}return i.createElement(I,{files:y[b]})}()):null)}},64176:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(82009),o=t(1112),r=t(2784),l=t(77942);const i={angular:1,react:2,javascript:3,preview:4};function s(e){const n=e.children??[],t=Array.isArray(n)?n:[n];return r.createElement(o.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Components"}].filter((e=>t.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[r.createElement(a.Z,{value:"preview",key:"preview"},r.createElement(l.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...t].sort(((e,n)=>i[e.props.value]-i[n.props.value])))}},69874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(7896),o=(t(2784),t(30876));const r={},l=void 0,i={unversionedId:"auto-generated/previews/angular/modal.ts",id:"auto-generated/previews/angular/modal.ts",title:"modal.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/modal.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/modal.ts",permalink:"/docs/auto-generated/previews/angular/modal.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/modal.ts.md",tags:[],version:"current",frontMatter:{}},s={},c=[],d={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component, TemplateRef, ViewChild } from \'@angular/core\';\nimport { ModalService } from \'@siemens/ix-angular\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-button (click)="openModal()">Show modal</ix-button>\n\n    <ng-template #customModal let-modal>\n      <div>\n        <div class="modal-header">\n          Message headline\n          <ix-icon-button\n            data-button-close\n            ghost\n            icon="close"\n            class="dismiss-modal"\n            (click)="modal.dismiss(\'dismiss\')"\n          ></ix-icon-button>\n        </div>\n        <div class="modal-body">Message text lorem ipsum: {{ modal.data }}</div>\n        <div class="modal-footer">\n          <ix-button\n            outline\n            class="dismiss-modal"\n            (click)="modal.dismiss(\'dismiss\')"\n          >\n            Cancel\n          </ix-button>\n          <ix-button class="close-modal" (click)="modal.close(\'okay\')">\n            OK\n          </ix-button>\n        </div>\n      </div>\n    </ng-template>\n  `,\n})\nexport default class Modal {\n  @ViewChild(\'customModal\', { read: TemplateRef })\n  customModalRef!: TemplateRef<any>;\n\n  constructor(private readonly modalService: ModalService) {}\n\n  async openModal() {\n    const instance = await this.modalService.open({\n      content: this.customModalRef,\n      title: \'\',\n      data: \'Some data\',\n    });\n\n    instance.onClose.on((a) => {\n      console.log(a);\n    });\n\n    instance.htmlElement.addEventListener(\n      \'keydown\',\n      (keyboardEvent: KeyboardEvent) => {\n        console.log(keyboardEvent.key);\n      }\n    );\n  }\n}\n')))}u.isMDXComponent=!0},93086:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(7896),o=(t(2784),t(30876));const r={},l=void 0,i={unversionedId:"auto-generated/previews/react/modal",id:"auto-generated/previews/react/modal",title:"modal",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/modal.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/modal",permalink:"/docs/auto-generated/previews/react/modal",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/modal.md",tags:[],version:"current",frontMatter:{}},s={},c=[],d={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  IxButton,\n  IxIconButton,\n  Modal,\n  ModalRef,\n  showModal,\n} from '@siemens/ix-react';\nimport React, { useRef } from 'react';\n\nfunction CustomModal() {\n  const modalRef = useRef<ModalRef>(null);\n\n  const close = () => {\n    modalRef.current?.close('close payload!');\n  };\n  const dismiss = () => {\n    modalRef.current?.dismiss('dismiss payload');\n  };\n\n  return (\n    <Modal ref={modalRef}>\n      <div className=\"modal-header\">\n        Message headline\n        <IxIconButton\n          data-button-close\n          ghost\n          icon=\"close\"\n          onClick={() => dismiss()}\n        ></IxIconButton>\n      </div>\n      <div className=\"modal-body\">Message text lorem ipsum</div>\n      <div className=\"modal-footer\">\n        <IxButton outline onClick={() => dismiss()}>\n          Cancel\n        </IxButton>\n        <IxButton onClick={() => close()}>OK</IxButton>\n      </div>\n    </Modal>\n  );\n}\n\nexport default () => {\n  async function show() {\n    const modal = await showModal({\n      title: 'test',\n      content: <CustomModal />,\n    });\n\n    modal.htmlElement.addEventListener('keypress', (keyboardEvent) => {\n      console.log(keyboardEvent.key);\n    });\n  }\n\n  return (\n    <>\n      <IxButton onClick={show}>Show modal</IxButton>\n    </>\n  );\n};\n")))}u.isMDXComponent=!0},19286:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(7896),o=(t(2784),t(30876));const r={},l=void 0,i={unversionedId:"auto-generated/previews/web-component/modal",id:"auto-generated/previews/web-component/modal",title:"modal",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/modal.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/modal",permalink:"/docs/auto-generated/previews/web-component/modal",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/modal.md",tags:[],version:"current",frontMatter:{}},s={},c=[],d={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<ix-button>Show modal</ix-button>\n<script type=\"module\">\n  import { modal, closeModal, dismissModal } from '@siemens/ix';\n\n  function createExampleModal() {\n    const name = 'modal-example';\n    window.customElements.define(\n      name,\n      class extends HTMLElement {\n        isInitalRender = false;\n\n        constructor() {\n          super();\n        }\n\n        connectedCallback() {\n          if (this.isInitalRender) {\n            return;\n          }\n\n          this.isInitalRender = true;\n          this.firstRender();\n        }\n\n        firstRender() {\n          const modalTemplate = document.createElement('template');\n          modalTemplate.innerHTML = `\n          <div>\n            <div class=\"modal-header\">\n            Message headline\n            <ix-icon-button\n              data-button-close\n              ghost\n              icon=\"close\"\n              class=\"dismiss-modal\"\n            ></ix-icon-button>\n            </div>\n            <div class=\"modal-body\">Message text lorem ipsum</div>\n            <div class=\"modal-footer\">\n              <ix-button outline class=\"dismiss-modal\"> Cancel </ix-button>\n              <ix-button class=\"close-modal\">OK</ix-button>\n            </div>\n          </div>\n          `;\n\n          const template = modalTemplate.content.cloneNode(true);\n          this.append(template);\n        }\n      }\n    );\n\n    return name;\n  }\n\n  (async function () {\n    const exampleModalName = createExampleModal();\n\n    await window.customElements.whenDefined('ix-button');\n    const button = document.querySelector('ix-button');\n\n    button.addEventListener('click', async () => {\n      const customModal = document.createElement(exampleModalName);\n\n      const m = await modal({\n        content: customModal,\n      });\n\n      m.htmlElement\n        .querySelector('.close-modal')\n        .addEventListener('click', () => {\n          closeModal(customModal, 'Done!');\n        });\n\n      m.htmlElement.querySelectorAll('.dismiss-modal').forEach((item) =>\n        item.addEventListener('click', () => {\n          dismissModal(customModal, 'cancelled!');\n        })\n      );\n\n      m.htmlElement.addEventListener('keydown', (keyEvent) => {\n        console.log(keyEvent.key);\n      });\n    });\n  })();\n<\/script>\n")))}u.isMDXComponent=!0},23659:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var a=t(7896),o=(t(2784),t(30876)),r=(t(1112),t(82009),t(64176),t(30024)),l=t(19286),i=t(93086),s=t(69874);const c={},d="Modal",u={unversionedId:"controls/modal",id:"controls/modal",title:"Modal",description:"How to open a modal depends on the framework in use. Note that you will not instantiate ix-modal on your own.",source:"@site/docs/controls/modal.md",sourceDirName:"controls",slug:"/controls/modal",permalink:"/docs/controls/modal",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/modal.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Message bar",permalink:"/docs/controls/messagebar"},next:{title:"Pill",permalink:"/docs/controls/pill"}},m={},p=[{value:"Angular specific",id:"angular-specific",level:2},{value:"Usage",id:"usage",level:2}],f={toc:p};function v(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modal"},"Modal"),(0,o.kt)("p",null,"How to open a modal depends on the framework in use. Note that you will not instantiate ",(0,o.kt)("inlineCode",{parentName:"p"},"ix-modal")," on your own.\nSelect the appropriate tab below for the respective usage information."),(0,o.kt)("h2",{id:"angular-specific"},"Angular specific"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@siemens/ix-angular")," provides an injectable service that allows you to open modal dialogs based on a ",(0,o.kt)("inlineCode",{parentName:"p"},"ng-template")," reference.\nIf you want to pass arbitrary data to the modal use the ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),"-property. In order to access that inside the modal template use ",(0,o.kt)("inlineCode",{parentName:"p"},"let-modal")," as seen in the angular example above."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(r.Z,{name:"modal",height:"35rem",frameworks:{react:i.default,angular:s.default,javascript:l.default},mdxType:"Playground"}))}v.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46669,5288,76405,51882],{30876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=i,h=d["".concat(c,".").concat(p)]||d[p]||u[p]||a;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14091:(e,t,n)=>{n.d(t,{Z:()=>S});var r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],i={clickToLoad:function(e){return o("ctl",e)},devToolsHeight:function(e){return s("devtoolsheight",e)},forceEmbedLayout:function(e){return o("embed",e)},hideDevTools:function(e){return o("hidedevtools",e)},hideExplorer:function(e){return o("hideExplorer",e)},hideNavigation:function(e){return o("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return s("terminalHeight",e)},theme:function(e){return c("theme",["light","dark"],e)},view:function(e){return c("view",["preview","editor"],e)}};function a(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&i.hasOwnProperty(t)?i[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function o(e,t){return!0===t?e+"=1":""}function s(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function c(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function l(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function m(e,t){return""+d(t)+e+a(t)}function u(e,t){var n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),""+d(n)+e+a(n)}function d(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function p(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t){t&&"object"==typeof t&&(Object.hasOwnProperty.call(t,"height")&&(e.height=""+t.height),Object.hasOwnProperty.call(t,"width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}(t,n),e.parentNode.replaceChild(t,e)}function h(e){if("string"==typeof e){var t=document.getElementById(e);if(!t)throw new Error("Could not find element with id '"+e+"'");return t}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function f(e){return e&&!1===e.newWindow?"_self":"_blank"}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var v=function(){function e(e){this.port=void 0,this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}var t=e.prototype;return t.request=function(e){var t=this,n=e.type,r=e.payload,i=l();return new Promise((function(e,a){t.pending[i]={resolve:e,reject:a},t.port.postMessage({type:n,payload:g({},r,{__reqid:i})})}))},t.messageListener=function(e){var t;if("string"==typeof(null==(t=e.data.payload)?void 0:t.__reqid)){var n=e.data,r=n.type,i=n.payload,a=i.__reqid,o=i.__error;this.pending[a]&&(i.__success?this.pending[a].resolve(function(e){var t=g({},e);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}(i)):this.pending[a].reject(o?r+": "+o:r),delete this.pending[a])}},e}(),w=function(){function e(e,t){var n=this;this._rdc=void 0,this.editor={openFile:function(e){return n._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})},setCurrentFile:function(e){return n._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}})},setTheme:function(e){return n._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}})},setView:function(e){return n._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}})},showSidebar:function(e){return void 0===e&&(e=!0),n._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})}},this.preview={origin:"",getUrl:function(){return n._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((function(e){var t;return null!=(t=null==e?void 0:e.url)?t:null}))},setUrl:function(e){if(void 0===e&&(e="/"),"string"!=typeof e||!e.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+e+"'");return n._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new v(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}var t=e.prototype;return t.applyFsDiff=function(e){var t=function(e){return null!==e&&"object"==typeof e};if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},t.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},t.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),y=[],b=function(e){var t=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=l(),this.element=e,this.pending=new Promise((function(e,n){var r=function(n){var r=n.data;"SDK_INIT_SUCCESS"===(null==r?void 0:r.action)&&r.id===t.id&&(t.vm=new w(n.ports[0],r.payload),e(t.vm),a())},i=function(){var e;null==(e=t.element.contentWindow)||e.postMessage({action:"SDK_INIT",id:t.id},"*")};function a(){window.clearInterval(s),window.removeEventListener("message",r)}window.addEventListener("message",r),i();var o=0,s=window.setInterval((function(){if(t.vm)a();else{if(o>=20)return a(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void y.forEach((function(e,n){e.id===t.id&&y.splice(n,1)}));o++,i()}}),500)})),y.push(this)};function E(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function k(e){if(!r.includes(e.template)){var t=r.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,i=document.createElement("form");return i.method="POST",i.setAttribute("style","display:none!important;"),i.appendChild(E("project[title]",e.title)),i.appendChild(E("project[description]",e.description)),i.appendChild(E("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):i.appendChild(E("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&i.appendChild(E("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&i.appendChild(E("project[files]["+t+"]",e.files[t]))})),i}function x(e){var t,n,r,i;return null!=e&&e.contentWindow?(null!=(i=(n=e)instanceof Element?"element":"id",t=null!=(r=y.find((function(e){return e[i]===n})))?r:null)?t:new b(e)).pending:Promise.reject("Provided element is not an iframe.")}var S={connect:x,embedGithubProject:function(e,t,n){var r=h(e),i=document.createElement("iframe");return i.src=u("/github/"+t,n),p(r,i,n),x(i)},embedProject:function(e,t,n){var r,i=h(e),a=function(e,t){var n=k(e);return n.action=u("/run",t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('"+n.id+"').submit();<\/script></body></html>"}(t,n),o=document.createElement("iframe");return p(i,o,n),null==(r=o.contentDocument)||r.write(a),x(o)},embedProjectId:function(e,t,n){var r=h(e),i=document.createElement("iframe");return i.src=u("/edit/"+t,n),p(r,i,n),x(i)},openGithubProject:function(e,t){var n=m("/github/"+e,t),r=f(t);window.open(n,r)},openProject:function(e,t){!function(e,t){var n=k(e);n.action=m("/run",t),n.target=f(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){var n=m("/edit/"+e,t),r=f(t);window.open(n,r)}}},2176:(e,t,n)=>{n.d(t,{Z:()=>o});var r,i=n(2784);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const o=e=>{let{title:t,titleId:n,...o}=e;return i.createElement("svg",a({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},o),t?i.createElement("title",{id:n},t):null,r||(r=i.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))}},731:(e,t,n)=>{n.d(t,{Q:()=>i,h:()=>a});var r=n(2784);function i(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),r.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function a(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag"},"Since ",e.message))}},77942:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(37949),i=n(90077),a=n(37614),o=n(2784),s=n(90943);function c(e){const t=(0,a.Z)(),[n]=(0,o.useState)(!1),c=(0,i.Z)("/"),[l,m]=(0,o.useState)(""),[u,d]=(0,o.useState)((0,s.V)(t)),{preferredVersion:p}=(0,r.J)();return(0,o.useEffect)((()=>{const t=null==p?void 0:p.name;m(void 0===t||"current"===t?c+`webcomponent-examples/dist/preview-examples/${e.name}.html`:c+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[c,null==p?void 0:p.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,s.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),d(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),o.createElement(o.Fragment,null,n?o.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==p?void 0:p.name):o.createElement("iframe",{src:`${l}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},6404:(e,t,n)=>{n.d(t,{Z:()=>E});var r,i=n(7267),a=n(90077),o=n(53849),s=n(2176),c=n(2784);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const m=e=>{let{title:t,titleId:n,...i}=e;return c.createElement("svg",l({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},i),t?c.createElement("title",{id:n},t):null,r||(r=c.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var u=n(77942);let d;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview"}(d||(d={}));var p=n(14091);const h="https://github.com/siemens/ix/tree/main/packages";function f(e){let{name:t,framework:n}=e;const r=function(e){let{name:t,framework:n}=e;return n===d.ANGULAR?`${h}/angular-test-app/src/preview-examples/${t}.ts`:n===d.JAVASCRIPT?`${h}/html-test-app/src/preview-examples/${t}.html`:n===d.REACT?`${h}/react-test-app/src/preview-examples/${t}.tsx`:n===d.VUE?`${h}/vue-test-app/src/preview-examples/${t}.vue`:void 0}({framework:n,name:t});window.open(r,"_blank")}async function g(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function v(e){let{name:t,framework:n,files:r,baseUrl:i}=e;const a=await async function(e,t,n){const r=[];return(await g(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{r.push({filename:n[t],sourceCode:e})})),r}(i,n,r);return n===d.REACT?async function(e,t){const[n,r,i,a,o]=await g([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[s]=t,c={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;c[`src/${t}`]=n})),p.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...c,"public/index.html":r,"src/index.tsx":i,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${s.filename.substring(0,s.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":a,"tsconfig.json":o,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${s.filename}`})}(i,a):n===d.ANGULAR?async function(e,t,n){const[r,i,a,o,s,c,l,m,u,d,h]=await g([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),f=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&f.push(t)}));const v=`\n    ${f.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${f.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,w={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;w[`src/app/${t}`]=n})),p.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":v,"src/app/app.component.css":r,"src/app/app.component.html":i,"src/app/app.component.ts":a,"src/app/app.module.ts":o,"src/index.html":s,"src/main.ts":c,"src/styles.css":l,"angular.json":m,"package.json":u,"tsconfig.app.json":d,"tsconfig.json":h,...w}},{openFile:`src/app/${t}.ts`})}(i,t,a):n===d.JAVASCRIPT?async function(e,t){const[n,r,i,a]=await g([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[o,...s]=t,c={};s.forEach((e=>{c[`src/${e.filename}`]=e.sourceCode})),p.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...c,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",o.sourceCode),"src/main.js":r,"package.json":i,"vite.config.ts":a}},{openFile:["src/index.html"]})}(i,a):n===d.VUE?async function(e,t){const[n,r,i,a,o,s,c]=await g([`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),[l]=t,m={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;m[`src/${t}`]=n})),p.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...m,"index.html":r,"src/main.ts":i,"src/App.vue":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${l.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":c,"package.json":a,"tsconfig.json":o,"vite.config.ts":s,".stackblitzrc":'{\n          "startCommand": "yarn run dev"\n        }'}},{openFile:`src/${l.filename}`})}(i,a):void 0}function w(e){let{name:t,framework:n}=e;return c.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>f({name:t,framework:n})},c.createElement(s.Z,null))}function y(e){let{name:t,files:n,framework:r,baseUrl:i}=e;return c.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>v({name:t,files:n,framework:r,baseUrl:i})},c.createElement(m,null))}function b(e){const[t,n]=(0,c.useState)(e.files[0].filename);return c.createElement(c.Fragment,null,c.createElement(o.Vp,null,e.files.map((e=>{e.node;return c.createElement(o.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const r=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return r?c.createElement(r,null):null}())}function E(e){let{name:t,height:n,noMargin:r,theme:s,frameworks:l,availableFrameworks:m}=e;const{pathname:p}=(0,i.TH)(),h=(0,a.Z)("/"),[f,g]=(0,c.useState)(!0),[v,E]=(0,c.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||d.PREVIEW}(m)),[k,x]=(0,c.useState)();(0,c.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(p+t)),[t,p]);(0,c.useEffect)((()=>{const e={};l&&(Object.keys(l).forEach((n=>{if("function"==typeof l[n]){let r=t;n===d.REACT&&(r=r.concat(".tsx")),n===d.JAVASCRIPT&&(r=r.concat(".html")),n===d.ANGULAR&&(r=r.concat(".ts")),n===d.VUE&&(r=r.concat(".vue")),e[n]=[{filename:r,node:l[n]({})}]}"object"==typeof l[n]&&(e[n]||(e[n]=[]),Object.keys(l[n]).forEach((t=>{e[n].push({filename:t,node:l[n][t]})})))})),x(e))}),[l,x]);const S=e=>{E(e)};function C(e){return m?0===m.length||m.includes(e):Object.keys(l).some((t=>t===e))}return c.createElement("div",{className:"Playground"},f?c.createElement(c.Fragment,null,c.createElement("div",{className:"Playground__Toolbar Location__Bottom"},c.createElement(o.Vp,null,c.createElement(o.t3,{selected:v===d.PREVIEW,onClick:()=>S(d.PREVIEW)},"Preview"),C(d.ANGULAR)?c.createElement(o.t3,{selected:v===d.ANGULAR,onClick:()=>S(d.ANGULAR)},"Angular"):null,C(d.REACT)?c.createElement(o.t3,{selected:v===d.REACT,onClick:()=>S(d.REACT)},"React"):null,C(d.JAVASCRIPT)?c.createElement(o.t3,{selected:v===d.JAVASCRIPT,onClick:()=>S(d.JAVASCRIPT)},"JavaScript"):null,C(d.VUE)?c.createElement(o.t3,{selected:v===d.VUE,onClick:()=>S(d.VUE)},"Vue"):null),c.createElement("div",{className:"Playground__Toolbar__Actions"},v!==d.PREVIEW?c.createElement(c.Fragment,null,c.createElement(w,{name:t,framework:v}),c.createElement(y,{name:t,framework:v,baseUrl:h,files:k?v===d.PREVIEW?[]:k[v].map((e=>e.filename)):[]})):null)),function(){if(v===d.PREVIEW)return c.createElement(u.Z,{name:t,height:n,noMargin:r,theme:s});if(!k||!k[v])return null;if(1===k[v].length){const[{node:e}]=k[v];return e}return c.createElement(b,{files:k[v]})}()):null)}},57128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7896),i=(n(2784),n(30876));const a={},o=void 0,s={unversionedId:"auto-generated/previews/angular/theme-switcher.ts",id:"auto-generated/previews/angular/theme-switcher.ts",title:"theme-switcher.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/theme-switcher.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/theme-switcher.ts",permalink:"/docs/auto-generated/previews/angular/theme-switcher.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/theme-switcher.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],m={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\nimport { ThemeService } from \'@siemens/ix-angular\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-button class="mb-2" (click)="themeService.toggleMode()">\n      Toggle mode\n    </ix-button>\n    <ix-select\n      (itemSelectionChange)="onItemSelectionChange($event)"\n      placeholder="Select a theme"\n    >\n      <ix-select-item\n        label="Classic light"\n        value="theme-classic-light"\n      ></ix-select-item>\n      <ix-select-item\n        label="Classic dark"\n        value="theme-classic-dark"\n      ></ix-select-item>\n    </ix-select>\n  `,\n})\nexport default class ThemeSwitcherService {\n  constructor(readonly themeService: ThemeService) {}\n\n  onItemSelectionChange(event: Event) {\n    const customEvent = event as CustomEvent<string | string[]>;\n    this.themeService.setTheme(customEvent.detail[0]);\n  }\n}\n')))}u.isMDXComponent=!0},7635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7896),i=(n(2784),n(30876));const a={},o=void 0,s={unversionedId:"auto-generated/previews/react/theme-switcher",id:"auto-generated/previews/react/theme-switcher",title:"theme-switcher",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/theme-switcher.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/theme-switcher",permalink:"/docs/auto-generated/previews/react/theme-switcher",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/theme-switcher.md",tags:[],version:"current",frontMatter:{}},c={},l=[],m={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nimport { themeSwitcher } from \'@siemens/ix\';\nimport { IxButton, IxSelect, IxSelectItem } from \'@siemens/ix-react\';\nimport React from \'react\';\nexport default () => {\n  return (\n    <>\n      <IxButton className="mb-2" onClick={() => themeSwitcher.toggleMode()}>\n        Toggle mode\n      </IxButton>\n      <IxSelect\n        onItemSelectionChange={({ detail: [theme] }) => {\n          themeSwitcher.setTheme(theme);\n        }}\n        placeholder="Select a theme"\n      >\n        <IxSelectItem\n          label="Classic light"\n          value="theme-classic-light"\n        ></IxSelectItem>\n        <IxSelectItem\n          label="Classic dark"\n          value="theme-classic-dark"\n        ></IxSelectItem>\n      </IxSelect>\n    </>\n  );\n};\n')))}u.isMDXComponent=!0},19809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7896),i=(n(2784),n(30876));const a={},o=void 0,s={unversionedId:"auto-generated/previews/web-component/theme-switcher",id:"auto-generated/previews/web-component/theme-switcher",title:"theme-switcher",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/theme-switcher.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/theme-switcher",permalink:"/docs/auto-generated/previews/web-component/theme-switcher",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/theme-switcher.md",tags:[],version:"current",frontMatter:{}},c={},l=[],m={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ix-button id="toggleModeButton" class="mb-2">Toggle mode</ix-button>\n<ix-select id="selectTheme">\n  <ix-select-item\n    label="Classic light"\n    value="theme-classic-light"\n  ></ix-select-item>\n  <ix-select-item\n    label="Classic dark"\n    value="theme-classic-dark"\n  ></ix-select-item>\n</ix-select>\n\n<script type="module">\n  import { themeSwitcher } from \'@siemens/ix\';\n\n  (async function () {\n    document\n      .getElementById(\'toggleModeButton\')\n      .addEventListener(\'click\', () => {\n        themeSwitcher.toggleMode();\n      });\n\n    document\n      .getElementById(\'selectTheme\')\n      .addEventListener(\'itemSelectionChange\', ({ detail: [theme] }) => {\n        themeSwitcher.setTheme(theme);\n      });\n\n    themeSwitcher.themeChanged.on((theme) => console.log(theme));\n  })();\n<\/script>\n')))}u.isMDXComponent=!0},9642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>m,metadata:()=>d,toc:()=>h});var r=n(7896),i=(n(2784),n(30876)),a=n(6404),o=n(19809),s=n(7635),c=n(57128),l=n(731);const m={sidebar_position:2},u="Themes",d={unversionedId:"guidelines/theme",id:"guidelines/theme",title:"Themes",description:"Siemens Industrial Experience supports theming for all of its components.",source:"@site/docs/guidelines/theme.md",sourceDirName:"guidelines",slug:"/guidelines/theme",permalink:"/docs/guidelines/theme",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/guidelines/theme.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mySidebar",previous:{title:"Shadows",permalink:"/docs/theming/shadow"},next:{title:"Basics",permalink:"/docs/language/basics"}},p={},h=[{value:"How to set a theme",id:"how-to-set-a-theme",level:2},{value:"Siemens AG Corporate Brand Theme",id:"siemens-ag-corporate-brand-theme",level:2},{value:"Working with themes during runtime",id:"working-with-themes-during-runtime",level:2}],f={toc:h};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"themes"},"Themes"),(0,i.kt)("p",null,"Siemens Industrial Experience supports theming for all of its components."),(0,i.kt)("p",null,"Everyone can use the two embedded themes that already ship with Siemens Industrial Experience:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Classic light (theme-classic-light)"),(0,i.kt)("li",{parentName:"ul"},"Classic dark (theme-classic-dark)")),(0,i.kt)("p",null,"You can also create your own themes in order to customize the design system to your own brand."),(0,i.kt)("p",null,"Siemens AG applications should utilize the exclusive Siemens AG Corporate Brand Theme."),(0,i.kt)("h2",{id:"how-to-set-a-theme"},"How to set a theme"),(0,i.kt)("p",null,"The default theme is ",(0,i.kt)("inlineCode",{parentName:"p"},"theme-classic-dark"),". To set a different theme change the ",(0,i.kt)("inlineCode",{parentName:"p"},"class")," attribute of the ",(0,i.kt)("inlineCode",{parentName:"p"},"<body>")," tag to contain e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"theme-classic-light")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"theme-classic-dark"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  \x3c!-- Framework related imports --\x3e\n  \x3c!--  --\x3e\n  <body class="theme-classic-light"></body>\n</html>\n')),(0,i.kt)("h2",{id:"siemens-ag-corporate-brand-theme"},"Siemens AG Corporate Brand Theme"),(0,i.kt)("div",{className:"siemens-brand-section"},(0,i.kt)("p",null,"The Siemens AG Corporate Brand Theme is exclusively available to official Siemens AG products where it should always be used as the default theme to reflect the latest Siemens AG Corporate Brand guidelines."),(0,i.kt)("p",null,"Siemens AG employees can access the Corporate Brand Theme ",(0,i.kt)("a",{parentName:"p",href:"https://code.siemens.com/siemens-ix/ix-brand-theme"},"here"),".")),(0,i.kt)("h2",{id:"working-with-themes-during-runtime"},"Working with themes during runtime"),(0,i.kt)(l.h,{message:"1.3.0",mdxType:"ApiTableSinceTag"}),(0,i.kt)(a.Z,{name:"theme-switcher",height:"15rem",frameworks:{react:s.default,angular:c.default,javascript:o.default},mdxType:"Playground"}))}g.isMDXComponent=!0}}]);
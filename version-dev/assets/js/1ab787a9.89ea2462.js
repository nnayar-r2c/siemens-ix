"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25957,98017,62013,27578,83248,42135,69248],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,v=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14091:(e,t,n)=>{n.d(t,{Z:()=>T});var r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],a={clickToLoad:function(e){return i("ctl",e)},devToolsHeight:function(e){return s("devtoolsheight",e)},forceEmbedLayout:function(e){return i("embed",e)},hideDevTools:function(e){return i("hidedevtools",e)},hideExplorer:function(e){return i("hideExplorer",e)},hideNavigation:function(e){return i("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return s("terminalHeight",e)},theme:function(e){return l("theme",["light","dark"],e)},view:function(e){return l("view",["preview","editor"],e)}};function o(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&a.hasOwnProperty(t)?a[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function i(e,t){return!0===t?e+"=1":""}function s(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function l(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function c(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function u(e,t){return""+m(t)+e+o(t)}function p(e,t){var n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),""+m(n)+e+o(n)}function m(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function d(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t){t&&"object"==typeof t&&(Object.hasOwnProperty.call(t,"height")&&(e.height=""+t.height),Object.hasOwnProperty.call(t,"width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}(t,n),e.parentNode.replaceChild(t,e)}function v(e){if("string"==typeof e){var t=document.getElementById(e);if(!t)throw new Error("Could not find element with id '"+e+"'");return t}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function f(e){return e&&!1===e.newWindow?"_self":"_blank"}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var w=function(){function e(e){this.port=void 0,this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}var t=e.prototype;return t.request=function(e){var t=this,n=e.type,r=e.payload,a=c();return new Promise((function(e,o){t.pending[a]={resolve:e,reject:o},t.port.postMessage({type:n,payload:g({},r,{__reqid:a})})}))},t.messageListener=function(e){var t;if("string"==typeof(null==(t=e.data.payload)?void 0:t.__reqid)){var n=e.data,r=n.type,a=n.payload,o=a.__reqid,i=a.__error;this.pending[o]&&(a.__success?this.pending[o].resolve(function(e){var t=g({},e);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}(a)):this.pending[o].reject(i?r+": "+i:r),delete this.pending[o])}},e}(),b=function(){function e(e,t){var n=this;this._rdc=void 0,this.editor={openFile:function(e){return n._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})},setCurrentFile:function(e){return n._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}})},setTheme:function(e){return n._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}})},setView:function(e){return n._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}})},showSidebar:function(e){return void 0===e&&(e=!0),n._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})}},this.preview={origin:"",getUrl:function(){return n._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((function(e){var t;return null!=(t=null==e?void 0:e.url)?t:null}))},setUrl:function(e){if(void 0===e&&(e="/"),"string"!=typeof e||!e.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+e+"'");return n._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new w(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}var t=e.prototype;return t.applyFsDiff=function(e){var t=function(e){return null!==e&&"object"==typeof e};if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},t.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},t.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),h=[],E=function(e){var t=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=c(),this.element=e,this.pending=new Promise((function(e,n){var r=function(n){var r=n.data;"SDK_INIT_SUCCESS"===(null==r?void 0:r.action)&&r.id===t.id&&(t.vm=new b(n.ports[0],r.payload),e(t.vm),o())},a=function(){var e;null==(e=t.element.contentWindow)||e.postMessage({action:"SDK_INIT",id:t.id},"*")};function o(){window.clearInterval(s),window.removeEventListener("message",r)}window.addEventListener("message",r),a();var i=0,s=window.setInterval((function(){if(t.vm)o();else{if(i>=20)return o(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void h.forEach((function(e,n){e.id===t.id&&h.splice(n,1)}));i++,a()}}),500)})),h.push(this)};function y(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function x(e){if(!r.includes(e.template)){var t=r.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(y("project[title]",e.title)),a.appendChild(y("project[description]",e.description)),a.appendChild(y("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(y("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&a.appendChild(y("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&a.appendChild(y("project[files]["+t+"]",e.files[t]))})),a}function _(e){var t,n,r,a;return null!=e&&e.contentWindow?(null!=(a=(n=e)instanceof Element?"element":"id",t=null!=(r=h.find((function(e){return e[a]===n})))?r:null)?t:new E(e)).pending:Promise.reject("Provided element is not an iframe.")}var T={connect:_,embedGithubProject:function(e,t,n){var r=v(e),a=document.createElement("iframe");return a.src=p("/github/"+t,n),d(r,a,n),_(a)},embedProject:function(e,t,n){var r,a=v(e),o=function(e,t){var n=x(e);return n.action=p("/run",t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('"+n.id+"').submit();<\/script></body></html>"}(t,n),i=document.createElement("iframe");return d(a,i,n),null==(r=i.contentDocument)||r.write(o),_(i)},embedProjectId:function(e,t,n){var r=v(e),a=document.createElement("iframe");return a.src=p("/edit/"+t,n),d(r,a,n),_(a)},openGithubProject:function(e,t){var n=u("/github/"+e,t),r=f(t);window.open(n,r)},openProject:function(e,t){!function(e,t){var n=x(e);n.action=u("/run",t),n.target=f(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){var n=u("/edit/"+e,t),r=f(t);window.open(n,r)}}},2176:(e,t,n)=>{n.d(t,{Z:()=>i});var r,a=n(2784);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const i=e=>{let{title:t,titleId:n,...i}=e;return a.createElement("svg",o({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},i),t?a.createElement("title",{id:n},t):null,r||(r=a.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))}},63483:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(2784),a=n(731);function o(e){var t,n,o,i,s,l,c,u;return r.createElement("div",{className:"row with--border"},r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(n=e.attribute)||null==(o=n.tags)?void 0:o.filter((e=>"since"===e.type)).map((t=>{var n;return r.createElement(a.h,{message:t.message,key:`Tag_Since_${null==e||null==(n=e.attribute)?void 0:n.name}`})})),null==e||null==(i=e.attribute)||null==(s=i.tags)?void 0:s.filter((e=>"deprecated"===e.type)).map((t=>{var n;return r.createElement(a.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(n=e.attribute)?void 0:n.name}`})})))),r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"ApiTable__Content"},r.createElement("span",{className:"Attribute__Description"},null==e||null==(l=e.attribute)?void 0:l.description),r.createElement("div",{className:"container-fluid"},null==e||null==(c=e.attribute)||null==(u=c.definition)?void 0:u.map((e=>r.createElement("div",{className:"row Attribute",key:e.name},r.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),r.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const i=function(e){var t;return r.createElement("div",{className:"container-fluid ApiTable"},r.createElement("div",{className:"row with--border"},r.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),r.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>r.createElement(o,{attribute:e,key:e.name}))))}},731:(e,t,n)=>{n.d(t,{Q:()=>a,h:()=>o});var r=n(2784);function a(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),r.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function o(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag"},"Since ",e.message))}},77942:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(37949),a=n(90077),o=n(37614),i=n(2784),s=n(90943);function l(e){const t=(0,o.Z)(),[n]=(0,i.useState)(!1),l=(0,a.Z)("/"),[c,u]=(0,i.useState)(""),[p,m]=(0,i.useState)((0,s.V)(t)),{preferredVersion:d}=(0,r.J)();return(0,i.useEffect)((()=>{const t=null==d?void 0:d.name;u(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,null==d?void 0:d.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,s.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==d?void 0:d.name):i.createElement("iframe",{src:`${c}?theme=${e.theme?e.theme:p}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},6404:(e,t,n)=>{n.d(t,{Z:()=>y});var r,a=n(7267),o=n(90077),i=n(53849),s=n(2176),l=n(2784);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...a}=e;return l.createElement("svg",c({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?l.createElement("title",{id:n},t):null,r||(r=l.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var p=n(77942);let m;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview"}(m||(m={}));var d=n(14091);const v="https://github.com/siemens/ix/tree/main/packages";function f(e){let{name:t,framework:n}=e;const r=function(e){let{name:t,framework:n}=e;return n===m.ANGULAR?`${v}/angular-test-app/src/preview-examples/${t}.ts`:n===m.JAVASCRIPT?`${v}/html-test-app/src/preview-examples/${t}.html`:n===m.REACT?`${v}/react-test-app/src/preview-examples/${t}.tsx`:n===m.VUE?`${v}/vue-test-app/src/preview-examples/${t}.vue`:void 0}({framework:n,name:t});window.open(r,"_blank")}async function g(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function w(e){let{name:t,framework:n,files:r,baseUrl:a}=e;const o=await async function(e,t,n){const r=[];return(await g(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{r.push({filename:n[t],sourceCode:e})})),r}(a,n,r);return n===m.REACT?async function(e,t){const[n,r,a,o,i]=await g([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[s]=t,l={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;l[`src/${t}`]=n})),d.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...l,"public/index.html":r,"src/index.tsx":a,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${s.filename.substring(0,s.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":o,"tsconfig.json":i,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${s.filename}`})}(a,o):n===m.ANGULAR?async function(e,t,n){const[r,a,o,i,s,l,c,u,p,m,v]=await g([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),f=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&f.push(t)}));const w=`\n    ${f.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${f.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,b={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;b[`src/app/${t}`]=n})),d.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":w,"src/app/app.component.css":r,"src/app/app.component.html":a,"src/app/app.component.ts":o,"src/app/app.module.ts":i,"src/index.html":s,"src/main.ts":l,"src/styles.css":c,"angular.json":u,"package.json":p,"tsconfig.app.json":m,"tsconfig.json":v,...b}},{openFile:`src/app/${t}.ts`})}(a,t,o):n===m.JAVASCRIPT?async function(e,t){const[n,r,a,o]=await g([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[i,...s]=t,l={};s.forEach((e=>{l[`src/${e.filename}`]=e.sourceCode})),d.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...l,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",i.sourceCode),"src/main.js":r,"package.json":a,"vite.config.ts":o}},{openFile:["src/index.html"]})}(a,o):n===m.VUE?async function(e,t){const[n,r,a,o,i,s,l]=await g([`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),[c]=t,u={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;u[`src/${t}`]=n})),d.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...u,"index.html":r,"src/main.ts":a,"src/App.vue":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${c.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":l,"package.json":o,"tsconfig.json":i,"vite.config.ts":s,".stackblitzrc":'{\n          "startCommand": "yarn run dev"\n        }'}},{openFile:`src/${c.filename}`})}(a,o):void 0}function b(e){let{name:t,framework:n}=e;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>f({name:t,framework:n})},l.createElement(s.Z,null))}function h(e){let{name:t,files:n,framework:r,baseUrl:a}=e;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>w({name:t,files:n,framework:r,baseUrl:a})},l.createElement(u,null))}function E(e){const[t,n]=(0,l.useState)(e.files[0].filename);return l.createElement(l.Fragment,null,l.createElement(i.Vp,null,e.files.map((e=>{e.node;return l.createElement(i.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const r=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return r?l.createElement(r,null):null}())}function y(e){let{name:t,height:n,noMargin:r,theme:s,frameworks:c,availableFrameworks:u}=e;const{pathname:d}=(0,a.TH)(),v=(0,o.Z)("/"),[f,g]=(0,l.useState)(!0),[w,y]=(0,l.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||m.PREVIEW}(u)),[x,_]=(0,l.useState)();(0,l.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(d+t)),[t,d]);(0,l.useEffect)((()=>{const e={};c&&(Object.keys(c).forEach((n=>{if("function"==typeof c[n]){let r=t;n===m.REACT&&(r=r.concat(".tsx")),n===m.JAVASCRIPT&&(r=r.concat(".html")),n===m.ANGULAR&&(r=r.concat(".ts")),n===m.VUE&&(r=r.concat(".vue")),e[n]=[{filename:r,node:c[n]({})}]}"object"==typeof c[n]&&(e[n]||(e[n]=[]),Object.keys(c[n]).forEach((t=>{e[n].push({filename:t,node:c[n][t]})})))})),_(e))}),[c,_]);const T=e=>{y(e)};function N(e){return u?0===u.length||u.includes(e):Object.keys(c).some((t=>t===e))}return l.createElement("div",{className:"Playground"},f?l.createElement(l.Fragment,null,l.createElement("div",{className:"Playground__Toolbar Location__Bottom"},l.createElement(i.Vp,null,l.createElement(i.t3,{selected:w===m.PREVIEW,onClick:()=>T(m.PREVIEW)},"Preview"),N(m.ANGULAR)?l.createElement(i.t3,{selected:w===m.ANGULAR,onClick:()=>T(m.ANGULAR)},"Angular"):null,N(m.REACT)?l.createElement(i.t3,{selected:w===m.REACT,onClick:()=>T(m.REACT)},"React"):null,N(m.JAVASCRIPT)?l.createElement(i.t3,{selected:w===m.JAVASCRIPT,onClick:()=>T(m.JAVASCRIPT)},"JavaScript"):null,N(m.VUE)?l.createElement(i.t3,{selected:w===m.VUE,onClick:()=>T(m.VUE)},"Vue"):null),l.createElement("div",{className:"Playground__Toolbar__Actions"},w!==m.PREVIEW?l.createElement(l.Fragment,null,l.createElement(b,{name:t,framework:w}),l.createElement(h,{name:t,framework:w,baseUrl:v,files:x?w===m.PREVIEW?[]:x[w].map((e=>e.filename)):[]})):null)),function(){if(w===m.PREVIEW)return l.createElement(p.Z,{name:t,height:n,noMargin:r,theme:s});if(!x||!x[w])return null;if(1===x[w].length){const[{node:e}]=x[w];return e}return l.createElement(E,{files:x[w]})}()):null)}},59278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7896),a=(n(2784),n(30876)),o=n(63483);const i={},s=void 0,l={unversionedId:"auto-generated/ix-menu-about-news/events",id:"auto-generated/ix-menu-about-news/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-menu-about-news/events.md",sourceDirName:"auto-generated/ix-menu-about-news",slug:"/auto-generated/ix-menu-about-news/events",permalink:"/docs/auto-generated/ix-menu-about-news/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-menu-about-news/events.md",tags:[],version:"current",frontMatter:{}},c={},u=[],p={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{attributes:[{name:"closePopover",description:"Popover closed",definition:[{name:"Detail",value:"void"}],tags:[]},{name:"showMore",description:"Show More button is pressed",definition:[{name:"Detail",value:"MouseEvent"}],tags:[]}],mdxType:"ApiTable"}))}m.isMDXComponent=!0},55291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7896),a=(n(2784),n(30876)),o=n(63483);const i={},s=void 0,l={unversionedId:"auto-generated/ix-menu-about-news/props",id:"auto-generated/ix-menu-about-news/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-menu-about-news/props.md",sourceDirName:"auto-generated/ix-menu-about-news",slug:"/auto-generated/ix-menu-about-news/props",permalink:"/docs/auto-generated/ix-menu-about-news/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-menu-about-news/props.md",tags:[],version:"current",frontMatter:{}},c={},u=[],p={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{attributes:[{name:"aboutItemLabel",description:"Subtitle of the about news",definition:[{name:"Attribute",value:"about-item-label"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"expanded",description:"Internal",definition:[{name:"Attribute",value:"expanded"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"i18nShowMore",description:"",definition:[{name:"Attribute",value:"i-1-8n-show-more"},{name:"Type",value:"string"},{name:"Default",value:"'Show more'"}],tags:[]},{name:"label",description:"Title of the about news",definition:[{name:"Attribute",value:"label"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"offsetBottom",description:"Bottom offset",definition:[{name:"Attribute",value:"offset-bottom"},{name:"Type",value:"number"},{name:"Default",value:"0"}],tags:[]},{name:"show",description:"Show about news",definition:[{name:"Attribute",value:"show"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]}],mdxType:"ApiTable"}))}m.isMDXComponent=!0},79147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/angular/popover-news.ts",id:"auto-generated/previews/angular/popover-news.ts",title:"popover-news.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/popover-news.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/popover-news.ts",permalink:"/docs/auto-generated/previews/angular/popover-news.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/popover-news.ts.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-basic-navigation>\n      <div class="placeholder-logo" slot="logo"></div>\n      <ix-menu>\n        <ix-menu-about>\n          <ix-menu-about-item label="Example"> </ix-menu-about-item>\n        </ix-menu-about>\n        <ix-menu-about-news label="Test" show about-item-label="Example">\n          Test\n        </ix-menu-about-news>\n      </ix-menu>\n    </ix-basic-navigation>\n  `,\n})\nexport default class PopoverNews {}\n')))}p.isMDXComponent=!0},79553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/react/popover-news",id:"auto-generated/previews/react/popover-news",title:"popover-news",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/popover-news.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/popover-news",permalink:"/docs/auto-generated/previews/react/popover-news",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/popover-news.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  IxBasicNavigation,\n  IxMenu,\n  IxMenuAbout,\n  IxMenuAboutItem,\n  IxMenuAboutNews,\n} from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <IxBasicNavigation>\n      <div className="placeholder-logo" slot="logo"></div>\n      <IxMenu>\n        <IxMenuAbout>\n          <IxMenuAboutItem label="Example"> </IxMenuAboutItem>\n        </IxMenuAbout>\n        <IxMenuAboutNews label="Test" show about-item-label="Example">\n          Test\n        </IxMenuAboutNews>\n      </IxMenu>\n    </IxBasicNavigation>\n  );\n};\n')))}p.isMDXComponent=!0},94914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/vue/popover-news",id:"auto-generated/previews/vue/popover-news",title:"popover-news",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/popover-news.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/popover-news",permalink:"/docs/auto-generated/previews/vue/popover-news",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/popover-news.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport {\n  IxBasicNavigation,\n  IxMenu,\n  IxMenuAbout,\n  IxMenuAboutItem,\n  IxMenuAboutNews,\n} from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxBasicNavigation>\n    <div className="placeholder-logo" slot="logo"></div>\n    <IxMenu>\n      <IxMenuAbout>\n        <IxMenuAboutItem label="Example"> </IxMenuAboutItem>\n      </IxMenuAbout>\n      <IxMenuAboutNews label="Test" show about-item-label="Example">\n        Test\n      </IxMenuAboutNews>\n    </IxMenu>\n  </IxBasicNavigation>\n</template>\n')))}p.isMDXComponent=!0},57357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/web-component/popover-news",id:"auto-generated/previews/web-component/popover-news",title:"popover-news",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/popover-news.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/popover-news",permalink:"/docs/auto-generated/previews/web-component/popover-news",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/popover-news.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ix-basic-navigation>\n  <placeholder-logo slot="logo"></placeholder-logo>\n  <ix-menu>\n    <ix-menu-about>\n      <ix-menu-about-item label="Example"> </ix-menu-about-item>\n    </ix-menu-about>\n    <ix-menu-about-news label="Test" show about-item-label="Example">\n      Test\n    </ix-menu-about-news>\n  </ix-menu>\n</ix-basic-navigation>\n')))}p.isMDXComponent=!0},31436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>b,frontMatter:()=>m,metadata:()=>v,toc:()=>g});var r=n(7896),a=(n(2784),n(30876)),o=n(6404),i=n(55291),s=n(59278),l=n(57357),c=n(79553),u=n(79147),p=n(94914);const m={},d="Popover news",v={unversionedId:"controls/navigation/popover-news",id:"controls/navigation/popover-news",title:"Popover news",description:"Usage",source:"@site/docs/controls/navigation/popover-news.md",sourceDirName:"controls/navigation",slug:"/controls/navigation/popover-news",permalink:"/docs/controls/navigation/popover-news",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/navigation/popover-news.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Map Navigation",permalink:"/docs/controls/navigation/map-navigation"},next:{title:"Blind",permalink:"/docs/controls/blind"}},f={},g=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],w={toc:g};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"popover-news"},"Popover news"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{name:"popover-news",height:"30rem",noMargin:!0,frameworks:{react:c.default,angular:u.default,javascript:l.default,vue:p.default},mdxType:"Playground"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(i.default,{mdxType:"Props"}),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)(s.default,{mdxType:"Events"}))}b.isMDXComponent=!0}}]);
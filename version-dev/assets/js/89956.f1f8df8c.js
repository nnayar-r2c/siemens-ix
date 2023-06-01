"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89956,41466,28058,62e3,89278,41414],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},14091:(e,t,n)=>{n.d(t,{Z:()=>O});var r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],i={clickToLoad:function(e){return a("ctl",e)},devToolsHeight:function(e){return u("devtoolsheight",e)},forceEmbedLayout:function(e){return a("embed",e)},hideDevTools:function(e){return a("hidedevtools",e)},hideExplorer:function(e){return a("hideExplorer",e)},hideNavigation:function(e){return a("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return u("terminalHeight",e)},theme:function(e){return l("theme",["light","dark"],e)},view:function(e){return l("view",["preview","editor"],e)}};function o(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&i.hasOwnProperty(t)?i[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function a(e,t){return!0===t?e+"=1":""}function u(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function l(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function c(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function s(e,t){return""+p(t)+e+o(t)}function d(e,t){var n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),""+p(n)+e+o(n)}function p(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function f(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t){t&&"object"==typeof t&&(Object.hasOwnProperty.call(t,"height")&&(e.height=""+t.height),Object.hasOwnProperty.call(t,"width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}(t,n),e.parentNode.replaceChild(t,e)}function h(e){if("string"==typeof e){var t=document.getElementById(e);if(!t)throw new Error("Could not find element with id '"+e+"'");return t}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function m(e){return e&&!1===e.newWindow?"_self":"_blank"}function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}var y=function(){function e(e){this.port=void 0,this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}var t=e.prototype;return t.request=function(e){var t=this,n=e.type,r=e.payload,i=c();return new Promise((function(e,o){t.pending[i]={resolve:e,reject:o},t.port.postMessage({type:n,payload:v({},r,{__reqid:i})})}))},t.messageListener=function(e){var t;if("string"==typeof(null==(t=e.data.payload)?void 0:t.__reqid)){var n=e.data,r=n.type,i=n.payload,o=i.__reqid,a=i.__error;this.pending[o]&&(i.__success?this.pending[o].resolve(function(e){var t=v({},e);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}(i)):this.pending[o].reject(a?r+": "+a:r),delete this.pending[o])}},e}(),b=function(){function e(e,t){var n=this;this._rdc=void 0,this.editor={openFile:function(e){return n._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})},setCurrentFile:function(e){return n._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}})},setTheme:function(e){return n._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}})},setView:function(e){return n._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}})},showSidebar:function(e){return void 0===e&&(e=!0),n._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})}},this.preview={origin:"",getUrl:function(){return n._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((function(e){var t;return null!=(t=null==e?void 0:e.url)?t:null}))},setUrl:function(e){if(void 0===e&&(e="/"),"string"!=typeof e||!e.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+e+"'");return n._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new y(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}var t=e.prototype;return t.applyFsDiff=function(e){var t=function(e){return null!==e&&"object"==typeof e};if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},t.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},t.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),g=[],w=function(e){var t=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=c(),this.element=e,this.pending=new Promise((function(e,n){var r=function(n){var r=n.data;"SDK_INIT_SUCCESS"===(null==r?void 0:r.action)&&r.id===t.id&&(t.vm=new b(n.ports[0],r.payload),e(t.vm),o())},i=function(){var e;null==(e=t.element.contentWindow)||e.postMessage({action:"SDK_INIT",id:t.id},"*")};function o(){window.clearInterval(u),window.removeEventListener("message",r)}window.addEventListener("message",r),i();var a=0,u=window.setInterval((function(){if(t.vm)o();else{if(a>=20)return o(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void g.forEach((function(e,n){e.id===t.id&&g.splice(n,1)}));a++,i()}}),500)})),g.push(this)};function E(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function _(e){if(!r.includes(e.template)){var t=r.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,i=document.createElement("form");return i.method="POST",i.setAttribute("style","display:none!important;"),i.appendChild(E("project[title]",e.title)),i.appendChild(E("project[description]",e.description)),i.appendChild(E("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):i.appendChild(E("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&i.appendChild(E("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&i.appendChild(E("project[files]["+t+"]",e.files[t]))})),i}function j(e){var t,n,r,i;return null!=e&&e.contentWindow?(null!=(i=(n=e)instanceof Element?"element":"id",t=null!=(r=g.find((function(e){return e[i]===n})))?r:null)?t:new w(e)).pending:Promise.reject("Provided element is not an iframe.")}var O={connect:j,embedGithubProject:function(e,t,n){var r=h(e),i=document.createElement("iframe");return i.src=d("/github/"+t,n),f(r,i,n),j(i)},embedProject:function(e,t,n){var r,i=h(e),o=function(e,t){var n=_(e);return n.action=d("/run",t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('"+n.id+"').submit();<\/script></body></html>"}(t,n),a=document.createElement("iframe");return f(i,a,n),null==(r=a.contentDocument)||r.write(o),j(a)},embedProjectId:function(e,t,n){var r=h(e),i=document.createElement("iframe");return i.src=d("/edit/"+t,n),f(r,i,n),j(i)},openGithubProject:function(e,t){var n=s("/github/"+e,t),r=m(t);window.open(n,r)},openProject:function(e,t){!function(e,t){var n=_(e);n.action=s("/run",t),n.target=m(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){var n=s("/edit/"+e,t),r=m(t);window.open(n,r)}}},82009:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(2784),i=n(6277);const o="tabItem_OMyP";function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,a),hidden:n},t)}},77336:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(7896),i=n(2784),o=n(6277),a=n(24126),u=n(7267),l=n(32424),c=n(42244),s=n(24155);function d(e){return function(e){var t;return(null==(t=i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,i.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[a,u]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=h({queryString:n,groupId:r}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,s.Nk)(n);return[r,(0,i.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=l??d;return f({value:e,tabValues:o})?e:null})();(0,i.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),m(e)}),[c,m,o]),tabValues:o}}var v=n(89741);const y="tabList_M0Dn",b="tabItem_ysIP";function g(e){let{className:t,block:n,selectedValue:u,selectValue:l,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),p=e=>{const t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==u&&(d(t),l(r))},f=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}null==(t=n)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:a}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>s.push(e),onKeyDown:f,onClick:p},a,{className:(0,o.Z)("tabs__item",b,null==a?void 0:a.className,{"tabs__item--active":u===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function E(e){const t=m(e);return i.createElement("div",{className:(0,o.Z)("tabs-container",y)},i.createElement(g,(0,r.Z)({},e,t)),i.createElement(w,(0,r.Z)({},e,t)))}function _(e){const t=(0,v.Z)();return i.createElement(E,(0,r.Z)({key:String(t)},e))}}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84650],{30876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),l=s(n),d=a,y=l["".concat(i,".").concat(d)]||l[d]||u[d]||o;return n?r.createElement(y,c(c({ref:t},m),{},{components:n})):r.createElement(y,c({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=l;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},47701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7896),a=(n(2784),n(30876));const o={},c=void 0,p={unversionedId:"auto-generated/previews/web-component/empty-state-compact-break",id:"auto-generated/previews/web-component/empty-state-compact-break",title:"empty-state-compact-break",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/empty-state-compact-break.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/empty-state-compact-break",permalink:"/docs/auto-generated/previews/web-component/empty-state-compact-break",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/empty-state-compact-break.md",tags:[],version:"current",frontMatter:{}},i={},s=[],m={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ix-empty-state\n  layout="compactBreak"\n  header="No elements available"\n  sub-header="Create an element first"\n  icon="add"\n  action="Create element"\n></ix-empty-state>\n\n<script>\n  (async function () {\n    await window.customElements.whenDefined(\'ix-empty-state\');\n    const emptyState = document.querySelector(\'ix-empty-state\');\n\n    emptyState.addEventListener(\'actionClick\', (event) =>\n      console.log(event)\n    );\n  })();\n<\/script>\n')))}u.isMDXComponent=!0}}]);
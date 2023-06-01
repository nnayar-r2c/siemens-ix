"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19936],{30876:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7896),o=(r(2784),r(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/vue/drawer-full-height",id:"auto-generated/previews/vue/drawer-full-height",title:"drawer-full-height",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/drawer-full-height.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/drawer-full-height",permalink:"/docs/auto-generated/previews/vue/drawer-full-height",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/drawer-full-height.md",tags:[],version:"current",frontMatter:{}},u={},l=[],s={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxButton, IxDrawer } from \'@siemens/ix-vue\';\nimport { ref } from \'vue\';\n\nconst show = ref(false);\n<\/script>\n\n<template>\n  <IxDrawer\n    closeOnClickOutside\n    fullHeight\n    :show="show"\n    @drawerClose="show = false"\n  >\n    <span>Some content of drawer</span>\n  </IxDrawer>\n  <IxButton @click="show = !show">Toggle drawer</IxButton>\n</template>\n')))}p.isMDXComponent=!0}}]);
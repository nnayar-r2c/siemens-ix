"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20206],{30876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,w=s["".concat(i,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(w,p(p({ref:t},l),{},{components:n})):r.createElement(w,p({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},96451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7896),o=(n(2784),n(30876));const a={},p=void 0,c={unversionedId:"auto-generated/previews/vue/dropdown-button-icon",id:"auto-generated/previews/vue/dropdown-button-icon",title:"dropdown-button-icon",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/dropdown-button-icon.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/dropdown-button-icon",permalink:"/docs/auto-generated/previews/vue/dropdown-button-icon",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/dropdown-button-icon.md",tags:[],version:"current",frontMatter:{}},i={},u=[],l={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxDropdownButton } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxDropdownButton label="" variant="Primary" icon="checkboxes">\n    <IxDropdownItem label="Item 1"></IxDropdownItem>\n    <IxDropdownItem label="Item 2"></IxDropdownItem>\n  </IxDropdownButton>\n\n  <IxDropdownButton label="" variant="Primary" ghost icon="checkboxes">\n    <IxDropdownItem label="Item 1"></IxDropdownItem>\n    <IxDropdownItem label="Item 2"></IxDropdownItem>\n  </IxDropdownButton>\n\n  <IxDropdownButton label="" variant="Primary" disabled icon="checkboxes">\n    <IxDropdownItem label="Item 1"></IxDropdownItem>\n    <IxDropdownItem label="Item 2"></IxDropdownItem>\n  </IxDropdownButton>\n</template>\n')))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94642],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),v=a,y=m["".concat(i,".").concat(v)]||m[v]||p[v]||o;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={},l=void 0,u={unversionedId:"auto-generated/previews/vue/key-value-list-with-custom-value",id:"auto-generated/previews/vue/key-value-list-with-custom-value",title:"key-value-list-with-custom-value",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/key-value-list-with-custom-value.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/key-value-list-with-custom-value",permalink:"/docs/auto-generated/previews/vue/key-value-list-with-custom-value",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/key-value-list-with-custom-value.md",tags:[],version:"current",frontMatter:{}},i={},c=[],s={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxKeyValue, IxKeyValueList } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxKeyValueList>\n    <IxKeyValue label="Label" labelPosition="left">\n      <input\n        className="form-control"\n        placeholder="Enter text here"\n        type="text"\n        slot="custom-value"\n      />\n    </IxKeyValue>\n    <IxKeyValue label="Label" labelPosition="left">\n      <input\n        className="form-control"\n        placeholder="Enter text here"\n        type="text"\n        slot="custom-value"\n      />\n    </IxKeyValue>\n    <IxKeyValue label="Label" labelPosition="left">\n      <input\n        className="form-control"\n        placeholder="Enter text here"\n        type="text"\n        slot="custom-value"\n      />\n    </IxKeyValue>\n  </IxKeyValueList>\n</template>\n')))}p.isMDXComponent=!0}}]);
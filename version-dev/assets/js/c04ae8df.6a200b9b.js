"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54675],{30876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(n),y=o,f=d["".concat(i,".").concat(y)]||d[y]||p[y]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var r=n(7896),o=(n(2784),n(30876));const a={},c=void 0,u={unversionedId:"auto-generated/previews/angular/button-grey-secondary.ts",id:"auto-generated/previews/angular/button-grey-secondary.ts",title:"button-grey-secondary.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/button-grey-secondary.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/button-grey-secondary.ts",permalink:"/docs/auto-generated/previews/angular/button-grey-secondary.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/button-grey-secondary.ts.md",tags:[],version:"current",frontMatter:{}},i={},s=[],l={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: buttonGreySecondary(),\n})\nexport default class Buttons {}\nfunction buttonGreySecondary(): string | undefined {\n  return `\n      <ix-button class="m-1" outline variant="Secondary">\n        Button\n      </ix-button>\n      <ix-button class="m-1" disabled outline variant="Secondary">\n        Button\n      </ix-button>\n  `;\n}\n')))}p.isMDXComponent=!0}}]);
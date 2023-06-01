"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86209],{30876:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>g});var r=t(2784);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=r.createContext({}),u=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},d=function(n){var e=u(n.components);return r.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},l=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,s=n.parentName,d=c(n,["components","mdxType","originalType","parentName"]),l=u(t),g=i,f=l["".concat(s,".").concat(g)]||l[g]||p[g]||a;return t?r.createElement(f,o(o({ref:e},d),{},{components:t})):r.createElement(f,o({ref:e},d))}));function g(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,o=new Array(a);o[0]=l;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c.mdxType="string"==typeof n?n:i,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},53085:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(7896),i=(t(2784),t(30876));const a={},o=void 0,c={unversionedId:"auto-generated/previews/web-component/card-list",id:"auto-generated/previews/web-component/card-list",title:"card-list",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/card-list.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/card-list",permalink:"/docs/auto-generated/previews/web-component/card-list",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/card-list.md",tags:[],version:"current",frontMatter:{}},s={},u=[],d={toc:u};function p(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ix-card-list label="Stack Layout" show-all-count="12" list-style="stack">\n  <ix-push-card\n    icon="rocket"\n    notification="3"\n    heading="Heading content"\n    subheading="Subheading"\n    variant="notification"\n  ></ix-push-card>\n  <ix-push-card\n    icon="bulb"\n    notification="1"\n    heading="Heading content"\n    subheading="Subheading"\n    variant="warning"\n  ></ix-push-card>\n  <ix-push-card\n    icon="rocket"\n    notification="3"\n    heading="Heading content"\n    subheading="Subheading"\n    variant="success"\n  ></ix-push-card>\n</ix-card-list>\n\n<ix-card-list label="Flow Layout" show-all-count="12" list-style="scroll">\n  <ix-push-card\n    icon="rocket"\n    notification="3"\n    heading="Heading content"\n    subheading="Subheading"\n    variant="notification"\n  ></ix-push-card>\n  <ix-push-card\n    icon="bulb"\n    notification="1"\n    heading="Heading content"\n    subheading="Subheading"\n    variant="warning"\n  ></ix-push-card>\n  <ix-push-card\n    icon="rocket"\n    notification="3"\n    heading="Heading content"\n    subheading="Subheading"\n    variant="notification"\n  ></ix-push-card>\n  <ix-push-card\n    icon="rocket"\n    notification="3"\n    heading="Heading content"\n    subheading="Subheading"\n    variant="notification"\n  ></ix-push-card>\n  <ix-push-card\n    icon="rocket"\n    notification="3"\n    heading="Heading content"\n    subheading="Subheading"\n    variant="notification"\n  ></ix-push-card>\n</ix-card-list>\n')))}p.isMDXComponent=!0}}]);
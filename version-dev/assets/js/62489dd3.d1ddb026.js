"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55754],{30876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=u(n),s=o,f=d["".concat(c,".").concat(s)]||d[s]||l[s]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,p={unversionedId:"auto-generated/previews/web-component/group-context-menu",id:"auto-generated/previews/web-component/group-context-menu",title:"group-context-menu",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/group-context-menu.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/group-context-menu",permalink:"/docs/auto-generated/previews/web-component/group-context-menu",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/group-context-menu.md",tags:[],version:"current",frontMatter:{}},c={},u=[],m={toc:u};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ix-group header="Header text" sub-header="Subheader text">\n  <ix-dropdown slot="dropdown">\n    <ix-dropdown-item label="Item 1"></ix-dropdown-item>\n    <ix-dropdown-item label="Item 2"></ix-dropdown-item>\n  </ix-dropdown>\n  <ix-group-item text="Example text 1"></ix-group-item>\n  <ix-group-item text="Example text 2"></ix-group-item>\n  <ix-group-item text="Example text 3"></ix-group-item>\n</ix-group>\n')))}l.isMDXComponent=!0}}]);
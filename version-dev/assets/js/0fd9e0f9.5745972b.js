"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84878],{30876:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||l[d]||a;return n?r.createElement(f,p(p({ref:t},i),{},{components:n})):r.createElement(f,p({ref:t},i))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7896),o=(n(2784),n(30876));const a={},p=void 0,s={unversionedId:"auto-generated/previews/react/input-types",id:"auto-generated/previews/react/input-types",title:"input-types",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/input-types.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/input-types",permalink:"/docs/auto-generated/previews/react/input-types",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/input-types.md",tags:[],version:"current",frontMatter:{}},u={},c=[],i={toc:c};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxInputGroup } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <form className="needs-validation m-2">\n      <IxInputGroup>\n        <span slot="input-start">Text:</span>\n        <input placeholder="Enter text" type="text" className="form-control" />\n      </IxInputGroup>\n\n      <IxInputGroup>\n        <span slot="input-start">Number:</span>\n        <input type="number" className="form-control" />\n        <span slot="input-end">.00</span>\n        <span slot="input-end">$</span>\n      </IxInputGroup>\n\n      <IxInputGroup>\n        <span slot="input-start">Password:</span>\n        <input\n          placeholder="Enter password"\n          type="password"\n          className="form-control"\n        />\n      </IxInputGroup>\n\n      <IxInputGroup>\n        <span slot="input-start">Email:</span>\n        <input\n          placeholder="example@domain.com"\n          type="email"\n          className="form-control"\n        />\n      </IxInputGroup>\n\n      <IxInputGroup>\n        <span slot="input-start">Telephone:</span>\n        <input placeholder="111-111-111" type="tel" className="form-control" />\n      </IxInputGroup>\n    </form>\n  );\n};\n')))}l.isMDXComponent=!0}}]);
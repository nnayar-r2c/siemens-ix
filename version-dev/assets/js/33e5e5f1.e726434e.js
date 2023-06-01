"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51300],{30876:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(r),u=o,h=p["".concat(i,".").concat(u)]||p[u]||d[u]||a;return r?n.createElement(h,c(c({ref:t},m),{},{components:r})):n.createElement(h,c({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},31769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>h,toc:()=>w});var n=r(7896),o=r(2784),a=r(30876),c=r(76233),s=r(53849);const i=["--theme-shadow-1","--theme-shadow-2","--theme-shadow-3","--theme-shadow-4","--theme-inset-shadow-1"];function l(e){return o.createElement(s.pZ,{style:{marginBottom:"2rem"}},o.createElement(s.RI,{name:"search",slot:"input-start",size:"16",color:"color-primary"}),o.createElement("input",{type:"text",className:"form-control",placeholder:"Search",onChange:t=>{const r=t.target.value;e.onChange(r)}}))}function m(e){return o.createElement("div",{className:"col-2 Shadow__Preview"},o.createElement("div",{style:{boxShadow:`var(${e.border})`}}))}const d=function(){const[e,t]=(0,o.useState)(i);return o.createElement("div",{className:"Theme__Shadows"},o.createElement(l,{onChange:e=>{return r=e,void t([...i.filter((e=>!r||e.toLowerCase().includes(r.toLowerCase())))]);var r}}),o.createElement("div",{className:"container-fluid"},e.map((e=>o.createElement("div",{key:e,className:"Section row"},o.createElement(m,{border:e}),o.createElement("div",{className:"col-8 Shadow__Name"},e),o.createElement(s.AN,{icon:"copy",ghost:!0,style:{marginRight:"1rem"},className:"col-1 Copy__Icon",oval:!0,onClick:()=>(async e=>{await navigator.clipboard.writeText(e),c.Am.success({message:"Copied to clipboard!",autoCloseDelay:800})})(e)}))))))},p={},u="Shadows",h={unversionedId:"theming/shadow",id:"theming/shadow",title:"Shadows",description:"All shadows are provided as custom properties.",source:"@site/docs/theming/shadow.md",sourceDirName:"theming",slug:"/theming/shadow",permalink:"/docs/theming/shadow",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/theming/shadow.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Fonts",permalink:"/docs/theming/fonts"},next:{title:"Themes",permalink:"/docs/guidelines/theme"}},f={},w=[],y={toc:w};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shadows"},"Shadows"),(0,a.kt)("p",null,"All shadows are provided as custom properties.\nTo access them the ",(0,a.kt)("inlineCode",{parentName:"p"},"var()")," CSS function can be called with the shadow's name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".some-example {\n  box-shadow: var(--theme-shadow-1);\n}\n")),(0,a.kt)(d,{mdxType:"ThemeShadows"}))}g.isMDXComponent=!0}}]);
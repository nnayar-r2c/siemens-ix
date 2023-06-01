"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2808],{30876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},10566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>v,frontMatter:()=>p,metadata:()=>f,toc:()=>g});var r=n(7896),o=n(2784),a=n(30876),l=n(76233),i=n(53849);const s=["--theme-text-h2","--theme-text-xl","--theme-text-l-title","--theme-text-l-title-single","--theme-text-l","--theme-text-l-single","--theme-text-default-title","--theme-text-default-title-single","--theme-text-default","--theme-text-default-single","--theme-text-caption","--theme-text-caption-single","--theme-text-s","--theme-text-s-single","--theme-text-xs"];function c(e){return o.createElement(i.pZ,{style:{marginBottom:"2rem"}},o.createElement(i.RI,{name:"search",slot:"input-start",size:"16",color:"color-primary"}),o.createElement("input",{type:"text",className:"form-control",placeholder:"Search",onChange:t=>{const n=t.target.value;e.onChange(n)}}))}function m(e){return o.createElement("div",{className:"col-4 Font__Preview",style:{font:`var(${e.font})`}},"The quick brown fox",o.createElement("br",null)," jumps over the lazy dog.")}const u=function(){const[e,t]=(0,o.useState)(s);return o.createElement("div",{className:"Theme__Fonts"},o.createElement(c,{onChange:e=>{return n=e,void t([...s.filter((e=>!n||e.toLowerCase().includes(n.toLowerCase())))]);var n}}),o.createElement("div",{className:"container-fluid"},e.map((e=>o.createElement("div",{key:e,className:"Section row"},o.createElement(m,{font:e}),o.createElement("div",{className:"col-7 Fonts__Name"},e.substring("--theme-".length)),o.createElement(i.AN,{icon:"copy",ghost:!0,className:"col-1 Copy__Icon",oval:!0,onClick:()=>(async e=>{await navigator.clipboard.writeText(e),l.Am.success({message:"Copied to clipboard!",autoCloseDelay:800})})(e.substring("--theme-".length))}))))))},p={},d="Fonts",f={unversionedId:"theming/fonts",id:"theming/fonts",title:"Fonts",description:"iX provides utility CSS classes to style text.",source:"@site/docs/theming/fonts.md",sourceDirName:"theming",slug:"/theming/fonts",permalink:"/docs/theming/fonts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/theming/fonts.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Colors",permalink:"/docs/theming/colors"},next:{title:"Shadows",permalink:"/docs/theming/shadow"}},h={},g=[{value:"Usage",id:"usage",level:2},{value:"Variants",id:"variants",level:2}],y={toc:g};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fonts"},"Fonts"),(0,a.kt)("p",null,"iX provides utility CSS classes to style text.\nTheme changes will apply to texts automatically (e.g. change color)."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<span class="text-l">Some text in large</span>\n')),(0,a.kt)("h2",{id:"variants"},"Variants"),(0,a.kt)(u,{mdxType:"ThemeFonts"}))}v.isMDXComponent=!0}}]);
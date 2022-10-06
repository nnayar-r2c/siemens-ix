"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8614],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91870:(e,t,n)=>{n.d(t,{Z:()=>v,C:()=>h});var r=n(89817),i=n(37949),a=n(90077),o=n(6277),l=n(2784);const s="Card__List_PIGW",c="Card_EPsO",p="Auto__Width_RXP2",u="Card_big__rLc",d="With__Icon__M6w",m="Splitter_xIp1",f="Label_uVaA",y="Full__Height_Aspr",b="Icon_ZZVP",g="Card__Primary_p1H3";function v(e){const{preferredVersion:t}=(0,i.J)();return l.createElement(r.Z,{to:function(){var n;if(!t)return(0,a.Z)(`/docs/${e.link}`);if(null!=(n=e.link)&&n.startsWith("http"))return e.link;const r=t.path;return(0,a.Z)(`${r}/${e.link}`)}(),style:{textDecoration:"none"}},l.createElement("div",{className:(0,o.Z)(c,{[g]:e.isPrimary,[d]:e.icon,[p]:e.autoWidth},"big"===e.size?u:c),style:e.style},l.createElement("div",{className:(0,o.Z)(f,"text-h2",{[y]:!e.icon})},e.label),e.icon?l.createElement(l.Fragment,null,l.createElement("div",{className:m}),l.createElement("div",{className:(0,o.Z)(b)},l.createElement("ix-icon",{name:e.icon}))):null,e.children))}function h(e){return l.createElement("div",{className:(0,o.Z)(s)},e.children)}},17258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7896),i=(n(2784),n(30876)),a=n(91870);const o={sidebar_position:0},l="Installation",s={unversionedId:"installation/installation",id:"installation/installation",title:"Installation",description:"Siemens iX is framework agnostic.",source:"@site/docs/installation/installation.md",sourceDirName:"installation",slug:"/installation/",permalink:"/docs/installation/",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/installation/installation.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"mySidebar",previous:{title:"Fonts",permalink:"/docs/theming/fonts"},next:{title:"Angular",permalink:"/docs/installation/angular"}},c={},p=[],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Siemens iX is framework agnostic.\nIt can be used to build apps simply by using native web technology (HTML, CSS & JavaScript).\nIn addition to that it provides support for Angular and React."),(0,i.kt)("p",null,"Follow the links below to the respective installation guides:"),(0,i.kt)(a.C,{mdxType:"CardList"},(0,i.kt)(a.Z,{label:"Siemens iX",isPrimary:!0,link:"installation/javascript",mdxType:"Card"}),(0,i.kt)(a.Z,{label:"Siemens iX for Angular",link:"installation/angular",mdxType:"Card"}),(0,i.kt)(a.Z,{label:"Siemens iX for React",link:"installation/react",mdxType:"Card"})))}d.isMDXComponent=!0}}]);
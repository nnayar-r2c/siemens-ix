"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9567],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7896),i=(n(2784),n(30876));const r={sidebar_position:3,sidebar_title:"Javascript",title:"Javascript"},o=void 0,s={unversionedId:"installation/javascript",id:"installation/javascript",title:"Javascript",description:"Current beta release of ix has some limitations, please check this.",source:"@site/docs/installation/javascript.md",sourceDirName:"installation",slug:"/installation/javascript",permalink:"/ix/docs/installation/javascript",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/installation/javascript.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_title:"Javascript",title:"Javascript"},sidebar:"mySidebar",previous:{title:"React",permalink:"/ix/docs/installation/react"},next:{title:"Changelog",permalink:"/ix/docs/installation/CHANGELOG"}},l={},c=[{value:"Installation of dependencies",id:"installation-of-dependencies",level:2},{value:"Install library",id:"install-library",level:3},{value:"Load styles and scripts",id:"load-styles-and-scripts",level:2},{value:"Load web fonts",id:"load-web-fonts",level:3},{value:"Load common style sheet",id:"load-common-style-sheet",level:3},{value:"Load <code>ix</code> Web Components",id:"load-ix-web-components",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Current ",(0,i.kt)("strong",{parentName:"p"},"beta release")," of ",(0,i.kt)("em",{parentName:"p"},"ix")," has some limitations, please check ",(0,i.kt)("a",{parentName:"p",href:"./limitation"},"this"),".")),(0,i.kt)("h2",{id:"installation-of-dependencies"},"Installation of dependencies"),(0,i.kt)("p",null,"Preparation steps: ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"/ix/docs/installation/artifactory"},"Artifactory access and npm configuration"))),(0,i.kt)("h3",{id:"install-library"},"Install library"),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"@siemens/ix")," (or a beta release ",(0,i.kt)("inlineCode",{parentName:"p"},"@siemens/ix@next"),") and ",(0,i.kt)("inlineCode",{parentName:"p"},"@siemens/ix-icons"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i -S @siemens/ix@latest\nnpm i -S @siemens/ix-icons@latest\n")),(0,i.kt)("h2",{id:"load-styles-and-scripts"},"Load styles and scripts"),(0,i.kt)("h3",{id:"load-web-fonts"},"Load web fonts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" href="lib/ix-icons/dist/css/ix-icons.css" />\n')),(0,i.kt)("h3",{id:"load-common-style-sheet"},"Load common style sheet"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" href="lib/ix/dist/siemens-ix/siemens-ix.css" />\n')),(0,i.kt)("h3",{id:"load-ix-web-components"},"Load ",(0,i.kt)("inlineCode",{parentName:"h3"},"ix")," Web Components"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<script type=\"module\">\n  import { defineCustomElements } from './lib/ix/loader/index.js';\n  defineCustomElements();\n<\/script>\n")))}d.isMDXComponent=!0}}]);
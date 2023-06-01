"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44971],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,v=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(v,l(l({ref:t},u),{},{components:n})):a.createElement(v,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63483:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(2784),r=n(731);function i(e){var t,n,i,l,c,o,s,u;return a.createElement("div",{className:"row with--border"},a.createElement("div",{className:"col-sm-6"},a.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(n=e.attribute)||null==(i=n.tags)?void 0:i.filter((e=>"since"===e.type)).map((t=>{var n;return a.createElement(r.h,{message:t.message,key:`Tag_Since_${null==e||null==(n=e.attribute)?void 0:n.name}`})})),null==e||null==(l=e.attribute)||null==(c=l.tags)?void 0:c.filter((e=>"deprecated"===e.type)).map((t=>{var n;return a.createElement(r.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(n=e.attribute)?void 0:n.name}`})})))),a.createElement("div",{className:"col-sm-6"},a.createElement("div",{className:"ApiTable__Content"},a.createElement("span",{className:"Attribute__Description"},null==e||null==(o=e.attribute)?void 0:o.description),a.createElement("div",{className:"container-fluid"},null==e||null==(s=e.attribute)||null==(u=s.definition)?void 0:u.map((e=>a.createElement("div",{className:"row Attribute",key:e.name},a.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),a.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const l=function(e){var t;return a.createElement("div",{className:"container-fluid ApiTable"},a.createElement("div",{className:"row with--border"},a.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),a.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>a.createElement(i,{attribute:e,key:e.name}))))}},731:(e,t,n)=>{n.d(t,{Q:()=>r,h:()=>i});var a=n(2784);function r(e){return a.createElement("div",{className:"ApiTableTag"},a.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),a.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function i(e){return a.createElement("div",{className:"ApiTableTag"},a.createElement("div",{className:"Tag"},"Since ",e.message))}},18371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7896),r=(n(2784),n(30876)),i=n(63483);const l={},c=void 0,o={unversionedId:"auto-generated/ix-chip/events",id:"auto-generated/ix-chip/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-chip/events.md",sourceDirName:"auto-generated/ix-chip",slug:"/auto-generated/ix-chip/events",permalink:"/docs/auto-generated/ix-chip/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-chip/events.md",tags:[],version:"current",frontMatter:{}},s={},u=[],m={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{attributes:[{name:"close",description:"Fire event if close button is clicked",definition:[{name:"Detail",value:"any"}],tags:[{type:"deprecated",message:"Will be removed in 2.0.0. Use `closeChip`"}]},{name:"closeChip",description:"Fire event if close button is clicked",definition:[{name:"Detail",value:"any"}],tags:[{type:"since",message:"1.5.0"}]}],mdxType:"ApiTable"}))}p.isMDXComponent=!0}}]);
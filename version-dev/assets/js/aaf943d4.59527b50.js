"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53407],{30876:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,b=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return a?n.createElement(b,o(o({ref:t},m),{},{components:a})):n.createElement(b,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},63483:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(2784),r=a(731);function i(e){var t,a,i,o,l,c,s,m;return n.createElement("div",{className:"row with--border"},n.createElement("div",{className:"col-sm-6"},n.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(a=e.attribute)||null==(i=a.tags)?void 0:i.filter((e=>"since"===e.type)).map((t=>{var a;return n.createElement(r.h,{message:t.message,key:`Tag_Since_${null==e||null==(a=e.attribute)?void 0:a.name}`})})),null==e||null==(o=e.attribute)||null==(l=o.tags)?void 0:l.filter((e=>"deprecated"===e.type)).map((t=>{var a;return n.createElement(r.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(a=e.attribute)?void 0:a.name}`})})))),n.createElement("div",{className:"col-sm-6"},n.createElement("div",{className:"ApiTable__Content"},n.createElement("span",{className:"Attribute__Description"},null==e||null==(c=e.attribute)?void 0:c.description),n.createElement("div",{className:"container-fluid"},null==e||null==(s=e.attribute)||null==(m=s.definition)?void 0:m.map((e=>n.createElement("div",{className:"row Attribute",key:e.name},n.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),n.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const o=function(e){var t;return n.createElement("div",{className:"container-fluid ApiTable"},n.createElement("div",{className:"row with--border"},n.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),n.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>n.createElement(i,{attribute:e,key:e.name}))))}},731:(e,t,a)=>{a.d(t,{Q:()=>r,h:()=>i});var n=a(2784);function r(e){return n.createElement("div",{className:"ApiTableTag"},n.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),n.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function i(e){return n.createElement("div",{className:"ApiTableTag"},n.createElement("div",{className:"Tag"},"Since ",e.message))}},45518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var n=a(7896),r=(a(2784),a(30876)),i=a(63483);const o={},l=void 0,c={unversionedId:"auto-generated/ix-menu-item/props",id:"auto-generated/ix-menu-item/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-menu-item/props.md",sourceDirName:"auto-generated/ix-menu-item",slug:"/auto-generated/ix-menu-item/props",permalink:"/docs/auto-generated/ix-menu-item/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-menu-item/props.md",tags:[],version:"current",frontMatter:{}},s={},m=[],u={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{attributes:[{name:"active",description:"State to display active",definition:[{name:"Attribute",value:"active"},{name:"Type",value:"boolean"},{name:"Default"}],tags:[]},{name:"bottom",description:'Caution: this is no longer working. Please use slot="bottom" instead.\n\nPlace tab on bottom',definition:[{name:"Attribute",value:"bottom"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[{type:"deprecated",message:"Will be removed in 2.0.0. Replaced by slot based implementation"}]},{name:"disabled",description:"Disable tab and remove event handlers",definition:[{name:"Attribute",value:"disabled"},{name:"Type",value:"boolean"},{name:"Default"}],tags:[]},{name:"home",description:"Move the Tab to a top position.",definition:[{name:"Attribute",value:"home"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"notifications",description:"Show notification count on tab",definition:[{name:"Attribute",value:"notifications"},{name:"Type",value:"number"},{name:"Default"}],tags:[]},{name:"tabIcon",description:"Icon name from @siemens/ix-icons",definition:[{name:"Attribute",value:"tab-icon"},{name:"Type",value:"string"},{name:"Default",value:"'document'"}],tags:[]}],mdxType:"ApiTable"}))}p.isMDXComponent=!0}}]);
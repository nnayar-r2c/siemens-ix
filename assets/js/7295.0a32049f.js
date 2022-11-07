"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7295],{27295:(e,t,o)=>{o.r(t),o.d(t,{ix_dropdown:()=>i,ix_dropdown_item:()=>d});var r=o(98139),n=o(87776);const i=class{constructor(e){(0,r.r)(this,e),this.showChanged=(0,r.c)(this,"showChanged",7),this.show=!1,this.closeBehavior="both",this.placement="bottom-end",this.positioningStrategy="fixed",this.adjustDropdownWidthToReferenceWith=!1,this.adjustDropdownWidthToReferenceWidth=!1,this.openBind=this.open.bind(this)}get dropdownItems(){return Array.from(this.hostElement.querySelectorAll("ix-dropdown-item"))}resolveElement(e){return"string"==typeof e?document.querySelector("#"+e):e}async componentDidLoad(){this.trigger&&this.registerListener(this.trigger)}registerListener(e){this.triggerElement=this.resolveElement(e),this.triggerElement.addEventListener("click",this.openBind)}unregisterListener(e){this.resolveElement(e).removeEventListener("click",this.openBind)}componentDidRender(){var e;null===(e=this.popperInstance)||void 0===e||e.update()}async changedShow(e){var t;e&&(this.anchorElement=this.anchor?this.resolveElement(this.anchor):this.resolveElement(this.trigger),this.anchorElement&&(null===(t=this.popperInstance)||void 0===t||t.destroy(),this.popperInstance=(0,n.c)(this.anchorElement,this.dropdownRef,{placement:this.placement,strategy:this.positioningStrategy,onFirstUpdate:e=>{let{elements:t}=e;if(this.adjustDropdownWidthToReferenceWith||this.adjustDropdownWidthToReferenceWidth){const{popper:e,reference:o}=t,r=o.getBoundingClientRect().width;e.style.width=`${r}px`}}})))}changedTrigger(e,t){e&&this.registerListener(e),t&&this.unregisterListener(t)}clickOutside(e){const t=e.target;if(!1!==this.show&&!1!==this.closeBehavior&&this.anchorElement!==t&&this.triggerElement!==t)switch(this.closeBehavior){case"outside":this.dropdownRef.contains(t)||this.close();break;case"inside":this.dropdownRef.contains(t)&&this.close();break;default:this.close()}}open(e){null==e||e.preventDefault(),null==e||e.stopPropagation(),this.show=!this.show,this.showChanged.emit(this.show)}close(){this.show=!1,this.showChanged.emit(this.show)}disconnectedCallback(){var e;null===(e=this.popperInstance)||void 0===e||e.destroy()}async updatePosition(){var e;await(null===(e=this.popperInstance)||void 0===e?void 0:e.update())}render(){return(0,r.h)(r.H,{ref:e=>this.dropdownRef=e,class:{"dropdown-menu":!0,show:this.show},style:{margin:"0",minWidth:"0px"}},(0,r.h)("div",{style:{display:"contents"}},this.header?(0,r.h)("div",{class:"dropdown-header"},this.header):"",(0,r.h)("slot",null)))}get hostElement(){return(0,r.g)(this)}static get watchers(){return{show:["changedShow"],trigger:["changedTrigger"]}}};i.style='.dropup,.dropend,.dropdown,.dropstart,.dropup-center,.dropdown-center{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:0.255em;vertical-align:0.255em;content:"";border-top:0.3em solid;border-right:0.3em solid transparent;border-bottom:0;border-left:0.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{--bs-dropdown-zindex:1000;--bs-dropdown-min-width:10rem;--bs-dropdown-padding-x:0;--bs-dropdown-padding-y:0.5rem;--bs-dropdown-spacer:0.125rem;--bs-dropdown-font-size:1rem;--bs-dropdown-color:#212529;--bs-dropdown-bg:#fff;--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-border-radius:0.375rem;--bs-dropdown-border-width:1px;--bs-dropdown-inner-border-radius:calc(0.375rem - 1px);--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-divider-margin-y:0.5rem;--bs-dropdown-box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-dropdown-link-color:#212529;--bs-dropdown-link-hover-color:#1e2125;--bs-dropdown-link-hover-bg:#e9ecef;--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:#adb5bd;--bs-dropdown-item-padding-x:1rem;--bs-dropdown-item-padding-y:0.25rem;--bs-dropdown-header-color:#6c757d;--bs-dropdown-header-padding-x:1rem;--bs-dropdown-header-padding-y:0.5rem;position:absolute;z-index:var(--bs-dropdown-zindex);display:none;min-width:var(--bs-dropdown-min-width);padding:var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);margin:0;font-size:var(--bs-dropdown-font-size);color:var(--bs-dropdown-color);text-align:left;list-style:none;background-color:var(--bs-dropdown-bg);background-clip:padding-box;border:var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);border-radius:var(--bs-dropdown-border-radius)}.dropdown-menu[data-bs-popper]{top:100%;left:0;margin-top:var(--bs-dropdown-spacer)}.dropdown-menu-start{--bs-position:start}.dropdown-menu-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-end{--bs-position:end}.dropdown-menu-end[data-bs-popper]{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-start{--bs-position:start}.dropdown-menu-sm-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-sm-end{--bs-position:end}.dropdown-menu-sm-end[data-bs-popper]{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-start{--bs-position:start}.dropdown-menu-md-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-md-end{--bs-position:end}.dropdown-menu-md-end[data-bs-popper]{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-start{--bs-position:start}.dropdown-menu-lg-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-lg-end{--bs-position:end}.dropdown-menu-lg-end[data-bs-popper]{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-start{--bs-position:start}.dropdown-menu-xl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xl-end{--bs-position:end}.dropdown-menu-xl-end[data-bs-popper]{right:0;left:auto}}@media (min-width: 1400px){.dropdown-menu-xxl-start{--bs-position:start}.dropdown-menu-xxl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xxl-end{--bs-position:end}.dropdown-menu-xxl-end[data-bs-popper]{right:0;left:auto}}.dropup .dropdown-menu[data-bs-popper]{top:auto;bottom:100%;margin-top:0;margin-bottom:var(--bs-dropdown-spacer)}.dropup .dropdown-toggle::after{display:inline-block;margin-left:0.255em;vertical-align:0.255em;content:"";border-top:0;border-right:0.3em solid transparent;border-bottom:0.3em solid;border-left:0.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{top:0;right:auto;left:100%;margin-top:0;margin-left:var(--bs-dropdown-spacer)}.dropend .dropdown-toggle::after{display:inline-block;margin-left:0.255em;vertical-align:0.255em;content:"";border-top:0.3em solid transparent;border-right:0;border-bottom:0.3em solid transparent;border-left:0.3em solid}.dropend .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-toggle::after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{top:0;right:100%;left:auto;margin-top:0;margin-right:var(--bs-dropdown-spacer)}.dropstart .dropdown-toggle::after{display:inline-block;margin-left:0.255em;vertical-align:0.255em;content:""}.dropstart .dropdown-toggle::after{display:none}.dropstart .dropdown-toggle::before{display:inline-block;margin-right:0.255em;vertical-align:0.255em;content:"";border-top:0.3em solid transparent;border-right:0.3em solid;border-bottom:0.3em solid transparent}.dropstart .dropdown-toggle:empty::after{margin-left:0}.dropstart .dropdown-toggle::before{vertical-align:0}.dropdown-divider{height:0;margin:var(--bs-dropdown-divider-margin-y) 0;overflow:hidden;border-top:1px solid var(--bs-dropdown-divider-bg);opacity:1}.dropdown-item{display:block;width:100%;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);clear:both;font-weight:400;color:var(--bs-dropdown-link-color);text-align:inherit;text-decoration:none;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:var(--bs-dropdown-link-hover-color);background-color:var(--bs-dropdown-link-hover-bg)}.dropdown-item.active,.dropdown-item:active{color:var(--bs-dropdown-link-active-color);text-decoration:none;background-color:var(--bs-dropdown-link-active-bg)}.dropdown-item.disabled,.dropdown-item:disabled{color:var(--bs-dropdown-link-disabled-color);pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);margin-bottom:0;font-size:0.875rem;color:var(--bs-dropdown-header-color);white-space:nowrap}.dropdown-item-text{display:block;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);color:var(--bs-dropdown-link-color)}.dropdown-menu-dark{--bs-dropdown-color:#dee2e6;--bs-dropdown-bg:#343a40;--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-link-color:#dee2e6;--bs-dropdown-link-hover-color:#fff;--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-link-hover-bg:rgba(255, 255, 255, 0.15);--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:#adb5bd;--bs-dropdown-header-color:#adb5bd}.dropup .btn,.dropright .btn,.dropdown .btn,.dropleft .btn{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;text-align:left;width:100%}.dropdown-group{margin:0.687rem;display:block;position:relative;width:21.562rem;border-radius:0.25rem;background-color:#f8f9fa;border:solid 0.062rem rgba(0, 0, 0, 0.25)}.dropdown-group .dropdown-group-title{display:block;position:relative;font-size:0.875rem;text-align:left;margin:0.937rem 0 1.25rem 0.937rem}.dropdown-group .dropdown-group-content{position:relative;display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;height:11.562rem;margin:0.937rem 0 0.937rem 0.937rem}.dropdown-group .dropdown-group-content>*{margin-bottom:1rem}.dropdown-group-submit{display:flex;justify-content:space-between;margin:0 0.687rem 0 0.687rem}.dropdown-menu{background-color:var(--theme-menu--background);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text);border:var(--theme-menu--border-thickness) solid var(--theme-menu--border--color);border-radius:var(--theme-menu--border-radius);max-width:100vw;padding:0.25rem 0;transition:background-color 150ms;box-shadow:var(--theme-menu--box-shadow)}.dropdown-menu.xl>.dropdown-item{height:2.5rem;line-height:2.187rem}.dropdown-header{display:flex;align-items:center;height:2.5rem;color:var(--theme-menu-header--color);padding:0 1rem}.dropdown-buttons{display:flex;padding:0.25rem 0.5rem}.dropdown-buttons ix-icon-button+ix-icon-button{-webkit-margin-start:0.5rem;margin-inline-start:0.5rem}.dropdown-item{display:flex;height:2.5rem;position:relative;align-items:center;cursor:pointer;padding:0 2rem;border:1px solid transparent;color:var(--theme-menu-item--color)}.dropdown-item:focus-visible{background-color:var(--theme-menu-item--background);color:var(--theme-menu-item--color)}.dropdown-item:focus-visible{outline:none;background-color:var(--theme-menu-item--background);border-color:#119fff;color:var(--theme-menu-item--color--focus)}.dropdown-item:not(.disabled):not(:disabled){cursor:pointer}.dropdown-item:not(.disabled):not(:disabled):hover{color:var(--theme-menu-item--color--hover);background-color:var(--theme-menu-item--background--hover)}.dropdown-item:not(.disabled):not(:disabled){cursor:pointer}.dropdown-item:not(.disabled):not(:disabled):active{color:var(--theme-menu-item--color--active);background-color:var(--theme-menu-item--background--active)}.dropdown-item.disabled,.dropdown-item:disabled{color:var(--theme-menu-item--color--disabled);background-color:var(--theme-menu-item--background--disabled)}.dropdown-item>a,.dropdown-item a:hover,.dropdown-item a:active{color:var(--theme-color-std-text)}.dropdown-item>.glyph{color:var(--theme-menu-item-icon--color);-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}.dropdown-item>.glyph.glyph-single-check{color:var(--theme-menu-item-icon-check--color)}.dropdown-item>input[type=checkbox]+label{margin-bottom:0px}.dropdown-item>input[type=checkbox]+label::before{margin-right:1rem}.dropdown-divider{border-top:1px solid var(--theme-menu-separator--background);margin:0.25rem 0}button.dropdown-toggle{position:relative;padding-right:1.5rem}button.dropdown-toggle::after{position:absolute;top:45%;right:0.5rem}:host{min-width:0px}';const d=class{constructor(e){(0,r.r)(this,e),this.itemClick=(0,r.c)(this,"itemClick",7),this.hover=!1,this.disabled=!1,this.checked=!1}async emitItemClick(){this.itemClick.emit(this.hostElement)}render(){return(0,r.h)(r.H,{class:{checked:this.checked,"icon-text":void 0!==this.label&&void 0!==this.icon,"icon-only":void 0===this.label&&void 0!==this.icon}},(0,r.h)("button",{class:{"dropdown-item":!0,hover:this.hover,disabled:this.disabled},onClick:()=>this.emitItemClick()},this.checked?(0,r.h)("ix-icon",{class:"checkmark",name:"single-check",size:"16"}):null,this.icon?(0,r.h)("span",{class:{glyph:!0,[`glyph-${this.icon}`]:!0}}):null,this.label?(0,r.h)("span",{class:"label"},this.label):null,(0,r.h)("slot",null)))}get hostElement(){return(0,r.g)(this)}};d.style=".sc-ix-dropdown-item-h{display:block;min-width:10rem}.icon-only.sc-ix-dropdown-item-h{min-width:0}.icon-only.sc-ix-dropdown-item-h .dropdown-item.sc-ix-dropdown-item{padding:0.25rem 0.5rem}.icon-only.sc-ix-dropdown-item-h .dropdown-item.sc-ix-dropdown-item:not(.disabled):not(:disabled):focus-visible{border-color:#199fff}.sc-ix-dropdown-item-h .checkmark.sc-ix-dropdown-item{position:absolute;left:0.5rem}.checked.sc-ix-dropdown-item-h{background-color:var(--theme-select-list-item--background--selected)}.sc-ix-dropdown-item-h .label.sc-ix-dropdown-item{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"},87776:(e,t,o)=>{o.d(t,{c:()=>ge});var r="top",n="bottom",i="right",d="left",a="auto",s=[r,n,i,d],p="start",l="end",c="viewport",f="popper",u=s.reduce((function(e,t){return e.concat([t+"-"+p,t+"-"+l])}),[]),m=[].concat(s,[a]).reduce((function(e,t){return e.concat([t,t+"-"+p,t+"-"+l])}),[]),h=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function b(e){return e?(e.nodeName||"").toLowerCase():null}function g(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function w(e){return e instanceof g(e).Element||e instanceof Element}function v(e){return e instanceof g(e).HTMLElement||e instanceof HTMLElement}function y(e){return"undefined"!=typeof ShadowRoot&&(e instanceof g(e).ShadowRoot||e instanceof ShadowRoot)}const x={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var o=t.styles[e]||{},r=t.attributes[e]||{},n=t.elements[e];v(n)&&b(n)&&(Object.assign(n.style,o),Object.keys(r).forEach((function(e){var t=r[e];!1===t?n.removeAttribute(e):n.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],n=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce((function(e,t){return e[t]="",e}),{});v(r)&&b(r)&&(Object.assign(r.style,i),Object.keys(n).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function k(e){return e.split("-")[0]}var O=Math.max,E=Math.min,j=Math.round;function D(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function L(){return!/^((?!chrome|android).)*safari/i.test(D())}function W(e,t,o){void 0===t&&(t=!1),void 0===o&&(o=!1);var r=e.getBoundingClientRect(),n=1,i=1;t&&v(e)&&(n=e.offsetWidth>0&&j(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&j(r.height)/e.offsetHeight||1);var d=(w(e)?g(e):window).visualViewport,a=!L()&&o,s=(r.left+(a&&d?d.offsetLeft:0))/n,p=(r.top+(a&&d?d.offsetTop:0))/i,l=r.width/n,c=r.height/i;return{width:l,height:c,top:p,right:s+l,bottom:p+c,left:s,x:s,y:p}}function A(e){var t=W(e),o=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:r}}function R(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&y(o)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function B(e){return g(e).getComputedStyle(e)}function C(e){return["table","td","th"].indexOf(b(e))>=0}function P(e){return((w(e)?e.ownerDocument:e.document)||window.document).documentElement}function T(e){return"html"===b(e)?e:e.assignedSlot||e.parentNode||(y(e)?e.host:null)||P(e)}function S(e){return v(e)&&"fixed"!==B(e).position?e.offsetParent:null}function H(e){for(var t=g(e),o=S(e);o&&C(o)&&"static"===B(o).position;)o=S(o);return o&&("html"===b(o)||"body"===b(o)&&"static"===B(o).position)?t:o||function(e){var t=/firefox/i.test(D());if(/Trident/i.test(D())&&v(e)&&"fixed"===B(e).position)return null;var o=T(e);for(y(o)&&(o=o.host);v(o)&&["html","body"].indexOf(b(o))<0;){var r=B(o);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return o;o=o.parentNode}return null}(e)||t}function M(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function z(e,t,o){return O(e,E(t,o))}function I(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function q(e,t){return t.reduce((function(t,o){return t[o]=e,t}),{})}const V={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,o=e.state,a=e.name,p=e.options,l=o.elements.arrow,c=o.modifiersData.popperOffsets,f=k(o.placement),u=M(f),m=[d,i].indexOf(f)>=0?"height":"width";if(l&&c){var h=function(e,t){return I("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:q(e,s))}(p.padding,o),b=A(l),g="y"===u?r:d,w="y"===u?n:i,v=o.rects.reference[m]+o.rects.reference[u]-c[u]-o.rects.popper[m],y=c[u]-o.rects.reference[u],x=H(l),O=x?"y"===u?x.clientHeight||0:x.clientWidth||0:0,E=v/2-y/2,j=h[g],D=O-b[m]-h[w],L=O/2-b[m]/2+E,W=z(j,L,D),R=u;o.modifiersData[a]=((t={})[R]=W,t.centerOffset=W-L,t)}},effect:function(e){var t=e.state,o=e.options.element,r=void 0===o?"[data-popper-arrow]":o;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&R(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function N(e){return e.split("-")[1]}var _={top:"auto",right:"auto",bottom:"auto",left:"auto"};function F(e){var t,o=e.popper,a=e.popperRect,s=e.placement,p=e.variation,c=e.offsets,f=e.position,u=e.gpuAcceleration,m=e.adaptive,h=e.roundOffsets,b=e.isFixed,w=c.x,v=void 0===w?0:w,y=c.y,x=void 0===y?0:y,k="function"==typeof h?h({x:v,y:x}):{x:v,y:x};v=k.x,x=k.y;var O=c.hasOwnProperty("x"),E=c.hasOwnProperty("y"),D=d,L=r,W=window;if(m){var A=H(o),R="clientHeight",C="clientWidth";if(A===g(o)&&"static"!==B(A=P(o)).position&&"absolute"===f&&(R="scrollHeight",C="scrollWidth"),s===r||(s===d||s===i)&&p===l)L=n,x-=(b&&A===W&&W.visualViewport?W.visualViewport.height:A[R])-a.height,x*=u?1:-1;if(s===d||(s===r||s===n)&&p===l)D=i,v-=(b&&A===W&&W.visualViewport?W.visualViewport.width:A[C])-a.width,v*=u?1:-1}var T,S=Object.assign({position:f},m&&_),M=!0===h?function(e){var t=e.x,o=e.y,r=window.devicePixelRatio||1;return{x:j(t*r)/r||0,y:j(o*r)/r||0}}({x:v,y:x}):{x:v,y:x};return v=M.x,x=M.y,u?Object.assign({},S,((T={})[L]=E?"0":"",T[D]=O?"0":"",T.transform=(W.devicePixelRatio||1)<=1?"translate("+v+"px, "+x+"px)":"translate3d("+v+"px, "+x+"px, 0)",T)):Object.assign({},S,((t={})[L]=E?x+"px":"",t[D]=O?v+"px":"",t.transform="",t))}var U={passive:!0};var X={left:"right",right:"left",bottom:"top",top:"bottom"};function Y(e){return e.replace(/left|right|bottom|top/g,(function(e){return X[e]}))}var $={start:"end",end:"start"};function G(e){return e.replace(/start|end/g,(function(e){return $[e]}))}function J(e){var t=g(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function K(e){return W(P(e)).left+J(e).scrollLeft}function Q(e){var t=B(e),o=t.overflow,r=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function Z(e){return["html","body","#document"].indexOf(b(e))>=0?e.ownerDocument.body:v(e)&&Q(e)?e:Z(T(e))}function ee(e,t){var o;void 0===t&&(t=[]);var r=Z(e),n=r===(null==(o=e.ownerDocument)?void 0:o.body),i=g(r),d=n?[i].concat(i.visualViewport||[],Q(r)?r:[]):r,a=t.concat(d);return n?a:a.concat(ee(T(d)))}function te(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function oe(e,t,o){return t===c?te(function(e,t){var o=g(e),r=P(e),n=o.visualViewport,i=r.clientWidth,d=r.clientHeight,a=0,s=0;if(n){i=n.width,d=n.height;var p=L();(p||!p&&"fixed"===t)&&(a=n.offsetLeft,s=n.offsetTop)}return{width:i,height:d,x:a+K(e),y:s}}(e,o)):w(t)?function(e,t){var o=W(e,!1,"fixed"===t);return o.top=o.top+e.clientTop,o.left=o.left+e.clientLeft,o.bottom=o.top+e.clientHeight,o.right=o.left+e.clientWidth,o.width=e.clientWidth,o.height=e.clientHeight,o.x=o.left,o.y=o.top,o}(t,o):te(function(e){var t,o=P(e),r=J(e),n=null==(t=e.ownerDocument)?void 0:t.body,i=O(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),d=O(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-r.scrollLeft+K(e),s=-r.scrollTop;return"rtl"===B(n||o).direction&&(a+=O(o.clientWidth,n?n.clientWidth:0)-i),{width:i,height:d,x:a,y:s}}(P(e)))}function re(e,t,o,r){var n="clippingParents"===t?function(e){var t=ee(T(e)),o=["absolute","fixed"].indexOf(B(e).position)>=0&&v(e)?H(e):e;return w(o)?t.filter((function(e){return w(e)&&R(e,o)&&"body"!==b(e)})):[]}(e):[].concat(t),i=[].concat(n,[o]),d=i[0],a=i.reduce((function(t,o){var n=oe(e,o,r);return t.top=O(n.top,t.top),t.right=E(n.right,t.right),t.bottom=E(n.bottom,t.bottom),t.left=O(n.left,t.left),t}),oe(e,d,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ne(e){var t,o=e.reference,a=e.element,s=e.placement,c=s?k(s):null,f=s?N(s):null,u=o.x+o.width/2-a.width/2,m=o.y+o.height/2-a.height/2;switch(c){case r:t={x:u,y:o.y-a.height};break;case n:t={x:u,y:o.y+o.height};break;case i:t={x:o.x+o.width,y:m};break;case d:t={x:o.x-a.width,y:m};break;default:t={x:o.x,y:o.y}}var h=c?M(c):null;if(null!=h){var b="y"===h?"height":"width";switch(f){case p:t[h]=t[h]-(o[b]/2-a[b]/2);break;case l:t[h]=t[h]+(o[b]/2-a[b]/2)}}return t}function ie(e,t){void 0===t&&(t={});var o=t,d=o.placement,a=void 0===d?e.placement:d,p=o.strategy,l=void 0===p?e.strategy:p,u=o.boundary,m=void 0===u?"clippingParents":u,h=o.rootBoundary,b=void 0===h?c:h,g=o.elementContext,v=void 0===g?f:g,y=o.altBoundary,x=void 0!==y&&y,k=o.padding,O=void 0===k?0:k,E=I("number"!=typeof O?O:q(O,s)),j=v===f?"reference":f,D=e.rects.popper,L=e.elements[x?j:v],A=re(w(L)?L:L.contextElement||P(e.elements.popper),m,b,l),R=W(e.elements.reference),B=ne({reference:R,element:D,strategy:"absolute",placement:a}),C=te(Object.assign({},D,B)),T=v===f?C:R,S={top:A.top-T.top+E.top,bottom:T.bottom-A.bottom+E.bottom,left:A.left-T.left+E.left,right:T.right-A.right+E.right},H=e.modifiersData.offset;if(v===f&&H){var M=H[a];Object.keys(S).forEach((function(e){var t=[i,n].indexOf(e)>=0?1:-1,o=[r,n].indexOf(e)>=0?"y":"x";S[e]+=M[o]*t}))}return S}function de(e,t){void 0===t&&(t={});var o=t,r=o.placement,n=o.boundary,i=o.rootBoundary,d=o.padding,a=o.flipVariations,p=o.allowedAutoPlacements,l=void 0===p?m:p,c=N(r),f=c?a?u:u.filter((function(e){return N(e)===c})):s,h=f.filter((function(e){return l.indexOf(e)>=0}));0===h.length&&(h=f);var b=h.reduce((function(t,o){return t[o]=ie(e,{placement:o,boundary:n,rootBoundary:i,padding:d})[k(o)],t}),{});return Object.keys(b).sort((function(e,t){return b[e]-b[t]}))}const ae={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,s=e.name;if(!t.modifiersData[s]._skip){for(var l=o.mainAxis,c=void 0===l||l,f=o.altAxis,u=void 0===f||f,m=o.fallbackPlacements,h=o.padding,b=o.boundary,g=o.rootBoundary,w=o.altBoundary,v=o.flipVariations,y=void 0===v||v,x=o.allowedAutoPlacements,O=t.options.placement,E=k(O),j=m||(E===O||!y?[Y(O)]:function(e){if(k(e)===a)return[];var t=Y(e);return[G(e),t,G(t)]}(O)),D=[O].concat(j).reduce((function(e,o){return e.concat(k(o)===a?de(t,{placement:o,boundary:b,rootBoundary:g,padding:h,flipVariations:y,allowedAutoPlacements:x}):o)}),[]),L=t.rects.reference,W=t.rects.popper,A=new Map,R=!0,B=D[0],C=0;C<D.length;C++){var P=D[C],T=k(P),S=N(P)===p,H=[r,n].indexOf(T)>=0,M=H?"width":"height",z=ie(t,{placement:P,boundary:b,rootBoundary:g,altBoundary:w,padding:h}),I=H?S?i:d:S?n:r;L[M]>W[M]&&(I=Y(I));var q=Y(I),V=[];if(c&&V.push(z[T]<=0),u&&V.push(z[I]<=0,z[q]<=0),V.every((function(e){return e}))){B=P,R=!1;break}A.set(P,V)}if(R)for(var _=function(e){var t=D.find((function(t){var o=A.get(t);if(o)return o.slice(0,e).every((function(e){return e}))}));if(t)return B=t,"break"},F=y?3:1;F>0;F--){if("break"===_(F))break}t.placement!==B&&(t.modifiersData[s]._skip=!0,t.placement=B,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function se(e,t,o){return void 0===o&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function pe(e){return[r,i,n,d].some((function(t){return e[t]>=0}))}const le={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,o=e.options,n=e.name,a=o.offset,s=void 0===a?[0,0]:a,p=m.reduce((function(e,o){return e[o]=function(e,t,o){var n=k(e),a=[d,r].indexOf(n)>=0?-1:1,s="function"==typeof o?o(Object.assign({},t,{placement:e})):o,p=s[0],l=s[1];return p=p||0,l=(l||0)*a,[d,i].indexOf(n)>=0?{x:l,y:p}:{x:p,y:l}}(o,t.rects,s),e}),{}),l=p[t.placement],c=l.x,f=l.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=f),t.modifiersData[n]=p}};const ce={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,a=e.name,s=o.mainAxis,l=void 0===s||s,c=o.altAxis,f=void 0!==c&&c,u=o.boundary,m=o.rootBoundary,h=o.altBoundary,b=o.padding,g=o.tether,w=void 0===g||g,v=o.tetherOffset,y=void 0===v?0:v,x=ie(t,{boundary:u,rootBoundary:m,padding:b,altBoundary:h}),j=k(t.placement),D=N(t.placement),L=!D,W=M(j),R="x"===W?"y":"x",B=t.modifiersData.popperOffsets,C=t.rects.reference,P=t.rects.popper,T="function"==typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,S="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),I=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,q={x:0,y:0};if(B){if(l){var V,_="y"===W?r:d,F="y"===W?n:i,U="y"===W?"height":"width",X=B[W],Y=X+x[_],$=X-x[F],G=w?-P[U]/2:0,J=D===p?C[U]:P[U],K=D===p?-P[U]:-C[U],Q=t.elements.arrow,Z=w&&Q?A(Q):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[_],oe=ee[F],re=z(0,C[U],Z[U]),ne=L?C[U]/2-G-re-te-S.mainAxis:J-re-te-S.mainAxis,de=L?-C[U]/2+G+re+oe+S.mainAxis:K+re+oe+S.mainAxis,ae=t.elements.arrow&&H(t.elements.arrow),se=ae?"y"===W?ae.clientTop||0:ae.clientLeft||0:0,pe=null!=(V=null==I?void 0:I[W])?V:0,le=X+de-pe,ce=z(w?E(Y,X+ne-pe-se):Y,X,w?O($,le):$);B[W]=ce,q[W]=ce-X}if(f){var fe,ue="x"===W?r:d,me="x"===W?n:i,he=B[R],be="y"===R?"height":"width",ge=he+x[ue],we=he-x[me],ve=-1!==[r,d].indexOf(j),ye=null!=(fe=null==I?void 0:I[R])?fe:0,xe=ve?ge:he-C[be]-P[be]-ye+S.altAxis,ke=ve?he+C[be]+P[be]-ye-S.altAxis:we,Oe=w&&ve?function(e,t,o){var r=z(e,t,o);return r>o?o:r}(xe,he,ke):z(w?xe:ge,he,w?ke:we);B[R]=Oe,q[R]=Oe-he}t.modifiersData[a]=q}},requiresIfExists:["offset"]};function fe(e,t,o){void 0===o&&(o=!1);var r,n,i=v(t),d=v(t)&&function(e){var t=e.getBoundingClientRect(),o=j(t.width)/e.offsetWidth||1,r=j(t.height)/e.offsetHeight||1;return 1!==o||1!==r}(t),a=P(t),s=W(e,d,o),p={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!o)&&(("body"!==b(t)||Q(a))&&(p=(r=t)!==g(r)&&v(r)?{scrollLeft:(n=r).scrollLeft,scrollTop:n.scrollTop}:J(r)),v(t)?((l=W(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=K(a))),{x:s.left+p.scrollLeft-l.x,y:s.top+p.scrollTop-l.y,width:s.width,height:s.height}}function ue(e){var t=new Map,o=new Set,r=[];function n(e){o.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!o.has(e)){var r=t.get(e);r&&n(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){o.has(e.name)||n(e)})),r}var me={placement:"bottom",modifiers:[],strategy:"absolute"};function he(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function be(e){void 0===e&&(e={});var t=e,o=t.defaultModifiers,r=void 0===o?[]:o,n=t.defaultOptions,i=void 0===n?me:n;return function(e,t,o){void 0===o&&(o=i);var n,d,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},me,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],p=!1,l={state:a,setOptions:function(o){var n="function"==typeof o?o(a.options):o;c(),a.options=Object.assign({},i,a.options,n),a.scrollParents={reference:w(e)?ee(e):e.contextElement?ee(e.contextElement):[],popper:ee(t)};var d,p,f=function(e){var t=ue(e);return h.reduce((function(e,o){return e.concat(t.filter((function(e){return e.phase===o})))}),[])}((d=[].concat(r,a.options.modifiers),p=d.reduce((function(e,t){var o=e[t.name];return e[t.name]=o?Object.assign({},o,t,{options:Object.assign({},o.options,t.options),data:Object.assign({},o.data,t.data)}):t,e}),{}),Object.keys(p).map((function(e){return p[e]}))));return a.orderedModifiers=f.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,o=e.options,r=void 0===o?{}:o,n=e.effect;if("function"==typeof n){var i=n({state:a,name:t,instance:l,options:r}),d=function(){};s.push(i||d)}})),l.update()},forceUpdate:function(){if(!p){var e=a.elements,t=e.reference,o=e.popper;if(he(t,o)){a.rects={reference:fe(t,H(o),"fixed"===a.options.strategy),popper:A(o)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<a.orderedModifiers.length;r++)if(!0!==a.reset){var n=a.orderedModifiers[r],i=n.fn,d=n.options,s=void 0===d?{}:d,c=n.name;"function"==typeof i&&(a=i({state:a,options:s,name:c,instance:l})||a)}else a.reset=!1,r=-1}}},update:(n=function(){return new Promise((function(e){l.forceUpdate(),e(a)}))},function(){return d||(d=new Promise((function(e){Promise.resolve().then((function(){d=void 0,e(n())}))}))),d}),destroy:function(){c(),p=!0}};if(!he(e,t))return l;function c(){s.forEach((function(e){return e()})),s=[]}return l.setOptions(o).then((function(e){!p&&o.onFirstUpdate&&o.onFirstUpdate(e)})),l}}var ge=be({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,o=e.instance,r=e.options,n=r.scroll,i=void 0===n||n,d=r.resize,a=void 0===d||d,s=g(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach((function(e){e.addEventListener("scroll",o.update,U)})),a&&s.addEventListener("resize",o.update,U),function(){i&&p.forEach((function(e){e.removeEventListener("scroll",o.update,U)})),a&&s.removeEventListener("resize",o.update,U)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,o=e.name;t.modifiersData[o]=ne({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,o=e.options,r=o.gpuAcceleration,n=void 0===r||r,i=o.adaptive,d=void 0===i||i,a=o.roundOffsets,s=void 0===a||a,p={placement:k(t.placement),variation:N(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,F(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:d,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,F(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},x,le,ae,ce,V,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,o=e.name,r=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,d=ie(t,{elementContext:"reference"}),a=ie(t,{altBoundary:!0}),s=se(d,r),p=se(a,n,i),l=pe(s),c=pe(p);t.modifiersData[o]={referenceClippingOffsets:s,popperEscapeOffsets:p,isReferenceHidden:l,hasPopperEscaped:c},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":c})}}]})}}]);
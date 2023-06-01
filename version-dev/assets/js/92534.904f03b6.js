"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92534],{64067:(e,t,n)=>{n.d(t,{h:()=>i,i:()=>a,m:()=>s});var o=n(42951);const s=new class{constructor(){this.menuElement=null,this.menuExpandChange=new o.T}register(e){this.menuElement?console.warn("Menu already defined"):(this.menuElement=e,this.menuElement.addEventListener("expandChange",(e=>{this.menuExpandChange.emit(e.detail)})))}async open(){return!!this.menuElement&&(this.menuElement.toggleMenu(!0),!0)}async close(){return!!this.menuElement&&(this.menuElement.toggleMenu(!1),!0)}async toggle(){return!!this.menuElement&&(this.menuElement.toggleMenu(),!0)}get nativeElement(){return this.menuElement}get expandChange(){return this.menuExpandChange}};function a(e){return e&&"IX-BASIC-NAVIGATION"===e.tagName}const i=(e,t)=>t.closest(e)},92534:(e,t,n)=>{n.r(t),n.d(t,{ix_application_header:()=>i});var o=n(54813),s=n(64067),a=n(45932);const i=class{constructor(e){(0,o.r)(this,e),this.name=void 0,this.mode="desktop",this.menuExpanded=!1}componentWillLoad(){const e=(0,s.h)("ix-basic-navigation",this.host);(0,s.i)(e)&&(this.modeDisposable=a.s.onChange.on((e=>this.mode=e)),this.mode=a.s.mode,this.menuDisposable=s.m.expandChange.on((e=>{this.menuExpanded=e})))}componentDidLoad(){this.attachSiemensLogoIfLoaded()}disconnectedCallback(){var e,t;null===(e=this.menuDisposable)||void 0===e||e.dispose(),null===(t=this.modeDisposable)||void 0===t||t.dispose()}async attachSiemensLogoIfLoaded(){await window.customElements.whenDefined("ix-siemens-logo");const e=document.createElement("ix-siemens-logo");this.host.querySelector('[slot="logo"]')||this.host.shadowRoot.querySelector(".logo").appendChild(e)}async onMenuClick(){s.m.toggle()}render(){return(0,o.h)(o.H,{class:{[`mode-${this.mode}`]:!0}},"mobile"===this.mode?(0,o.h)("ix-burger-menu",{onClick:()=>this.onMenuClick(),expanded:this.menuExpanded}):null,(0,o.h)("div",{class:"logo"},(0,o.h)("slot",{name:"logo"})),(0,o.h)("div",{class:"name"},this.name),(0,o.h)("slot",null))}get host(){return(0,o.g)(this)}};i.style=":host{display:flex;align-items:center;position:relative;width:100%;height:2.75rem;padding-left:1rem;color:var(--theme-app-header--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color)}:host .name{margin-left:2.5rem;margin-right:2.5rem;color:var(--theme-app-header--color)}:host .logo{display:inline-flex;align-items:center;position:relative;height:32px;overflow:hidden;line-height:0rem;color:var(--theme-app-header-logo--color)}:host(.mode-mobile){padding-left:0.5rem}:host(.mode-mobile) .logo{margin-left:0.5rem}"},45932:(e,t,n)=>{n.d(t,{s:()=>d});var o=n(42951);const s=e=>{const t=((e,t)=>{const n=e=>{t(e)},o=window.matchMedia(e);return o.addEventListener("change",n),{matchMedia:o,dispose:()=>{o.removeEventListener("change",n)}}})("only screen and (max-width: 767px)",(t=>{let{matches:n}=t;e(n?"mobile":"desktop")}));return e(t.matchMedia.matches?"mobile":"desktop"),{dispose:t.dispose,matchMedia:t.matchMedia}};var a,i,r=function(e,t,n,o){if("a"===n&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?o:"a"===n?o.call(e):o?o.value:t.get(e)},h=function(e,t,n,o,s){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?s.call(e,n):s?s.value=n:t.set(e,n),n};a=new WeakMap,i=new WeakMap;const d=new class{constructor(){a.set(this,new o.T),i.set(this,"desktop"),s((e=>{r(this,a,"f").emit(e),h(this,i,e,"f")}))}get mode(){return r(this,i,"f")}get onChange(){return r(this,a,"f")}}}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79065],{79065:(e,t,i)=>{i.r(t),i.d(t,{ix_map_navigation:()=>o,ix_map_navigation_overlay:()=>s});var a=i(95269),n=i(10161);const o=class{constructor(e){(0,a.r)(this,e),this.navigationToggled=(0,a.c)(this,"navigationToggled",7),this.contextMenuClick=(0,a.c)(this,"contextMenuClick",7),this.applicationName=void 0,this.navigationTitle=void 0,this.hideContextMenu=!0,this.isSidebarOpen=!0}get menu(){return this.hostElement.querySelector("ix-menu")}get menuOverlay(){return this.hostElement.querySelector("ix-menu-overlay")}get mapNavMenu(){return this.hostElement.querySelector(".map-nav-menu")}get sidebar(){return this.hostElement.querySelector(".map-nav-sidebar")}get overlay(){return this.hostElement.querySelector("#overlay")}componentDidRender(){this.appendMenu(),this.closeOverlay()}appendMenu(){this.hostElement.querySelector("#menu-placeholder").appendChild(this.menu),this.menu.addEventListener("mapExpandChange",(e=>{const t=!e.detail;this.toggleSidebar(t),this.menu.toggleMapExpand(t)})),this.menu.enableMapExpand=!0}toggleSidebar(e){this.isSidebarOpen=void 0!==e?e:!this.isSidebarOpen,e?this.openSidebar():this.closeSidebar(),this.navigationToggled.emit(this.isSidebarOpen)}closeSidebar(){(0,n.a)({targets:this.sidebar,duration:o.defaultTime,marginLeft:[0,"-29.75rem"],opacity:[1,0],easing:"easeInSine",complete:()=>{this.sidebar.classList.add("d-none")}})}openSidebar(){(0,n.a)({targets:this.sidebar,duration:o.defaultTime,marginLeft:["-29.75rem",0],opacity:[0,1],easing:"easeOutSine",begin:()=>{this.sidebar.classList.remove("d-none")}})}async openOverlay(e,t,i,a){(0,n.a)({targets:this.overlay,duration:o.slowTime,backdropFilter:[0,"blur(1rem)"],translateX:["-4rem",0],opacity:[0,1],easing:"easeOutSine",begin:()=>{this.overlay.classList.remove("d-none")}});const s=document.createElement("ix-map-navigation-overlay");s.setAttribute("color",a),s.setAttribute("name",e),s.setAttribute("icon",i),s.setAttribute("slot","overlay"),s.addEventListener("closeClick",(()=>this.closeOverlay())),s.appendChild(t),this.hostElement.appendChild(s)}async closeOverlay(){(0,n.a)({targets:this.overlay,duration:o.slowTime,backdropFilter:["blur(1rem)",0],translateX:[0,"-4rem"],opacity:[1,0],easing:"easeInSine",complete:()=>{var e;this.overlay&&(null===(e=this.overlay.firstChild)||void 0===e||e.remove(),this.overlay.classList.add("d-none"))}})}render(){return(0,a.h)(a.H,null,(0,a.h)("div",{id:"menu-placeholder"}),(0,a.h)("div",{class:"map-nav"},(0,a.h)("div",{class:"map-nav-sidebar"},(0,a.h)("div",{class:"map-nav-header"},(0,a.h)("ix-application-header",{name:this.applicationName,class:"map-nav-header-brand"},(0,a.h)("slot",{name:"logo"}))),(0,a.h)("div",{class:"map-nav-sidebar-content"},(0,a.h)("div",{class:"map-nav-sidebar-static-content"},(0,a.h)("div",{class:"map-nav-title"},this.navigationTitle),this.hideContextMenu?"":(0,a.h)("ix-icon-button",{icon:"context-menu",ghost:!0,size:"24",variant:"Secondary",onClick:e=>this.contextMenuClick.emit()})),(0,a.h)("div",{class:"map-nav-sidebar-user-content"},(0,a.h)("slot",{name:"sidebar-content"})))),(0,a.h)("div",{class:"content"},(0,a.h)("div",{class:"map-nav-header-content bg-2"},(0,a.h)("slot",{name:"content-header"})),(0,a.h)("main",null,(0,a.h)("slot",null),(0,a.h)("slot",{name:"overlay"})))))}get hostElement(){return(0,a.g)(this)}};o.defaultTime=150,o.slowTime=500,o.style=".sc-ix-map-navigation-h{display:flex;position:relative;width:100%;height:100%}.sc-ix-map-navigation-h .map-nav.sc-ix-map-navigation{display:flex;margin-left:4rem;position:relative;height:100%;flex-grow:1;overflow:hidden}.sc-ix-map-navigation-h .map-nav-sidebar.sc-ix-map-navigation{display:flex;flex-direction:column;align-items:center;width:29.75rem;max-width:29.75rem;min-width:29.75rem;height:100%;left:4rem;background-color:var(--theme-map-navigation--background);-webkit-border-end:0.125rem solid var(--theme-map-navigation-separator--background);border-inline-end:0.125rem solid var(--theme-map-navigation-separator--background);z-index:99}.sc-ix-map-navigation-h .map-nav-sidebar-content.sc-ix-map-navigation{align-items:center;position:relative;overflow:auto;height:100%;width:100%}.sc-ix-map-navigation-h .map-nav-sidebar-content.sc-ix-map-navigation .map-nav-sidebar-static-content.sc-ix-map-navigation{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;justify-content:space-between;margin-top:0.437rem;margin-bottom:0.812rem;margin-left:1rem;margin-right:1rem}.sc-ix-map-navigation-h .map-nav-header.sc-ix-map-navigation{display:flex;position:relative;align-items:center;height:3.5rem;min-height:3.5rem;width:100%}.sc-ix-map-navigation-h .map-nav-header.sc-ix-map-navigation .map-nav-header-brand.sc-ix-map-navigation{background-color:var(--theme-map-navigation-background);display:flex;align-items:center;height:100%;width:100%;padding:0 1rem;--theme-app-header--color:var(--theme-map-navigation-header--color);--theme-app-header-logo--color:var(--theme-map-navigation-logo--color)}.sc-ix-map-navigation-h .map-nav-header.sc-ix-map-navigation .map-nav-header-brand.sc-ix-map-navigation button.sc-ix-map-navigation{margin-left:1rem}.sc-ix-map-navigation-h .map-nav-header-content.sc-ix-map-navigation{display:flex;height:3.5rem;align-items:center;overflow:hidden;padding:0 1rem}.sc-ix-map-navigation-h .map-nav-header-content.sc-ix-map-navigation:empty{height:0}.sc-ix-map-navigation-h .map-nav-title.sc-ix-map-navigation{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;align-items:center;flex-grow:1}.sc-ix-map-navigation-h .content.sc-ix-map-navigation{display:block;flex-grow:1;position:relative;height:100%;overflow:hidden;z-index:calc(var(--theme-z-index-sticky) - 1)}";const s=class{constructor(e){(0,a.r)(this,e),this.closeClick=(0,a.c)(this,"closeClick",7),this.name=void 0,this.icon=void 0,this.color=void 0}componentWillLoad(){(0,n.a)({targets:this.hostElement,duration:s.slowTime,backdropFilter:[0,"blur(1rem)"],translateX:["-4rem",0],opacity:[0,1],easing:"easeOutSine",begin:()=>{this.hostElement.classList.remove("d-none")}})}closeOverlay(){(0,n.a)({targets:this.hostElement,duration:s.slowTime,backdropFilter:["blur(1rem)",0],translateX:[0,"-4rem"],opacity:[1,0],easing:"easeInSine",complete:()=>{this.closeClick.emit(),this.hostElement.classList.add("d-none")}})}render(){return(0,a.h)(a.H,null,(0,a.h)("div",{class:"overlay-header"},(0,a.h)("div",{class:{"color-indicator":!0,"d-none":"undefined"===this.color||void 0===this.color},style:{"background-color":this.color?`var(--theme-${this.color})`:""}}),(0,a.h)("div",{class:"overlay-header-content"},(0,a.h)("ix-icon",{size:"32",name:this.icon}),(0,a.h)("span",{class:"overlay-header-title",title:this.name},this.name)),(0,a.h)("ix-icon-button",{class:"overlay-close",ghost:!0,icon:"close",size:"24",onClick:()=>this.closeOverlay()})),(0,a.h)("slot",null))}get hostElement(){return(0,a.g)(this)}};s.slowTime=500,s.style=".text-xs.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a.sc-ix-map-navigation-overlay{color:var(--theme-color-primary)}.sc-ix-map-navigation-overlay-h{position:absolute;width:100%;height:100%;z-index:2;top:0;left:0;background-color:var(--theme-overlay--background)}.sc-ix-map-navigation-overlay-h .overlay-header.sc-ix-map-navigation-overlay{display:flex;position:relative;justify-content:flex-start;align-items:center;height:3.5rem;background-color:var(--theme-overlay-header--background)}.sc-ix-map-navigation-overlay-h .overlay-header-content.sc-ix-map-navigation-overlay{display:flex;align-items:center;min-width:0}.sc-ix-map-navigation-overlay-h .overlay-header-content.sc-ix-map-navigation-overlay ix-icon.sc-ix-map-navigation-overlay{-webkit-margin-start:1rem;margin-inline-start:1rem;color:var(--theme-overlay-header--color)}.sc-ix-map-navigation-overlay-h .overlay-header-content.sc-ix-map-navigation-overlay .overlay-header-title.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--theme-overlay-header--color);-webkit-margin-start:1rem;margin-inline-start:1rem}.sc-ix-map-navigation-overlay-h .color-indicator.sc-ix-map-navigation-overlay{display:inline-block;position:relative;width:0.5rem;height:100%;background-color:var(--theme-color-neutral)}.sc-ix-map-navigation-overlay-h .overlay-close.sc-ix-map-navigation-overlay{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:1rem;margin-inline-end:1rem}"}}]);
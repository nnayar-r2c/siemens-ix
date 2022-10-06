import{r as i,h as e,H as t,g as l}from"./p-47ea9884.js";import{F as r}from"./p-1d30454e.js";const o=class{constructor(e){i(this,e),this.ANIMATION_DURATION=150,this.index=0}componentDidLoad(){this.contentItems=this.contentContainerElement.querySelectorAll("ix-flip-tile-content"),this.contentItems.forEach(((i,e)=>{e!==this.index&&this.toggleContentItem(e)}))}toggleIndex(){this.doFlipAnimation()}toggleContentItem(i){this.contentItems[i].classList.toggle("d-none")}doFlipAnimation(){this.isFlipAnimationActive=!0,setTimeout((()=>{this.toggleContentItem(this.index),this.index>=this.contentItems.length-1?this.index=0:this.index++,this.toggleContentItem(this.index)}),this.ANIMATION_DURATION),setTimeout((()=>{this.isFlipAnimationActive=!1}),2*this.ANIMATION_DURATION)}render(){return e(t,null,e("div",{class:{"flip-tile-container":!0,info:this.state===r.Info,warning:this.state===r.Warning,alarm:this.state===r.Alarm,primary:this.state===r.Primary,"flip-animation-active":this.isFlipAnimationActive}},e("div",{class:"flip-tile-header"},e("div",{class:"header-slot-container text-l-title"},e("slot",{name:"header"})),e("ix-icon-button",{icon:"eye",variant:"Primary",ghost:!0,onClick:()=>this.toggleIndex()})),e("div",{class:"content-container",ref:i=>this.contentContainerElement=i},e("slot",null)),e("div",{class:{footer:!0,"contrast-light":this.state===r.Warning,"contrast-dark":this.state===r.Info||this.state===r.Alarm}},e("slot",{name:"footer"}))))}get hostElement(){return l(this)}};o.style="@keyframes flip-animation{0%{transform:rotateY(0)}50%{transform:rotateY(90deg)}51%{transform:rotateY(270deg)}100%{transform:rotateY(360deg)}}.sc-ix-flip-tile-h{display:flex;flex-direction:column;width:16rem;min-width:16rem;max-width:16rem;height:15.125rem;perspective:1000px}.sc-ix-flip-tile-h .flip-tile-header.sc-ix-flip-tile{display:flex;align-items:center;height:2.5rem;padding:0 0.5rem 0 1rem}.sc-ix-flip-tile-h .flip-tile-header.sc-ix-flip-tile .header-slot-container.sc-ix-flip-tile{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1;min-width:0}.sc-ix-flip-tile-h .content-container.sc-ix-flip-tile{flex-grow:1;margin:1rem}.sc-ix-flip-tile-h .flip-tile-container.sc-ix-flip-tile{display:flex;flex-direction:column;height:100%;background-color:var(--theme-blind-base--background);border:solid 1px var(--theme-blind-base--border-color);border-radius:var(--theme-flip-tile--border-radius) var(--theme-flip-tile--border-radius) 0 0;transform-style:preserve-3d}.sc-ix-flip-tile-h .flip-tile-container.flip-animation-active.sc-ix-flip-tile{animation:flip-animation 300ms, ease-in-out}.sc-ix-flip-tile-h .flip-tile-container.sc-ix-flip-tile .footer.sc-ix-flip-tile{display:flex;height:3rem;align-items:center;justify-content:center;padding:0 0.5rem;color:var(--theme-flip-footer--color);background-color:var(--theme-blind-base--background)}.sc-ix-flip-tile-h .flip-tile-container.sc-ix-flip-tile .footer.sc-ix-flip-tile .sc-ix-flip-tile:first-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:100%}.sc-ix-flip-tile-h .flip-tile-container .sc-ix-flip-tile-s>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:column;align-items:center;min-width:0}.sc-ix-flip-tile-h .flip-tile-container.primary.sc-ix-flip-tile{border-color:var(--theme-color-primary)}.sc-ix-flip-tile-h .flip-tile-container.primary.sc-ix-flip-tile .footer.sc-ix-flip-tile{background-color:var(--theme-color-primary);color:var(--theme-color-primary--contrast)}.sc-ix-flip-tile-h .flip-tile-container.info.sc-ix-flip-tile{border-color:var(--theme-color-info)}.sc-ix-flip-tile-h .flip-tile-container.info.sc-ix-flip-tile .footer.sc-ix-flip-tile{background-color:var(--theme-color-info);color:var(--theme-color-info--contrast)}.sc-ix-flip-tile-h .flip-tile-container.warning.sc-ix-flip-tile{border-color:var(--theme-color-warning)}.sc-ix-flip-tile-h .flip-tile-container.warning.sc-ix-flip-tile .footer.sc-ix-flip-tile{background-color:var(--theme-color-warning);color:var(--theme-color-warning--contrast)}.sc-ix-flip-tile-h .flip-tile-container.alarm.sc-ix-flip-tile{border-color:var(--theme-color-alarm)}.sc-ix-flip-tile-h .flip-tile-container.alarm.sc-ix-flip-tile .footer.sc-ix-flip-tile{background-color:var(--theme-color-alarm);color:var(--theme-color-alarm--contrast)}.sc-ix-flip-tile-h:hover .flip-tile-container.sc-ix-flip-tile .footer.sc-ix-flip-tile ix-icon.sc-ix-flip-tile{color:var(--theme-color-std-text)}";const s=class{constructor(e){i(this,e)}render(){return e(t,null,e("slot",null))}};s.style=":host{display:block}";export{o as ix_flip_tile,s as ix_flip_tile_content}
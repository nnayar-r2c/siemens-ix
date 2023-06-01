import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.8b470164.js";
import { T as TypedEvent } from "./typed-event-a230184a.ccfb44d2.js";
const toastCss = ".sc-ix-toast-h{display:flex;flex-direction:column;position:relative;min-width:17.5rem;max-width:17.5rem;min-height:3.5rem;pointer-events:all;background-color:var(--theme-toast--background);border:var(--theme-toast--border-thickness) solid var(--theme-toast--border-color);border-radius:var(--theme-toast--border-radius);box-shadow:var(--theme-toast--box-shadow);--animate-duration:300ms}.sc-ix-toast-h .toast-body.sc-ix-toast{display:flex;position:relative;width:100%;flex-grow:1}.sc-ix-toast-h .toast-body.sc-ix-toast .toast-icon.sc-ix-toast{display:flex;align-items:flex-start;margin:1rem}.sc-ix-toast-h .toast-body.sc-ix-toast .toast-content.sc-ix-toast{overflow:hidden;text-overflow:ellipsis;min-width:0;width:100%;max-width:10.25rem;margin-top:calc(\n        1rem + var(--theme-toast--border-thickness)\n      );margin-bottom:0.75rem}.sc-ix-toast-h .toast-body.sc-ix-toast .toast-content.sc-ix-toast .toast-message.sc-ix-toast{min-width:0}.sc-ix-toast-h .toast-close.sc-ix-toast{display:flex;position:relative;margin:0.75rem;pointer-events:all}.sc-ix-toast-h .toast-progress-bar.sc-ix-toast{position:absolute;bottom:0;height:0.25rem;width:100%;background-color:var(--theme-toast-timer-value--background);transform-origin:left}.sc-ix-toast-h .toast-progress-bar--animated.sc-ix-toast{animation:trackProgress linear 1 forwards}@keyframes trackProgress{0%{transform:scaleX(1)}100%{transform:scaleX(0)}}";
const Toast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeToast = createEvent(this, "closeToast", 7);
    this.type = "info";
    this.toastTitle = void 0;
    this.autoCloseDelay = 5e3;
    this.autoClose = true;
    this.icon = void 0;
    this.iconColor = void 0;
    this.progress = 0;
    this.touched = false;
  }
  getIcon() {
    if (this.icon) {
      return h("ix-icon", { name: this.icon, color: this.iconColor, size: "24" });
    }
    switch (this.type) {
      case "info":
        return h("ix-icon", { name: "info", size: "24", color: "color-std-text" });
      case "error":
        return h("ix-icon", { name: "error", size: "24", color: "color-alarm" });
      case "success":
        return h("ix-icon", { name: "success", size: "24", color: "color-success" });
      case "warning":
        return h("ix-icon", { name: "warning", size: "24", color: "color-warning" });
      default:
        return "";
    }
  }
  close() {
    if (this.host) {
      this.host.classList.add("animate__fadeOut");
    }
    setTimeout(() => {
      this.closeToast.emit();
    }, 250);
  }
  render() {
    let progressBarStyle = {};
    const progressBarClass = ["toast-progress-bar"];
    progressBarStyle = {
      animationDuration: `${this.autoCloseDelay}ms`,
      animationPlayState: this.touched ? "paused" : "running"
    };
    progressBarClass.push("toast-progress-bar--animated");
    return h(Host, { class: "animate__animated animate__fadeIn" }, h("div", { class: "toast-body", onPointerLeave: () => {
      this.touched = false;
    }, onPointerEnter: () => {
      this.touched = true;
    } }, this.type || this.icon ? h("div", { class: "toast-icon" }, this.getIcon()) : null, h("div", { class: "toast-content" }, this.toastTitle ? h("div", { class: "toast-title text-default-title-single" }, this.toastTitle) : null, h("div", { class: "toast-message text-default" }, h("slot", null))), h("div", { class: "toast-close" }, h("ix-icon-button", { icon: "close", size: "24", ghost: true, onClick: () => this.closeToast.emit() }))), this.autoClose ? h("div", { class: progressBarClass.join(" "), style: progressBarStyle, onAnimationEnd: () => {
      this.close();
    }, onTransitionEnd: () => {
      if (this.progress === 0) {
        this.close();
      }
    } }) : null);
  }
  get host() {
    return getElement(this);
  }
};
Toast.style = toastCss;
const ToastContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.PREFIX_POSITION_CLASS = "toast-container--";
    this.containerId = "toast-container";
    this.containerClass = "toast-container";
    this.position = "bottom-right";
  }
  get hostContainer() {
    return document.getElementById(this.containerId);
  }
  componentDidLoad() {
    if (!document.getElementById(this.containerId)) {
      const toastContainer = document.createElement("div");
      toastContainer.id = this.containerId;
      toastContainer.classList.add(this.containerClass);
      toastContainer.classList.add(`${this.PREFIX_POSITION_CLASS}${this.position}`);
      document.body.appendChild(toastContainer);
    }
  }
  onPositionChange(newPosition, oldPosition) {
    const toastContainer = document.getElementById(this.containerId);
    toastContainer.classList.remove(`${this.PREFIX_POSITION_CLASS}${oldPosition}`);
    toastContainer.classList.add(`${this.PREFIX_POSITION_CLASS}${newPosition}`);
  }
  async showToast(config) {
    const toast = document.createElement("ix-toast");
    const onClose = new TypedEvent();
    function removeToast(result) {
      toast.remove();
      onClose.emit(result);
    }
    toast.toastTitle = config.title;
    toast.type = config.type;
    toast.autoClose = config.autoClose;
    toast.autoCloseDelay = config.autoCloseDelay;
    toast.icon = config.icon;
    toast.iconColor = config.iconColor;
    toast.addEventListener("closeToast", (event) => {
      const { detail } = event;
      removeToast(detail);
    });
    if (typeof config.message === "string") {
      toast.innerText = config.message;
    } else {
      toast.appendChild(config.message);
    }
    this.hostContainer.appendChild(toast);
    return {
      onClose,
      close: (result) => {
        removeToast(result);
      }
    };
  }
  render() {
    return h(Host, null);
  }
  get host() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "position": ["onPositionChange"]
    };
  }
};
export {
  Toast as ix_toast,
  ToastContainer as ix_toast_container
};

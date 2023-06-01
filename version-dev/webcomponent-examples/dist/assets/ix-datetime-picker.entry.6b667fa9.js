import { r as registerInstance, c as createEvent, h, H as Host } from "./index.8b470164.js";
const datetimePickerCss = ".sc-ix-datetime-picker-h{display:block;background-color:var(--theme-menu--background);border-radius:4px;position:relative;width:32.6875rem}.flex.sc-ix-datetime-picker{display:flex;justify-content:center}.btn-select-date.sc-ix-datetime-picker{position:absolute;bottom:1rem;right:1rem}.separator.sc-ix-datetime-picker{border:1px solid var(--theme-datepicker-separator--background);width:100%;margin-top:72px;height:1px}";
const DateTimePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.done = createEvent(this, "done", 7);
    this.timeChange = createEvent(this, "timeChange", 7);
    this.dateChange = createEvent(this, "dateChange", 7);
    this.dateSelect = createEvent(this, "dateSelect", 7);
    this.range = true;
    this.showHour = false;
    this.showMinutes = false;
    this.showSeconds = false;
    this.minDate = void 0;
    this.maxDate = void 0;
    this.dateFormat = "yyyy/LL/dd";
    this.timeFormat = "TT";
    this.from = void 0;
    this.to = null;
    this.time = void 0;
    this.showTimeReference = void 0;
    this.eventDelimiter = " - ";
    this.timeReference = void 0;
    this.textSelectDate = "Done";
  }
  onDone() {
    var _a;
    this.done.emit([this._from, (_a = this._to) !== null && _a !== void 0 ? _a : "", this._time].join(this.eventDelimiter));
    this.dateSelect.emit({
      from: this._from,
      to: this._to,
      time: this._time
    });
  }
  async onDateChange(event) {
    event.preventDefault();
    event.stopPropagation();
    const { detail: date } = event;
    this.dateChange.emit(date);
    const currentDateTime = await this.datePickerElement.getCurrentDate();
    this._from = currentDateTime.start;
    this._to = currentDateTime.end;
  }
  async onTimeChange(event) {
    event.preventDefault();
    event.stopPropagation();
    const { detail: time } = event;
    this.timeChange.emit(time);
    const currentDateTime = await this.timePickerElement.getCurrentTime();
    this._time = currentDateTime;
  }
  componentDidLoad() {
    this._from = this.from;
    this._to = this.to;
    this._time = this.time;
  }
  render() {
    return h(Host, null, h("div", { class: "flex" }, h("div", { class: "separator" }), h("ix-date-picker", { ref: (ref) => this.datePickerElement = ref, corners: "left", individual: false, range: this.range, onDateChange: (event) => this.onDateChange(event), from: this.from, to: this.to, format: this.dateFormat, minDate: this.minDate, maxDate: this.maxDate, eventDelimiter: this.eventDelimiter }), h("ix-time-picker", { ref: (ref) => this.timePickerElement = ref, corners: "right", individual: false, showHour: this.showHour, showMinutes: this.showMinutes, showSeconds: this.showSeconds, showTimeReference: this.showTimeReference, onTimeChange: (event) => this.onTimeChange(event), time: this.time, format: this.timeFormat, timeReference: this.timeReference }), h("div", { class: "separator" })), h("ix-button", { class: "btn-select-date", onClick: () => this.onDone() }, this.textSelectDate));
  }
};
DateTimePicker.style = datetimePickerCss;
export {
  DateTimePicker as ix_datetime_picker
};

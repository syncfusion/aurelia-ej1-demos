export class API {
  constructor() {
    this.timeStatus = true;
    this.timeValue = '2:00 AM';
  }
  onCreate() {
    $('.e-togglebutton').mousedown(function (e) {
      e.stopPropagation();
    });
  }
  onClose() {
    this.togglebtn.widget.option('toggleState', false);
  }
  onOpen() {
    this.togglebtn.widget.option('toggleState', true);
  }
  onEnable(args) {
    if (args.detail.isChecked) {
      this.timeStatus = false;
      this.btnStatus = false;
    } else {
      this.timeStatus = true;
      this.btnStatus = true;
    }
  }
  getTime() {
    /*eslint-disable */
    alert('Selected time is : ' + this.timepicker.widget.getValue());
    /*eslint-enable */
  }
  updateTime() {
    this.timepicker.widget.setCurrentTime();
  }
  onShow(args) {
    args.detail.isChecked ? this.timepicker.widget.show() : this.timepicker.widget.hide();
  }
}

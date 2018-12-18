export class API {
  constructor() {
    this.datetimeValue = '5/18/2016 2:00 AM';
    this.btnStatus = true;
    this.dtStatus = true;
  }
  ontglbtnCreate() {
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
      this.dtStatus = false;
      this.btnStatus = false;
    } else {
      this.dtStatus = true;
      this.btnStatus = true;
    }
  }
  getValue() {
  
    /*eslint-disable */
    alert('Selected Date&Time is : ' + this.datetimepicker.widget.getValue());
    /*eslint-enable */
  }
  onShow(args) {
    if (args.detail.isChecked) this.datetimepicker.widget.show();
    else this.datetimepicker.widget.hide();
  }
}

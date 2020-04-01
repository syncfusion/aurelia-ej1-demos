export class API {
  constructor() {
    this.datetimeValue = '5/18/2018 - 5/21/2018';
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
  getSelectedValue() {
    /*eslint-disable */
    alert('Selected startDate is : ' + this.daterangepicker.widget.getSelectedRange().startDate);
    alert('Selected endDate is : ' + this.daterangepicker.widget.getSelectedRange().endDate);
    /*eslint-enable */
  }
  onShow(args) {
    if (args.detail.isChecked) this.daterangepicker.widget.popupShow();
    else this.daterangepicker.widget.popupHide();
  }
}

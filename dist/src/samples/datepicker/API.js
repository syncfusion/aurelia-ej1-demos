/* global $ */
export class API {
    constructor() {
      this.status = true;
      this.dateValue = '5/18/2018';
    }
    ontglbtnCreate() {
      $('.e-togglebutton').mousedown(function(e) {
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
        this.status = false;
        this.btnStatus = false;
      } else {
        this.status = true;
        this.btnStatus = true;
      }
    }
    getValue() {
      /*eslint-disable */
      alert('Selected Date is : ' + this.datepicker.widget.getValue());
      /*eslint-enable */
    }
    onShow(args) {
      let dateObj = this.datepicker.widget;
      if (args.detail.isChecked) this.datepicker.widget.show();
      else this.datepicker.widget.hide();
    }
}

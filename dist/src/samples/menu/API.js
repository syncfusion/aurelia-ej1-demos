export class ApiMenu {
  constructor() {
    this.width = '120px';
  }
  disableChange(event) {
    let args = event.detail;
    this.menuObj.widget.disableItem(args.value);
    this.ddlEnableObj.widget.clearText(); 
  }
  enableChange(event) {
    let args = event.detail;
    this.menuObj.widget.enableItem(args.value);
    this.ddlDisableObj.widget.clearText();
  }
  disbaleEnableChange(event) {
    let args = event.detail;
    this.ddlDisableObj.widget.clearText();
    this.ddlEnableObj.widget.clearText(); 
    if (args.isChecked) {
      this.menuObj.widget.disable();
    } else {
      this.menuObj.widget.enable();
    }
  }
}

export class ApiUploadbox {
  constructor() {
    this.save = '//js.syncfusion.com/demos/ejServices/api/uploadbox/Save';
    this.remove = '//js.syncfusion.com/demos/ejServices/api/uploadbox/Remove';
  }


  onCheckUncheckAll(event) {
    let args = event.detail;
    if (args.isChecked) {
      this.uploadObj.widget.disable();
    } else {
      this.uploadObj.widget.enable();
    }
  }

  onCheck(event) {
    let args = event.detail;
    if (args.isChecked) {
      this.uploadObj.widget.setModel({ multipleFilesSelection: true });
    } else {
      this.uploadObj.widget.setModel({ multipleFilesSelection: false });
    }
  }
}

export class ApiUploadbox {
  constructor() {
    this.save = '//js.syncfusion.com/demos/ejServices/api/uploadbox/Save';
    this.remove = '//js.syncfusion.com/demos/ejServices/api/uploadbox/Remove';
  }

  create() {
    this.target = $('#UploadMethods').data('ejUploadbox');
  }

  onCheckUncheckAll(event) {
    let args = event.detail;
    if (args.isChecked) {
      this.target.disable();
    } else {
      this.target.enable();
    }
  }

  onCheck(event) {
    let args = event.detail;
    if (args.isChecked) {
      this.target.setModel({ multipleFilesSelection: true });
    } else {
      this.target.setModel({ multipleFilesSelection: false });
    }
  }
}

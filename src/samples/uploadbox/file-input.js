export class FileInputUploadbox {
  constructor() {
    this.save = '//js.syncfusion.com/demos/ejServices/api/uploadbox/Save';
    this.remove = '//js.syncfusion.com/demos/ejServices/api/uploadbox/Remove';
    this.multipleFiles = true;
  }

  error(event) {
    alert(event.detail.error); // eslint-disable-line no-alert
  }

  allowFileType(event) {
    this.uploadObj.widget.option('extensionsAllow', $('#fileallow').val());
    this.uploadObj.widget.option('extensionsDeny', '');
    $('#filedeny').val('');
  }

  denyFileType(event) {
    this.uploadObj.widget.option('extensionsAllow', '');
    this.uploadObj.widget.option('extensionsDeny', $('#filedeny').val());
    $('#fileallow').val('');
  }
}

export class methods {
    constructor() {
      this.path = '//js.syncfusion.com/demos/ejServices/Content/FileBrowser/';
      this.ajaxAction = '//js.syncfusion.com/demos/ejServices/api/FileExplorer/FileOperations';
      this.width = '100%';
      this.height = '100%';
    }
    hideShowToolbar(event) {
      let args = event.detail;
      let fileobj = this.fileObj.widget;
      fileobj.option('showToolbar', !args.isChecked);
    }
    hideShowFooter(event) {
      let args = event.detail;
      let fileobj = this.fileObj.widget;
      fileobj.option('showFooter', !args.isChecked);
    }
    hideShowTreeView(event) {
      let args = event.detail;
      let fileobj = this.fileObj.widget;
      fileobj.option('showNavigationPane', !args.isChecked);
    }
    hideShowContextMenu(event) {
      let args = event.detail;
      let fileobj = this.fileObj.widget;
      fileobj.option('showContextMenu', !args.isChecked);
    }
}

export class API {
  constructor() {
    this.width = '107px';
  }
  ongetHtmlString() {
    if (this.rte.widget) {
      alert(this.rte.widget.getHtml()); // eslint-disable-line no-alert
    }
  }
  ongetText() {
    if (this.rte.widget) {
      alert(this.rte.widget.getText()); // eslint-disable-line no-alert
    }
  }
  onexec() {
    if (this.rte.widget) {
      this.rte.widget.executeCommand('bold', true);
    }
  }
  oncmdStatus() {
    if (this.rte.widget) {
      let status = this.rte.widget.getCommandStatus('bold');
      alert(status); // eslint-disable-line no-alert
    }
  }
  onDestroyRestore(event) {
    let args = event.detail;
    if (args.isChecked) {
      this.rte.widget.destroy();
      this.rte.widget = null;
    } else {
      $('#rteSample').ejRTE({ width: '100%', minWidth: '150px', isResponsive: true});
      this.rte.widget = $('#rteSample').data('ejRTE');
    }
  }
  onSelectAll() {
    if (!ej.isNullOrUndefined(this.rte.widget)) {
      this.rte.widget.selectAll();
    }
  }
  onSeletcRange() {
    if (!ej.isNullOrUndefined(this.rte.widget)) {
      let range = this.rte.widget.createRange();
      let liTag = this.rte.widget.getDocument().getElementsByTagName('li');
      if (!this.rte.widget._isIE8()) {
        range.setStart(liTag[2], 1);
        range.setEnd(liTag[4], 0);
      } else {
        range = this.rte.widget.getDocument().body.createTextRange();
        range.moveToElementText(liTag[3]);
      }
      this.rte.widget.selectRange(range);
    }
  }
  onPasteContent() {
    if (!ej.isNullOrUndefined(this.rte.widget)) {
      let select = this.rte.widget.getSelectedHtml();
      this.rte.widget.pasteContent("<p style='background-color:yellow;color:skyblue'> " + select + ' </p>');
    }
  }
}

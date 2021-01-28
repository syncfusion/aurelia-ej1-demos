export class ApiTab {
  constructor() {
    this.width = '120px';
  }
  onDisableChange(event) {
    let args = event.detail;
    if (this.tabObj.widget.model) {
      this.tabObj.widget.option({ disabledItemIndex: [parseInt(args.value, 10)] });
      this.enableObj.widget.clearText();
      this.removeObj.widget.clearText();
    }
  }
  onEnableChange(event) {
    let args = event.detail;
    if (this.tabObj.widget.model) {
      this.tabObj.widget.option({ enabledItemIndex: [parseInt(args.value, 10)] });
      this.disableObj.widget.clearText();
      this.removeObj.widget.clearText();
    }
  }
  onRemoveChange(event) {
    let args = event.detail;
    if (this.tabObj.widget.model) {
      this.tabObj.widget.removeItem(parseInt(args.value, 10));
      $(this.removeObj.widget.items[this.removeObj.widget.popupListItems.length -= 1]).remove();
      $(this.disableObj.widget.items[this.disableObj.widget.popupListItems.length -= 1]).remove();
      $(this.enableObj.widget.items[this.enableObj.widget.popupListItems.length -= 1]).remove();
      this.disableObj.widget.clearText();
      this.enableObj.widget.clearText();
    }
  }
  onDestroyRestore(event) {
    let args = event.detail;
    this.enableObj.widget.clearText();
    this.removeObj.widget.clearText();
    this.disableObj.widget.clearText();
    if (args.isChecked) {
      this.tabObj.widget.destroy();
      this.enableObj.widget.disable();
      this.disableObj.widget.disable();
      this.removeObj.widget.disable();
    } else {
      $('#apiTab').ejTab();
      this.tabObj.widget = $('#apiTab').data('ejTab');
      this.enableObj.widget.enable();
      this.disableObj.widget.enable();
      this.removeObj.widget.enable();
    }
  }
}

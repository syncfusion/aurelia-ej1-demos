export class APIToolbar {
  constructor() {
    this.width = '100px';
  }
  onSelectChange(event) {
    this.ddlDeSelectObj.widget.setModel({selectedItemIndex: 0});
    this.toolbarObj.widget.selectItemByID(event.detail.value);
  }
  onDeselectChange(event) {
    this.ddlSelectObj.widget.setModel({selectedItemIndex: 0});
    this.toolbarObj.widget.deselectItemByID(event.detail.value);
  }
  onDisableChange(event) {
    this.ddlEnableObj.widget.setModel({selectedItemIndex: 0});
    this.toolbarObj.widget.disableItemByID(event.detail.value);
  }
  onEnableChange(event) {
    this.ddlDisableObj.widget.setModel({selectedItemIndex: 0});
    this.toolbarObj.widget.enableItemByID(event.detail.value);
  }

  onEnableDisableAll(event) {
    let args = event.detail;
    if (args.isChecked) {
      this.toolbarObj.widget.disable();
    } else {
      this.toolbarObj.widget.enable();
    }
    this.ddlSelectObj.widget.setModel({selectedItemIndex: 0});
    this.ddlDeSelectObj.widget.setModel({selectedItemIndex: 0});
    this.ddlDisableObj.widget.setModel({selectedItemIndex: 0});
    this.ddlEnableObj.widget.setModel({selectedItemIndex: 0});
  }
  onShowHide(event) {
    let args = event.detail;
    if (args.isChecked) {
      this.toolbarObj.widget.hide();
    } else {
      this.toolbarObj.widget.show();
    }
  }
}

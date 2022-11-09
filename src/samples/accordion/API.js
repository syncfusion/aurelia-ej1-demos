export class APIAccordion {
  constructor() {
    this.width = '120px';
  }
  onEnableDisableAll(event) {
    let args = event.detail;
    if (this.acrdnObj.widget) {
      if (args.isChecked) {
        this.acrdnObj.widget.disable();
        this.activeObj.widget.disable();
        this.optDisable.widget.disable();
      } else {
        this.acrdnObj.widget.enable();
        this.activeObj.widget.enable();
        this.optDisable.widget.enable();
      }
    }
  }
  onDestroyRestore(event) {
    let args = event.detail;
    if (args.isChecked) {
      this.acrdnObj.widget.destroy();
      this.acrdnObj.widget = null;
    } else {
      $('#APIAccordion').ejAccordion();
      this.acrdnObj.widget = $('#APIAccordion').data('ejAccordion');
    }
  }
  onActiveChange(event) {
    let args = event.detail;
    if (this.acrdnObj.widget) {
      this.acrdnObj.widget.option({ selectedItemIndex: args.value });
      this.optDisable.widget.clearText();
      this.optEnable.widget.clearText();
    }
  }
  onDisableChange(event) {
    let args = event.detail; let arrIndex = []; let uncheck = [];
    if (args.isChecked) {
      arrIndex.push(parseInt(args.value, 10));
    } else {
      uncheck.push(parseInt(args.value, 10));
    }
    if (this.acrdnObj.widget) {
      this.acrdnObj.widget.disableItems(arrIndex); this.acrdnObj.widget.enableItems(uncheck);
      this.activeObj.widget.clearText();
      this.optEnable.widget.clearText();
    }
  }
  onEnableChange(event) {
    let args = event.detail; let arrayIndex = []; let uncheck = [];
    if (args.isChecked) arrayIndex.push(parseInt(args.value, 10));
    else uncheck.push(parseInt(args.value, 10));
    if (this.acrdnObj.widget) {
      this.acrdnObj.widget.enableItems(arrayIndex);
      this.acrdnObj.widget.disableItems(uncheck);
      this.activeObj.widget.clearText();
      this.optDisable.widget.clearText(); 
    }
  }
  onShowHide(event) {
    let args = event.detail;
    if (this.acrdnObj.widget) {
      if (args.isChecked) {
        this.acrdnObj.widget.show();
      } else {
        this.acrdnObj.widget.hide();
      }
    }
  }
  onHeightAdjust(event) {
    let args = event.detail;
    if (this.acrdnObj.widget) {
      this.acrdnObj.widget.element.find('>.e-content').css('height', '');
      this.acrdnObj.widget.option('heightAdjustMode', args.value);
    }
  }
  onShowHideCloseBtn(event) {
    this.acrdnObj.widget && this.acrdnObj.widget.option('showCloseButton', event.detail.isChecked);
  }
}

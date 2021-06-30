export class APITooltip {
  constructor() {
    this.reloadContent = 'Reload current page';
    this.reloadPosition = {
      target: {
        horizontal: 'center', vertical: 'bottom'
      },
      stem: {
        horizontal: 'left', vertical: 'top'
      }
    };
    this.goContent = 'search';
    this.goPosition = {
      target: {
        horizontal: 'center', vertical: 'bottom'
      },
      stem: {
        horizontal: 'left', vertical: 'top'
      }
    };
    this.backContent = 'Go back one page';
    this.backPosition = {
      target: {
        horizontal: 'center', vertical: 'bottom'
      },
      stem: {
        horizontal: 'left', vertical: 'top'
      }
    };
  }
  onEffectChange(event) {
    let args = event.detail;
    this.tooltipReloadObj.widget.show($('#' + args.value));
    $('#hideButton').ejButton({ text: 'Hide'});
  }
  onEnableDisable(event) {
    let text;
    let args = event.detail;
    if (args.model.text === 'Disable') {
      this.tooltipReloadObj.widget.disable();
      text = 'Enable';
      this.btnHideObj.widget.disable();
      this.ddlObj.widget.disable();
    } else {
      this.tooltipReloadObj.widget.enable();
      text = 'Disable';
      this.btnHideObj.widget.enable();
      this.ddlObj.widget.enable();
    }
    $('#btnEnable').ejButton({ text: text });
  }
  onShowHide(event) {
    let text;
    let args = event.detail;
    let value = this.ddlObj.widget.getSelectedValue();
    if (args.model.text === 'Hide') {
      this.tooltipReloadObj.widget.hide();
      text = 'Show';
      this.btnEnableObj.widget.disable();
    } else {
      this.tooltipReloadObj.widget.show($('#' + value));
      text = 'Hide';
      this.btnEnableObj.widget.enable();
    }
    $('#hideButton').ejButton({ text: text });
  }
}

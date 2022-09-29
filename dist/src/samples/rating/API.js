export class APIRating {
  constructor() {
    this.width = '107px';
    this.ratingValue = 0;
  }
  create() {
    this.ratingObj = $('#apiRating').data('ejRating');
  }
  setRatingValue(event) {
    let args = event.detail;
    if (this.ratingObj.widget.model) {
      this.ratingObj.widget.setValue(args.value);
    }
  }
  getValue(event) {
    if (this.ratingObj.widget.model) {
      let val = this.ratingObj.widget.getValue();
      alert('Current Value : ' + val); // eslint-disable-line no-alert
    }
  }
  reset(event) {
    if (this.ratingObj.widget.model) {
      this.ratingObj.widget.reset();
    }
    this.ddlObj.widget.option('selectedIndex', 0);
  }
  showHideReset(event) {
    let args = event.detail;
    if (this.ratingObj.widget.model) {
      if (args.isChecked) {
        this.ratingObj.widget.option({ allowReset: false });
      } else {
        this.ratingObj.widget.option({ allowReset: true });
      }
    }
  }
  showHideRating(event) {
    let args = event.detail;
    if (this.ratingObj.widget.model) {
      if (args.isChecked) {
        this.ratingObj.widget.hide();
      } else {
        this.ratingObj.widget.show();
      }
    }
  }
  destroyRestore(event) {
    let args = event.detail;
    if (args.isChecked) {
      this.ratingObj.widget.destroy();
      this.stateChange('disable');
    } else {
      $('#apiRating').ejRating();
      this.ratingObj.widget = $('#apiRating').data('ejRating');
      this.ddlObj.widget.option('value', '');
      this.stateChange('enable');
    }
  }
  stateChange(state) {
    $('#ddlRating').ejDropDownList(state);
    $('#btnGetValue').ejButton(state);
    $('#btnReset').ejButton(state);
    $('#chkResetbtn').ejToggleButton(state);
    $('#chkShowHideRating').ejToggleButton(state);
  }
}

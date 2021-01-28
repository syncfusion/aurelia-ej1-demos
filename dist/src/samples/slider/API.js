export class methods {
    constructor() {
      this.status = true;
      this.width = '100%';
    }
    enableButton() {
      this.status = true;
    }
    DisableButton() {
      this.status = false;
    }
    GetValue() {
      let sliderObj = this.sliderObj.widget;
       /*eslint-disable */
      alert('Selected value is : ' + sliderObj.getValue());
       /*eslint-enable */
    }
}

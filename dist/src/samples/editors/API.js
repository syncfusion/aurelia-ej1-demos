/* global $ */
export class API {
    constructor() {
      this.status = true;
      this.numericValue = 35;
      this.percentValue = 5;
      this.currencyValue = 500;
      this.cwidth = '100%';
    }
    onEnable(args) {
      if (args.detail.isChecked) this.status = false;
      else this.status = true;
    }
    onApply(args) {
      let numobject;
      let percentobject;
      let currencyobject;
      let val;
      let minVal;
      let maxVal;
      let decVal;
      numobject = this.numericObj.widget;
      percentobject = this.percentObj.widget;
      currencyobject = this.currencyObj.widget;
      val = parseFloat(this.increment.value);
      minVal = parseFloat(this.minValue.value);
      maxVal = parseFloat(this.maxValue.value);
      decVal = parseFloat(this.decimalValue.value);
      if (!isNaN(val)) {
        numobject.option('incrementStep', val);
        percentobject.option('incrementStep', val);
        currencyobject.option('incrementStep', val);
      }
      if (!isNaN(decVal) && !ej.isNullOrUndefined(decVal)) {
        numobject.option('decimalPlaces', decVal);
        percentobject.option('decimalPlaces', decVal);
        currencyobject.option('decimalPlaces', decVal);
      }
      if ((!isNaN(minVal)) && (!isNaN(maxVal)) && (maxVal < minVal)) {
        this.error.innerHTML = 'Min value exceeds Max value';
      } else {
        if (!isNaN(minVal)) {
          numobject.option('minValue', minVal);
          percentobject.option('minValue', minVal);
          currencyobject.option('minValue', minVal);
          this.error.innerHTML = '';
        }
        if (!isNaN(maxVal)) {
          numobject.option('maxValue', maxVal);
          percentobject.option('maxValue', maxVal);
          currencyobject.option('maxValue', maxVal);
          this.error.innerHTML = '';
        }
      }
    }
}

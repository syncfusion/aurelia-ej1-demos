export class Localization {
    constructor() {
      this.numericValue = 35;
      this.percentValue = 5;
      this.currencyValue = 500;
      this.cwidth = '100%';
      this.target = 'localelist';
      this.localeValue = 'en-US';
      this.watermark = 'Enter value';
	  this.maskFormat = '$99,999.99';
    }
    get updateLocale() {
      return this.localeValue;
    }
    set updateLocale(value) {
      this.localeValue = value;
      if (this.localeValue === 'de-DE'){
		this.watermark = 'Geben Sie Wert';
		this.maskFormat ="99,999.99$"; 
	  }
      if (this.localeValue === 'fr-FR'){
		  this.watermark = 'Entrer la valeur';
		  this.maskFormat ="$99,999.99"; 
	  }
      if (this.localeValue === 'zh-CN'){
		  this.watermark = '输入值';
		  this.maskFormat ="99,999.99$"; 
      }
	  if (this.localeValue === 'en-US'){
		  this.watermark = 'Enter value';
		this.maskFormat ="$99,999.99"; 
	  }
	}
}

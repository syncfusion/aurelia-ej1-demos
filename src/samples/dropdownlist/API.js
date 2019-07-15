export class APIDropDownList {
  booksSection = [
                { category: 'Art' }, { category: 'Architecture' }, { category: 'Biographies' }, { category: 'Business' }, { category: 'ComputerIT' },
                { category: 'Comics' }, { category: 'Cookery' }, { category: 'Environment' }, { category: 'Fiction' },
                { category: 'Health' }, { category: 'Humanities' }, { category: 'Language' }, { category: 'Literature' }, { category: 'Memoirs' },
                { category: 'Management' }, { category: 'Professional' }, { category: 'Reference' }, { category: 'Spirituality' },
                { category: 'Sports' }, { category: 'Sciences' }
  ];

  constructor() {
    this.dataSource = this.booksSection;
    this.fields = {text: 'category', value: 'category'};
    this.width = '107px';
  }
  onActiveIndexChange(event) {
    let args = event.detail;
    this.ddlObj.widget.option({ selectedIndex: parseInt(args.selectedValue, 10) });
    this.ddlValueObj.widget.clearText();
    this.ddlTextObj.widget.clearText();
  }
  onActiveValueChange(event) {
    let args = event.detail;
    this.ddlObj.widget.selectItemByValue(args.selectedValue);
    this.ddlIndexObj.widget.clearText();
    this.ddlTextObj.widget.clearText();
  }
  onActiveTextChange(event) {
    let args = event.detail;
    this.ddlObj.widget.selectItemByText(args.selectedValue);
    this.ddlIndexObj.widget.clearText();
    this.ddlValueObj.widget.clearText();
  }
  onEnableDisable(event) {
    (event.detail.isChecked) ?  this.ddlObj.widget.disable() : this.ddlObj.widget.enable();
  }
  filterChange(event) {
    (event.detail.isChecked) ? this.ddlObj.widget.option({'enableFilterSearch': true}) : this.ddlObj.widget.option({'enableFilterSearch': false});
  }
  casesensitiveChange(event) {
    (event.detail.isChecked) ? this.ddlObj.widget.option({'caseSensitiveSearch': true}) : this.ddlObj.widget.option({'caseSensitiveSearch': false});
  }
  valueText(event) {
    alert('Selected Item is ' + this.ddlObj.widget.getValue()); // eslint-disable-line no-alert
  }
}

export class DateFormat {
    constructor() {
      this.dateValue = '5/18/2018';
      this.dateFormat = 'MM/dd/yyyy';
    }
    get updateFormat() {
      return this.dateFormat;
    }
    set updateFormat(value) {
      this.dateFormat = value;
    }
}

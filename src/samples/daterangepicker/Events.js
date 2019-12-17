export class Events {
   constructor() {
     this.daterangeValue = '5/18/2018-5/28/2018';
   }
   onChange(args) {
     this.logger.log(args.detail.value + ' value was selected');
   }
}

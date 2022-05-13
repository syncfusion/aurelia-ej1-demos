export class Rtl {
  constructor() {
    this.tooltip = { close: 'بند کریں' };
  }
onOpen(args) {
  $('#btnOpen').hide();
  this.dialog.widget.open();
}
 onDialogClose(args) {
   $('#btnOpen').show();
 }
}
export class Icons {
  constructor() {
    this.actionButtons = ['close', 'collapsible', 'maximize', 'minimize', 'pin'];
  }
onOpen(args) {
  $('#btnOpen').hide();
  this.dialog.widget.open();
}
 onDialogClose(args) {
   $('#btnOpen').show();
 }
}

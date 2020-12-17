export class BasicUse {
onOpen(args) {
  $('#btnOpen').hide();
  this.dialog.widget.open();
}
 onDialogClose(args) {
   $('#btnOpen').show();
 }
}

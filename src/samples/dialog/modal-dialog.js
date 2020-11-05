export class ModalDialog {
onOpen(args) {
  $('#btnOpen').hide();
  this.dialog.widget.open();
}
 onDialogClose(args) {
   $('#btnOpen').show();
 }
}

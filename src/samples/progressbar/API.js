export class ApiProgressBar {
  constructor() {
    this.percentage = 75;
    this.height = 18;
    this.width = '107px';
  }

  create() {
    this.progressBar = $('#progressBar').data('ejProgressBar');
    $('.api-progress-bar-txt').html(this.progressBar.getPercentage() + ' %');
  }

  changeState(event) {
    let args = event.detail;
    if (args.isChecked) this.progressObj.widget.disable();
    else this.progressObj.widget.enable();
  }

  onGetPercentage() {
    alert('Progress percentage : ' + this.progressObj.widget.getPercentage()); // eslint-disable-line no-alert
  }
}

export class HeaderOrientationTab {
  constructor() {
    this.width = '120px';
  }

  onTabDirectionChange(event) {
    let args = event.detail;
    this.tabObj.widget.setModel({headerPosition: args.value});
  }
}

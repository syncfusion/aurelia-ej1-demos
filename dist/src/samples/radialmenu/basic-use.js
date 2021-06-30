export class BasicUse {
  constructor() {
    this.listViewSettings = { width: 300, selectedItemIndex: 0, mouseUp: 'headChange' };
    this.width = '100%';
    $(window).resize(function() {
      if (ej.isMobile() && ej.isPortrait()) {
        $('#defaultradialmenu').css({'left': 25 });
      }
    });
  }
  rteChange(args) {

    this.radialmenu.widget.enableItem("Undo");
  }
  radialShow(e) {
    let target;
    let radialRadius;
    let radialDiameter;
    let iframeY;
    let iframeX;
    let xPos;
    let yPos;
    let x;
    let y;
    target = $('#radialtarget1');
    radialRadius = 150;
    radialDiameter = 2 * radialRadius;
    this.radialmenu.widget.option('autoOpen', true);
    iframeY = e.detail.event.clientY;
    iframeX = e.detail.event.clientX;
    xPos = (iframeX > radialRadius ? iframeX - radialRadius : 0);
    yPos = (iframeY > radialRadius ? iframeY - radialRadius : 0);
    x = iframeX > (target.width() - radialRadius) ? (target.width() - radialDiameter) : xPos;
    y = iframeY > (target.height() - radialRadius) ? (target.height() - radialDiameter) : yPos;
    this.radialmenu.widget.option('setPosition', x, y);
    $('iframe').contents().find('body').blur();
  }
  itemsClick(e) {

    if (e.detail.text && e.detail.text.toLowerCase() === 'bold') {
      this.rte.widget.executeCommand('bold');
    }
    if (e.detail.text && e.detail.text.toLowerCase() === 'italic') {
      this.italic(e.detail.text);
    }
    if (e.detail.text && e.detail.text.toLowerCase() === 'undo') {
      this.undo(e.detail.text);
    }
    if (e.detail.text && e.detail.text.toLowerCase() === 'redo') {
      this.redo(e.detail.text);
    }
  }
  italic(e) {
    this.rte.widget.executeCommand('italic');
   
  }
  undo(e) {
    this.rte.widget.executeCommand('undo');
    this.radialmenu.widget.disableItem('Undo');
    this.radialmenu.widget.enableItem('Redo');
  }
  redo(e) {
    this.rte.widget.executeCommand('redo');
    this.radialmenu.widget.disableItem('Redo');
    this.radialmenu.widget.enableItem('Undo');
  }


}

export class Events {
    nodeExpand(args) {
      this.logger.log(args.detail.value + ' node is expanded');
    }
    nodeCollapse(args) {
      this.logger.log(args.detail.value + ' node is collapsed');
    }
    beforeExpand(args) {
      this.logger.log('BeforeExpand event is fired for ' + args.detail.value + ' node.');
    }
    beforeCollapse(args) {
      this.logger.log('BeforeCollapse event is fired for ' + args.detail.value + ' node.');
    }
    nodeSelect(args) {
      this.logger.log(args.detail.value + ' node is selected.');
    }
    nodeCheck(args) {
      this.logger.log(args.detail.value + ' node is checked.');
    }
    nodeUncheck(args) {
      this.logger.log(args.detail.value + ' node is unchecked.');
    }
    nodeDragStart(args) {
      this.logger.log(args.detail.targetElementData.text + ' node dragging has been started.');
    }
    nodeDrag(args) {
      this.logger.log(args.detail.draggedElementData.text + ' node is being dragged.');
    }
    nodeDragStop(args) {
      this.logger.log(args.detail.draggedElementData.text + ' node dragging has been stopped.');
    }
    nodeDropped(args) {
      let targetText = (args.detail.targetElementData.text !== '') ? args.detail.targetElementData.text : 'Treeview';
      this.logger.log(args.detail.droppedElementData.text + ' node has been dropped to ' + targetText + '.');
    }
    beforeEdit(args) {
      this.logger.log('BeforeEdit event is fired for ' + args.detail.currentElement.text() + ' node.');
    }
    nodeEdit(args) {
      this.logger.log(args.detail.oldText + 'Node has been edited to ' + args.detail.newText);
    }
}

export class ContextMenu {
    constructor() {
      this.selectedNode = '';
      this.childMenu = '';
      this.tabIndex = 1;
    }
    onClose(args) {
      args.detail.events.preventDefault();
    }
    onBeforeOpen(args) {
      this.treeviewObj = this.treeView.widget;
      this.contextMenuObj = this.treeviewMenu.widget;
      this.childMenu = this.contextMenuObj.element.children();
      if (args.detail.target.classList.contains('e-node-hover')) {
        this.childMenu.removeClass('e-disable-item');
        this.childMenu[3].classList.add('e-disable-item');
      } else if (args.detail.target.classList.contains('e-node-disable')) {
        this.childMenu.addClass('e-disable-item');
        this.childMenu[3].classList.remove('e-disable-item');
      }
      if (!args.detail.target.classList.contains('e-text')) args.detail.cancel = true;
      else {
        this.selectedNode = args.detail.target.closest('.e-item');
        if (!args.detail.target.classList.contains('e-node-disable')) this.treeviewObj.selectNode(this.selectedNode);
      }
    }
    onMenuClick(args) {
      this.treeviewObj = this.treeView.widget;
      this.contextMenuObj = this.treeviewMenu.widget;
      if (args.detail.events.text === 'Add New Item') {
        this.treeviewObj.addNode('Item' + this.tabIndex, this.selectedNode);
        this.tabIndex++;
      } else if (args.detail.events.text === 'Remove Item') this.treeviewObj.removeNode(this.selectedNode);
      else if (args.detail.events.text === 'Disable Item') this.treeviewObj.disableNode(this.selectedNode);
      else if (args.detail.events.text === 'Enable Item') this.treeviewObj.enableNode(this.selectedNode);
    }
}

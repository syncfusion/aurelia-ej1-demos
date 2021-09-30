export class API {
    constructor() {
      this.tabIndex = 0;
    }
    expandAll(args) {
      let treeview = this.treeView.widget;
      if (treeview.model) {
        if (args.detail.isChecked) treeview.expandAll();
        else treeview.collapseAll();
      }
    }
    checkAll(args) {
      let treeview = this.treeView.widget;
      if (treeview.model) {
        if (args.detail.isChecked) treeview.checkAll();
        else treeview.unCheckAll();
      }
    }
    nodeExpand() {
      let treeview = this.treeView.widget;
      if (treeview.model) treeview.expandNode(treeview.getSelectedNode());
    }
    nodeCollpase() {
      let treeview = this.treeView.widget;
      if (treeview.model) treeview.collapseNode(treeview.getSelectedNode());
    }
    nodeChecked() {
      let treeview = this.treeView.widget;
      if (treeview.model) treeview.checkNode(treeview.getSelectedNode());
    }
    nodeUnchecked() {
      let treeview = this.treeView.widget;
      if (treeview.model) treeview.uncheckNode(treeview.getSelectedNode());
    }
    nodeDisable(args) {
      let treeview = this.treeView.widget;
      if (treeview.model) treeview.disableNode(treeview.getSelectedNode());
    }
    nodeEnable(args) {
      let treeview = this.treeView.widget;
      if (treeview.model) {
        let node = this.treeView.element.querySelectorAll('.e-node-disable');
        treeview.enableNode(node[0]);
      }
    }
    addNewNode(args) {
      let treeview = this.treeView.widget;
      if (treeview.model) {
        treeview.addNode('Item' + this.tabIndex, treeview.getSelectedNode());
        this.tabIndex++;
      }
    }
    removeNode() {
      let treeview = this.treeView.widget;
      if (treeview.model) treeview.removeNode(treeview.getSelectedNode());
    }
}

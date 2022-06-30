export class Default {
    constructor() {
      this.dictionarySettings = {
        dictionaryUrl: '//js.syncfusion.com/demos/ejservices/api/SpellCheck/CheckWords',
        customDictionaryUrl: '//js.syncfusion.com/demos/ejservices/api/SpellCheck/AddToDictionary'
      };
      this.ContextMenu = {enable: false};
    }
    showDialog() {
      this.spellcheck.showInDialog();
    }
}

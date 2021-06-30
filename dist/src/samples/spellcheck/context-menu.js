export class ContextMenu {
    constructor() {
      this.dictionarySettings = {
        dictionaryUrl: '//js.syncfusion.com/demos/ejservices/api/SpellCheck/CheckWords',
        customDictionaryUrl: '//js.syncfusion.com/demos/ejservices/api/SpellCheck/AddToDictionary'
      };
    }
    showInContextMenu() {
      this.spellcheck.validate();
    }
}

export class Resize {
  constructor() {
    let fontfamily = ['Segoe UI',  'Arial',  'Times New Roman',  'Tahoma',  'Helvetica'];
    let fontsize = ['1pt',  '2pt',  '3pt',  '4pt',  '5pt'];
    this.ExpandPinSettings = { toolTip: 'Collapse the Ribbon'};
    this.CollapsePinSettings = { toolTip: 'Pin the Ribbon'};
    this.ApplicationTab = { type: ej.Ribbon.ApplicationTabType.Menu, menuItemID: 'ribbonmenu', menuSettings: { openOnClick: !1}};
    this.Tabs = [{ id: 'home', text: 'HOME', groups: [{ text: 'Clipboard', alignType: ej.Ribbon.AlignType.Columns, enableGroupExpander: !0, groupExpanderSettings: { toolTip: 'Clipboard'}, content: [{ groups: [{ id: 'paste', text: 'paste', toolTip: 'Paste', buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon e-ribbonpaste'}}], defaults: { type: ej.Ribbon.Type.Button, isBig: !0, width: 50, height: 70}}, { groups: [{ id: 'cut', text: 'Cut', toolTip: 'Cut', buttonSettings: { contentType: ej.ContentType.TextAndImage, prefixIcon: 'e-icon e-ribbon e-ribboncut'}}, { id: 'copy', text: 'Copy', toolTip: 'Copy', buttonSettings: { contentType: ej.ContentType.TextAndImage, prefixIcon: 'e-icon e-ribbon e-ribboncopy'}}, { id: 'clear', text: 'Clear', toolTip: 'Clear All', buttonSettings: { contentType: ej.ContentType.TextAndImage, prefixIcon: 'e-icon e-ribbon clearAll'}}], defaults: { type: ej.Ribbon.Type.Button, width: 60, isBig: !1}}]}, { text: 'Font', alignType: 'rows', content: [{ groups: [{ id: 'fontfamily', toolTip: 'Font', dropdownSettings: { dataSource: fontfamily, text: 'Segoe UI', width: 150}}, { id: 'fontsize', toolTip: 'FontSize', dropdownSettings: { dataSource: fontsize, text: '1pt', width: 65}}], defaults: { type: ej.Ribbon.Type.DropDownList, height: 28, isBig: !1}}, { groups: [{ id: 'bold', text: 'bold', toolTip: 'Bold', buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon bold'}}, { id: 'italic', text: 'italic', toolTip: 'Italic', buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon e-ribbonitalic'}}, { id: 'underline', text: 'underline', toolTip: 'Underline', buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon e-ribbonunderline'}}, { id: 'strikethrough', text: 'strikethrough', toolTip: 'Strikethrough', buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon strikethrough'}}, { id: 'superscript', text: 'superscript', toolTip: 'Superscript', buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon e-superscripticon'}}, { id: 'subscript', text: 'subscript', toolTip: 'Subscript', enableSeparator: !0, buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon e-subscripticon'}}, { id: 'uppercase', text: 'Upper Case', toolTip: 'Upper Case', buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon e-uppercase'}}, { id: 'lowercase', text: 'Lower Case', toolTip: 'Lower Case', buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon e-lowercase'}}], defaults: { type: ej.Ribbon.Type.Button, isBig: !1}}]}, { text: 'New', alignType: ej.Ribbon.AlignType.Rows, content: [{ groups: [{ id: 'new', text: 'New', toolTip: 'New', buttonSettings: { contentType: ej.ContentType.ImageOnly, imagePosition: ej.ImagePosition.ImageTop, prefixIcon: 'e-icon e-ribbon e-new'}}], defaults: { type: ej.Ribbon.Type.Button, width: 60, height: 70}}]}, { text: 'Actions', alignType: ej.Ribbon.AlignType.Rows, content: [{ groups: [{ id: 'undo', text: 'Undo', toolTip: 'Undo', buttonSettings: { contentType: ej.ContentType.TextAndImage, imagePosition: ej.ImagePosition.ImageTop, prefixIcon: 'e-icon e-ribbon e-undo'}}, { id: 'redo', text: 'Redo', toolTip: 'Redo', buttonSettings: { contentType: ej.ContentType.TextAndImage, imagePosition: ej.ImagePosition.ImageTop, prefixIcon: 'e-icon e-ribbon e-redo'}}], defaults: { type: 'button', width: 40, height: 70}}]}]}, { id: 'layout', text: 'LAYOUT', groups: [{ text: 'Alignment', alignType: ej.Ribbon.AlignType.Rows, content: [{ groups: [{ id: 'bullet', text: 'Bullet Format', toolTip: 'Bullets', buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon e-bullet'}}, { id: 'number', text: 'Number Format', toolTip: 'Numbering', enableSeparator: !0, buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon e-numbericon'}}, { id: 'textindent', text: 'Text Indent', toolTip: 'Text Indent', buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon e-indent'}}, { id: 'textoudent', text: 'Text Outdent', toolTip: 'Text Outdent', enableSeparator: !0, buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon e-outdent'}}, { id: 'sortascending', text: 'Sort', toolTip: 'Sort', enableSeparator: !0, buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon e-sort'}}, { id: 'border', text: 'Border', toolTip: 'Border', buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon e-border'}}], defaults: { type: ej.Ribbon.Type.Button, isBig: !1}}, { groups: [{ id: 'alignleft', text: 'JustifyLeft', toolTip: 'Align Left', buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon alignleft'}}, { id: 'aligncenter', text: 'JustifyCenter', toolTip: 'Align Center', buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon aligncenter'}}, { id: 'alignright', text: 'JustifyRight', toolTip: 'Align Right', buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon alignright'}}, { id: 'justify', text: 'JustifyFull', toolTip: 'Justify', enableSeparator: !0, buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon justify'}}, { id: 'fontcolor', text: 'Font Color', toolTip: 'Font Color', buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon e-fontcolor'}}, { id: 'fillcolor', text: 'Fill Color', toolTip: 'Fill Color', buttonSettings: { contentType: ej.ContentType.ImageOnly, prefixIcon: 'e-icon e-ribbon e-fillcolor'}}], defaults: { type: ej.Ribbon.Type.Button, isBig: !1}}]}, { text: 'Print Layout', alignType: ej.Ribbon.AlignType.Rows, content: [{ groups: [{ id: 'printlayout', text: 'Print Layout', toolTip: 'Print Layout', buttonSettings: { contentType: ej.ContentType.TextAndImage, imagePosition: ej.ImagePosition.ImageTop, prefixIcon: 'e-icon e-ribbon e-printlayout'}}], defaults: { type: ej.Ribbon.Type.Button, width: 80, height: 70}}]}]}];
  }
}

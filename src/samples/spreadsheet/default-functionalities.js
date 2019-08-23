import '../scripts/xljsondata.js';
export class DefaultFunctionalities {
  constructor() {
    this.scroll = { height: '100%', width: '100%', isResponsive: 'true' };
    this.range = [{ dataSource: window.defaultData, startCell: 'A1' }];
    this.import = { importMapper: '//js.syncfusion.com/demos/ejservices/api/Spreadsheet/Import'};
    this.export = { excelUrl: '//js.syncfusion.com/demos/ejservices/api/Spreadsheet/ExcelExport',
        csvUrl: '//js.syncfusion.com/demos/ejservices/api/Spreadsheet/CsvExport',
        pdfUrl: '//js.syncfusion.com/demos/ejservices/api/Spreadsheet/PdfExport'};
	
  }
  loadcomplete(event) {
	setTimeout(() => {
    let xlObj = this.spreadsheetObj.widget;
    let xlFormat = xlObj.XLFormat;
    if (!xlObj.isImport) {
      xlObj.setWidthToColumns([140, 128, 105, 100, 100, 110, 120, 120, 100]);
      xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'A1:H1');
      xlFormat.format({ 'type': 'currency' }, 'E2:H11');
      xlObj.XLRibbon.updateRibbonIcons();
    }
	 }, 10)
  }
 
  openfailure(args) {
   setTimeout(() => {
    let xlObj = this.spreadsheetObj.widget;
	xlObj.alert(args.detail.statusText);
	 },10)
  }
  
}

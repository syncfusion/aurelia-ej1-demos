import '../scripts/xljsondata.js';
export class Pivot {
  constructor() {
    this.scroll = { height: '100%', width: '100%', isResponsive: 'true' };
    this.range = [{ dataSource: window.pivotData, startCell: 'A1'}];
    this.import = { importMapper: '//js.syncfusion.com/demos/ejservices/api/Spreadsheet/Import'};
    this.export = { excelUrl: '//js.syncfusion.com/demos/ejservices/api/Spreadsheet/ExcelExport',
        csvUrl: '//js.syncfusion.com/demos/ejservices/api/Spreadsheet/CsvExport',
        pdfUrl: '//js.syncfusion.com/demos/ejservices/api/Spreadsheet/PdfExport'};
  }
  loadcomplete(args) {
	setTimeout(() => {
    let xlObj = this.spreadsheetObj.widget;  
    if (!xlObj.isImport) {
      let settings = {
        rows: [{ fieldName: 'Country'}, { fieldName: 'State'}],
        columns: [{ fieldName: 'Product'}],
        values: [{ fieldName: 'Amount' }, { fieldName: 'Quantity'}],
        filters: [{ fieldName: 'Date' }]
      };
      xlObj.XLPivot.createPivotTable('Sheet1!$A$1:$F$25', null, null, settings);
    }
	 }, 10)
  }
 
}

export class Default {
    constructor() {
      this.size = 1;
      this.totalPages = 20;
      this.totalRecordsCount = 20;
      this.pageCount = 7;
    }
    onClick(args) {
      if (!ej.isNullOrUndefined(args.detail.event)) {
       
        $('.dtlabel').html('Selected Page : ' + args.detail.currentPage);
      }
    }
}

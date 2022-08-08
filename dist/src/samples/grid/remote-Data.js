export class RemoteData {
    constructor() {
      this.OrdersList =  ej.DataManager({ // eslint-disable-line new-cap
          url: '//js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/',
          crossDomain: true
      });
    }
}


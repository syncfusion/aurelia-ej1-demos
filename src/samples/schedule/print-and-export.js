export class PrintAndExport {
    onCreate(args) {
      $('#Schedule1').find('tr.e-scheduleheader td').first().append($('#tabImp'));
      $('#tabImp').css({ display: 'block' });

      $('#Schedule1').find('tr.e-scheduleheader td').first().append($('#reminder'));
      $('#reminder').css({ display: 'block' });
    }
    onComplete(args) {
      let obj = $('#Schedule1').data('ejSchedule');
      obj.option('appointmentSettings.dataSource', ej.parseJSON(args.detail.responseText));
    }
    onExportClick(e) {
      let obj = $('#Schedule1').data('ejSchedule');
      obj.exportSchedule('//js.syncfusion.com/demos/ejServices/api/Schedule/IcsExport', null, null);
      e.detail.cancel = true;
    }

    onChange(args) {
      if (args.detail.text === 'Vertical') {
        $('#Schedule1').ejSchedule({ orientation: 'vertical' });
      }else if (args.detail.text === 'Horizontal') {
        $('#Schedule1').ejSchedule({ orientation: 'horizontal' });
      }
    }
    onPDFExportClick(e) {
      let obj = $('#Schedule1').data('ejSchedule');
      obj.exportSchedule('//js.syncfusion.com/demos/ejServices/api/Schedule/PdfExport', null, null);
      e.detail.cancel = true;
    }
    constructor() {
      this.orientation = ['Vertical', 'Horizontal'];
      this.buttonText = { browse: 'Import' };
      this.dialogAction = { closeOnComplete: true };
      let dataManager = ej.DataManager({ //eslint-disable-line new-cap
        url: '//js.syncfusion.com/demos/ejServices/api/Schedule/LoadData',
        crossDomain: true
      });
      this.AppointmentList = {
        dataSource: dataManager,
        id: 'Id',
        subject: 'Subject',
        startTime: 'StartTime',
        endTime: 'EndTime',
        description: 'Description',
        allDay: 'AllDay',
        recurrence: 'Recurrence',
        recurrenceRule: 'RecurrenceRule'
      };
    }
    attached() {
      $('.reminder-icon').bind('click', function() {
        let obj = $('#Schedule1').data('ejSchedule');
        obj.print();
      });
    }
}

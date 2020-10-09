export class CustomAppointmentWindow {
    /* eslint-disable dot-notation */
    /* eslint-disable eqeqeq */

    onCreate(event) {
      let proxy = this.schedule;
      proxy._customAppointmentWindow = this.dialogObj.widget.element;;
      proxy._customAppointmentWindow.ejDialog({ width: (proxy._mediaQuery) ? '100%' : 600, target: '#' + proxy._id, enableModal: true });
      proxy._customAppointmentWindow.parents().find('.e-scheduledialog').find('.e-titlebar').addClass('e-dialogheader');
      proxy._customAppointmentWindow.find('#StartTime,#EndTime').ejDateTimePicker({ width: '150px' });
      proxy._customAppointmentWindow.find('.e-appButton,.e-recurButton').ejButton({ width: '85px' });
      proxy._customAppointmentWindow.find('.AllDay,.Recurrence').ejCheckBox({ change: 'onCheckboxChange' });
      proxy._customAppointmentWindow.find('#customRecurrenceEditor').ejRecurrenceEditor({ frequencies: ['daily', 'weekly', 'monthly', 'yearly'], selectedRecurrenceType: 1 });
    }

    onClick(event) {
      let proxy = this.schedule.widget;
      let args = event.detail;
      proxy._customAllDay = args.target.currentTarget.classList.contains('e-alldaycells');
    }

    onAppointmentWindowOpen(event) {
      let proxy = this.schedule;
      let args = event.detail;
      args.cancel = true;
      proxy._customRecRule = null;
      if (!ej.isNullOrUndefined(args.appointment)) {
        proxy._customAppointmentWindow.find('#Id').val(args.appointment.Id);
        proxy._customAppointmentWindow.find('#Subject').val(args.appointment.Subject);
        proxy._customAppointmentWindow.find('#Description').val(args.appointment.Description);
        proxy._customAppointmentWindow.find('#StartTime').ejDateTimePicker({ value: new Date(args.appointment.StartTime) });
        proxy._customAppointmentWindow.find('#EndTime').ejDateTimePicker({ value: new Date(args.appointment.EndTime) });
        proxy._customAppointmentWindow.find('#AllDay').ejCheckBox({ checked: args.appointment.AllDay });
        proxy._customAppointmentWindow.find('#Recurrence').ejCheckBox({ checked: args.appointment.Recurrence });
        if (args.appointment.Recurrence) {
          if (proxy._currentAction == ej.Schedule.Actions.EditSeries) {
            proxy._customRecRule = args.appointment.RecurrenceRule.split(';EXDATE')[0];
          } else if (proxy._currentAction == ej.Schedule.Actions.EditOccurrence) {
            proxy._customAppointmentWindow.find('#Recurrence').ejCheckBox('disable');
            proxy._customRecRule = args.appointment.RecurrenceRule;
          }
        }
      } else {
        proxy._customAppointmentWindow.find('#StartTime').ejDateTimePicker({ value: args.startTime });
        proxy._customAppointmentWindow.find('#EndTime').ejDateTimePicker({ value: args.endTime });
        if (!ej.isNullOrUndefined(args.target)) {
          if (args.target.currentTarget.classList.contains('e-alldaycells') || this.schedule.widget.currentView() == 'month' || this.schedule.widget._customAllDay) {
            proxy._customAppointmentWindow.find('#AllDay').ejCheckBox({ checked: true });
            proxy._customAppointmentWindow.find('#StartTime,#EndTime').ejDateTimePicker({ enabled: false });
          }
        }
      }
      proxy._customAppointmentWindow.find('#appointmentWindow').css({ display: 'block' });
      proxy._customAppointmentWindow.find('#recurrenceWindow').css({ display: 'none' });
      this.dialogObj.widget.open();
      let subject = proxy._customAppointmentWindow.find('#Subject');
      subject.focusin(function () { subject.removeClass('validationError'); }).focusout(function () { if (subject.val() == '') subject.addClass('validationError'); });
    }

    onButtonClick(event) {
      let proxy = this.schedule;
      let args = event.detail;
      if (args.target.classList.contains('e-appButton')) {
        if (args.target.classList.contains('e-appOk')) {
          if (proxy._customAppointmentWindow.find('#Subject').val().trim() == '') return false;
          let appObj = {};
          let formelement = proxy._customAppointmentWindow.find('#customAppointmentWindow').get(0);
          for (let index = 0; index < formelement.length; index++) {
            let columnName = formelement[index].name;
            let element = formelement.elements[index];
            if (!ej.isNullOrUndefined(columnName) && columnName != '' && ej.isNullOrUndefined(appObj[columnName])) {
              let value = formelement[index].value;
              if (columnName == 'Id' && value != '') {
                value = parseInt(value, 10);
              }
              if (element.classList.contains('e-datetimepicker')) {
                value = new Date(value);
              }
              if (element.classList.contains('e-checkbox')) {
                value = formelement[index].checked;
              }
              if (columnName.indexOf('_hidden') == -1) {
                appObj[columnName] = value;
              }
            }
          }
          if (appObj.Recurrence) {
            appObj[proxy._appointmentSettings['recurrenceRule']] = proxy._customRecRule;
            let recurEdit = proxy._appointmentAddWindow.find('.e-recurrenceeditor').data('ejRecurrenceEditor');
            recurEdit._recRule = proxy._customRecRule;
          }
          this.schedule.widget.saveAppointment(appObj);
        }
        this.dialogObj.widget.close();
      } else {
        proxy._customAppointmentWindow.find('#appointmentWindow,#recurrenceWindow').toggle();
        if (args.target.classList.contains('e-recurOk')) {
          let recurObj = proxy._customAppointmentWindow.find('#customRecurrenceEditor').ejRecurrenceEditor('instance');
          recurObj.closeRecurPublic();
          proxy._customRecRule = recurObj._recRule;
        } else {
          proxy._customAppointmentWindow.find('#Recurrence').ejCheckBox({ checked: false });
        }
      }
    }

    onCheckboxChange(event) {
      let proxy = this.schedule;
      let args = event.detail;
      if (args.model.id == 'AllDay') {
        if (args.isChecked) {
          let strDate = new Date(proxy._customAppointmentWindow.find('#StartTime').ejDateTimePicker('model.value').setHours(0, 0, 0));
          let endDate = new Date(proxy._customAppointmentWindow.find('#EndTime').ejDateTimePicker('model.value').setHours(23, 59, 59));
          proxy._customAppointmentWindow.find('#StartTime').ejDateTimePicker({ value: new Date(strDate), enabled: false });
          proxy._customAppointmentWindow.find('#EndTime').ejDateTimePicker({ value: new Date(endDate), enabled: false });
        } else {
          proxy._customAppointmentWindow.find('#StartTime').ejDateTimePicker({ enabled: true });
          proxy._customAppointmentWindow.find('#EndTime').ejDateTimePicker({ enabled: true });
        }
      } else {
        if (args.isChecked) proxy._customAppointmentWindow.find('#appointmentWindow,#recurrenceWindow').toggle();
      }
    }

    clearFields() {
      let proxy = this.schedule;
      proxy._customAppointmentWindow.find('#Id').val('');
      proxy._customAppointmentWindow.find('#Subject').val('');
      proxy._customAppointmentWindow.find('#Description').val('');
      proxy._customAppointmentWindow.find('#AllDay,#Recurrence').ejCheckBox({ checked: false });
      proxy._customAppointmentWindow.find('#AllDay,#Recurrence').ejCheckBox('enable');
      proxy._customAppointmentWindow.find('#StartTime,#EndTime').ejDateTimePicker({ enabled: true });
    }

    constructor() {
      this.recurrenceCheck = false;
      this.alldayCheck = false;
      this.Frequencies = ['daily', 'weekly', 'monthly', 'yearly'];
      this.AppointmentList = {
        dataSource: [{
          Id: 400,
          Subject: 'Brazil - Croatia',
          StartTime: '2017/6/2 09:00:00',
          EndTime: '2017/6/2 10:30:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 401,
          Subject: 'Mexico - Cameroon',
          StartTime: '2017/6/3 13:00:00',
          EndTime: '2017/6/3 14:30:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 402,
          Subject: 'Brazil - Mexico',
          StartTime: '2017/6/7 06:00:00',
          EndTime: '2017/6/7 07:30:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 403,
          Subject: 'Cameroon - Croatia',
          StartTime: '2017/6/5 04:00:00',
          EndTime: '2017/6/5 05:30:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 404,
          Subject: 'Cameroon - Brazil',
          StartTime: '2017/6/13 17:00:00',
          EndTime: '2017/6/13 18:30:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 405,
          Subject: 'Croatia - Mexico',
          StartTime: '2017/6/12 17:00:00',
          EndTime: '2017/6/12 18:30:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 406,
          Subject: 'Spain - Netherlands',
          StartTime: '2017/6/3 16:00:00',
          EndTime: '2017/6/6 17:30:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 407,
          Subject: 'Chile - Australia',
          StartTime: '2017/6/3 18:00:00',
          EndTime: '2017/6/3 19:30:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 408,
          Subject: 'Spain - Chile',
          StartTime: '2017/6/4 05:00:00',
          EndTime: '2017/6/4 06:30:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 409,
          Subject: 'Australia - Netherlands',
          StartTime: '2017/6/8 08:30:00',
          EndTime: '2017/6/8 09:30:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 410,
          Subject: 'Australia - Chile',
          StartTime: '2017/6/13 13:00:00',
          EndTime: '2017/6/13 14:30:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 411,
          Subject: 'Netherlands - Chile',
          StartTime: '2017/6/12 13:00:00',
          EndTime: '2017/6/12 14:30:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 412,
          Subject: 'America - Brazil',
          StartTime: '2017/6/9 05:00:00',
          EndTime: '2017/6/9 06:30:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 413,
          Subject: 'Russia - London',
          StartTime: '2017/6/6 07:00:00',
          EndTime: '2017/6/6 09:30:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 414,
          Subject: 'France - Rome',
          StartTime: '2017/6/10 07:00:00',
          EndTime: '2017/6/10 08:30:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }],
        id: 'Id',
        subject: 'Subject',
        startTime: 'StartTime',
        endTime: 'EndTime',
        startTimeZone: 'StartTimeZone',
        endTimeZone: 'EndTimeZone',
        description: 'Description',
        allDay: 'AllDay',
        recurrence: 'Recurrence',
        recurrenceRule: 'RecurrenceRule'
      };
    }
    attached() { }
}

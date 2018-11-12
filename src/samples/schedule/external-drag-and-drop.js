export class ExternalDragAndDrop {
    /* eslint-disable camelcase */
    /* eslint-disable no-nested-ternary */
    onDragStart(e) {
      if (e.detail.targetElementData.parentId === '') return false;
    }
    onDropped(event) {
      let e = event.detail;
      if ($(e.target).parents('.e-schedule').length !== 0) {
        let scheduleObj = $('#Schedule1').data('ejSchedule');
        let result = scheduleObj.getSlotByElement($(e.target));
        // set value to custom appointmnt window fields
        $("#subject").val(e.droppedElementData.text);
        $("#customdescription").val(e.droppedElementData.text);
        $("#StartTime").ejDateTimePicker({ value: new Date(result.startTime) });
        $("#EndTime").ejDateTimePicker({ value: new Date(result.endTime) });
        $("#resource").val(result.resources.text);
        $("#ownerId").val(result.resources.id);
        $("#customWindow").ejDialog("open");
      }
    }
    save() {
      let obj = {};
      let formelement = $('#customWindow').find('#custom').get(0);
      for (let index = 0; index < formelement.length; index++) {
        let columnName = formelement[index].name;
        let value;
        if (columnName !== undefined) {
          if (columnName === 'Subject') value = formelement[index].value;
          if (columnName === 'Desctiption') value = formelement[index].value;
          if (columnName === 'StartTime') value = new Date(formelement[index].value);
          if (columnName === 'EndTime') value = new Date(formelement[index].value);
          if (columnName === 'ownerId') value = parseInt(formelement[index].value).toString(); // eslint-disable-line radix
          if (columnName !== 'Resource') obj[columnName] = value;
        }
      }
      $('#customWindow').ejDialog('close');
      let object = $('#Schedule1').data('ejSchedule');
      object.saveAppointment(obj);
    }

    cancel() {
      $('#customWindow').ejDialog('close');
    }


    constructor() {
      this.Group = {
        resources: ['Owners']
      };
      this.Resources = [
        {
          field: 'ownerId',
          title: 'Owner',
          name: 'Owners',
          allowMultiple: true,
          resourceSettings: {
            dataSource: [
                        { text: 'Nancy', id: '1', groupId: '1', color: '#f8a398' },
                        { text: 'Steven', id: '3', groupId: '2', color: '#56ca85' },
                        { text: 'Michael', id: '5', groupId: '1', color: '#51a0ed' },
                        { text: 'Milan', id: '13', groupId: '3', color: '#99ff99' },
                        { text: 'Paul', id: '15', groupId: '3', color: '#cc99ff' }
            ],
            text: 'text',
            id: 'id',
            groupId: 'groupId',
            color: 'color'
          }
        }
      ];
      this.views = ['Day', 'Week', 'WorkWeek', 'Month'];
      this.AppointmentList = {
        dataSource: [
          {
            Id: 100,
            Subject: 'Bering Sea Gold',
            StartTime: '2017/6/2 09:00:00',
            EndTime: '2017/6/2 10:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=DAILY;INTERVAL=2;COUNT=10',
            categoryId: 1, roomId: '2', ownerId: '3'
          }, {
            Id: 101,
            Subject: 'Hello Sea Gold',
            StartTime: '2017/6/2 04:00:00',
            EndTime: '2017/6/2 05:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            categoryId: 1, roomId: '2', ownerId: '3'
          }, {
            Id: 105,
            Subject: 'Daily Planet',
            StartTime: '2017/6/5 05:00:00',
            EndTime: '2017/6/5 06:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=DAILY;INTERVAL=2;COUNT=10',
            categoryId: 1, roomId: '1', ownerId: '1'
          }, {
            Id: 106,
            Subject: 'Alaska: The Last Frontier',
            StartTime: '2017/6/3 05:00:00',
            EndTime: '2017/6/3 06:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=DAILY;INTERVAL=2;COUNT=10',
            categoryId: 1, roomId: '1', ownerId: '5'
          }, {
            Id: 109,
            Subject: 'Sports Day',
            StartTime: '2017/5/30 06:30:00',
            EndTime: '2017/5/30 07:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            categoryId: 1, roomId: '2', ownerId: '3'
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
        recurrenceRule: 'RecurrenceRule',
        resourceFields: 'ownerId'
      };
    }
    attached() {
      $('#StartTime').ejDateTimePicker({ width: '150px' });
      $('#EndTime').ejDateTimePicker({ width: '150px' });
      $('#customWindow').ejDialog({
        width: 600,
        height: 'auto',
        position: { X: 200, Y: 100 },
        showOnInit: false,
        enableModal: true,
        title: 'Create Appointment',
        enableResize: false,
        allowKeyboardNavigation: false,
        close: 'clearFields'
      });
    }
}

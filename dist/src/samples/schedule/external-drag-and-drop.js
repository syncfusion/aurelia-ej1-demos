export class ExternalDragAndDrop {
    /* eslint-disable camelcase */
    /* eslint-disable no-nested-ternary */
    onDragStart(e) {
      if (e.detail.targetElementData.parentId === '') return false;
    }
    onDropped(event) {
      let e = event.detail;
      if (e.target.parents('.e-schedule').length !== 0) {
        let scheduleObj = this.schedule.widget;
        let result = scheduleObj.getSlotByElement(e.target);
        // set value to custom appointmnt window fields
        this.dialogObj.element.querySelector('#subject').value = e.droppedElementData.text;
        this.dialogObj.element.querySelector('#customdescription').value = e.droppedElementData.text;
        this.startTime.widget.setModel({ value: new Date(result.startTime) });
        this.endTime.widget.setModel({ value: new Date(result.endTime) });
        this.dialogObj.element.querySelector('#resource').value = result.resources.text;
        this.dialogObj.element.querySelector('#ownerId').value = result.resources.id;
        this.dialogObj.widget.open();
      }
    }
    save() {
      let obj = {};
      let formelement = this.dialogObj.widget.element.find('#custom').get(0);
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
      this.dialogObj.widget.close();
      let object = this.schedule.widget;
      object.saveAppointment(obj);
    }

    cancel() {
      this.dialogObj.widget.close();
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
    }
}

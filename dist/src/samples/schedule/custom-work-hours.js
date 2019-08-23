export class CustomResourceDays {
    /* eslint-disable radix */
    onChange() {
      let weekDays = ej.cultureObject.calendar.days.names;
      let nancydays = this.nancyDDL.widget;
      let michaeldays = this.michaelDDL.widget;
      let stevendays = this.stevenDDL.widget

      let nancy = nancydays.model.selectedItems.sort();
      let michael = michaeldays.model.selectedItems.sort();
      let steven = stevendays.model.selectedItems.sort();

      let nancyWorkweek = []; let michaelWorkweek = []; let stevenWorkweek = [];
      for (let i = 0; i < nancy.length; i++) { nancyWorkweek.push(weekDays[nancy[i]].toLowerCase()); }
      for (let i = 0; i < michael.length; i++) { michaelWorkweek.push(weekDays[michael[i]].toLowerCase()); }
      for (let i = 0; i < steven.length; i++) { stevenWorkweek.push(weekDays[steven[i]].toLowerCase()); }
    
      if (nancyWorkweek.length === 0) nancyWorkweek = this.schedule.widget.model.workWeek;
      if (michaelWorkweek.length === 0) michaelWorkweek = this.schedule.widget.model.workWeek;
      if (stevenWorkweek.length === 0) stevenWorkweek = this.schedule.widget.model.workWeek;

      let nancyStart = parseInt(this.nancyStart.widget.model.value);
      let nancyEnd = parseInt(this.nancyEnd.widget.model.value);
      let michaelStart = parseInt(this.michaeleStart.widget.model.value);
      let michaelEnd = parseInt(this.michaeleEnd.widget.model.value);
      let stevenStart = parseInt(this.stevenStart.widget.model.value);
      let stevenEnd = parseInt(this.stevenEnd.widget.model.value);

      this.schedule.widget.setModel({
        resources: [{
          field: 'roomId',
          title: 'Room',
          name: 'Rooms', allowMultiple: false,
          resourceSettings: {
            dataSource: [
                        { text: 'ROOM 1', id: 1, groupId: 1, color: '#cb6bb2' },
                        { text: 'ROOM 2', id: 2, groupId: 1, color: '#56ca85' }
            ],
            text: 'text', id: 'id', groupId: 'groupId', color: 'color'
          }
        }, {
          field: 'ownerId',
          title: 'Owner',
          name: 'Owners', allowMultiple: true,
          resourceSettings: {
            dataSource: [
                            { text: 'Nancy', id: 1, groupId: 1, color: '#ffaa00', on: nancyStart, off: nancyEnd, customDays: nancyWorkweek },
                            { text: 'Steven', id: 3, groupId: 2, color: '#f8a398', on: stevenStart, off: stevenEnd, customDays: stevenWorkweek },
                            { text: 'Michael', id: 5, groupId: 1, color: '#7499e1', on: michaelStart, off: michaelEnd, customDays: michaelWorkweek }
            ],
            text: 'text', id: 'id', groupId: 'groupId', color: 'color', start: 'on', end: 'off', workWeek: 'customDays'
          }
        }]
      });
    }

    constructor() {
      this.WorkWeekData = [
                { week: 'Sunday' }, { week: 'Monday' }, { week: 'Tuesday' }, { week: 'Wednesday' },
                 { week: 'Thursday' }, { week: 'Friday' }, { week: 'Saturday' }
      ];
      this.dropFields = { text: 'week' };
      this.nancySelectedItems = [1, 3, 5];
      this.michaelSelectedItems = [0, 2, 4, 6];
      this.stevenSelectedItems = [2, 4];
      this.WorkWeek = ['Sunday', 'Monday', 'Tuesday', 'Friday', 'Saturday'];

      this.Group = {
        resources: ['Rooms', 'Owners']
      };
      this.Resources = [
        {
          field: 'roomId',
          title: 'Room',
          name: 'Rooms', allowMultiple: false,
          resourceSettings: {
            dataSource: [
                        { text: 'ROOM 1', id: 1, groupId: 1, color: '#cb6bb2' },
                        { text: 'ROOM 2', id: 2, groupId: 1, color: '#56ca85'}
            ],
            text: 'text', id: 'id', groupId: 'groupId', color: 'color'
          }
        }, {
          field: 'ownerId',
          title: 'Owner',
          name: 'Owners', allowMultiple: true,
          resourceSettings: {
            dataSource: [
                        { text: 'Nancy', id: 1, groupId: 1, color: '#ffaa00', on: 10, off: 18, customDays: ['monday', 'wednesday', 'friday'] },
                        { text: 'Steven', id: 3, groupId: 2, color: '#f8a398', on: 6, off: 10, customDays: ['tuesday', 'thursday'] },
                        { text: 'Michael', id: 5, groupId: 1, color: '#7499e1', on: 11, off: 15, customDays: ['sunday', 'tuesday', 'thursday', 'saturday'] }
            ],
            text: 'text', id: 'id', groupId: 'groupId', color: 'color', start: 'on', end: 'off', workWeek: 'customDays'
          }
        }
      ];
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
            categoryId: 1, roomId: 2, ownerId: 3
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
            categoryId: 1, roomId: 2, ownerId: 3
          }, {
            Id: 105,
            Subject: 'Daily Planet',
            StartTime: '2017/6/5 11:00:00',
            EndTime: '2017/6/5 12:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=DAILY;INTERVAL=2;COUNT=10',
            categoryId: 1, roomId: 1, ownerId: 1
          }, {
            Id: 106,
            Subject: 'Alaska: The Last Frontier',
            StartTime: '2017/6/4 14:00:00',
            EndTime: '2017/6/4 16:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=10',
            categoryId: 1, roomId: 1, ownerId: 5
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
            categoryId: 1, roomId: 2, ownerId: 3
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
        resourceFields: 'roomId,ownerId'
      };
    }
}

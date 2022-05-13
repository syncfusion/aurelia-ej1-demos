export class Template {
    timeScale(args) {
      if (args.detail.isChecked) { this.schedule.widget.setModel({ timeScale: {enable: false} }); this.allDay.widget.setModel({ enabled: false }); }
      else this.schedule.widget.setModel({ timeScale: {enable: true} }); this.allDay.widget.setModel({ enabled: true });
    }
    allDayTemplate(args) {
      if (args.detail.isChecked) { this.schedule.widget.setModel({ allDayCellsTemplateId: '#allDayTemplate' }); }
      else this.schedule.widget.setModel({ allDayCellsTemplateId: null });
    }
    dateHeaderTemplate(args) {
      if (args.detail.isChecked) { this.schedule.widget.setModel({ dateHeaderTemplateId: '#dateTemplate' }); }
      else this.schedule.widget.setModel({ dateHeaderTemplateId: null });
    }
    workCellsTemplate(args) {
      if (args.detail.isChecked) { this.schedule.widget.setModel({ workCellsTemplateId: '#workTemplate' }); }
      else this.schedule.widget.setModel({ workCellsTemplateId: null });
    }

    constructor() {
      this.timeCheck = false;
      this.allDayCheck = false;
      this.dateHeaderCheck = false;
      this.workCellCheck = true;
      this.Views = ['Week', 'Month'];
      this.Group = {
        resources: ['Rooms', 'Owners']
      };
      this.Resources = [
        {
          field: 'roomId',
          title: 'Room',
          name: 'Rooms',
          allowMultiple: false,
          resourceSettings: {
            dataSource: [
                            { text: 'Star Hotel', id: '1', groupId: '1', color: '#cb6bb2' }
            ],
            text: 'text',
            id: 'id',
            groupId: 'groupId',
            color: 'color'
          }
        }, {
          field: 'ownerId',
          title: 'Owner',
          name: 'Owners',
          allowMultiple: true,
          resourceSettings: {
            dataSource: [
                          { text: 'Party Hall-A', id: '1', groupId: '1', color: '#ffaa00' },
                          { text: 'Party Hall-B', id: '3', groupId: '1', color: '#f8a398' }
            ],
            text: 'text',
            id: 'id',
            groupId: 'groupId',
            color: 'color'
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
            RecurrenceRule: 'FREQ=WEEKLY;COUNT=10;INTERVAL=1;BYDAY=WE',
            categoryId: 1, roomId: '2', ownerId: '3'
          }, {
            Id: 101,
            Subject: 'Hello Sea Gold',
            StartTime: '2017/6/3 04:00:00',
            EndTime: '2017/6/3 05:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            categoryId: 1, roomId: '2', ownerId: '3'
          }, {
            Id: 105,
            Subject: 'Daily Planet',
            StartTime: '2017/6/7 05:00:00',
            EndTime: '2017/6/7 06:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=WEEKLY;COUNT=10;INTERVAL=1;BYDAY=MO,TH',
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
            StartTime: '2017/5/31 06:30:00',
            EndTime: '2017/5/31 07:30:00',
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
        StartTimeZone: 'StartTimeZone',
        EndTimeZone: 'EndTimeZone',
        description: 'Description',
        allDay: 'AllDay',
        recurrence: 'Recurrence',
        recurrenceRule: 'RecurrenceRule',
        resourceFields: 'roomId,ownerId'
      };
    }
    attached() {
      function _getImages(date) {
        switch (new Date(date).getDay()) {
        case 0:
          return "<img src='images/Schedule/cake.png'/>";
        case 1:
          return "<img src='images/Schedule/basketball.png'/>";
        case 2:
          return "<img src='images/Schedule/rugby.png'/>";
        case 3:
          return "<img src='images/Schedule/guitar.png'/>";
        case 4:
          return "<img src='images/Schedule/music.png'/>";
        case 5:
          return "<img src='images/Schedule/doctor.png'/>";
        case 6:
          return "<img src='images/Schedule/beach.png'/>";
        default:
          return null;
        }
      }
      $.views.helpers({ format: _getImages });

      function _dateFormat(date) {
        let dFormat = ej.globalize.format(new Date(date), 'dd/MM');
        return dFormat;
      }
      $.views.helpers({ dTemplate: _dateFormat });
    }
}

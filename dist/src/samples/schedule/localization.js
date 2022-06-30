export class Localization {
  onChange(event) {
    this.schedule.widget.setModel({ locale: event.detail.value });
  }
  constructor() {
    this.AppointmentList = {
      dataSource: [
        {
          Id: 1000,
          Subject: "Men's Prelim. Round SVK - SLO",
          StartTime: '2017/6/4 10:00:00',
          EndTime: '2017/6/4 11:30:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 1001,
          Subject: "Women's Play-offs Quarterfinals",
          StartTime: '2017/6/5 04:30:00',
          EndTime: '2017/6/5 06:00:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 1002,
          Subject: "Women's Prelim. Round JPN - GER",
          StartTime: '2017/6/6 07:00:00',
          EndTime: '2017/6/6 08:30:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 1003,
          Subject: "Men's Prelim. Round FIN - AUT",
          StartTime: '2017/6/7 09:30:00',
          EndTime: '2017/6/7 10:35:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 1004,
          Subject: "Women's Preim. Round SUI -FIN",
          StartTime: '2017/6/8 06:00:00',
          EndTime: '2017/6/8 07:30:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 1005,
          Subject: "Men's Prelim Round RUS - SVK",
          StartTime: '2017/6/9 05:00:00',
          EndTime: '2017/6/9 06:15:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 1006,
          Subject: "Women's Classifications RUS - JPN",
          StartTime: '2017/6/10 09:00:00',
          EndTime: '2017/6/10 11:00:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 1007,
          Subject: "Men's Play-offs Semifinals CAN - SUI",
          StartTime: '2017/6/4 16:30:00',
          EndTime: '2017/6/4 18:00:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 1008,
          Subject: "Women's Play-offs Semifinals USA - SWE",
          StartTime: '2017/6/4 21:00:00',
          EndTime: '2017/6/4 22:00:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }, {
          Id: 1009,
          Subject: 'Finals SUI - SWE',
          StartTime: '2017/6/5 16:00:00',
          EndTime: '2017/6/5 18:00:00',
          StartTimeZone: 'UTC +05:30',
          EndTimeZone: 'UTC +05:30',
          Description: '',
          AllDay: false,
          Recurrence: false
        }],
      id: 'Id',
      subject: 'Subject',
      StartTime: 'StartTime',
      EndTime: 'EndTime',
      startTimeZone: 'StartTimeZone',
      endTimeZone: 'EndTimeZone',
      Description: 'Description',
      allDay: 'AllDay',
      recurrence: 'Recurrence',
      recurrenceRule: 'RecurrenceRule'
    };
    this.LocalizationList = ['en-US', 'fr-FR'];
  }
  attached() {
    ej.Schedule.Locale['fr-FR'] = {
      ReminderWindowTitle: 'Fenêtre de rappel',
      CreateAppointmentTitle: 'créer un rendez-',
      RecurrenceEditTitle: 'Modifier répétition nomination',
      RecurrenceEditMessage: 'Comment voulez-vous changer le cas dans la série?',
      RecurrenceEditOnly: 'Seulement cette nomination',
      RecurrenceEditSeries: 'La série entière',
      PreviousAppointment: 'Nomination précédente',
      NextAppointment: 'prochain rendez-vous',
      AppointmentSubject: 'sujet',
      StartTime: 'Heure de début',
      EndTime: 'Heure de fin',
      AllDay: 'toute la journée',
      Today: "aujourd'hui",
      Recurrence: 'répétition',
      Done: 'Terminé',
      Cancel: 'annuler',
      Ok: 'Ok',
      RepeatBy: 'Répétez par',
      RepeatEvery: 'répéter chaque',
      RepeatOn: "répéter l'opération sur",
      StartsOn: 'démarre sur',
      Ends: 'extrémités',
      Summary: 'résumé',
      Daily: 'quotidien',
      Weekly: 'hebdomadaire',
      Monthly: 'mensuel',
      Yearly: 'annuel',
      Every: 'tous',
      EveryWeekDay: 'chaque jour de la semaine',
      Never: 'jamais',
      After: 'après',
      Occurence: 'apparition',
      On: 'sur',
      Edit: 'Modifier',
      RecurrenceDay: 'Jour (s)',
      RecurrenceWeek: 'Semaine (s)',
      RecurrenceMonth: 'Mois (s)',
      RecurrenceYear: 'Année (s)',
      The: 'la',
      OfEvery: 'de chaque',
      First: 'première',
      Second: 'deuxième',
      Third: 'troisième',
      Fourth: 'quatrième',
      Last: 'dernier',
      WeekDay: 'jour de la semaine',
      WeekEndDay: 'Jour de week-end',
      Subject: 'sujet',
      Categorize: 'Catégories',
      DueIn: 'En raison',
      DismissAll: 'rejeter tout',
      Dismiss: 'rejeter',
      OpenItem: "Ouvrir l'élément",
      Snooze: 'répétition',
      Day: 'jour',
      Week: 'semaine',
      WorkWeek: 'Semaine de travail',
      Month: 'mois',
      AddEvent: 'Ajouter événement',
      CustomView: 'Vue personnalisée',
      Agenda: 'ordre du jour',
      Detailed: 'détaillé',
      EventBeginsin: 'Nomination commence dans',
      Editevent: 'Modifier nomination',
      Editseries: 'Modifier série',
      Times: 'fois',
      Until: "jusqu'à",
      Eventwas: 'rendez-vous était',
      Hours: 'hrs',
      Minutes: 'minutes',
      Overdue: 'en retard',
      Days: 'jour (s)',
      Event: 'Sujet',
      Select: 'sélectionner',
      Previous: 'prev',
      Next: 'suivant',
      Close: 'proche',
      Delete: 'effacer',
      Date: 'date',
      Showin: 'montrer en',
      Gotodate: 'Aller à la date',
      Resources: 'RESSOURCES',
      RecurrenceDeleteTitle: 'Supprimer répétition rendez-',
      Location: 'emplacement',
      Priority: 'priorité',
      RecurrenceAlert: 'alerte',
      WrongPattern: 'Le modèle de récurrence est pas valable',
      CreateError: 'La durée de la nomination doit être plus courte que la façon dont elle se produit fréquemment. Raccourcir la durée ou changer le modèle de récurrence dans la boîte de dialogue Récurrence de rendez.',
      DragResizeError: 'Impossible de replanifier une occurrence du rendez-vous récurrent. si elle saute sur une occurrence ultérieure du même rendez-vous.',
      StartEndError: "L'heure de fin doit être supérieur à l'heure de début",
      MouseOverDeleteTitle: 'supprimer un rendez-',
      DeleteConfirmation: 'Êtes-vous sûr de vouloir supprimer ce rendez-vous?',
      Time: 'Temps',
      StartTimeZone: 'Commencez TimeZone',
      EndTimeZone: 'TimeZone Fin',
      NoTitle: 'Pas de titre',
      OverFlowAppCount: 'plus rendez-vous (s)',
      AppointmentIndicator: 'Cliquez pour plus de rendez-vous',
      EmptyResultText: 'Pas de suggestions',
      BlockIntervalAlertTitle: 'Alerte',
      BlockIntervalError: "L'intervalle de temps choisi a été bloqué et est indisponible pour la sélection.",
      RecurrenceDateValidation: "Certains mois ont moins de dates sélectionnées. Pour ces mois, l'occurrence tombera à la dernière date du mois",
      SeriesChangeAlert: 'Les modifications apportées aux instances spécifiques de cette série seront annulées et ces rendez-vous seront identiques à la série'
    };
  }
}

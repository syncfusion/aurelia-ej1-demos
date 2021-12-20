export class EventsComboBox {
	
  datasource = [
        { id: 'level1', game: 'American Football' }, { id: 'level2', game: 'Badminton' },
        { id: 'level3', game: 'Basketball' }, { id: 'level4', game: 'Cricket' },
        { id: 'level5', game: 'Football' }, { id: 'level6', game: 'Golf' },
        { id: 'level7', game: 'Hockey' }, { id: 'level8', game: 'Rugby' },
        { id: 'level9', game: 'Snooker' }, { id: 'level10', game: 'Tennis' }
    ];
  
  constructor() {
	this.fields = { text: 'game', value: 'id' };
	this.dataSource = this.datasource;
	this.placeholder = 'Select your skill';
  }

    onCreate(args) {
        this.logger.log("ComboBox has been <span class='eventTitle'>created</span>.");
    }
    onFocus(args) {
        this.logger.log("ComboBox  is in <span class='eventTitle'>focus</span>. ");
    }
    onBlur(args) {
        this.logger.log("ComboBox  is out of <span class='eventTitle'>focus</span>.");
    }
    onSelect(args) {
        this.logger.log("The value '" + args.detail.text + "' has been <span class='eventTitle'>selected</span>.");
    }
    onChange(args) {
        this.logger.log("The value has been <span class='eventTitle'>changed</span> to '" + args.detail.value + "'.");
    }
    onOpen(args) {
        this.logger.log("Popup List has been <span class='eventTitle'>opened</span>.");
    }
    onClose(args) {
        this.logger.log("Popup List has been <span class='eventTitle'>closed</span>.");
    }
 
}

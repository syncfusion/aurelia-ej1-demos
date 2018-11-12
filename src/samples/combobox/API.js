export class APICombobox {
	list= [
		{ id: 'level1', game: 'American Football' }, { id: 'level2', game: 'Badminton' },
		{ id: 'level3', game: 'Basketball' }, { id: 'level4', game: 'Cricket' },
		{ id: 'level5', game: 'Football' }, { id: 'level6', game: 'Golf' },
		{ id: 'level7', game: 'Hockey' }, { id: 'level8', game: 'Rugby' },
		{ id: 'level9', game: 'Snooker' }, { id: 'level10', game: 'Tennis' }
	];

	constructor() {
	  this.dataSource = this.list;
	  this.fields = {text: 'game', value: 'id'};

	}
 
	onAutofill(event) {
		let listObj = $('#bookSelect').ejComboBox("instance");
		if (listObj.model) {
		  if (event.detail.isChecked)
			  listObj.option({ autofill: true});
		  else
			  listObj.option({ autofill: false });
		}
	}

	onSorting(event) {
		let listObj = $('#bookSelect').ejComboBox("instance");
		if (listObj.model) {
			if (event.detail.isChecked){
			  listObj.option({sortOrder: 'Descending'});
			}
			else
			{
			  listObj.option({sortOrder: 'Ascending'});
			}
		}
	}
}
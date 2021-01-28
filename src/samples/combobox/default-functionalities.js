export class DefaultComboBox {
   datasource = [
        { id: 'level1', game: 'American Football' }, { id: 'level2', game: 'Badminton' },
        { id: 'level3', game: 'Basketball' }, { id: 'level4', game: 'Cricket' },
        { id: 'level5', game: 'Football' }, { id: 'level6', game: 'Golf' },
        { id: 'level7', game: 'Hockey' }, { id: 'level8', game: 'Rugby' },
        { id: 'level9', game: 'Snooker' }, { id: 'level10', game: 'Tennis' }
    ];

    constructor() {
        this.dataSource = this.datasource;
        this.fields= { text: 'game', value: 'id'};
    }
}
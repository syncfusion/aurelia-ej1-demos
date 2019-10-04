export class IconComboBox {
    datasource = [
       { class: 'mailtools categorize', name: 'Categorize and Move' }, { class: 'mailtools done', name: 'Done' },
        { class: 'mailtools flag', name: 'Flag & Move' }, { class: 'mailtools forward', name: 'Forward' },
        { class: 'mailtools movetofolder', name: 'Move to Folder' }, { class: 'mailtools newmail', name: 'New E-mail' },
        { class: 'mailtools meeting', name: 'New Meeting' }, { class: 'mailtools reply', name: 'Reply & Delete' }
    ];

    constructor() {
        this.dataSource = this.datasource;
        this.fields= { text: 'name', value: 'name', iconCss: 'class'};
    }
}

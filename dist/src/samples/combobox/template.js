export class TemplateCombobox {
	empList = [
	   { text: 'Erik Linden', eimg: '3', desig: 'Representative', country: 'England' }, { text: 'John Linden', eimg: '6', desig: 'Representative', country: 'Norway' },
	   { text: 'Louis', eimg: '7', desig: 'Representative', country: 'Australia' }, { text: 'Lawrence', eimg: '5', desig: 'Representative', country: 'India' }
	];

	constructor() {
		this.dataSource = this.empList;
		this.fields= { text: 'text'};
		this.headerTemplate= '<div class="head">  Photo  <span style="padding-left:20px"> Contact Info </span></div>';
		this.itemTemplate= '<div><img class="eimg" src="images/Employees/${eimg}.png" alt="employee"/>' +
			'<div class="ename"> ${text} </div><div class="temp"> ${country} </div></div>';
		this.footerTemplate= '<div class="Foot"> Total Items Count: 4 </div>';
	}
}
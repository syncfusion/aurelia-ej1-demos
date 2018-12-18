export class CascadingComboBox {
    country = [
			{ countryName: 'United States', countryId: '1' },
			{ countryName: 'Australia', countryId: '2' }
    ];
     state = [
        { stateName: 'New York', countryId: '1', stateId: '101' },
        { stateName: 'Virginia', countryId: '1', stateId: '102' },
        { stateName: 'Washington', countryId: '1', stateId: '103' },
        { stateName: 'Queensland', countryId: '2', stateId: '104' },
        { stateName: 'Tasmania', countryId: '2', stateId: '105' },
        { stateName: 'Victoria', countryId: '2', stateId: '106' }
    ];
     cities = [
        { cityName: 'Albany', stateId: '101', cityId: 201 },
        { cityName: 'Beacon', stateId: '101', cityId: 202 },
        { cityName: 'Lockport', stateId: '101', cityId: 203 },
        { cityName: 'Alexandria', stateId: '102', cityId: 204 },
        { cityName: 'Hampton', stateId: '102', cityId: 205 },
        { cityName: 'Emporia', stateId: '102', cityId: 206 },
        { cityName: 'Aberdeen', stateId: '103', cityId: 207 },
        { cityName: 'Colville', stateId: '103', cityId: 208 },
        { cityName: 'Pasco', stateId: '103', cityId: 209 },
        { cityName: 'Townsville', stateId: '104', cityId: 210 },
        { cityName: 'Brisbane', stateId: '104', cityId: 211 },
        { cityName: 'Cairns', stateId: '104', cityId: 212 },
        { cityName: 'Hobart', stateId: '105', cityId: 213 },
        { cityName: 'Launceston', stateId: '105', cityId: 214 },
        { cityName: 'Devonport', stateId: '105', cityId: 215 },
        { cityName: 'Melbourne', stateId: '106', cityId: 216 },
        { cityName: 'Healesville', stateId: '106', cityId: 217 },
        { cityName: 'Geelong', stateId: '106', cityId: 218 }
    ];

	constructor() {
		this.countryList = this.country;
		this.stateList = this.state;
		this.cityList = this.cities;
		this.countryField= { value: 'countryId', text: 'countryName' };
		this.stateField= { value: 'stateId', text: 'stateName'};
		this.cityField= { text: 'cityName',value: 'cityName'};
	}
	onCountryChange(e){
		var listObj1 = $('#stateList').ejComboBox("instance");
		listObj1.option({ enabled: true, query: new ej.Query().where('countryId', 'equal', e.detail.model.value) ,value:null});
	}   
}
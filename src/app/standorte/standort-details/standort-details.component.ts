import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocationGenInfo, PersonelInfo } from 'src/app/model/location-gen-info';
import { LocationService } from 'src/app/shared/location.service';

@Component({
	selector: 'app-standort-details',
	templateUrl: './standort-details.component.html',
	styleUrls: ['./standort-details.component.scss']
})
export class StandortDetailsComponent implements OnInit {
	branchInfo = new LocationGenInfo();
	branch: PersonelInfo[] = [];
	nationalDisposition: PersonelInfo[] = [];
	internationalDisposition: PersonelInfo[] = [];
	management: PersonelInfo[] = [];
	humanResources: PersonelInfo[] = [];
	accounting: PersonelInfo[] = [];

	displayedColumns: string[] = ['department', 'name', 'phone', 'email'];


	constructor(
		@Inject(MAT_DIALOG_DATA) public data: { location: string },
		private locationService: LocationService) {

	}

	ngOnInit(): void {
		this.locationService.getLocationDetails(this.data.location).subscribe(data => {
			let dataList = data.split('new line,');
			this.branch = dataList.filter(x => x.includes('Niederlassungsleitung')).map(x => this.getPersonalInfo( x, 'Niederlassungsleitung'));
			this.nationalDisposition = dataList.filter(x => x.includes('Disposition National')).map(x => this.getPersonalInfo( x, 'Disposition National'));
			this.internationalDisposition = dataList.filter(x => x.includes('Disposition International')).map(x => this.getPersonalInfo( x, 'Disposition International'));
			this.management = dataList.filter(x => x.includes('Verwaltung')).map(x => this.getPersonalInfo( x, 'Verwaltung'));
			this.humanResources = dataList.filter(x => x.includes('Personalabteilung')).map(x => this.getPersonalInfo( x, 'Personalabteilung'));
			this.accounting = dataList.filter(x => x.includes('Zentralbuchhaltung')).map(x => this.getPersonalInfo( x, 'Zentralbuchhaltung'));
		}); 
	}

	getPersonalInfo(info: string, section: string) {
		const person = info.replace(`${section},`,'').split(',');
		return {
			department: person[0],
			name: person[1],
			phone: person[2],
			email: person[1].replace('Hr. ','').replace('Fr. ','').replace(' ','.').toLowerCase() + '@neufra.eu',
			hotline: person[3]
		}
	}
}

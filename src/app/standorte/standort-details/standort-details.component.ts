import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BranchInfo, PersonelInfo } from 'src/app/model/data.model';
import { LocationService } from 'src/app/shared/location.service';

@Component({
	selector: 'app-standort-details',
	templateUrl: './standort-details.component.html',
	styleUrls: ['./standort-details.component.scss']
})
export class StandortDetailsComponent implements OnInit {
	branch: BranchInfo[] = [];
	nationalDisposition: PersonelInfo[] = [];
	internationalDisposition: PersonelInfo[] = [];
	management: PersonelInfo[] = [];
	humanResources: PersonelInfo[] = [];
	accounting: PersonelInfo[] = [];

	constructor(
				@Inject(MAT_DIALOG_DATA) public data: { location: string },
				private locationService: LocationService
				) {}

	ngOnInit(): void {
		this.locationService.getLocationDetails(this.data.location).subscribe(data => {
			const stringList = data.split('new line,');
			stringList.shift();
			this.branch = stringList.filter(x => x.includes('Niederlassungsleitung')).map(x => this.getBranchInfo(x));

			const dataList = stringList.filter(x => !x.includes('Niederlassungsleitung')).map(x => x.split(','));
			const departments = new Set(dataList.map(x => x[1]));
			const sortedList: any[] = [];
			departments.forEach(x => {
				sortedList.push({ department: x, section: '', name: [], email: [], phone: [], hotline: [] })
			});

			dataList.forEach(x => {
				const member = sortedList.find(m => m.department === x[1]);
				member.section = x[0];
				member.name.push(x[2]);
				member.email.push(x[2].replace('Hr. ', '').replace('Fr. ', '').replace(' ', '.').toLowerCase() + '@neufra.eu');
				member.phone.push(x[3]);
			})

			this.nationalDisposition = sortedList.filter(x => x.section === 'Disposition National');
			this.internationalDisposition = sortedList.filter(x => x.section === 'Disposition International');
			this.management = sortedList.filter(x => x.section === 'Verwaltung');
			this.humanResources = sortedList.filter(x => x.section === 'Personalabteilung');
			this.accounting = sortedList.filter(x => x.section === 'Zentralbuchhaltung');
		});
	}

	getBranchInfo(info: string) {
		const branch = info.replace(`Niederlassungsleitung,`, '').split(',');
		return {
			address: branch[0].split('/')[0].trim(),
			city: branch[0].split('/')[1],
			branchLeader: branch[1],
			email: branch[1].replace('Hr. ', '').replace('Fr. ', '').replace(' ', '.').toLowerCase() + '@neufra.eu',
			phone: branch[2],
			fax: branch[3]
		}
	}
}

import { Component, Inject, isDevMode, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BranchInfo, PersonelInfo } from 'src/app/model/data.model';
import { CsvService } from 'src/app/shared/csv.service';

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
	executiveManagement: PersonelInfo[] = [];
	humanResources: PersonelInfo[] = [];
	accounting: PersonelInfo[] = [];
	branchPhonePrefix: string | undefined;
	centralAccounting: PersonelInfo[] = [];
	urlPrefix = isDevMode() ? '../../../' : './';


	constructor(
		@Inject(MAT_DIALOG_DATA) public data: { location: string },
		private csvService: CsvService
	) { }

	ngOnInit(): void {
		this.csvService.getLocationDetails(this.data.location).subscribe(data => {
			const stringList = data.split('new line,');
			stringList.shift();
			this.branch = stringList.filter(x => x.includes('Niederlassungsleitung')).map(x => this.getBranchInfo(x));
			this.branchPhonePrefix = this.branch[0].phone?.slice(0, -1);

			const dataList = stringList.filter(x => !x.includes('Niederlassungsleitung')).map(x => x.split(','));
			const departments = new Set(dataList.map(x => x[1]));
			const sortedList: any[] = [];
			departments.forEach(x => {
				sortedList.push({ department: x, section: '', name: [], email: [], phone: [], hotline: [], phoneSuffix: [] })
			});

			dataList.forEach(x => {
				const member = sortedList.find(m => m.department === x[1]);
				member.section = x[0];
				member.name.push(x[2]);
				member.email.push(x[1] !== 'Geschäftsleitung' ? this.getEmail(x[2]) : '');
				member.phoneSuffix.push(x[3]);
				member.phone.push(this.formatNumber((this.branchPhonePrefix + x[3])));
			})

			this.nationalDisposition = sortedList.filter(x => x.section === 'Disposition National');
			this.internationalDisposition = sortedList.filter(x => x.section === 'Disposition International');
			this.management = sortedList.filter(x => x.section === 'Verwaltung');
			this.executiveManagement = sortedList.filter(x => x.section === 'Geschäftsleitung');
			this.humanResources = sortedList.filter(x => x.section === 'Personalabteilung');
			this.accounting = sortedList.filter(x => x.section === 'Buchhaltung');
			this.centralAccounting = sortedList.filter(x => x.section === 'Zentralbuchhaltung');
		});
	}

	getBranchInfo(info: string) {
		const branch = info.replace(`Niederlassungsleitung,`, '').split(',');
		return {
			address: branch[0].split('/')[0].trim(),
			city: branch[0].split('/')[1],
			branchLeader: branch[1],
			email: this.getEmail(branch[1]),
			phone: branch[2],
			fax: branch[3]
		}
	}

	getEmail(input: string) {
		const name = input.replace('Hr. ', '')
			.replace('Fr. ', '')
			.toLowerCase()
			.replace('ö', 'oe')
			.replace('ü', 'ue')
			.replace('ä', 'ae')
			.replace(' ', '.');
		return (name + '@neufra.eu');
	}

	formatNumber(numberStr: string) {
		const number = numberStr.split(' ').join('').split('-').join('');
		return number.replace(/(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/g, "$1 $2 $3 - $4 $5 - ");
	}
}

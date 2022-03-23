import { Component, isDevMode, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StandortDetailsComponent } from './standort-details/standort-details.component';

@Component({
	selector: 'app-standorte',
	templateUrl: './standorte.component.html',
	styleUrls: ['./standorte.component.scss']
})
export class StandorteComponent implements OnInit {
	urlPrefix = isDevMode() ? '../../' : './';

	constructor( private matDialog: MatDialog) {
		
	}

	ngOnInit(): void {

	}
	
	showLocationDetails(location: any) {
		this.matDialog.open(StandortDetailsComponent);
	}
}

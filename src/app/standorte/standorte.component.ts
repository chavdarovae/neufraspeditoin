import { Component, isDevMode, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { CsvService } from '../shared/csv.service';
import { ScriptService } from '../shared/script.service';
import { StandortDetailsComponent } from './standort-details/standort-details.component';
declare let locations: any;
@Component({
	selector: 'app-standorte',
	templateUrl: './standorte.component.html',
	styleUrls: ['./standorte.component.scss']
})
export class StandorteComponent implements OnInit {
	urlPrefix = isDevMode() ? '../../' : './';

	constructor(
		private matDialog: MatDialog,
		private renderer: Renderer2,
		private scriptService: ScriptService,
		private csvService: CsvService,
		private translate: TranslateService
	) { }

	ngOnInit(): void {
		this.csvService.getLocationList().subscribe(data => {
			const locationsList = data.split('\r\n');
			locationsList.shift();
			locationsList.forEach((x, index)=> {
				locations.push({
					name: this.translate.instant('locations.branch.' + x.split(',')[0]),
					x: + x.split(',')[1],
					y: + x.split(',')[2],
					id: index
				})
			});
			const inputMapObj = this.scriptService.loadJsScript(this.renderer, (this.urlPrefix + 'assets/image-map-pro/location-list.js'));
			inputMapObj.onload = () => {
				this.scriptService.loadJsScript(this.renderer, (this.urlPrefix + 'assets/image-map-pro/map.js'));
			}
		});
	}

	showLocationDetails(location: any) {
		this.matDialog.open(StandortDetailsComponent, {
			data: { location: location },
			panelClass: 'dialog'
		});
	}
}

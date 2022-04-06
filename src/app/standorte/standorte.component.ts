import { Component, isDevMode, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { CsvService } from '../shared/csv.service';
import { ScriptService } from '../shared/script.service';
import { StandortDetailsComponent } from './standort-details/standort-details.component';
declare let locations: any;
declare let inputData: any;
declare let inputCode: any;
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
	) {
		translate.onLangChange.subscribe((event: LangChangeEvent) => {
			this.loadMap();
        });
	}

	ngOnInit(): void {
		this.loadMap();
	}

	loadMap() {
		this.csvService.getLocationList().subscribe(data => {
			const locationsList = data.split('\r\n');
			locationsList.shift();
			locations = [];
			inputCode = JSON.parse(JSON.stringify(inputData));
			locationsList.forEach((x, index)=> {
				const translatedName = this.translate.instant('locations.branch.' + x.split(',')[0]);
				locations.push({
					name: translatedName,
					x: + x.split(',')[1],
					y: + x.split(',')[2],
					abr: x.split(',')[3].trim(),
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

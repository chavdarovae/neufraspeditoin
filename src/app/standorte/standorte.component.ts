import { Component, ElementRef, isDevMode, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { CsvService } from '../shared/csv.service';
import { ScriptService } from '../shared/script.service';
import { WindowScrollingService } from '../shared/window-scrolling.service';
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
	@ViewChild('mapContainer') mapContainer: ElementRef;
	isMapActive = false;

	constructor(
		private matDialog: MatDialog,
		private renderer: Renderer2,
		private scriptService: ScriptService,
		private csvService: CsvService,
		private translate: TranslateService,
		private windowScrollingService: WindowScrollingService,
	) {
		translate.onLangChange.subscribe((event: LangChangeEvent) => {
			this.loadMap();
		});
		this.renderer.listen('window', 'touchstart', (e: Event) => {
			if (this.mapContainer.nativeElement.contains(e.target)) {
				this.isMapActive = true;
			} else {
				this.isMapActive = false;
			}
		});

		this.renderer.listen('window', 'touchmove', (e: Event) => {
			if (this.mapContainer.nativeElement.contains(e.target)) {
				this.isMapActive = false;
			}
		});

		// this.renderer.listen('window', 'touchend', (e: Event) => {
		// 	if (this.mapContainer.nativeElement.contains(e.target)) {
		// 		this.isMapActive = false;
		// 	}
		// });

		// this.renderer.listen('window', 'touchstart', (e: Event) => {
			
		// 	if (this.mapContainer.nativeElement.contains(e.target)) {
		// 		this.isMapActive = true;
		// 	}
		// });
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
			locationsList.forEach((x, index) => {
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
		this.windowScrollingService.disable();
		const dialogRef = this.matDialog.open(StandortDetailsComponent, {
			data: { location: location },
			panelClass: 'dialog'
		});

		dialogRef.afterClosed().subscribe(() => {
			this.windowScrollingService.enable();
		});
	}
}

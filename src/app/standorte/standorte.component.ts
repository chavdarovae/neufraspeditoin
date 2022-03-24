import { Component, isDevMode, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScriptService } from '../shared/script.service';
import { StandortDetailsComponent } from './standort-details/standort-details.component';

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
		private scriptService: ScriptService
	) {}

	ngOnInit(): void {
		this.scriptService.loadJsScript(this.renderer, (this.urlPrefix + 'assets/image-map-pro/input.js'));
		this.scriptService.loadJsScript(this.renderer, (this.urlPrefix + 'assets/image-map-pro/map.js'));
	}

	showLocationDetails(location: any) {
		this.matDialog.open(StandortDetailsComponent);
	}
}

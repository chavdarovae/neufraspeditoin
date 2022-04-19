import { Component, isDevMode, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-transportunternehmer',
	templateUrl: './transportunternehmer.component.html',
	styleUrls: ['./transportunternehmer.component.scss']
})
export class TransportunternehmerComponent implements OnInit {
	urlPrefix = isDevMode() ? '../../' : './';
	baseUrl = environment.urlNeufra;

	constructor(private router: Router) { }

	ngOnInit(): void {
	}

	goTo() {
		if (!!sessionStorage.getItem('setLocationInfoSeen')) {
			window.location.href = `${this.baseUrl}standorte#locationMap`;
		} else {
			// this.router.navigate(['/standorte']);
			window.location.href = `${this.baseUrl}standorte`;
		}
	}
}

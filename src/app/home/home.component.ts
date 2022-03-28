import { ViewportScroller } from '@angular/common';
import { Component, isDevMode, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	urlPrefix = isDevMode() ? '../../' : './';
	target: string;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private scroller: ViewportScroller) {
	}

	ngOnInit(): void {
	}

	showDetails(goToSection: string) {
		this.router.navigate(['/unternehmen'], { fragment: goToSection });
	}
}

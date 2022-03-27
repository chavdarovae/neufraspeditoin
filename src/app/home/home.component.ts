import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, isDevMode, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
	urlPrefix = isDevMode() ? '../../' : './';
	target: string;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private scroller: ViewportScroller) {
	}

	ngOnInit(): void {
		this.activatedRoute.queryParams.subscribe(params => {
			this.target = params['goToSection'] ? params['goToSection'] : '';
		});
	}

	ngAfterViewInit(): void {
		this.scroller.scrollToAnchor(this.target);
	}

	showDetails(goToSection: string) {
		this.router.navigate(['/unternehmen'], { queryParams: { goToSection } });
	}
}

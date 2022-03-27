import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, isDevMode, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-unternehmen',
	templateUrl: './unternehmen.component.html',
	styleUrls: ['./unternehmen.component.scss']
})
export class UnternehmenComponent implements OnInit, AfterViewInit {
	urlPrefix = isDevMode() ? '../../' : './';
	target: string;

	constructor(
		private activatedRoute: ActivatedRoute,
		private scroller: ViewportScroller
	) { }

	ngOnInit(): void {
		this.activatedRoute.queryParams.subscribe(params => {
			this.target = params['goToSection'] ? params['goToSection'] : '';
		});
	}

	ngAfterViewInit(): void {
		this.scroller.scrollToAnchor(this.target);
	}
}

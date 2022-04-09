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

	constructor(
		private scroller: ViewportScroller,
		private activatedRoute: ActivatedRoute
	) { }

	ngOnInit(): void {
	}

	ngAfterViewInit() {
		this.activatedRoute.queryParams.subscribe(params => {
            if (params['goToSection']) {
				this.scroller.scrollToAnchor(params['goToSection']);
            }
        });
	}
}

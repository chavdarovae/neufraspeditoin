import { ViewportScroller } from '@angular/common';
import { AfterViewChecked, Component, isDevMode, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollHelper } from '../shared/scrollHelper';

@Component({
	selector: 'app-unternehmen',
	templateUrl: './unternehmen.component.html',
	styleUrls: ['./unternehmen.component.scss']
})
export class UnternehmenComponent implements OnInit, AfterViewChecked {
	urlPrefix = isDevMode() ? '../../' : './';
	target: string = '';
	private scrollHelper: ScrollHelper = new ScrollHelper();

	constructor(
		private router: Router,
		private scroller: ViewportScroller
	) { }

	ngOnInit(): void {
		this.router.events.subscribe(() => {
			this.target = window.location.href.split('?goToSection=')[1];
		});
	}

	ngAfterViewChecked() {
		if (this.target) {
			this.scrollHelper.scrollToFirst(this.target);
			this.scrollHelper.doScroll();
			this.scroller.scrollToAnchor(this.target);
		}
	}
}

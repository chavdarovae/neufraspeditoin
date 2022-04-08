import { ViewportScroller } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, isDevMode, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollHelper } from '../shared/scrollHelper';

@Component({
	selector: 'app-unternehmen',
	templateUrl: './unternehmen.component.html',
	styleUrls: ['./unternehmen.component.scss']
})
export class UnternehmenComponent implements AfterViewChecked {
	urlPrefix = isDevMode() ? '../../' : './';
	target: string = '';
	private scrollHelper: ScrollHelper = new ScrollHelper();

	@ViewChild('speditionserfahrung') public speditionserfahrung: ElementRef;
	@ViewChild('partner') public partner: ElementRef;
	@ViewChild('hand') public hand: ElementRef;
	@ViewChild('spezialist') public spezialist: ElementRef;
	@ViewChild('direkttransport') public direkttransport: ElementRef;
	@ViewChild('sendungsverfolgung') public sendungsverfolgung: ElementRef;
	@ViewChild('digital') public digital: ElementRef;

	constructor(private router: Router, private scroller: ViewportScroller) {
		router.events.subscribe(() => {
			this.target = window.location.href.split('?goToSection=')[1];
		});
	}

	ngAfterViewChecked() {
		// if (this.target) {
		// 	this.scroller.scrollToAnchor(this.target);
		// 	switch (this.target) {
		// 		case 'speditionserfahrung':
		// 			this.speditionserfahrung.nativeElement.scrollIntoView({
		// 				behavior: "smooth",
		// 				block: "start",
		// 				inline: "nearest"
		// 			});
		// 			break;
		// 		case 'partner':
		// 			this.partner.nativeElement.scrollIntoView({
		// 				behavior: "smooth",
		// 				block: "start",
		// 				inline: "nearest"
		// 			});
		// 			break;
		// 		case 'hand':
		// 			this.hand.nativeElement.scrollIntoView({
		// 				behavior: "smooth",
		// 				block: "start",
		// 				inline: "nearest"
		// 			});
		// 			break;

		// 		case 'direkttransport':
		// 			this.direkttransport.nativeElement.scrollIntoView({
		// 				behavior: "smooth",
		// 				block: "start",
		// 				inline: "nearest"
		// 			});
		// 			break;
		// 		case 'sendungsverfolgung':
		// 			this.sendungsverfolgung.nativeElement.scrollIntoView({
		// 				behavior: "smooth",
		// 				block: "start",
		// 				inline: "nearest"
		// 			});
		// 			break;
		// 		case 'digital':
		// 			this.digital.nativeElement.scrollIntoView({
		// 				behavior: "smooth",
		// 				block: "start",
		// 				inline: "nearest"
		// 			});
		// 			break;
		// 	}
		// }
		if (this.target) {
			this.scrollHelper.scrollToFirst(this.target);
			this.scrollHelper.doScroll();
			this.scroller.scrollToAnchor(this.target);
		}
	}


}

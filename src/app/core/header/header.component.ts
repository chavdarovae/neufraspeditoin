import { ViewportScroller } from '@angular/common';
import { Component, Input, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	@Input() activeTab: any = 'unternehmen';
	@Input() pageTitle = 'legalNotice';
	imgPrefix = isDevMode() ? '../../../assets/img/' : './assets/img/';

	constructor(
		private translate: TranslateService,
		private router: Router,
		private scroller: ViewportScroller
	) { }

	showDetails(goToSection: string) {
		this.scroller.scrollToPosition([0, document.documentElement.clientHeight])
	}

	//Switch language
	translateLanguageTo(lang: string) {
		this.translate.use(lang);
	}
}

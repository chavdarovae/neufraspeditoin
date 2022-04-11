import { ViewportScroller } from '@angular/common';
import { Component, Input, isDevMode } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	@Input() activeTab: any = 'unternehmen';
	@Input() pageTitle = 'legalNotice';
	imgPrefix = isDevMode() ? '../../../assets/img/' : './assets/img/';
	baseUrl = environment.urlNeufra;

	constructor(
		private translate: TranslateService,
		private scroller: ViewportScroller
	) { }

	showDetails() {
		this.scroller.scrollToPosition([0, document.documentElement.clientHeight])
	}

	scrollToTop() {
		this.scroller.scrollToPosition([0,0]);
	}

	//Switch language
	translateLanguageTo(lang: string) {
		this.translate.use(lang);
	}
}

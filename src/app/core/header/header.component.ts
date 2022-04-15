import { ViewportScroller } from '@angular/common';
import { Component, Input, isDevMode, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from 'src/app/shared/shared.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	@Input() activeTab: any = 'unternehmen';
	@Input() pageTitle = 'company';
	imgPrefix = isDevMode() ? '../../../assets/img/' : './assets/img/';
	baseUrl = environment.urlNeufra;

	constructor(
		private translate: TranslateService,
		private scroller: ViewportScroller,
		public sharedService: SharedService
	) { }

	ngOnInit(): void {
	}

	showDetails() {
		this.scroller.scrollToPosition([0, document.documentElement.clientHeight])
	}

	scrollToTop() {
		this.scroller.scrollToPosition([0, 0]);
	}

	showMap() {
		this.sharedService.setLocationInfoSeen(true);
	}

	//Switch language
	translateLanguageTo(lang: string) {
		this.translate.use(lang);
	}
}

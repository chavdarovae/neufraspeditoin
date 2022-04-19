import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, Input, isDevMode, OnInit, Renderer2, ViewChild } from '@angular/core';
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
	@ViewChild('wellcomeMessage') wellcomeMessage: ElementRef;
	showWellcomeMessage = true;

	constructor(
		private translate: TranslateService,
		private scroller: ViewportScroller,
		public sharedService: SharedService,
		private renderer: Renderer2
	) {
		this.renderer.listen('window', 'touchstart', (e: Event) => {
			if (this.showWellcomeMessage && this.wellcomeMessage.nativeElement.contains(e.target)) {
				this.showWellcomeMessage = false;
				this.showDetails();
			}
		});
	}

	ngOnInit(): void {
	}

	showDetails() {
		this.scroller.scrollToPosition([0, document.documentElement.clientHeight])
	}

	scrollToTop() {
		this.scroller.scrollToPosition([0, 0]);
	}

	showMap() {
		sessionStorage.setItem('setLocationInfoSeen', 'true')
	}

	isInfoSeenForCurrentSession() {
		return !!sessionStorage.getItem('setLocationInfoSeen');
	}

	//Switch language
	translateLanguageTo(lang: string) {
		this.translate.use(lang);
	}
}

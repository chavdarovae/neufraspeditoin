import { Component, Input, isDevMode } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	@Input() activeTab: any = 'unternehmen';
	@Input() pageTitle = 'aboutUs';
	imgPrefix = isDevMode() ? '../../../assets/img/' : './assets/img/';

	constructor(private translate: TranslateService) { }
	
	//Switch language
	translateLanguageTo(lang: string) {
		this.translate.use(lang);
	}
}

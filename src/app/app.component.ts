import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'neufra-site';

  constructor(
    public translate: TranslateService
  ){
    // Register translation languages
    translate.addLangs(['de', 'en', 'fr']);
    // Set default language
    translate.setDefaultLang('de');
    translate.use('de');
  } 
}

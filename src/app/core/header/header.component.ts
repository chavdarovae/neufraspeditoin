import { Component, isDevMode, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeTab = 'unternehmen';
  logoPath = isDevMode() ? '../../../assets/img/Logo Neufra.jpg' : './assets/img/Logo Neufra.jpg';
  imgPath = isDevMode() ? '../../../assets/img/poster-unternehmen.jpg' : './assets/img/poster-unternehmen.jpg';

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  onNavClick(selectedNavTab: string) {
    this.activeTab = selectedNavTab;
    if (isDevMode()) {
      this.imgPath = `../../../assets/img/poster-${selectedNavTab}.jpg`
    } else {
      this.imgPath = `./assets/img/poster-${selectedNavTab}.jpg`
    }
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }
}

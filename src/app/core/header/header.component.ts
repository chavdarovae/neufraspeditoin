import { Component, isDevMode, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeTab: any = 'unternehmen';
  pageTitle = 'aboutUs';
  logoPath = isDevMode() ? '../../../assets/img/Logo Neufra.jpg' : './assets/img/Logo Neufra.jpg';
  imgPath = isDevMode() ? '../../../assets/img/poster-unternehmen.jpg' : './assets/img/poster-unternehmen.jpg';


  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    const currUrl: string = window.location.href;
    this.activeTab = (currUrl && currUrl.split('/').pop() !== undefined) ? currUrl.split('/').pop() : 'unternehmen';
    this.setPageTitle(this.activeTab);
  }

  onNavClick(selectedNavTab: string) {
    this.activeTab = selectedNavTab;
    this.setPageTitle(selectedNavTab);
    if (isDevMode()) {
      this.imgPath = `../../../assets/img/poster-${selectedNavTab}.jpg`
    } else {
      this.imgPath = `./assets/img/poster-${selectedNavTab}.jpg`
    }
  }

  setPageTitle(tab: string) {
    switch (tab) {
      case 'unternehmen': this.pageTitle = 'aboutUs'
      break;
      case 'standorte': this.pageTitle = 'locations'
      break;
      case 'dienstleistungen': this.pageTitle = 'services'
      break;
      case 'karriere': this.pageTitle = 'career'
      break;
      case 'transportunternehmer': this.pageTitle = 'transportCompany'
      break;
    }
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }
}

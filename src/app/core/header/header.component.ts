import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeTab = 'unternehmen';
  imgPath = `../../../assets/img/poster-unternehmen.jpg`

  constructor() { }

  ngOnInit(): void {
  }

  onNavClick(selectedNavTab: string) {
    this.activeTab = selectedNavTab;
    this.imgPath = `../../../assets/img/poster-${selectedNavTab}.jpg`
  }
}

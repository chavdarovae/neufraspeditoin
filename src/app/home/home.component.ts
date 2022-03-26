import { Component, isDevMode, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  urlPrefix = isDevMode() ? '../../' : './';

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  showDetails(goToSection: string) {
    this.router.navigate(['/unternehmen'], {queryParams: { goToSection }});
  }
}

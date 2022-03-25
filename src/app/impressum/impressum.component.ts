import { Component, isDevMode, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {
  urlPrefix = isDevMode() ? '../../../' : './';

  constructor() { }

  ngOnInit(): void {
  }

}

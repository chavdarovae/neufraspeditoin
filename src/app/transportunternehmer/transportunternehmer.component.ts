import { Component, isDevMode, OnInit } from '@angular/core';

@Component({
  selector: 'app-transportunternehmer',
  templateUrl: './transportunternehmer.component.html',
  styleUrls: ['./transportunternehmer.component.scss']
})
export class TransportunternehmerComponent implements OnInit {
  urlPrefix = isDevMode() ? '../../' : './';

  constructor() { }

  ngOnInit(): void {
  }

}

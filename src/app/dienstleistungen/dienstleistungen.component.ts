import { Component, isDevMode, OnInit } from '@angular/core';

@Component({
  selector: 'app-dienstleistungen',
  templateUrl: './dienstleistungen.component.html',
  styleUrls: ['./dienstleistungen.component.scss']
})
export class DienstleistungenComponent implements OnInit {
  urlPrefix = isDevMode() ? '../../' : './';

  constructor() { }

  ngOnInit(): void {
  }

}

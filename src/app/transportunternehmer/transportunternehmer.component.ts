import { Component, isDevMode, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-transportunternehmer',
  templateUrl: './transportunternehmer.component.html',
  styleUrls: ['./transportunternehmer.component.scss']
})
export class TransportunternehmerComponent implements OnInit {
  urlPrefix = isDevMode() ? '../../' : './';
  baseUrl = environment.urlNeufra;

  constructor() { }

  ngOnInit(): void {
  }
}

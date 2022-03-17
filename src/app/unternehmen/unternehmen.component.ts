import { Component, isDevMode, OnInit } from '@angular/core';

@Component({
  selector: 'app-unternehmen',
  templateUrl: './unternehmen.component.html',
  styleUrls: ['./unternehmen.component.scss']
})
export class UnternehmenComponent implements OnInit {
  urlPrefix = isDevMode() ? '../../' : './';

  constructor() { }

  ngOnInit(): void {
  }

}

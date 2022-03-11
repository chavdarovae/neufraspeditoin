import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-karriere',
  templateUrl: './karriere.component.html',
  styleUrls: ['./karriere.component.scss']
})
export class KarriereComponent implements OnInit {
  currPosition= 0;
  expanded = false;

  constructor() { }

  ngOnInit(): void {
  }

  togglePosition() {
    this.currPosition = 1;
    this.expanded = !this.expanded;
  }

}

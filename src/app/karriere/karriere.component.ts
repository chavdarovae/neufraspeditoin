import { Component, OnInit } from '@angular/core';
import { openings } from 'src/assets/files/carriers';

@Component({
  selector: 'app-karriere',
  templateUrl: './karriere.component.html',
  styleUrls: ['./karriere.component.scss']
})
export class KarriereComponent implements OnInit {
  currPosition= 0;
  expanded = false;
  positions = openings;

  constructor() { }

  ngOnInit(): void {
  }

  togglePosition(index: number) {
    this.currPosition = index;
    this.expanded = !this.expanded;
  }

}

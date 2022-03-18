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
  positions: any[] = openings;
  asc = true;

  constructor() { }

  ngOnInit(): void {
    if(this.positions?.length > 0) {
      this.positions.forEach((x, index )=> x.number = index);
    }
  }

  togglePosition(index: number) {
    this.currPosition = index;
    this.expanded = !this.expanded;
  }

  sortPositions() {
    this.asc = !this.asc
    this.positions.sort((a,b) => this.asc ? a.location.localeCompare(b.location) : b.location.localeCompare(a.location));
  }
}

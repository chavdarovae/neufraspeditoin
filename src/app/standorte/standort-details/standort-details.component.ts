import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-standort-details',
  templateUrl: './standort-details.component.html',
  styleUrls: ['./standort-details.component.scss']
})
export class StandortDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {location: string}) { }

  ngOnInit(): void {
  }

}

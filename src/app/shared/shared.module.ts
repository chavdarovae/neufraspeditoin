import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UnternehmensKarteComponent } from './unternehmens-karte/unternehmens-karte.component';
import { DienstleistungenKarteComponent } from './dienstleistungen-karte/dienstleistungen-karte.component';
import { KarriereKarteComponent } from './karriere-karte/karriere-karte.component';
import { TuKarteComponent } from './tu-karte/tu-karte.component';



@NgModule({
  declarations: [
  
    UnternehmensKarteComponent,
       DienstleistungenKarteComponent,
       KarriereKarteComponent,
       TuKarteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class SharedModule { }

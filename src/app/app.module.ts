import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DienstleistungenComponent } from './dienstleistungen/dienstleistungen.component';
import { KarriereComponent } from './karriere/karriere.component';
import { StandorteComponent } from './standorte/standorte.component';
import { UnternehmenComponent } from './unternehmen/unternehmen.component';
import { TransportunternehmerComponent } from './transportunternehmer/transportunternehmer.component';
import { NichtGefundenComponent } from './nicht-gefunden/nicht-gefunden.component';


@NgModule({
  declarations: [
    AppComponent,
    UnternehmenComponent,
    StandorteComponent,
    DienstleistungenComponent,
    KarriereComponent,
    TransportunternehmerComponent,
    NichtGefundenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

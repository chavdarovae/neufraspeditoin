import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DienstleistungenComponent } from './dienstleistungen/dienstleistungen.component';
import { KarriereComponent } from './karriere/karriere.component';
import { NichtGefundenComponent } from './nicht-gefunden/nicht-gefunden.component';
import { SharedModule } from './shared/shared.module';
import { StandorteComponent } from './standorte/standorte.component';
import { TransportunternehmerComponent } from './transportunternehmer/transportunternehmer.component';
import { UnternehmenComponent } from './unternehmen/unternehmen.component';


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
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

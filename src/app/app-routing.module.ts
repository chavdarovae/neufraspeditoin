import { RouterModule, Routes } from '@angular/router';
import { DienstleistungenComponent } from './dienstleistungen/dienstleistungen.component';
import { KarriereComponent } from './karriere/karriere.component';
import { NichtGefundenComponent } from './nicht-gefunden/nicht-gefunden.component';
import { StandorteComponent } from './standorte/standorte.component';
import { TransportunternehmerComponent } from './transportunternehmer/transportunternehmer.component';
import { UnternehmenComponent } from './unternehmen/unternehmen.component';

const routes: Routes = [
  {
    path: 'home',
    // pathMath: 'full',
    component: UnternehmenComponent
  },
  {
    path: 'unternehmen',
    component: UnternehmenComponent,
    data: {}
  },
  {
    path: 'standorte',
    component: StandorteComponent,
    data: {}
  },
  {
    path: 'unternehmen',
    component: UnternehmenComponent,
    data: {}
  },
  {
    path: 'karriere',
    component: KarriereComponent,
    data: {}
  },
  {
    path: 'dienstleistungen',
    component: DienstleistungenComponent,
    data: {}
  },
  {
    path: 'transportunternehmer',
    component: TransportunternehmerComponent,
    data: {}
  },
  {
    path: '**',
    component: NichtGefundenComponent
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
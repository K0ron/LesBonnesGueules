import { Routes } from '@angular/router';
import { HomeComponent } from './home/ui/home.component';
import { PrestationComponent } from './prestation/ui/prestation.component';
import { CarteComponent } from './carte/ui/carte.component';
import { EquipeComponent } from './equipe/ui/equipe.component';
import { DevisComponent } from './devis/ui/devis.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'prestation', component: PrestationComponent},
  { path: 'lacarte', component: CarteComponent},
  { path: 'lequipe', component: EquipeComponent},
  { path: 'devis', component: DevisComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CguComponent } from './pages/cgu/cgu.component';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { PageHousesComponent } from './pages/page-houses/page-houses.component';
import { PageAjoutHebergementComponent } from './pages/page-ajout-hebergement/page-ajout-hebergement.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: PageRegisterComponent },
  { path: 'contact', component: PageContactComponent },
  { path: 'cgu', component: CguComponent },
  { path: 'hebergement', component: PageHousesComponent },
  { path: 'ajout-hebergement', component: PageAjoutHebergementComponent },
  { path: 'carrousel', component: CarrouselComponent},
  { path: '**', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
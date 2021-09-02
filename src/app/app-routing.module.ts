import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CguComponent } from './cgu/cgu.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './home/home.component';
import { PageContactComponent } from './page-contact/page-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: PageContactComponent},
  { path: 'cgu', component: CguComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
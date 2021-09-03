import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchComponent } from './components/search/search.component';
import { TableauDeBordComponent } from './components/tableau-de-bord/tableau-de-bord.component';

import { BodyContentComponent } from './components/body-content/body-content.component';
import { ContentContactPageComponent } from './components/content-contact-page/content-contact-page.component';
import { FicheHouseDetailComponent } from './components/fiche-house-detail/fiche-house-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { PubComponent } from './components/pub/pub.component';
import { DevenirProprietaireComponent } from './devenir-proprietaire/devenir-proprietaire.component';
import { CguComponent } from './cgu/cgu.component';
import { HomeComponent } from './home/home.component';
import { PageContactComponent } from './page-contact/page-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormContactComponent,
    SearchComponent,
    HeaderComponent,
    NavComponent,
    ContentContactPageComponent,
    BodyContentComponent,
    FicheHouseDetailComponent,
    LoginComponent,
    RegisterComponent,
    PubComponent,
    DevenirProprietaireComponent,
    CguComponent,
    HomeComponent,
    PageContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

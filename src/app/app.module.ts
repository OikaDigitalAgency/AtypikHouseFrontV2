import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ContentContactPageComponent } from './content-contact-page/content-contact-page.component';
import { BodyContentComponent } from './body-content/body-content.component';
import { FicheHouseDetailComponent } from './fiche-house-detail/fiche-house-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ContentContactPageComponent,
    BodyContentComponent,
    FicheHouseDetailComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
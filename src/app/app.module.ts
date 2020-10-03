import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/HomeComponent';
import { AboutComponent } from './About/AboutComponent';
import { PortfolioComponent } from './Portfolio/PortfolioComponent';
import { SkillsComponent } from './Skills/SkillsComponent';
import { ContactComponent } from './Contact/ContactComponent';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

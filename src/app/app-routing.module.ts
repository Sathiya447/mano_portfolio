import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './Home/HomeComponent';
import { AboutComponent } from './About/AboutComponent';
import { PortfolioComponent } from './Portfolio/PortfolioComponent';
import { SkillsComponent } from './Skills/SkillsComponent';
import { ContactComponent } from './Contact/ContactComponent';

const routes: Routes = [
  { 
    path: '',  redirectTo: 'home', pathMatch: 'full' 
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

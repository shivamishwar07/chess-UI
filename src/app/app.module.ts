import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ContectUsComponent } from './components/contect-us/contect-us.component';
import { TrainingPlansComponent } from './components/training-plans/training-plans.component';
import { CoachingTeamsComponent } from './components/coaching-teams/coaching-teams.component';
import { AccomplishmentsGalleryComponent } from './components/accomplishments-gallery/accomplishments-gallery.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AdditionalResourcesComponent } from './components/additional-resources/additional-resources.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    HeroSectionComponent,
    ContectUsComponent,
    TrainingPlansComponent,
    CoachingTeamsComponent,
    AccomplishmentsGalleryComponent,
    ReviewsComponent,
    AdditionalResourcesComponent,
    AboutUsComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {

  registerHere(){
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf_WZKqkj9L23Ai4_O8bf_ny1HnJNOlk1JuohHTly8dITzCWg/viewform?usp=sf_link';
    window.open(googleFormUrl, '_blank');
  }
}

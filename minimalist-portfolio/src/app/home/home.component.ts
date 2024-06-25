import { Component, OnInit } from '@angular/core';
import { ContactMeLinkComponent } from '../contact-me-link/contact-me-link.component';

import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutMeSectionComponent } from '../about-me-section/about-me-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, AboutMeSectionComponent, ContactMeLinkComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}

import { Component, OnInit } from '@angular/core';
import { ContactMeLinkComponent } from '../contact-me-link/contact-me-link.component';

import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutMeSectionComponent } from '../about-me-section/about-me-section.component';
import { ScrollLanguagesComponent } from '../scroll-languages/scroll-languages.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, AboutMeSectionComponent, ContactMeLinkComponent, ScrollLanguagesComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}

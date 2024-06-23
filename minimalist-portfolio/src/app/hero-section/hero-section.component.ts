import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styles: ``
})
export class HeroSectionComponent {
  constructor(
    private router: Router,
  ) { }

  scrollToSection(sectionId: string): void {
    // Directly navigate to the current route with a fragment
    this.router.navigate([], { fragment: sectionId }).then(() => {
      // Use a timeout to ensure the DOM has updated after navigation
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    });
  }
}

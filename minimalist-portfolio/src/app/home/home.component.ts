import { Component } from '@angular/core';
import { ContactMeLinkComponent } from '../contact-me-link/contact-me-link.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ContactMeLinkComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
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

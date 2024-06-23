import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ToggleThemeComponent } from '../toggle-theme/toggle-theme.component';
import { NavService } from '../../Service/nav-service.service';
import { CommonModule } from '@angular/common';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    ToggleThemeComponent,
    MobileNavComponent
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  navOpen: boolean = false;

  constructor(public navService: NavService) { }

  toggleNav() {
    this.navService.toggleNav();
  }

  closeNav() {
    this.navService.closeNav();
  }

}

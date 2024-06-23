import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavService } from '../../Service/nav-service.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ToggleThemeComponent } from '../toggle-theme/toggle-theme.component';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ToggleThemeComponent],
  templateUrl: './mobile-nav.component.html',
  styles: ``
})
export class MobileNavComponent {
  constructor(public navService: NavService) { }
  
  closeNav() {
    this.navService.closeNav();
  }
}

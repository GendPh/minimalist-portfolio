import { Component } from '@angular/core';
import { DarkModeService } from '../../Service/dark-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-theme.component.html',
  styles: ``
})
export class ToggleThemeComponent {
  constructor(public darkModeSignal: DarkModeService) { }

  toggleTheme() {
    this.darkModeSignal.updateDarkModeSignal();
  }
}

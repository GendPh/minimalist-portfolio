import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './socials.component.html',
  styles: ``
})
export class SocialsComponent {
  @Input("ThemeReverse") themeReversed: boolean = false;
}

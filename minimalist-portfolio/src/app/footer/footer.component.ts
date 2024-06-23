import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SocialsComponent],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {

}

import { Component } from '@angular/core';
import { LanguagesComponent } from '../languages/languages.component';

@Component({
  selector: 'app-scroll-languages',
  standalone: true,
  imports: [LanguagesComponent],
  templateUrl: './scroll-languages.component.html',
  styleUrl: './scroll-languages.component.css'
})
export class ScrollLanguagesComponent {

}

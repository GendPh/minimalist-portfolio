import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DarkModeService } from '../Service/dark-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'minimalist-portfolio';

  constructor(public darkModeSignal: DarkModeService) { }

  // This method is used to scroll to the top of the page when the component is initialized.
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  @ViewChild('navBtnToggle') navBtnToggle: ElementRef | undefined;
  @ViewChild('navMobile') navMobile: ElementRef | undefined;

  toggleNavBar() {
    const body = document.querySelector('body');

    if (this.navBtnToggle && this.navMobile && body) {
      if (this.navBtnToggle.nativeElement.classList.contains('open')) {
        this.navBtnToggle.nativeElement.classList.remove('open');
        this.navMobile.nativeElement.classList.remove('open');
        body.classList.remove('overflow-hidden');
      } else {
        this.navBtnToggle.nativeElement.classList.add('open');
        this.navMobile.nativeElement.classList.add('open');
        body.classList.add('overflow-hidden');
      }
    }
  }

  closeNavBar() {
    const body = document.querySelector('body');

    if (this.navBtnToggle && this.navMobile && body) {
      body.classList.remove('overflow-hidden');
      this.navBtnToggle.nativeElement.classList.remove('open');
      this.navMobile.nativeElement.classList.remove('open');
    }
  }

}

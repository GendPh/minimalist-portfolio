import { Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NavService {

  navOpenSignal = signal<boolean>(false);

  constructor() { }

  closeNav() {
    this.navOpenSignal.update(() => false);
  }

  toggleNav() {
    this.navOpenSignal.update((value) => !value);
  }
}

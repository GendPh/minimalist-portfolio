import { Injectable, effect, signal } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NavService {

  navOpenSignal = signal<boolean>(false);

  constructor() {
    effect(() => {
      this.navOpenSignal.update(() => false);
    })
  }

  closeNav() {
    this.navOpenSignal.update(() => false);
  }

  toggleNav() {
    this.navOpenSignal.update((value) => !value);
  }
}

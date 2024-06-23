import { Injectable, Signal, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  darkModeSignal = signal<string>(
    JSON.parse(window.localStorage.getItem('darkModeSignal') || 'null') || 'light'
  );

  constructor() {
    const htmlElement = document.querySelector('html');

    effect(() => {
      window.localStorage.setItem('darkModeSignal', JSON.stringify(this.darkModeSignal()))
      htmlElement?.classList.remove('dark', 'light');
      htmlElement?.classList.add(this.darkModeSignal());
    })
  }

  updateDarkModeSignal() {
    const htmlElement = document.querySelector('html');
    this.darkModeSignal.update((value) => value === 'dark' ? 'light' : 'dark');
    htmlElement?.classList.remove('dark', 'light');
    htmlElement?.classList.add(this.darkModeSignal());
  }
}

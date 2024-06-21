import { animate, style, transition, trigger } from "@angular/animations";

export const projectAnimation = trigger('projectAnimation',
  [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1s', style({ opacity: 1 }))
    ])
  ]
)
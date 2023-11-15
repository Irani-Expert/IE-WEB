import { trigger, transition, style, animate } from '@angular/animations';

export const smoothHeight = trigger('grow', [
  transition('void <=> *', []),
  transition(
    '* <=> *',
    [style({ height: '{{startHeight}}px' }), animate('.3s ease-in-out')],
    {
      params: { startHeight: 0 },
    }
  ),
]);
export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('100ms ease-in-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('100ms ease-in-out', style({ opacity: 0 }))]),
]);

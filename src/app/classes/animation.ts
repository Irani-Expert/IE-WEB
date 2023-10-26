import { trigger, transition, style, animate } from '@angular/animations';

export const smoothHeight = trigger('grow', [
  transition('void <=> *', []),
  transition(
    '* <=> *',
    [style({ height: '{{startHeight}}px', opacity: 0 }), animate('.3s ease')],
    {
      params: { startHeight: 0 },
    }
  ),
]);

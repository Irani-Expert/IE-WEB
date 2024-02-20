import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'select1',
        style({
          transform: 'translateX(-22%)',
        })
      ),
      state(
        'select2',
        style({
          transform: 'translateX(-50%) ',
        })
      ),
      state(
        'select3',
        style({
          transform: 'translateX(-75%)',
        })
      ),
      transition('* => *', [animate('0.05s')]),
    ]),
  ],
})
export class ResponsiveTableComponent {
  myState: string = 'select1';

  selectState(state: string) {
    console.log(state);

    this.myState = state;
  }
}

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { CalEvent } from '../calendar-main-page/cal-event.model';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';

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
  table: CalEvent[] | undefined = new Array<CalEvent>();
  myState: string = 'select1';
  constructor(private _ecoCalService: EcoCalService) {}
  ngOnInit() {
    this.getCalendarValues();
  }
  getCalendarValues() {
    const pageObservable$ =
      this._ecoCalService.paginatedCalendar.asObservable();
    pageObservable$.subscribe({
      next: (it) => {
        if (it) {
          this.table = it.items;
        }
      },
    });
  }
  selectState(state: string) {
    this.myState = state;
  }
}

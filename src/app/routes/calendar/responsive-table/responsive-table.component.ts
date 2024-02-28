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
import { DatePipe } from '@angular/common';
import { DateRange } from '@angular/material/datepicker';
import { HeaderLayoutComponent } from 'src/app/components/header-layout/header-layout.component';

interface monthDate {
  name: string;
  day: string;
}
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
  tranformValue: number;
  resdate: monthDate[] = new Array<monthDate>();
  table: CalEvent[] | undefined = new Array<CalEvent>();
  myState: string = 'select1';
  fiterDate: DateRange<Date>;
  dragCount: number = 1;
  selectedDay: string;
  selectedYear: number;
  pageXKeeper: number = 0;
  selectedMonth: number = 2;
  modalStatus: boolean = false;

  constructor(private _ecoCalService: EcoCalService) {}
  ngOnInit() {
    this.getCalendarValues();

    const datepipe: DatePipe = new DatePipe('en-US');
    let formattedDate = datepipe.transform(new Date(), 'dd');
    if (formattedDate != null) this.selectedDay = formattedDate;
    this.tranformValue = Number(formattedDate);
    this.tranformValue = (this.tranformValue - 15) * 6;

    this.formatDat();
  }
  openedModal(event: any) {}
  daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }

  formatDat() {
    var d = new Date();

    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();
    this.selectedYear = curr_year;
    let numberofDays = this.daysInMonth(curr_month, curr_year);

    let week = new Array(
      'يكشنبه',
      'دوشنبه',
      'سه شنبه',
      'چهارشنبه',
      'پنج شنبه',
      'جمعه',
      'شنبه'
    );
    for (let index = 0; index < numberofDays; index++) {
      var someDate = new Date(index);
      var result = someDate.setDate(someDate.getDate() + index);
      var d = new Date(result);
      var dayName = week[d.getDay()];

      let x: monthDate = { day: String(index + 1), name: dayName };
      if (x) this.resdate.push(x);
    }
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

  selectDate(id: string) {
    this.selectedDay = id;
    this.fiterDate = new DateRange<Date>(
      new Date(this.selectedYear, this.selectedMonth, Number(id)),
      null
    );
    console.log(this.fiterDate);
  }

  dragd(e: TouchEvent) {
    if (this.pageXKeeper == 0) {
      this.pageXKeeper = e.changedTouches[0].pageX;
    }
  }
  dragOver(e: TouchEvent) {
    if (this.pageXKeeper != 0) {
      if (
        e.changedTouches[0].pageX < this.pageXKeeper &&
        this.tranformValue > -78
      ) {
        this.tranformValue -= 6;
      } else if (
        e.changedTouches[0].pageX > this.pageXKeeper &&
        this.tranformValue < 78
      ) {
        this.tranformValue += 6;
      }
      this.pageXKeeper = 0;
    }
  }
}

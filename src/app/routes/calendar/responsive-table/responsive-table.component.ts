import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';
import { CalEvent } from '../calendar-main-page/cal-event.model';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
import { DatePipe } from '@angular/common';
import { ModalService } from 'src/app/shared/modal/services/modal.service';
import { Filter as FilterEvents } from '../calendar-main-page/filter.model';
import { BehaviorSubject, lastValueFrom } from 'rxjs';

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
  dragCount: number = 1;
  selectedDay: string;
  selectedYear: number;
  pageXKeeper: number = 0;
  selectedMonth: number;
  modalStatus: boolean = false;
  filteredModel = new FilterEvents();
  filter = new BehaviorSubject<FilterEvents>(new FilterEvents());

  @Output('modal') openingModal: EventEmitter<string> = new EventEmitter(false);

  constructor(
    private _ecoCalService: EcoCalService,
    private modal: ModalService
  ) {}

  ngOnInit() {
    this.getCalendarValues();

    const datepipe: DatePipe = new DatePipe('en-US');
    let formattedDate = datepipe.transform(new Date(), 'dd');
    if (formattedDate != null) this.selectedDay = formattedDate;
    this.tranformValue = Number(formattedDate);
    this.tranformValue = (this.tranformValue - 15) * 6;
    this.formatDat(null);
    this.selectedMonth = new Date().getMonth();
  }
  daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }

  formatDat(d: Date | null) {
    if (d == null) {
      d = new Date();
    }
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();
    this.selectedYear = curr_year;
    debugger;
    let numberofDays = this.daysInMonth(curr_month + 1, curr_year);
    let week = new Array(
      'يكشنبه',
      'دوشنبه',
      'سه شنبه',
      'چهارشنبه',
      'پنج شنبه',
      'جمعه',
      'شنبه'
    );

    this.resdate = new Array<monthDate>();
    for (let index = 0; index < numberofDays; index++) {
      var someDate = new Date(index);
      var result = someDate.setDate(someDate.getDate() + index);
      var wantedDate = new Date(result);
      var dayName = week[wantedDate.getDay()];

      let x: monthDate = {
        day: ('0' + String(index + 1)).slice(-2),
        name: dayName, // '11'
      };
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
  setSectionServices(event: number[]) {
    var data: number[] = [];
    event.forEach((x) => {
      data.push(x);
    });
    this.filteredModel.sectors = data;
    this.getCal(this.filteredModel);
    this.filter.next(this.filteredModel);
    // this.getCal(this.filteredModel);
    // this.filter.next(this.filteredModel);
  }
  setSymbolServices(event: string[]) {
    this.filteredModel.currencies = event;
    this.getCal(this.filteredModel);
    this.filter.next(this.filteredModel);
    // this.filteredModel.currencies = event;
    // this.getCal(this.filteredModel);
    // this.filter.next(this.filteredModel);
  }
  selectDate(id: string) {
    this.selectedDay = id;
    var selectedDate: Date[] = new Array<Date>();
    selectedDate.push(
      new Date(this.selectedYear, this.selectedMonth, Number(id))
    );
    this.setCalDate(selectedDate);
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
  openModal(type: string) {
    this.openingModal.emit(type);
    this.modal.open().subscribe({
      next: (action) => {
        console.log(action);
      },
      complete: () => {
        this.modalStatus = false;
      },
    });
    this.modalStatus = true;
  }
  choosRangeDate() {
    this.formatDat(null);
    this.openModal('login');
  }
  setCalDate(event: Date[]) {
    const datepipe: DatePipe = new DatePipe('en-US');
    let currentdate = datepipe.transform(event[0], 'yyyy.MM.dd');
    let formattedDate = datepipe.transform(event[0], 'dd');
    this.tranformValue = Number(formattedDate);
    this.tranformValue = (this.tranformValue - 15) * 6;
    if (formattedDate != undefined) {
      this.selectedDay = formattedDate;
      debugger;
    }
    if (event[1] == undefined) {
      this.selectedYear = event[0].getFullYear();
      this.selectedMonth = event[0].getMonth();

      if (currentdate != null) this.filteredModel.currentTime = currentdate;
    } else {
      let todate = datepipe.transform(event[1], 'yyyy.MM.dd');
      this.filteredModel.currentTime = '';
      if (currentdate != null) this.filteredModel.fromTime = currentdate;
      if (todate != null) this.filteredModel.toTime = todate;
    }

    this.getCal(this.filteredModel);
    this.filter.next(this.filteredModel);
  }
  async getCal(filter: FilterEvents, pageIndex: number = 0) {
    const apiData = this._ecoCalService.getCalEvents(
      `pageIndex=${pageIndex}&pageSize=10&accending=true`,
      filter
    );

    return await lastValueFrom(apiData);
  }
}

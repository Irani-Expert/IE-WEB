import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { CalEvent } from '../calendar-main-page/cal-event.model';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
import { DatePipe } from '@angular/common';
import { ModalService } from 'src/app/shared/modal/services/modal.service';
import { Filter as FilterEvents } from '../calendar-main-page/filter.model';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { AppComponent } from 'src/app/app.component';

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
  // tranformValue: number;
  events = new Array<CalEvent>();
  resdate: monthDate[] = new Array<monthDate>();
  table: CalEvent[] | undefined = new Array<CalEvent>();
  myState: string = 'select1';
  dragCount: number = 1;
  selectedDay: string;
  selectedYear: number;
  pageXKeeper: number = 0;
  selectedMonth: number;
  modalStatus: boolean = false;
  isYearmodalOpen: boolean = false;

  filteredModel: FilterEvents;
  // filter = new BehaviorSubject<FilterEvents>(new FilterEvents());
  dateType: string;
  @Output('modal') openingModal: EventEmitter<string> = new EventEmitter(false);
  @ViewChild('itemList') itemList: ElementRef;

  constructor(
    private _ecoCalService: EcoCalService,
    private modal: ModalService
  ) {
    this._ecoCalService.filter.subscribe((data) => {
      this.filteredModel = data;
    });
  }

  ngOnInit() {
    const datepipe: DatePipe = new DatePipe('en-US');
    let formattedDate = datepipe.transform(new Date(), 'dd');
    if (formattedDate != null) this.selectedDay = formattedDate;

    this.formatDat(null);
    this.selectedMonth = new Date().getMonth();
    setTimeout(() => {
      this.srcollToToday();
    }, 100);
  }

  ngAfterViewInit() {
    this.getCalendarValues();
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
          this.events.push(...it.items!);
          this.setTable(it.items?.slice(0, 16));
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
    this._ecoCalService.filter.next(this.filteredModel);
    // this.getCal(this.filteredModel);
  }
  setSymbolServices(event: string[]) {
    this.filteredModel.currencies = event;
    this._ecoCalService.filter.next(this.filteredModel);
    // this.getCal(this.filteredModel);
  }
  selectDate(id: string) {
    this.selectedDay = id;
    var selectedDate: Date[] = new Array<Date>();
    selectedDate.push(
      new Date(this.selectedYear, this.selectedMonth, Number(id))
    );
    this.setCalDate(selectedDate);
  }

  openyearselector() {
    this.dateType = 'yearOnly';
    this.formatDat(null);
    this.openModal('login');
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
    this.dateType = 'normal';
    this.formatDat(null);
    this.openModal('login');
  }

  setCalDate(event: Date[]) {
    const datepipe: DatePipe = new DatePipe('en-US');
    let currentdate = datepipe.transform(event[0], 'yyyy.MM.dd');
    let formattedDate = datepipe.transform(event[0], 'dd');
    // this.tranformValue = Number(formattedDate);
    // this.tranformValue = (this.tranformValue - 15) * 6;
    if (formattedDate != undefined) {
      this.selectedDay = formattedDate;
    }
    if (event[1] == undefined) {
      this.selectedYear = event[0].getFullYear();
      this.selectedMonth = event[0].getMonth();
      this.filteredModel.currentTime = currentdate;
    } else {
      let todate = datepipe.transform(event[1], 'yyyy.MM.dd');
      this.filteredModel.currentTime = null;
      this.filteredModel.fromTime = currentdate;
      this.filteredModel.toTime = todate;
    }
    this._ecoCalService.filter.next(this.filteredModel);
    // this.getCal(this.filteredModel);
  }
  async getCal(
    filter: FilterEvents,
    pageIndex: number = 0,
    pageSize: number = 0
  ) {
    const apiData = this._ecoCalService.getCalEvents(
      `pageIndex=${pageIndex}&pageSize=${pageSize}&accending=true&pageOrder=Time_`,
      filter
    );

    return await lastValueFrom(apiData);
  }

  setTable(items: CalEvent[] = new Array<CalEvent>()) {
    this.table = [...items];
  }
  closeYearModal(year: any) {
    this.selectedYear = year.getFullYear();
    this.setCalDate([year, undefined]);
    this.modalStatus = false;
  }
  srcollToToday() {
    var selectedDateLeftSide = -((2600 / 30) * (Number(this.selectedDay) - 1));

    this.itemList.nativeElement.scrollLeft = selectedDateLeftSide;
  }

  get isBrowser() {
    return AppComponent.isBrowser.value;
  }
}

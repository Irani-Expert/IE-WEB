import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Bubble, Maps, MapsTooltip } from '@syncfusion/ej2-angular-maps';
import { AppComponent } from 'src/app/app.component';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { importances } from '../importance/importances';
import { Importance } from '../importance/importance.interface';
import { Filter as FilterEvents } from './filter.model';
import { TableCalendar } from 'src/app/shared/table-calendar/table-calendar.component';
Maps.Inject(Bubble, MapsTooltip);
interface trend_data {
  currency: string;
  percent: string;
  trend: boolean;
}
@Component({
  selector: 'app-calendar-main-page',
  templateUrl: './calendar-main-page.component.html',
  styleUrls: ['./calendar-main-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarMainPageComponent {
  @ViewChild(TableCalendar, { static: false }) appTableComponent: TableCalendar;
  filteredModel = new FilterEvents();
  filter = new BehaviorSubject<FilterEvents>(new FilterEvents());
  filter$ = this.filter.asObservable();
  importances = importances;
  today = new Date();
  constructor(private ecoCalService: EcoCalService) {}
  data: trend_data[] = [
    {
      currency: 'XAU USD',
      percent: '-2',
      trend: false,
    },
    {
      currency: 'USD JPY',
      percent: '+1',
      trend: true,
    },
    {
      currency: 'GBP USD',
      percent: '-0.2',
      trend: false,
    },
    {
      currency: 'AUD USD',
      percent: '+2',
      trend: true,
    },
  ];
  ngOnInit() {
    AppComponent.changeMainBg('creamy');
  }
  async ngAfterViewInit() {
    this.filter$.subscribe({
      next: async (item) => {
        this.appTableComponent.events = [];
        await this.getCal(item);
      },
    });
  }
  ngOnDestroy() {
    AppComponent.changeMainBg('white');
  }

  async getCal(filter: FilterEvents) {
    const apiData = this.ecoCalService.getCalEvents(
      `pageIndex=0&pageSize=10&accending=true`,
      filter
    );

    return await lastValueFrom(apiData);
  }

  setImportance(item: Importance) {
    let index = this.filteredModel.importance.findIndex(
      (it) => it == item.value
    );
    if (index == -1) {
      this.filteredModel.importance.push(item.value);
      this.filter.next(this.filteredModel);
    } else {
      this.filteredModel.importance.splice(index, 1);
      this.filter.next(this.filteredModel);
    }
  }
}

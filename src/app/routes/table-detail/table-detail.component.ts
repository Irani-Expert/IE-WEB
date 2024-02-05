import { Component } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { DetaiCal } from 'src/app/classes/interfaces/detai-cal';
import { DetailCalHistory } from 'src/app/classes/interfaces/detail-cal-history';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.scss'],
})
export class TableDetailComponent {
  constructor(private ecoCalService: EcoCalService) {}
  config: PaginationInstance;
  main_data: DetaiCal;

  historyTable: DetailCalHistory[] = new Array<DetailCalHistory>();
  ngOnInit() {
    this.getData();
  }
  active_tab: number = 1;
  selectTab(selected: number) {
    this.active_tab = selected;
  }
  changePage(event: any) {
    this.config.currentPage = event;
  }
  getData() {
    this.ecoCalService
      .get('CalendarEvent/GetByID?Id=276010004')
      .subscribe((res: any) => {
        this.main_data = res.data.details;
        this.historyTable = res.data.history;
        this.main_data.changes = (
          Math.floor(
            (Number(this.main_data.actual_Value) -
              Number(this.main_data.revised_Prev_Value)) *
              10
          ) / 10
        ).toString();
        this.main_data.forecast_Value = this.main_data.forecast_Value.replace(
          'NaN',
          '--'
        );
        this.main_data.actual_Value = this.main_data.actual_Value.replace(
          'NaN',
          '--'
        );

        this.main_data.revised_Prev_Value =
          this.main_data.revised_Prev_Value.replace('NaN', '--');
        this.main_data.changes = this.main_data.changes
          .toString()
          .replace('NaN', '--');
        this.historyTable.forEach((x) => {
          x.prev_Value = x.prev_Value.replace('NaN', '--');
          x.forecast_Value = x.forecast_Value.replace('NaN', '--');
          x.actual_Value = x.actual_Value.replace('NaN', '--');
          x.revised_Prev_Value = x.revised_Prev_Value.replace('NaN', '--');
        });
        this.config = {
          currentPage: 1,
          itemsPerPage: 9!,
          id: 'custom',
          totalItems: this.historyTable.length,
        };
      });
  }
}

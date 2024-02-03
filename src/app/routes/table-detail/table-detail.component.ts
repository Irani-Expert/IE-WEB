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
        this.config = {
          currentPage: 1,
          itemsPerPage: 9!,
          id: 'custom',
          totalItems: this.historyTable.length,
        };
      });
  }
}

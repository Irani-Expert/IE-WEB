import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule, PaginationInstance } from 'ngx-pagination';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
import { CalEvent } from '../../calendar/calendar-main-page/cal-event.model';
import { PageInterface } from 'src/app/classes/page.model';

@Component({
  selector: 'pagination-control',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './pagination-control.component.html',
  styleUrls: ['./pagination-control.component.scss'],
})
export class PaginationControlComponent {
  @Output('changePage') setPage = new EventEmitter<number>();
  page: PageInterface<CalEvent[]> | null;
  config: PaginationInstance = {
    currentPage: 1,
    itemsPerPage: 16,
    id: 'custom',
    totalItems: 0,
  };
  constructor(private _ecoCalService: EcoCalService) {
    this._ecoCalService.paginatedCalendar.asObservable().subscribe({
      next: (it) => {
        this.page = it;
        this.config.totalItems = this.page?.totalCount;
      },
    });
  }
  changePage(event: number) {
    this.config.currentPage = event;
    this.setPage.emit(event);
  }
  ngAfterViewInit() {}
}

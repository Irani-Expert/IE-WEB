import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eco-cal-filters',
  templateUrl: './eco-cal-filters.component.html',
  styleUrls: ['./eco-cal-filters.component.scss'],
})
export class EcoCalFiltersComponent implements OnInit {
  stres = 'sss';
  openedList = [false, false, false, false];
  ngOnInit() {}
  openFilter(index: number) {
    this.openedList[index] = !this.openedList[index];
  }
}

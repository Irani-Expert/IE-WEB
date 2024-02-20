import { Component, EventEmitter, Output } from '@angular/core';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
interface newsList {
  title: string;
  value: number;
  isActive: boolean;
}
@Component({
  selector: 'app-sector-filter',
  templateUrl: './sector-filter.component.html',
  styleUrls: ['./sector-filter.component.scss'],
  providers: [],
})
export class SectorFilterComponent {
  @Output() sections = new EventEmitter<number[]>();
  list: newsList[] = new Array<newsList>();
  searchItem: string = '';
  searchedField: string[] = [];
  isListOpen: boolean = false;
  constructor(private ecoCalService: EcoCalService) {
    this.ecoCalService.get('Public/GetEconomicCalSector').subscribe((x) => {
      if (Array.isArray(x.data)) {
        x.data.forEach((y) => {
          y.isActive = false;
          this.list?.push(y);
        });
      }
    });
  }

  openList() {
    this.isListOpen = !this.isListOpen;
  }

  selectField(selected: number | null) {
    if (selected != null) {
      this.searchItem += this.list[selected].title;
    }
    if (this.searchItem != '') {
      this.searchedField = this.searchItem.split(',');
      this.searchItem = '';
      var data: number[] = [];
      this.searchedField.forEach((x) => {
        if (!this.searchItem.includes(x)) {
          this.searchItem += x + ',';
        }
        const index = this.list.findIndex((itemIndex) => itemIndex.title === x);
        if (index != -1) data.push(this.list[index].value);
      });
      this.sections.emit(data);
    } else this.sections.emit([]);
  }
  changeText() {
    this.selectField(null);
  }
  responsiveActive(val: number) {
    let index = this.list.findIndex((x) => x.value == val);
    this.list[index].isActive = !this.list[index].isActive;
    this.selectField(val);
  }
}

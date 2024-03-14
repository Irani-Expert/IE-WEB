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
  searchItem: string;
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

  responsiveActive(val: number, type: boolean = false) {
    let index = this.list.findIndex((x) => x.value == val);
    this.list[index].isActive = !this.list[index].isActive;
    if (type) this.list[index].isActive = true;
    this.setData();
  }
  setData() {
    var nums: number[] = [];
    this.list.forEach((x) => {
      if (x.isActive) {
        nums.push(x.value);
      }
    });
    this.sections.emit(nums);
    this.searchItem = '';
  }
}

//| filter : searchItem

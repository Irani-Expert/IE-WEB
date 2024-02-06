import { Component } from '@angular/core';
import { EcoCalService } from 'src/app/classes/services/eco-cal.service';
interface newsList {
  title: string;
  value: number;
}
@Component({
  selector: 'app-sector-filter',
  templateUrl: './sector-filter.component.html',
  styleUrls: ['./sector-filter.component.scss'],
  providers: [],
})
export class SectorFilterComponent {
  list: newsList[] = new Array<newsList>();
  searchItem: string;
  isListOpen: boolean = false;
  constructor(private ecoCalService: EcoCalService) {
    this.ecoCalService.get('Public/GetEconomicCalSector').subscribe((x) => {
      if (Array.isArray(x.data)) {
        x.data.forEach((y) => this.list?.push(y));
      }
    });
  }

  openList() {
    this.isListOpen = !this.isListOpen;
  }
  selectField(selected: number) {
    console.log(selected);
  }
}

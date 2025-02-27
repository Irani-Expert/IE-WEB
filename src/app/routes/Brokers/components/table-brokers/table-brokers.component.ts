import {
  Component,
  // , Input
} from '@angular/core';
import { BaseService } from 'src/app/classes/services/base.service';
import { environment } from 'src/environments/environment.dev';
import brokers_table from 'src/assets/broker-tables.json';

interface BrokerTable {
  rate: number;
  name: string;
  logoSrc: string;
  establishedYear: number;
  regulate: string[];
  minimumDesposit: number;
  leverage: number;
  deposit: string[];
  platform: string[];
  insurance: string;
  linkSite?: string;
  extLink?: string;
  refCode?: string;
}
class BrokerTableModel implements BrokerTable {
  rate: number = 0;
  logoSrc: string = '';
  name: string = '';
  establishedYear: number = 0;
  insurance: string = '';
  regulate: string[] = [];
  minimumDesposit: number = 0;
  leverage: number = 0;
  deposit: string[] = [];
  platform: string[] = [];
}
interface BrokerTableTh {
  title: string;
  id: number;
  engTitle: string;
}
@Component({
  selector: 'app-table-brokers',
  templateUrl: './table-brokers.component.html',
  styleUrls: ['./table-brokers.component.scss'],
})
export class TableBrokersComponent {
  contentUrl = environment.contentUrl;
  tableLoaded = false;
  tableModel = new BrokerTableModel();
  items: Array<BrokerTable> = new Array<BrokerTable>();
  tableHeaders = new Array<BrokerTableTh>();
  constructor() {
    let keys = Object.keys(this.tableModel);
    keys.forEach((it, counter) => {
      this.tableHeaders.push({ engTitle: it, id: counter + 1, title: it });
    });
    this.tableHeaders.push({
      engTitle: 'operate',
      id: this.tableHeaders.length + 1,
      title: 'بررسی و ثبت نام',
    });
  }
  ngOnInit() {
    this.items = brokers_table.items;
    this.tableLoaded = true;
  }
}

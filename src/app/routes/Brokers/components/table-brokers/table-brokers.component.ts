import {
  Component,
  // , Input
} from '@angular/core';
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
}
const tableItemInit: BrokerTable = {
  deposit: ['ریالی'],
  establishedYear: 2000,
  leverage: 400,
  logoSrc: '',
  minimumDesposit: 100,
  name: 'آلپاری',
  platform: ['MT4', 'MT5', 'NetTradeX', 'Web', 'Terminal'],
  rate: 8,
  regulate: ['BVI', 'FSC', 'LFSA', 'CySec'],
  insurance: 'حضرت ابلفظل',
};
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
  tableModel = new BrokerTableModel();
  items: Array<BrokerTable> = [
    tableItemInit,
    tableItemInit,
    tableItemInit,
    tableItemInit,
    tableItemInit,
    tableItemInit,
    tableItemInit,
    tableItemInit,
  ];
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
}

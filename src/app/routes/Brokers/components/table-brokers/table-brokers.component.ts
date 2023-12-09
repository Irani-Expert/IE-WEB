import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-brokers',
  templateUrl: './table-brokers.component.html',
  styleUrls: ['./table-brokers.component.scss'],
})
export class TableBrokersComponent {
  @Input('data') items: Array<any>;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-filter',
  templateUrl: './order-filter.component.html',
  styleUrls: ['./order-filter.component.scss'],
})
export class OrderFilterComponent {
  isChoosen: boolean = false;
  @Input() title!: string;

  clicked() {
    this.isChoosen = !this.isChoosen;
  }
}

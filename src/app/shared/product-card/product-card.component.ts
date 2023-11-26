import { Component, Input } from '@angular/core';
import { IcardData } from './card-data';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() Data!: IcardData;
  productElement: HTMLElement; // Add the 'root' property
  test: any;
  constructor() {
    // this.productElement != document.getElementById('product-card');
  }
  ngOnInit() {
    // this.productElement.style.backgroundColor = '#f44336';
  }
}

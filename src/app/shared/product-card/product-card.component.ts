import { Component, Input } from '@angular/core';
import { IcardData } from './card-data';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() Data!: IcardData;
  productElement: HTMLElement; // Add the 'root' property
  test: any;
  contentUrl = environment.contentUrl;
  constructor() {
    // this.productElement != document.getElementById('product-card');
  }
  ngOnInit() {
    // this.productElement.style.backgroundColor = '#f44336';
  }
}

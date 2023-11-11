import { Component, Input } from '@angular/core';
import { IcardData } from './card-data';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() Data!: IcardData;
  ngOnInit() {}
}

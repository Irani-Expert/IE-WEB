import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'properties',
  templateUrl: './product-properties.component.html',
  standalone: true,
  styleUrls: ['./product-properties.component.scss'],
  imports: [CommonModule],
})
export class ProductProperties {
  @Input('verified') verified: boolean = false;
  @Input('guarantee') guarantee: boolean = false;
}

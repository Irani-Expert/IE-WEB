import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discount-banner',
  templateUrl: './discount-banner.component.html',
  styleUrls: ['./discount-banner.component.scss'],
})
export class DiscountBannerComponent {
  @Input() response: boolean = false;
}

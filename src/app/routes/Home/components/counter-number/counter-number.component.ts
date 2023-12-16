import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-number',
  templateUrl: './counter-number.component.html',
  styleUrls: ['./counter-number.component.scss'],
})
export class CounterNumberComponent {
  value: number = 0;
  ngOnInit() {
    this.value = 9;
  }
  sendElementInfo(element: any): void {}
}

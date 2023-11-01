import { Component } from '@angular/core';

@Component({
  selector: 'app-autoplay-slider',
  templateUrl: './autoplay-slider.component.html',
  styleUrls: ['./autoplay-slider.component.scss'],
})
export class AutoplaySliderComponent {
  items: string[] = [
    'Card 1',
    'Card 2',
    'Card 3',
    'Card 4',
    'Card 1',
    'Card 2',
    'Card 3',
    'Card 4',
    'Card 1',
    'Card 2',
    'Card 3',
    'Card 4',
  ];
  ngOnInit() {
    // this.items = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];
    // setInterval(() => {
    //   this.items = [...this.items.slice(1), this.items[0]];
    // }, 5000); // Adjust the interval duration as needed
  }
}

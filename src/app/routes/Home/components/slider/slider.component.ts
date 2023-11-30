import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  arr: any[] = [];
  @Output() changednum = new EventEmitter<number>();
  @Input() choosenSlide!: number; // decorate the property with @Input()

  ngOnInit() {
    var number = 2;

    for (var i = 0; i < number; i++) this.arr.push(i + 1);
  }
  changeSlide(slide: number) {
    this.choosenSlide = slide;
    this.changednum.emit(slide);
  }
}

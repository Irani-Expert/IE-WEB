import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent {
  @Output() scrollClick1 = new EventEmitter();
  @Output() scrollClick2 = new EventEmitter();
  @Output() scrollClick3 = new EventEmitter();
  @Output() scrollClick4 = new EventEmitter();
  @Output() scrollClick5 = new EventEmitter();


  onClick1(event : any ) {
    this.scrollClick1.emit();
  }
  onClick2(event : any ) {
    this.scrollClick2.emit();
  }
  onClick3(event : any ) {
    this.scrollClick3.emit();
  }
  onClick4(event : any ) {
    this.scrollClick4.emit();
  }
  onClick5(event : any ) {
    this.scrollClick5.emit();
  }

}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent {
  @Output() scrollClick = new EventEmitter();


  onClick(event : any ) {
    console.log("child clieck");
    this.scrollClick.emit();
  }
}

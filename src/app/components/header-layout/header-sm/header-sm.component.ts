import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-sm',
  templateUrl: './header-sm.component.html',
  styleUrls: ['./header-sm.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        opacity:0,
        display:'none'
      })),
      state('out', style({
        opacity:1
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]

})

export class HeaderSmComponent {

  activeNavBar:boolean=false;
  menuState:string = 'in';

  openandClose(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

}

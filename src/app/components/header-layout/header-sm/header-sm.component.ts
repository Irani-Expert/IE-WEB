import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-sm',
  templateUrl: './header-sm.component.html',
  styleUrls: ['./header-sm.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        right: '20%'
      })),
      state('out', style({
        right: '100%',
        display:'none'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]

})

export class HeaderSmComponent {

  activeNavBar:boolean=false;
  menuState:string = 'out';


  openandClose(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    

  }
}

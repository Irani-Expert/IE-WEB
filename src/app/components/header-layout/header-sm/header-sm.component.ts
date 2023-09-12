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
  link:number=1;
 rows:any[]=[
  {id:0,Name:'خانه'},
  {id:1,Name:'جستجو'},
  {id:2,Name:'فروشگاه'},
  {id:3,Name:'تقویم اقتصادی'},
  {id:4,Name:'مجله ایرانی اکسپرت'},
  {id:5,Name:'چرا ما؟'},
 ]
  activeNavBar:boolean=false;
  menuState:string = 'in';

  openandClose(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
choosenLink(id:number){
  this.link=id
}
}

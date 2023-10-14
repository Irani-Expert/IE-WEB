import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { Header } from '../header';
import { NavigationService } from 'src/app/classes/services/navigation.service';
import { Utils } from 'src/app/classes/utils';

@Component({
  selector: 'app-header-sm',
  templateUrl: './header-sm.component.html',
  styleUrls: ['./header-sm.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          opacity: 0,
          transform: 'translateX(-300%)',
        })
      ),
      state(
        'out',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class HeaderSmComponent extends Header {
  constructor(navService: NavigationService) {
    super(navService);
  }

  link: number = 1;
  activeNavBar: boolean = false;
  menuState: string = 'in';

  ngOninit() {
    this.updateMenu();
  }
  openandClose() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  choosenLink(id: number) {
    this.link = id;
    this.menuState = 'in';
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateMenu();
  }

  updateMenu() {
    if (!Utils.isSmLaptop()) {
      this.menuState = 'in';
    }
  }
}

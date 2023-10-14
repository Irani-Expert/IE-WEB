import { Component } from '@angular/core';
import { IMenuItem } from 'src/app/classes/menu-item';
import { NavigationService } from 'src/app/classes/services/navigation.service';
import { Header } from '../header';

@Component({
  selector: 'app-header-lg',
  templateUrl: './header-lg.component.html',
  styleUrls: ['./header-lg.component.scss'],
})
export class HeaderLgComponent extends Header {
  hoveredItem = -1;
  nav: IMenuItem[] = new Array<IMenuItem>();
  constructor(navService: NavigationService) {
    super(navService);
  }
  onHover(index: number) {
    this.hoveredItem = index;
  }
  unHovered() {
    this.hoveredItem = -1;
  }
}

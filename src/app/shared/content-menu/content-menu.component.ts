import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ScrollService } from './service/scroll.service';

@Component({
  selector: 'app-content-menu',
  templateUrl: './content-menu.component.html',
  styleUrls: ['./content-menu.component.scss'],
})
export class ContentMenuComponent {
  menuOpen: boolean = false;
  iconActive: boolean = false;
  @Input('wid') wi: number;

  @ViewChild('listElem') listElem: ElementRef;
  @ViewChild('listElemHide') listElemHide: ElementRef;
  @Input('data') listElems: Array<any>;

  toggleMenu() {
    debugger;
    this.wi;
    this.menuOpen = !this.menuOpen;
    this.listElem.nativeElement.classList.toggle('show-menu');
    this.iconActive = !this.iconActive;
    // this.listElemHide.nativeElement.classList.toggle('hide-menu');
  }

  // =======[اسکرول]======
  constructor(private scrollService: ScrollService) {}

  scrollToId(id: string) {
    this.scrollService.scrollToElementById(id);
  }

  @Output('scroll') isEmited = new EventEmitter<boolean>();

  scrollToView() {
    this.isEmited.emit(true);
  }
  // ======[رسپانسیو]====
  @Input('data2') color: string;

  NavbarsStatus(type: number) {
    this.openNav = type;
  }
  openNav: number = 0;
}

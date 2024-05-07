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
    this.wi;
    this.menuOpen = !this.menuOpen;
    this.listElem.nativeElement.classList.toggle('show-menu');
    this.iconActive = !this.iconActive;
    // this.listElemHide.nativeElement.classList.toggle('hide-menu');
  }

  // =======[اسکرول]======
  element :HTMLHeadingElement;
  constructor(private scrollService: ScrollService) {}

  scrollToId(id: string) {
    // const scrollElementH2 = document.getElementsByTagName('h2')
    // for (let index = 0; index < scrollElementH2.length; index++) {
    //   this.element = scrollElementH2[index];
    //   this.element.id = `h2-${index}`
    // }
    // this.scrollService.scrollToElement(this.element);
    
    this.scrollService.scrollToElementById(id);
  }

  @Output('scroll') isEmited = new EventEmitter<boolean>();

  scrollToView() {
    this.isEmited.emit(true);
  }
  // ======[رسپانسیو]====

  NavbarsStatus(type: number) {
    this.openNav = type;
  }
  openNav: number = 0;
}

import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-menu',
  templateUrl: './content-menu.component.html',
  styleUrls: ['./content-menu.component.scss']
})
export class ContentMenuComponent {
  menuOpen: boolean = false;
  iconActive : boolean = false;

  @ViewChild('listElem') listElem: ElementRef;
  @ViewChild('listElemHide') listElemHide: ElementRef;
  @Input('data') listElems : Array<any>;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.listElem.nativeElement.classList.toggle('show-menu');
    this.iconActive = !this.iconActive;
    // this.listElemHide.nativeElement.classList.toggle('hide-menu');

  }

}

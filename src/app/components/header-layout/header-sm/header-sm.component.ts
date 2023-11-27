import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Header } from '../header';
import { NavigationService } from 'src/app/classes/services/navigation.service';
import { Utils } from 'src/app/classes/utils';
import { ModalService } from 'src/app/shared/modal/services/modal.service';
import { AppComponent } from 'src/app/app.component';
import { HeaderLayoutComponent } from '../header-layout.component';

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
  @Output('modal') openingModal: EventEmitter<string> = new EventEmitter(false);
  constructor(navService: NavigationService, private modal: ModalService) {
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
    if (AppComponent.isBrowser.value) {
      if (!Utils.isLaptopSm()) {
        this.menuState = 'in';
      }
    }
  }
  openModal(type: string) {
    this.openingModal.emit(type);
    this.modal.open().subscribe({
      next: (action) => {
        console.log(action);
      },
      complete: () => {
        HeaderLayoutComponent.modalStatus = false;
      },
    });
    HeaderLayoutComponent.modalStatus = true;
  }
}

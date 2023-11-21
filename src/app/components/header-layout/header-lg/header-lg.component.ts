import { Component, EventEmitter, Output } from '@angular/core';
import { IMenuItem } from 'src/app/classes/interfaces/menu-item';
import { NavigationService } from 'src/app/classes/services/navigation.service';
import { Header } from '../header';
import { ModalService } from 'src/app/shared/modal/services/modal.service';

@Component({
  selector: 'app-header-lg',
  templateUrl: './header-lg.component.html',
  styleUrls: ['./header-lg.component.scss'],
})
export class HeaderLgComponent extends Header {
  @Output('modal') openingModal: EventEmitter<string> = new EventEmitter(false);
  hoveredItem = -1;
  nav: IMenuItem[] = new Array<IMenuItem>();
  constructor(navService: NavigationService, private modal: ModalService) {
    super(navService);
  }
  onHover(index: number) {
    this.hoveredItem = index;
  }
  unHovered() {
    this.hoveredItem = -1;
  }
  openModal(type: string) {
    this.openingModal.emit(type);
    this.modal.open().subscribe((action) => {
      console.log(action);
    });
  }
}

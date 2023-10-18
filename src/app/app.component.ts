import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlatformService } from './classes/services/platform.service';
import { ModalService } from './shared/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  modalStatus;
  static isBrowser = new BehaviorSubject<boolean>(false);
  title = 'IE-WEB';
  constructor(private platform: PlatformService, private modal: ModalService) {
    this.modalStatus = this.modal.modalStatusSubject;

    if (this.platform.isPlatformBrowser()) AppComponent.isBrowser.next(true);
  }
}

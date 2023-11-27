import { Component, HostListener } from '@angular/core';
import { PlatformService } from 'src/app/classes/services/platform.service';
import { Utils } from 'src/app/classes/utils';
// import { ModalService } from 'src/app/shared/modal/services/modal.service';

enum Device {
  Mobile = 'sm',
  Laptop = 'lg',
}
@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss'],
})
export class HeaderLayoutComponent {
  device = 'lg';
  modalView = '';
  static modalStatus: boolean = false;
  get _modalStatus() {
    return HeaderLayoutComponent.modalStatus;
  }
  constructor(private platform: PlatformService) {
    // this.modalStatus = this.modal.modalStatusSubject;
  }
  ngOnInit() {
    this.updateDeviceValue();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateDeviceValue();
  }
  updateDeviceValue() {
    if (this.platform.isPlatformBrowser()) {
      if (Utils.isLaptopSm()) {
        this.device = Device.Mobile;
      } else {
        this.device = Device.Laptop;
      }
    }
  }
  openedModal(event: any) {
    this.modalView = event;
  }
}

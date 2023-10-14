import { Component, HostListener } from '@angular/core';
import { Utils } from 'src/app/classes/utils';
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
  deviceSize = Device;
  device = '';

  ngOnInit() {
    this.updateDeviceValue();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateDeviceValue();
  }
  updateDeviceValue() {
    if (Utils.isSmLaptop()) {
      this.device = this.deviceSize.Mobile;
    } else {
      this.device = this.deviceSize.Laptop;
    }
  }
}

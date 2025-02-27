import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { SwitchItem } from '../switch/switch.interface';
import { smoothHeight } from 'src/app/classes/animation';
import { AppComponent } from 'src/app/app.component';
import { Utils } from 'src/app/classes/utils';
import { SwitchComponent } from '../switch/switch.component';
import { ILottieConfig } from '../lottie/lottie-config';
enum View {
  Signup = 'sign-up',
  Login = 'login',
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [smoothHeight],
})
export class AuthComponent {
  lottieConfig: ILottieConfig = {
    width: '100%',
    max_w: '320px',
    height: 'auto',
    path: 'assets/lottie/auth.json',
  };
  @ViewChild(SwitchComponent, { static: false })
  switchComponent: SwitchComponent;
  changingPassword: boolean = false;
  flexDirection: 'row' | 'column-reverse' = 'row';
  changed = false;
  @Input('view') view!: string;
  switchItems: SwitchItem[] = [
    {
      id: 0,
      title: 'ورود',
      bgColor: '#fff',
      name: 'login',
    },
    {
      id: 1,
      title: 'عضویت',
      bgColor: '#fff',
      name: 'sign-up',
    },
  ];
  constructor() {}
  ngOnInit() {
    this.updateDeviceValue();
  }
  changePasswordStatus(event: unknown) {
    this.changed = !this.changed;
    if (typeof event == 'boolean') this.changingPassword = event;
  }
  changeView() {
    this.changed = !this.changed;
    this.view == View.Signup
      ? (this.view = View.Login)
      : (this.view = View.Signup);
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateDeviceValue();
  }
  updateDeviceValue() {
    if (AppComponent.isBrowser) {
      if (Utils.isLaptopSm()) this.flexDirection = 'column-reverse';
      else this.flexDirection = 'row';
    }
  }
  changeViewFromSigup() {
    this.switchComponent.changeActiveItem(this.switchItems[0]);
  }
}

import { Component, Input } from '@angular/core';
import { SwitchItem } from '../switch/switch.interface';
enum View {
  Signup = 'sign-up',
  Login = 'login',
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
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
  ngOnInit() {}
  changeView() {
    this.view == View.Signup
      ? (this.view = View.Login)
      : (this.view = View.Signup);
  }
}

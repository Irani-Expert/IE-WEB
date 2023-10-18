import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { SwitchComponent } from '../switch/switch.component';
const components = [AuthComponent, SignupComponent, LoginComponent];
@NgModule({
  imports: [CommonModule],
  declarations: [components, SwitchComponent],
  exports: [components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class AuthModule {}

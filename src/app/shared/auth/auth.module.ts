import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { SwitchComponent } from '../switch/switch.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SmoothHeightDirective } from 'src/app/classes/directives/smooth-height.directive';
import { Toggler } from '../toggler/toggler.component';
const components = [AuthComponent, SignupComponent, LoginComponent];
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SmoothHeightDirective, Toggler],
  declarations: [components, SwitchComponent],
  exports: [components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class AuthModule {}

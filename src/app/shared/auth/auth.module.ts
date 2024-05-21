import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { SwitchComponent } from '../switch/switch.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SmoothHeightDirective } from 'src/app/classes/directives/smooth-height.directive';
import { Toggler } from '../toggler/toggler.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { SharedModule } from '../shared.module';
// import {MatRadioModule} from '@angular/material/radio';

const components = [
  AuthComponent,
  SignupComponent,
  LoginComponent,
  ForgetPasswordComponent,
];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SmoothHeightDirective,
    Toggler,
    NgOtpInputModule,
    SharedModule,
    // MatRadioModule
  ],
  declarations: [components, SwitchComponent],
  exports: [components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class AuthModule {}

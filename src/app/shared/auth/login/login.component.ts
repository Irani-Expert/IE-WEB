import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup
  constructor() {
    this.form = new FormGroup({
      username:new FormControl<string | null>(null, Validators.required),
      password:new FormControl<string | null>(null, Validators.required),
    })
  }
}

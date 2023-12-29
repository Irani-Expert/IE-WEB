import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landig-money-m',
  templateUrl: './landig-money-m.component.html',
  styleUrls: ['./landig-money-m.component.scss'],
})
export class LandigMoneyMComponent {
  constructor(private _meta: Meta) {
    this._meta.addTag({
      name: 'description',
      content: '',
    });
    this._meta.addTag({
      name: 'author',
      content: '',
    });
    this._meta.addTag({
      name: 'keywords',
      content: '',
    });
  }
}

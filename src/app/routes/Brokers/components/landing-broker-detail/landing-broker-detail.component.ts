import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-broker-detail',
  templateUrl: './landing-broker-detail.component.html',
  styleUrls: ['./landing-broker-detail.component.scss'],
})
export class LandingBrokerDetailComponent {
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

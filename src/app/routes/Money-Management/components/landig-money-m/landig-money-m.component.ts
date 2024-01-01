import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-landig-money-m',
  templateUrl: './landig-money-m.component.html',
  styleUrls: ['./landig-money-m.component.scss'],
})
export class LandigMoneyMComponent {
  mainClass =
    'm-0 p-0 gap-0 flex flex-col min-h-screen overflow-hidden lg:overflow-y-hidden lg:overflow-x-auto';
  main: HTMLElement;
  constructor(private _meta: Meta) {
    if (AppComponent.isBrowser.value) {
      this.main = document.body.getElementsByTagName('main')[0];
      this.main.className = `bg-[#FAFAFA] ${this.mainClass}`;
    }
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
  ngOnDestroy() {
    this.main.className = this.mainClass;
  }
}

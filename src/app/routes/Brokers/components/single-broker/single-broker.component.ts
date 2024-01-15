import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
class BrokerModel {
  isCent: boolean;
  title: string;
  telegramSupportLink: string;
}
@Component({
  selector: 'app-single-broker',
  templateUrl: './single-broker.component.html',
  styleUrls: ['./single-broker.component.scss'],
})
export class SingleBrokerComponent {
  brokerData: BrokerModel = {
    isCent: true,
    title: 'آلپاری',
    telegramSupportLink: 'sad',
  };
  mainClass =
    'm-0 p-0 gap-0 flex flex-col min-h-screen overflow-hidden lg:overflow-y-hidden lg:overflow-x-auto';
  main: HTMLElement;
  constructor() {
    if (AppComponent.isBrowser.value) {
      this.main = document.body.getElementsByTagName('main')[0];
      this.main.className = `bg-white lg:bg-[#FAFAFA] ${this.mainClass}`;
    }
  }
  ngOnDestroy() {
    if (AppComponent.isBrowser.value) {
      this.main.className = this.mainClass;
    }
  }
}

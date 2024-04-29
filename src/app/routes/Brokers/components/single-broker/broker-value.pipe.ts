import { Directive, Input, OnInit } from '@angular/core';
import { SingleBrokerUL } from './single-broker.model';
import { AppComponent } from 'src/app/app.component';
interface Data {
  data: { key: keyof SingleBrokerUL; value: string | boolean | number };
  el: string;
}
@Directive({
  selector: '[brokerValue]',
  standalone: true,
})
export class BrokerValuePipe implements OnInit {
  @Input('brokerValue') data: Data;
  constructor() {}
  ngOnInit(): void {
    if (AppComponent.isBrowser.value) {
      const x = document.getElementById(this.data.el);

      let type = this.switchCloneMode(this.data);
      //  Telegram
      //  Simple Text
      //  true && false

      let data = this.cloneNode(type, x!.id);
      if (type == 'simple-text') {
        data.lastChild.outerText = this.data.data.value;
      }
      x?.appendChild(data);
      console.log('not denied');

      // this.sortList();
    } else {
      console.log('Init Denied');
    }
  }

  cloneNode(id: string, parentId: string) {
    const t = document.getElementById(id);

    let clone: any = t!.cloneNode(true);

    clone.id = clone.id + '-' + parentId;
    clone!.className = 'flex';
    return clone;
  }

  switchCloneMode(data: Data) {
    let result = '';
    let value = data.data.value;
    if (typeof value == 'boolean') {
      if (value == false) {
        result = 'check-false';
        return result;
      } else {
        result = 'check-true';
        return result;
      }
    }
    if (data.data.key == 'telegramSupportLink') {
      result = 'telegram-link';
    } else {
      result = 'simple-text';
    }
    return result;
  }
  // sortList() {
  //   let ul = document.getElementById('broker-ul');

  // }
}

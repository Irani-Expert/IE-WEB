import { Directive, Input, OnInit } from '@angular/core';
interface Data {
  data: { key: keyof BrokerModel; value: string | boolean | number };
  el: string;
}
interface BrokerModel {
  isCent: boolean;
  title: string;
  telegramSupportLink: string;
}
@Directive({
  selector: '[brokerValue]',
  standalone: true,
})
export class BrokerValuePipe implements OnInit {
  @Input('brokerValue') data: Data;
  constructor() {}
  ngOnInit(): void {
    const x = document.getElementById(this.data.el);
    console.log(x);
    // const j = document.getElementById('check-true');
    // const f = document.getElementById('check-false');
    // const s = document.getElementById('telegram-link');

    let type = this.switchCloneMode(this.data);
    //  Telegram
    //  Simple Text
    //  true && false

    let data = this.cloneNode(type, x!.id);
    if (type.indexOf('check') == -1) {
      data.lastChild.outerText = this.data.data.value;
    }
    x?.appendChild(data);
  }

  cloneNode(id: string, parentId: string) {
    const t = document.getElementById(id);

    let clone: any = t!.cloneNode(true);

    clone.id = clone.id + '-' + parentId;
    clone!.className = 'block';
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
    if (value == 'telegramSupportLink') {
      result = 'telegram-link';
    } else {
      result = 'simple-text';
    }
    return result;
  }
}

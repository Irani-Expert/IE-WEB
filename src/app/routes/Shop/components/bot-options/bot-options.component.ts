import { Component, Input } from '@angular/core';
import { config  } from './types';
import { Facility } from 'src/app/classes/interfaces/facility.interface';


@Component({
  selector: 'app-bot-options',
  templateUrl: './bot-options.component.html',
  styleUrls: ['./bot-options.component.scss']
})
export class BotOptionsComponent {  
// =========[اسکرول]=========
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior:"smooth"});
  }
// ======================[FAQ]==========

@Input() options : any;
@Input() faq: Facility[];
config: config;


async ngOnInit() {

  this.config = this.mergeConfig(this.options);
}

mergeConfig(options: config) {
  const config = {
    // ========[selector: '#accordion']===========
    multi: true
  };

  return { ...config, ...options };
}

toggle(index: number , icon: boolean) {
  // ====================[submenu]========
  if (!this.config.multi) {
    this.faq.filter(
      (faq, i) => i !== index && faq.isActive
    );
  }
  // ====================[active]========
  this.faq[index].isActive = !this.faq[index].isActive;
}

}

import { Component, Input } from '@angular/core';
import { config } from './types';
import { Facility } from 'src/app/classes/interfaces/facility.interface';

@Component({
  selector: 'app-bot-options',
  templateUrl: './bot-options.component.html',
  styleUrls: ['./bot-options.component.scss'],
})
export class BotOptionsComponent {
  // =========[اسکرول]=========
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  // ======================[FAQ]==========
  options: config = { multi: true };
  @Input() data: Facility[] = new Array<Facility>();
  config: config;

  async ngOnInit() {
    this.data.forEach((it, i) => {
      if (i == 0) it.isActive = true;
      else it.isActive = false;
    });
    this.config = this.mergeConfig(this.options);
  }
  mergeConfig(options: config) {
    const config = {
      // ========[selector: '#accordion']===========
      multi: true,
    };

    return { ...config, ...options };
  }

  toggle(index: number, icon: boolean) {
    // ====================[submenu]========
    if (!this.config.multi) {
      this.data.filter((item, i) => i !== index && item.isActive);
    }
    // ====================[active]========
    this.data[index].isActive = !this.data[index].isActive;
  }
}

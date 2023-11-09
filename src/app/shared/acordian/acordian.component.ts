import { Component , OnInit , Input } from '@angular/core';
import { config , Menu  } from './types';

@Component({
  selector: 'app-acordian',
  templateUrl: './acordian.component.html',
  styleUrls: ['./acordian.component.scss']
})
export class AcordianComponent implements OnInit {

  @Input() options : any;
  @Input() menus: Menu[];
  config: config;
  
  ngOnInit() {

    this.config = this.mergeConfig(this.options);
  }

  mergeConfig(options: config) {
    const config = {
      // ========[selector: '#accordion']===========
      multi: true
    };

    return { ...config, ...options };
  }

  toggle(index: number) {
    // ====================[submenu]========
    if (!this.config.multi) {
      this.menus.filter(
        (menu, i) => i !== index && menu.active
      );
      // .forEach(menu => menu.active = !menu.active);
    }
    // ====================[active]========
    this.menus[index].active = !this.menus[index].active;
  }

}

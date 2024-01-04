import { Component , OnInit , Input } from '@angular/core';
import { config  } from './types';
import { FAQ } from 'src/app/routes/Home/components/questions/interfaces/faq-interfce';

@Component({
  selector: 'app-acordian',
  templateUrl: './acordian.component.html',
  styleUrls: ['./acordian.component.scss']
})
export class AcordianComponent implements OnInit {

  @Input() options : any;
  @Input() faq: FAQ[];
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

  toggle(index: number , icon: boolean) {
    // ====================[submenu]========
    if (!this.config.multi) {
      this.faq.filter(
        (faq, i) => i !== index && faq.active
      );
      // .forEach(menu => menu.active = !menu.active);
    }
    // ====================[active]========
    this.faq[index].active = !this.faq[index].active;
  }

}

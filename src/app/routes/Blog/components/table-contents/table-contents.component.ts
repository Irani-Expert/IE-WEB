import { Component, Input } from '@angular/core';
import { TableInterFace } from './interface/table-interface';
import { config } from 'src/app/shared/acordian/types/config';

@Component({
  selector: 'app-table-contents',
  templateUrl: './table-contents.component.html',
  styleUrls: ['./table-contents.component.scss']
})
export class TableContentsComponent {
  @Input() options : any;
  @Input() faq: TableInterFace[];
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

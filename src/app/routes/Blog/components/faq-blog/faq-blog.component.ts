import { Component, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FAQ } from 'src/app/routes/Home/components/questions/interfaces/faq-interfce';
import { config } from 'src/app/shared/acordian/types';

@Component({
  selector: 'app-faq-blog',
  templateUrl: './faq-blog.component.html',
  styleUrls: ['./faq-blog.component.scss']
})
export class FaqBlogComponent {
@Input('data') data : FAQ[];
@Input() options : any;
loading = false;
config: config;
ngOnInit() {
  this.config = this.mergeConfig(this.options);
  if (AppComponent.isBrowser.value){
    this.loading = true;
  }
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
    this.data.filter(
      (faq, i) => i !== index && faq.isActive
    );
    // .forEach(menu => menu.active = !menu.active);
  }
  // ====================[active]========
  this.data[index].isActive = !this.data[index].isActive;
}

}

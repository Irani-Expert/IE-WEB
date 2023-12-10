import { Component, HostListener } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Utils } from 'src/app/classes/utils';

@Component({
  selector: 'app-landing-blog',
  templateUrl: './landing-blog.component.html',
  styleUrls: ['./landing-blog.component.scss']
})
export class LandingBlogComponent {

  // =======================[رسپانسیو]==========
  
  device: 'sm' | 'lg' = 'lg';
  ngOnInit(){
    this.updateDeviceValue();

  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateDeviceValue();
  }
  updateDeviceValue() {
    if (AppComponent.isBrowser.value) {
      if (Utils.isMobileL()) {
        this.device = 'sm';
      } else {
        this.device = 'lg';
      }
    }
  }

  // =================[فیلتر]=============
  category : Array<any> = [
    {
      name:'جدیدترین مطالب',
      icon :'assets/img/icon-filter(blog)-1.svg',
    },
    {
      name:' آموزش ها',
      icon :'assets/img/icon-filter(blog)-7.svg',
    },
    {
      name:'معرفی کتاب ',
      icon :'assets/img/icon-filter(blog)-2.svg',
    },
    {
      name:' معرفی بروکرها',
      icon :'assets/img/icon-filter(blog)-3.svg',
    },
    {
      name:' پادکست های ایرانی اکسپرت',
      icon :'assets/img/icon-filter(blog)-4.svg',
    },
    {
      name:'فارکس ',
      icon :'assets/img/icon-filter(blog)-5.svg',
    },
    {
      name:'ارز دیجیتال ',
      icon :'assets/img/icon-filter(blog)-5.svg',
    }, {
      name:'ربات معامله گر ',
      icon :'assets/img/icon-filter(blog)-6.svg',
    },
  ]
}

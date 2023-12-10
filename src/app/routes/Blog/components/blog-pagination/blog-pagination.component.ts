import { Component, HostListener } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { AppComponent } from 'src/app/app.component';
import { Utils } from 'src/app/classes/utils';

@Component({
  selector: 'app-blog-pagination',
  templateUrl: './blog-pagination.component.html',
  styleUrls: ['./blog-pagination.component.scss']
})
export class BlogPaginationComponent {
  meals = [1,2,3,4,5,6,4,7,98,9,5,64,64,,6514,654,48,984,984,894,948,984,984,984,]
  config: PaginationInstance = {
      id: 'custom',
      itemsPerPage: 10,
      currentPage: 1
  };
  idActive(event:any){ 
    this.config.currentPage = event    
  }
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

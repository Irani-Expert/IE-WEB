import { Component } from '@angular/core';
import { TableInterFace } from '../table-contents/interface/table-interface';
import { config } from 'src/app/shared/acordian/types';

@Component({
  selector: 'app-landing-blog-detail',
  templateUrl: './landing-blog-detail.component.html',
  styleUrls: ['./landing-blog-detail.component.scss']
})
export class LandingBlogDetailComponent {
  table : TableInterFace[] = [
    {
      active : false,
      title : 'تیتر1',
      content : 'زیرتیتر1',
    },
    {
      active : false,
      title : 'تیتر2',
      content : 'زیرتیتر2',
    }
    ,{
      active : false,
      title : 'تیتر3',
      content : 'زیرتیتر3',
    },
  ]
  options: config = { multi: false };

  // =================[فیلتر]=============
  category : Array<string> = ['درامد دلاری', 'ربات معامله گر atm' , 'lorem1' , 'lorem2' , 'lorem3' , 'lorem4'
  ]
}

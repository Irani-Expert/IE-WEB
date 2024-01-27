import { Component, HostListener, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Blog } from 'src/app/classes/interfaces/blog.interface';
import { Utils } from 'src/app/classes/utils';
import { environment } from 'src/environments/environment.dev';
class BlogModel implements Blog {
  createDate: string = '';
  isRTL: boolean = false;
  id: number = 0;
  title: string = '';
  updateDate: string = '';
  updatedByFirstName: string = '';
  updatedByLastName: string = '';
  cardImagePath: string = '';
  viewsCount: number = 0;
  authorIconPath: string = '';
  studyTime: string = '';
  publishDate: string = '';
  browserTitle: string = '';
  brief: string = '';
  favoriteCount : number = 0;
}
@Component({
  selector: 'app-blog-cart',
  templateUrl: './blog-cart.component.html',
  styleUrls: ['./blog-cart.component.scss'],
})
export class BlogCartComponent {

  @Input('linkType') linkType : number;
  link : string = '';


  loading: boolean = true;

  contentUrl = environment.contentUrl;
  url = '';
  @Input('data') item: Blog = new BlogModel();

  like : number;
  // =======================[رسپانسیو]==========

  device: 'sm' | 'lg' = 'lg';
  ngOnInit() {
    this.updateDeviceValue();
    this.loading = false;
    this.getUrl();
    if( this.item.favoriteCount ==  null){
      this.like = 25
    }
    else {
      this.like = this.item.favoriteCount;
    }
  }
  getUrl(){
    let language = this.item.isRTL ? 'fa' : 'en';
    if( this.linkType == 2 ){
      this.link = '../../';
    }
    this.url = this.item.browserTitle.split(' ').join('_') + '/' + language;
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
}

import { Component, HostListener, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Blog } from 'src/app/classes/interfaces/blog.interface';
import { Utils } from 'src/app/classes/utils';
import { environment } from 'src/environments/environment.dev';
class BlogModel implements Blog {
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
}
@Component({
  selector: 'app-blog-cart',
  templateUrl: './blog-cart.component.html',
  styleUrls: ['./blog-cart.component.scss'],
})
export class BlogCartComponent {
  contentUrl = environment.contentUrl;
  @Input('data') item: Blog = new BlogModel();
  @Input('item') items: any;

  // =======================[رسپانسیو]==========

  device: 'sm' | 'lg' = 'lg';
  ngOnInit() {
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
}

import { Component, HostListener, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Blog } from 'src/app/classes/interfaces/blog.interface';
import { Utils } from 'src/app/classes/utils';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent {
  loading: boolean = true;
  @Input('data') items: Blog[];
  popularBlog = new Array<Blog>();
  // =======================[رسپانسیو]==========
  device: 'sm' | 'lg' = 'lg';
  ngOnInit() {
    this.updateDeviceValue();
    this.fillPopularItems(this.items);
    this.loading = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateDeviceValue();
  }
  updateDeviceValue() {
    if (this.isBrowser) {
      if (Utils.isMobileL()) {
        this.device = 'sm';
      } else {
        this.device = 'lg';
      }
    }
  }

  fillPopularItems(items: Blog[]) {
    let normalArr = [...items];

    let sortedArr = normalArr
      .slice()
      .sort((a, b) => {
        return a.viewsCount - b.viewsCount;
      })
      .reverse();

    this.popularBlog = sortedArr.slice(0, 5);
  }

  get isBrowser() {
    return AppComponent.isBrowser.value;
  }
}

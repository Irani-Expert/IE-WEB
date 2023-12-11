import { Component, HostListener } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Utils } from 'src/app/classes/utils';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {
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
  // <!-- ========================[ایتم عکس]============== -->
  color ='#0066FF'

}

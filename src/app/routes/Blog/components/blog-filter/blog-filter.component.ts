import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Utils } from 'src/app/classes/utils';

@Component({
  selector: 'app-blog-filter',
  templateUrl: './blog-filter.component.html',
  styleUrls: ['./blog-filter.component.scss']
})
export class BlogFilterComponent {
  @Input() category : Array<any> ;
  @Input() categoryDetail : Array<any> ;
  @ViewChild('sticky') myStickyElement: ElementRef
  sticked:boolean = false

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    
    if(AppComponent.isBrowser.value) {
      
      if(Utils.scrollTracker() > this.myStickyElement.nativeElement.offsetTop) {
        this.sticked =true
      }
      else {
        this.sticked = false

      }
    }
  }
}

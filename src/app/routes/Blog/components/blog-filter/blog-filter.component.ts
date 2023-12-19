import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Utils } from 'src/app/classes/utils';

@Component({
  selector: 'app-blog-filter',
  templateUrl: './blog-filter.component.html',
  styleUrls: ['./blog-filter.component.scss'],
})
export class BlogFilterComponent {
  @Input() category: Array<any>;
  @Input() categoryDetail: Array<any>;

  @Output('result') emitter = new EventEmitter<number>();
  @ViewChild('sticky') myStickyElement: ElementRef;
  sticked: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (AppComponent.isBrowser.value) {
      if (
        Utils.scrollTracker() > this.myStickyElement.nativeElement.offsetTop
      ) {
        this.sticked = true;
      } else {
        this.sticked = false;
      }
    }
  }
  selectCategroy(it: any) {
    this.emitter.emit(it.id);
  }
}

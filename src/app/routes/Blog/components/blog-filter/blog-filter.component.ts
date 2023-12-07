import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-filter',
  templateUrl: './blog-filter.component.html',
  styleUrls: ['./blog-filter.component.scss']
})
export class BlogFilterComponent {
  @Input() category : Array<any> ;
  @Input() categoryDetail : Array<any> ;

}

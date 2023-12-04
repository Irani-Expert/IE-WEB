import { Component, Input } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-blog-pagination',
  templateUrl: './blog-pagination.component.html',
  styleUrls: ['./blog-pagination.component.scss']
})
export class BlogPaginationComponent {
  @Input('data') meals: Array<any> = new Array<any>;

  public config: PaginationInstance = {
      id: 'custom',
      itemsPerPage: 10,
      currentPage: 1
  };
}

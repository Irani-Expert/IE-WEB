import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/classes/interfaces/blog.interface';
class BlogModel implements Blog {
  browserTitle: string = '';
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
}

@Component({
  selector: 'app-card-responsive',
  templateUrl: './card-responsive.component.html',
  styleUrls: ['./card-responsive.component.scss'],
})
export class CardResponsiveComponent {
  @Input('data') itemCarousel = new Array<BlogModel>();
  // <!-- ========================[ایتم عکس]============== -->
  color = '#1345db80';
  red = '#ff0000c2';
  yellow = '#ffd700a3';
  blue = '#0000ff91';
  aqua = '#00ffffb2';
  green = '#2bdb2bba';
}

import { Component } from '@angular/core';
import { IcardData } from 'src/app/shared/product-card/card-data';
import { FilterBlog } from 'src/app/classes/interfaces/filter-blog.interface';
import { BlogService } from 'src/app/classes/services/blog.service';
import { Blog } from 'src/app/classes/interfaces/blog.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  isRecived: boolean = false;

  blogData: Blog[];
  filters: FilterBlog = new FilterBlog();
  card_data: IcardData[] = [
    {
      id: 0,
      title: 'تست',
      imgUrl: '../../../assets/img/coinInfo.png',
      price: 0,
      type: 1,
      colorCode: '#ED912A',
      bgColorCode: 'rgb(245 179 104)',

      hours: '2:14',
      session: 2,
      writer: null,
      isOrigin: null,
    },
    {
      id: 1,
      title: '2تست',
      imgUrl: '../../../assets/img/coinInfo.png',
      price: 48,
      type: 1,
      colorCode: '#ED912A',
      bgColorCode: 'rgb(245 179 104)',
      hours: '4:14',
      session: 2,
      writer: null,
      isOrigin: null,
    },
    {
      id: 2,
      title: '3تست',
      imgUrl: '../../../assets/img/coinInfo.png',
      price: 3,
      type: 1,
      colorCode: '#e72828',
      bgColorCode: '#e72828',
      hours: '5:14',
      session: 2,
      writer: null,
      isOrigin: null,
    },
  ];
  card_data2: IcardData[] = [
    {
      id: 0,
      title: 'تست',
      imgUrl: '../../../assets/img/coinInfo.png',
      price: 0,
      type: 0,
      colorCode: '#ED912A',
      bgColorCode: 'rgb(245 179 104)',

      hours: '2:14',
      session: 2,
      writer: null,
      isOrigin: null,
    },
    {
      id: 1,
      title: '2تست',
      imgUrl: '../../../assets/img/coinInfo.png',
      price: 48,
      type: 0,
      colorCode: '#ED912A',
      bgColorCode: 'rgb(245 179 104)',
      hours: '4:14',
      session: 2,
      writer: null,
      isOrigin: null,
    },
    {
      id: 2,
      title: '3تست',
      imgUrl: '../../../assets/img/coinInfo.png',
      price: 3,
      type: 0,
      colorCode: '#ED912A',
      bgColorCode: 'rgb(245 179 104)',
      hours: '5:14',
      session: 2,
      writer: null,
      isOrigin: null,
    },
  ];
  constructor(private _articleServices: BlogService) {}
  async getBlogs(filter: FilterBlog) {
    (
      await this._articleServices.getBlogsFromApi(
        'Article/GetArticleByFilter',
        filter
      )
    ).subscribe({
      next: (x) => {
        if (this._articleServices._paginatedBlogs?.items) {
          this.blogData = this._articleServices._paginatedBlogs?.items;
        }
        this.isRecived = true;
      },
    });
  }
  async ngOnInit() {
    this.getBlogs(this.filters);

    this.filters.pageSize = 3;
  }
}

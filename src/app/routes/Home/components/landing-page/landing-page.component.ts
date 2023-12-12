import { Component } from '@angular/core';
import { IcardData } from 'src/app/shared/product-card/card-data';
import { FilterBlog } from 'src/app/classes/interfaces/filter-blog.interface';
import { BlogService } from 'src/app/classes/services/blog.service';
import { Blog } from 'src/app/classes/interfaces/blog.interface';
import { ProductService } from 'src/app/routes/Shop/components/product.service';
import { Page } from 'src/app/classes/page.model';
import { lastValueFrom } from 'rxjs';
import { Product } from 'src/app/classes/interfaces/product.interface';
import { FilterProduct } from 'src/app/classes/interfaces/filter-product.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  isRecived: boolean = false;
  page: Page<Product[]>;

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
  ];
  card_data2: IcardData[] = [];
  constructor(
    private _articleServices: BlogService,
    public productService: ProductService
  ) {}
  async getBlogs(filter: FilterBlog) {
    (
      await this._articleServices.getBlogsFromApi(
        'Article/GetArticleByFilter',
        filter
      )
    ).subscribe({
      next: (x) => {
        if (this._articleServices._paginatedBlogs?.items) {
          this.blogData = this._articleServices._paginatedBlogs.items;
        }
        this.isRecived = true;
      },
    });
  }
  async getProducts() {
    if (this.productService._paginatedPrd) {
      this.page = new Page(this.productService._paginatedPrd);
    } else {
      if (await this.getProductsFromApi()) {
        this.page = new Page(this.productService._paginatedPrd!);
        this.page?._items?.forEach((x) => {
          var dataKeeper: IcardData = {
            id: x.id,
            title: x.title,
            imgUrl: x.cardImagePath,
            price: x.minPrice,
            type: 0,
            colorCode: '#ED912A',
            bgColorCode: 'rgb(245 179 104)',
            hours: null,
            session: null,
            writer: null,
            isOrigin: null,
          };
          this.card_data2.push(dataKeeper);
        });
      }
    }
  }
  async getProductsFromApi() {
    return await lastValueFrom(
      await this.productService.getProducts(
        'Product/GetProductByFilters',
        new FilterProduct()
      )
    );
  }
  async ngOnInit() {
    this.getBlogs(this.filters);
    this.getProducts();

    this.filters.pageSize = 3;
  }
}

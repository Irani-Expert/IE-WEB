import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingBlogComponent } from '../components/landing-blog/landing-blog.component';
import { BlogRoutingModule } from './blog.routing';
import { BlogCartComponent } from '../components/blog-cart/blog-cart.component';
import { BlogHeroComponent } from '../components/blog-hero/blog-hero.component';
import { OffersComponent } from '../components/offers/offers.component';
import { BlogPaginationComponent } from '../components/blog-pagination/blog-pagination.component';
import { ArticlesComponent } from '../components/articles/articles.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { BlogFilterComponent } from '../components/blog-filter/blog-filter.component';
import { LandingBlogDetailComponent } from '../components/landing-blog-detail/landing-blog-detail.component';
import { CarouselBlogComponent } from '../components/carousel-blog/carousel-blog.component';
import { CardResponsiveComponent } from '../components/card-responsive/card-responsive.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogDetailComponent } from '../components/blog-detail/blog-detail.component';
// import { FilterResponsiveComponent } from '../components/filter-responsive/filter-responsive.component';

const components = [
  CardResponsiveComponent,
  LandingBlogComponent,
  CarouselBlogComponent,
  LandingBlogDetailComponent,
  BlogCartComponent,
  BlogHeroComponent,
  OffersComponent,
  BlogPaginationComponent,
  ArticlesComponent,
  // BlogFilterComponent,
  BlogDetailComponent,
  // FilterResponsiveComponent,
];

@NgModule({
  declarations: [components],
  imports: [SharedModule, NgxPaginationModule, CommonModule, BlogRoutingModule],
})
export class BlogModule {}

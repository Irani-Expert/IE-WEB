import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingBlogComponent } from '../components/landing-blog/landing-blog.component';
import { BlogRoutingModule } from './blog.routing';
import { BlogCartComponent } from '../components/blog-cart/blog-cart.component';
import { BlogHeroComponent } from '../components/blog-hero/blog-hero.component';
import { OffersComponent } from '../components/offers/offers.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { BlogPaginationComponent } from '../components/blog-pagination/blog-pagination.component';
import { ArticlesComponent } from '../components/articles/articles.component';
import {NgxPaginationModule} from 'ngx-pagination';

const components =[
  LandingBlogComponent,
  BlogCartComponent,
  BlogHeroComponent,
  OffersComponent,
  BlogPaginationComponent,
  ArticlesComponent,
];

@NgModule({
  declarations: [components],
  imports: [
    NgxPaginationModule,
    CommonModule,
    BlogRoutingModule,
    DragScrollModule,
  ]
})
export class BlogModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingBlogComponent } from '../components/landing-blog/landing-blog.component';
import { BlogRoutingModule } from './blog.routing';
import { BlogCartComponent } from '../components/blog-cart/blog-cart.component';
import { BlogHeroComponent } from '../components/blog-hero/blog-hero.component';
import { OffersComponent } from '../components/offers/offers.component';
import { DragScrollModule } from 'ngx-drag-scroll';

const components =[
  LandingBlogComponent,
  BlogCartComponent,
  BlogHeroComponent,
  OffersComponent,
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    BlogRoutingModule,
    DragScrollModule,
  ]
})
export class BlogModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingBlogComponent } from '../components/landing-blog/landing-blog.component';
import { BlogRoutingModule } from './blog.routing';
import { BlogCartComponent } from '../components/blog-cart/blog-cart.component';

const components =[
  LandingBlogComponent,
  BlogCartComponent,
  
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    BlogRoutingModule,
  ]
})
export class BlogModule { }

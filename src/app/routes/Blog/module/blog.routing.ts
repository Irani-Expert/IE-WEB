import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingBlogComponent } from '../components/landing-blog/landing-blog.component';

const routes: Routes = [
    { path: '', component: LandingBlogComponent },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class BlogRoutingModule {}
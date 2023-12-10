import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingBlogComponent } from '../components/landing-blog/landing-blog.component';
import { BlogPaginationComponent } from '../components/blog-pagination/blog-pagination.component';
import { LandingBlogDetailComponent } from '../components/landing-blog-detail/landing-blog-detail.component';

const routes: Routes = [
    { path: '', component: LandingBlogComponent },
    {path: 'blogs', component: BlogPaginationComponent},
    {path:'blogs/:title', redirectTo:':title',pathMatch:'full'},
    {path: ':title', component: LandingBlogDetailComponent }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class BlogRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingBlogComponent } from '../components/landing-blog/landing-blog.component';
import { BlogPaginationComponent } from '../components/blog-pagination/blog-pagination.component';
import { LandingBlogDetailComponent } from '../components/landing-blog-detail/landing-blog-detail.component';
// import { RedirectResolver } from 'src/app/classes/services/redirector.service';
// import { redirectGuard } from 'src/app/classes/redirect';

const routes: Routes = [
  { path: '', component: LandingBlogComponent },
  { path: 'page', redirectTo: 'page/1', pathMatch: 'full' },
  { path: 'page/:id', pathMatch: 'full', component: BlogPaginationComponent },
  {
    path: 'page/:id/:title/:language',
    redirectTo: ':title/:language',
    pathMatch: 'full',
  },
  {
    path: ':title/:language',
    // canActivate: [redirectGuard()],
    component: LandingBlogDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}

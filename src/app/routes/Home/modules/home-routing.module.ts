import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'ab', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingSearchComponent } from '../components/landing-search/landing-search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingSearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}

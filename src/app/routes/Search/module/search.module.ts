import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingSearchComponent } from '../components/landing-search/landing-search.component';

const components = [
  LandingSearchComponent,
]

@NgModule({
  declarations: [components],

  imports: [
    CommonModule,
    
  ]
})
export class SearchModule { }

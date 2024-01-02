import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingSearchComponent } from '../components/landing-search/landing-search.component';
import { HeroSearchComponent } from '../components/hero-search/hero-search.component';
import { ItemsSearchComponent } from '../components/items-search/items-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  LandingSearchComponent,
  HeroSearchComponent,
  ItemsSearchComponent,
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
})
export class SearchModule {}

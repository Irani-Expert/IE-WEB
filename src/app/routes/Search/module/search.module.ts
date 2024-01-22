import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingSearchComponent } from '../components/landing-search/landing-search.component';
import { HeroSearchComponent } from '../components/hero-search/hero-search.component';
import { ItemsSearchComponent } from '../components/items-search/items-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LottieModule } from 'ngx-lottie';
import { SharedModule } from 'src/app/shared/shared.module';

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
    ReactiveFormsModule,
    // LottieModule,
    SharedModule

  ],
})
export class SearchModule {}

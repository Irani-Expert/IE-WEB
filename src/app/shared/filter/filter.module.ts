import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FilterComponent } from './filter.component';
import { SearchComponent } from './search-bar/search.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [FilterComponent, CommonModule],
  declarations: [SearchComponent],
  exports: [SearchComponent, FilterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FilterModule {}

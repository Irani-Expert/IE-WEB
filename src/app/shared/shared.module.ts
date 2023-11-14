import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TagsComponent } from './tags/tags.component';
import { AcordianComponent } from './acordian/acordian.component';
import { CommonModule } from '@angular/common';
export function playerFactory(): any {
  return import('lottie-web');
}

const components = [TagsComponent, AcordianComponent];
@NgModule({
  imports: [CommonModule],
  exports: [components],
  declarations: [components],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}

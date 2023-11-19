import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TagsComponent } from './tags/tags.component';
import { AcordianComponent } from './acordian/acordian.component';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { Toggler } from './toggler/toggler.component';
export function playerFactory(): any {
  return import('lottie-web');
}

const components = [TagsComponent, AcordianComponent, CommentsComponent];
@NgModule({
  imports: [CommonModule, Toggler],
  exports: [components],
  declarations: [components],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}

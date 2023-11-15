import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { AuthModule } from './auth/auth.module';
import { TagsComponent } from './tags/tags.component';
import { AcordianComponent } from './acordian/acordian.component';
import { CommonModule } from '@angular/common';
import { Toggler } from './toggler/toggler.component';
import { LottieModule } from 'ngx-lottie';
import { CommentsComponent } from './comments/comments.component';
export function playerFactory(): any {
  return import('lottie-web');
}
const modules = [ModalComponent, AuthModule, Toggler];
const components = [TagsComponent, AcordianComponent, CommentsComponent];
@NgModule({
  imports: [
    modules,
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [modules, components],
  declarations: [components],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}

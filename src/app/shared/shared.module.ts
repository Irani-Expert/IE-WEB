import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { AuthModule } from './auth/auth.module';
import { Toggler } from './toggler/toggler.component';

@NgModule({
  imports: [ModalComponent, Toggler, AuthModule],
  exports: [ModalComponent, AuthModule],
  declarations: [],
  providers: [],
})
export class SharedModule {}

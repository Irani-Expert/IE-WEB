import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [ModalComponent, AuthModule],
  exports: [ModalComponent, AuthModule],
  declarations: [],
  providers: [],
})
export class SharedModule {}

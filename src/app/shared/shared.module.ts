import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { AuthModule } from './auth/auth.module';
import { EcoCalFiltersComponent } from './eco-cal-filters/eco-cal-filters.component';

@NgModule({
  imports: [ModalComponent, AuthModule],
  exports: [ModalComponent, AuthModule],
  declarations: [
    EcoCalFiltersComponent
  ],
  providers: [],
})
export class SharedModule {}

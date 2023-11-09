import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { AuthModule } from './auth/auth.module';
import { EcoCalFiltersComponent } from './eco-cal-filters/eco-cal-filters.component';
import { TagsComponent } from './tags/tags.component';
import { AcordianComponent } from './acordian/acordian.component';
import { CommonModule } from '@angular/common';
import { Toggler } from './toggler/toggler.component';


@NgModule({
  imports: [ModalComponent, AuthModule,CommonModule,Toggler ],
  exports: [ModalComponent, AuthModule,TagsComponent ,AcordianComponent],
  declarations: [
    EcoCalFiltersComponent,
    TagsComponent,
    AcordianComponent,
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}

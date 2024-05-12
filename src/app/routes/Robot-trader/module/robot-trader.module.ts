import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobotTraderComponent } from '../robot-trader/robot-trader.component';
import { RobotTraderRoutingModule } from './robot-trader.routing';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [
  RobotTraderComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    RobotTraderRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RobotTraderModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RobotTraderComponent } from '../robot-trader/robot-trader.component';

const routes: Routes = [
    { path: '', component: RobotTraderComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class RobotTraderRoutingModule {}
  
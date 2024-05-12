import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CopyTradeComponent } from '../copy-trade/copy-trade.component';

const routes: Routes = [
    { path: '', component:  CopyTradeComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CopyTradeRoutingModule {}
  
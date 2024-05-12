import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CopyTradeRoutingModule } from './copy-trade.routing.module';
import { CopyTradeComponent } from '../copy-trade/copy-trade.component';

const components = [
  CopyTradeComponent,
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    SharedModule,
    CopyTradeRoutingModule
  ]
})
export class CopyTradeModule { }

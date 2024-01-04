import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandigMoneyMComponent } from '../components/landig-money-m/landig-money-m.component';

const routes: Routes = [
    { path : '' , component : LandigMoneyMComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class MoneymRoutingModule {

}
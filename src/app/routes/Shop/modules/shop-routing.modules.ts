import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingShopComponent } from '../components/landing-shop/landing-shop.component';

const routes: Routes = [
  {path : '', component : LandingShopComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ShopRoutingModule {}
  
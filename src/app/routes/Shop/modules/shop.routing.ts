import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingShopComponent } from '../components/landing-shop/landing-shop.component';
import { ShopHeroComponent } from '../components/shop-hero/shop-hero.component';

const routes: Routes = [
  { path: '', component: LandingShopComponent },
  { path: ':title', component: ShopHeroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}

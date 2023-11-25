import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingShopComponent } from '../components/landing-shop/landing-shop.component';
import { ShopHeroComponent } from '../components/shop-hero/shop-hero.component';

const routes: Routes = [
  { path: '', redirectTo: 'page/1', pathMatch: 'full' },
  { path: 'page', redirectTo: 'page/1', pathMatch: 'full' },
  { path: 'page/:id', pathMatch: 'prefix', component: LandingShopComponent },
  { path: ':title', pathMatch: 'full', component: ShopHeroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}

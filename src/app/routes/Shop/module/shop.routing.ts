import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingShopComponent } from '../components/landing-shop/landing-shop.component';
import { LandingProductComponent } from '../components/landing-product/landing-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'page/1', pathMatch: 'full' },
  { path: 'page', redirectTo: 'page/1', pathMatch: 'full' },
  { path: 'page/:id', pathMatch: 'full', component: LandingShopComponent },
  {
    path: ':id/:title',
    pathMatch: 'prefix',
    component: LandingProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}

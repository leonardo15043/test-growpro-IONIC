import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProductPage } from './pages/list-product/list-product.page';
import { NearbyProductPage } from './pages/nearby-product/nearby-product.page';
import { RentalProductPage } from './pages/rental-product/rental-product.page';

const routes: Routes = [
  {
    path: 'list',
    component: ListProductPage
  },
  {
    path: 'nearby',
    component: NearbyProductPage
  },
  {
    path: 'rental',
    component: RentalProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPageRoutingModule {}

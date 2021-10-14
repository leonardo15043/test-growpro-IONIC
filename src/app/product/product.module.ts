import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ListProductPage } from './pages/list-product/list-product.page';
import { NearbyProductPage } from './pages/nearby-product/nearby-product.page';
import { RentalProductPage } from './pages/rental-product/rental-product.page';
import { PaymentProductPage } from './pages/payment-product/payment-product.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule
  ],
  declarations: [ListProductPage,NearbyProductPage,RentalProductPage,PaymentProductPage]
})
export class ProductPageModule {}

import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductService } from '../../services/product.service';
import { PaymentProductPage } from '../payment-product/payment-product.page';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.page.html',
  styleUrls: ['./list-product.page.scss'],
})
export class ListProductPage  {

  products:Product;
  type_product:string;
  category_product:string;

  constructor(
    private _productService:ProductService,
    public modalController: ModalController
  ) { 
    this._productService.getProducts().subscribe( (data:Product)=>{
      this.products = data;
    });
  }

  async pay( product ) {
    const modal = await this.modalController.create({
      component: PaymentProductPage,
      componentProps: {
        'product':product
      },
      cssClass: 'content-payment'
    });
    return await modal.present();
  }

  dismiss(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  selectQuery(){
    this._productService.getProductsFilter(this.type_product,this.category_product).subscribe( (data:Product)=>{
      this.products = data;
    });
  }

}

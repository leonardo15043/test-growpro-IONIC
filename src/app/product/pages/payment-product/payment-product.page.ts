import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Product } from '../../models/product.interface';
import { PriceForCategoryService } from '../../services/priceForCategory.service';

@Component({
  selector: 'app-payment-product',
  templateUrl: './payment-product.page.html',
  styleUrls: ['./payment-product.page.scss'],
})
export class PaymentProductPage  {

  sliderrange = 0;
  product:Product
  total = 0;

  constructor(
    private modalController:ModalController,
    private _priceForCategoryService:PriceForCategoryService,
    public navParams: NavParams
    ){}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  sliderRange(){

    this.product = this.navParams.get('product');
    const { category, name } = this.product.type_of_bicycle;

    this._priceForCategoryService.getPrice(category).subscribe( (data:any) =>{
      
      switch (name) {
        case 'eléctrica':
          this.total = data[0].price*this.sliderrange;
          break;
        case 'normal':
          if(this.sliderrange <= 3){
            this.total = data[0].price;
          }else {
            this.total = data[0].price*(this.sliderrange-2);
          }
          break;
        case 'antigua':
          if(this.sliderrange <= 5){
            this.total = data[0].price;
          }else {
            this.total = data[0].price*(this.sliderrange-4);
          }
          break; 
        default:  
          this.total = 0;
          break;
      }
    });
    
  }

}

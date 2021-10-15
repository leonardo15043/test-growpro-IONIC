import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentProductPage } from "../payment-product/payment-product.page";
import { LocationService } from '../../services/location.service';
import { Location } from '../../models/location.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-nearby-product',
  templateUrl: './nearby-product.page.html',
  styleUrls: ['./nearby-product.page.scss'],
})
export class NearbyProductPage {

  locations:Location;

  constructor(
    public modalController: ModalController,
    private _locationService:LocationService,
    public _productService:ProductService
    ) {
      this._locationService.getLocations().subscribe( (data:any) =>{
        this.locations = data;
      });
    }
  
  async pay() {
    const modal = await this.modalController.create({
      component: PaymentProductPage,
      cssClass: 'content-payment'
    });
    return await modal.present();
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}

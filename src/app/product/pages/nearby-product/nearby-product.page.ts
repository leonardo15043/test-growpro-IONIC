import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentProductPage } from "../payment-product/payment-product.page";
@Component({
  selector: 'app-nearby-product',
  templateUrl: './nearby-product.page.html',
  styleUrls: ['./nearby-product.page.scss'],
})
export class NearbyProductPage implements OnInit {

  constructor(
    public modalController: ModalController
    ) {}

  ngOnInit() {
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

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentProductPage } from '../payment-product/payment-product.page';

@Component({
  selector: 'app-rental-product',
  templateUrl: './rental-product.page.html',
  styleUrls: ['./rental-product.page.scss'],
})
export class RentalProductPage implements OnInit {

  constructor(public modalController: ModalController) {}

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

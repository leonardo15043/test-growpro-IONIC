import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-payment-product',
  templateUrl: './payment-product.page.html',
  styleUrls: ['./payment-product.page.scss'],
})
export class PaymentProductPage  {

  sliderrange = 0;
  constructor(private modalController:ModalController){}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}

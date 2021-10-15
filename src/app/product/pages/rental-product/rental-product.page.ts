import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RentalService } from '../../services/rental.service';

@Component({
  selector: 'app-rental-product',
  templateUrl: './rental-product.page.html',
  styleUrls: ['./rental-product.page.scss'],
})
export class RentalProductPage  {

  rentals = [];

  constructor(
    public modalController: ModalController,
    private _rentalService:RentalService
    ) {
      this._rentalService.getRentals().subscribe( data =>{
          console.log(data);
          this.rentals = data;
      });
    }


  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}

import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Product } from '../../models/product.interface';
import { PriceForCategoryService } from '../../services/priceForCategory.service';
import { RentalService } from '../../services/rental.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-payment-product',
  templateUrl: './payment-product.page.html',
  styleUrls: ['./payment-product.page.scss'],
})
export class PaymentProductPage  {

  sliderrange = 0;
  product:Product
  total = 0;
  user:any = {};

  constructor(
    private modalController:ModalController,
    private _priceForCategoryService:PriceForCategoryService,
    private _rentalService:RentalService,
    public navParams: NavParams,
    public toastController:ToastController
    ){
      this.product = this.navParams.get('product');
    }

  dismiss() {
    this.product = <Product>{};
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  sliderRange(){

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

  qr(){
    this.product = <Product>{
      "image": "https://auteco.vteximg.com.br/arquivos/ids/192511-599-599/BicicletaElectrica_Starker_Tflex_negroAzul_2020_foto--4-.jpg?v=637279074316930000",
      "title": "Bicicleta eléctrica tipo plegable",
      "type_of_bicycle": {
          "name": "eléctrica",
          "category": "basic"
      }
    }
  }

  payment(product){
    this._rentalService.addRental(product,this.total,this.user).then( async data => {
      this.dismiss();
      const toast = await this.toastController.create({
        message: 'Pago completado correctamente.',
        duration: 3000
      });
      toast.present();
    })
    .catch(error => console.error(error));
  }

}

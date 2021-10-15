import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private collection = "rental";

  constructor(
    private ngFirestore: AngularFirestore,
  ) { }

  getRentals(){
    return this.ngFirestore.collection(this.collection).valueChanges();
  }

  addRental( product, total, user){
    const rental = Object.assign(product,{ 'total':total },user,{ 'rentalDate': new Date() });
    return this.ngFirestore.collection(this.collection).add(rental);
  }

}

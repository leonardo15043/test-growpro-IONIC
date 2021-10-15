import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PriceForCategoryService {

    private collection = "priceForCategory";

    constructor(
        private ngFirestore: AngularFirestore,
      ) { }

    getPrice( category ){
        return this.ngFirestore.collection(this.collection, ref => ref.where('category', '==', category).limit(1)).valueChanges();
    }
}
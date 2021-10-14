import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private collection = "products";
  query;

  constructor(
    private ngFirestore: AngularFirestore,
  ) { }

  getProducts(){
    return this.ngFirestore.collection(this.collection).valueChanges();
  }

  getProductsFilter( type,category){
    return this.ngFirestore.collection(this.collection, ref => {
      
      this.query = ref;

      if(type !== undefined && type != 'todos'){
        this.query = this.query.where('type_of_bicycle.name', '==', type)
      }
      if(category !== undefined && category != 'todos'){
        this.query = this.query.where('type_of_bicycle.category', '==', category)
      }
      
      return this.query; 

    }).valueChanges();
  }

}
  
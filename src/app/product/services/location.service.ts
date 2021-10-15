import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private collection = "locations";

  constructor(
    private ngFirestore: AngularFirestore,
  ) { }

  getLocations(){
    return this.ngFirestore.collection(this.collection).valueChanges();
  }

}

import { Product } from './product.interface';
export interface Location extends Array<Location>{
    name:string;
    image:string;
    address:string;
    products:Product
}
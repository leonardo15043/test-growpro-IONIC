export interface Product extends Array<Product>{
    title:string;
    image:string;
    type_of_bicycle:TypeOfBicycle;
}

export interface TypeOfBicycle{
    category:string;
    name:string;
}
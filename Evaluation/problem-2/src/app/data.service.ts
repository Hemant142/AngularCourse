import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';



@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getProductData(): Observable<Product[]> {
    return of(products);
  }

  getProductDetail(id: number): Observable<Product | undefined> {
    return of(products.find((product) => product.id === id));
  }
}

const products: Product[] = [
  { id: 1, productName: 'Laptop', price: 1200, category: 'Electronics' },
  { id: 2, productName: 'Smartphone', price: 800, category: 'Electronics' },
  { id: 3, productName: 'Headphones', price: 150, category: 'Electronics' },
  { id: 4, productName: 'Desk', price: 300, category: 'Furniture' },
  { id: 5, productName: 'Chair', price: 100, category: 'Furniture' },
];

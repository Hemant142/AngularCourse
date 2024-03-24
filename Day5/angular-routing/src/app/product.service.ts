import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any[] = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];

  constructor() { }

  getProducts(): any[] {
    return this.products;
  }

  getProductById(id: number): any {
    return this.products.find(product => product.id === id);
  }
}

import { Component, Input } from '@angular/core';
import { Product } from './product.model'; 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() products: Product[]; 

  
  constructor() {
    this.products = [];
  }

  priceThreshold: number = 500;

  setBackgroundColor(available: boolean): string {
    return available ? 'green' : 'red';
  }

  setFontSize(productPrice: number): string {
    return productPrice > this.priceThreshold ? '20px' : '16px';
  }
}

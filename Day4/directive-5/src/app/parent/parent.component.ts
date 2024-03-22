import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  products: Product[];

  constructor() {
    
    this.products = [
      new Product('Product 1', 300, true),
      new Product('Product 2', 600, false),
      new Product('Product 3', 800, true),
      new Product('Product 4', 400, false)
    ];
  }
}

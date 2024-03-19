import { Component, OnInit } from '@angular/core';

export class Product {
  name: string;
  price: number;
  available: boolean;

  constructor(name: string, price: number, available: boolean) {
    this.name = name;
    this.price = price;
    this.available = available;
  }
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    new Product('Laptop', 1200, true),
    new Product('Smartphone', 800, true),
    new Product('Headphones', 100, false),
    new Product('Camera', 600, true),
    new Product('Tablet', 300, false),
    new Product('Fitness Tracker', 50, true),
    new Product('Bluetooth Speaker', 80, true),
    new Product('Gaming Console', 400, false),
    new Product('Smartwatch', 150, true),
    new Product('External Hard Drive', 120, true)
  ];

  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  get filteredProducts() {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}

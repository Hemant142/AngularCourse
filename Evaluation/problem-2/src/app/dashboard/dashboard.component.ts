import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  filterValue: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getProductData().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  sort(property: string) {
    this.filteredProducts.sort((a, b) => {
      return property === 'price' ? a.price - b.price : 0;
    });
  }

  applyFilter() {
    this.filteredProducts = this.products.filter((product) =>
      product.productName.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }
  

  goToProductDetail(id: number) {
    this.router.navigate(['/product', id]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idString: string | null = params.get('id'); // Retrieve id as string or null
      if (idString !== null) {
        const id: number = +idString; // Convert id string to number
        if (!isNaN(id)) { // Check if id is a valid number
          this.dataService.getProductDetail(id).subscribe(data => {
            this.product = data; // Assign product details to product variable
          }, error => {
            console.error('Error retrieving product details:', error);
          });
        } else {
          console.error('Invalid product id');
        }
      } else {
        console.error('No product id provided');
      }
    });
  }
}

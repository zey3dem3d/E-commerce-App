import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { url } from 'inspector';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  productID!: string | null;
  productDetails: Product = {} as Product;

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productsService = inject(ProductsService);

  getProductId() {
    this.activatedRoute.paramMap.subscribe({
      next: (urlData) => {
        this.productID = urlData.get('id');
      },
    });
  }

  getProductDetails(id: string | null) {
    this.productsService.getProductDetails(id).subscribe({
      next: ({ data }) => {
        this.productDetails = data;
      },
    });
  }

  ngOnInit(): void {
    this.getProductId();
    this.getProductDetails(this.productID);
  }
}

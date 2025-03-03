import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from './../../services/products.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  allProducts: Product[] = [];

  private readonly productsService = inject(ProductsService);

  getAllProducts() {
    this.productsService.getProducts().subscribe({
      next: ({ data }) => {
        this.allProducts = data;
      },
    });
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
}

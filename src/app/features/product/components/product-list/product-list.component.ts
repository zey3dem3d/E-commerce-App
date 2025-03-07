import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../../cart/services/cart.service';
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
  private readonly cartService = inject(CartService);
  private readonly toastr = inject(ToastrService);

  ngOnInit(): void {
    this.getAllProducts();
  }

  showToaster(msg: string) {
    this.toastr.success(msg, '', {
      progressBar: true,
      timeOut: 3000,
    });
  }

  getAllProducts() {
    this.productsService.getProducts().subscribe({
      next: ({ data }) => {
        this.allProducts = data;
      },
    });
  }

  addToCart(id: string) {
    this.cartService.addProductToCart(id).subscribe({
      next: (res) => {
        this.showToaster('Product added successfully');

        this.cartService.cartCounter.next(res.numOfCartItems);
      },
    });
  }
}

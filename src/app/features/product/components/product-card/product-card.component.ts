import { AuthService } from './../../../../core/auth/services/auth.service';
import { Component, inject, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../cart/services/cart.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<string>();

  onAddToCart() {
    this.addToCart.emit(this.product._id);
  }
}

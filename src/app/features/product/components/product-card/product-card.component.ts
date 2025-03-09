import { Component, inject, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';
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

  isLike: boolean = false;

  isLiked() {
    this.isLike = !this.isLike;
  }

  onAddToCart() {
    this.addToCart.emit(this.product._id);
  }
}

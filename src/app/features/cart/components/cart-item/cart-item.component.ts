import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/cart.interface';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input() product: Product = {} as Product;
  @Output() removeProduct = new EventEmitter<string>();
  @Output() updateProductQty = new EventEmitter<{
    id: string;
    count: number;
  }>();
  onRemove() {
    this.removeProduct.emit(this.product.product.id);
  }

  onUpdataQty(newCount: number) {
    this.updateProductQty.emit({
      id: this.product.product.id,
      count: newCount,
    });
  }
}

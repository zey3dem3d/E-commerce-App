import { RouterLink } from '@angular/router';
import { Cart } from '../../models/cart.interface';
import { CartService } from './../../services/cart.service';
import { Component, inject, OnInit, Output } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-list',
  imports: [CartItemComponent, RouterLink],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss',
})
export class CartListComponent implements OnInit {
  cartDetails: Cart = {} as Cart;
  private readonly cartService = inject(CartService);
  private readonly toastr = inject(ToastrService);
  isLoading: boolean = false;

  ngOnInit(): void {
    this.loadCart();
  }

  showToaster(msg: string) {
    this.toastr.success(msg, '', {
      progressBar: true,
      timeOut: 2000,
    });
  }

  loadCart() {
    this.cartService.getLoggedUserCart().subscribe({
      next: (res) => {
        this.isLoading = true;
        this.cartDetails = res;
      },
    });
  }

  removeProduct(id: string) {
    this.cartService.removeCartItem(id).subscribe({
      next: (res) => {
        this.cartDetails = res;
        this.showToaster('Product removed successfully');
        this.cartService.cartCounter.next(res.numOfCartItems);
      },
    });
  }

  updateQty(id: string, count: number) {
    this.cartService.updateCartQuantity(id, count).subscribe({
      next: (res) => {
        this.cartDetails = res;
        this.showToaster('Product added successfully');
      },
    });
  }

  clearCart() {
    this.cartService.clearCart().subscribe({
      next: (res) => {
        this.loadCart();
        this.showToaster('Cart cleared successfully');
      },
    });
  }
}

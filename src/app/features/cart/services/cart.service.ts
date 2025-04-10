import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../core/auth/services/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartCounter: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient, private auth: AuthService) {}

  addProductToCart(productId: string): Observable<any> {
    return this.http.post(
      environment.baseUrl + 'cart',
      { productId },
      {
        headers: {
          token: this.auth.getToken()!,
        },
      }
    );
  }

  updateCartQuantity(productId: string, count: number): Observable<any> {
    return this.http.put(
      environment.baseUrl + 'cart/' + productId,
      { count },
      {
        headers: {
          token: this.auth.getToken()!,
        },
      }
    );
  }

  getLoggedUserCart(): Observable<any> {
    return this.http.get(environment.baseUrl + 'cart');
  }

  removeCartItem(productId: string): Observable<any> {
    return this.http.delete(environment.baseUrl + 'cart/' + productId);
  }

  clearCart(): Observable<any> {
    return this.http.delete(environment.baseUrl + 'cart');
  }
}

import { AuthService } from './../../../core/auth/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  createCheckout(
    cartId: string | null,
    shippingAddress: { details: string; phone: string; city: string }
  ): Observable<any> {
    const returnUrl = '?url=e-commerce.vercel.app';
    return this.http.post(
      environment.baseUrl + 'orders/checkout-session/' + cartId + returnUrl,
      {
        shippingAddress,
      },
      {
        headers: {
          token: this.auth.getToken()!,
        },
      }
    );
  }
}

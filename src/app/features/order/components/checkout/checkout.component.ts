import { url } from 'inspector';
import { OrderService } from './../../services/order.service';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationMessagesComponent } from '../../../../shared/components/validation-messages/validation-messages.component';
import { log } from 'node:util';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, ValidationMessagesComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  resMsg: string = '';
  resMsgSuccess: string = '';
  isLoading = true;
  cartId!: string;
  private readonly orderService = inject(OrderService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly fb = inject(FormBuilder);

  ngOnInit(): void {
    this.getCartId();
    this.formInit();
  }

  formInit() {
    this.checkoutForm = this.fb.group({
      details: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });
  }

  getCartId() {
    this.activatedRoute.paramMap.subscribe({
      next: (data) => {
        this.cartId = data.get('id')!;
      },
    });
  }

  submitForm() {
    this.isLoading = false;

    if (this.checkoutForm.valid || !this.isLoading) {
      this.orderService
        .createCheckout(this.cartId, this.checkoutForm.value)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.isLoading = true;
            open(res.session.url, '_self');
          },
        });
    }
  }
}

import { AuthService } from './../../../core/auth/services/auth.service';
import { Component, inject, Input, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../../features/cart/services/cart.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navbarCounter: number = 0;
  private readonly authService = inject(AuthService);
  private readonly cartService = inject(CartService);
  private readonly platformId = inject(PLATFORM_ID);

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    // console.log(this.authService.decodeToken());

    this.cartService.cartCounter.subscribe({
      next: (value) => {
        this.navbarCounter = value;
      },
    });

    if (isPlatformBrowser(this.platformId)) {
      this.cartService.getLoggedUserCart().subscribe({
        next: (res) => {
          console.log(res);
          this.cartService.cartCounter.next(res.numOfCartItems);
        },
      });
    }
  }

  @Input() layout!: string;
}

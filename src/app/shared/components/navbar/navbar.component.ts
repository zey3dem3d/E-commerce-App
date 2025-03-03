import { AuthService } from './../../../core/auth/services/auth.service';
import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private readonly authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    console.log(this.authService.decodeToken());
  }

  @Input() layout!: string;
}

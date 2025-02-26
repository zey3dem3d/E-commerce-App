import { Routes } from '@angular/router';
import { AuthComponent } from './core/layouts/auth/auth.component';
import { UserComponent } from './core/layouts/user/user.component';
import { LoginComponent } from './core/auth/components/login/login.component';
import { RegisterComponent } from './core/auth/components/register/register.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { CategoryComponent } from './features/category/components/category/category.component';
import { CartComponent } from './features/cart/components/cart/cart.component';
import { NotFoundComponent } from './core/auth/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    title: 'Auth',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, title: 'Login' },
      { path: 'register', component: RegisterComponent, title: 'Register' },
      { path: '**', component: NotFoundComponent, title: 'Not Found' },
    ],
  },
  {
    path: 'user',
    component: UserComponent,
    title: 'User',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'Home' },
      { path: 'category', component: CategoryComponent, title: 'Category' },
      { path: 'cart', component: CartComponent, title: 'Cart' },
      { path: '**', component: NotFoundComponent, title: 'Not Found' },
    ],
  },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];

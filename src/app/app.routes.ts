import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/components/login/login.component';
import { RegisterComponent } from './core/auth/components/register/register.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { CategoryComponent } from './features/category/components/category/category.component';
import { NotFoundComponent } from './core/auth/components/not-found/not-found.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { ProductListComponent } from './features/product/components/product-list/product-list.component';
import { BrandListComponent } from './features/brands/components/brand-list/brand-list.component';
import { ProductDetailsComponent } from './features/product/components/product-details/product-details.component';
import { authGuard } from './core/guards/auth.guard';
import { isLoggedGuard } from './core/guards/is-logged.guard';
import { CartListComponent } from './features/cart/components/cart-list/cart-list.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    title: 'Auth',
    canActivate: [isLoggedGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, title: 'Login' },
      { path: 'register', component: RegisterComponent, title: 'Register' },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    title: 'User',
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        title: 'Home',
      },
      { path: 'categories', component: CategoryComponent, title: 'Category' },
      { path: 'products', component: ProductListComponent, title: 'Products' },
      {
        path: 'product-details/:id',
        component: ProductDetailsComponent,
        title: 'Product Details',
      },
      { path: 'brands', component: BrandListComponent, title: 'Brands' },
      { path: 'cart', component: CartListComponent, title: 'Cart' },
    ],
  },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];

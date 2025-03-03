import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ProductListComponent } from '../../../product/components/product-list/product-list.component';
import { MainSliderComponent } from '../main-slider/main-slider.component';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ProductListComponent, MainSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

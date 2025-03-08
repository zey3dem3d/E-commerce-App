import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../services/brands.service';
import { Brands } from '../../models/brands';

@Component({
  selector: 'app-brand-list',
  imports: [],
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.scss',
})
export class BrandListComponent implements OnInit {
  allBrands: Brands[] = [];
  private readonly brandService = inject(BrandsService);

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe({
      next: ({ data }) => {
        console.log(data);
        this.allBrands = data;
      },
    });
  }
}

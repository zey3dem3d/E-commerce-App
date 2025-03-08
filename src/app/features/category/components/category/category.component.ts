import { CategoryDetails } from '../../models/categories';
import { CategoryService } from './../../services/category.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
  allCategories: CategoryDetails[] = [];
  private readonly categoryService = inject(CategoryService);

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getCategories().subscribe({
      next: ({ data }) => {
        this.allCategories = data;
        console.log(this.allCategories);
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/modals/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }

  categories : Category[];
  currentCategory:Category;

  ngOnInit(): void {
  this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(response=>{
      this.categories=response.data;
    })
  }

  setCurrentCategory(category){
    console.log(category.categoryName);
    this.currentCategory=category;
  }

  getCurrentCategoryClass(category){
    if(category == this.currentCategory){
      return "list-group-item active"
    }
    return "list-group-item"
  }
}
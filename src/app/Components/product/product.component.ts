import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/modals/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded = false;
  filterText="";

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cartService:CartService) { }

  ngOnInit(): void {
    console.log("init çalıştı")
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getproductswithcategoryid(params["categoryId"]);
      }
      this.getProducts();
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    })
  }

  getproductswithcategoryid(categoryId) {
    this.productService.getproductswithcategoryid(categoryId).subscribe(response => {
      this.products = response.data;
    })
    }
    
    addToCart(product:Product){
        this.cartService.addToCart(product);
      }
  }
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/modals/cartitem';
import { Product } from 'src/app/modals/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(private cartService:CartService) { }

  cartITems:CartItem[];

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartITems=this.cartService.list();
  }

  removeFromCart(product:Product){
    this.cartService.removeFromCart(product)
  }

}

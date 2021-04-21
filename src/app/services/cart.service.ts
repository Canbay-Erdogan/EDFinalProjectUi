import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from '../modals/cartitem';
import { CartItems } from '../modals/cartitems';
import { Product } from '../modals/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private toaster:ToastrService) { }

  addToCart(product:Product){
    if (product.unitsInStock <=1){
      this.toaster.error("Yetersiz Stok Sepete Eklenemezzzz",product.productName)
    }
    else if (product.unitsInStock <=10){
      this.toaster.warning("Kritik stoktt",product.productName)
    }
    else{
      this.toaster.success("sepete eklendiii",product.productName)
    }

    let item = CartItems.find(c=>c.product.productId === product.productId);
    if (item){
      item.quantity +=1 ;
    }else{
      let cartItem= new CartItem();
      cartItem.product=product;
      cartItem.quantity=1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(product:Product){
    let item = CartItems.find(c=>c.product.productId === product.productId);
    CartItems.splice(CartItems.indexOf(item),1);
    this.toaster.error(product.productName+" Silindi")
  }

  list():CartItem[]{
    return CartItems;
  }
}

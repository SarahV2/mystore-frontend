import { Injectable } from '@angular/core';
import { Product } from './products';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cartItems: Product[] = [];

  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}

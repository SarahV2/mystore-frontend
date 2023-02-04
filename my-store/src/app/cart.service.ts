import { Injectable } from '@angular/core';
import { Product } from './products';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cartItems: Product[] = [];
  cartTotal: number = 0;
  shopperName?: string;
  shopperAddress?: string;

  addToCart(product: Product, selectedQuantity: number = 1) {
    // check if the product already exists
    const index = this.cartItems.findIndex(
      (item: Product) => item.id == product.id
    );

    if (index > -1) {
      let existingItem = this.cartItems[index];
      this.cartItems[index].quantity = selectedQuantity;
    } else {
      this.cartItems.push(product);
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.cartTotal = 0;
    return this.cartItems;
  }

  updateProductQuantity(product: Product, updatedQuantity: number = 1) {
    const index = this.cartItems.findIndex(
      (item: Product) => item.id == product.id
    );

    if (index > -1) {
      this.cartItems[index].quantity = updatedQuantity;
    }
  }
}

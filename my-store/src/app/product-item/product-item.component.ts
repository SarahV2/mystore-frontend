import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
// import { Product } from '../products';

type Product = {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
  quantity?: number;
};
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  constructor(
    // private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  @Input() product!: Product;

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert(`${product.name} has been added to cart`);
    console.log(this.cartService.getCartItems());
  }
}

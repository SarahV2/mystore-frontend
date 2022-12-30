import { Component, Input } from '@angular/core';
type Product = {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
};
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;
}

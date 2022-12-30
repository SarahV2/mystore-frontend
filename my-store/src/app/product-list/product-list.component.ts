import { Component } from '@angular/core';
// import { products } from '../products';
import products from '../../assets/data.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
}

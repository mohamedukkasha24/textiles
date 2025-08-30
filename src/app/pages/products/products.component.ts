import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { Product } from '../../shared/models/product.model';
import { PRODUCTS } from '../../shared/mock-data/products';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
    private cart = inject(CartService);

  products: Product[] = PRODUCTS;

  addToCart(product: Product) {
    this.cart.add(product, 1);
  }
}

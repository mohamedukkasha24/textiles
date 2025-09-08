import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { Product } from '../../shared/models/product.model';
import { PRODUCTS } from '../../shared/mock-data/products';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  private cart = inject(CartService);

  products: Product[] = PRODUCTS;
  searchText: string = '';

  get filteredProducts() {
    return this.products.filter((p) =>
      p.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  addToCart(product: Product) {
    this.cart.add(product, 1);
  }
}

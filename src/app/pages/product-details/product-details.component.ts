import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { Product } from '../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from '../../shared/mock-data/products';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  private route = inject(ActivatedRoute);
  cart = inject(CartService);

  product?: Product;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = PRODUCTS.find((p) => p.id === id);
  }

  addToCart() {
    if (this.product) {
      this.cart.add(this.product);
    }
  }
}

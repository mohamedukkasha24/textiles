import { Component,inject,ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';
import { PRODUCTS } from '../../mock-data/products';
declare var bootstrap: any; 
@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
   private cart = inject(CartService);

  products: Product[] = PRODUCTS;

  @ViewChild('successToast', { static: true }) toastEl!: ElementRef;

  addToCart(product: Product) {
    this.cart.add(product, 1);

    // ✅ Show Bootstrap toast
    const toast = new bootstrap.Toast(this.toastEl.nativeElement);
    toast.show();
  }
}

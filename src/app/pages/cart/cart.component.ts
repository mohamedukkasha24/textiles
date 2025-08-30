import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService, CartItem } from '../../core/services/cart.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartItems$!: Observable<CartItem[]>;

  constructor(public cart: CartService) {}

  ngOnInit() {
    this.cartItems$ = this.cart.itemsObs$; // subscribe reactive
  }

  increaseQty(item: CartItem) {
    this.cart.add(item.product, 1);
  }

  decreaseQty(item: CartItem) {
    if (item.qty > 1) {
      this.cart.add(item.product, -1);
    } else {
      this.cart.remove(item.product.id);
    }
  }

  remove(item: CartItem) {
    this.cart.remove(item.product.id);
  }
}

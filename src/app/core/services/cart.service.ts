import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../shared/models/product.model';

export interface CartItem { product: Product; qty: number; }

@Injectable({ providedIn: 'root' })
export class CartService {
  private items$ = new BehaviorSubject<CartItem[]>([]);
  itemsObs$ = this.items$.asObservable();

  add(product: Product, qty = 1) {
    const items = [...this.items$.value];
    const i = items.findIndex(ci => ci.product.id === product.id);
    if (i > -1) {
      items[i] = { ...items[i], qty: items[i].qty + qty };
    } else {
      items.push({ product, qty });
    }
    this.items$.next(items);
  }

  remove(id: string) {
    this.items$.next(this.items$.value.filter(ci => ci.product.id !== id));
  }

  clear() { this.items$.next([]); }

  total() {
    return this.items$.value.reduce((s, ci) => s + ci.product.price * ci.qty, 0);
  }

  count() {
    return this.items$.value.reduce((s, ci) => s + ci.qty, 0);
  }
}

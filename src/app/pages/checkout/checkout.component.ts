import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  constructor(private router: Router, private cart: CartService) {}

  submitOrder(form: NgForm) {
    if (form.valid) {
      alert('Order placed successfully with Cash on Delivery! 🎉');
      this.cart.clear(); // ✅ Clear cart after order
      form.reset();
      this.router.navigate(['/']);
    }
  }
}

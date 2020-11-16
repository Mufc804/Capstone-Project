import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  removeItem(product) {
    this.items = this.cartService.removeItem(product);
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }

  onSubmit(customerData) {
    console.log(this.items);
    if (this.items.length == 0) {
      window.alert("Please put items in your cart before checking out.");
      return;
    }
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    window.alert("Your order has been submitted");
    console.log("Order has been submitted", customerData);
  }

}

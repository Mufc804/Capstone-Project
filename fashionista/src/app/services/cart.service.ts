import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor() { }

  addtoCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  removeItem(product) {
    const index = this.items.indexOf(product);
    this.items.splice(index, 1);
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}

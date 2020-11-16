import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/model.product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(public productService: ProductService, 
    private activatedRoute: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getAllProductDetails().subscribe(data => {
      this.products = data;
    })
  }

  addToCart(product) {
    this.cartService.addtoCart(product);
    window.alert(product.pname + " has been added to the cart.");
  }

}

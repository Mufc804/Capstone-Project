import { Component, OnInit } from '@angular/core';
import { Product } from '../models/model.product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProductDetails().subscribe(data => {
      this.products = data;
    })
  }

}

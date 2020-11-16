import { Component, OnInit } from '@angular/core';
import { Product } from '../models/model.product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-retrieve',
  templateUrl: './product-retrieve.component.html',
  styleUrls: ['./product-retrieve.component.css']
})
export class ProductRetrieveComponent implements OnInit {

  products: Product[];
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProductDetails().subscribe(data => {
      this.products = data;
    })
  }

  deleteProductById(id: any) {
    console.log(id);
    this.productService.deleteProductById(id).subscribe((result) => {
      console.log("Product deleted successfully")
    })
    window.location.reload();
  }

}

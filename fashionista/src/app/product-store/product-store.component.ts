import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css']
})
export class ProductStoreComponent implements OnInit {

  productRef = new FormGroup({
    _id: new FormControl(),
    pname: new FormControl(),
    details: new FormControl(),
    image: new FormControl(),
    price: new FormControl(),
    company: new FormControl()
  })

  constructor(public productService: ProductService) { }

  result: string;
  ngOnInit(): void {
  }

  storeProductDetails(): void {
    this.productService.storeProductDetailsInDB(this.productRef.value).subscribe(data => this.result = data.msg);
  }
}

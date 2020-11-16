import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/model.product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient: HttpClient) { }

  getAllProductDetails(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:9090/product/productFromDB");
  }

  getProductById(prodId): Observable<Product> {
    return this.httpClient.get<Product>("http://localhost:9090/product/productById/" + prodId);
  }

  storeProductDetailsInDB(prodRef): Observable<any> {
    return this.httpClient.post("http://localhost:9090/product/storeProduct", prodRef);
  }

  deleteProductById(prodId): Observable<any> {
    return this.httpClient.delete("http://localhost:9090/product/deleteProductById/" + prodId);
  }

  updateProductDetailsInDB(prodRef, prodId): Observable<any> {
    return this.httpClient.put("http://localhost:9090/product/updateProduct/" + prodId, prodRef);
  }
}

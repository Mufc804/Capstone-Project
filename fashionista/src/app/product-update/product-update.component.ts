import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../models/model.company';
import { Product } from '../models/model.product';
import { CompanyService } from '../services/company.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  id: any;
  product: Product = new Product();
  companies: Company[];
  productForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(this.id).subscribe(result => {
      this.product = result;
      console.log(this.product);
    });
    this.companyService.getAllCompanyDetails().subscribe(result => {
      this.companies = result;
      console.log(this.companies);
    });
    this.productForm = this.formBuilder.group({
      pname: ['', Validators.required],
      details: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
      company: ['', Validators.required]
    });
  }

  get f() {
    return this.productForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.productForm.invalid) {
      console.log("Update error");
      return;
    } else {
       console.log(this.product);
       this.productService.updateProductDetailsInDB(this.product, this.id).subscribe(result => {
         console.log("Product updated successfully");
         this.router.navigate(['/productRetrieve']);
       }, (err) => {
         console.log(err)
       })
    }
  }

}

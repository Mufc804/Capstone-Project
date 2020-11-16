import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../models/model.company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {

  id: any;
  company: Company = new Company();
  companyForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.companyService.getCompanyById(this.id).subscribe(result => {
      this.company = result;
      console.log(this.company);
    });
    this.companyForm = this.formBuilder.group({
      cname: ['', Validators.required]
    });
  }

  get f() {
    return this.companyForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.companyForm.invalid) {
      console.log("Company update failed");
      return;
    } else {
      console.log(this.company);
      this.companyService.updateCompanyDetailsInDB(this.company, this.id).subscribe(result => {
        console.log("Company updated successfully");
        this.router.navigate(["/companyRetrieve"]);
      }, (err) => {
        console.log(err);
      })
    }
  }

}

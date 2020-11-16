import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-store',
  templateUrl: './company-store.component.html',
  styleUrls: ['./company-store.component.css']
})
export class CompanyStoreComponent implements OnInit {

  compRef = new FormGroup({
    _id: new FormControl(),
    cname: new FormControl()
  })

  constructor(public companyService: CompanyService) { }

  result: string;
  ngOnInit(): void {
  }

  storeCompanyDetails(): void {
    this.companyService.storeCompanyDetailsInDB(this.compRef.value).subscribe(data => this.result = data.msg);
  }

}

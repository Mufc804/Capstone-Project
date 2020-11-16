import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/model.company';

@Component({
  selector: 'app-company-retrieve',
  templateUrl: './company-retrieve.component.html',
  styleUrls: ['./company-retrieve.component.css']
})
export class CompanyRetrieveComponent implements OnInit {

  companies: Company[];
  constructor(public companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getAllCompanyDetails().subscribe(data => {
      this.companies = data;
    })
  }

  deleteCompanyById(id: any) {
    console.log(id);
    this.companyService.deleteCompanyById(id).subscribe((result => {
      console.log("Company deleted successfully")
    }));
    window.location.reload();
  }

}

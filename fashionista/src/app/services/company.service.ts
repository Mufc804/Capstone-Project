import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/model.company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(public httpClient: HttpClient) { }

  getAllCompanyDetails(): Observable<Company[]> {
    return this.httpClient.get<Company[]>("http://localhost:9090/company/companyFromDB");
  }

  getCompanyById(compId): Observable<Company> {
    return this.httpClient.get<Company>("http://localhost:9090/company/companyById/" + compId)
  }

  storeCompanyDetailsInDB(compRef): Observable<any> {
    return this.httpClient.post("http://localhost:9090/company/storeCompany", compRef);
  }

  deleteCompanyById(compId): Observable<any> {
    return this.httpClient.delete("http://localhost:9090/company/deleteCompanyById/" + compId);
  }

  updateCompanyDetailsInDB(compRef, compId): Observable<any> {
    return this.httpClient.put("http://localhost:9090/company/updateCompany/" + compId, compRef);
  }
}

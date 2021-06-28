import { Injectable } from '@angular/core';
import CustomerDTO from "../../dtos/CustomerDTO";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl=environment.baseUrl;

  constructor(private http: HttpClient) { }

  public saveCustomer(c:CustomerDTO):Observable<any>{
    return this.http.post(this.baseUrl+'customerRoute/saveCustomer',{
      customerName:c.customerName,
      customerEmail:c.customerEmail,
      customerMobileNumber:c.customerMobileNumber,
      customerAddress:c.customerAddress,
      customerPassword:c.customerPassword,
    })
  }
//  --------------
  public getCustomer(email: string, password : string): Observable<any> {
    return this.http.get(this.baseUrl + 'customerRoute/getAllCustomers', {headers: {email : email, password : password}});
  }
}

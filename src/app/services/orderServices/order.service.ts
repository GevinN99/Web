import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import OrderDTO from "../../dtos/OrderDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl=environment.baseUrl;

  constructor(private http: HttpClient) { }

  public saveOrder(c:OrderDTO):Observable<any>{
    return this.http.post(this.baseUrl+'orderRoute/saveOrder',{
      orderColour:c.orderColour,
      orderSize:c.orderSize,
    })
  }

}

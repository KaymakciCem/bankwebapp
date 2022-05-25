import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class CustomerDto {
  constructor (
    public name: string,
    public surname: string,
    public balance: number,
    public transactions: TransactionDto[]
    ) {}
}

export class TransactionDto {
  constructor (
    public accountId: string,
    public amount: number) {}
}


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomerInfo(customerId: string) {
       return this.http.get<CustomerDto>(`http://localhost:8080/customer/info/${customerId}`);
  }
}

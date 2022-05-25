import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class AccountDto {
  constructor (public accountId: string,
    public balance: number) {}
}


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  openAccount(customerId: string, initialCredit: number) {

    return this.http.post<AccountDto>('http://localhost:8080/account/open', { customerId: customerId, initialCredit:initialCredit });
  }
}

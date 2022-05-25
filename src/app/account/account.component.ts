import { Component, OnInit } from '@angular/core';
import { AccountDto, AccountService } from '../service/account.service';
import { CustomerDto, CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  customerId = '1';
  initialCredit = 500;
  errorMessage= 'Invalid Credentials';
  accountDto: AccountDto
  customerDto: CustomerDto

  password = 'pass';
  invalidLogin = false;

  constructor(private accountService:AccountService, private customerService: CustomerService) { }

  ngOnInit(): void {}

  openAccount() {
    this.accountService.openAccount(this.customerId, this.initialCredit).subscribe(
      response => {
        console.log(response)
        this.accountDto = response
      }
    );

    this.customerService.getCustomerInfo(this.customerId).subscribe(
      response => {
        console.log(response)
        this.customerDto = response
      }
    );
  }

}

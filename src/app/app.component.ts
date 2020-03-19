import { TransactionService } from './services/transactions.service';
import { Component, OnInit } from '@angular/core';
import { transactionModel } from './models/transaction.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'varejo';

  constructor(public transactionService: TransactionService) { }

  ngOnInit(): void {
    this.localList = this.transactionService.GetTransactions();
  }

  public localList: Array<transactionModel> = new Array<transactionModel>();

  getTransactionList() {
    this.localList = this.transactionService.GetTransactions();
    if (!this.localList) {
      this.localList = [];
    }
  }
}

import { transactionModel } from './../models/transaction.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class TransactionService {
  public transactionList: Array<transactionModel>;

  constructor() {
    this.transactionList = new Array<transactionModel>();
  }

  InsertTransaction(transaction: transactionModel):any {
    let localList = JSON.parse(localStorage.getItem("transactionList"));
    if (localList) {
      this.transactionList = localList;
    }

    this.transactionList.push(transaction);
    localStorage.setItem("transactionList", JSON.stringify(this.transactionList));
  }

  GetTransactions(): transactionModel[] {
    let transactionList: Array<transactionModel>;
    transactionList = JSON.parse(localStorage.getItem("transactionList"));
    return transactionList;
  }
}

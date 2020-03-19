import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { transactionModel } from '../models/transaction.model';
import { TransactionService } from '../services/transactions.service';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.sass']
})
export class NewTransactionComponent implements OnInit {

  @Output() submit = new EventEmitter();

  constructor(public transactionService: TransactionService ) { }

  ngOnInit(): void {
  }

  public transaction: transactionModel = new transactionModel();

  newTransaction(){
    this.transaction.date = new Date().toISOString();
    this.transactionService.InsertTransaction(this.transaction);
    this.transaction = new transactionModel();
    this.submit.emit();
  }

}

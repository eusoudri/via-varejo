import { TransactionService } from './../services/transactions.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { transactionModel } from '../models/transaction.model';

@Component({
  selector: 'app-statement-transaction',
  templateUrl: './statement-transaction.component.html',
  styleUrls: ['./statement-transaction.component.sass']
})

export class StatementTransactionComponent implements OnInit, OnChanges {

  constructor(public transactionService: TransactionService) { }

  @Input() transactionlList: Array<transactionModel> = new Array<transactionModel>();
  public total: number = 0;
  public lucro: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.transactionlList.currentValue != null) {
      let valorCompra = this.transactionlList.filter(x => x.type == 'Compra').reduce((valorCompra, t) => {
        return valorCompra + t.value;
      }, 0)
      let valorVenda = this.transactionlList.filter(x => x.type == 'Venda').reduce((valorVenda, t) => {
        return valorVenda + t.value;
      }, 0)
      this.total = valorVenda - valorCompra;
    }
  }

  ngOnInit(): void {

  }
}

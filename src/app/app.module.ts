import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { StatementTransactionComponent } from './statement-transaction/statement-transaction.component';
import { TransactionService } from './services/transactions.service';

@NgModule({
  declarations: [
    AppComponent,
    NewTransactionComponent,
    StatementTransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [TransactionService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

export class transactionModel{

  constructor() {
    this.name = '';
    this.value = 0;
    this.type = 'Venda';
  }

  public id: number;
  public date: string;
  public name: string;
  public value: number;
  public type: string;
}

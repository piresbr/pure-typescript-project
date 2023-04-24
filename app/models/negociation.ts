export class Negociation {
  private _date: Date;
  private _quantity: number;
  private _valueMoney: number;

  constructor(date: Date, quantity: number, valueMoney: number) {
    this._date = date;
    this._quantity = quantity;
    this._valueMoney = valueMoney;
  }

  get date(): Date {
    return this._date;
  }

  get quantity(): number {
    return this._quantity;
  }

  get valueMoney(): number {
    return this._valueMoney;
  }

  get volume(): number {
    return this._quantity * this._valueMoney;
  }
}

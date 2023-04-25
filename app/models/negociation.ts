export class Negociation {
  constructor(
    private _date: Date,
    public readonly quantity: number,
    public readonly valueMoney: number
  ) {}

  get volume(): number {
    return this.quantity * this.valueMoney;
  }

  get date(): Date {
    const date = new Date(this._date.getTime());
    return date;
  }
}

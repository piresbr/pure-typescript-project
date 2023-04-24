export class Negociation {
    constructor(date, quantity, valueMoney) {
        this._date = date;
        this._quantity = quantity;
        this._valueMoney = valueMoney;
    }
    get date() {
        return this._date;
    }
    get quantity() {
        return this._quantity;
    }
    get valueMoney() {
        return this._valueMoney;
    }
    get volume() {
        return this._quantity * this._valueMoney;
    }
}

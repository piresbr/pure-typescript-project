export class Negociation {
    constructor(_date, quantity, valueMoney) {
        this._date = _date;
        this.quantity = quantity;
        this.valueMoney = valueMoney;
    }
    get volume() {
        return this.quantity * this.valueMoney;
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
}

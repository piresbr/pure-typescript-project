import { Negociation } from "../models/negociation.js";
export class NegociationController {
    constructor() {
        this.date = document.querySelector("#data");
        this.quantity = document.querySelector("#quantidade");
        this.valueMoney = document.querySelector("#valor");
    }
    createNegociation() {
        this.newNegociation();
    }
    newNegociation() {
        const exp = /-/g; //pegando todos os traços da string de data
        const date = new Date(this.date.value.replace(exp, ","));
        const quantity = parseInt(this.quantity.value);
        const valueMoney = parseFloat(this.valueMoney.value);
        const negociation = new Negociation(date, quantity, valueMoney);
        return negociation;
    }
}

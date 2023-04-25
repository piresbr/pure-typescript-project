import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
export class NegociationController {
    constructor() {
        this.negociations = new Negociations();
        this.date = document.querySelector("#data");
        this.quantity = document.querySelector("#quantidade");
        this.valueMoney = document.querySelector("#valor");
    }
    //1- crio a negociação de acordo com o parametros
    createNegociation() {
        const exp = /-/g; //pegando todos os traços da string de data
        const date = new Date(this.date.value.replace(exp, ","));
        const quantity = parseInt(this.quantity.value);
        const valueMoney = parseFloat(this.valueMoney.value);
        return new Negociation(date, quantity, valueMoney);
    }
    // 2- adiciono a negociação depois de criada ao array de negociações
    addNegociation() {
        const negociation = this.createNegociation();
        negociation.date.setDate(12);
        this.negociations.addNegociation(negociation);
        console.log(this.negociations.listNegociations());
        this.resetFormNegociation();
    }
    resetFormNegociation() {
        this.date.value = "";
        this.quantity.value = "";
        this.valueMoney.value = "";
        this.date.focus();
    }
}

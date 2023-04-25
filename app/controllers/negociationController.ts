import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";

export class NegociationController {
  private date: HTMLInputElement;
  private quantity: HTMLInputElement;
  private valueMoney: HTMLInputElement;
  private negociations = new Negociations();

  constructor() {
    this.date = document.querySelector("#data");
    this.quantity = document.querySelector("#quantidade");
    this.valueMoney = document.querySelector("#valor");
  }

  //1- crio a negociação de acordo com o parametros
  createNegociation(): Negociation {
    const exp = /-/g; //pegando todos os traços da string de data
    const date = new Date(this.date.value.replace(exp, ","));
    const quantity = parseInt(this.quantity.value);
    const valueMoney = parseFloat(this.valueMoney.value);
    return new Negociation(date, quantity, valueMoney);
  }

  // 2- adiciono a negociação depois de criada ao array de negociações
  addNegociation(): void {
    const negociation = this.createNegociation();
    negociation.date.setDate(12);
    this.negociations.addNegociation(negociation);
    console.log(this.negociations.listNegociations());
    this.resetFormNegociation();
  }

  resetFormNegociation(): void {
    this.date.value = "";
    this.quantity.value = "";
    this.valueMoney.value = "";
    this.date.focus();
  }
}

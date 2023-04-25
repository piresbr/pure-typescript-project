import { Negociation } from "./negociation.js";

export class Negociations {
  private negociations: Negociation[] = [];

  //adiciona cada negociation em um array
  addNegociation(negociation: Negociation) {
    this.negociations.push(negociation);
  }

  //lista negociations
  listNegociations(): readonly Negociation[] {
    return this.negociations;
  }
}

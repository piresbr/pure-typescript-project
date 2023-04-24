import { Negociation } from "./negociation";

export class Negociations {
  private negociations: Array<Negociation> = [];

  constructor() {}

  //adiciona cada negociation em um array
  addNegociation(negociation: Negociation): number {
    return this.negociations.push(negociation);
  }

  //lista negociations
  listNegociations(): Array<Negociation> {
    return this.negociations;
  }
}

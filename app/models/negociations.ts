import { Negociation } from "./negociation";

export class Negociations {
  private negociations: Array<Negociation> = [];

  constructor() {}

  addNegociation(negociation: Negociation): number {
    return this.negociations.push(negociation);
  }

  listNegociations(): Array<Negociation> {
    return this.negociations;
  }
}

export class Negociations {
    constructor() {
        this.negociations = [];
    }
    //adiciona cada negociation em um array
    addNegociation(negociation) {
        this.negociations.push(negociation);
    }
    //lista negociations
    listNegociations() {
        return this.negociations;
    }
}

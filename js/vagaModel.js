class Vaga {
    constructor(_id, andar, numero, ocupada) {
        this._id = _id;
        this.andar = andar;
        this.numero = numero;
        this.ocupada = ocupada;

        this.id = FormatNumberLength(this.andar, 2) + FormatNumberLength(this.numero, 3);
    }

    toString() {
        return FormatNumberLength(this.andar, 2) + '-' + FormatNumberLength(this.numero, 3);
    }
}
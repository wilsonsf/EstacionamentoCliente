function FormatNumberLength(num, length) {
    let r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

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

function getVagasLivres() {
    var itens = [];
    let vagas = [];
    $.getJSON("http://localhost:3000/vaga/", function (data) {
        $.each(data, function (key, val) {
            let id = val['_id'];
            let andar = val['andar'];
            let numero = val['numero'];
            let ocupada = val['ocupada'];

            let v = new Vaga(id, andar, numero, ocupada);
            // let li = "<li class='list-group-item' id='" + id + ">" + v.toString() + "</li>";

            vagas.push(v);
            // itens.push(li);

            // console.log(li);

            // $('#vagasLivres').append(li);
        });
    });

    console.log(vagas);

    return vagas;

}

function getVagasOcupadas() {

    return [];
}

$(document).ready(function () {
    var vagas = getVagasLivres();

    $('#vagasLivres').append(() => {
        $.each(vagas, (vaga) => {

            return "<li class='list-group-item' id='" + vaga._id + "\'>" + vaga.toString() + "</li>";
        });
    });
});
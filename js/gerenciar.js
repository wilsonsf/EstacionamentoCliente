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
    let vagas = [];
    $.getJSON("http://localhost:3000/vaga/desocupada", function (data) {
        $.each(data, function (key, val) {
            let id = val['_id'];
            let andar = val['andar'];
            let numero = val['numero'];
            let ocupada = val['ocupada'];

            let v = new Vaga(id, andar, numero, ocupada);

            vagas.push(v);
        });
    });

    return vagas;
}

function getVagasOcupadas() {
    let vagas = [];
    $.getJSON("http://localhost:3000/vaga/ocupada", function (data) {
        $.each(data, function (key, val) {
            let id = val['_id'];
            let andar = val['andar'];
            let numero = val['numero'];
            let ocupada = val['ocupada'];

            let v = new Vaga(id, andar, numero, ocupada);

            vagas.push(v);
        });
    });

    return vagas;
}

function ocuparVaga(andar, numero) {
    $.post("")
}

function updateVagasLivres() {
    let vagas = getVagasLivres();

    let vagasLivres = $('#vagas-livres');
    vagasLivres.html('');
    vagas.forEach(function (element, index, array) {
        vagasLivres.append(
            "<li class='list-group-item' id='" + element._id + "'>" + element.toString() + "</li>"
        )
    });
}

function updateVagasOcupadas() {
    let vagas = getVagasOcupadas();

    let vagasOcupadas = $('#vagas-ocupadas');
    vagasOcupadas.html('');
    vagas.forEach(function (element, index, array) {
        vagasOcupadas.append(
            "<li class='list-group-item' id='" + element._id + "'>" + element.toString() + "</li>"
        )
    });
}

function atualizaListagens() {
    updateVagasLivres();
    updateVagasOcupadas();
}

$(document).ready(function () {
    updateVagasLivres();
});


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

function cadastraVaga() {
    try {
        let andar = parseInt(document.getElementById('vagaAndar').value);
        let numero = parseInt(document.getElementById('vagaNumero').value);

        $.post("http://localhost:3000/vaga/",{'andar': andar, 'numero': numero});
    } catch (e) {
        //valor inválido no formulário
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

function ocuparVaga() {

    // $.post("http://localhost:3000/vaga/ocupar/");
}

function updateVagasLivres() {
    let vagas = getVagasLivres();

    let vagasLivres = document.getElementById('vagas-livres')
    vagasLivres.innerHTML = '';
    vagas.forEach(function (element, index, array) {
        vagasLivres.innerHTML +=
            "<li class='list-group-item' id='" + element._id + "'>" + element.toString() + "</li>"

    });
}

function updateVagasOcupadas() {
    let vagas = getVagasOcupadas();

    let vagasOcupadas = document.getElementById('vagas-ocupadas');
    vagasOcupadas.innerHTML = '';
    vagas.forEach(function (element, index, array) {
        vagasOcupadas.innerHTML +=
            "<li class='list-group-item' id='" + element._id + "'>" + element.toString() + "</li>"
    });
}

function atualizaListagens() {
    updateVagasLivres();
    updateVagasOcupadas();
}

$(document).ready(function () {
    updateVagasLivres();
});


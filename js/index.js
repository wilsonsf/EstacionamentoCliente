function FormatNumberLength(num, length) {
    let r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
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

function updateVagasLivres() {
    let vagas = getVagasLivres();

    let vagasLivres = document.getElementById('vagas-livres')
    vagasLivres.innerHTML = '';
    vagas.forEach(function (element, index, array) {
        vagasLivres.innerHTML +=
            "<li class='list-group-item' id='" + element._id + "'>" + element.toString() + "</li>"
    });
}

function atualizaVagasOcupadas() {
    let vagas = getVagasOcupadas();

    let vagasOcupadas = document.getElementById('vagas-ocupadas');
    vagasOcupadas.innerHTML = '';
    vagas.forEach(function (element, index, array) {
        vagasOcupadas.innerHTML +=
            "<li class='list-group-item' id='" + element._id + "'>" + element.toString() + "</li>"
    });
}

function updateQuantidadeVagasLivres() {
    let numero = "-/-";

    $.getJSON("http://localhost:3000/vaga/desocupada/quantidade", function (data) {
        console.log("Data: " + data);

        numero = parseInt(data);

        console.log("Quantidade: " + numero);


        if (Number.isInteger(numero)) {
            console.log("É um número");
            $('#numero-vagas-livres-h').html(numero);
        } else {
            console.log("É outra coisa aí");
        }
    });
}

function atualizaQuantidadeNaPagina(numero) {
    console.log("Quantidade: " + numero);

    // $('#numero-vagas-livres-h').html(numero);
    document.getElementById('numero-vagas-livres-h').innerHTML = numero;
}

function atualizaListagens() {
    updateVagasLivres();
    atualizaVagasOcupadas();
    updateQuantidadeVagasLivres();
}

$(document).ready(function () {
    atualizaListagens();
});


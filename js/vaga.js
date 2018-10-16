function FormatNumberLength(num, length) {
    let r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

function cadastraVaga() {
    try {
        let andar = parseInt(document.getElementById('vagaAndar').value);
        let numero = parseInt(document.getElementById('vagaNumero').value);

        $.post("http://localhost:3000/vaga/", {'andar': andar, 'numero': numero}, function () {
            alert("Cadastrou, parabéns!")
        });
    } catch (e) {
        alert("Inválido andar ou número!")
    }
}

function ocupaVaga() {
    let vagaId = $('#vagaAndar').val() + $('#vagaNumero').val();
    $.post("http://localhost:3000/vaga/ocupar/" + vagaId, function (data, textStatus, jqXHR) {
        alert("Ocupou, parabéns!")
    });
}

function desocupaVaga() {
    let vagaId = $('#vagaAndar').val() + $('#vagaNumero').val();
    $.post("http://localhost:3000/vaga/desocupar/" + vagaId, function (data, textStatus, jqXHR) {
        alert("Desocupou, parabéns!")
    });
}

function excluirVaga() {

    let vagaId = $('#vagaAndar').val() + $('#vagaNumero').val();
    $.ajax({
        url: "http://localhost:3000/vaga/" + vagaId,
        type: 'DELETE',
        success: function () {
            alert("Excluiu, parabéns!")
        }
    });
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

function updateVagasOcupadas() {
    let vagas = getVagasOcupadas();

    let vagasOcupadas = document.getElementById('vagas-ocupadas');
    vagasOcupadas.innerHTML = '';
    vagas.forEach(function (element, index, array) {
        vagasOcupadas.innerHTML +=
            "<li class='list-group-item' id='" + element._id + "'>" + element.toString() + "</li>"
    });
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

function atualizaListagens() {
    updateVagasLivres();
    updateVagasOcupadas();
}

$(document).ready(function () {
    updateVagasLivres();
});


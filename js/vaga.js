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

function atualizaListagens() {
    getVagasLivres();
    getVagasOcupadas();
}

$(document).ready(function () {
    atualizaListagens();
});


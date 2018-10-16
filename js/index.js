function FormatNumberLength(num, length) {
    let r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

function getAndUpdateQuantidadeVagasLivres() {
    let numero = "-/-";

    $.getJSON("http://localhost:3000/vaga/desocupada/quantidade", function (data) {
        numero = parseInt(data);

        if (Number.isInteger(numero)) {
            $('#numero-vagas-livres-h').html(numero);
        }
    });
}

// $(document).ready(function () {
//     atualizaListagens();
//     getAndUpdateQuantidadeVagasLivres();
// });
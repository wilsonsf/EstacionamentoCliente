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

        console.log("getVagasOcupadas:16");
        console.log(vagas);
        atualizaVagasOcupadas(vagas);
    });
}

function atualizaVagasOcupadas(vagas) {
    if (!Array.isArray(vagas)) {
        // dados corrompidos
    } else {
        let vagasArray = new Array(vagas);

        let vagasOcupadas =
            $('#vagas-ocupadas');

        console.log("atualizaVagasOcupadas:31");
        console.log(vagasOcupadas);
        // document.getElementById('vagas-ocupadas');

        vagasOcupadas.html('');
        console.log("atualizaVagasOcupadas:36");
        console.log(vagasOcupadas);


        vagasArray.forEach(function (element, index, array) {
            vagasOcupadas.append(
                "<li class='list-group-item'" + element.toString() + "</li>")
        });
        console.log("atualizaVagasOcupadas:45");
        console.log(vagasOcupadas);
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

        console.log("getVagasLivres:64");
        console.log(vagas);
        atualizaVagasLivres(vagas);
    });
}

function atualizaVagasLivres(vagas) {
    if (!Array.isArray(vagas)) {
        // dados corrompidos
    } else {
        let vagasArray = new Array(vagas);

        let vagasLivres =
            $('#vagas-livres');

        console.log("atualizaVagasLivres:78");
        console.log(vagasLivres);

        vagasLivres.html('');
        vagasArray.forEach(function (element, index, array) {
            vagasLivres.append(
                "<li class='list-group-item'>"
                + element.toString() + "</li>");
        });
    }
}

function atualizaListagens() {
    getVagasLivres();
    getVagasOcupadas();
}

$(document).ready(function () {
    // Pegar os elementos
    let $bt = $("button");
    let $cep = $("#cep");
    let $endereco = $("#endereco");
    let $complemento = $("#complemento");
    let $bairro = $("#bairro");
    let $cidade = $("#cidade");
    let $nr = $("#nr");
    let $uf = $("#uf");

    // Evento click
    $bt.on("click", function () {
        let servidor = "https://viacep.com.br/ws/" + $cep.val() + "/json/";

        $.getJSON(servidor)
            .done(function (data) {
                $endereco.val(data["logradouro"]);
                $complemento.val(data["complemento"]);
                $bairro.val(data["bairro"]);
                $cidade.val(data["localidade"]);
                $nr.val(data["unidade"]);
                $uf.val(data["uf"]);

              
            })
            .fail(function (er) {
                console.error(er);
            });
    });
});

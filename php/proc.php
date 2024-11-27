<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $cep = htmlspecialchars($_POST['cep'] ?? '');
    $endereco = htmlspecialchars($_POST['endereco'] ?? '');
    $complemento = htmlspecialchars($_POST['complemento'] ?? '');
    $bairro = htmlspecialchars($_POST['bairro'] ?? '');
    $cidade = htmlspecialchars($_POST['cidade'] ?? '');
    $nr = htmlspecialchars($_POST['nr'] ?? '');
    $uf = htmlspecialchars($_POST['uf'] ?? '');

    echo "Dados recebidos com sucesso!<br>";
    echo "CEP: $cep<br>";
    echo "Endereço: $endereco<br>";
    echo "Complemento: $complemento<br>";
    echo "Bairro: $bairro<br>";
    echo "Cidade: $cidade<br>";
    echo "Número: $nr<br>";
    echo "Estado: $uf<br>";
}
?>

function enviar() {

    const cep = $('#cep').val();
    
  
    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
  
            if (data.erro) {
                alert("CEP não encontrado");
            } else {
                $('#endereco').val(data.logradouro);
                $('#complemento').val(data.complemento);
                $('#bairro').val(data.bairro);
                $('#cidade').val(data.localidade);
                $('#uf').val(data.uf);
            }
        },
        error: function(error) {
            console.error("Erro ao consultar o CEP: ", error);
        }
    });
}

function cadastrar() {

    const endereco = $('#endereco').val();
    const complemento = $('#complemento').val();
    const bairro = $('#bairro').val();
    const cidade = $('#cidade').val();
    const nr = $('#nr').val();
    const uf = $('#uf').val();

    $('#json').html(`
        <h4>Cadastro realizado:</h4>
        <p>Endereço: ${endereco}</p>
        <p>Complemento: ${complemento}</p>
        <p>Bairro: ${bairro}</p>
        <p>Cidade: ${cidade}</p>
        <p>Número: ${nr}</p>
        <p>Estado: ${uf}</p>
    `);
}

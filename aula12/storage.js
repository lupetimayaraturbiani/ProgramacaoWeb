function salvarDados()
{
    let cpf = document.getElementById('txtCPF').value;
    let nome = document.getElementById('txtNome').value;
    let fone = document.getElementById('txtFone').value;

    let dadosUsuario = {nome : nome, fone: fone};

    if(localStorage.getItem(cpf))
    {
        alert('Esse cpf já foi cadastrado, tente novamente');
    }
    else
    {
        localStorage.setItem(cpf, JSON.stringify(dadosUsuario));

        alert('Dados cadastrados com sucesso!');
    }
}

function limparDados()
{
    let cpf = document.getElementById('txtCPF').value;
    localStorage.removeItem(cpf);
    alert('Dados removidos com sucesso!');
}

function mostrarDados()
{
    let cpf = document.getElementById('txtCPF').value;

    let dadosSalvo = localStorage.getItem(cpf);

    if(!dadosSalvo)
    {
        alert('Não há nenhum registro');
    }
    else
    {
        let usuario = JSON.parse(dadosSalvo);
        document.getElementById('retornoDados').innerText ='CPF: ' + cpf + '\nNome: ' + usuario.nome + '\nFone: ' + usuario.fone;
    }
}
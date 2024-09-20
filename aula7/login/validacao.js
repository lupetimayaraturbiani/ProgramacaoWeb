function validaLogin() {
    let nomeUsuario = document.getElementById('txtUsuario').value;
    let senha = document.getElementById('txtSenha').value;

    if(nomeUsuario == '123' && senha == '1234')
    {
        alert('Senha correta!')
        window.location.href = 'https://www.google.com.br'
    }
    else if(nomeUsuario == '')
    {
        alert('O campo Nome de Usuário é obrigatório!');
        //Faz com que nenhuma linha de código seja executada depois de return false
        //return false;
    }
    else
    {
        alert('Nome de usuário ou senha incorreto! Tente novamente.');
    }
}
window.onload = function(){
    const campoCEP = document.getElementById('txtCEP');

    campoCEP.addEventListener('blur', function(){
        const caixaCEP = campoCEP.value;

        if(caixaCEP.length == 8){
            const urlCEP = `https://viacep.com.br/ws/${caixaCEP}/json`;
            fetch(urlCEP)
            .then(function(response){
                if(response.ok != true)
                {
                    alert('Você não está conectado na internet');
                }
                return response.json();
            })
            .then(function(data){
                document.getElementById('txtRua').value = data.logradouro;
                document.getElementById('txtCidade').value = data.localidade;
                document.getElementById('txtBairro').value = data.bairro;
            })
        }
    });
}
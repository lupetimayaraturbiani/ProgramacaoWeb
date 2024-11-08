import React from 'react';
import { useForm } from 'react-hook-form';

function Formulario() {

    const { handleSubmit, formState: reset } = useForm();

    const chamarBotao = data => {

        alert('Cadastro concluído com sucesso');
        reset();
    };

    return (
        <form onSubmit={handleSubmit(chamarBotao)}>
            <div>
                <label html="nome">Nome do Ator: </label>
                <input id="nome" type="text" />
            </div>

            <div>
                <label html="urlImagem">Link da Imagem: </label>
                <input id="url" type="text" />
            </div>

            <div>
                <label html="personagem">Personagem: </label>
                <input id="personagem" type="text" />
            </div>

            <div>
                <button type="submit">Cadastrar Ator</button>
            </div>

        </form>
    );

};

export default Formulario;
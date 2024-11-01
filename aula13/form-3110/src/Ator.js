import React, {useState} from 'react';

function Ator ({nome, personagem, imagem})
{
    const [curtida, setCurtidas] = useState(0);
    const incrementarCurtidas = () => {
        setCurtidas(curtida + 1);

    };

    return (
        <div>
            <img src={imagem}></img>
            <h3>{nome}</h3>
            <p>Personagem do filme: {personagem}</p>

            <button onClick={incrementarCurtidas}>Curtir({curtida})</button>
        </div>
    );
}

export default Ator;
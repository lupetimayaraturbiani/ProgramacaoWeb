import React from 'react';
import Ator from './Ator';

function App() {
  return (
    <div className='App'>
      <h1>Contador de Curtidas dos Atores</h1>
      <Ator
        nome="Robert Downey Jr"
        personagem="Homem de Ferro"
        imagem="https://phantom-marca-mx.unidadeditorial.es/445ca72f344e1dcfa5ceec0d6f5140fb/resize/1200/f/webp/mx/assets/multimedia/imagenes/2023/10/17/16975693326773.jpg">
      </Ator>
      <Ator
        nome="Chadwick Boseman"
        personagem="Pantera Negra"
        imagem="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/13185_6714AB1892201027-2.jpg">
      </Ator>
      <Ator
        nome="Elizabeth Olsen"
        personagem="Wanda"
        imagem="https://cinepop.com.br/wp-content/uploads/2021/03/wandavision-17.jpg">
      </Ator>
    </div>
  );
}

export default App;

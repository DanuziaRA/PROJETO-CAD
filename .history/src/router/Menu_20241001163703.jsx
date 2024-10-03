import React, { useState } from 'react';

const Menu = () => {

  return (
    <nav>
      <h1>Criar Cadastros:</h1>
      <ul>
        <ul>
              <button>Pessoa Física</button>
            <li><a href = "/cadastropf"></a></li>
            <button>Pessoa Jurídica</button>
            <li><a href="/cadastropj">Pessoa Jurídica</a></li>
            <li><a href="/cadastroprof">Professor</a></li>
            <li><a href="/cadastroaluno">Aluno</a></li>
            <li><a href="/cadastroforn">Fornecedor</a></li>
      </ul>
          
      </li>
        </ul>
    </nav>
  );
}
export default Menu;



import React, { useState } from 'react';

const Menu = () => {

  return (
    <nav>
      <h1>Criar Cadastros:</h1>
      <ul>
        <li
        >
          <button>Menu</button>
        
            <ul>
              <button
            <li><a href = "/cadastropf">Pessoa Física</a></li>
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



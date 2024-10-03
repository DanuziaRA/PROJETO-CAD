import React, { useState } from 'react';
import { Link } from "react-router-dom"
import './Menu.css';

const Menu = () => {

  return (
    <nav>
      <ul className="menu-links"></ul>
      <h1>Criar Cadastros:</h1>
      <div>
              <button>Pessoa Física</button>
            <a href = "/cadastropf"></a>
            </div>

            <div>
            <button>Pessoa Jurídica</button>
            <a href="/cadastropj"></a>
            </div>

            <div>
            <button>Professor</button>
            <a href="/cadastroprof"></a>
            </div>

            <div>
            <button>Aluno</button>
            <a href="/cadastroaluno"></a>
            </div>

            <div>
            <button>Fornecedor</button>
            <a href="/cadastroforn"></a>
            </div>
            </nav>
  );
}
export default Menu;



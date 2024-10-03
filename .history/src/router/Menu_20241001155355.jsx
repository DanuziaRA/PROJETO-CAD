import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () =>{
  return (
    <nav>
      <h1>
      <ul>
      <li><Link to="/cadastro">Pessoa Física</Link></li>
      <ul>
      <li><Link to="/cadastropj">Pessoa Jurídica</Link></li>
      </ul>

      </ul>
    </nav>
  )
}




export default Menu

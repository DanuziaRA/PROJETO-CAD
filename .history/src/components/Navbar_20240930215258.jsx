import { Link } from "react-router-dom"
import logo from './../assets/c'
import { Component } from "react";
import './Navbar.css';


const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="navbar-logo">
        <Link to="/">
            <img src={logo} alt=""/>
            </Link>
            <h1>Centro Universitário PRO</h1>
            </div>
            <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="/Company">Sobre nós</a></li>
            <li><a href= "/Contact">Contato</a></li>            
            </ul>
    </nav>
    )
}

export default Navbar

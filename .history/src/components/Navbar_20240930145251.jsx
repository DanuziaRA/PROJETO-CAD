import { Link } from "react-router-dom"
import logo from './../assets/LOGO novo.png'
import { Component } from "react"
import Navbar.css from './Navbar.css'



const Navbar = () => {
    return (
    <nav className={components.navbar}>
        <Link to="/">
        <img src={logo} alt=""/>
        </Link>
<Link to="/">Home</Link>
<Link to="/">Quem Somos</Link>
<Link to="/contact">Contatos</Link>
    </nav>
    )
}

export default Navbar

import { Link } from "react-router-dom"
import Navbar.css from ''

const Navbar = () => {
    return (
    <nav>
<Link to="/">Home</Link>
<Link to="/">Quem Somos</Link>
<Link to="/contact">Contatos</Link>
    </nav>
    )
}

export default Navbar

import { FaFacebook, FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom";

function Footer(){
    return (
        <nav>
            <Link to="https://www.facebook.com/?locale=pt_BR">
            < FaFacebook alt=""/>
            </Link>
            <Link to="https://www.instagram.com/">
            < FaInstagram alt=""/>
            </Link>
            <Link to="/">
            < FaTwitter alt=""/>
            </Link>
            <Link to="https://www.linkedin.com.br">
            < FaLinkedin alt=""/>
            </Link>
            <p><span></span>Centro Universitário Pro</span>&copy; </p>
            </nav>
            

    );

}
export default Footer
import { Link } from "react-router-dom";

function C() {
    return (
    <div>
        <h1>Página de contato</h1>
        {
            <p>
                <Link to="/contact/centro@univ.com.br">e-mail</Link>
            </p>
            }
    </div>
    );
};

export default Contact;
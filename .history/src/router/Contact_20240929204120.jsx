import { Link } from "react-router-dom";

function Contact() {
    return (
    <div>
        <h1>Página de contato</h1>
        {
            <p>
                <Link> to="/contact/</Link>
            </p>
        }
    </div>
    );
};

export default Contact;

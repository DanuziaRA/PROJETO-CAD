import { useState } from "react";

import "./Login.css";

const Login = () => {

const [username, setUsername] = useState("");
const [password, setpassword] = useState("");

const handleSubmit = (event) => {
event.preventDefault();

alert("Enviando os dados");

console.log("teste", username,password);
console.log("Envio");
};

    return (
        
    <div className="container">
        <form onSubmit={handleSubmit}>
            <p>Acesse o sistema</p>
            <div className="input-field">
            <input type="email" 
            placeholder = "E-mail"
            required
            onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="input-field">
            <input type="password" 
            placeholder = "Senha"
            required
            onChange={(e) => setpassword(e.target.value)}/>
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembrar usuário?
                    </label>
                <a href="/forget"> Esqueceu a senha?</a>
                </div>

            <button>Entrar</button>
            <a href="/src/router"></a>
            <div className="signup-link">
                <p>Não tem conta? <a href="contact/:id">Solicitar cadastro</a></p>
            </div>
        </form>
        </div>   
    )
}

export default Login
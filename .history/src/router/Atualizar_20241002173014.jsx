import { useState } from "react";


function Atualizar  ()  {
  const handleContact = () =>{
    console.log("Buscar!")
    return navigate("/Menu");
};
  return (
    <div className="Atualizar">
      <form>
        <h1>Para:centropro@uni.com.br</h1>
        <div className="input-field">
            <input type="email" 
            placeholder = "E-mail"
            required
       
        </div>
    </form>
    </div>
  );
}

export default Atualizar

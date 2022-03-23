import "./Input.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Input({onChange}){
    const [valore, setValore] = useState("");
    const navigazione = useNavigate();

    return(
        <div className="containerNome">
            <div className="input">
                <h1 className="cercaNome">
                    Cerca in base al nome:
                </h1>

                <input
                    type="text"
                    className="inputNome"
                    placeholder="Es. Margarita"
                    value={valore}
                    onChange={function(evento){
                        setValore(evento.target.value);
                        onChange(evento.target.value);
                    }}
                />
            </div>

            <button className="random" onClick={function(){
                navigazione("/drinks/random");
            }}>RANDOM</button>
        </div>
    )
}

export default Input;
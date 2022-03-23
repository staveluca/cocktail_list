import "./Input.css"
import { useState } from "react";

function Input({onChange}){
    const [valore, setValore] = useState("");

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
        </div>
    )
}

export default Input;
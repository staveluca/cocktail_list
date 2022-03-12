import { useState } from "react";
import "./Input.css"

//funzione che passa il valore ogni volta che cambia
function Input({onChange}){
    //stato per la gestione del cambio di valore
    const [valore, setValore] = useState("");

    return(
        <div className="containerNome">
            <h2 className="cercaNome">Cerca in base al nome del cocktail:</h2>

            {/*form di input che modifica il valore tramite state*/}
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
    )
}

export default Input;
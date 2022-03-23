import "./Input.css"
import { useState } from "react";

function Input({onChange}){
    const [valore, setValore] = useState("");

    return(
        <div className="inputContainer">
            <div className="containerNome">
                <h1 className="cercaNome">
                    Cerca in base al nome
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

            <div className="containerIngr">
                <h1 className="cercaIngr">
                    Cerca in base agli ingredienti
                </h1>

                <input
                    type="text"
                    className="inputIngr"
                    placeholder="Es. Vodka"
                />
            </div>

            <div className="buttons">
                <div className="contLike">
                    <div className="headerLike"></div>
                </div>
                
                <div className="contShop">
                    <div className="headerShop"></div>
                </div>
            </div>
        </div>
    )
}

export default Input;
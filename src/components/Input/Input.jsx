import "./Input.css"
import { useState } from "react";
import { useSelector } from 'react-redux';

function Input({onChange}){
    const [valore, setValore] = useState("");

    const carrello = useSelector(state => state.carrello.ingredienti);

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

            <div className="buttons">
                <div className="contLike">
                    <div className="headerLike"></div>
                </div>
                
                <div className="contShop">
                    <div className="headerShop">
                        <div className="toBuy">{carrello?.length}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Input;
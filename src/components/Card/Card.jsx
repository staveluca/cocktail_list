import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { addSalvati } from "../../slices/salvati";

function Card({idDrink, immagine, nome, alcolico}){
    //variabile per la navigazione sulla pagina del drink
    const navigazione = useNavigate();
    const [drink] = useState ([]);
    const dispatch2 = useDispatch();
    
    return(
        //al click della card si apre la pagina con descrizione del drink
        <div className="containerCard" onClick={function (){
            navigazione("/drinks/"+idDrink);
        }}>
            <img className="immagineDrink" src={immagine} alt={nome}/>
            <h2 className="nomeDrink">{nome}</h2>

            <div className="headerLikeCard">
                <div className="headerLikeCardIcon" onClick={function() {
                    dispatch2(addSalvati(drink));
                }}></div>
            </div>
        </div>
    )
}

export default Card;
import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card({idDrink, immagine, nome, alcolico}){
    //variabile per la navigazione sulla pagina del drink
    const navigazione = useNavigate();
    
    return(
        //al click della card si apre la pagina con descrizione del drink
        <div className="containerCard" onClick={function (){
            navigazione("/drinks/"+idDrink);
        }}>

            <img className="immagineDrink" src={immagine} alt={nome}/>
            <h2 className="nomeDrink">{nome}</h2>
            <h4 className="drinkAlcolico">{alcolico}</h4>
        </div>
    )
}

export default Card;
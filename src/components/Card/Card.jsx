import { useNavigate } from "react-router-dom";

function Card({idDrink, immagine, nome, alcolico}){
    //variabile per la navigazione sulla pagina del drink
    const navigazione = useNavigate();
    
    return(
        //al click della card si apre la pagina con descrizione del drink
        <div className="card" onClick={function (){
            navigazione("/drinks/"+idDrink);
        }}>

            <img src={immagine}/>
            <h2 className="nome">{nome}</h2>
            <h4 className="alcolico">{alcolico}</h4>
        </div>
    )
}

export default Card;
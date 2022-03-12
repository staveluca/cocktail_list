import { useEffect, useState } from "react";
import Card from "../Card/Card";

function ListaCard({filtro}){

    const [lista, setLista] = useState([]);
    const [errore, setErrore] = ("");

    useEffect(function(){
        fetchLista();
    }, [filtro]);

    const fetchLista = function (){
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+filtro)

        .then (risposta => {
            return risposta.json();
        })

        .then (dati => {
            console.log (dati);
            setErrore('');
            setLista(dati.drinks);
        })

        .catch(err => {
            console.error('ops', err);
            setErrore('Si è verificato un errore: ' + err);
        })
    }

    if(errore.length > 0){
        return (<h2>{errore}</h2>)
    }

    if(!lista){
        return(<h2>COCKTAIL NON TROVATO!</h2>)
    }

    return(
        <div className="container">
            {
                lista.map((item) => (
                    <Card
                        key={item.idDrink}
                        idDrink={item.idDrink}
                        nome={item.strDrink}
                        immagine={item.strDrinkThumb}
                        alcolico={item.strAlcoholic}
                    />
                ))
            }
        </div>
    )
}

export default ListaCard;
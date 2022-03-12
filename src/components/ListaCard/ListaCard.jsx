import { useEffect, useState } from "react";
import "./ListaCard.css"
import Card from "../Card/Card";

function ListaCard({filtro}){
    //variabili per la gestione della lista e degli errori tramite state
    const [lista, setLista] = useState([]);
    const [errore, setErrore] = useState("");

    //utilizzo della funzione al cambio del filtro
    useEffect(function(){
        fetchLista();
    }, [filtro]);

    //fetch con API cocktail
    const fetchLista = function (){
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+filtro)
            
            .then (risposta => {
                return risposta.json();
            })

            //prelievo dei dati
            .then (dati => {
                console.log (dati);
                setErrore('');
                setLista(dati.drinks);
            })
            
            //errori
            .catch (err => {
                console.errore('ops', err);
                setErrore('Si è verificato un errore: ' + err);
            })
    };

    //gestione dell'errore o del cocktail non trovato
    if (errore.length > 0) {
        return (<h2>{errore}</h2>)
    }

    if(!lista){
        return(<h2>Cocktail non trovato!</h2>)
    }

    

    return(
        <div className="containerLista">
            {/*map degli elementi all'interno della lista e passaggio delle proprietà*/}
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
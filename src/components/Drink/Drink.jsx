import { useState,useEffect } from "react";
import "./Drink.css";

function Drink({idDrink}){
    const [drink, setDrink] = useState ([]);
    const [errore,setErrore] = useState("");

    //effect per utilizzo funzione fetch al cambio di id
    useEffect(()=>{
        fetchDrink()
    },[idDrink]);

    //fetch con API singolo drink
    const fetchDrink = function() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+idDrink)
            
            .then(risposta => {
                return risposta.json();
            }).
            
            //prelievo dei dati
            then(dati => {
                console.log(dati);
                setErrore('');
                setDrink(dati.drinks[0]);
            }).
            
            //gestione errori
            catch(err => {
                console.errore('ops', err);
                setErrore('Si è verificato un errore: ' + err);
            })
    };

    //array per gestione degli ingredienti
    const ingredienti = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    return(
        <div className="drink">
            <div className="left">
                <img className="imgSingolo" src={drink.strDrinkThumb}/>
                <h1 className="nomeSingolo">{drink.strDrink}</h1>
                <h3 className="categoriaSingolo">{drink.strCategory}</h3>
                <p className="bicchiereSingolo">Da servire in: <b>{drink.strGlass}</b></p>
            </div>

            <div className="right">
                <h2 className="ingr">Ingredienti:</h2>
                <ul className="listaIngr">
                    {
                        //map degli ingredienti da visualizzare
                        ingredienti.map(function(indice){
                            if(drink['strIngredient'+indice]){
                                return (
                                    <li key={indice} className="ingrediente">
                                        {(drink['strIngredient'+indice])}
                                        <span className="misure">{(drink['strMeasure'+indice])}</span>
                                    </li>
                                )
                            }else return null;
                        })
                    }
                </ul>

                <h2 className="prep">Preparazione:</h2>
                <p className="preparazione">{drink.strInstructionsIT}</p>
                
            </div>
        </div>
    )
}

export default Drink;
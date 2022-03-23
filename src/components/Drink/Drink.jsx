import { useState,useEffect } from "react";
import "./Drink.css";
import Tilt from "react-parallax-tilt";
import Navbar from "../Navbar/Navbar";

function Drink({idDrink}){
    const [drink, setDrink] = useState ([]);
    const [errore,setErrore] = useState("");
    const [lingua, setLingua] = useState("strInstructions");

    //effect per utilizzo funzione fetch al cambio di id
    useEffect(()=>{
        fetchDrink()
    },[idDrink]);

    //fetch con API singolo drink
    const fetchDrink = function() {

        fetch(idDrink== 'random' ? 'https://www.thecocktaildb.com/api/json/v1/1/random.php' : "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+idDrink)
            
            .then(risposta => {
                return risposta.json();
            })
            
            //prelievo dei dati
            .then(dati => {
                console.log(dati);
                setErrore('');
                setDrink(dati.drinks[0]);
            })
            
            //gestione errori
            .catch(err => {
                console.error('ops', err);
                setErrore('Si è verificato un errore: ' + err);
            })
    };

    //gestione dell'errore o del cocktail non trovato
    if (errore.length > 0) {
        return (<h2>{errore}</h2>)
    }

    if(!idDrink){
        return(<h2>Cocktail non trovato!</h2>)
    }

    //array per gestione degli ingredienti
    const ingredienti = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    return(
        <div>
            {/*cambio della lingua da navbar*/}
            <Navbar
                onLinguaChange={function(l){
                setLingua(l);
            }}/>

            <div className="drink">
                <div className="cover">
                    <div className="left">
                        <img className="imgSingolo" src={drink.strDrinkThumb}/>
                        <h1 className="nomeSingolo">{drink.strDrink}</h1>
                        <h3 className="categoriaSingolo">{drink.strCategory}</h3>
                        <p className="bicchiereSingolo">Da servire in: <b>{drink.strGlass}</b></p>
                        {/*refresh solo se si è già in random*/}
                        {idDrink== 'random' ? <div className="random" onClick={function(){fetchDrink()}}>REFRESH</div> : ' '}
                    </div>

                    <div className="right">
                        
                        <h2 className="prep">Preparazione:</h2>
                        <p className="preparazione">{drink[lingua]}</p>

                        <h2 className="ingr">Ingredienti:</h2>
                        <ul className="listaIngr">
                            {
                                //map degli ingredienti da visualizzare con immagini relative e misure (se non ci sono inserisce "-")
                                ingredienti.map(function(indice){
                                    if(drink['strIngredient'+indice]){
                                        return (
                                            <Tilt key={indice} className="tilt">
                                                <li className="ingrediente">
                                                    
                                                    <div className="overlay">
                                                    
                                                        <img
                                                            className="imgIngr"
                                                            src={"https://www.thecocktaildb.com/images/ingredients/"+(drink['strIngredient'+indice])+"-medium.png"}
                                                            alt="ingrediente"
                                                        />
                                                        <h4 className="titoloIngr">{(drink['strIngredient'+indice])}</h4>
                                                        <span className="misure">
                                                            {(drink['strMeasure'+indice])||'-'}
                                                        </span>

                                                        <div className="aggiungi">
                                                            <div className="imgAggiungi"></div>
                                                        </div>
                                                    </div>
                                                    
                                                </li>
                                            </Tilt>
                                        )
                                    }else return null;
                                })
                            }
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drink;
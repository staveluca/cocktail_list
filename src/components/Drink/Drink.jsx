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
            {/*refresh solo se si è già in random*/}
            <Navbar onRefresh={fetchDrink}/>

            <div className="drink">
                <div className="cardSingolo">
                    <img className="imgSingolo" src={drink.strDrinkThumb}/>
                    <h1 className="nomeSingolo">{drink.strDrink}</h1>
                    <div className="altro">
                        <div className="categoriaSingolo">
                            <h3 className="categoria">Categoria:</h3>
                            <h3 className="cat">{drink.strCategory}</h3>
                        </div>
                        <div className="bicchiereSingolo">
                            <p className="bicchiere">Bicchiere:</p>
                            <p className="bicch">{drink.strGlass}</p>
                        </div>
                    </div>
                        
                    <div className="contLikeDrink">
                        <div className="likeDrink"></div>
                    </div>
                </div>

                <div className="right">
                    <h2 className="prep">Preparazione:</h2>
                    <p className="preparazione">{drink[lingua]}</p>

                    {/*cambio della lingua*/}
                    <div className="lingue">
                        <div
                            className={"italiano "+(lingua==='strInstructionsIT' ? ' ' : 'disable')}
                            onClick={function(){
                                setLingua("strInstructionsIT");
                            }}
                        ></div>

                        <div
                            className={"inglese "+(lingua==='strInstructions' ? ' ' : 'disable')}
                            onClick={function(){
                                setLingua("strInstructions");
                            }}
                        ></div>

                        <div
                            className={"tedesco "+(lingua==='strInstructionsDE' ? ' ' : 'disable')}
                            onClick={function(){
                                setLingua("strInstructionsDE");
                            }}
                        ></div>
                    </div>

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
    )
}

export default Drink;
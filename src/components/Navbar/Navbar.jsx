import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar({onLinguaChange}){
    const navigazione = useNavigate();
    const [lingua, setLingua] = useState("strInstructions");

    return(
        //Navbar con bottone back, selezione lingua e shop
        <div className="navbar">
            <div className="back" onClick={function (){
                navigazione("/");
            }}></div>

            <div className="lingue">
                <div className={"italiano "+(lingua==='strInstructionsIT' ? ' ' : 'disable')} onClick={function(){
                  setLingua("strInstructionsIT");
                  onLinguaChange("strInstructionsIT");
                  
                }}></div>

                <div className={"inglese "+(lingua==='strInstructions' ? ' ' : 'disable')} onClick={function(){
                    setLingua("strInstructions");
                    onLinguaChange("strInstructions");
                }}></div>

                <div className={"tedesco "+(lingua==='strInstructionsDE' ? ' ' : 'disable')} onClick={function(){
                    setLingua("strInstructionsDE");
                    onLinguaChange("strInstructionsDE");
                }}></div>
            </div>
            
            <div className="shop"></div>
        </div>
    )
}

export default Navbar;
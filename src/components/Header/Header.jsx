import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header(){
    const navigazione = useNavigate();

    return(
        <div className="headerContainer">
            <div className="logo">
                <h1 className="logoC">cocktail</h1>
                <h2 className="logoW">Wiki</h2>
            </div>

            <div className="buttons">
                <div className="contLike">
                    <div className="headerLike"></div>
                </div>
                <div className="contShop">
                    <div className="headerShop"></div>
                </div>

                <button className="random" onClick={function(){
                    navigazione("/drinks/random");
                }}>RANDOM</button>
            </div>
        </div>
    )
}

export default Header;
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Navbar({onRefresh}){
    const navigazione = useNavigate();

    const carrello = useSelector(state => state.carrello.ingredienti);

    return(
        //Navbar con bottone back, selezione lingua e shop
        <div className="navbar">
            <div className="back" onClick={function (){
                navigazione("/");
            }}></div>

            <div className="logo">
                <h1 className="logoC">cocktail</h1>
                <h2 className="logoW">Wiki</h2>
            </div>
            
            <div className="buttons">
                <div className="contLike">
                    <div className="headerLike"></div>
                </div>
                <div className="contShop">
                    <div className="headerShop">
                        <div className="toBuy">{carrello?.length}</div>
                    </div>
                </div>

                <div className="refresh" onClick={onRefresh}>
                    <div className="refreshIcon"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
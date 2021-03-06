import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Header(){
    const navigazione = useNavigate();

    const carrello = useSelector(state => state.carrello.ingredienti);
    const salvati = useSelector(state => state.salvati.salvati);

    return(
        <div className="headerContainer">
            <div className="logo">
                <h1 className="logoC">cocktail</h1>
                <h2 className="logoW">Wiki</h2>
            </div>

            <div className="buttons">
                <div className="contLike">
                    <div className="headerLike">
                        <div className={"toBuy "+ (salvati?.length>0 ? '' : 'zero')}>{salvati?.length}</div>
                    </div>
                </div>
                <div className="contShop">
                    <div className="headerShop">
                        <div className={"toBuy "+ (carrello?.length>0 ? '' : 'zero')}>{carrello?.length}</div>
                    </div>
                </div>

                <div className="random" onClick={function(){
                    navigazione("/drinks/random");
                }}>
                    <div className="randomIcon"></div>
                </div>
            </div>
        </div>
    )
}

export default Header;
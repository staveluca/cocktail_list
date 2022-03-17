import "./Navbar.css";

function Navbar(){
    return(
        //Navbar con bottone back, selezione lingua e shop
        <div className="navbar">
            <div className="back"></div>
            <div className="lingue">
                <div className="italiano"></div>
                <div className="inglese"></div>
                <div className="tedesco"></div>
            </div>
            <div className="shop"></div>
        </div>
    )
}

export default Navbar;
import Drink from '../components/Drink/Drink';
import { useParams } from "react-router-dom";

function Drinks(){
    //variabile parametro da utilizzare per prelevare l'id del Drink da visualizzare
    const params = useParams();
    return(
        <Drink
            idDrink={params.idDrink}
        />
    )
}

export default Drinks;
import Drink from '../components/Drink/Drink';
import { useParams } from "react-router-dom";

function Drinks(){
    const params = useParams();
    return(
        <Drink
            idDrink={params.idDrink}
        />
    )
}

export default Drinks;
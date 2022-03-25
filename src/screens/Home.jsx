import { useState } from 'react';
import "./Home.css";
import ListaCard from '../components/ListaCard/ListaCard';
import Input from '../components/Input/Input';
import Header from '../components/Header/Header';

function Home() {
    
  const [value, setValue] = useState('');

    return (
        <div className="Home">
            <Header />
            
            <div className="main">
                <Input
                    className="inpotHome"
                    onChange={function(val){
                        console.log(val);
                        setValue(val);
                    }}
                />
                <ListaCard
                    filtro={value}
                />
            </div>
            
            
        </div>
    )
}

export default Home;
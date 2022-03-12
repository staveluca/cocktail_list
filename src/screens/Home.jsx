import { useState } from 'react';
import ListaCard from '../components/ListaCard/ListaCard';
import Input from '../components/Input/Input';

function Home() {
    
  const [value, setValue] = useState('');

    return (
        <div className="Home">
            <Input
                onChange={function(val){
                console.log(val);
                setValue(val);
                }}
            />

            <ListaCard
                filtro={value}
            />
            
        </div>
    )
}

export default Home;
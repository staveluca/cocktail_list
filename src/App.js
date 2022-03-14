import './App.css';
import Home from './screens/Home';
import NotFound from "./screens/NotFound";
import { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  //variabile per gestione state del loading
  const [loading, setLoading] = useState(true);

  //effetto che setta la variabile a false dopo 2sec
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  //quando loading è true allora ritorna il div contenente la gif
  if (loading) {
    return (
      <div className="containerLoader">
        <div className='loader'></div>
      </div>
    );
  }

  return (
    //Strade percorribili con Home (lista intera), DrinkCard (dettagli drink) e NotFound (tutto il resto)
    <BrowserRouter>
      <Routes>
         <Route
          path="/" 
          element={<Home />} />

        <Route
          path="*"
          element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

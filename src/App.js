import './App.css';
import Home from './screens/Home';
import NotFound from "./screens/NotFound";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
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

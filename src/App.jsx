import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Exemplo01 from './pages/exemplos/ex-01';
import Exemplo2 from './pages/exemplos/ex-02';

function App() {

  return (
    <routes>
      <route path="/" element={<Home/>} />
      <route path="/exemplo/1" element={<Exemplo01/>} />
      <route path="/exemplo/2" element={<Exemplo02 />} />





    </routes>
  )
}
<pages />

export default App;
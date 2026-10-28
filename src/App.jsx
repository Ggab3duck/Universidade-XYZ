import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre"
import Contato from "./Pages/Contato"


function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Sobre" element={<Sobre />}></Route>
            <Route path="/Contato" element={<Contato />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App
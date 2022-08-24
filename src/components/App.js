import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Listado from "./Listado";
import Formulario from "./Formulario";
import "../style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="conteiner">
        <Header />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/list" exact element={<Listado />} />
          <Route path="/form" exact element={<Formulario />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

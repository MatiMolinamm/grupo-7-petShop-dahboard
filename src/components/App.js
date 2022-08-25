//APP
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ContentRow from "./ContentRow";
import ContentUsers from "./ContentUsers";
import ContentProducts from "./ContentProducts";
import DetailUser from "./DetailUser";
import DetailProduct from "./DetailProduct";
import PerrosList from "./PerrosList";
import GatosList from "./GatosList";
import AvesList from "./AvesList";
import PecesList from "./PecesList";
import NotFound from "./NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContentRow />} />
        <Route path="/users" exact element={<ContentUsers />} />
        <Route path="/detail/:idUser" exact element={<DetailUser />} />

        <Route path="/products" exact element={<ContentProducts />} />
        <Route
          path="/detailProduct/:idProduct"
          exact
          element={<DetailProduct />}
        />
        <Route path="/perros" exact element={<PerrosList />} />
        <Route path="/gatos" exact element={<GatosList />} />
        <Route path="/aves" exact element={<AvesList />} />
        <Route path="/peces" exact element={<PecesList />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

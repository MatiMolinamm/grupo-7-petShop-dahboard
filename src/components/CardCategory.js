import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardCategory = () => {
  const [categorias, setCategorias] = useState(4);
  const [perros, setPerros] = useState(0);
  const [gatos, setGatos] = useState(0);
  const [peces, setPeces] = useState(0);
  const [aves, setAves] = useState(0);

  fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => {
      setPerros(data.meta.countByCategory.perros);
      setGatos(data.meta.countByCategory.gatos);
      setPeces(data.meta.countByCategory.peces);
      setAves(data.meta.countByCategory.aves);
    });

  return (
    <div class="col-sm-6" style={{ width: "100%" }}>
      <div class="card">
        <div class="card-body">
          <h2>Categorias:</h2>
          <h5 class="card-title">Numero total:</h5>
          <p class="card-text">{categorias}</p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link to={"/perros"} className="btn btn-primary">
              Seccion Perros: {perros}
            </Link>
            <Link to={"/gatos"} className="btn btn-primary">
              Seccion Gatos: {gatos}
            </Link>
            <Link to={"/peces"} className="btn btn-primary">
              Seccion Peces: {peces}
            </Link>
            <Link to={"/aves"} className="btn btn-primary">
              Seccion Aves: {aves}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardCategory;

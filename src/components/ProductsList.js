import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/loader.css";

function ProductsList() {
  let [productos, setProductos] = useState([]);

  let apicall = (url, handler) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        handler(data);
      })
      .catch((e) => console.log(e));
  };
  let productosInDb = (data) => {
    setProductos(data.data);
  };
  useEffect(() => {
    if (productos.length === 0) {
      apicall("http://localhost:3000/api/products", productosInDb);
    }
  }, [productos]);

  if (productos.length == 0) {
    return <h1>Cargando...</h1>;
  } else {
    return (
      <div>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Categoria</th>
              <th scope="col">detalle</th>
            </tr>
          </thead>
          {productos.map((producto, i) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{producto.id}</td>
                  <td>{producto.name}</td>
                  <td>{producto.description}</td>
                  <td>{producto.section.name}</td>
                  <td>
                    <Link to={`/detailProduct/${producto.id}`}>Detalle</Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

export default ProductsList;

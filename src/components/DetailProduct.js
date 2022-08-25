import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const DetailProduct = () => {
  let id = useParams();
  let [producto, setProducto] = useState({
    id: "Cargando",
    name: "Cargando",
    description: "Cargando",
    price: "Cargando",
    packaging: "Cargando",
    amount: "Cargando",
    image: "Cargando",
    section_id: "Cargando",
    stock_id: "Cargando",
    oferta: "Cargando",
    section: {
      id: "Cargando",
      name: "Cargando",
    },
  });

  let apicall = (url, handler) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        console.log("data");
        handler(data);
      })
      .catch((e) => console.log(e));
  };
  let productoInDb = (data) => {
    console.log(data.id);
    setProducto({
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.price,
      packaging: data.packaging,
      amount: data.amount,
      image: data.image,
      section_id: data.section_id,
      stock_id: data.stock_id,
      oferta: data.oferta,
      section: {
        id: data.section.id,
        name: data.section.name,
      },
    });
  };
  useEffect(() => {
    if (producto.id == "Cargando") {
      apicall(
        "http://localhost:3000/api/products/" + id.idProduct,
        productoInDb
      );
    }
  }, [producto]);
  return (
    <div
      className="card"
      style={{ width: "10rem", backgroundColor: "mediumpurple" }}
    >
      <img
        src="/logo-PF-tipografico copy.png"
        className="card-img-top"
        alt="Img"
      />
      <div className="card-body">
        <h5 className="card-title">{producto.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Descripcion:{producto.description}</li>

        <li className="list-group-item">Precio: {producto.price}</li>
        <li className="list-group-item">Packaging: {producto.packaging}</li>

        <li className="list-group-item">Imagen: {producto.image}</li>
        <li className="list-group-item">
          En oferta: {producto.oferta === 1 ? "Si" : "No"}
        </li>
        <li className="list-group-item">Seccion: {producto.section.name}</li>
      </ul>
      <div className="card-body">
        <Link to="/products">
          <h5>Volver</h5>
        </Link>
      </div>
    </div>
  );
};

export default DetailProduct;

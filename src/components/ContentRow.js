import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import CardCategory from "./CardCategory";

function ContentRow() {
  let apicall = (url, handler) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        handler(data);
      })
      .catch((e) => console.log(e));
  };
  let [usuarios, setUsuarios] = useState(0);
  let [productos, setProductos] = useState(0);
  let usuariosInDb = (data) => {
    setUsuarios(data.meta.total);
  };
  let productosInDb = (data) => {
    setProductos(data.meta.count);
  };
  useEffect(() => {
    apicall("http://localhost:3000/api/products", productosInDb);
  }, [productos]);
  useEffect(() => {
    apicall("http://localhost:3000/api/users", usuariosInDb);
  }, [usuarios]);

  return (
    <div className="content-row">
      <Navbar />
      <br></br>

      <h1>PET SHOP</h1>

      <div className="content-row" style={{ display: "flex", padding: "5px" }}>
        <Card titulo="Usuarios" total={usuarios} url="/users" />
        <Card titulo="Productos" total={productos} url="/products" />
      </div>
      <CardCategory />
    </div>
  );
}

export default ContentRow;

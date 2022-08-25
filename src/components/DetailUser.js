import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Detail = () => {
  let id = useParams();
  let [usuario, setUsuario] = useState({
    avatar: "cargando",
    email: "cargando",
    id: "cargando",
    name: "cargando",
    phone: "cargando",
  });
  console.log("usuario1");
  console.log(usuario);
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
  let usuariosInDb = (data) => {
    console.log(data.id);
    setUsuario({
      avatar: data.avatar,
      email: data.email,
      id: data.id,
      name: data.name,
      phone: data.phone,
    });
  };
  useEffect(() => {
    if (usuario.avatar == "cargando") {
      apicall("http://localhost:3000/api/users/" + id.idUser, usuariosInDb);
    }
  }, [usuario]);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="/avatarAdminUser.png" className="card-img-top" alt="Img" />
      <div className="card-body">
        <h5 className="card-title">{usuario.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Email: {usuario.email}</li>
        <li className="list-group-item">Telefono: {usuario.phone}</li>
      </ul>
      <div className="card-body">
        <Link to="/users">Volver</Link>
      </div>
    </div>
  );
};

export default Detail;

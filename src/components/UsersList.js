import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/css/loader.css";

function UsersList() {
  let [usuarios, setUsuarios] = useState([]);
  let apicall = (url, handler) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        handler(data);
      })
      .catch((e) => console.log(e));
  };
  let usuariosInDb = (data) => {
    setUsuarios(data.data);
  };
  useEffect(() => {
    if (usuarios.length == 0) {
      apicall("http://localhost:3000/api/users", usuariosInDb);
    }

    console.log("usuarios actualizados");
  }, [usuarios]);

  if (usuarios.length == 0) {
    return <h1>cargando..</h1>;
  } else
    return (
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">id</th>
            <th scope="col">Nombre y Apellido</th>
            <th scope="col">email</th>
            <th scope="col">detalle</th>
          </tr>
        </thead>
        {usuarios.map((user, i) => {
          return (
            <tbody key={user.id}>
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/detail/${user.id}`}>Detalle</Link>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    );
}

export default UsersList;

import data from "../data";
import { Link } from "react-router-dom";
const Listado = () => {
  return (
    <div className="content-row">
      <br></br>
      <h2>Listado de usuarios</h2>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">Carrera</th>
            <th scope="col">hobbie</th>
          </tr>
        </thead>
        {data.map((user, i) => {
          return (
            <tbody key={i}>
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{user.nombre}</td>
                <td>{user.edad}</td>
                <td>{user.carrera}</td>
                <td>{user.hobbie}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <br></br>
      <button className="btn btn-primary editButton">
        <Link to="/">home</Link>
      </button>
    </div>
  );
};

export default Listado;

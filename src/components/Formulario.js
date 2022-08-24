import { useState } from "react";
import { Link } from "react-router-dom";

const Formulario = () => {
  let [dataForm, setDataForm] = useState({
    email: "default",
    nombre: "dedault",
    password: "default",
  });

  const inputChange = (e) => {
    console.log(e.target.value);
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
      [e.target.password]: e.target.value,
    });
  };
  const dataSend = (e) => {
    console.log(dataForm);
    e.preventDefault();
  };

  return (
    <div className="conteiner editForm">
      <form onSubmit={dataSend}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={inputChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            onChange={inputChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={inputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <br></br>
      <button className="btn btn-primary editButton">
        <Link to="/">home</Link>
      </button>
      <div className="editMain">
        <p>{dataForm ? dataForm.email : ""}</p>
        <p>{dataForm ? dataForm.nombre : ""}</p>
        <p>{dataForm ? dataForm.password : ""}</p>
      </div>
    </div>
  );
};

export default Formulario;
